'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useLocale } from 'next-intl';
import { ArrowRight, Calendar, MessageCircle, ChevronDown } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import TrackedLink from '@/components/TrackedLink';

import FAQAccordion from '@/components/FAQAccordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceDetail {
  name: string;
  tag: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

interface Pillar {
  number: string;
  title: string;
  text: string;
}

interface WorkItem {
  title: string;
  link?: string;
}

interface HighlightBox {
  label: string;
  title: string;
  text: string;
  logo?: string;
  logoAlt?: string;
  image?: string;
  imageAlt?: string;
  linkText?: string;
  linkUrl?: string;
  linkEvent?: string;
}

interface ServicePageProps {
  sectionLabel: string;
  h1: string;
  heroSubtitle: string;
  introTitle: string;
  introText: string;
  introImage?: string;
  introImageAlt?: string;
  introVideo?: string;
  servicesTitle: string;
  services: ServiceDetail[];
  approachTitle: string;
  pillars: Pillar[];
  highlight?: HighlightBox;
  recentWorkTitle?: string;
  recentWork?: WorkItem[];
  tools?: string[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaText: string;
  faqs?: FAQItem[];
  faqTitle?: string;
}

function ServiceAccordion({ services }: { services: ServiceDetail[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="divide-y divide-border/40">
      {services.map((svc, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left group"
            >
              <div className="flex items-baseline gap-3">
                <h3 className={`text-base md:text-lg font-bold transition-colors duration-300
                               ${isOpen ? 'text-accent' : 'text-text-primary group-hover:text-accent'}`}>
                  {svc.name}
                </h3>
                {svc.tag && (
                  <span className="text-[10px] md:text-xs text-accent/60 font-semibold uppercase tracking-wider">
                    {svc.tag}
                  </span>
                )}
              </div>
              <ChevronDown
                size={18}
                className={`text-text-muted shrink-0 transition-transform duration-300
                           ${isOpen ? 'rotate-180 text-accent' : ''}`}
              />
            </button>

            <div
              className={`grid transition-all duration-500 ease-in-out
                         ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6 md:pb-8' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <div className={`grid grid-cols-1 ${svc.image ? 'md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_340px]' : ''} gap-5 md:gap-8 items-start`}>
                  <div
                    className="text-text-secondary text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: svc.description }}
                  />
                  {svc.image && (
                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-surface-light">
                      <Image
                        src={svc.image}
                        alt={svc.imageAlt || svc.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 340px"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ServicePageTemplate({
  sectionLabel, h1, heroSubtitle, introTitle, introText, introImage, introImageAlt, introVideo,
  servicesTitle, services: serviceDetails, approachTitle, pillars, highlight,
  recentWorkTitle, recentWork, tools, ctaTitle, ctaSubtitle, ctaText, faqs, faqTitle,
}: ServicePageProps) {
  const locale = useLocale();

  return (
    <article>
      {/* === HERO — mobile: pt-24 pb-8, md: pt-40 pb-20 === */}
      <section className="pt-24 pb-8 md:pt-32 lg:pt-40 md:pb-12 lg:pb-20">
        <div className="section-container">
          <AnimateOnScroll>
            <h1
              className="font-bold text-text-primary mb-4 md:mb-5 max-w-4xl"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 4rem)', lineHeight: '1.08', letterSpacing: '-0.025em' }}
            >
              {h1}
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={80}>
            <p className="text-text-secondary text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl">
              {heroSubtitle}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* === INTRO — mobile: single col, md: 2 cols === */}
      <section className="py-10 md:py-16 lg:py-20 border-t border-border">
        <div className="section-container">
          <AnimateOnScroll>
            <div className={`grid grid-cols-1 ${(introImage || introVideo) ? 'md:grid-cols-2' : ''} gap-8 md:gap-12 lg:gap-16 items-center`}>
              <div>
                <p className="section-title">{sectionLabel}</p>
                <h2
                  className="font-bold text-text-primary mb-4 md:mb-5"
                  style={{ fontSize: 'clamp(1.25rem, 3vw, 2.25rem)', lineHeight: '1.12' }}
                >
                  {introTitle}
                </h2>
                <div
                  className="text-text-secondary text-sm leading-relaxed space-y-3 md:space-y-4"
                  dangerouslySetInnerHTML={{ __html: introText }}
                />
              </div>
              {introVideo ? (
                <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                  <video controls preload="metadata" className="w-full h-full object-cover" playsInline>
                    <source src={introVideo} type="video/mp4" />
                  </video>
                </div>
              ) : introImage ? (
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-surface">
                  <Image src={introImage} alt={introImageAlt || introTitle} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" quality={100} />
                </div>
              ) : null}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* === SERVICE DETAILS — Accordion === */}
      <section className="py-10 md:py-16 lg:py-20 border-t border-border">
        <div className="section-container">
          <AnimateOnScroll>
            <h2
              className="font-bold text-text-primary mb-8 md:mb-12"
              style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)' }}
            >
              {servicesTitle}
            </h2>
          </AnimateOnScroll>

          <ServiceAccordion services={serviceDetails} />
        </div>
      </section>

      {/* === APPROACH PILLARS — mobile: stack, md: 3 cols === */}
      <section className="py-12 md:py-20 lg:py-24 border-t border-border bg-surface">
        <div className="section-container">
          <AnimateOnScroll>
            <h2
              className="font-bold text-text-primary mb-8 md:mb-12"
              style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)' }}
            >
              {approachTitle}
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
            {pillars.map((pillar, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="group">
                  <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-accent/15 mb-3 md:mb-4 leading-none" style={{ fontVariantNumeric: 'tabular-nums' }}>{pillar.number}</span>
                  <h3 className="text-sm md:text-base lg:text-lg font-bold text-text-primary mb-2 md:mb-3">{pillar.title}</h3>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed">{pillar.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* === HIGHLIGHT BOX (opzionale — es. Rewake su AI Video) === */}
      {highlight && (
        <section className="py-10 md:py-16 lg:py-20 border-t border-border">
          <div className="section-container">
            <AnimateOnScroll>
              <div className="relative rounded-lg border border-accent/25 bg-surface p-6 md:p-10 lg:p-12 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(245,170,68,0.05)_0%,_transparent_55%)]" aria-hidden="true" />
                <div className={`relative grid grid-cols-1 ${highlight.image ? 'lg:grid-cols-2' : ''} gap-8 lg:gap-12 items-center`}>
                  <div className="max-w-3xl">
                    <p className="section-title">{highlight.label}</p>
                    {highlight.logo && (
                      <Image
                        src={highlight.logo}
                        alt={highlight.logoAlt || highlight.label}
                        width={582}
                        height={166}
                        className="h-9 md:h-11 w-auto mb-4 md:mb-5"
                      />
                    )}
                    <h2
                      className="font-bold text-text-primary mb-4 md:mb-5"
                      style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', lineHeight: '1.15' }}
                    >
                      {highlight.title}
                    </h2>
                    <div
                      className="text-text-secondary text-sm leading-relaxed space-y-3 md:space-y-4"
                      dangerouslySetInnerHTML={{ __html: highlight.text }}
                    />
                    {highlight.linkUrl && highlight.linkText && (
                      <div className="mt-6 md:mt-8">
                        <TrackedLink
                          href={highlight.linkUrl}
                          eventName={highlight.linkEvent || 'highlight_click'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors duration-300 text-sm font-semibold uppercase tracking-wider"
                        >
                          {highlight.linkText}
                          <ArrowRight size={14} />
                        </TrackedLink>
                      </div>
                    )}
                  </div>
                  {highlight.image && (
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-border-light/60 bg-background">
                      <Image
                        src={highlight.image}
                        alt={highlight.imageAlt || highlight.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  )}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* === RECENT WORK === */}
      {recentWork && recentWork.length > 0 && (
        <section className="py-10 md:py-16 lg:py-20 border-t border-border">
          <div className="section-container">
            <AnimateOnScroll>
              <h2 className="font-bold text-text-primary mb-6 md:mb-8" style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)' }}>{recentWorkTitle}</h2>
              <div className="space-y-2 md:space-y-3">
                {recentWork.map((work, i) => (
                  <div key={i}>
                    {work.link ? (
                      <a href={work.link} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300 text-sm">{work.title} ↗</a>
                    ) : (
                      <span className="text-text-secondary text-sm">{work.title}</span>
                    )}
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* === TOOLS === */}
      {tools && tools.length > 0 && (
        <section className="py-10 md:py-12 lg:py-16 border-t border-border">
          <div className="section-container">
            <AnimateOnScroll>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {tools.map((tool) => (
                  <span key={tool} className="px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-semibold uppercase tracking-wider bg-surface border border-border rounded-sm text-text-muted">{tool}</span>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* === FAQ (AI/LLM optimized) === */}
      {faqs && faqs.length > 0 && (
        <div className="border-t border-border">
          <FAQAccordion
            faqs={faqs}
            title={faqTitle || (locale === 'it' ? 'Domande frequenti' : 'Frequently asked questions')}
          />
        </div>
      )}

      {/* === CTA === */}
      <section className="relative py-16 md:py-24 lg:py-28 border-t border-border bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,170,68,0.04)_0%,_transparent_60%)]" />
        <div className="relative section-container text-center">
          <AnimateOnScroll>
            <h2 className="font-bold text-text-primary mb-1 md:mb-2" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 2.5rem)' }}>{ctaTitle}</h2>
            <h3 className="font-bold text-text-primary mb-5 md:mb-6" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 2.5rem)' }}>{ctaSubtitle}</h3>
            <p className="text-text-secondary max-w-xl mx-auto mb-8 md:mb-10 text-sm">{ctaText}</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link href={locale === 'it' ? '/contatti' : '/en/contact'} className="btn-primary w-full sm:w-auto justify-center">{locale === 'it' ? 'Parliamone' : "Let's talk"}<ArrowRight size={16} /></Link>
              <a href="https://calendly.com/pieroperilli-info/30min" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto justify-center"><Calendar size={16} />{locale === 'it' ? 'Prenota una call' : 'Book a call'}</a>
              <a href="https://wa.me/393920187759" target="_blank" rel="noopener noreferrer" className="btn-ghost"><MessageCircle size={16} />WhatsApp</a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </article>
  );
}