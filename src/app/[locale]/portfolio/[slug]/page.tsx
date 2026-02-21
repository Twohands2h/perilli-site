'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useCallback, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Calendar, MessageCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { VideoObjectSchema, BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import SafeImage from '@/components/SafeImage';
import VideoThumbnail from '@/components/VideoThumbnail';
import { projects, getProject, getRelatedProjects, type ContentBlock } from '@/data/projects';
import { notFound } from 'next/navigation';

/* ───────── Lightbox ───────── */
function Lightbox({
    images,
    startIndex,
    onClose,
}: {
    images: { src: string; alt: string }[];
    startIndex: number;
    onClose: () => void;
}) {
    const [index, setIndex] = useState(startIndex);
    const hasMultiple = images.length > 1;

    const goNext = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);
    const goPrev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight' && hasMultiple) goNext();
            if (e.key === 'ArrowLeft' && hasMultiple) goPrev();
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKey);
        };
    }, [onClose, goNext, goPrev, hasMultiple]);

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={onClose}
        >
            {/* Close */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
                aria-label="Close"
            >
                <X size={28} />
            </button>

            {/* Counter */}
            {hasMultiple && (
                <span className="absolute top-5 left-1/2 -translate-x-1/2 text-xs text-white/50 font-mono">
                    {index + 1} / {images.length}
                </span>
            )}

            {/* Prev */}
            {hasMultiple && (
                <button
                    onClick={(e) => { e.stopPropagation(); goPrev(); }}
                    className="absolute left-3 md:left-6 z-10 p-2 text-white/50 hover:text-white transition-colors"
                    aria-label="Previous"
                >
                    <ChevronLeft size={36} />
                </button>
            )}

            {/* Image */}
            <div
                className="relative w-[90vw] h-[85vh] max-w-6xl"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={images[index].src}
                    alt={images[index].alt}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    priority
                />
            </div>

            {/* Next */}
            {hasMultiple && (
                <button
                    onClick={(e) => { e.stopPropagation(); goNext(); }}
                    className="absolute right-3 md:right-6 z-10 p-2 text-white/50 hover:text-white transition-colors"
                    aria-label="Next"
                >
                    <ChevronRight size={36} />
                </button>
            )}
        </div>
    );
}

/* ───────── Lightbox context for collecting all images ───────── */
function useLightbox() {
    const [isOpen, setIsOpen] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    const allImages = useRef<{ src: string; alt: string }[]>([]);

    const register = useCallback((src: string, alt: string): number => {
        const existing = allImages.current.findIndex((img) => img.src === src);
        if (existing >= 0) return existing;
        allImages.current.push({ src, alt });
        return allImages.current.length - 1;
    }, []);

    const open = useCallback((idx: number) => {
        setStartIndex(idx);
        setIsOpen(true);
    }, []);

    const close = useCallback(() => setIsOpen(false), []);

    return { isOpen, startIndex, images: allImages.current, register, open, close };
}

/* ───────── Clickable image wrapper ───────── */
function LightboxImage({
    src, alt, fill: fillProp, className, sizes, priority, lightbox,
}: {
    src: string;
    alt: string;
    fill?: boolean;
    className?: string;
    sizes?: string;
    priority?: boolean;
    lightbox: ReturnType<typeof useLightbox>;
}) {
    const idx = lightbox.register(src, alt);
    return (
        <div className="cursor-zoom-in" onClick={() => lightbox.open(idx)}>
            <SafeImage
                src={src}
                alt={alt}
                fill={fillProp}
                className={className}
                sizes={sizes}
                priority={priority}
            />
        </div>
    );
}

/* ───────── Video Manager: playing one stops all others ───────── */
function useVideoManager() {
    const iframesRef = useRef<Set<HTMLIFrameElement>>(new Set());
    const videosRef = useRef<Set<HTMLVideoElement>>(new Set());

    const registerIframe = useCallback((el: HTMLIFrameElement | null) => {
        if (el) iframesRef.current.add(el);
    }, []);

    const registerVideo = useCallback((el: HTMLVideoElement | null) => {
        if (el) videosRef.current.add(el);
    }, []);

    const stopOthers = useCallback((currentEl: HTMLElement) => {
        videosRef.current.forEach((v) => {
            if (v !== currentEl && !v.paused) v.pause();
        });
        iframesRef.current.forEach((iframe) => {
            if (iframe !== currentEl) {
                try {
                    iframe.contentWindow?.postMessage(
                        JSON.stringify({ event: 'command', func: 'pauseVideo', args: '' }), '*'
                    );
                    iframe.contentWindow?.postMessage(
                        JSON.stringify({ method: 'pause' }), '*'
                    );
                } catch { /* cross-origin */ }
            }
        });
    }, []);

    return { registerIframe, registerVideo, stopOthers };
}

/* ───────── Content Block Renderer ───────── */
function BlockRenderer({
    block, locale, vm, lightbox,
}: {
    block: ContentBlock;
    locale: string;
    vm: ReturnType<typeof useVideoManager>;
    lightbox: ReturnType<typeof useLightbox>;
}) {
    const isIt = locale === 'it';

    switch (block.type) {
        case 'text':
            return (
                <div className="section-container">
                    <div className="max-w-3xl">
                        <div
                            className="text-text-secondary text-sm md:text-base leading-relaxed [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2"
                            dangerouslySetInnerHTML={{ __html: isIt ? block.textIt : block.textEn }}
                        />
                    </div>
                </div>
            );

        case 'image':
            return (
                <div className={block.fullWidth ? 'w-full' : 'section-container'}>
                    <div className={`relative ${block.fullWidth ? 'aspect-[21/9]' : 'aspect-video'} overflow-hidden ${block.fullWidth ? '' : 'rounded-lg'} bg-surface`}>
                        <LightboxImage
                            src={block.src}
                            alt={isIt ? block.alt.it : block.alt.en}
                            fill
                            className="object-cover"
                            sizes="100vw"
                            lightbox={lightbox}
                        />
                    </div>
                </div>
            );

        case 'gallery': {
            const cols = block.columns || 2;
            return (
                <div className="section-container">
                    <div className={`grid grid-cols-1 ${cols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-3 md:gap-4`}>
                        {block.images.map((img, i) => (
                            <div key={i} className="relative aspect-[16/10] rounded-lg overflow-hidden bg-surface">
                                <LightboxImage
                                    src={img.src}
                                    alt={isIt ? img.alt.it : img.alt.en}
                                    fill
                                    className="object-cover"
                                    sizes={cols === 3 ? '(max-width: 768px) 100vw, 33vw' : '(max-width: 768px) 100vw, 50vw'}
                                    lightbox={lightbox}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        case 'video': {
            const iframeSrc = block.platform === 'youtube'
                ? `https://www.youtube.com/embed/${block.embedId}?rel=0&modestbranding=1&enablejsapi=1`
                : `https://player.vimeo.com/video/${block.embedId}?title=0&byline=0&portrait=0`;

            return (
                <div className="section-container">
                    {block.title && (
                        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">{block.title}</p>
                    )}
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                        <iframe
                            ref={vm.registerIframe}
                            src={iframeSrc}
                            className="absolute inset-0 w-full h-full"
                            style={{ border: 0 }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                            allowFullScreen
                            title={block.title || 'Video'}
                        />
                    </div>
                </div>
            );
        }

        case 'video-mp4':
            return (
                <div className="section-container">
                    {block.title && (
                        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">{block.title}</p>
                    )}
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                        <video
                            ref={vm.registerVideo}
                            controls
                            playsInline
                            preload="metadata"
                            poster={block.poster}
                            className="w-full h-full"
                            onPlay={(e) => vm.stopOthers(e.currentTarget)}
                        >
                            <source src={block.url} type="video/mp4" />
                        </video>
                    </div>
                </div>
            );

        case 'video-loop':
            return (
                <div className="section-container">
                    {block.title && (
                        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">{block.title}</p>
                    )}
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            poster={block.poster}
                            className="w-full h-full object-cover"
                        >
                            <source src={block.url} type="video/mp4" />
                        </video>
                    </div>
                </div>
            );

        default:
            return null;
    }
}

/* ───────── Main Page ───────── */
export default function CaseStudyPage({ params }: { params: { locale: string; slug: string } }) {
    const locale = useLocale();
    const isIt = locale === 'it';
    const project = getProject(params.slug);
    const vm = useVideoManager();
    const lightbox = useLightbox();

    if (!project) return notFound();

    const title = isIt ? project.titleIt : project.titleEn;
    const catLabel = isIt ? project.categoryLabel.it : project.categoryLabel.en;
    const hasBlocks = project.contentBlocks && project.contentBlocks.length > 0;

    // Next/prev
    const idx = projects.findIndex((p) => p.slug === project.slug);
    const prev = idx > 0 ? projects[idx - 1] : null;
    const next = idx < projects.length - 1 ? projects[idx + 1] : null;

    const sections = [
        { labelIt: 'Il Briefing', labelEn: 'The Brief', contentIt: project.briefingIt, contentEn: project.briefingEn },
        { labelIt: 'La Sfida', labelEn: 'The Challenge', contentIt: project.challengeIt, contentEn: project.challengeEn },
        { labelIt: 'La Soluzione', labelEn: 'The Solution', contentIt: project.solutionIt, contentEn: project.solutionEn },
        { labelIt: 'Il Risultato', labelEn: 'The Result', contentIt: project.resultIt, contentEn: project.resultEn },
    ];

    return (
        <article>
            {/* Schema */}
            <BreadcrumbSchema items={[
                { name: 'Home', url: isIt ? '/' : '/en' },
                { name: 'Portfolio', url: isIt ? '/portfolio' : '/en/portfolio' },
                { name: title, url: `${isIt ? '' : '/en'}/portfolio/${project.slug}` },
            ]} />
            {/* VideoObject from legacy fields */}
            {(project.videoEmbed || project.videoUrl) && (
                <VideoObjectSchema
                    name={title}
                    description={isIt ? project.briefingIt : project.briefingEn}
                    thumbnailUrl={`https://pieroperilli.com${project.thumbnail}`}
                    uploadDate={project.year}
                    contentUrl={project.videoUrl}
                    embedUrl={project.videoEmbed
                        ? (project.videoType === 'youtube'
                            ? `https://www.youtube.com/embed/${project.videoEmbed}`
                            : `https://player.vimeo.com/video/${project.videoEmbed}`)
                        : undefined}
                />
            )}
            {/* VideoObject from contentBlocks */}
            {project.contentBlocks?.filter((b): b is Extract<ContentBlock, { type: 'video' }> => b.type === 'video').map((block, i) => (
                <VideoObjectSchema
                    key={`video-schema-${i}`}
                    name={block.title || `${title} — Video ${i + 1}`}
                    description={isIt ? project.briefingIt : project.briefingEn}
                    thumbnailUrl={`https://pieroperilli.com${project.thumbnail}`}
                    uploadDate={project.year}
                    embedUrl={block.platform === 'youtube'
                        ? `https://www.youtube.com/embed/${block.embedId}`
                        : `https://player.vimeo.com/video/${block.embedId}`}
                />
            ))}

            {/* Sticky breadcrumb */}
            <div className="sticky top-16 md:top-20 z-40 bg-background/90 backdrop-blur-md border-b border-border/30">
                <div className="section-container py-3">
                    <Link
                        href={isIt ? '/portfolio' : '/en/portfolio'}
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-muted hover:text-accent transition-colors"
                    >
                        <ArrowLeft size={14} />
                        {isIt ? 'Torna al portfolio' : 'Back to portfolio'}
                    </Link>
                </div>
            </div>

            {/* Header */}
            <section className="pt-8 pb-6 md:pt-12 md:pb-8 lg:pt-16 lg:pb-12">
                <div className="section-container">
                    <AnimateOnScroll>
                        <div className="flex items-baseline gap-4 mb-4">
                            <span className="text-xs font-semibold uppercase tracking-wider text-accent">{catLabel}</span>
                            <span className="text-xs text-text-muted">{project.client} — {project.year}</span>
                        </div>
                        <h1
                            className="font-bold text-text-primary mb-4"
                            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.08', letterSpacing: '-0.025em' }}
                        >
                            {title}
                        </h1>
                        <p className="text-sm text-text-secondary">
                            <strong className="text-text-primary">{isIt ? 'Ruolo:' : 'Role:'}</strong> {project.role}
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Hero image */}
            <section className="pb-6 md:pb-10 lg:pb-14">
                <div className="section-container">
                    <AnimateOnScroll>
                        <div className="relative aspect-video rounded-lg overflow-hidden bg-surface">
                            <LightboxImage src={project.heroImage} alt={title} fill className="object-cover" sizes="100vw" priority lightbox={lightbox} />
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Case study text */}
            <section className="pb-6 md:pb-10 lg:pb-14">
                <div className="section-container">
                    <div className="max-w-3xl">
                        {sections.map((s, i) => (
                            <AnimateOnScroll key={i} delay={i * 60}>
                                <div className="py-6 md:py-8 border-t border-border">
                                    <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-4">
                                        {isIt ? s.labelIt : s.labelEn}
                                    </h2>
                                    <p className="text-text-secondary text-sm md:text-base leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: isIt ? s.contentIt : s.contentEn }}
                                    />
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Content Blocks (Behance-style) ── */}
            {hasBlocks ? (
                <section className="space-y-6 md:space-y-8 lg:space-y-10 pb-8 md:pb-12 lg:pb-20">
                    {project.contentBlocks!.map((block, i) => (
                        <AnimateOnScroll key={i} delay={i * 40}>
                            <BlockRenderer block={block} locale={locale} vm={vm} lightbox={lightbox} />
                        </AnimateOnScroll>
                    ))}
                </section>
            ) : (
                <>
                    {/* Legacy single video */}
                    {(project.videoEmbed || project.videoUrl) && (
                        <section className="pb-8 md:pb-12 lg:pb-20">
                            <div className="section-container">
                                <AnimateOnScroll>
                                    <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                                        {project.videoType === 'youtube' && project.videoEmbed && (
                                            <iframe
                                                src={`https://www.youtube.com/embed/${project.videoEmbed}?rel=0&modestbranding=1`}
                                                className="absolute inset-0 w-full h-full" style={{ border: 0 }}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen title={title}
                                            />
                                        )}
                                        {project.videoType === 'vimeo' && project.videoEmbed && (
                                            <iframe
                                                src={`https://player.vimeo.com/video/${project.videoEmbed}?title=0&byline=0&portrait=0`}
                                                className="absolute inset-0 w-full h-full" style={{ border: 0 }}
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowFullScreen title={title}
                                            />
                                        )}
                                        {project.videoType === 'mp4' && project.videoUrl && (
                                            <video controls playsInline preload="metadata" className="w-full h-full">
                                                <source src={project.videoUrl} type="video/mp4" />
                                            </video>
                                        )}
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </section>
                    )}
                    {/* Legacy images */}
                    {project.images.length > 0 && (
                        <section className="pb-8 md:pb-12 lg:pb-20">
                            <div className="section-container">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                                    {project.images.map((img, i) => (
                                        <AnimateOnScroll key={i} delay={i * 80}>
                                            <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-surface">
                                                <LightboxImage src={img.src} alt={isIt ? img.alt.it : img.alt.en} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" lightbox={lightbox} />
                                            </div>
                                        </AnimateOnScroll>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}
                </>
            )}

            {/* Tools */}
            <section className="pb-8 md:pb-12 lg:pb-20 border-t border-border">
                <div className="section-container pt-8">
                    <div className="flex flex-wrap gap-3 mb-6">
                        {project.tools.map((tool) => (
                            <span key={tool} className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-surface border border-border rounded-sm text-text-muted">
                                {tool}
                            </span>
                        ))}
                    </div>
                    {project.imdbLink && (
                        <a href={project.imdbLink} target="_blank" rel="noopener noreferrer" className="text-sm text-accent font-semibold hover:text-text-primary transition-colors">
                            {isIt ? 'Vedi su IMDB' : 'View on IMDB'} ↗
                        </a>
                    )}
                </div>
            </section>

            {/* Prev/Next — sticky bottom */}
            <div className="sticky bottom-0 z-40 bg-background/90 backdrop-blur-md border-t border-border/30">
                <div className="section-container py-3">
                    <div className="flex items-center justify-between">
                        {prev ? (
                            <Link href={`${isIt ? '' : '/en'}/portfolio/${prev.slug}`} className="group flex items-center gap-2 text-xs text-text-muted hover:text-accent transition-colors">
                                <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
                                <span className="hidden sm:inline truncate max-w-[200px]">{isIt ? prev.titleIt : prev.titleEn}</span>
                                <span className="sm:hidden">{isIt ? 'Prec.' : 'Prev'}</span>
                            </Link>
                        ) : <div />}
                        {next ? (
                            <Link href={`${isIt ? '' : '/en'}/portfolio/${next.slug}`} className="group flex items-center gap-2 text-xs text-text-muted hover:text-accent transition-colors">
                                <span className="hidden sm:inline truncate max-w-[200px] text-right">{isIt ? next.titleIt : next.titleEn}</span>
                                <span className="sm:hidden">{isIt ? 'Succ.' : 'Next'}</span>
                                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        ) : <div />}
                    </div>
                </div>
            </div>

            {/* Related Projects */}
            {(() => {
                const related = getRelatedProjects(project.slug, 3);
                if (related.length === 0) return null;
                return (
                    <section className="py-14 md:py-20 lg:py-24 border-t border-border">
                        <div className="section-container">
                            <AnimateOnScroll>
                                <h2 className="font-bold text-text-primary mb-8 md:mb-12" style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}>
                                    {isIt ? 'Progetti correlati' : 'Related projects'}
                                </h2>
                            </AnimateOnScroll>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                                {related.map((rel, i) => (
                                    <AnimateOnScroll key={rel.slug} delay={i * 100}>
                                        <Link
                                            href={`${isIt ? '' : '/en'}/portfolio/${rel.slug}`}
                                            className="group block relative aspect-[16/10] rounded-lg overflow-hidden bg-surface"
                                        >
                                            {rel.thumbnailVideo ? (
                                                <VideoThumbnail
                                                    src={rel.thumbnail}
                                                    videoSrc={rel.thumbnailVideo}
                                                    alt={isIt ? rel.thumbnailAlt.it : rel.thumbnailAlt.en}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                />
                                            ) : (
                                                <SafeImage
                                                    src={rel.thumbnail}
                                                    alt={isIt ? rel.thumbnailAlt.it : rel.thumbnailAlt.en}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                />
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                                                <span className="text-[10px] font-semibold uppercase tracking-wider text-accent mb-1.5 block">
                                                    {isIt ? rel.categoryLabel.it : rel.categoryLabel.en}
                                                </span>
                                                <h3 className="text-sm md:text-base font-bold text-text-primary">
                                                    {isIt ? rel.titleIt : rel.titleEn}
                                                </h3>
                                            </div>
                                        </Link>
                                    </AnimateOnScroll>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            })()}

            {/* CTA */}
            <section className="relative py-14 md:py-20 lg:py-28 border-t border-border bg-surface overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,170,68,0.04)_0%,_transparent_60%)]" />
                <div className="relative section-container text-center">
                    <AnimateOnScroll>
                        <h2 className="font-bold text-text-primary mb-6" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
                            {isIt ? 'Hai un progetto simile?' : 'Have a similar project?'}
                        </h2>
                        <p className="text-text-secondary max-w-xl mx-auto mb-10 text-sm md:text-base">
                            {isIt
                                ? 'Raccontami di cosa hai bisogno. Leggo personalmente ogni richiesta e rispondo in tempi brevi.'
                                : 'Tell me what you need. I personally read every request and respond promptly.'}
                        </p>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={100}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href={isIt ? '/contatti' : '/en/contact'} className="btn-primary">
                                {isIt ? 'Parliamone' : "Let\u0027s talk"}
                                <ArrowRight size={16} />
                            </Link>
                            <a href="https://calendly.com/pieroperilli-info/30min" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                                <Calendar size={16} />
                                {isIt ? 'Prenota una call' : 'Book a call'}
                            </a>
                            <a href="https://wa.me/393920187759" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                                <MessageCircle size={16} />
                                WhatsApp
                            </a>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Lightbox */}
            {lightbox.isOpen && (
                <Lightbox
                    images={lightbox.images}
                    startIndex={lightbox.startIndex}
                    onClose={lightbox.close}
                />
            )}
        </article>
    );
}
