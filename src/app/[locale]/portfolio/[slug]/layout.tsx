import { projects, getProject } from '@/data/projects';
import { getPageAlternates, getPageOpenGraph } from '@/lib/seo';
import type { Metadata } from 'next';

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { locale: string; slug: string } }): Metadata {
    const project = getProject(params.slug);
    if (!project) return {};

    const isIt = params.locale === 'it';
    const title = isIt ? project.titleIt : project.titleEn;
    const cat = isIt ? project.categoryLabel.it : project.categoryLabel.en;

    return {
        title: isIt
            ? `${title} | ${cat} Roma — Piero Perilli`
            : `${title} | ${cat} Rome — Piero Perilli`,
        description: isIt
            ? `Caso studio: ${title}. ${project.briefingIt.substring(0, 140)}...`
            : `Case study: ${title}. ${project.briefingEn.substring(0, 140)}...`,
        alternates: getPageAlternates(`/portfolio/${project.slug}`, params.locale),
        openGraph: getPageOpenGraph(`/portfolio/${project.slug}`, params.locale),
    };
}

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
    return children;
}
