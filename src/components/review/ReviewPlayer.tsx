'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { trackEvent } from '@/components/AnalyticsScripts'
import type { ReviewChapter } from '@/data/reviews'

type Props = {
  src: string
  poster: string
  fps: number
  label: string // 'ART SITE PARK v1'
  slug: string
  versionId: string
  chapters: ReviewChapter[]
}

/** mm:ss:ff — il formato con cui il cliente può indicare un punto preciso. */
export function toTimecode(seconds: number, fps: number) {
  const total = Math.max(0, Math.floor(seconds * fps))
  const ff = total % fps
  const s = Math.floor(total / fps)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${pad(Math.floor(s / 60))}:${pad(s % 60)}:${pad(ff)}`
}

export default function ReviewPlayer({
  src,
  poster,
  fps,
  label,
  slug,
  versionId,
  chapters,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [time, setTime] = useState(0)
  const [copied, setCopied] = useState(false)
  const playedRef = useRef(false)

  // rAF invece di onTimeUpdate (4 Hz): il timecode scorre a frame.
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    let raf = 0
    const tick = () => {
      setTime(v.currentTime)
      if (!v.paused) raf = requestAnimationFrame(tick)
    }
    const onPlay = () => {
      if (!playedRef.current) {
        playedRef.current = true
        trackEvent('review_play', { review: slug, version: versionId })
      }
      raf = requestAnimationFrame(tick)
    }
    const onSeek = () => setTime(v.currentTime)
    v.addEventListener('play', onPlay)
    v.addEventListener('seeked', onSeek)
    v.addEventListener('pause', onSeek)
    return () => {
      cancelAnimationFrame(raf)
      v.removeEventListener('play', onPlay)
      v.removeEventListener('seeked', onSeek)
      v.removeEventListener('pause', onSeek)
    }
  }, [slug, versionId])

  const tc = toTimecode(time, fps)

  const copyTimecode = useCallback(async () => {
    const text = `${label} · TC ${tc} — `
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard non disponibile (iframe, http): il TC resta leggibile a schermo
    }
  }, [label, tc])

  const seek = (t: number) => {
    const v = videoRef.current
    if (!v) return
    v.currentTime = t
    v.scrollIntoView({ behavior: 'smooth', block: 'center' })
    v.play().catch(() => {})
  }

  return (
    <div>
      <div className="relative overflow-hidden rounded-sm border border-border bg-surface">
        <video
          ref={videoRef}
          className="aspect-video w-full bg-black"
          src={src}
          poster={poster}
          controls
          preload="metadata"
          playsInline
          controlsList="nodownload"
          aria-label={label}
        />
      </div>

      {/* Barra timecode: il cliente mette in pausa, copia, incolla nella mail. */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3">
        <span className="font-mono text-sm tabular-nums text-text-secondary">
          TC <span className="text-text-primary">{tc}</span>
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

      {chapters.length > 0 ? (
        <ol className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((c, i) => {
            const clickable = c.time !== null
            const inner = (
              <>
                <span className="flex items-baseline justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {String(i + 1).padStart(2, '0')} · {c.title}
                  </span>
                  {clickable ? (
                    <span className="font-mono text-xs tabular-nums text-text-muted">
                      {toTimecode(c.time as number, fps).slice(0, 5)}
                    </span>
                  ) : null}
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-text-secondary">
                  {c.note}
                </span>
              </>
            )
            return (
              <li key={c.title} className="bg-background">
                {clickable ? (
                  <button
                    type="button"
                    onClick={() => seek(c.time as number)}
                    className="block h-full w-full p-5 text-left transition-colors hover:bg-surface"
                  >
                    {inner}
                  </button>
                ) : (
                  <div className="h-full p-5">{inner}</div>
                )}
              </li>
            )
          })}
        </ol>
      ) : null}
    </div>
  )
}
