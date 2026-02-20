'use client';

import { useTranslations } from 'next-intl';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const pillars = [
  { key: 'pillar1', num: '01' },
  { key: 'pillar2', num: '02' },
  { key: 'pillar3', num: '03' },
] as const;

export default function PillarsSection() {
  const t = useTranslations('pillars');

  return (
    <section className="py-14 md:py-20 lg:py-24 border-t border-border">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="section-title">{t('sectionTitle')}</p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-8 md:mt-12">
          {pillars.map(({ key, num }, i) => (
            <AnimateOnScroll key={key} delay={i * 100}>
              <div
                className={`group relative py-6 md:py-0 md:px-6 lg:px-8
                            ${i > 0 ? 'border-t md:border-t-0 md:border-l border-border/40' : ''}
                            ${i === 0 ? 'md:pl-0' : ''}`}
              >
                {/* Accent left bar on hover (desktop) */}
                {i > 0 && (
                  <div className="hidden md:block absolute top-0 left-0 bottom-0 w-px bg-accent scale-y-0 origin-top
                                  transition-transform duration-700 group-hover:scale-y-100" />
                )}

                {/* Oversized number — no dot */}
                <span
                  className="text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold leading-none
                             text-accent/10 tracking-tighter select-none block mb-3 md:mb-4"
                >
                  {num}
                </span>

                <h3 className="text-lg md:text-xl font-bold text-text-primary mb-2 tracking-tight
                               transition-colors duration-500 group-hover:text-accent">
                  {t(`${key}Title`)}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t(`${key}Text`)}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
