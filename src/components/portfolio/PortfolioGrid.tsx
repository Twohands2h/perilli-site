'use client';

import { useState, useRef } from 'react';
import { useLocale } from 'next-intl';
import SafeImage from '@/components/SafeImage';
import VideoThumbnail from '@/components/VideoThumbnail';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import type { Project } from '@/data/projects';

/**
 * Scheda "speciale" che non è un case study: porta a una pagina propria
 * (es. il cortometraggio /stanza-247). Non entra in `projects`, quindi niente
 * /portfolio/[slug], sitemap o prev/next: compare solo in questa griglia.
 */
export interface PortfolioFeature {
  key: string;
  href: { it: string; en: string };
  thumbnail: string;
  thumbnailAlt: { it: string; en: string };
  category: string;
  categoryLabel: { it: string; en: string };
  title: { it: string; en: string };
  meta: { it: string; en: string };
  position: number;
}

type GridItem = {
  key: string;
  href: string;
  thumbnail: string;
  thumbnailVideo?: string;
  alt: string;
  label: string;
  title: string;
  meta: string;
};

interface CategoryFilter {
  key: string;
  labelIt: string;
  labelEn: string;
}

export default function PortfolioGrid({
  projects,
  categories,
  features = [],
}: {
  projects: Project[];
  categories: readonly CategoryFilter[];
  features?: PortfolioFeature[];
}) {
  const locale = useLocale();
  const isIt = locale === 'it';
  const [activeFilter, setActiveFilter] = useState('all');
  const filtersRef = useRef<HTMLElement>(null);

  const handleFilter = (key: string) => {
    setActiveFilter(key);
    filtersRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const items: GridItem[] = filtered.map((project) => ({
    key: project.slug,
    href: `${isIt ? '' : '/en'}/portfolio/${project.slug}`,
    thumbnail: project.thumbnail,
    thumbnailVideo: project.thumbnailVideo,
    alt: isIt ? project.thumbnailAlt.it : project.thumbnailAlt.en,
    label: isIt ? project.categoryLabel.it : project.categoryLabel.en,
    title: isIt ? project.titleIt : project.titleEn,
    meta: `${project.client} — ${project.year}`,
  }));
  for (const f of features) {
    if (activeFilter !== 'all' && f.category !== activeFilter) continue;
    items.splice(Math.min(f.position, items.length), 0, {
      key: f.key,
      href: isIt ? f.href.it : f.href.en,
      thumbnail: f.thumbnail,
      alt: isIt ? f.thumbnailAlt.it : f.thumbnailAlt.en,
      label: isIt ? f.categoryLabel.it : f.categoryLabel.en,
      title: isIt ? f.title.it : f.title.en,
      meta: isIt ? f.meta.it : f.meta.en,
    });
  }

  return (
    <article>
      {/* Hero */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12 lg:pt-40 lg:pb-16">
        <div className="section-container">
          <AnimateOnScroll>
            <h1
              className="font-bold text-text-primary mb-5"
              style={{
                fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
                lineHeight: '1.05',
                letterSpacing: '-0.025em',
              }}
            >
              {isIt
                ? 'Portfolio — VFX, Motion Graphics e Post Produzione a Roma'
                : 'Portfolio — VFX, Motion Graphics and Post Production in Rome'}
            </h1>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mb-4">
              {isIt
                ? 'Questa è una selezione dei progetti a cui tengo di più, un mix di sfide tecniche e narrazioni creative. Ogni lavoro è il risultato di una stretta collaborazione con agenzie, registi e fotografi per trasformare una visione in realtà.'
                : 'This is a selection of the projects I care most about, a mix of technical challenges and creative narratives. Each work is the result of close collaboration with agencies, directors and photographers to transform a vision into reality.'}
            </p>
            <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-2xl">
              {isIt
                ? 'Dai VFX per il cinema alla motion graphics per campagne pubblicitarie, dall\'animazione 3D di prodotto al color grading in DaVinci Resolve — ogni caso studio racconta il briefing, la sfida tecnica, la soluzione e il risultato finale.'
                : 'From VFX for cinema to motion graphics for advertising campaigns, from 3D product animation to color grading in DaVinci Resolve — each case study covers the briefing, technical challenge, solution and final result.'}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Filters */}
      <section ref={filtersRef} className="pb-8 md:pb-12 lg:pb-16 scroll-mt-24">
        <div className="section-container">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => handleFilter(cat.key)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] rounded-sm
                           transition-all duration-300 border
                           ${activeFilter === cat.key
                    ? 'bg-accent text-background border-accent'
                    : 'bg-transparent text-text-muted border-border hover:border-text-secondary hover:text-text-secondary'
                  }`}
              >
                {isIt ? cat.labelIt : cat.labelEn}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-14 md:pb-20 lg:pb-28">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
            {items.map((item, i) => (
              <AnimateOnScroll key={item.key} delay={i * 80}>
                <Link
                  href={item.href}
                  className="group block relative aspect-[16/10] rounded-lg overflow-hidden bg-surface"
                >
                  {item.thumbnailVideo ? (
                    <VideoThumbnail
                      src={item.thumbnail}
                      videoSrc={item.thumbnailVideo}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <SafeImage
                      src={item.thumbnail}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent
                                  opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 lg:p-8">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2 block">
                      {item.label}
                    </span>
                    <h2 className="text-lg md:text-xl font-bold text-text-primary mb-1">
                      {item.title}
                    </h2>
                    <p className="text-xs text-text-muted">
                      {item.meta}
                    </p>
                  </div>

                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-text-primary/20
                                  flex items-center justify-center opacity-0 group-hover:opacity-100
                                  translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-text-primary">
                      <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}