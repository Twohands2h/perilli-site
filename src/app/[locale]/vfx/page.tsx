import { unstable_setRequestLocale } from 'next-intl/server';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Effetti Visivi (VFX) Roma | Compositing e VFX per Cinema e Spot | Piero Perilli',
  description: 'VFX artist a Roma con 20+ anni di esperienza. Compositing, green screen, set extension e tracking per film, spot pubblicitari e produzioni digitali. Portfolio su IMDB.',
};

const contentIT = {
  subtitle: 'VISUAL EFFECTS',
  h1: 'Effetti Visivi per Cinema, Advertising e Produzioni Digitali',
  intro: 'Compositing, green screen, set extension, camera tracking, clean-up, rotoscoping. Venti anni di esperienza applicati a ogni singola shot, con la precisione di chi ha imparato il mestiere smontando meccanismi — e oggi lo applica ai pixel.',
  sections: [
    {
      title: 'Il VFX non è un effetto speciale. È un lavoro invisibile.',
      content: `<p>Quando gli effetti visivi funzionano davvero, lo spettatore non li nota. Non pensa "bel compositing" — pensa "bella scena". Questo è l'obiettivo: integrare l'intervento digitale con la ripresa reale fino a renderlo indistinguibile.</p>
<p>Lavoro su film, cortometraggi, spot pubblicitari e contenuti digitali. Ogni progetto ha le sue esigenze — un lungometraggio ha tempi e standard diversi da uno spot per i social. Ma la cura è la stessa. Che si tratti di rimuovere un cavo di sicurezza o di costruire un intero ambiente in CG, il dettaglio fa la differenza tra un lavoro professionale e uno che "si vede".</p>
<p>Il mio approccio è diverso da quello di uno studio VFX tradizionale: gestisco l'intero flusso di post-produzione. Questo significa che gli effetti visivi non sono un passaggio isolato — si integrano con il montaggio, il color grading e il finishing in un unico workflow. Nessun passaggio di mano, nessun briefing perso in traduzione.</p>`,
      image: '/images/services/vfx-1.webp',
      imageAlt: 'VFX compositing per il cortometraggio Along Came Ruby',
    },
    {
      title: 'Cosa faccio concretamente',
      content: `<p><strong>Compositing e integrazione CG:</strong> Fusione di elementi 3D, matte painting e riprese live in un'immagine coerente. Lavoro in Nuke e After Effects a seconda delle esigenze del progetto.</p>
<p><strong>Green screen e chroma key:</strong> Estrazione pulita di soggetti da fondali verdi o blu, con attenzione ai bordi, ai capelli e ai riflessi. La qualità del keying dipende dall'esperienza — dopo migliaia di shot, riconosco i problemi prima che diventino tali.</p>
<p><strong>Set extension e ambienti digitali:</strong> Ampliamento di set reali con elementi digitali. Da una stanza che diventa un palazzo a un paesaggio urbano che diventa una città futuristica. Uso 3ds Max, Unreal Engine e tecniche di matte painting.</p>
<p><strong>Camera tracking e matchmove:</strong> Ricostruzione del movimento della camera reale nello spazio 3D per inserire elementi CG che seguono perfettamente la ripresa. Fondamentale per qualsiasi integrazione credibile.</p>
<p><strong>Clean-up e wire removal:</strong> Rimozione di elementi indesiderati — cavi, riflessi, oggetti di scena, attrezzatura. Il lavoro che nessuno vede ma che tutti noterebbero se mancasse.</p>
<p><strong>Rotoscoping:</strong> Isolamento frame-by-frame di elementi nella ripresa. Un lavoro di precisione che richiede pazienza e occhio — le stesse qualità che ho portato dall'orologeria alla post-produzione.</p>`,
    },
    {
      title: 'Un workflow integrato: il vantaggio reale',
      content: `<p>La maggior parte dei professionisti VFX lavora in un silo: riceve le shot, le lavora, le restituisce. Non vede il montaggio, non conosce la direzione del color grading, non partecipa alle scelte creative del film.</p>
<p>Il mio flusso è diverso. Gestendo VFX, montaggio e color grading in un unico workflow, posso prendere decisioni che tengono conto dell'intero progetto. Se una shot ha bisogno di un intervento VFX, posso adattare il montaggio di conseguenza. Se il color grading rivela un problema nel compositing, lo correggo subito — senza rimpalli tra reparti.</p>
<p>Per il regista, questo si traduce in tempi più rapidi, costi ottimizzati e soprattutto una coerenza visiva che non si perde nei passaggi di mano. Per le produzioni indipendenti con budget contenuti, questo approccio è spesso la differenza tra un film che sembra professionale e uno che non lo sembra.</p>`,
      image: '/images/services/vfx-2.jpg',
      imageAlt: 'Effetti visivi e compositing professionale',
    },
    {
      title: 'Progetti e collaborazioni',
      content: `<p>Lavoro con produzioni cinematografiche, agenzie pubblicitarie, case di produzione e registi indipendenti. Alcuni progetti recenti:</p>
<p><strong>Along Came Ruby</strong> — cortometraggio con VFX complessi: integrazione di elementi magici, particellari e ambientali in riprese live.</p>
<p><strong>I Am Curious Johnny</strong> — film di Julian Temple. VFX per integrazione e clean-up su un progetto di alto profilo internazionale.</p>
<p><strong>Floverr</strong> — film in produzione. Supervisione VFX dall'inizio.</p>
<p>Che si tratti di un cortometraggio con dieci shot o di un film con centinaia, l'approccio è lo stesso: capire cosa serve al progetto, proporre la soluzione tecnica più efficace e realizzarla con la cura che merita.</p>`,
    },
  ],
  tools: ['After Effects', 'Nuke', '3ds Max', 'Unreal Engine 5', 'DaVinci Resolve', 'Mocha Pro', 'PFTrack', 'ZBrush'],
  ctaHeadline: 'Hai un progetto che richiede VFX?',
  ctaText: 'Raccontami di cosa hai bisogno. Rispondo personalmente entro 24 ore con una prima valutazione tecnica e un\'idea dei tempi.',
};

const contentEN = {
  subtitle: 'VISUAL EFFECTS',
  h1: 'Visual Effects for Cinema, Advertising and Digital Productions',
  intro: 'Compositing, green screen, set extension, camera tracking, clean-up, rotoscoping. Twenty years of experience applied to every single shot, with the precision of someone who learned the craft by disassembling mechanisms — and now applies it to pixels.',
  sections: [
    {
      title: "VFX isn't a special effect. It's invisible work.",
      content: `<p>When visual effects truly work, the audience doesn't notice them. They don't think "nice compositing" — they think "great scene." That's the goal: integrating digital work with live footage until it becomes indistinguishable.</p>
<p>I work on feature films, short films, commercials and digital content. Each project has its own requirements — a feature film has different timelines and standards than a social media ad. But the care is the same. Whether it's removing a safety wire or building an entire CG environment, the detail makes the difference between professional work and work that "shows."</p>
<p>My approach differs from a traditional VFX studio: I manage the entire post-production pipeline. This means visual effects aren't an isolated step — they integrate with editing, color grading and finishing in a single workflow. No handoffs, no briefings lost in translation.</p>`,
      image: '/images/services/vfx-1.webp',
      imageAlt: 'VFX compositing for the short film Along Came Ruby',
    },
    {
      title: 'What I actually do',
      content: `<p><strong>Compositing and CG integration:</strong> Merging 3D elements, matte paintings and live footage into a coherent image. I work in Nuke and After Effects depending on project needs.</p>
<p><strong>Green screen and chroma keying:</strong> Clean extraction of subjects from green or blue screens, with attention to edges, hair and reflections. Keying quality depends on experience — after thousands of shots, I recognize problems before they become ones.</p>
<p><strong>Set extension and digital environments:</strong> Expanding real sets with digital elements. From a room becoming a palace to an urban landscape becoming a futuristic city. I use 3ds Max, Unreal Engine and matte painting techniques.</p>
<p><strong>Camera tracking and matchmove:</strong> Reconstructing real camera movement in 3D space to insert CG elements that perfectly follow the footage. Essential for any credible integration.</p>
<p><strong>Clean-up and wire removal:</strong> Removing unwanted elements — wires, reflections, props, equipment. The work nobody sees but everyone would notice if it were missing.</p>
<p><strong>Rotoscoping:</strong> Frame-by-frame isolation of elements in footage. Precision work that requires patience and a trained eye — the same qualities I brought from watchmaking to post-production.</p>`,
    },
    {
      title: 'An integrated workflow: the real advantage',
      content: `<p>Most VFX professionals work in a silo: they receive shots, work on them, return them. They don't see the edit, don't know the color grading direction, don't participate in the film's creative choices.</p>
<p>My pipeline is different. By managing VFX, editing and color grading in a single workflow, I can make decisions that account for the entire project. If a shot needs VFX work, I can adjust the edit accordingly. If color grading reveals a compositing issue, I fix it immediately — no back-and-forth between departments.</p>
<p>For the director, this translates to faster timelines, optimized costs and above all a visual coherence that doesn't get lost in handoffs. For independent productions with tight budgets, this approach is often the difference between a film that looks professional and one that doesn't.</p>`,
      image: '/images/services/vfx-2.jpg',
      imageAlt: 'Professional visual effects and compositing',
    },
    {
      title: 'Projects and collaborations',
      content: `<p>I work with film productions, advertising agencies, production houses and independent directors. Some recent projects:</p>
<p><strong>Along Came Ruby</strong> — short film with complex VFX: integration of magical, particle and environmental elements into live footage.</p>
<p><strong>I Am Curious Johnny</strong> — Julian Temple film. VFX for integration and clean-up on a high-profile international project.</p>
<p><strong>Floverr</strong> — film in production. VFX supervision from the start.</p>
<p>Whether it's a short film with ten shots or a feature with hundreds, the approach is the same: understand what the project needs, propose the most effective technical solution and deliver it with the care it deserves.</p>`,
    },
  ],
  tools: ['After Effects', 'Nuke', '3ds Max', 'Unreal Engine 5', 'DaVinci Resolve', 'Mocha Pro', 'PFTrack', 'ZBrush'],
  ctaHeadline: 'Have a project that needs VFX?',
  ctaText: 'Tell me what you need. I personally respond within 24 hours with an initial technical assessment and timeline estimate.',
};

export default function VFXPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const content = locale === 'it' ? contentIT : contentEN;
  return <ServicePageTemplate {...content} />;
}