'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import SafeImage from '@/components/SafeImage';
import { projects } from '@/data/projects';

// 4 strategic picks: brand name, 3D product, VFX cinema, AI
const FEATURED_SLUGS = ['gucci-kids', 'guerciotti-60-anni', 'along-came-ruby', 'roche-jingle-ai'];

export default function PortfolioSection() {
    const locale = useLocale();
    const isIt = locale === 'it';

    const featured = FEATURED_SLUGS.map((slug) => projects.find((p) => p.slug === slug)!).filter(Boolean);

    return (
        <section className="py-14 md:py-20 lg:py-24 border-t border-border">
            <div className="section-container">
                <AnimateOnScroll>
                    <div className="flex items-end justify-between mb-8 md:mb-12">
                        <div>
                            <p className="section-title">{isIt ? 'Progetti selezionati' : 'Selected work'}</p>
                            <h2
                                className="font-bold text-text-primary mt-3"
                                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}
                            >
                                {isIt ? 'Dal concept al risultato' : 'From concept to result'}
                            </h2>
                        </div>
                        <Link
                            href={isIt ? '/portfolio' : '/en/portfolio'}
                            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-text-primary transition-colors whitespace-nowrap"
                        >
                            {isIt ? 'Vedi tutto' : 'View all'}
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </AnimateOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {featured.map((project, i) => {
                        const title = isIt ? project.titleIt : project.titleEn;
                        const catLabel = isIt ? project.categoryLabel.it : project.categoryLabel.en;

                        return (
                            <AnimateOnScroll key={project.slug} delay={i * 80}>
                                <Link
                                    href={`${isIt ? '' : '/en'}/portfolio/${project.slug}`}
                                    className="group block relative aspect-[16/10] rounded-lg overflow-hidden bg-surface"
                                >
                                    <SafeImage
                                        src={project.heroImage}
                                        alt={isIt ? project.thumbnailAlt.it : project.thumbnailAlt.en}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                                        <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                                            {catLabel}
                                        </span>
                                        <h3 className="text-text-primary font-bold text-lg md:text-xl mt-1 leading-tight">
                                            {title}
                                        </h3>
                                        <span className="text-xs text-text-muted mt-1 block">
                                            {project.client} — {project.year}
                                        </span>
                                    </div>

                                    {/* Hover arrow */}
                                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent/0 group-hover:bg-accent/90 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                                        <ArrowRight size={14} className="text-background" />
                                    </div>
                                </Link>
                            </AnimateOnScroll>
                        );
                    })}
                </div>

                {/* Mobile CTA */}
                <AnimateOnScroll delay={350}>
                    <div className="mt-8 text-center md:hidden">
                        <Link
                            href={isIt ? '/portfolio' : '/en/portfolio'}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-text-primary transition-colors"
                        >
                            {isIt ? 'Vedi tutto il portfolio' : 'View full portfolio'}
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}
