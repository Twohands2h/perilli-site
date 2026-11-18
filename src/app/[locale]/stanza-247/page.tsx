import type { Metadata } from 'next'
import Image from 'next/image'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Download, Mail } from 'lucide-react'

import AnimateOnScroll from '@/components/AnimateOnScroll'
import TrackedLink from '@/components/TrackedLink'
import FilmTrailer from '@/components/film/FilmTrailer'
import StillsGallery from '@/components/film/StillsGallery'
import { filmSerif } from '@/components/film/fonts'
import { getStanza247Copy, stanza247Media as media, stanza247Selections as selections } from '@/data/stanza247'
import { getPageAlternates, getPageOgUrl } from '@/lib/seo'

/**
 * /stanza-247 — pagina del cortometraggio (pubblica, indicizzata, IT/EN).
 * Per festival, stampa e presentazione personale del film.
 * Testi, trailer, scheda tecnica e selezioni: src/data/stanza247.ts.
 *
 * Palette presa dalla locandina: notte blu-nera, luce tungsteno, titolo crema.
 */

const BASE_URL = 'https://pieroperilli.com'
const PATH = '/stanza-247'
const FILM = 'stanza-247'
const CONTACT_EMAIL = 'info@pieroperilli.com'
const REWAKE_URL = 'https://rewake.studio?utm_source=pieroperilli.com&utm_medium=referral&utm_campaign=stanza-247'

const BG = 'bg-[#06070a]'
const CREAM = 'text-[#efe3cf]'
const CREAM_MUTED = 'text-[#cfc3ad]'
const SERIF = `${filmSerif.className} lining-nums`

// Grana pellicola: rumore SVG, nessun file esterno.
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

type Props = { params: { locale: string } }

export function generateStaticParams() {
  return [{ locale: 'it' }, { locale: 'en' }]
}

export function generateMetadata({ params: { locale } }: Props): Metadata {
  const t = getStanza247Copy(locale)
  const isIt = locale === 'it'
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: getPageAlternates(PATH, locale),
    openGraph: {
      type: 'video.movie',
      url: getPageOgUrl(PATH, locale),
      siteName: 'Piero Perilli — Artigiano Digitale',
      locale: isIt ? 'it_IT' : 'en_US',
      alternateLocale: isIt ? 'en_US' : 'it_IT',
      title: t.meta.title,
      description: t.meta.description,
      images: [{ url: `${BASE_URL}${media.og}`, width: 1200, height: 630, alt: t.meta.ogAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.title,
      description: t.meta.description,
      images: [`${BASE_URL}${media.og}`],
    },
  }
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-8 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent md:mb-10">
      <span className="h-px w-8 bg-accent/60" aria-hidden />
      {children}
    </p>
  )
}

export default function Stanza247Page({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale)
  const t = getStanza247Copy(locale)
  const pageUrl = getPageOgUrl(PATH, locale)
  const specs = t.specs.items.filter((s) => s.value)
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t.press.screenerSubject)}&body=${encodeURIComponent(t.press.screenerBody)}`

  const abs = (url: string) => (url.startsWith('http') ? url : `${BASE_URL}${url}`)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Movie',
    name: 'Stanza 247',
    url: pageUrl,
    image: `${BASE_URL}${media.locandinaDownload}`,
    description: t.logline,
    genre: t.specs.items[1].value,
    dateCreated: '2026',
    inLanguage: locale,
    countryOfOrigin: { '@type': 'Country', name: 'Italy' },
    director: { '@type': 'Person', name: 'Piero Perilli', url: BASE_URL },
    author: { '@type': 'Person', name: 'Piero Perilli', url: BASE_URL },
    duration: media.runtime.iso,
    ...(media.trailer.src && media.trailer.uploadDate
      ? {
          trailer: {
            '@type': 'VideoObject',
            name: t.trailer.videoLabel,
            description: t.logline,
            thumbnailUrl: abs(media.trailer.poster),
            duration: 'PT41S',
            contentUrl: abs(media.trailer.src),
            uploadDate: media.trailer.uploadDate,
          },
        }
      : {}),
  }

  return (
    <div className={`relative -mt-16 md:-mt-20 ${BG}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{`
        @keyframes s247-drift { from { transform: scale(1.03) } to { transform: scale(1.1) translate3d(-0.8%, -1%, 0) } }
        @keyframes s247-rise { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .s247-drift { animation: s247-drift 32s cubic-bezier(.2,.6,.3,1) forwards }
        .s247-rise { opacity: 0; animation: s247-rise 1.4s cubic-bezier(.2,.6,.3,1) forwards }
        @media (prefers-reduced-motion: reduce) {
          .s247-drift, .s247-rise { animation: none; opacity: 1 }
        }
      `}</style>

      {/* ── 1 · Apertura ─────────────────────────────────────────── */}
      {/* Come la locandina: la stanza sopra, il titolo sotto, sul nero.
          Immagine e testo sono in colonna (non sovrapposti a tutta altezza): il titolo
          sfiora solo il pavimento in dissolvenza e non copre mai l'uomo, a qualsiasi schermo. */}
      <section className="relative overflow-hidden">
        <div className="relative h-[58svh] min-h-[340px] overflow-hidden sm:h-[64svh] lg:aspect-[2.39/1] lg:h-auto lg:max-h-[82svh]">
          <div className="s247-drift absolute inset-0">
            <Image
              src={media.hero}
              alt=""
              fill
              priority
              // su mobile l'immagine è ritagliata in altezza: serve un file ~3× più largo dello schermo
              sizes="(max-width: 1023px) 300vw, 100vw"
              quality={85}
              className="object-cover object-[52%_50%]"
            />
          </div>
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 50% 45%, transparent 50%, rgba(6,7,10,0.55) 100%)' }}
            aria-hidden
          />
          {/* leggibilità header in alto, dissolvenza nel nero in basso */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#06070a] via-[#06070a]/60 to-transparent" aria-hidden />
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay" style={{ backgroundImage: GRAIN }} aria-hidden />

        <div className="relative -mt-24 w-full px-5 pb-16 text-center md:-mt-32 md:pb-24 lg:-mt-40">
          <p className={`s247-rise ${SERIF} text-lg italic ${CREAM_MUTED} md:text-2xl`} style={{ animationDelay: '0.4s' }}>
            {t.hero.tagline}
          </p>
          <h1
            className={`s247-rise mt-3 ${SERIF} font-medium leading-none ${CREAM}`}
            style={{
              fontSize: 'clamp(3rem, min(11vw, 19svh), 10rem)',
              letterSpacing: '0.12em',
              paddingLeft: '0.12em', // compensa il tracking finale: titolo otticamente centrato
              animationDelay: '1s',
            }}
          >
            STANZA 247
          </h1>
          <div className="s247-rise mt-8 md:mt-10" style={{ animationDelay: '1.5s' }}>
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/45 md:text-[11px]">
              {t.hero.creditLabel}
            </p>
            <p className={`mt-2 text-sm font-semibold uppercase tracking-[0.32em] ${CREAM} md:text-base`}>
              Piero Perilli
            </p>
          </div>
          <div
            className="s247-rise mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-12"
            style={{ animationDelay: '1.9s' }}
          >
            <a
              href="#trailer"
              className="inline-flex min-h-[44px] items-center gap-2.5 border border-[#efe3cf]/35 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#efe3cf] transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              {t.hero.trailerCta}
            </a>
            <a
              href="#festival"
              className="inline-flex min-h-[44px] items-center px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/55 transition-colors duration-300 hover:text-accent"
            >
              {t.hero.festivalCta}
            </a>
          </div>
        </div>
      </section>

      {/* ── 2 · Trailer ──────────────────────────────────────────── */}
      <section id="trailer" className="scroll-mt-24 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <AnimateOnScroll>
            <Label>{t.trailer.label}</Label>
            <FilmTrailer
              src={media.trailer.src}
              poster={media.trailer.poster}
              label={t.trailer.videoLabel}
              playLabel={t.trailer.play}
              comingSoonLabel={t.trailer.comingSoon}
              duration={media.trailer.duration}
              film={FILM}
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── 3 · Logline + sinossi ────────────────────────────────── */}
      <section className="py-16 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <AnimateOnScroll>
            <p
              className={`mx-auto max-w-4xl text-center ${SERIF} ${CREAM}`}
              style={{ fontSize: 'clamp(1.6rem, 3.6vw, 2.9rem)', lineHeight: 1.22 }}
            >
              {t.logline}
            </p>
          </AnimateOnScroll>

          <div className="mt-20 grid gap-10 md:mt-28 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-4">
              <AnimateOnScroll>
                <Label>{t.synopsis.label}</Label>
              </AnimateOnScroll>
            </div>
            <div className="md:col-span-8 lg:col-span-7">
              <AnimateOnScroll delay={100}>
                <div className="space-y-5 text-base leading-relaxed text-text-secondary md:text-lg">
                  {t.synopsis.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 · Fotogrammi ───────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-2 md:px-6">
          <div className="px-3 md:px-2">
            <AnimateOnScroll>
              <Label>{t.stills.label}</Label>
            </AnimateOnScroll>
          </div>
          <StillsGallery
            stills={media.stills}
            alts={t.stills.alt}
            film={FILM}
            labels={{ open: t.stills.open, close: t.stills.close, prev: t.stills.prev, next: t.stills.next }}
          />
        </div>
      </section>

      {/* ── 5 · Note di regia ────────────────────────────────────── */}
      <section className="py-16 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-12 md:gap-12 md:px-8">
          <div className="md:col-span-4">
            <AnimateOnScroll>
              <Label>{t.director.label}</Label>
            </AnimateOnScroll>
          </div>
          <div className="md:col-span-8 lg:col-span-7">
            <AnimateOnScroll delay={100}>
              <p className={`${SERIF} ${CREAM}`} style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', lineHeight: 1.25 }}>
                {t.director.lead}
              </p>
              <div className="mt-10 space-y-5 text-base leading-relaxed text-text-secondary md:text-lg">
                {t.director.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className={`mt-10 ${SERIF} text-2xl italic ${CREAM_MUTED}`}>— {t.director.signature}</p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── 6 · Metodo ───────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <AnimateOnScroll>
            <Label>{t.method.label}</Label>
            <h2 className={`${SERIF} font-medium ${CREAM}`} style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.75rem)', lineHeight: 1.15 }}>
              {t.method.title}
            </h2>
          </AnimateOnScroll>

          <ol className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {t.method.steps.map((step, i) => (
              <li key={step.title} className={`${BG} p-6 md:p-7`}>
                <AnimateOnScroll delay={i * 80}>
                  <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.15em] text-text-primary">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">{step.body}</p>
                </AnimateOnScroll>
              </li>
            ))}
          </ol>

          <AnimateOnScroll>
            <p className="mt-10 max-w-3xl text-sm leading-relaxed text-text-muted md:text-base">
              {t.method.rewake.before}
              <TrackedLink
                href={REWAKE_URL}
                eventName="rewake_click"
                eventParams={{ location: FILM }}
                target="_blank"
                rel="noopener"
                className="text-text-secondary underline decoration-white/25 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {t.method.rewake.link}
              </TrackedLink>
              {t.method.rewake.after}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── 7 · Respiro: il motel ────────────────────────────────
          Immagine pulita, senza sfumature né grana sopra: deve restare contrastata come l'originale. */}
      <section className="mt-8 md:mt-16" aria-hidden>
        <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[2.39/1]">
          <Image src={media.closing} alt="" fill sizes="(max-width: 639px) 180vw, 100vw" quality={90} className="object-cover object-[38%_50%]" />
        </div>
      </section>

      {/* ── 8 · Selezioni (compare quando c'è almeno una voce) ──── */}
      {selections.length > 0 ? (
        <section className="pt-20 md:pt-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <AnimateOnScroll>
              <Label>{t.selections.label}</Label>
              <ul className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                {selections.map((s) => (
                  <li key={`${s.festival}-${s.year}`} className={`${BG} px-6 py-8 text-center`}>
                    <p className={`${SERIF} text-2xl ${CREAM}`}>{s.festival}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-text-muted">
                      {s.detail} · {s.year}
                    </p>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>
        </section>
      ) : null}

      {/* ── 9 · Locandina, scheda tecnica, festival e stampa ─────── */}
      <section id="festival" className="scroll-mt-24 pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-8">
          <div className="md:col-span-5 lg:col-span-4">
            <AnimateOnScroll>
              <div className="relative aspect-[2100/2968] w-full overflow-hidden bg-white/[0.03] shadow-2xl shadow-black/60">
                <Image
                  src={media.locandina}
                  alt={t.press.posterAlt}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 768px) 40vw, 100vw"
                  quality={90}
                  className="object-cover"
                />
              </div>
              <TrackedLink
                href={media.locandinaDownload}
                eventName="film_poster_download"
                eventParams={{ film: FILM }}
                className="mt-5 inline-flex min-h-[44px] items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary transition-colors hover:text-accent"
              >
                <Download size={14} />
                {t.press.posterCta}
                <span className="font-mono text-[10px] tracking-normal text-text-muted">JPG · 2100×2968</span>
              </TrackedLink>
            </AnimateOnScroll>
          </div>

          <div className="md:col-span-7 lg:col-span-8">
            <AnimateOnScroll delay={100}>
              <Label>{t.specs.label}</Label>
              <dl className="divide-y divide-white/10 border-y border-white/10">
                {specs.map((s) => (
                  <div key={s.label} className="grid gap-1 py-3.5 sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-6">
                    <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted sm:pt-0.5">{s.label}</dt>
                    <dd className="text-sm text-text-primary md:text-base">
                      {s.value === 'Rewake' ? (
                        <TrackedLink
                          href={REWAKE_URL}
                          eventName="rewake_click"
                          eventParams={{ location: `${FILM}-specs` }}
                          target="_blank"
                          rel="noopener"
                          className="underline decoration-white/25 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                        >
                          Rewake
                        </TrackedLink>
                      ) : (
                        s.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <div className="mt-14 border border-accent/25 bg-white/[0.02] p-6 md:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">{t.press.label}</p>
                <h2 className={`mt-4 ${SERIF} font-medium ${CREAM}`} style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', lineHeight: 1.2 }}>
                  {t.press.title}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary">{t.press.body}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <TrackedLink
                    href={mailto}
                    eventName="film_screener_request"
                    eventParams={{ film: FILM }}
                    className="btn-primary justify-center"
                  >
                    <Mail size={16} />
                    {t.press.screenerCta}
                  </TrackedLink>
                  <span className="text-sm text-text-muted sm:ml-3">
                    {t.press.contactLabel}:{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-text-secondary transition-colors hover:text-accent">
                      {CONTACT_EMAIL}
                    </a>
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  )
}
