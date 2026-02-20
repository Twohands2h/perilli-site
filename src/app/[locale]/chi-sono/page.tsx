'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const filmography = [
  { title: 'I Am Curious Johnny', role: 'VFX', detail: 'Film di Julian Temple', link: 'https://pro.imdb.com/title/tt35450650/' },
  { title: 'Floverr', role: 'VFX', detail: 'Film', link: 'https://pro.imdb.com/title/tt36724898/' },
  { title: 'Non tutto è perduto', role: 'Montaggio e Color', detail: 'Film cinema', link: 'https://pro.imdb.com/title/tt31173315/' },
  { title: 'A mamma non piace', role: 'Color', detail: 'Film cinema', link: 'https://pro.imdb.com/title/tt38095764/' },
  { title: 'Breaking dalla strada alle olimpiadi', role: 'Montaggio e Color', detail: 'Documentario RaiPlay', link: 'https://www.raiplay.it/programmi/breakingdallastradaalleolimpiadi' },
  { title: 'Radio Caterina', role: 'Montaggio, Color, Animazioni', detail: 'Documentario History Channel', link: 'https://pro.imdb.com/title/tt29257837/' },
  { title: 'Along Came Ruby', role: 'VFX', detail: 'Cortometraggio', link: 'https://pro.imdb.com/title/tt28106482/' },
];

export default function ChiSonoPage() {
  const locale = useLocale();
  const isIt = locale === 'it';

  return (
    <article>
      {/* === HERO === */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="section-container">
          <AnimateOnScroll>
            <h1
              className="font-bold text-text-primary mb-4"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: '1.05',
                letterSpacing: '-0.03em',
              }}
            >
              Piero Perilli
            </h1>
            <p
              className="text-accent font-semibold uppercase tracking-[0.15em] mb-6"
              style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1rem)' }}
            >
              {isIt ? 'Artigiano Digitale' : 'Digital Artisan'}
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={80}>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl">
              {isIt
                ? 'La mia filosofia è semplice: unire la precisione tecnica di un artigiano alla visione creativa di un artista. Trasformo idee in immagini, curando ogni singolo pixel con la stessa, instancabile passione.'
                : 'My philosophy is simple: combining the technical precision of a craftsman with the creative vision of an artist. I transform ideas into images, caring for every single pixel with the same tireless passion.'}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* === PHOTO + STORY === */}
      <section className="py-12 md:py-20 border-t border-border">
        <div className="section-container">
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
              {/* Photo */}
              <div>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-surface">
                  <Image
                    src="/images/piero-perilli-vfx-artist-artigiano-digitale-roma.jpg"
                    alt={isIt ? 'Piero Perilli — VFX Artist e Artigiano Digitale, Roma' : 'Piero Perilli — VFX Artist and Digital Artisan, Rome Italy'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <p className="text-text-muted text-xs mt-3 italic">
                  {isIt ? 'Foto di Marco Girolami' : 'Photo by Marco Girolami'}
                </p>
              </div>

              {/* Story */}
              <div>
                <h2
                  className="font-bold text-text-primary mb-6"
                  style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', lineHeight: '1.12' }}
                >
                  {isIt ? 'Dagli ingranaggi ai pixel' : 'From clockwork to pixels'}
                </h2>
                <div className="text-text-secondary text-sm md:text-base leading-relaxed space-y-4">
                  {isIt ? (
                    <>
                      <p>Fin da bambino, la mia vita è sempre stata legata all&apos;arte. Ho sempre disegnato e dipinto, trovando nella creazione di immagini la mia espressione più istintiva e naturale. Eppure, la mia strada professionale ufficiale era un&apos;altra: quella dell&apos;orologiaio.</p>
                      <p>In quel mondo di meccanismi perfetti, ho assorbito un&apos;ossessione per il dettaglio e una pazienza infinita, senza ancora sapere che stavo forgiando gli strumenti che, un giorno, avrei applicato a quella passione mai sopita.</p>
                      <p>Quella stessa precisione ha poi trovato la sua vera vocazione nell&apos;arte digitale, coltivata di notte fino all&apos;incontro casuale con un regista che ha cambiato tutto. Ha visto nei miei esperimenti personali la stessa scintilla che sentivo io e mi ha aperto le porte del set.</p>
                      <p>È stata una scelta di cuore: ho lasciato la precisione degli ingranaggi per quella, altrettanto rigorosa ma infinitamente più espressiva, dei pixel.</p>
                      <p>Oggi, dopo più di vent&apos;anni e set prestigiosi, la fame è la stessa. Questo non è solo il mio lavoro; è la mia natura. È una ricerca costante della perfezione che mi accompagna da sempre, dall&apos;assemblare un meccanismo al dare vita a un&apos;immagine.</p>
                    </>
                  ) : (
                    <>
                      <p>Since childhood, my life has been tied to art. I&apos;ve always drawn and painted, finding in image creation my most instinctive, natural expression. Yet my official professional path was another: that of a watchmaker.</p>
                      <p>In that world of perfect mechanisms, I absorbed an obsession for detail and infinite patience, without yet knowing I was forging the tools I would one day apply to that never-dormant passion.</p>
                      <p>That same precision found its true calling in digital art, cultivated at night until a chance encounter with a director changed everything. He saw in my personal experiments the same spark I felt and opened the doors of the set to me.</p>
                      <p>It was a choice of the heart: I left the precision of clockwork for the equally rigorous but infinitely more expressive precision of pixels.</p>
                      <p>Today, after more than twenty years and prestigious sets, the hunger is the same. This isn&apos;t just my work; it&apos;s my nature. It&apos;s a constant pursuit of perfection that has always been with me, from assembling a mechanism to bringing an image to life.</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* === PROFILE === */}
      <section className="py-12 md:py-20 border-t border-border">
        <div className="section-container">
          <AnimateOnScroll>
            <h2
              className="font-bold text-text-primary mb-6"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}
            >
              {isIt ? 'Profilo' : 'Profile'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <div className="text-text-secondary text-sm md:text-base leading-relaxed space-y-4">
                {isIt ? (
                  <>
                    <p>Esperto di post-produzione video con oltre 20 anni di esperienza, specializzato in effetti visivi (VFX), montaggio per film, video musicali, cortometraggi e documentari, grafica animata 2D/3D e compositing.</p>
                    <p>Certificato in DaVinci Resolve per Color Correction e Fusion. Esperto in After Effects, 3ds Max, ZBrush, Character Creator, Unreal Engine e Premiere.</p>
                    <p>Sono un profilo ibrido che fonde 3D Generalist, VFX, Editing e Motion Design in un unico flusso di lavoro. Questo approccio mi permette di anticipare i problemi, ottimizzare i tempi e garantire coerenza stilistica.</p>
                    <p>Di base a Roma con studio a Venezia, disponibile come VFX artist freelance per lavori in tutta Italia e per produzioni internazionali.</p>
                  </>
                ) : (
                  <>
                    <p>Video post-production expert with over 20 years of experience, specialized in visual effects (VFX), editing for films, music videos, short films and documentaries, 2D/3D motion graphics and compositing.</p>
                    <p>DaVinci Resolve certified for Color Correction and Fusion. Expert in After Effects, 3ds Max, ZBrush, Character Creator, Unreal Engine and Premiere.</p>
                    <p>I&apos;m a hybrid profile that merges 3D Generalist, VFX, Editing and Motion Design into a single workflow. This approach allows me to anticipate problems, optimize timelines and ensure stylistic coherence.</p>
                    <p>Based in Rome with a studio in Venice, available as a freelance VFX artist throughout Italy and for international productions.</p>
                  </>
                )}
              </div>

              {/* Filmography */}
              <div>
                <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">
                  {isIt ? 'Filmografia selezionata' : 'Selected filmography'}
                </h3>
                <div className="space-y-3">
                  {filmography.map((film, i) => (
                    <div key={i} className="flex items-baseline justify-between gap-4 py-2 border-b border-border/50">
                      <div>
                        {film.link ? (
                          <a
                            href={film.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-primary text-sm font-medium hover:text-accent transition-colors"
                          >
                            {film.title} ↗
                          </a>
                        ) : (
                          <span className="text-text-primary text-sm font-medium">{film.title}</span>
                        )}
                        <span className="text-text-muted text-xs ml-2">— {film.detail}</span>
                      </div>
                      <span className="text-accent text-xs font-semibold uppercase tracking-wider shrink-0">
                        {film.role}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-6 mt-6">
                  <a
                    href="https://pro.imdb.com/name/nm3859505/credits"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-accent hover:text-text-primary transition-colors uppercase tracking-wider"
                  >
                    IMDB ↗
                  </a>
                  <a
                    href="https://www.behance.net/pieroperilli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-accent hover:text-text-primary transition-colors uppercase tracking-wider"
                  >
                    Behance ↗
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* === CTA === */}
      <section className="relative py-20 md:py-28 border-t border-border bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,168,83,0.04)_0%,_transparent_60%)]" />
        <div className="relative section-container text-center">
          <AnimateOnScroll>
            <h2
              className="font-bold text-text-primary mb-2"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
            >
              {isIt ? 'La Scelta' : 'The Choice'}
            </h2>
            <h3
              className="font-bold text-text-primary mb-6"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
            >
              {isIt ? 'è Semplice.' : 'is Simple.'}
            </h3>
            <p className="text-text-secondary max-w-xl mx-auto mb-4 text-sm md:text-base">
              {isIt
                ? 'Se la mia storia e il mio approccio al lavoro sono ciò di cui il tuo prossimo progetto ha bisogno, allora non serve aggiungere altro.'
                : "If my story and my approach to work are what your next project needs, then there&apos;s nothing more to add."}
            </p>
            <p
              className="font-bold text-accent mb-10"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}
            >
              {isIt ? 'Ti serve Piero.' : 'You need Piero.'}
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={isIt ? '/contatti' : '/en/contatti'}
                className="btn-primary"
              >
                {isIt ? 'Scrivimi' : 'Write me'}
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://calendly.com/pieroperilli-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Calendar size={16} />
                {isIt ? 'Prenota una call' : 'Book a call'}
              </a>
              <a
                href="https://wa.me/393920187759"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </article>
  );
}