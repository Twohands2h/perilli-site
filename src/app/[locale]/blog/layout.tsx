import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    return locale === 'it' ? {
        title: 'Blog | Piero Perilli — VFX, Motion Graphics, AI e Post Produzione',
        description: 'Articoli su VFX, motion graphics, AI video production, color grading e post-produzione. Breakdown di progetti, workflow e trend del settore.',
    } : {
        title: 'Blog | Piero Perilli — VFX, Motion Graphics, AI and Post Production',
        description: 'Articles on VFX, motion graphics, AI video production, color grading and post-production. Project breakdowns, workflows and industry trends.',
    };
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return children;
}