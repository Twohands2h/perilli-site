import type { Metadata } from 'next';
import { getPageAlternates, getPageOpenGraph } from '@/lib/seo';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    return locale === 'it' ? {
        title: 'Contatti | Piero Perilli — VFX Artist e Post Produzione Roma',
        description: 'Contattami per il tuo progetto. VFX, motion graphics, color grading e post-produzione video a Roma. Rispondo personalmente entro 24 ore.',
        alternates: getPageAlternates('/contatti', locale),
        openGraph: getPageOpenGraph('/contatti', locale),
    } : {
        title: 'Contact | Piero Perilli — VFX Artist and Post Production Rome',
        description: 'Get in touch about your project. VFX, motion graphics, color grading and video post-production in Rome. I personally reply within 24 hours.',
        alternates: getPageAlternates('/contatti', locale),
        openGraph: getPageOpenGraph('/contatti', locale),
    };
}

export default function ContattiLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
    const isIt = locale === 'it';
    return (
        <>
            <BreadcrumbSchema items={[
                { name: 'Home', url: isIt ? '/' : '/en' },
                { name: isIt ? 'Contatti' : 'Contact', url: isIt ? '/contatti' : '/en/contact' },
            ]} />
            {children}
        </>
    );
}
