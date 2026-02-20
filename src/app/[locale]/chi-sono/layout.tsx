import type { Metadata } from 'next';
import { getPageAlternates, getPageOpenGraph } from '@/lib/seo';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    return locale === 'it' ? {
        title: 'Chi è Piero Perilli | Artigiano Digitale e VFX Artist Roma',
        description: 'Da orologiaio a VFX artist: 20+ anni di post-produzione professionale. Effetti visivi, montaggio, color grading e motion graphics per cinema, advertising e brand. Portfolio su IMDB.',
        alternates: getPageAlternates('/chi-sono', locale),
        openGraph: getPageOpenGraph('/chi-sono', locale),
    } : {
        title: 'About Piero Perilli | Digital Artisan and VFX Artist Rome',
        description: 'From watchmaker to VFX artist: 20+ years of professional post-production. Visual effects, editing, color grading and motion graphics for cinema, advertising and brands. IMDB portfolio.',
        alternates: getPageAlternates('/chi-sono', locale),
        openGraph: getPageOpenGraph('/chi-sono', locale),
    };
}

export default function ChiSonoLayout({ children }: { children: React.ReactNode }) {
    return children;
}
