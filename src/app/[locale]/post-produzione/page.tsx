import { unstable_setRequestLocale } from 'next-intl/server';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Post Produzione Video Roma | Montaggio, Color Grading e Finishing | Piero Perilli',
  description: 'Post-produzione video professionale a Roma. Montaggio, color grading certificato DaVinci Resolve, finishing per cinema, TV, documentari e spot. Colorist certificato Blackmagic Design.',
};

const contentIT = {
  sectionLabel: 'POST PRODUZIONE',
  h1: 'Post-produzione Video',
  heroSubtitle: 'Montaggio, colore e ritmo per le tue storie.',

  introTitle: 'La Firma Finale per il Tuo Progetto.',
  introText: `<p>La post-produzione è la fase in cui la visione prende forma definitiva. Il mio lavoro è trasformare il girato grezzo in un racconto coerente ed emozionante, curando il ritmo attraverso il montaggio e definendo l'atmosfera con il colore.</p>
<p>È qui che la narrazione trova la sua voce finale.</p>
<p>Non gestisco solo un pezzo del processo — gestisco l'intero flusso. Montaggio, color grading e finishing in un unico workflow significa che le decisioni creative non si perdono nei passaggi di mano. Se il grading rivela che una scena funziona meglio con un taglio diverso, lo cambio subito. Non aspetto che qualcun altro se ne accorga.</p>`,
  introImage: '/images/services/post-1.webp',
  introImageAlt: 'Post-produzione video professionale Roma — montaggio e color grading',

  servicesTitle: 'Dalla timeline al look finale',
  services: [
    {
      name: 'Montaggio Video',
      tag: 'Dare Ritmo e Forma',
      description: `<p>Assemblo le tue riprese per costruire una storia avvincente che funzioni. Il mio obiettivo è trovare il ritmo giusto e la struttura narrativa più efficace — che si tratti di un cortometraggio, un documentario, uno spot o un video corporate — per mantenere alta l'attenzione e comunicare il tuo messaggio con chiarezza e impatto.</p>
<p>Lavoro su film, documentari, spot pubblicitari e video musicali. Ogni formato ha le sue regole: un documentario richiede strutturazione di materiale grezzo con interviste, footage di archivio e voice-over. Uno spot richiede precisione al frame e versioni multiple per diversi formati.</p>`,
      image: '/images/services/post-2.png',
      imageAlt: 'Color grading professionale per cinema e advertising',
    },
    {
      name: 'Color Correction & Color Grading',
      tag: "Definire l'Anima dell'Immagine",
      description: `<p>Il colore è emozione. Definisco il look visivo del tuo progetto per creare un'atmosfera unica e rafforzare la narrazione. Il mio lavoro parte dalla correzione tecnica per garantire coerenza e pulizia dell'immagine, per poi passare alla creazione di uno stile cromatico che serva la storia ed esalti la fotografia.</p>
<p>Il mio processo inizia dal dialogo con il regista o il direttore della fotografia: capiamo insieme la direzione emotiva del progetto, creiamo delle reference, poi sviluppo il look che diventa la firma visiva del film. Lavoro con footage in LOG da tutte le principali camere cinema — ARRI, RED, Sony Venice, Blackmagic — e gestisco workflow HDR quando richiesto.</p>`,
    },
  ],

  approachTitle: 'Un dialogo tra tecnica e visione',
  pillars: [
    {
      number: '1',
      title: 'La Tecnica al Servizio della Storia.',
      text: 'Per me, ogni taglio e ogni sfumatura di colore devono avere uno scopo narrativo. Il mio approccio non è mai puramente tecnico, ma si pone sempre l\'obiettivo di servire la storia e amplificare la visione del regista.',
    },
    {
      number: '2',
      title: 'Un Dialogo Costante e Collaborativo.',
      text: 'La post-produzione è un dialogo. Lavoro a stretto contatto con te e il tuo team per interpretare le tue intenzioni e tradurle in scelte concrete di montaggio e colore, garantendo un processo trasparente e allineato alla tua visione.',
    },
    {
      number: '3',
      title: 'Colorist Certificato DaVinci Resolve.',
      text: 'Certificato Blackmagic Design per DaVinci Resolve, lo standard professionale per il color grading cinematografico. Questo garantisce un controllo cromatico di altissimo livello e la capacità di realizzare look complessi nel rispetto degli standard broadcast e cinematografici.',
    },
  ],

  recentWorkTitle: 'Ultimi lavori di post-produzione',
  recentWork: [
    { title: 'Radio Caterina — di David Orlandelli per History Channel', link: 'https://www.imdb.com/it/title/tt29257837/' },
    { title: 'Breaking dalla strada alle olimpiadi — di Fabrizio Silvestri per RAI Documentari', link: 'https://www.raiplay.it/programmi/breakingdallastradaalleolimpiadi' },
    { title: 'I Am Curious Johnny — di Julian Temple', link: 'https://www.imdb.com/it/title/tt35450650/' },
    { title: 'Non tutto è perduto — di Francesco Bellomo — Film Cinema', link: 'https://www.imdb.com/it/title/tt31173315/' },
    { title: 'A mamma non piace — di Gianni Leacche — Film', link: 'https://www.cinemaitaliano.info/amammanonpiace' },
    { title: 'Giorni di Grazia — di Sofia Nacchia — Film Cinema' },
    { title: '72 ore — di Luciano Luminelli — Film' },
  ],

  tools: ['DaVinci Resolve (certificato Blackmagic)', 'Premiere Pro', 'After Effects', 'Media Encoder', 'Frame.io'],

  ctaTitle: 'Hai una storia',
  ctaSubtitle: 'a cui dare forma?',
  ctaText: 'Se hai del materiale girato e cerchi un professionista che lo trasformi in un prodotto finito, curato e di alta qualità, raccontami il progetto. Leggo personalmente ogni richiesta.',
};

const contentEN = {
  sectionLabel: 'POST PRODUCTION',
  h1: 'Video Post-production',
  heroSubtitle: 'Editing, color and rhythm for your stories.',

  introTitle: 'The Final Signature for Your Project.',
  introText: `<p>Post-production is where the vision takes its final form. My job is to transform raw footage into a coherent, moving narrative, shaping the rhythm through editing and defining the atmosphere with color.</p>
<p>This is where the story finds its final voice.</p>
<p>I don't just manage one piece of the process — I manage the entire pipeline. Editing, color grading and finishing in a single workflow means creative decisions don't get lost in handoffs. If grading reveals that a scene works better with a different cut, I change it immediately. I don't wait for someone else to notice.</p>`,
  introImage: '/images/services/post-1.webp',
  introImageAlt: 'Professional video post-production Rome — editing and color grading',

  servicesTitle: 'From timeline to final look',
  services: [
    {
      name: 'Video Editing',
      tag: 'Giving Rhythm and Shape',
      description: `<p>I assemble your footage to build a compelling story that works. My goal is to find the right rhythm and most effective narrative structure — whether it's a short film, documentary, commercial or corporate video — to keep attention high and communicate your message with clarity and impact.</p>
<p>I work on films, documentaries, commercials and music videos. Each format has its rules: a documentary requires structuring raw material with interviews, archive footage and voice-over. A commercial demands frame-accurate precision and multiple versions for different formats.</p>`,
      image: '/images/services/post-2.png',
      imageAlt: 'Professional color grading for cinema and advertising',
    },
    {
      name: 'Color Correction & Color Grading',
      tag: "Defining the Image's Soul",
      description: `<p>Color is emotion. I define your project's visual look to create a unique atmosphere and strengthen the narrative. My work starts from technical correction to ensure image coherence and cleanliness, then moves to creating a chromatic style that serves the story and enhances the cinematography.</p>
<p>My process begins with dialogue with the director or DP: together we understand the project's emotional direction, create references, then I develop the look that becomes the film's visual signature. I work with LOG footage from all major cinema cameras — ARRI, RED, Sony Venice, Blackmagic — and manage HDR workflows when required.</p>`,
    },
  ],

  approachTitle: 'A dialogue between technique and vision',
  pillars: [
    {
      number: '1',
      title: 'Technique in Service of Story.',
      text: "For me, every cut and every color nuance must have a narrative purpose. My approach is never purely technical — it always aims to serve the story and amplify the director's vision.",
    },
    {
      number: '2',
      title: 'Constant, Collaborative Dialogue.',
      text: 'Post-production is a dialogue. I work closely with you and your team to interpret your intentions and translate them into concrete editing and color choices, ensuring a transparent process aligned with your vision.',
    },
    {
      number: '3',
      title: 'DaVinci Resolve Certified Colorist.',
      text: 'Blackmagic Design certified for DaVinci Resolve, the professional standard for cinematic color grading. This ensures the highest level of chromatic control and the ability to create complex, professional looks within broadcast and cinema standards.',
    },
  ],

  recentWorkTitle: 'Recent post-production work',
  recentWork: [
    { title: 'Radio Caterina — by David Orlandelli for History Channel', link: 'https://www.imdb.com/it/title/tt29257837/' },
    { title: 'Breaking from the street to the Olympics — by Fabrizio Silvestri for RAI', link: 'https://www.raiplay.it/programmi/breakingdallastradaalleolimpiadi' },
    { title: 'I Am Curious Johnny — by Julian Temple', link: 'https://www.imdb.com/it/title/tt35450650/' },
    { title: 'Non tutto è perduto — by Francesco Bellomo — Theatrical', link: 'https://www.imdb.com/it/title/tt31173315/' },
    { title: 'A mamma non piace — by Gianni Leacche — Film', link: 'https://www.cinemaitaliano.info/amammanonpiace' },
    { title: 'Giorni di Grazia — by Sofia Nacchia — Theatrical' },
    { title: '72 ore — by Luciano Luminelli — Film' },
  ],

  tools: ['DaVinci Resolve (Blackmagic certified)', 'Premiere Pro', 'After Effects', 'Media Encoder', 'Frame.io'],

  ctaTitle: 'Have a story',
  ctaSubtitle: 'that needs shaping?',
  ctaText: "If you have footage and need a professional to transform it into a polished, high-quality finished product, tell me about your project. I personally read every request.",
};

export default function PostProduzionePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const content = locale === 'it' ? contentIT : contentEN;
  return <ServicePageTemplate {...content} />;
}