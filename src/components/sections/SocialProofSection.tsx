'use client';

import { useTranslations } from 'next-intl';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const clients = [
  'GUCCI',
  'SAVE THE CHILDREN',
  'HISTORY CHANNEL',
  'RAIPLAY',
  'GUERCIOTTI',
  'VETRYA',
  'BABINGTONS',
];

export default function SocialProofSection() {
  const t = useTranslations('socialProof');

  return (
    <section className="py-14 md:py-20 lg:py-28 border-t border-border overflow-hidden">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="section-title text-center">{t('sectionTitle')}</p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="flex items-center justify-between gap-6 md:gap-8 mt-8 md:mt-12 overflow-x-auto scrollbar-hide">
            {clients.map((client) => (
              <span
                key={client}
                className="text-xs md:text-sm lg:text-base font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-text-muted/30
                           transition-all duration-500 hover:text-text-secondary hover:tracking-[0.25em]
                           cursor-default select-none whitespace-nowrap shrink-0"
              >
                {client}
              </span>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Divider accent */}
        <div className="flex justify-center mt-8 md:mt-12">
          <div className="w-12 h-px bg-accent/40" />
        </div>
      </div>
    </section>
  );
}
