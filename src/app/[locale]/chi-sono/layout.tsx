import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Chi è Piero Perilli | Artigiano Digitale e VFX Artist Roma',
    description: 'Da orologiaio a VFX artist: 20+ anni di post-produzione professionale. Effetti visivi, montaggio, color grading e motion graphics per cinema, advertising e brand. Portfolio su IMDB.',
};

export default function ChiSonoLayout({ children }: { children: React.ReactNode }) {
    return children;
}