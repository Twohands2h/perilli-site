'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import SafeImage from '@/components/SafeImage';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { projects, categories } from '@/data/projects';

export default function PortfolioPage() {
  const locale = useLocale();
  const isIt = locale === 'it';
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

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
              Portfolio
            </h1>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl">
              {isIt
                ? 'Questa è una selezione dei progetti a cui tengo di più, un mix di sfide tecniche e narrazioni creative. Ogni lavoro è il risultato di una stretta collaborazione con agenzie, registi e fotografi per trasformare una visione in realtà.'
                : 'This is a selection of the projects I care most about, a mix of technical challenges and creative narratives. Each work is the result of close collaboration with agencies, directors and photographers to transform a vision into reality.'}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8 md:pb-12 lg:pb-16">
        <div className="section-container">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
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
            {filtered.map((project, i) => (
              <AnimateOnScroll key={project.slug} delay={i * 80}>
                <Link
                  href={`${isIt ? '' : '/en'}/portfolio/${project.slug}`}
                  className="group block relative aspect-[16/10] rounded-lg overflow-hidden bg-surface"
                >
                  {/* Image */}
                  <SafeImage
                    src={project.thumbnail}
                    alt={isIt ? project.thumbnailAlt.it : project.thumbnailAlt.en}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent
                                  opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 lg:p-8">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2 block">
                      {isIt ? project.categoryLabel.it : project.categoryLabel.en}
                    </span>
                    <h2 className="text-lg md:text-xl font-bold text-text-primary mb-1">
                      {isIt ? project.titleIt : project.titleEn}
                    </h2>
                    <p className="text-xs text-text-muted">
                      {project.client} — {project.year}
                    </p>
                  </div>

                  {/* Hover arrow */}
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