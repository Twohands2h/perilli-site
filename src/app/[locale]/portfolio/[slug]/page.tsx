import { unstable_setRequestLocale } from 'next-intl/server';
import { getAllProjects, getProjectBySlug, getRelatedProjects } from '@/lib/data';
import CaseStudyView from '@/components/portfolio/CaseStudyView';
import { notFound } from 'next/navigation';

export default async function CaseStudyPage({ params: { locale, slug } }: { params: { locale: string; slug: string } }) {
  unstable_setRequestLocale(locale);

  const project = await getProjectBySlug(slug);
  if (!project) return notFound();

  const allProjects = await getAllProjects();
  const related = await getRelatedProjects(slug, 3);

  // Compute prev/next
  const idx = allProjects.findIndex((p) => p.slug === project.slug);
  const prev = idx > 0 ? allProjects[idx - 1] : null;
  const next = idx < allProjects.length - 1 ? allProjects[idx + 1] : null;

  return (
    <CaseStudyView
      project={project}
      related={related}
      prev={prev}
      next={next}
    />
  );
}
