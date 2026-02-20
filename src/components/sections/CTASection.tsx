'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function CTASection() {
  const t = useTranslations('ctaSection');
  const locale = useLocale();

  return (
    <section className="relative py-16 md:py-24 lg:py-32 border-t border-border bg-surface overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,170,68,0.04)_0%,_transparent_60%)]" />

      <div className="relative section-container text-center">
        <AnimateOnScroll>
          <h2
            className="font-bold text-text-primary mb-4"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
          >
            {t('headline')}
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <p className="text-text-secondary max-w-xl mx-auto mb-8 md:mb-12 text-sm md:text-base">
            {t('text')}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href={locale === 'it' ? '/contatti' : '/en/contact'}
              className="btn-primary"
            >
              {t('ctaForm')}
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://calendly.com/pieroperilli-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Calendar size={16} />
              {t('ctaCalendly')}
            </a>
            <a
              href="https://wa.me/393920187759"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <MessageCircle size={16} />
              {t('ctaWhatsapp')}
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}