import { unstable_setRequestLocale } from 'next-intl/server';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { getAllProjects, categories } from '@/lib/data';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import { stanza247PortfolioCard } from '@/data/stanza247';

export default async function PortfolioPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const projects = await getAllProjects();

  const isIt = locale === 'it';

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: isIt ? '/' : '/en' },
        { name: 'Portfolio', url: isIt ? '/portfolio' : '/en/portfolio' },
      ]} />
      <PortfolioGrid projects={projects} categories={categories} features={[stanza247PortfolioCard]} />
    </>
  );
}
