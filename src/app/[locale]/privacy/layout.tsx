import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    return locale === 'it' ? {
        title: 'Privacy Policy | Piero Perilli',
        description: 'Informativa sulla privacy e sul trattamento dei dati personali del sito pieroperilli.com.',
    } : {
        title: 'Privacy Policy | Piero Perilli',
        description: 'Privacy policy and personal data processing information for pieroperilli.com.',
    };
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
    return children;
}