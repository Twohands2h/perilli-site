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
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12 md:gap-y-5 mt-8 md:mt-12">
            {clients.map((client) => (
              <span
                key={client}
                className="text-sm md:text-base lg:text-lg font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-text-muted/30
                           transition-all duration-500 hover:text-text-secondary hover:tracking-[0.25em]
                           cursor-default select-none"
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