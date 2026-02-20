'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

interface ServicePageProps {
  subtitle: string;
  h1: string;
  intro: string;
  sections: {
    title: string;
    content: string;
    image?: string;
    imageAlt?: string;
  }[];
  tools?: string[];
  ctaHeadline: string;
  ctaText: string;
}

export default function ServicePageTemplate({
  subtitle,
  h1,
  intro,
  sections,
  tools,
  ctaHeadline,
  ctaText,
}: ServicePageProps) {
  const locale = useLocale();

  return (
    <article>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <AnimateOnScroll>
            <p className="section-title">{subtitle}</p>
            <h1
              className="font-bold text-text-primary mb-6 max-w-4xl"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: '1.08',
                letterSpacing: '-0.02em',
              }}
            >
              {h1}
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl">
              {intro}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Showreel placeholder */}
      <section className="pb-16 md:pb-24">
        <div className="section-container">
          <AnimateOnScroll>
            <div className="aspect-video bg-surface rounded-lg border border-border overflow-hidden flex items-center justify-center">
              <span className="text-text-muted text-sm">Showreel di servizio</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Content sections */}
      {sections.map((section, i) => {
        const hasImage = !!section.image;
        const imageRight = i % 2 === 0;

        return (
          <section key={i} className="py-12 md:py-20 border-t border-border">
            <div className="section-container">
              <AnimateOnScroll>
                <div className={`grid grid-cols-1 ${hasImage ? 'md:grid-cols-2' : ''} gap-10 md:gap-16 items-center`}>
                  {/* Text */}
                  <div className={hasImage && !imageRight ? 'md:order-2' : ''}>
                    <h2
                      className="font-bold text-text-primary mb-5"
                      style={{
                        fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                        lineHeight: '1.15',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {section.title}
                    </h2>
                    <div
                      className="text-text-secondary text-sm md:text-base leading-relaxed space-y-4"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>

                  {/* Image */}
                  {hasImage && (
                    <div className={!imageRight ? 'md:order-1' : ''}>
                      <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-surface">
                        <Image
                          src={section.image!}
                          alt={section.imageAlt || section.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </AnimateOnScroll>
            </div>
          </section>
        );
      })}

      {/* Tools section */}
      {tools && tools.length > 0 && (
        <section className="py-12 md:py-20 border-t border-border">
          <div className="section-container">
            <AnimateOnScroll>
              <h2
                className="font-bold text-text-primary mb-8"
                style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}
              >
                {locale === 'it' ? 'Strumenti e tecnologie' : 'Tools & technologies'}
              </h2>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider
                               bg-surface border border-border rounded-sm text-text-secondary"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-20 md:py-28 border-t border-border bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,168,83,0.04)_0%,_transparent_60%)]" />
        <div className="relative section-container text-center">
          <AnimateOnScroll>
            <h2
              className="font-bold text-text-primary mb-4"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
            >
              {ctaHeadline}
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto mb-10">
              {ctaText}
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={locale === 'it' ? '/contatti' : '/en/contatti'}
                className="btn-primary"
              >
                {locale === 'it' ? 'Scrivimi' : 'Get in touch'}
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