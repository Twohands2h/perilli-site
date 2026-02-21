import type { Metadata } from 'next';
import { getPageAlternates, getPageOpenGraph } from '@/lib/seo';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';

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

export default function ChiSonoLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
    const isIt = locale === 'it';
    return (
        <>
            <BreadcrumbSchema items={[
                { name: 'Home', url: isIt ? '/' : '/en' },
                { name: isIt ? 'Chi Sono' : 'About', url: isIt ? '/chi-sono' : '/en/about' },
            ]} />
            {children}
        </>
    );
}
