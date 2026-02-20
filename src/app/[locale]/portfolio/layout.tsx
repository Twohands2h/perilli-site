import type { Metadata } from 'next';
import { getPageAlternates, getPageOpenGraph } from '@/lib/seo';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    return locale === 'it' ? {
        title: 'Portfolio | Piero Perilli — VFX, Motion Graphics, Animazione 3D, Post Produzione',
        description: 'Portfolio di lavori selezionati: VFX per cinema, motion graphics per brand, animazione 3D, color grading e post-produzione. Casi studio con processo creativo e risultati.',
        alternates: getPageAlternates('/portfolio', locale),
        openGraph: getPageOpenGraph('/portfolio', locale),
    } : {
        title: 'Portfolio | Piero Perilli — VFX, Motion Graphics, 3D Animation, Post Production',
        description: 'Selected works portfolio: VFX for cinema, motion graphics for brands, 3D animation, color grading and post-production. Case studies with creative process and results.',
        alternates: getPageAlternates('/portfolio', locale),
        openGraph: getPageOpenGraph('/portfolio', locale),
    };
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
    return children;
}
