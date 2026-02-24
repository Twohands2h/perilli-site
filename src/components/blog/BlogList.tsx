'use client';

import { useState, useRef } from 'react';
import { useLocale } from 'next-intl';
import SafeImage from '@/components/SafeImage';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import type { BlogPost } from '@/data/posts';
import { getPostSlug } from '@/lib/data';

const categories = [
  { key: 'all', labelIt: 'Tutti', labelEn: 'All' },
  { key: 'vfx', labelIt: 'VFX', labelEn: 'VFX' },
  { key: 'post', labelIt: 'Post Produzione', labelEn: 'Post Production' },
  { key: 'motion', labelIt: 'Motion Graphics', labelEn: 'Motion Graphics' },
  { key: '3d', labelIt: 'Animazione 3D', labelEn: '3D Animation' },
  { key: 'ai', labelIt: 'AI & VFX', labelEn: 'AI & VFX' },
];

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const locale = useLocale();
  const isIt = locale === 'it';
  const [activeFilter, setActiveFilter] = useState('all');
  const filtersRef = useRef<HTMLElement>(null);

  const handleFilter = (key: string) => {
    setActiveFilter(key);
    filtersRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const sorted = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const filtered = activeFilter === 'all'
    ? sorted
    : sorted.filter((p) => p.category === activeFilter);

  return (
    <article>
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
              {isIt ? 'Blog — VFX, AI e Post Produzione' : 'Blog — VFX, AI & Post Production'}
            </h1>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl">
              {isIt
                ? 'Breakdown, workflow e riflessioni su VFX, post-produzione e AI. Scrivo di quello che faccio ogni giorno — niente teoria, solo pratica.'
                : 'Breakdowns, workflows and thoughts on VFX, post-production and AI. I write about what I do every day — no theory, just practice.'}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section ref={filtersRef} className="pb-8 md:pb-12 lg:pb-16 scroll-mt-24">
        <div className="section-container">
          <div className="flex flex-wrap gap-2 md:gap-3">
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

      <section className="pb-14 md:pb-20 lg:pb-28">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {filtered.map((post, i) => (
              <AnimateOnScroll key={post.slug} delay={i * 80}>
                <Link
                  href={`${isIt ? '' : '/en'}/blog/${getPostSlug(post, locale)}`}
                  className="group block"
                >
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-surface mb-5">
                    <SafeImage
                      src={post.thumbnail}
                      alt={isIt ? post.thumbnailAlt.it : post.thumbnailAlt.en}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {isIt ? post.categoryLabel.it : post.categoryLabel.en}
                    </span>
                    <span className="text-xs text-text-muted">
                      {post.readingTime} min
                    </span>
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {isIt ? post.titleIt : post.titleEn}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {isIt ? post.excerptIt : post.excerptEn}
                  </p>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
