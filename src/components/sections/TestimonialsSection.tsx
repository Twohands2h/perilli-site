'use client';

import { useTranslations, useLocale } from 'next-intl';
import AnimateOnScroll from '@/components/AnimateOnScroll';

interface Testimonial {
  quoteIt: string;
  quoteEn: string;
  name: string;
  role: string;
}

// Placeholder testimonials — shown only when Sanity has no data
const placeholderTestimonials: Testimonial[] = [
  {
    quoteIt: 'Piero ha trasformato il nostro progetto. La sua capacità di gestire VFX, montaggio e color in un unico flusso ci ha fatto risparmiare tempo e budget, senza compromessi sulla qualità.',
    quoteEn: 'Piero transformed our project. His ability to handle VFX, editing and color in a single workflow saved us time and budget, with no compromise on quality.',
    name: 'Nome Cognome',
    role: 'Regista',
  },
  {
    quoteIt: 'Lavorare con Piero significa avere un partner creativo che capisce la visione prima ancora di spiegarla. La precisione e la cura del dettaglio sono ai massimi livelli.',
    quoteEn: 'Working with Piero means having a creative partner who understands the vision before you even explain it. The precision and attention to detail are top-level.',
    name: 'Nome Cognome',
    role: 'Art Director',
  },
  {
    quoteIt: 'Per il nostro spot serviva un professionista capace di gestire tutto — dagli effetti visivi al color grading. Piero ha consegnato un risultato che ha superato le aspettative.',
    quoteEn: 'For our commercial we needed a professional who could handle everything — from visual effects to color grading. Piero delivered a result that exceeded expectations.',
    name: 'Nome Cognome',
    role: 'Producer',
  },
];

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const t = useTranslations('testimonials');
  const locale = useLocale();
  const isIt = locale === 'it';

  const items = testimonials && testimonials.length > 0 ? testimonials : placeholderTestimonials;

  return (
    <section className="py-14 md:py-20 lg:py-28">
      <div className="section-container">
        <AnimateOnScroll>
          <p className="section-title text-center">{t('sectionTitle')}</p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
          {items.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 120}>
              <blockquote className="flex flex-col h-full p-6 md:p-8 bg-surface rounded-lg border border-border">
                <div className="text-accent/60 text-3xl leading-none mb-3">&ldquo;</div>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed flex-1">
                  {isIt ? item.quoteIt : item.quoteEn}
                </p>
                <footer className="mt-5 pt-4 border-t border-border/50">
                  <p className="text-sm font-medium text-text-primary">{item.name}</p>
                  <p className="text-xs text-text-muted mt-0.5">{item.role}</p>
                </footer>
              </blockquote>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
