import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import type { Metadata } from "next";

/**
 * /selected-work — pagina reale del sito.
 *
 * Eredita header, footer, font e tema dal layout [locale]. Nessun CSS
 * proprietario: usa gli stessi token delle pagine servizio
 * (section-container, bg-surface, text-text-*, border-border, text-accent).
 *
 * Non è linkata dal menu e non entra in sitemap: si raggiunge per URL
 * inoltrato. Ma è una pagina del sito a tutti gli effetti, non una landing
 * staccata.
 */

const BASE_URL = "https://pieroperilli.com";

type Props = { params: { locale: string } };

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const en = locale === "en";
  const path = en ? "/en/selected-work" : "/selected-work";

  return {
    title: "Selected Work | Piero Perilli",
    description: en
      ? "Selected work for film and scripted production: AI filmmaking, VFX, compositing and post-production."
      : "Lavori selezionati per cinema e produzione seriale: AI filmmaking, VFX, compositing e post-produzione.",
    // Fuori dall'indice. Nessun Disallow in robots.txt: bloccare la scansione
    // impedirebbe a Google di leggere questo noindex.
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: { index: false, follow: false },
    },
    // Sovrascrive canonical e hreflang ereditati dal layout.
    alternates: { canonical: `${BASE_URL}${path}`, languages: {} },
    openGraph: {
      type: "profile",
      url: `${BASE_URL}${path}`,
      title: "Piero Perilli — Selected Work",
      description: en
        ? "AI filmmaking, VFX, compositing and post-production. Reel, breakdown and selected work."
        : "AI filmmaking, VFX, compositing e post-produzione. Reel, breakdown e lavori selezionati.",
      images: [
        {
          url: `${BASE_URL}/images/selected-work/selected-work-og.jpg`,
          width: 1200,
          height: 630,
          alt: "Piero Perilli — Selected Work",
        },
      ],
    },
    twitter: { card: "summary_large_image" },
  };
}

/* ======================================================================
   MEDIA — l'unico punto da modificare per aggiungere o cambiare video.

   Regola: `src` vuoto = sezione (o video della scheda) non renderizzata.
   Nessun player rotto, nessun rettangolo nero. Riempi il percorso e
   la sezione compare da sola.

   Poster: generali con lo script in COSA-COPIARE.md, oppure
   ffmpeg -i video.mp4 -frames:v 1 -vf scale=1920:-2 -quality 82 poster.webp
   ====================================================================== */
const MEDIA = {
  showreel: {
    src: "/videos/showreel-ai.mp4",
    poster: "/images/selected-work/showreel-ai-poster.webp",
    duration: "1'19\"",
  },
  breakdown: {
    // File dedicato a questa pagina: /ai-video usa breakdown-ai.mp4.
    // Le due pagine non condividono piu nessun media.
    src: "/videos/breakdown-selected-work.mp4",
    poster: "/images/selected-work/breakdown-selected-work-poster.webp",
    duration: "", // aggiorna quando hai il file definitivo
  },
  vfxReel: {
    src: "/videos/vfx-reel.mp4",
    poster: "/images/selected-work/vfx-reel-poster.webp",
    duration: "", // vuoto = a destra del titolo compare "20+ anni"
  },
  // Schede lavori
  stanza247: {
    src: "/videos/stanza-247.mp4",
    poster: "/images/selected-work/stanza-247-poster.webp",
  },
  roche: {
    src: "/videos/roche.mp4",
    poster: "/images/selected-work/roche-poster.webp",
  },
  caffo: {
    src: "/videos/caffo.mp4",
    poster: "/images/selected-work/caffo-poster.webp",
  },
  // Rewake: stessi asset già usati su /ai-video
  rewakeImage: "/images/services/rewake-film-memory-system-ai-filmmaking.webp",
} as const;

const H2 = "font-bold text-text-primary mb-4 md:mb-5";
const H2_STYLE = { fontSize: "clamp(1.25rem, 3vw, 2.25rem)", lineHeight: 1.12 };
const BODY =
  "text-text-secondary text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl";
const CAP = "text-sm text-text-muted leading-relaxed max-w-2xl mt-4 md:mt-5";

export default function SelectedWorkPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = locale === "en" ? copy.en : copy.it;

  return (
    <>
      {/* Apertura */}
      <section className="pt-24 pb-8 md:pt-32 lg:pt-40 md:pb-12 lg:pb-20">
        <div className="section-container">
          <p className="text-accent text-xs md:text-sm font-bold mb-4 md:mb-5">
            {t.eyebrow}
          </p>
          <h1
            className="font-bold text-text-primary mb-4 md:mb-5 max-w-4xl"
            style={{
              fontSize: "clamp(1.75rem, 5vw, 4rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
            }}
          >
            {t.heroTitle}
          </h1>
          <p className={BODY}>{t.heroBody}</p>
        </div>
      </section>

      {MEDIA.showreel.src ? (
        <MediaSection
          title="AI Film Reel"
          meta={MEDIA.showreel.duration}
          src={MEDIA.showreel.src}
          poster={MEDIA.showreel.poster}
          caption={t.reelCap}
        />
      ) : null}

      {MEDIA.breakdown.src ? (
        <MediaSection
          title="AI Breakdown"
          meta={MEDIA.breakdown.duration}
          src={MEDIA.breakdown.src}
          poster={MEDIA.breakdown.poster}
          caption={t.breakdownCap}
          surface
        />
      ) : null}

      {/* Lavori selezionati */}
      <section className="py-10 md:py-16 lg:py-20 border-t border-border">
        <div className="section-container">
          <h2 className={H2} style={H2_STYLE}>
            {t.worksTitle}
          </h2>

          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {t.works.map((w) => (
              <article
                key={w.title}
                className={w.full ? "md:col-span-2" : undefined}
              >
                {MEDIA[w.id].src ? (
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-black mb-4 md:mb-5">
                    <video
                      controls
                      preload="metadata"
                      poster={MEDIA[w.id].poster}
                      className="w-full h-full object-contain"
                      playsInline
                      aria-label={w.title}
                    >
                      <source src={MEDIA[w.id].src} type="video/mp4" />
                    </video>
                  </div>
                ) : null}

                <h3 className="text-sm md:text-base lg:text-lg font-bold text-text-primary mb-2 md:mb-3">
                  {w.title}
                </h3>
                <p className="text-xs md:text-sm text-accent/70 mb-2 md:mb-3">
                  {w.kicker}
                </p>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                  {w.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Rewake */}
      <section className="py-12 md:py-20 lg:py-24 border-t border-border bg-surface">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className={H2} style={H2_STYLE}>
                Rewake
              </h2>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-4">
                {t.rewake1}
              </p>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                {t.rewake2}
              </p>
              <a
                href="https://rewake.studio?utm_source=pieroperilli.com&utm_medium=referral&utm_campaign=selected-work"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 text-sm font-bold text-accent hover:text-accent-hover"
              >
                rewake.studio
              </a>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden bg-background border border-border-light/60">
              <Image
                src={MEDIA.rewakeImage}
                alt={t.rewakeImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VFX tradizionali — testo a sinistra, video a destra */}
      {MEDIA.vfxReel.src ? (
        <section className="py-10 md:py-16 lg:py-20 border-t border-border">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className={H2} style={H2_STYLE}>
                  {t.vfxTitle}
                </h2>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                  {t.vfxCap}
                </p>
                <p className="mt-4 text-xs md:text-sm text-text-muted">
                  {t.vfxMeta}
                </p>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                <video
                  controls
                  preload="metadata"
                  poster={MEDIA.vfxReel.poster}
                  className="w-full h-full object-contain"
                  playsInline
                  aria-label={t.vfxTitle}
                >
                  <source src={MEDIA.vfxReel.src} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Contatti */}
      <section className="py-10 md:py-16 lg:py-20 border-t border-border">
        <div className="section-container max-w-text">
          <h2 className={H2} style={H2_STYLE}>
            {t.contactTitle}
          </h2>
          <p className={BODY}>{t.contactBody}</p>

          <ul className="mt-6 md:mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <li>
              <a
                href="mailto:info@pieroperilli.com"
                className="text-text-secondary hover:text-accent"
              >
                info@pieroperilli.com
              </a>
            </li>
            <li>
              <a
                href="tel:+393920187759"
                className="text-text-secondary hover:text-accent"
              >
                +39 392 018 7759
              </a>
            </li>
            <li>
              <a
                href="https://www.imdb.com/name/nm3859505/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent"
              >
                IMDb
              </a>
            </li>
          </ul>

          <p className="mt-10 text-xs text-text-muted/50">{t.foot}</p>
        </div>
      </section>
    </>
  );
}

function MediaSection({
  title,
  meta,
  src,
  poster,
  caption,
  surface,
}: {
  title: string;
  meta: string;
  src: string;
  poster: string;
  caption: string;
  surface?: boolean;
}) {
  return (
    <section
      className={`py-10 md:py-16 lg:py-20 border-t border-border${
        surface ? " bg-surface" : ""
      }`}
    >
      <div className="section-container">
        <div className="flex items-baseline justify-between gap-4 flex-wrap mb-5 md:mb-6">
          <h2
            className="font-bold text-text-primary"
            style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.75rem)" }}
          >
            {title}
          </h2>
          <span className="text-xs md:text-sm text-text-muted">{meta}</span>
        </div>

        <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
          <video
            controls
            preload="metadata"
            poster={poster}
            className="w-full h-full object-contain"
            playsInline
            aria-label={title}
          >
            <source src={src} type="video/mp4" />
          </video>
        </div>

        <p className={CAP}>{caption}</p>
      </div>
    </section>
  );
}

const copy = {
  it: {
    eyebrow: "Lavori selezionati",
    // Alternative: "Scene che sopravvivono al montaggio." /
    // "Scene costruite per il film, non per il reel."
    heroTitle: "Immagini che appartengono a un film.",
    heroBody:
      "Oltre vent’anni di VFX e post-produzione. Oggi integro il generativo nello stesso processo: look development, continuità, compositing e finishing.",
    reelCap:
      "Sequenze narrative, continuità di personaggio, integrazione con live action e VFX generativi.",
    breakdownCap:
      "Cosa c’era prima, cosa è stato generato, cosa è stato compositato. La parte che non si vede è quella che decide se un’inquadratura regge dentro un montaggio.",
    vfxTitle: "VFX tradizionali",
    vfxMeta: "20+ anni",
    vfxCap:
      "Compositing, cleanup, tracking, integrazione CG, environment e finishing. Il mestiere prima dello strumento generativo.",
    worksTitle: "Lavori",
    works: [
      {
        id: "caffo" as const,
        title: "CAFFO 1915 — Vecchio Amaro del Capo",
        kicker: "Generativo dentro una pipeline VFX",
        body: "Live action, compositing di prodotto, VFX del liquido, folla ed elementi rigenerati. Il generativo come materiale controllabile dentro la lavorazione, non come sostituto della lavorazione.",
        full: true,
      },
      {
        id: "stanza247" as const,
        title: "Stanza 247",
        kicker: "Cortometraggio AI · in lavorazione",
        body: "Thriller psicologico sviluppato come produzione narrativa continua: personaggio ricorrente, location persistente, fotografia e continuità da inquadratura a inquadratura. Sceneggiatura IT/EN, shot list, project bible e playbook di produzione documentati prima della generazione.",
        full: false,
      },
      {
        id: "roche" as const,
        title: "Roche — Jingle Milano Cortina",
        kicker: "Persone reali · fotografie come sorgente",
        body: "Dipendenti reali ricostruiti da fotografie e mantenuti riconoscibili dentro scene completamente nuove. Il problema non era generare, ma tenere l’identità attraverso inquadrature diverse e scartare tutto il resto.",
        full: false,
      },
    ],
    rewake1:
      "Una produzione narrativa in AI accumula centinaia di clip, reference e versioni. Quel registro non lo tengo a mano: tenerlo a mano significa perdere la relazione fra ciò che è stato generato e ciò che è stato approvato.",
    rewake2:
      "Ho costruito Rewake mentre producevo i miei film. Tiene collegati scene, shot, take, reference, prompt e decisioni approvate per tutta la lavorazione.",
    rewakeImageAlt:
      "Workspace di Rewake: storyboard, reference del personaggio, prompt e output video collegati in un unico sistema",
    contactTitle: "Contatti",
    contactBody: "Per una call o per ricevere materiale aggiuntivo.",
    foot: "Pagina non indicizzata. Materiale selezionato per visione professionale.",
  },
  en: {
    eyebrow: "Selected work",
    // Alternatives: "Scenes that survive the cut." /
    // "Scenes built for the film, not for the reel."
    heroTitle: "Images that belong in a film.",
    heroBody:
      "More than twenty years in VFX and post-production. Today I integrate generative work into the same process: look development, continuity, compositing and finishing.",
    reelCap:
      "Narrative sequences, character continuity, live-action integration and generative VFX.",
    breakdownCap:
      "What was there, what was generated, what was composited. The part you do not usually see is the part that decides whether a shot holds inside a cut.",
    vfxTitle: "Traditional VFX",
    vfxMeta: "20+ years",
    vfxCap:
      "Compositing, cleanup, tracking, CG integration, environments and finishing. The craft before generative tools.",
    worksTitle: "Work",
    works: [
      {
        id: "caffo" as const,
        title: "CAFFO 1915 — Vecchio Amaro del Capo",
        kicker: "Generative inside a VFX pipeline",
        body: "Live action, product compositing, liquid VFX, crowd work and regenerated elements. Generative material as a controllable part of the process, not a replacement for it.",
        full: true,
      },
      {
        id: "stanza247" as const,
        title: "Stanza 247",
        kicker: "AI short film · work in progress",
        body: "Psychological thriller developed as a continuous narrative production: recurring character, persistent location, cinematography and shot-to-shot continuity. Screenplay IT/EN, shot list, project bible and production playbook documented before generation.",
        full: false,
      },
      {
        id: "roche" as const,
        title: "Roche — Milano Cortina Jingle",
        kicker: "Real people · photographs as source",
        body: "Real employees reconstructed from photographic references and kept recognisable across entirely new scenes. The problem wasn’t generating, but holding the identity across different shots and discarding everything else.",
        full: false,
      },
    ],
    rewake1:
      "A narrative AI production accumulates hundreds of clips, references and versions. I don’t keep that record by hand: keeping it by hand means losing the link between what was generated and what was approved.",
    rewake2:
      "I built Rewake while producing my own films. It keeps scenes, shots, takes, references, prompts and approved decisions connected throughout production.",
    rewakeImageAlt:
      "Rewake workspace: storyboard, character reference, prompt and video output connected in one system",
    contactTitle: "Contact",
    contactBody: "For a call or additional material.",
    foot: "Non-indexed page. Selected material for professional viewing.",
  },
} as const;
