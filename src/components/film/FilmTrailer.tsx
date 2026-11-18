'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

import { trackEvent } from '@/components/AnalyticsScripts'

type Props = {
  src: string
  poster: string
  label: string
  playLabel: string
  comingSoonLabel: string
  duration?: string
  film: string
}

// Trailer in 2.39:1. Prima del clic: solo il fotogramma (nessun byte di video scaricato).
// Dopo il clic: player nativo, parte subito con l'audio.
// `src` vuoto → fotogramma con "Trailer in arrivo", nessun pulsante.
export default function FilmTrailer({ src, poster, label, playLabel, comingSoonLabel, duration, film }: Props) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative aspect-[2.39/1] w-full overflow-hidden bg-black">
      {playing && src ? (
        <video
          className="absolute inset-0 h-full w-full bg-black object-contain"
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          aria-label={label}
          onEnded={() => trackEvent('film_trailer_complete', { film })}
        />
      ) : (
        <>
          <Image
            src={poster}
            alt=""
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35" aria-hidden />
          {src ? (
            <button
              type="button"
              onClick={() => {
                setPlaying(true)
                trackEvent('film_trailer_play', { film })
              }}
              className="group absolute inset-0 flex flex-col items-center justify-center gap-4 text-[#efe3cf] focus-visible:outline-none"
              aria-label={`${playLabel}${duration ? ` (${duration})` : ''}`}
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#efe3cf]/50 bg-black/30 backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-accent group-hover:text-accent group-focus-visible:border-accent md:h-20 md:w-20">
                <Play size={22} className="ml-1" fill="currentColor" strokeWidth={0} />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em]">
                {playLabel}
                {duration ? <span className="ml-3 font-mono tracking-normal text-[#efe3cf]/60">{duration}</span> : null}
              </span>
            </button>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="border border-[#efe3cf]/25 bg-black/40 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#efe3cf]/80 backdrop-blur-sm">
                {comingSoonLabel}
              </span>
            </div>
          )}
        </>
      )}
    </div>
  )
}
