import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Calendar, Download, Mail } from 'lucide-react'

import ReviewPlayer from '@/components/review/ReviewPlayer'
import TrackedLink from '@/components/TrackedLink'
import { getReview, reviews } from '@/data/reviews'

// Pagine di revisione riservate: solo IT, solo gli slug in data/reviews.ts.
// /en/review/... e slug inesistenti → 404.
export const dynamicParams = false

const CONTACT_EMAIL = 'info@pieroperilli.com'
const CALENDLY = 'https://calendly.com/pieroperilli-info/30min'

type Props = { params: { locale: string; slug: string } }

export function generateStaticParams() {
  return reviews.map((r) => ({ locale: 'it', slug: r.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const review = getReview(params.slug)
  if (!review) return {}
  const v = review.versions[0]
  const title = `${review.project} — ${v.name} | Revisione riservata`

  return {
    title,
    description: `${review.project} · ${review.subtitle}. Pagina di revisione riservata.`,
    // Fuori dall'indice e fuori dal grafo SEO. Nessun Disallow in robots.txt:
    // bloccare la scansione impedirebbe a Google di leggere questo noindex.
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: { index: false, follow: false, noimageindex: true },
    },
    // Annulla canonical/hreflang ereditati dal layout.
    alternates: { canonical: null, languages: {} },
    // Anteprima pulita quando il link viene incollato in mail/WhatsApp.
    openGraph: {
      title,
      description: `${review.subtitle} — ${v.name}`,
      images: [{ url: v.poster, width: 1280, height: 720, alt: review.project }],
    },
    twitter: { card: 'summary_large_image', title, images: [v.poster] },
  }
}

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('it-IT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

export default function ReviewPage({ params }: Props) {
  if (params.locale !== 'it') notFound()
  const review = getReview(params.slug)
  if (!review) notFound()

  const [current, ...previous] = review.versions
  const label = `${review.project} ${current.id}`
  // Dalla v2 in poi la pagina si presenta come aggiornamento.
  const isUpdate = current.id !== 'v1'

  const subject = `${review.project} ${current.id} — note`
  const body = [
    `Note su ${review.project} · ${current.id} (${current.name})`,
    '',
    'TC 00:00:00 — ',
    'TC 00:00:00 — ',
    '',
    'Note generali:',
    '',
  ].join('\n')
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  const meta = [
    { k: 'Cliente', v: review.client },
    { k: 'Versione', v: `${current.id} · ${current.name}` },
    { k: isUpdate ? 'Aggiornata il' : 'Consegna', v: formatDate(current.date) },
    { k: 'Durata', v: current.duration },
  ]

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-section-sm pt-28 md:px-8 md:pb-section md:pt-36">
      {/* 1 · Intestazione */}
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Revisione riservata
        </p>
        <h1 className="mt-4 text-display-sm font-bold text-text-primary md:text-display-lg">
          {review.project}
        </h1>
        <p className="mt-2 text-lg text-accent md:text-xl">{review.subtitle}</p>

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-border py-6 md:grid-cols-4">
          {meta.map((m) => (
            <div key={m.k}>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-text-muted">
                {m.k}
              </dt>
              <dd className="mt-1.5 text-sm text-text-primary">{m.v}</dd>
            </div>
          ))}
        </dl>
      </header>

      {/* 2 · Player + capitoli */}
      <section className="mt-10">
        {isUpdate ? (
          <p className="mb-4 inline-flex items-center gap-2.5 rounded-sm border border-accent/30 bg-accent-muted px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Nuova versione · aggiornata il {formatDate(current.date)}
          </p>
        ) : null}
        <ReviewPlayer
          src={current.stream}
          poster={current.poster}
          fps={review.fps}
          label={label}
          slug={review.slug}
          versionId={current.id}
          chapters={review.chapters}
        />
      </section>

      {/* 3 · Download */}
      <section className="mt-16 md:mt-20">
        <h2 className="section-title">Scarica</h2>
        <ul className="divide-y divide-border border-y border-border">
          {current.downloads.map((d) => (
            <li
              key={d.url}
              className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-sm font-medium text-text-primary">
                  {review.project} · {current.id} — {d.label}
                </p>
                <p className="mt-1 font-mono text-xs text-text-muted">
                  {d.spec} · {d.size}
                </p>
              </div>
              <TrackedLink
                href={d.url}
                eventName="review_download"
                eventParams={{ review: review.slug, version: current.id, file: d.label }}
                className="btn-primary justify-center"
              >
                <Download size={16} />
                Scarica
              </TrackedLink>
            </li>
          ))}
        </ul>
      </section>

      {/* 4 · Nota di lettura */}
      <section className="mt-16 max-w-3xl md:mt-20">
        <h2 className="section-title">Nota di lettura</h2>
        <div className="border-l-2 border-accent/60 pl-5">
          {review.intro.map((p, i) => (
            <p
              key={i}
              className={`${i > 0 ? 'mt-4' : ''} text-base leading-relaxed text-text-secondary md:text-lg`}
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* 5 · Feedback */}
      <section className="relative mt-16 overflow-hidden rounded-lg border border-accent/25 bg-surface p-6 md:mt-20 md:p-10 lg:p-12">
        <h2 className="text-display-sm font-bold text-text-primary">Le tue note</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
          Metti in pausa sul punto che ti interessa, copia il timecode e incollalo nella
          mail accanto alla nota. Se preferisci, guardiamo il film insieme in una call.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <TrackedLink
            href={mailto}
            eventName="review_feedback_email"
            eventParams={{ review: review.slug, version: current.id }}
            className="btn-primary justify-center"
          >
            <Mail size={16} />
            Invia le note
          </TrackedLink>
          <TrackedLink
            href={CALENDLY}
            eventName="calendly_click"
            eventParams={{ location: 'review', review: review.slug }}
            className="btn-secondary justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Calendar size={16} />
            Prenota una call di revisione
          </TrackedLink>
        </div>
      </section>

      {/* 6 · Versioni precedenti (compare da v2 in poi) */}
      {previous.length > 0 ? (
        <section className="mt-16 md:mt-20">
          <h2 className="section-title">Versioni precedenti</h2>
          <ul className="divide-y divide-border border-y border-border">
            {previous.map((v) => (
              <li
                key={v.id}
                className="flex flex-col gap-3 py-4 text-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-text-secondary">
                  <span className="text-text-primary">{v.id}</span> · {v.name} ·{' '}
                  {formatDate(v.date)}
                </span>
                <span className="flex flex-wrap gap-x-5 gap-y-2">
                  {v.downloads.map((d) => (
                    <TrackedLink
                      key={d.url}
                      href={d.url}
                      eventName="review_download"
                      eventParams={{ review: review.slug, version: v.id, file: d.label }}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-text-muted transition-colors hover:text-accent"
                    >
                      <Download size={14} />
                      {d.label}
                    </TrackedLink>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <p className="mt-16 text-xs leading-relaxed text-text-muted">{review.confidentiality}</p>
    </main>
  )
}
