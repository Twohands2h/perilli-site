import { unstable_setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/sections/HeroSection';
import PillarsSection from '@/components/sections/PillarsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import CTASection from '@/components/sections/CTASection';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <ServicesSection />
      <SocialProofSection />
      <CTASection />
    </>
  );
}
