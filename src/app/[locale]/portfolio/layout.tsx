import type { Metadata } from 'next';
import { getPageAlternates, getPageOpenGraph } from '@/lib/seo';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    return locale === 'it' ? {
        title: 'Portfolio VFX e Post Produzione | Piero Perilli',
        description: 'Lavori selezionati: VFX per cinema, motion graphics per brand, animazione 3D, color grading e post-produzione. Casi studio con processo e risultati.',
        alternates: getPageAlternates('/portfolio', locale),
        openGraph: getPageOpenGraph('/portfolio', locale),
    } : {
        title: 'VFX & Post Production Portfolio | Piero Perilli',
        description: 'Selected works: VFX for cinema, motion graphics for brands, 3D animation, color grading and post-production. Case studies with process and results.',
        alternates: getPageAlternates('/portfolio', locale),
        openGraph: getPageOpenGraph('/portfolio', locale),
    };
}

export default function PortfolioLayout({ children }: { children: React.ReactNode; params: { locale: string } }) {
    // Il breadcrumb Home > Portfolio sta nella pagina indice: qui si sommava a quello delle pagine interne
    return <>{children}</>;
}
