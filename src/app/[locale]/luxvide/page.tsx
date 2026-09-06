import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import LuxVideo from '@/components/luxvide/LuxVideo'
import { getLuxvideCopy, luxvideContacts, luxvideMedia } from '@/data/luxvide'

const BASE_URL = 'https://pieroperilli.com'

/**
 * Tutte le scelte di stile stanno qui.
 * Sostituisci i valori con le classi che usi già nelle pagine servizio
 * (ServicePageTemplate) e la pagina eredita il sito senza toccare il markup.
 * Il font NON è impostato da nessuna parte: viene dal layout [locale].
 */
const s = {
  wrap: 'mx-auto w-full max-w-3xl px-4 pb-24 pt-16 md:px-8 md:pt-24',
  section: 'mt-20 md:mt-24',
  h1: 'text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl',
  h2: 'mb-6 text-sm uppercase tracking-widest text-gray-500',
  h3: 'mt-3 text-xl font-medium text-white',
  lead: 'mt-6 text-lg leading-relaxed text-gray-300',
  body: 'text-base leading-relaxed text-gray-400',
  kicker: 'text-xs uppercase tracking-widest text-[#f5aa44]',
  rule: 'border-l-2 border-[#f5aa44]/60 pl-5',
  ruleMuted: 'border-l-2 border-white/15 pl-6',
  divider: 'divide-y divide-white/10 border-y border-white/10',
  label: 'text-sm uppercase tracking-wider text-gray-300',
  link: 'text-gray-300 underline decoration-gray-600 underline-offset-4 transition-colors hover:text-[#f5aa44] hover:decoration-[#f5aa44]',
  langLink:
    'text-sm uppercase tracking-widest text-gray-500 underline-offset-4 transition-colors hover:text-[#f5aa44] hover:underline',
}

type Props = { params: { locale: string } }

export function generateStaticParams() {
  return [{ locale: 'it' }, { locale: 'en' }]
}

export function generateMetadata({ params: { locale } }: Props): Metadata {
  const t = getLuxvideCopy(locale)
  const path = locale === 'en' ? '/en/luxvide' : '/luxvide'

  return {
    title: t.meta.title,
    description: t.meta.description,
    // Mono-destinataria: fuori dall'indice e fuori dal grafo SEO.
    // NB: nessun Disallow in robots.txt — bloccare la scansione
    // impedirebbe a Google di leggere questo noindex.
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: { index: false, follow: false },
    },
    // Sovrascrive canonical/hreflang ereditati dal layout.
    alternates: { canonical: `${BASE_URL}${path}`, languages: {} },
    openGraph: {
      type: 'profile',
      url: `${BASE_URL}${path}`,
      title: t.meta.ogTitle,
      description: t.meta.description,
      images: [
        {
          url: `${BASE_URL}/images/luxvide/luxvide-og.jpg`,
          width: 1200,
          height: 630,
          alt: t.meta.ogTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.ogTitle,
      description: t.meta.description,
      images: [`${BASE_URL}/images/luxvide/luxvide-og.jpg`],
    },
  }
}

export default function LuxvidePage({ params: { locale } }: Props) {
  const t = getLuxvideCopy(locale)
  const isEn = locale === 'en'
  const otherHref = isEn ? '/luxvide' : '/en/luxvide'

  return (
    <main className={s.wrap}>
      {/* switch lingua: routing next-intl, nessun localStorage */}
      <div className="mb-12 flex justify-end">
        <Link
          href={otherHref}
          hrefLang={isEn ? 'it' : 'en'}
          className={s.langLink}
        >
          {t.langLabel}
        </Link>
      </div>

      {/* 1 · Apertura + showreel */}
      <section>
        <h1 className={s.h1}>{t.opening.title}</h1>
        <p className={s.lead}>{t.opening.subtitle}</p>
        <div className="mt-10">
          <LuxVideo
            src={luxvideMedia.showreel.src}
            poster={luxvideMedia.showreel.poster}
            label={t.opening.reelCaption}
            caption={t.opening.reelCaption}
          />
        </div>
      </section>

      {/* 2 · Breakdown */}
      <Section title={t.breakdown.title}>
        <p className={s.body}>{t.breakdown.body}</p>
        <div className="mt-8">
          <LuxVideo
            src={luxvideMedia.breakdown.src}
            poster={luxvideMedia.breakdown.poster}
            label={t.breakdown.title}
          />
        </div>
      </Section>

      {/* 3 · Tenuta dell'identità */}
      <Section title={t.identity.title}>
        <p className={s.body}>{t.identity.body}</p>

        <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
          {luxvideMedia.identity.map((src, i) => (
            <div
              key={src}
              className="relative aspect-[3/4] overflow-hidden rounded-sm bg-white/5"
            >
              <Image
                src={src}
                alt={`${t.identity.title} — ${i + 1}/5`}
                fill
                sizes="(min-width: 768px) 130px, (min-width: 640px) 30vw, 45vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Didascalia normativa — non ammorbidire, non tagliare. */}
        <p className={`mt-6 ${s.rule} ${s.body}`}>{t.identity.caption}</p>
      </Section>

      {/* 4 · Lavori */}
      <Section title={t.works.title}>
        <div className="space-y-12">
          {t.works.items.map((w) => (
            <article key={w.title}>
              <p className={s.kicker}>{w.kicker}</p>
              <h3 className={s.h3}>{w.title}</h3>
              {w.body.map((p, i) => (
                <p key={i} className={`mt-4 ${s.body}`}>
                  {p}
                </p>
              ))}
            </article>
          ))}
        </div>
      </Section>

      {/* 5 · Metodo e pipeline — il blocco che ti distingue: densità e peso visivo */}
      <Section title={t.method.title}>
        <dl className={s.divider}>
          {t.method.items.map((m) => (
            <div
              key={m.label}
              className="py-6 md:grid md:grid-cols-[10rem_1fr] md:gap-8"
            >
              <dt className={s.label}>{m.label}</dt>
              <dd className="mt-3 md:mt-0">
                {m.body.map((p, i) => (
                  <p key={i} className={`${i > 0 ? 'mt-4' : ''} ${s.body}`}>
                    {p}
                  </p>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* 6 · Sviluppo e documentazione */}
      <Section title={t.development.title}>
        <div className={s.ruleMuted}>
          {t.development.body.map((p, i) => (
            <p key={i} className={`${i > 0 ? 'mt-4' : ''} ${s.body}`}>
              {p}
            </p>
          ))}
        </div>
      </Section>

      {/* 7 · Chi + contatti */}
      <Section title={t.about.title}>
        {t.about.body.map((p, i) => (
          <p key={i} className={`${i > 0 ? 'mt-2' : ''} ${s.body}`}>
            {p}
          </p>
        ))}

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {luxvideContacts.phone ? (
            <ContactLink href={luxvideContacts.phoneHref}>
              {luxvideContacts.phone}
            </ContactLink>
          ) : null}
          <ContactLink href={`mailto:${luxvideContacts.email}`}>
            {luxvideContacts.email}
          </ContactLink>
          {luxvideContacts.calendly ? (
            <ContactLink href={luxvideContacts.calendly}>Calendly</ContactLink>
          ) : null}
          {luxvideContacts.imdb ? (
            <ContactLink href={luxvideContacts.imdb}>IMDb</ContactLink>
          ) : null}
        </ul>
      </Section>
    </main>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className={s.section}>
      <h2 className={s.h2}>{title}</h2>
      {children}
    </section>
  )
}

function ContactLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const external = href.startsWith('http')
  return (
    <li>
      <a
        href={href}
        {...(external
          ? { target: '_blank', rel: 'noopener noreferrer nofollow' }
          : {})}
        className={s.link}
      >
        {children}
      </a>
    </li>
  )
}
