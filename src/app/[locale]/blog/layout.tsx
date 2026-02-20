import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | Piero Perilli — VFX, Motion Graphics, AI e Post Produzione',
    description: 'Articoli su VFX, motion graphics, AI video production, color grading e post-produzione. Breakdown di progetti, workflow e trend del settore.',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return children;
}