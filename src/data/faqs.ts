/**
 * FAQ data for service pages.
 * Used by both FAQSchema (JSON-LD for AI/LLM) and visible FAQ accordion on page.
 * Bilingual IT/EN.
 */

export interface FAQ {
  question: string;
  answer: string;
}

export const serviceFAQs: Record<string, Record<'it' | 'en', FAQ[]>> = {
  vfx: {
    it: [
      {
        question: 'Quanto costa un VFX artist a Roma?',
        answer: 'Il costo dipende dalla complessità del progetto. Un singolo shot con compositing base parte da poche centinaia di euro, mentre un progetto complesso con set extension, tracking 3D e green screen può richiedere un investimento più significativo. Offro sempre un preventivo gratuito dopo aver analizzato il materiale e il briefing.',
      },
      {
        question: 'Che differenza c\'è tra VFX e CGI?',
        answer: 'I VFX (Visual Effects) comprendono tutte le manipolazioni dell\'immagine in post-produzione: compositing, green screen, rotoscoping, tracking, clean-up. La CGI (Computer Generated Imagery) è un sottoinsieme dei VFX che riguarda specificamente gli elementi generati interamente al computer, come modelli 3D e ambienti digitali. Nel mio workflow integro entrambi.',
      },
      {
        question: 'Quanto tempo serve per gli effetti visivi di un cortometraggio?',
        answer: 'Per un cortometraggio di 10-15 minuti con VFX di media complessità, i tempi vanno da 2 a 6 settimane. Dipende dal numero di shot, dalla complessità degli effetti e dalla qualità del girato (un buon green screen riduce enormemente i tempi). Lavoro con deadline di festival e distribuisco il lavoro per rispettarle.',
      },
      {
        question: 'Lavori solo a Roma o anche da remoto?',
        answer: 'Lavoro sia in presenza a Roma e Venezia che da remoto per clienti in tutta Italia e all\'estero. La post-produzione VFX si presta perfettamente al lavoro remoto. Per progetti che richiedono supervisione sul set, sono disponibile a spostarmi.',
      },
      {
        question: 'Posso fare gli effetti visivi del mio film con l\'intelligenza artificiale?',
        answer: 'L\'AI è uno strumento potente che integro nel mio workflow, ma non sostituisce la competenza VFX tradizionale. Strumenti come Runway e Veo possono accelerare alcune fasi (rotoscoping, generazione di background), ma servono 20 anni di occhio per sapere quando l\'output AI è sufficiente, quando serve intervento manuale, e come integrare i due. Il risultato migliore viene sempre dalla combinazione di esperienza e tecnologia.',
      },
    ],
    en: [
      {
        question: 'How much does a VFX artist cost in Rome, Italy?',
        answer: 'Costs depend on project complexity. A single basic compositing shot starts from a few hundred euros, while complex projects with set extension, 3D tracking and green screen require a more significant investment. I always provide a free quote after reviewing the footage and brief.',
      },
      {
        question: 'What is the difference between VFX and CGI?',
        answer: 'VFX (Visual Effects) encompasses all post-production image manipulation: compositing, green screen, rotoscoping, tracking, clean-up. CGI (Computer Generated Imagery) is a subset of VFX specifically about fully computer-generated elements like 3D models and digital environments. My workflow integrates both seamlessly.',
      },
      {
        question: 'How long does VFX work take for a short film?',
        answer: 'For a 10-15 minute short film with medium-complexity VFX, expect 2 to 6 weeks. This depends on shot count, effect complexity, and footage quality (good green screen dramatically reduces turnaround). I work with festival deadlines and plan accordingly.',
      },
      {
        question: 'Do you work only in Rome or also remotely?',
        answer: 'I work both on-site in Rome and Venice and remotely for clients across Italy and internationally. VFX post-production is perfectly suited for remote work. For projects requiring on-set supervision, I am available to travel.',
      },
      {
        question: 'Can I create VFX for my film using AI?',
        answer: 'AI is a powerful tool I integrate into my workflow, but it does not replace traditional VFX expertise. Tools like Runway and Veo can accelerate certain phases, but it takes 20 years of trained eye to know when AI output is sufficient, when manual intervention is needed, and how to blend both. The best results always come from combining experience with technology.',
      },
    ],
  },

  'motion-graphics': {
    it: [
      {
        question: 'Quanto costa un video in motion graphics per un brand?',
        answer: 'Un video motion graphics per brand varia in base a durata e complessità. Un\'animazione di 30 secondi per social parte da circa €800-1.500, mentre un video corporate di 60-90 secondi con storyboard personalizzato e animazioni complesse può costare €2.000-5.000. Fornisco sempre un preventivo dettagliato.',
      },
      {
        question: 'Che differenza c\'è tra motion graphics e animazione?',
        answer: 'La motion graphics è una branca dell\'animazione focalizzata sul design grafico in movimento: testi animati, infografiche, loghi, forme astratte. L\'animazione tradizionale include anche character animation e storytelling narrativo. Nel mio lavoro le due si intrecciano spesso, soprattutto per campagne pubblicitarie dove servono sia elementi grafici che narrativi.',
      },
      {
        question: 'Quanto tempo serve per realizzare un video motion graphics?',
        answer: 'I tempi variano da 1 a 4 settimane. Un\'animazione semplice per social (15-30 secondi) richiede circa una settimana. Un video corporate con storyboard, voiceover e animazioni complesse richiede 2-4 settimane. La fase di concept e approvazione del cliente spesso incide più della produzione vera e propria.',
      },
      {
        question: 'Realizzi motion graphics per spot televisivi?',
        answer: 'Sì, ho realizzato motion graphics per spot TV e campagne pubblicitarie per brand di primo livello. Lavoro con le specifiche tecniche richieste dai broadcaster e con i formati necessari per ogni piattaforma di distribuzione.',
      },
    ],
    en: [
      {
        question: 'How much does a motion graphics video cost for a brand?',
        answer: 'A brand motion graphics video varies by duration and complexity. A 30-second social animation starts from approximately €800-1,500, while a 60-90 second corporate video with custom storyboard and complex animations can cost €2,000-5,000. I always provide a detailed quote.',
      },
      {
        question: 'What is the difference between motion graphics and animation?',
        answer: 'Motion graphics is a branch of animation focused on graphic design in motion: animated text, infographics, logos, abstract shapes. Traditional animation also includes character animation and narrative storytelling. In my work, the two often intertwine, especially for advertising campaigns requiring both graphic and narrative elements.',
      },
      {
        question: 'How long does it take to create a motion graphics video?',
        answer: 'Timelines range from 1 to 4 weeks. A simple social animation (15-30 seconds) takes about one week. A corporate video with storyboard, voiceover and complex animations requires 2-4 weeks. The concept and client approval phase often takes longer than actual production.',
      },
      {
        question: 'Do you create motion graphics for TV commercials?',
        answer: 'Yes, I have created motion graphics for TV spots and advertising campaigns for top-tier brands. I work with broadcaster technical specifications and delivery formats for every distribution platform.',
      },
    ],
  },

  'animazione-3d': {
    it: [
      {
        question: 'Quanto costa un\'animazione 3D di prodotto?',
        answer: 'Un\'animazione 3D di prodotto parte da circa €1.500-3.000 per un video di 15-30 secondi con modellazione, texturing, illuminazione e rendering. Progetti più complessi con ambienti, character o simulazioni fisiche possono superare i €5.000. Il costo dipende dalla complessità del modello e dalla durata dell\'animazione.',
      },
      {
        question: 'Che software usi per l\'animazione 3D?',
        answer: 'Il mio workflow 3D si basa su 3ds Max per modellazione e animazione, ZBrush per sculpting di dettaglio, Character Creator per personaggi, e Unreal Engine 5 per rendering real-time e ambienti. Per le simulazioni uso tyFlow in 3ds Max. Scelgo gli strumenti in base al progetto.',
      },
      {
        question: 'Posso usare l\'animazione 3D per presentare un prodotto non ancora realizzato?',
        answer: 'Assolutamente sì, è uno degli usi più frequenti. L\'animazione 3D di prodotto permette di visualizzare un oggetto prima della produzione fisica, mostrarlo in contesti impossibili da fotografare, e creare video promozionali senza costi di shooting. È perfetta per lanci di prodotto, crowdfunding e cataloghi.',
      },
      {
        question: 'Che differenza c\'è tra render statico e animazione 3D?',
        answer: 'Il render statico produce immagini fisse (come fotografie virtuali), l\'animazione 3D produce video con il modello in movimento. Il render statico è più economico e veloce, ideale per cataloghi ed e-commerce. L\'animazione è più impattante per social, spot e presentazioni. Spesso i due si combinano nello stesso progetto.',
      },
    ],
    en: [
      {
        question: 'How much does a 3D product animation cost?',
        answer: 'A 3D product animation starts from approximately €1,500-3,000 for a 15-30 second video including modeling, texturing, lighting and rendering. More complex projects with environments, characters or physics simulations can exceed €5,000. Cost depends on model complexity and animation duration.',
      },
      {
        question: 'What software do you use for 3D animation?',
        answer: 'My 3D workflow is built on 3ds Max for modeling and animation, ZBrush for detailed sculpting, Character Creator for characters, and Unreal Engine 5 for real-time rendering and environments. For simulations I use tyFlow in 3ds Max. I choose tools based on the project.',
      },
      {
        question: 'Can I use 3D animation to present a product that does not exist yet?',
        answer: 'Absolutely, it is one of the most common uses. 3D product animation allows you to visualize an object before physical production, show it in contexts impossible to photograph, and create promotional videos without shooting costs. Perfect for product launches, crowdfunding and catalogs.',
      },
      {
        question: 'What is the difference between a static render and 3D animation?',
        answer: 'A static render produces fixed images (like virtual photographs), 3D animation produces video with the model in motion. Static renders are more affordable and faster, ideal for catalogs and e-commerce. Animation is more impactful for social media, commercials and presentations. Often both are combined in the same project.',
      },
    ],
  },

  'post-produzione': {
    it: [
      {
        question: 'Cosa comprende la post-produzione video?',
        answer: 'La post-produzione video comprende tutto ciò che avviene dopo le riprese: montaggio, color grading, sound design, effetti visivi, titolazione, conforming e mastering. Nel mio workflow integrato gestisco tutte queste fasi in un unico flusso, senza passaggi di mano tra professionisti diversi. Questo riduce tempi e costi mantenendo la coerenza creativa.',
      },
      {
        question: 'Quanto costa il color grading professionale?',
        answer: 'Il color grading per un cortometraggio (10-20 minuti) parte da circa €500-1.500. Per uno spot pubblicitario di 30-60 secondi, €300-800. Per un lungometraggio, il costo varia significativamente in base alla complessità. Lavoro con DaVinci Resolve (certificato) che è lo standard dell\'industria cinematografica.',
      },
      {
        question: 'Perché scegliere un workflow integrato invece di specialisti separati?',
        answer: 'Con specialisti separati, il progetto passa di mano in mano: il montatore manda al colorist, il colorist al VFX artist, il VFX artist rimanda al montatore per le correzioni. Ogni passaggio aggiunge tempo, costi e rischio di errori. Con il mio workflow integrato, gestisco tutto in un unico flusso — dal montaggio al master finale. Il risultato è più coerente, più veloce e più economico.',
      },
      {
        question: 'Con quali formati e risoluzioni lavori?',
        answer: 'Lavoro con tutti i formati professionali: 4K, 6K, 8K, RAW (RED, ARRI, Blackmagic), ProRes, H.265. Consegno nei formati richiesti dalla distribuzione: DCP per cinema, broadcast spec per TV, codec ottimizzati per web e social. Gestisco anche il mastering HDR con DaVinci Resolve.',
      },
    ],
    en: [
      {
        question: 'What does video post-production include?',
        answer: 'Video post-production includes everything after filming: editing, color grading, sound design, visual effects, titling, conforming and mastering. In my integrated workflow I handle all these phases in a single pipeline, without handoffs between different professionals. This reduces time and costs while maintaining creative coherence.',
      },
      {
        question: 'How much does professional color grading cost?',
        answer: 'Color grading for a short film (10-20 minutes) starts from approximately €500-1,500. For a 30-60 second commercial, €300-800. For a feature film, costs vary significantly based on complexity. I work with DaVinci Resolve (certified) which is the cinema industry standard.',
      },
      {
        question: 'Why choose an integrated workflow instead of separate specialists?',
        answer: 'With separate specialists, the project passes from hand to hand: editor to colorist, colorist to VFX artist, VFX artist back to editor for corrections. Each handoff adds time, costs and error risk. With my integrated workflow, I manage everything in a single pipeline — from editing to final master. The result is more coherent, faster and more cost-effective.',
      },
      {
        question: 'What formats and resolutions do you work with?',
        answer: 'I work with all professional formats: 4K, 6K, 8K, RAW (RED, ARRI, Blackmagic), ProRes, H.265. I deliver in distribution-required formats: DCP for cinema, broadcast spec for TV, optimized codecs for web and social. I also handle HDR mastering with DaVinci Resolve.',
      },
    ],
  },

  'ai-video': {
    it: [
      {
        question: 'Cos\'è l\'AI video production?',
        answer: 'L\'AI video production è la creazione di contenuti video utilizzando strumenti di intelligenza artificiale generativa come Runway, Veo e Kling. Questi strumenti possono generare clip video da prompt testuali o immagini. Il mio approccio è ibrido: uso l\'AI dove aggiunge valore (generazione background, variazioni creative, accelerazione workflow) e la combino con competenze VFX tradizionali per garantire qualità professionale.',
      },
      {
        question: 'L\'AI può sostituire la produzione video tradizionale?',
        answer: 'No, non completamente — almeno non oggi. L\'AI genera clip di qualità crescente ma ha limiti: coerenza tra shot, controllo preciso del movimento, qualità dei dettagli umani. Il vero vantaggio sta nel workflow ibrido: l\'AI accelera alcune fasi e apre possibilità creative nuove, ma servono competenza ed esperienza per dirigere il risultato. Senza occhio professionale, l\'output AI resta amatoriale.',
      },
      {
        question: 'Quanto costa un video realizzato con AI?',
        answer: 'I costi sono generalmente inferiori alla produzione tradizionale perché si eliminano set, troupe e attrezzature. Un video commerciale di 30-60 secondi realizzato con workflow ibrido AI + post-produzione tradizionale parte da €1.000-3.000. Il risparmio principale è nei tempi: quello che prima richiedeva settimane ora si può realizzare in giorni.',
      },
      {
        question: 'Che strumenti AI usi per la produzione video?',
        answer: 'Il mio toolkit AI include Runway per la generazione e editing video, Veo (Google) per video ad alta qualità, Kling AI per animazione e consistenza stilistica, e Midjourney per concept e storyboard visivi. Scelgo lo strumento in base al risultato richiesto e integro tutto con After Effects, DaVinci Resolve e il mio workflow VFX tradizionale.',
      },
      {
        question: 'Posso usare l\'AI per creare un cortometraggio o una serie?',
        answer: 'Sì, il mercato dei cortometraggi e delle serie AI è in rapida crescita. La sfida principale è mantenere coerenza visiva e narrativa tra le scene. Qui entra in gioco l\'esperienza: chi ha 20 anni di montaggio e regia sa costruire ritmo, continuità e storytelling anche con materiale generato dall\'AI. È esattamente il tipo di progetto in cui il mio profilo ibrido dà il massimo valore.',
      },
    ],
    en: [
      {
        question: 'What is AI video production?',
        answer: 'AI video production is the creation of video content using generative AI tools like Runway, Veo and Kling. These tools can generate video clips from text prompts or images. My approach is hybrid: I use AI where it adds value (background generation, creative variations, workflow acceleration) and combine it with traditional VFX skills to ensure professional quality.',
      },
      {
        question: 'Can AI replace traditional video production?',
        answer: 'No, not completely — at least not today. AI generates increasingly good clips but has limitations: shot-to-shot consistency, precise motion control, human detail quality. The real advantage is in hybrid workflows: AI accelerates certain phases and opens new creative possibilities, but expertise and experience are needed to direct the output. Without a professional eye, AI output remains amateur.',
      },
      {
        question: 'How much does an AI-produced video cost?',
        answer: 'Costs are generally lower than traditional production since you eliminate sets, crew and equipment. A 30-60 second commercial video using a hybrid AI + traditional post-production workflow starts from €1,000-3,000. The main saving is time: what previously took weeks can now be done in days.',
      },
      {
        question: 'What AI tools do you use for video production?',
        answer: 'My AI toolkit includes Runway for video generation and editing, Veo (Google) for high-quality video, Kling AI for animation and style consistency, and Midjourney for visual concepts and storyboards. I choose the tool based on the required output and integrate everything with After Effects, DaVinci Resolve and my traditional VFX workflow.',
      },
      {
        question: 'Can I use AI to create a short film or series?',
        answer: 'Yes, the market for AI short films and series is growing rapidly. The main challenge is maintaining visual and narrative consistency between scenes. This is where experience matters: someone with 20 years of editing and directing knows how to build rhythm, continuity and storytelling even with AI-generated material. It is exactly the type of project where my hybrid profile delivers the most value.',
      },
    ],
  },
};
