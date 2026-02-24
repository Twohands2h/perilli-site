'use client';

import { useTranslations } from 'next-intl';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const clients = [
  'GUCCI',
  'HISTORY CHANNEL',
  'RAIPLAY',
  'FENDI',
  'BABINGTONS',
  'SAVE THE CHILDREN',
  'ACEA',
  'ENEL',
  'POSTE ITALIANE',
];

export default function SocialProofSection() {
  const t = useTranslations('socialProof');

  return (
    <section className="py-14 md:py-20 lg:py-28 border-t border-border overflow-hidden">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="section-title text-center">{t('sectionTitle')}</p>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll delay={200}>
        <div className="relative mt-8 md:mt-12">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling marquee */}
          <div className="flex animate-marquee">
            {[...clients, ...clients].map((client, i) => (
              <span
                key={`${client}-${i}`}
                className="text-xs md:text-sm lg:text-base font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-text-muted/30
                           cursor-default select-none whitespace-nowrap px-5 md:px-8 lg:px-10"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      <div className="section-container">
        <div className="flex justify-center mt-8 md:mt-12">
          <div className="w-12 h-px bg-accent/40" />
        </div>
      </div>
    </section>
  );
}
