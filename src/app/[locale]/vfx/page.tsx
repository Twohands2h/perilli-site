import { unstable_setRequestLocale } from 'next-intl/server';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Effetti Visivi (VFX) Roma | Compositing e VFX per Cinema e Spot | Piero Perilli',
  description: 'VFX artist a Roma con 20+ anni di esperienza. Compositing, green screen, set extension e tracking per film, spot pubblicitari e produzioni digitali. Portfolio verificabile su IMDB.',
};

const contentIT = {
  sectionLabel: 'VFX',
  h1: 'Visual Effects',
  heroSubtitle: 'Effetti visivi creativi e realistici per cinema, advertising e digital content.',

  introTitle: 'Effetti Visivi che Trasformano la Tua Visione in Realtà.',
  introText: `<p>La mia missione è portare la tua produzione cinematografica, il tuo spot o il tuo video a un livello superiore, creando scene che lo spettatore percepisce come reali.</p>
<p>Integro elementi digitali in riprese dal vivo con precisione fotorealistica — l'obiettivo è che chi guarda non pensi "bel compositing", ma semplicemente "bella scena". Quando gli effetti visivi funzionano davvero, sono invisibili.</p>
<p>Lavoro su film, cortometraggi, spot pubblicitari e contenuti digitali a Roma e in tutta Italia. Come VFX artist freelance, sono disponibile per progetti di qualsiasi scala — dalla singola shot alla supervisione VFX dell&apos;intero progetto. Ogni lavoro ha tempi e standard diversi, ma la cura è la stessa. Che si tratti di rimuovere un cavo di sicurezza o di costruire un intero ambiente in CG, è il dettaglio a fare la differenza tra un lavoro professionale e uno che "si vede".</p>`,
  introImage: '/images/services/vfx-compositing-cortometraggio-along-came-ruby-roma.webp',
  introImageAlt: 'VFX compositing per il cortometraggio Along Came Ruby — Piero Perilli VFX artist Roma',

  servicesTitle: 'I miei servizi VFX per agenzie e produzioni',
  services: [
    {
      name: 'Compositing',
      tag: 'Integrazione CGI',
      description: `<p>Fondo elementi CGI e riprese live-action per creare un'unica, impeccabile scena. Il mio approccio si basa sull'ossessione per il dettaglio, puntando a un'integrazione fotorealistica che renda la finzione indistinguibile dalla realtà. Lavoro in After Effects e Nuke a seconda delle esigenze del progetto.</p>`,
      image: '/images/services/effetti-visivi-integrazione-cgi-cinema-roma.jpg',
      imageAlt: 'Compositing e integrazione CGI per produzioni cinematografiche',
    },
    {
      name: 'Green Screen',
      tag: 'Chroma Keying',
      description: `<p>Estraggo i tuoi soggetti dal green screen con precisione chirurgica. Il mio lavoro si concentra sui dettagli più difficili — capelli, motion blur, riflessi — con l'obiettivo di ottenere contorni perfetti per un'integrazione pulita e senza artefatti. Dopo migliaia di shot, riconosco i problemi prima che diventino tali.</p>`,
    },
    {
      name: 'Set Extension',
      tag: 'Scenografie Digitali',
      description: `<p>Trasformo un set parziale in un mondo vasto e immersivo. Espando digitalmente le scenografie per aiutare la tua produzione a raggiungere una scala epica e cinematografica, superando i limiti fisici e di budget. Uso 3ds Max, Unreal Engine e tecniche di matte painting.</p>`,
    },
    {
      name: 'Motion Tracking',
      tag: '2D & 3D Matchmoving',
      description: `<p>Integro elementi grafici e 3D nelle tue riprese in movimento puntando alla massima stabilità. Attraverso un motion tracking preciso, faccio in modo che ogni oggetto aggiunto segua perfettamente la camera, per un'integrazione naturale nella scena. Fondamentale per qualsiasi compositing credibile.</p>`,
    },
    {
      name: 'Effetti Particellari',
      tag: 'Particle Effects',
      description: `<p>Creo effetti dinamici come fumo, fuoco ed esplosioni usando sistemi di particelle avanzati. Progetto simulazioni realistiche che interagiscono con la scena in modo naturale, per aggiungere impatto visivo e spettacolarità al tuo progetto.</p>`,
    },
    {
      name: 'Clean-Up',
      tag: 'Rimozione Oggetti',
      description: `<p>Rendo perfetta ogni tua inquadratura, rimuovendo digitalmente gli elementi di disturbo. Intervengo con rotoscoping professionale e tecniche di rimozione su cavi, microfoni, riflessi o attrezzatura — il lavoro che nessuno vede ma che tutti noterebbero se mancasse.</p>`,
    },
  ],

  approachTitle: 'Il mio approccio artigianale ai VFX',
  pillars: [
    {
      number: '1',
      title: 'Collaborazione Diretta.',
      text: 'Nessun project manager, nessun intermediario. Dal concept alla consegna finale, parlerai e lavorerai sempre e solo con me. Questo garantisce un processo più snello, flessibile e una profonda comprensione della tua visione artistica.',
    },
    {
      number: '2',
      title: 'Precisione Ossessiva.',
      text: 'Per me, ogni pixel conta. La mia ossessione per il dettaglio viene da un mondo di ingranaggi — ho imparato la precisione smontando meccanismi, e oggi la applico a ogni singola shot. Il risultato è un\'integrazione fotorealistica e impeccabile.',
    },
    {
      number: '3',
      title: 'Problem Solving Creativo.',
      text: 'Non sono solo un esecutore tecnico. Affronto ogni progetto come un partner creativo, cercando la soluzione visiva più potente ed efficace per le tue sfide produttive, nel rispetto di tempi e budget. Gestisco VFX, montaggio e color in un unico workflow — nessun passaggio di mano, nessun briefing perso.',
    },
  ],

  recentWorkTitle: 'Progetti VFX recenti',
  recentWork: [
    { title: 'Along Came Ruby — cortometraggio, VFX complessi', link: '' },
    { title: 'I Am Curious Johnny — di Julian Temple, VFX e clean-up', link: 'https://www.imdb.com/it/title/tt35450650/' },
    { title: 'Floverr — film in produzione, supervisione VFX', link: '' },
    { title: 'Non tutto è perduto — film cinema, VFX e post-produzione', link: 'https://www.imdb.com/it/title/tt31173315/' },
  ],

  tools: ['After Effects', 'Nuke', '3ds Max', 'Unreal Engine 5', 'DaVinci Resolve', 'Mocha Pro', 'PFTrack', 'ZBrush'],

  ctaTitle: 'Pronto a dare vita',
  ctaSubtitle: 'alla tua visione?',
  ctaText: 'Discutiamo di come posso elevare il tuo prossimo progetto con effetti visivi di alto livello. Leggo personalmente ogni richiesta e rispondo in tempi brevi — trasformiamo insieme le tue idee in immagini indimenticabili.',
};

const contentEN = {
  sectionLabel: 'VFX',
  h1: 'Visual Effects',
  heroSubtitle: 'Creative and realistic visual effects for cinema, advertising and digital content.',

  introTitle: 'Visual Effects that Transform Your Vision into Reality.',
  introText: `<p>My mission is to take your film production, commercial or video to the next level, creating scenes the audience perceives as real.</p>
<p>I integrate digital elements into live footage with photorealistic precision — the goal is that the viewer doesn't think "nice compositing," but simply "great scene." When visual effects truly work, they're invisible.</p>
<p>I work on films, short films, commercials and digital content from Rome, across Italy and for international productions. As a freelance VFX artist, I&apos;m available for projects of any scale — from a single shot to full VFX supervision. Each project has different timelines and standards, but the care is the same. Whether it's removing a safety wire or building an entire CG environment, it's the detail that makes the difference between professional work and work that "shows."</p>`,
  introImage: '/images/services/vfx-compositing-cortometraggio-along-came-ruby-roma.webp',
  introImageAlt: 'VFX compositing for the short film Along Came Ruby — Piero Perilli VFX artist Rome Italy',

  servicesTitle: 'My VFX services for agencies and productions',
  services: [
    {
      name: 'Compositing',
      tag: 'CGI Integration',
      description: `<p>I blend CGI elements and live-action footage to create a single, flawless scene. My approach is based on obsessive attention to detail, aiming for photorealistic integration that makes fiction indistinguishable from reality. I work in After Effects and Nuke depending on project requirements.</p>`,
      image: '/images/services/effetti-visivi-integrazione-cgi-cinema-roma.jpg',
      imageAlt: 'Compositing and CGI integration for film productions',
    },
    {
      name: 'Green Screen',
      tag: 'Chroma Keying',
      description: `<p>I extract your subjects from green screen with surgical precision. My work focuses on the hardest details — hair, motion blur, reflections — aiming for perfect edges and clean, artifact-free integration. After thousands of shots, I recognize problems before they become ones.</p>`,
    },
    {
      name: 'Set Extension',
      tag: 'Digital Scenography',
      description: `<p>I transform a partial set into a vast, immersive world. I digitally expand sets to help your production achieve an epic, cinematic scale, going beyond physical and budget limitations. I use 3ds Max, Unreal Engine and matte painting techniques.</p>`,
    },
    {
      name: 'Motion Tracking',
      tag: '2D & 3D Matchmoving',
      description: `<p>I integrate graphic and 3D elements into your moving footage with maximum stability. Through precise motion tracking, I ensure every added object perfectly follows the camera for natural scene integration. Essential for any credible compositing.</p>`,
    },
    {
      name: 'Particle Effects',
      tag: 'Simulations',
      description: `<p>I create dynamic effects like smoke, fire and explosions using advanced particle systems. I design realistic simulations that interact naturally with the scene, adding visual impact and spectacle to your project.</p>`,
    },
    {
      name: 'Clean-Up',
      tag: 'Object Removal',
      description: `<p>I make every frame perfect by digitally removing unwanted elements. I intervene with professional rotoscoping and removal techniques on wires, microphones, reflections or equipment — the work nobody sees but everyone would notice if it were missing.</p>`,
    },
  ],

  approachTitle: 'My artisan approach to VFX',
  pillars: [
    {
      number: '1',
      title: 'Direct Collaboration.',
      text: 'No project manager, no intermediary. From concept to final delivery, you\'ll speak and work with me directly. This ensures a leaner, more flexible process and a deep understanding of your artistic vision.',
    },
    {
      number: '2',
      title: 'Obsessive Precision.',
      text: 'For me, every pixel counts. My obsession for detail comes from a world of clockwork mechanisms — I learned precision by disassembling watches, and today I apply it to every single shot. The result is photorealistic, flawless integration.',
    },
    {
      number: '3',
      title: 'Creative Problem Solving.',
      text: 'I\'m not just a technical executor. I approach every project as a creative partner, finding the most powerful and effective visual solution for your production challenges, respecting timelines and budget. I manage VFX, editing and color in one workflow — no handoffs, no lost briefings.',
    },
  ],

  recentWorkTitle: 'Recent VFX projects',
  recentWork: [
    { title: 'Along Came Ruby — short film, complex VFX', link: '' },
    { title: 'I Am Curious Johnny — Julian Temple, VFX and clean-up', link: 'https://www.imdb.com/it/title/tt35450650/' },
    { title: 'Floverr — film in production, VFX supervision', link: '' },
    { title: 'Non tutto è perduto — theatrical film, VFX and post-production', link: 'https://www.imdb.com/it/title/tt31173315/' },
  ],

  tools: ['After Effects', 'Nuke', '3ds Max', 'Unreal Engine 5', 'DaVinci Resolve', 'Mocha Pro', 'PFTrack', 'ZBrush'],

  ctaTitle: 'Ready to bring your',
  ctaSubtitle: 'vision to life?',
  ctaText: "Let's discuss how I can elevate your next project with high-level visual effects. I personally read every request and respond promptly — let's transform your ideas into unforgettable images together.",
};

export default function VFXPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const content = locale === 'it' ? contentIT : contentEN;
  return <ServicePageTemplate {...content} />;
}