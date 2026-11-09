'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Check, Copy, Play } from 'lucide-react'
import { trackEvent } from '@/components/AnalyticsScripts'
import { toTimecode } from '@/components/review/ReviewPlayer'
import type { ReviewDifference } from '@/data/reviews'

type CompareVersion = {
  id: string
  name: string
  summary?: string
  stream: string
  poster: string
}

type Props = {
  versions: CompareVersion[]
  differences: ReviewDifference[]
  fps: number
  project: string
  slug: string
}

/**
 * Montaggi alternativi nello stesso player.
 * Ogni versione ha il suo <video>, impilati: passando da V1 a V2 il nuovo video
 * riparte dallo stesso frame (e nello stesso stato, play o pausa) del precedente.
 */
export default function ReviewCompare({ versions, differences, fps, project, slug }: Props) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [active, setActive] = useState(0)
  const [time, setTime] = useState(0)
  const [copied, setCopied] = useState(false)
  const playedRef = useRef<Set<string>>(new Set())

  const current = versions[active]

  // Timecode a frame del video attivo (rAF, non onTimeUpdate a 4 Hz).
  useEffect(() => {
    const v = videoRefs.current[active]
    if (!v) return
    let raf = 0
    const tick = () => {
      setTime(v.currentTime)
      if (!v.paused) raf = requestAnimationFrame(tick)
    }
    const onPlay = () => {
      const id = versions[active].id
      if (!playedRef.current.has(id)) {
        playedRef.current.add(id)
        trackEvent('review_play', { review: slug, version: id })
      }
      // Dal primo play carico anche le altre versioni: il cambio diventa istantaneo.
      videoRefs.current.forEach((other) => {
        if (other && other !== v && other.preload !== 'auto') other.preload = 'auto'
      })
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(tick)
    }
    const onSeek = () => setTime(v.currentTime)
    v.addEventListener('play', onPlay)
    v.addEventListener('seeked', onSeek)
    v.addEventListener('pause', onSeek)
    setTime(v.currentTime)
    return () => {
      cancelAnimationFrame(raf)
      v.removeEventListener('play', onPlay)
      v.removeEventListener('seeked', onSeek)
      v.removeEventListener('pause', onSeek)
    }
  }, [active, slug, versions])

  /** Passa alla versione `index`. Senza opzioni conserva frame e stato di riproduzione. */
  const select = useCallback(
    (index: number, opts?: { at?: number; play?: boolean }) => {
      const from = videoRefs.current[active]
      const to = videoRefs.current[index]
      if (!to) return

      const t = opts?.at ?? from?.currentTime ?? 0
      const shouldPlay = opts?.play ?? (from ? !from.paused : false)

      if (from && from !== to) from.pause()

      const go = () => {
        to.currentTime = t
        if (shouldPlay) to.play().catch(() => {})
      }
      if (to.readyState >= 1) go()
      else to.addEventListener('loadedmetadata', go, { once: true })

      if (index !== active) {
        trackEvent('review_switch', { review: slug, version: versions[index].id })
        setActive(index)
      }
      setTime(t)
    },
    [active, slug, versions],
  )

  const tc = toTimecode(time, fps)

  const copyTimecode = useCallback(async () => {
    const text = `${project} ${current.id} · TC ${tc} — `
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard non disponibile: il TC resta leggibile a schermo
    }
  }, [project, current.id, tc])

  const jumpTo = (index: number, at: number) => {
    // mezzo frame dentro il taglio, per non atterrare sul frame precedente
    select(index, { at: at + 0.5 / fps, play: true })
    videoRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div>
      {/* Selettore versioni */}
      <div
        role="tablist"
        aria-label="Versioni a confronto"
        className="grid gap-px overflow-hidden rounded-sm border border-border bg-border"
        style={{ gridTemplateColumns: `repeat(${versions.length}, minmax(0, 1fr))` }}
      >
        {versions.map((v, i) => {
          const isActive = i === active
          return (
            <button
              key={v.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => select(i)}
              className={`relative flex min-h-[64px] items-center gap-3 px-4 py-3 text-left transition-colors md:gap-4 md:px-6 ${
                isActive ? 'bg-surface' : 'bg-background hover:bg-surface/60'
              }`}
            >
              <span
                className={`font-mono text-2xl font-bold tabular-nums md:text-3xl ${
                  isActive ? 'text-accent' : 'text-text-muted'
                }`}
              >
                {v.id}
              </span>
              <span
                className={`text-xs font-semibold uppercase tracking-[0.15em] md:text-sm ${
                  isActive ? 'text-text-primary' : 'text-text-secondary'
                }`}
              >
                {v.name}
              </span>
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-0 h-0.5 transition-colors ${
                  isActive ? 'bg-accent' : 'bg-transparent'
                }`}
              />
            </button>
          )
        })}
      </div>

      {/* Player: un video per versione, impilati */}
      <div className="relative mt-4 aspect-video overflow-hidden rounded-sm border border-border bg-black">
        {versions.map((v, i) => (
          <video
            key={v.id}
            ref={(el) => {
              videoRefs.current[i] = el
            }}
            className={`absolute inset-0 h-full w-full bg-black ${
              i === active ? 'visible' : 'invisible'
            }`}
            src={v.stream}
            poster={v.poster}
            controls={i === active}
            preload="metadata"
            playsInline
            controlsList="nodownload"
            aria-label={`${project} ${v.id}`}
            aria-hidden={i !== active}
            tabIndex={i === active ? 0 : -1}
          />
        ))}
      </div>

      {/* Barra timecode */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3">
        <span className="font-mono text-sm tabular-nums text-text-secondary">
          <span className="text-accent">{current.id}</span> · TC{' '}
          <span className="text-text-primary">{tc}</span>
        </span>
        <button
          type="button"
          onClick={copyTimecode}
          className="inline-flex min-h-[44px] items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-text-secondary transition-colors hover:text-accent"
        >
          {copied ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
          {copied ? 'Timecode copiato' : 'Copia timecode per una nota'}
        </button>
      </div>

      {current.summary ? (
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text-secondary md:text-base">
          <span className="font-semibold text-text-primary">
            {current.id} · {current.name}.
          </span>{' '}
          {current.summary}
        </p>
      ) : null}
      <p className="mt-2 text-xs leading-relaxed text-text-muted">
        Passando da una versione all’altra il video resta sullo stesso frame: in pausa, il confronto
        è immediato.
      </p>

      {/* Dove cambiano */}
      {differences.length > 0 ? (
        <div className="mt-14 md:mt-16">
          <h2 className="section-title">Dove cambiano</h2>
          <ol className="divide-y divide-border border-y border-border">
            {differences.map((d, n) => (
              <li
                key={d.title}
                className="py-6 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-8"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {String(n + 1).padStart(2, '0')} · {d.title}
                  </p>
                  <p className="mt-2 font-mono text-xs tabular-nums text-text-muted">
                    {toTimecode(d.from, fps)} → {toTimecode(d.to, fps)}
                  </p>
                </div>
                <ul className="mt-4 grid gap-2 md:mt-0">
                  {versions.map((v, i) => {
                    const text = d.byVersion[v.id]
                    if (!text) return null
                    const isActive = i === active
                    return (
                      <li key={v.id}>
                        <button
                          type="button"
                          onClick={() => jumpTo(i, d.from)}
                          className={`group flex w-full items-start gap-4 rounded-sm border px-4 py-3 text-left transition-colors ${
                            isActive
                              ? 'border-accent/40 bg-accent-muted'
                              : 'border-border hover:border-accent/40'
                          }`}
                        >
                          <span
                            className={`mt-0.5 font-mono text-sm font-bold tabular-nums ${
                              isActive ? 'text-accent' : 'text-text-muted group-hover:text-accent'
                            }`}
                          >
                            {v.id}
                          </span>
                          <span className="flex-1 text-sm leading-relaxed text-text-secondary">
                            {text}
                          </span>
                          <Play
                            size={14}
                            aria-hidden="true"
                            className="mt-1 shrink-0 text-text-muted transition-colors group-hover:text-accent"
                          />
                          <span className="sr-only">Guarda in {v.id}</span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      ) : null}
    </div>
  )
}
