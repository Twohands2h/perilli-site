import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Portfolio | Piero Perilli — VFX, Motion Graphics, Animazione 3D, Post Produzione',
    description: 'Portfolio di lavori selezionati: VFX per cinema, motion graphics per brand, animazione 3D, color grading e post-produzione. Casi studio con processo creativo e risultati.',
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
    return children;
}