import { unstable_setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PillarsSection from '@/components/sections/PillarsSection';
import MethodSection from '@/components/sections/MethodSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PillarsSection />
      <MethodSection />
      <SocialProofSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}