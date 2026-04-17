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
        answer: 'Per uno shot di media complessità il costo parte da €2.500, comprensivo di compositing, tracking e color adjustment. Progetti più articolati con set extension, green screen e integrazione CGI possono raggiungere €15.000 o più. Fornisco sempre un preventivo dettagliato e gratuito dopo aver analizzato materiale girato e briefing.',
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
        answer: 'Sono basato a Roma ma lavoro regolarmente da remoto con clienti in tutta Italia e all\'estero — collaboro spesso con produzioni a Londra e negli Stati Uniti senza problemi. La post-produzione VFX si presta perfettamente al lavoro remoto. Per progetti che richiedono supervisione sul set, mi sposto senza problemi.',
      },
      {
        question: 'Posso fare gli effetti visivi del mio film con l\'intelligenza artificiale?',
        answer: 'L\'AI è uno strumento potente che integro nel mio workflow, ma non sostituisce la competenza VFX tradizionale. Strumenti come Runway e Veo possono accelerare alcune fasi (rotoscoping, generazione di background), ma servono 20 anni di occhio per sapere quando l\'output AI è sufficiente, quando serve intervento manuale, e come integrare i due. Il risultato migliore viene sempre dalla combinazione di esperienza e tecnologia.',
      },
    ],
    en: [
      {
        question: 'How much does a VFX artist cost in Rome, Italy?',
        answer: 'For a medium-complexity shot, costs start from €2,500, including compositing, tracking and color adjustment. More articulated projects with set extension, green screen and CGI integration can reach €15,000 or more. I always provide a detailed free quote after reviewing footage and brief.',
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
        answer: 'I am based in Rome but work regularly with clients remotely across Italy and internationally — I frequently collaborate with productions in London and the United States without issues. VFX post-production is perfectly suited for remote work. For projects requiring on-set supervision, I am happy to travel.',
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
        answer: 'Un\'animazione motion graphics standard di 30-60 secondi parte da €2.500, inclusi concept, storyboard, design custom e animazione. Progetti più complessi con voiceover, 3D integrato o formati multipli possono raggiungere €8.000 o più. Il costo dipende da durata, numero di revisioni e complessità degli elementi animati. Fornisco sempre un preventivo dettagliato.',
      },
      {
        question: 'Che differenza c\'è tra motion graphics e animazione?',
        answer: 'La motion graphics è una branca dell\'animazione focalizzata sul design grafico in movimento: testi animati, infografiche, loghi, forme astratte. L\'animazione tradizionale include anche character animation e storytelling narrativo. Nel mio lavoro le due si intrecciano spesso, soprattutto per campagne pubblicitarie dove servono sia elementi grafici che narrativi.',
      },
      {
        question: 'Quanto tempo serve per realizzare un video motion graphics?',
        answer: 'I tempi variano da 2 a 4 settimane per un\'animazione professionale con concept, storyboard, design e animazione finale. Un video corporate con voiceover e animazioni complesse può richiedere 4-6 settimane. La fase di approvazione del concept con il cliente spesso incide più della produzione vera e propria, per questo raccomando di pianificare con anticipo.',
      },
      {
        question: 'Realizzi motion graphics per spot televisivi?',
        answer: 'Sì, ho realizzato motion graphics per spot TV e campagne pubblicitarie per brand di primo livello, da Gucci a RAI. Lavoro con le specifiche tecniche richieste dai broadcaster (consegne broadcast, versioni multiple formato, safe area, sottotitoli) e con tutti i formati necessari per ogni piattaforma di distribuzione.',
      },
    ],
    en: [
      {
        question: 'How much does a motion graphics video cost for a brand?',
        answer: 'A standard 30-60 second motion graphics animation starts from €2,500, including concept, storyboard, custom design and animation. More complex projects with voiceover, integrated 3D or multiple format deliveries can reach €8,000 or more. Cost depends on duration, number of revisions and complexity of animated elements. I always provide a detailed quote.',
      },
      {
        question: 'What is the difference between motion graphics and animation?',
        answer: 'Motion graphics is a branch of animation focused on graphic design in motion: animated text, infographics, logos, abstract shapes. Traditional animation also includes character animation and narrative storytelling. In my work, the two often intertwine, especially for advertising campaigns requiring both graphic and narrative elements.',
      },
      {
        question: 'How long does it take to create a motion graphics video?',
        answer: 'Timelines range from 2 to 4 weeks for a professional animation with concept, storyboard, design and final animation. A corporate video with voiceover and complex animations may take 4-6 weeks. The concept approval phase with the client often takes longer than actual production, so I recommend planning in advance.',
      },
      {
        question: 'Do you create motion graphics for TV commercials?',
        answer: 'Yes, I have created motion graphics for TV spots and advertising campaigns for top-tier brands, from Gucci to RAI. I work with broadcaster technical specifications (broadcast delivery, multiple format versions, safe areas, subtitles) and all delivery formats for every distribution platform.',
      },
    ],
  },

  'animazione-3d': {
    it: [
      {
        question: 'Quanto costa un\'animazione 3D di prodotto?',
        answer: 'Un\'animazione 3D di prodotto parte da €3.000 per un video di 15-30 secondi, comprensivo di modellazione, texturing, illuminazione, animazione e rendering fotorealistico. Progetti più complessi con ambienti, character animation o simulazioni fisiche (come il progetto Guerciotti 60 Anni) possono superare €8.000. Il costo dipende dalla complessità del modello e dalla durata dell\'animazione.',
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
        answer: 'A 3D product animation starts from €3,000 for a 15-30 second video, including modeling, texturing, lighting, animation and photorealistic rendering. More complex projects with environments, character animation or physics simulations (like the Guerciotti 60 Years project) can exceed €8,000. Cost depends on model complexity and animation duration.',
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
        question: 'Quanto costa la post-produzione di uno spot pubblicitario?',
        answer: 'La post-produzione completa di uno spot pubblicitario parte da €1.500, comprensiva di montaggio, color grading e mastering nei formati richiesti. Il color grading singolo per spot va da €800 a €1.200. Per un cortometraggio si parte da €3.000, per un lungometraggio il costo richiede un\'analisi dedicata — dipende da genere, numero di scene e look richiesto. Si può lavorare anche a giornata.',
      },
      {
        question: 'Quanto tempo serve per la post-produzione di un progetto video?',
        answer: 'Uno spot pubblicitario richiede 1-2 settimane di post-produzione, un cortometraggio 3-6 settimane, un documentario 6-10 settimane. Il tempo effettivo dipende da qualità del girato, numero di versioni richieste e complessità del color grading. Lavoro con deadline di festival, broadcast e campagne pubblicitarie, pianificando il flusso per rispettarle.',
      },
      {
        question: 'Sei certificato DaVinci Resolve per il color grading?',
        answer: 'Sì, sono certificato Blackmagic Design per DaVinci Resolve, lo standard professionale per il color grading cinematografico, sia per Color Correction che per Fusion. Questa certificazione garantisce padronanza tecnica completa del software, capacità di gestire workflow cinematografici complessi (LOG footage, HDR, DCP) e rispetto degli standard broadcast e di distribuzione cinema.',
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
        question: 'How much does commercial spot post-production cost?',
        answer: 'Complete post-production for a commercial spot starts from €1,500, including editing, color grading and mastering in required formats. Standalone color grading for a spot ranges from €800 to €1,200. Short films start from €3,000, feature films require dedicated analysis — cost depends on genre, scene count and required look. Day rates are also available.',
      },
      {
        question: 'How long does post-production take for a video project?',
        answer: 'A commercial spot requires 1-2 weeks of post-production, a short film 3-6 weeks, a documentary 6-10 weeks. Actual time depends on footage quality, number of versions required and color grading complexity. I work with festival, broadcast and advertising campaign deadlines, planning the pipeline to meet them.',
      },
      {
        question: 'Are you DaVinci Resolve certified for color grading?',
        answer: 'Yes, I am Blackmagic Design certified for DaVinci Resolve, the professional standard for cinematic color grading, both for Color Correction and Fusion. This certification ensures complete technical mastery of the software, ability to manage complex cinema workflows (LOG footage, HDR, DCP) and compliance with broadcast and cinema distribution standards.',
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
        question: 'Quanto costa un progetto AI video production?',
        answer: 'Un progetto AI completo con VFX integrato, post-produzione professionale e mastering parte da €5.000. Il prezzo riflette il workflow ibrido — generazione AI dirigetta, selezione e iterazione degli output, compositing con footage reale, color grading e finishing. Non è un "video generato con l\'AI", è un video prodotto professionalmente che usa l\'AI come uno degli strumenti. Progetti più ampi con serie di contenuti possono superare €15.000.',
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
        question: 'How much does an AI video production project cost?',
        answer: 'A complete AI project with integrated VFX, professional post-production and mastering starts from €5,000. The price reflects the hybrid workflow — directed AI generation, output selection and iteration, compositing with real footage, color grading and finishing. It is not an "AI-generated video", it is a professionally produced video that uses AI as one of many tools. Larger projects with content series can exceed €15,000.',
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