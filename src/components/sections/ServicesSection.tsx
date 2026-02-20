'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowUpRight, Clapperboard, Wand2, Box, Film, Sparkles } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const services = [
  {
    key: 'vfx',
    icon: Clapperboard,
    href: { it: '/vfx', en: '/en/vfx' },
  },
  {
    key: 'motion',
    icon: Wand2,
    href: { it: '/motion-graphics', en: '/en/motion-graphics' },
  },
  {
    key: 'animation3d',
    icon: Box,
    href: { it: '/animazione-3d', en: '/en/animazione-3d' },
  },
  {
    key: 'post',
    icon: Film,
    href: { it: '/post-produzione', en: '/en/post-produzione' },
  },
  {
    key: 'ai',
    icon: Sparkles,
    href: { it: '/ai-video', en: '/en/ai-video' },
  },
] as const;

export default function ServicesSection() {
  const t = useTranslations('services');
  const locale = useLocale();

  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="section-title">{t('sectionTitle')}</p>
        </AnimateOnScroll>

        <div className="mt-12 space-y-0">
          {services.map(({ key, icon: Icon, href }, i) => (
            <AnimateOnScroll key={key} delay={i * 100}>
              <Link
                href={href[locale as 'it' | 'en']}
                className="group flex items-center gap-6 py-6 border-b border-border
                           transition-all duration-300 hover:pl-4"
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center rounded-md
                                bg-surface-light border border-border
                                transition-all duration-300
                                group-hover:bg-accent-muted group-hover:border-accent/30">
                  <Icon size={18} className="text-text-muted transition-colors duration-300 group-hover:text-accent" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-text-primary tracking-tight
                                 transition-colors duration-300 group-hover:text-accent">
                    {t(`${key}Title`)}
                  </h3>
                  <p className="text-sm text-text-muted mt-0.5 hidden sm:block">
                    {t(`${key}Text`)}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-text-muted/40 transition-all duration-300
                             group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
