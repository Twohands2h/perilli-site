'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Play, ArrowRight, X } from 'lucide-react';
import Link from 'next/link';

const SHOWREELS = [
  { id: 'motion', labelIt: 'Motion Graphics', labelEn: 'Motion Graphics', youtubeId: 'xIGeQyP2g6I', mp4Url: '' },
  { id: '3d', labelIt: 'Animazione 2D & 3D', labelEn: '2D & 3D Animation', youtubeId: 'ogr_oPb4drE', mp4Url: '' },
  { id: 'full', labelIt: 'Showreel Completo', labelEn: 'Full Showreel', youtubeId: '', mp4Url: 'https://cdn.myportfolio.com/v1/ccvproxy/UJRSc5PAXqq?width=1920&type=mp4&h=3413b8caa8233f17a09d816f792121bf' },
];
const BG_YOUTUBE_ID = SHOWREELS[0].youtubeId;

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const [showModal, setShowModal] = useState(false);
  const [activeReel, setActiveReel] = useState(SHOWREELS[0]);

  const openReel = (reel: (typeof SHOWREELS)[number]) => { setActiveReel(reel); setShowModal(true); };

  return (
    <>
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 scale-[1.2]">
          <iframe src={`https://www.youtube.com/embed/${BG_YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${BG_YOUTUBE_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`} className="absolute inset-0 w-full h-full pointer-events-none" style={{ border: 0 }} allow="autoplay; encrypted-media" tabIndex={-1} aria-hidden="true" />
        </div>
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,168,83,0.06)_0%,_transparent_70%)]" />

        <div className="relative z-10 w-full px-5 md:px-8 lg:px-12 max-w-content mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-bold mb-4 md:mb-6 animate-fade-in" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', lineHeight: '1.08', letterSpacing: '-0.025em' }}>
              {t('headline')}<br /><span className="text-accent">{t('headlineAccent')}</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto mb-8 md:mb-10 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>{t('subtitle')}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <Link href={locale === 'it' ? '/contatti' : '/en/contatti'} className="btn-primary w-full sm:w-auto justify-center">{t('cta')}<ArrowRight size={16} /></Link>
              <button className="btn-secondary w-full sm:w-auto justify-center" onClick={() => openReel(SHOWREELS[0])}><Play size={16} />{t('showreel')}</button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block"><div className="w-px h-10 md:h-12 bg-gradient-to-b from-transparent to-accent/50" /></div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm p-4" onClick={() => setShowModal(false)}>
          <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white transition-colors z-10" aria-label="Close"><X size={24} /></button>
          <div className="flex items-center gap-2 mb-4 md:mb-6 overflow-x-auto max-w-full px-2" onClick={(e) => e.stopPropagation()}>
            {SHOWREELS.map((reel) => (
              <button key={reel.id} onClick={() => setActiveReel(reel)} className={`px-3 py-1.5 md:px-4 md:py-2 text-xs font-medium uppercase tracking-wider rounded transition-all duration-300 whitespace-nowrap ${activeReel.id === reel.id ? 'bg-accent text-background' : 'text-white/60 hover:text-white border border-white/20 hover:border-white/40'}`}>{locale === 'it' ? reel.labelIt : reel.labelEn}</button>
            ))}
          </div>
          <div className="w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            {activeReel.mp4Url ? (<video key={activeReel.id} autoPlay controls playsInline className="w-full h-full rounded-lg"><source src={activeReel.mp4Url} type="video/mp4" /></video>) : (<iframe key={activeReel.youtubeId} src={`https://www.youtube.com/embed/${activeReel.youtubeId}?autoplay=1&rel=0&modestbranding=1`} className="w-full h-full rounded-lg" style={{ border: 0 }} allow="autoplay; encrypted-media; fullscreen" allowFullScreen />)}
          </div>
        </div>
      )}
    </>
  );
}