import type { Metadata } from 'next';
import { getPageAlternates, getPageOpenGraph } from '@/lib/seo';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    return locale === 'it' ? {
        title: 'Privacy Policy | Piero Perilli',
        description: 'Informativa sulla privacy e sul trattamento dei dati personali del sito pieroperilli.com.',
        alternates: getPageAlternates('/privacy', locale),
        openGraph: getPageOpenGraph('/privacy', locale),
    } : {
        title: 'Privacy Policy | Piero Perilli',
        description: 'Privacy policy and personal data processing information for pieroperilli.com.',
        alternates: getPageAlternates('/privacy', locale),
        openGraph: getPageOpenGraph('/privacy', locale),
    };
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
    return children;
}
