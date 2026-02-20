'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const services = [
  {
    key: 'vfx',
    titleIt: 'Visual Effects',
    titleEn: 'Visual Effects',
    descIt: 'Compositing, green screen, set extension, tracking, clean-up. Effetti visivi professionali per spot pubblicitari, film e produzioni digitali. Ogni shot è curato con precisione artigianale.',
    descEn: 'Compositing, green screen, set extension, tracking, clean-up. Professional visual effects for commercials, film and digital productions. Every shot is crafted with artisan precision.',
    ctaIt: 'Scopri i VFX',
    ctaEn: 'Discover VFX',
    href: { it: '/vfx', en: '/en/vfx' },
    image: '/images/services/vfx-compositing-cortometraggio-along-came-ruby-roma.webp',
  },
  {
    key: 'motion',
    titleIt: 'Motion Graphics',
    titleEn: 'Motion Graphics',
    descIt: 'Animazioni grafiche per brand, campagne pubblicitarie, titoli e sigle. Dal concept all\'animazione finale, un flusso creativo senza interruzioni.',
    descEn: 'Graphic animations for brands, advertising campaigns, titles and openings. From concept to final animation, a seamless creative flow.',
    ctaIt: 'Esplora le Motion Graphics',
    ctaEn: 'Explore Motion Graphics',
    href: { it: '/motion-graphics', en: '/en/motion-graphics' },
    image: '/images/services/motion-graphics-mostra-ipotesi-metaverso-roma.webp',
  },
  {
    key: 'animation3d',
    titleIt: 'Animazione 3D',
    titleEn: '3D Animation',
    descIt: 'Dai vita a personaggi, prodotti e ambienti con animazioni 3D su misura. Modellazione, texturing, lighting e rendering per risultati fotorealistici o stilizzati.',
    descEn: 'Bring characters, products and environments to life with custom 3D animations. Modeling, texturing, lighting and rendering for photorealistic or stylized results.',
    ctaIt: 'Vai all\'Animazione 3D',
    ctaEn: 'Go to 3D Animation',
    href: { it: '/animazione-3d', en: '/en/3d-animation' },
    image: '/images/services/animazione-3d-spline-guerciotti-product-visualization.jpg',
  },
  {
    key: 'post',
    titleIt: 'Post Produzione Video',
    titleEn: 'Video Post Production',
    descIt: 'Montaggio, color grading e finishing professionale per cinema, TV e digital. Un workflow integrato che garantisce coerenza stilistica e tempi ottimizzati.',
    descEn: 'Editing, color grading and professional finishing for cinema, TV and digital. An integrated workflow that ensures stylistic coherence and optimized timelines.',
    ctaIt: 'Servizi di Post-produzione',
    ctaEn: 'Post-production Services',
    href: { it: '/post-produzione', en: '/en/post-production' },
    image: '/images/services/post-produzione-video-musicale-color-grading-roma.webp',
  },
  {
    key: 'ai',
    titleIt: 'AI Video Production',
    titleEn: 'AI Video Production',
    descIt: 'Generazione video con AI integrata nel workflow professionale. Runway, Veo, Kling — strumenti potenti guidati da 20 anni di occhio. L\'AI senza esperienza produce rumore. L\'AI con esperienza produce magia.',
    descEn: 'AI video generation integrated into a professional workflow. Runway, Veo, Kling — powerful tools guided by 20 years of trained eye. AI without experience produces noise. AI with experience produces magic.',
    ctaIt: 'Scopri AI Video',
    ctaEn: 'Discover AI Video',
    href: { it: '/ai-video', en: '/en/ai-video' },
    image: '',
  },
];

export default function ServicesSection() {
  const locale = useLocale();
  const isIt = locale === 'it';

  return (
    <section className="py-12 md:py-16 lg:py-24">
      {/* Section header */}
      <div className="section-container text-center mb-10 md:mb-16 lg:mb-24">
        <AnimateOnScroll>
          <h2
            className="font-bold text-text-primary tracking-[0.05em] mb-4"
            style={{ fontSize: 'clamp(1.25rem, 3.5vw, 2.25rem)' }}
          >
            VFX \ MOTION GRAPHIC \ ANIMAZIONE
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            <strong className="text-text-primary">
              {isIt ? 'Post-produzione video' : 'Video post-production'}
            </strong>
            {isIt
              ? ' per aziende, agenzie creative, case di produzione e professionisti. Ogni progetto è sviluppato con attenzione al dettaglio, creatività e precisione tecnica.'
              : ' for companies, creative agencies, production houses and professionals. Every project is developed with attention to detail, creativity and technical precision.'}
          </p>
        </AnimateOnScroll>
      </div>

      {/* Service blocks */}
      <div className="space-y-0">
        {services.map((service, i) => {
          const title = isIt ? service.titleIt : service.titleEn;
          const desc = isIt ? service.descIt : service.descEn;
          const ctaLabel = isIt ? service.ctaIt : service.ctaEn;
          const imageLeft = i % 2 === 0;
          const hasImage = service.image !== '';

          return (
            <AnimateOnScroll key={service.key}>
              <div className="border-t border-border">
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 md:min-h-[400px] lg:min-h-[500px]
                    ${imageLeft ? '' : 'md:direction-rtl'}`}
                  style={!imageLeft ? { direction: 'rtl' } : undefined}
                >
                  {/* Image side */}
                  <div
                    className="relative aspect-[16/10] md:aspect-auto overflow-hidden"
                    style={!imageLeft ? { direction: 'ltr' } : undefined}
                  >
                    {hasImage ? (
                      <Image
                        src={service.image}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#0d0d1a] flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <p className="text-text-muted text-sm italic">
                            {isIt ? 'Showreel AI in arrivo' : 'AI Showreel coming soon'}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Text side */}
                  <div
                    className="flex flex-col justify-center px-5 py-8 md:px-12 md:py-12 lg:px-20 lg:py-16"
                    style={!imageLeft ? { direction: 'ltr' } : undefined}
                  >
                    {/* Service number */}
                    <span className="text-xs font-mono text-accent/40 mb-4">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <h2
                      className="font-bold text-text-primary tracking-tight mb-5"
                      style={{
                        fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                        lineHeight: '1.05',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {title}
                    </h2>

                    <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                      {desc}
                    </p>

                    <div>
                      <Link
                        href={service.href[locale as 'it' | 'en']}
                        className="inline-flex items-center gap-3 text-xs font-bold uppercase
                                   tracking-[0.15em] text-accent transition-all duration-300
                                   group"
                      >
                        {ctaLabel}
                        <svg
                          width="16" height="16" viewBox="0 0 16 16" fill="none"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          );
        })}
      </div>
    </section>
  );
}