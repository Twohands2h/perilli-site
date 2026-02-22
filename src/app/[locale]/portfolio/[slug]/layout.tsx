import { projects } from '@/data/projects';
import { getProjectBySlug } from '@/lib/data';
import { getPageAlternates, getPageOpenGraph } from '@/lib/seo';
import type { Metadata } from 'next';

export function generateStaticParams() {
    // Use static list for build-time params (Sanity data comes via ISR at runtime)
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }): Promise<Metadata> {
    const project = await getProjectBySlug(params.slug);
    if (!project) return {};

    const isIt = params.locale === 'it';
    const title = isIt ? project.titleIt : project.titleEn;
    const cat = isIt ? project.categoryLabel.it : project.categoryLabel.en;
    const briefing = isIt ? project.briefingIt : project.briefingEn;

    return {
        title: isIt
            ? `${title} | ${cat} Roma — Piero Perilli`
            : `${title} | ${cat} Rome — Piero Perilli`,
        description: isIt
            ? `Caso studio: ${title}. ${briefing.substring(0, 140)}...`
            : `Case study: ${title}. ${briefing.substring(0, 140)}...`,
        alternates: getPageAlternates(`/portfolio/${project.slug}`, params.locale),
        openGraph: getPageOpenGraph(`/portfolio/${project.slug}`, params.locale),
    };
}

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
    return children;
}
