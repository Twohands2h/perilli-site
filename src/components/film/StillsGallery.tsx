'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

import { trackEvent } from '@/components/AnalyticsScripts'

type Props = {
  stills: string[]
  alts: string[]
  film: string
  labels: { open: string; close: string; prev: string; next: string }
}

const pad = (n: number) => String(n).padStart(2, '0')

// Galleria fotogrammi 2.39:1 con ritmo intera / coppia / intera / coppia…
// Clic → visore a schermo intero (frecce a schermo e da tastiera, Esc per chiudere).
export default function StillsGallery({ stills, alts, film, labels }: Props) {
  const [open, setOpen] = useState<number | null>(null)
  const total = stills.length

  const go = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + total) % total)),
    [total],
  )

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, go])

  // Righe: [0] · [1,2] · [3] · [4,5] · [6] · [7,8]
  const rows: number[][] = []
  for (let i = 0; i < total; ) {
    const single = rows.length % 2 === 0
    rows.push(single ? [i] : [i, i + 1].filter((n) => n < total))
    i += single ? 1 : 2
  }

  return (
    <>
      <div className="space-y-2 md:space-y-3">
        {rows.map((row) => (
          <div key={row[0]} className={`grid gap-2 md:gap-3 ${row.length > 1 ? 'md:grid-cols-2' : ''}`}>
            {row.map((i) => (
              <button
                key={stills[i]}
                type="button"
                onClick={() => {
                  setOpen(i)
                  trackEvent('film_still_open', { film, still: pad(i + 1) })
                }}
                className="group relative block aspect-[2.39/1] w-full overflow-hidden bg-white/[0.03] focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent"
                aria-label={`${labels.open} ${pad(i + 1)} — ${alts[i] ?? ''}`}
              >
                <Image
                  src={stills[i]}
                  alt={alts[i] ?? ''}
                  fill
                  sizes={row.length > 1 ? '(min-width: 768px) 50vw, 100vw' : '100vw'}
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-3 left-3 font-mono text-[10px] tracking-wider text-white/0 transition-colors duration-500 group-hover:text-white/70 md:bottom-4 md:left-4">
                  247 · {pad(i + 1)}
                </span>
              </button>
            ))}
          </div>
        ))}
      </div>

      {open !== null ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#030305]"
          role="dialog"
          aria-modal="true"
          aria-label={alts[open]}
          onClick={() => setOpen(null)}
        >
          <div className="relative h-full max-h-[86vh] w-full max-w-[96vw]" onClick={(e) => e.stopPropagation()}>
            <Image
              key={stills[open]}
              src={stills[open]}
              alt={alts[open] ?? ''}
              fill
              sizes="96vw"
              quality={90}
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={() => setOpen(null)}
            className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center text-white/70 transition-colors hover:text-accent md:right-6 md:top-6"
            aria-label={labels.close}
          >
            <X size={22} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              go(-1)
            }}
            className="absolute left-1 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white/60 transition-colors hover:text-accent md:left-4"
            aria-label={labels.prev}
          >
            <ChevronLeft size={28} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              go(1)
            }}
            className="absolute right-1 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white/60 transition-colors hover:text-accent md:right-4"
            aria-label={labels.next}
          >
            <ChevronRight size={28} />
          </button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs tracking-wider text-white/50">
            {pad(open + 1)} / {pad(total)}
          </p>
        </div>
      ) : null}
    </>
  )
}
