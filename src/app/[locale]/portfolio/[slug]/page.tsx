'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { VideoObjectSchema, BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { projects, getProject } from '@/data/projects';
import { notFound } from 'next/navigation';

export default function CaseStudyPage({ params }: { params: { locale: string; slug: string } }) {
    const locale = useLocale();
    const isIt = locale === 'it';
    const project = getProject(params.slug);

    if (!project) return notFound();

    const title = isIt ? project.titleIt : project.titleEn;
    const catLabel = isIt ? project.categoryLabel.it : project.categoryLabel.en;

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
            {/* Schema Markup */}
            <BreadcrumbSchema items={[
                { name: 'Home', url: isIt ? '/' : '/en' },
                { name: 'Portfolio', url: isIt ? '/portfolio' : '/en/portfolio' },
                { name: title, url: `${isIt ? '' : '/en'}/portfolio/${project.slug}` },
            ]} />
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

            {/* Hero */}
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

            <section className="pt-8 pb-6 md:pt-12 md:pb-8 lg:pt-16 lg:pb-12">
                <div className="section-container">
                    <AnimateOnScroll>
                        <div className="flex items-baseline gap-4 mb-4">
                            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                                {catLabel}
                            </span>
                            <span className="text-xs text-text-muted">
                                {project.client} — {project.year}
                            </span>
                        </div>

                        <h1
                            className="font-bold text-text-primary mb-4"
                            style={{
                                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                                lineHeight: '1.08',
                                letterSpacing: '-0.025em',
                            }}
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
            <section className="pb-8 md:pb-12 lg:pb-20">
                <div className="section-container">
                    <AnimateOnScroll>
                        <div className="relative aspect-video rounded-lg overflow-hidden bg-surface">
                            <Image
                                src={project.heroImage}
                                alt={title}
                                fill
                                className="object-cover"
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Video */}
            {(project.videoEmbed || project.videoUrl) && (
                <section className="pb-8 md:pb-12 lg:pb-20">
                    <div className="section-container">
                        <AnimateOnScroll>
                            <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                                {project.videoType === 'youtube' && project.videoEmbed && (
                                    <iframe
                                        src={`https://www.youtube.com/embed/${project.videoEmbed}?rel=0&modestbranding=1`}
                                        className="absolute inset-0 w-full h-full"
                                        style={{ border: 0 }}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={title}
                                    />
                                )}
                                {project.videoType === 'vimeo' && project.videoEmbed && (
                                    <iframe
                                        src={`https://player.vimeo.com/video/${project.videoEmbed}?title=0&byline=0&portrait=0`}
                                        className="absolute inset-0 w-full h-full"
                                        style={{ border: 0 }}
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        allowFullScreen
                                        title={title}
                                    />
                                )}
                                {project.videoType === 'mp4' && project.videoUrl && (
                                    <video
                                        controls
                                        playsInline
                                        preload="metadata"
                                        className="w-full h-full"
                                    >
                                        <source src={project.videoUrl} type="video/mp4" />
                                    </video>
                                )}
                            </div>
                        </AnimateOnScroll>
                    </div>
                </section>
            )}

            {/* Case study sections */}
            <section className="pb-8 md:pb-12 lg:pb-20">
                <div className="section-container">
                    <div className="max-w-3xl">
                        {sections.map((section, i) => (
                            <AnimateOnScroll key={i} delay={i * 60}>
                                <div className="py-8 border-t border-border">
                                    <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-4">
                                        {isIt ? section.labelIt : section.labelEn}
                                    </h2>
                                    <p className="text-text-secondary text-sm md:text-base leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: isIt ? section.contentIt : section.contentEn }}
                                    />
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Images */}
            {project.images.length > 0 && (
                <section className="pb-8 md:pb-12 lg:pb-20">
                    <div className="section-container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                            {project.images.map((img, i) => (
                                <AnimateOnScroll key={i} delay={i * 80}>
                                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-surface">
                                        <Image
                                            src={img.src}
                                            alt={isIt ? img.alt.it : img.alt.en}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Tools + links */}
            <section className="pb-8 md:pb-12 lg:pb-20 border-t border-border">
                <div className="section-container pt-8">
                    <div className="flex flex-wrap gap-3 mb-6">
                        {project.tools.map((tool) => (
                            <span
                                key={tool}
                                className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider
                           bg-surface border border-border rounded-sm text-text-muted"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>

                    {project.imdbLink && (
                        <a
                            href={project.imdbLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-accent font-semibold hover:text-text-primary transition-colors"
                        >
                            {isIt ? 'Vedi su IMDB' : 'View on IMDB'} ↗
                        </a>
                    )}
                </div>
            </section>

            {/* Nav prev/next */}
            <section className="py-8 md:py-12 lg:py-16 border-t border-border">
                <div className="section-container">
                    <div className="flex items-center justify-between">
                        {prev ? (
                            <Link
                                href={`${isIt ? '' : '/en'}/portfolio/${prev.slug}`}
                                className="group flex items-center gap-3 text-sm text-text-muted hover:text-text-primary transition-colors"
                            >
                                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                                <span>{isIt ? prev.titleIt : prev.titleEn}</span>
                            </Link>
                        ) : <div />}
                        {next ? (
                            <Link
                                href={`${isIt ? '' : '/en'}/portfolio/${next.slug}`}
                                className="group flex items-center gap-3 text-sm text-text-muted hover:text-text-primary transition-colors"
                            >
                                <span>{isIt ? next.titleIt : next.titleEn}</span>
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        ) : <div />}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-14 md:py-20 lg:py-28 border-t border-border bg-surface overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,170,68,0.04)_0%,_transparent_60%)]" />
                <div className="relative section-container text-center">
                    <AnimateOnScroll>
                        <h2
                            className="font-bold text-text-primary mb-6"
                            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
                        >
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
        </article>
    );
}