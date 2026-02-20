import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contatti | Piero Perilli — VFX Artist e Post Produzione Roma',
    description: 'Contattami per il tuo progetto. VFX, motion graphics, color grading e post-produzione video a Roma. Rispondo personalmente entro 24 ore.',
};

export default function ContattiLayout({ children }: { children: React.ReactNode }) {
    return children;
}