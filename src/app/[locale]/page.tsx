import { unstable_setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import PillarsSection from '@/components/sections/PillarsSection';
import MethodSection from '@/components/sections/MethodSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Piero Perilli — Artigiano Digitale',
    url: 'https://pieroperilli.com',
    description: 'VFX, motion graphics, color grading e post-produzione video a Roma. Artigiano digitale con 20+ anni di esperienza.',
    inLanguage: ['it-IT', 'en'],
    publisher: {
      '@type': 'Person',
      name: 'Piero Perilli',
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <WebSiteSchema />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <PillarsSection />
      <MethodSection />
      <SocialProofSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}