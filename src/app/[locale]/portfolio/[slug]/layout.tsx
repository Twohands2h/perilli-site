import { projects } from '@/data/projects';
import { getProjectBySlug } from '@/lib/data';
import { getPageAlternates, getPageOpenGraph } from '@/lib/seo';
import type { Metadata } from 'next';

export function generateStaticParams() {
    // Generate params from static data
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }): Promise<Metadata> {
    const project = await getProjectBySlug(params.slug);
    if (!project) return {};

    const isIt = params.locale === 'it';
    const title = isIt ? project.titleIt : project.titleEn;
    const cat = isIt ? project.categoryLabel.it : project.categoryLabel.en;
    const briefing = isIt ? project.briefingIt : project.briefingEn;

    const seoTitle = (isIt ? project.seoTitleIt : project.seoTitleEn)
        || (isIt ? `${title} | ${cat} Roma — Piero Perilli` : `${title} | ${cat} Rome — Piero Perilli`);
    const seoDescription = (isIt ? project.metaDescriptionIt : project.metaDescriptionEn)
        || (isIt ? `Caso studio: ${title}. ${briefing.substring(0, 140)}...` : `Case study: ${title}. ${briefing.substring(0, 140)}...`);
    const heroAlt = (isIt ? project.heroAlt?.it : project.heroAlt?.en) || title;
    const ogImage = { url: `https://pieroperilli.com${project.heroImage}`, alt: heroAlt };

    return {
        title: { absolute: seoTitle },
        description: seoDescription,
        alternates: getPageAlternates(`/portfolio/${project.slug}`, params.locale),
        openGraph: {
            ...getPageOpenGraph(`/portfolio/${project.slug}`, params.locale),
            title: seoTitle,
            description: seoDescription,
            images: [ogImage],
        },
        twitter: {
            card: 'summary_large_image',
            title: seoTitle,
            description: seoDescription,
            images: [ogImage.url],
        },
    };
}

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
    return children;
}
