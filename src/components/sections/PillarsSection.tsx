'use client';

import { useTranslations } from 'next-intl';
import { Gem, Layers, Sparkles } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const pillars = [
  { key: 'pillar1', icon: Gem, num: '01' },
  { key: 'pillar2', icon: Layers, num: '02' },
  { key: 'pillar3', icon: Sparkles, num: '03' },
] as const;

export default function PillarsSection() {
  const t = useTranslations('pillars');

  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="section-title">{t('sectionTitle')}</p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mt-12">
          {pillars.map(({ key, icon: Icon, num }, i) => (
            <AnimateOnScroll key={key} delay={i * 150}>
              <div className="group relative">
                {/* Accent top line */}
                <div className="w-8 h-px bg-accent mb-6 transition-all duration-500 group-hover:w-16" />

                {/* Number + Icon row */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-text-muted">{num}</span>
                  <div className="w-9 h-9 flex items-center justify-center rounded-md bg-accent-muted
                                  transition-colors duration-300 group-hover:bg-accent/20">
                    <Icon size={18} className="text-accent" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-text-primary mb-3 tracking-tight">
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
