'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

interface ServiceDetail {
  name: string;
  tag: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

interface Pillar {
  number: string;
  title: string;
  text: string;
}

interface WorkItem {
  title: string;
  link?: string;
}

interface ServicePageProps {
  // Hero
  sectionLabel: string;
  h1: string;
  heroSubtitle: string;
  // Intro
  introTitle: string;
  introText: string;
  introImage?: string;
  introImageAlt?: string;
  // Service details
  servicesTitle: string;
  services: ServiceDetail[];
  // Approach pillars
  approachTitle: string;
  pillars: Pillar[];
  // Recent work
  recentWorkTitle?: string;
  recentWork?: WorkItem[];
  // Tools
  tools?: string[];
  // CTA
  ctaTitle: string;
  ctaSubtitle: string;
  ctaText: string;
}

export default function ServicePageTemplate({
  sectionLabel,
  h1,
  heroSubtitle,
  introTitle,
  introText,
  introImage,
  introImageAlt,
  servicesTitle,
  services: serviceDetails,
  approachTitle,
  pillars,
  recentWorkTitle,
  recentWork,
  tools,
  ctaTitle,
  ctaSubtitle,
  ctaText,
}: ServicePageProps) {
  const locale = useLocale();

  return (
    <article>
      {/* === HERO === */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="section-container">
          <AnimateOnScroll>
            <h1
              className="font-bold text-text-primary mb-5 max-w-4xl"
              style={{
                fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
                lineHeight: '1.05',
                letterSpacing: '-0.025em',
              }}
            >
              {h1}
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={80}>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl">
              {heroSubtitle}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* === INTRO === */}
      <section className="py-12 md:py-20 border-t border-border">
        <div className="section-container">
          <AnimateOnScroll>
            <div className={`grid grid-cols-1 ${introImage ? 'md:grid-cols-2' : ''} gap-10 md:gap-16 items-center`}>
              <div>
                <p className="section-title">{sectionLabel}</p>
                <h2
                  className="font-bold text-text-primary mb-5"
                  style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', lineHeight: '1.12' }}
                >
                  {introTitle}
                </h2>
                <div
                  className="text-text-secondary text-sm md:text-base leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{ __html: introText }}
                />
              </div>
              {introImage && (
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-surface">
                  <Image
                    src={introImage}
                    alt={introImageAlt || introTitle}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* === SERVICE DETAILS === */}
      <section className="py-12 md:py-20 border-t border-border">
        <div className="section-container">
          <AnimateOnScroll>
            <h2
              className="font-bold text-text-primary mb-12"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}
            >
              {servicesTitle}
            </h2>
          </AnimateOnScroll>

          <div className="space-y-16">
            {serviceDetails.map((svc, i) => (
              <AnimateOnScroll key={i} delay={i * 60}>
                <div className={`grid grid-cols-1 ${svc.image ? 'md:grid-cols-2' : ''} gap-8 md:gap-12 items-start`}>
                  <div className={svc.image && i % 2 !== 0 ? 'md:order-2' : ''}>
                    <div className="flex items-baseline gap-3 mb-3">
                      <h3 className="text-lg md:text-xl font-bold text-text-primary">
                        {svc.name}
                      </h3>
                      {svc.tag && (
                        <span className="text-xs text-accent font-semibold uppercase tracking-wider">
                          {svc.tag}
                        </span>
                      )}
                    </div>
                    <div
                      className="text-text-secondary text-sm md:text-base leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: svc.description }}
                    />
                  </div>
                  {svc.image && (
                    <div className={i % 2 !== 0 ? 'md:order-1' : ''}>
                      <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-surface-light">
                        <Image
                          src={svc.image}
                          alt={svc.imageAlt || svc.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* === APPROACH PILLARS === */}
      <section className="py-16 md:py-24 border-t border-border bg-surface">
        <div className="section-container">
          <AnimateOnScroll>
            <h2
              className="font-bold text-text-primary mb-12"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}
            >
              {approachTitle}
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
            {pillars.map((pillar, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="group">
                  <span
                    className="block text-5xl md:text-6xl font-bold text-accent/15 mb-4 leading-none"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    {pillar.number}
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-text-primary mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* === RECENT WORK === */}
      {recentWork && recentWork.length > 0 && (
        <section className="py-12 md:py-20 border-t border-border">
          <div className="section-container">
            <AnimateOnScroll>
              <h2
                className="font-bold text-text-primary mb-8"
                style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}
              >
                {recentWorkTitle}
              </h2>
              <div className="space-y-3">
                {recentWork.map((work, i) => (
                  <div key={i}>
                    {work.link ? (
                      <a
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-accent transition-colors duration-300 text-sm md:text-base"
                      >
                        {work.title} ↗
                      </a>
                    ) : (
                      <span className="text-text-secondary text-sm md:text-base">{work.title}</span>
                    )}
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* === TOOLS === */}
      {tools && tools.length > 0 && (
        <section className="py-12 md:py-16 border-t border-border">
          <div className="section-container">
            <AnimateOnScroll>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider
                               bg-surface border border-border rounded-sm text-text-muted"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* === CTA === */}
      <section className="relative py-20 md:py-28 border-t border-border bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,168,83,0.04)_0%,_transparent_60%)]" />
        <div className="relative section-container text-center">
          <AnimateOnScroll>
            <h2
              className="font-bold text-text-primary mb-2"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
            >
              {ctaTitle}
            </h2>
            <h3
              className="font-bold text-text-primary mb-6"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
            >
              {ctaSubtitle}
            </h3>
            <p className="text-text-secondary max-w-xl mx-auto mb-10 text-sm md:text-base">
              {ctaText}
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={locale === 'it' ? '/contatti' : '/en/contatti'}
                className="btn-primary"
              >
                {locale === 'it' ? 'Parliamone' : "Let's talk"}
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://calendly.com/pieroperilli-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Calendar size={16} />
                {locale === 'it' ? 'Prenota una call' : 'Book a call'}
              </a>
              <a
                href="https://wa.me/393920187759"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
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