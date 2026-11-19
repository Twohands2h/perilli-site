import type { Metadata } from 'next';
import { getPageAlternates, getPageOpenGraph } from '@/lib/seo';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    return locale === 'it' ? {
        title: 'Blog VFX, AI e Post Produzione | Piero Perilli',
        description: 'Articoli su VFX, motion graphics, AI video production, color grading e post-produzione. Breakdown di progetti, workflow e trend del settore.',
        alternates: getPageAlternates('/blog', locale),
        openGraph: getPageOpenGraph('/blog', locale),
    } : {
        title: 'VFX, AI & Post Production Blog | Piero Perilli',
        description: 'Articles on VFX, motion graphics, AI video production, color grading and post-production. Project breakdowns, workflows and industry trends.',
        alternates: getPageAlternates('/blog', locale),
        openGraph: getPageOpenGraph('/blog', locale),
    };
}

export default function BlogLayout({ children }: { children: React.ReactNode; params: { locale: string } }) {
    // Il breadcrumb Home > Blog sta nella pagina indice: qui si sommava a quello delle pagine interne
    return <>{children}</>;
}
