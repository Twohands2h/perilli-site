import { unstable_setRequestLocale } from 'next-intl/server';
import { getAllProjects, categories } from '@/lib/data';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import { stanza247PortfolioCard } from '@/data/stanza247';

export default async function PortfolioPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const projects = await getAllProjects();

  return <PortfolioGrid projects={projects} categories={categories} features={[stanza247PortfolioCard]} />;
}
