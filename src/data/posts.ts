export interface BlogPost {
    slug: string;
    slugEn: string;
    titleIt: string;
    titleEn: string;
    excerptIt: string;
    excerptEn: string;
    date: string;
    draft?: boolean;
    readingTime: number;
    category: string;
    categoryLabel: { it: string; en: string };
    keywordTarget: string;
    thumbnail: string;
    thumbnailAlt: { it: string; en: string };
    contentIt: string;
    contentEn: string;
}

export const posts: BlogPost[] = [
    {
        slug: 'ai-vs-vfx-tradizionale-come-scegliere',
        slugEn: 'ai-vs-traditional-vfx-how-to-choose',
        titleIt: 'Come scelgo tra AI e VFX tradizionale per ogni shot',
        titleEn: 'How I choose between AI and traditional VFX for every shot',
        excerptIt: 'Non è una questione di AI contro VFX. È sapere quando usare cosa. Dopo 20 anni di post-produzione e un anno di AI generativa, ecco come decido.',
        excerptEn: "It's not AI versus VFX. It's knowing when to use what. After 20 years of post-production and a year of generative AI, here's how I decide.",
        date: '2026-03-01',
        readingTime: 7,
        category: 'ai',
        categoryLabel: { it: 'AI & VFX', en: 'AI & VFX' },
        keywordTarget: 'AI vs VFX tradizionale',
        thumbnail: '/images/blog/ai-vs-vfx-tradizionale-come-scegliere-workflow.jpg',
        thumbnailAlt: { it: 'AI vs VFX tradizionale - come scegliere', en: 'AI vs traditional VFX - how to choose' },
        contentIt: `<h2>La domanda che mi fanno tutti</h2>
  <p>"Ma con l'AI, i VFX tradizionali servono ancora?" Me lo chiedono registi, producer, agenzie. La risposta è sì — ma non per tutto. E non come prima.</p>
  <p>Uso strumenti di AI generativa (Runway, Veo, Kling) ogni giorno, accanto a After Effects, Nuke e 3ds Max. Non ho sostituito uno con l'altro. Ho aggiunto strumenti alla cassetta degli attrezzi. La scelta dipende dalla shot, dal progetto, dal budget e dal risultato che serve.</p>
  <p>Ecco come decido concretamente.</p>
  
  <h2>Quando scelgo l'AI</h2>
  <p><strong>Concept e pre-visualizzazione.</strong> Devo esplorare dieci direzioni creative per un regista? L'AI genera varianti in ore, non settimane. Posso mostrare tre look diversi per una scena prima ancora di girare un frame. Per chi deve presentare un'idea a un cliente o a un finanziatore, questo cambia tutto.</p>
  <p><strong>Elementi ambientali e sfondi.</strong> Cieli, paesaggi, texture organiche — l'AI produce materiale di base eccellente che poi raffino in compositing. Un cielo drammatico generato con AI e integrato in una ripresa reale può essere indistinguibile da uno stock di altissima gamma.</p>
  <p><strong>Contenuti social e digital con tempi stretti.</strong> Quando il budget è contenuto e la destinazione è Instagram o un sito web, l'AI permette di produrre contenuti visivamente ricchi a una frazione del costo tradizionale.</p>
  <p><strong>Progetti narrativi sperimentali.</strong> Cortometraggi e concept interamente AI-generated. Un nuovo territorio creativo dove l'esperienza cinematografica tradizionale è il vero differenziale — perché l'AI genera frame, ma non racconta storie. Quello lo fai tu.</p>
  
  <h2>Quando scelgo i VFX tradizionali</h2>
  <p><strong>Integrazione con riprese live.</strong> Devo inserire un elemento 3D in una ripresa reale con camera in movimento? Serve camera tracking preciso, lighting match, compositing multilayer. L'AI non fa questo — non ancora, e quando lo farà, servirà comunque qualcuno che sappia valutare se il risultato è credibile.</p>
  <p><strong>Controllo al pixel.</strong> Spot pubblicitari per brand di lusso, film per il cinema, qualsiasi progetto dove ogni frame deve essere perfetto. L'AI produce output con artefatti sottili che un pubblico distratto non nota, ma un direttore creativo sì. Quando serve perfezione, servo io con i miei strumenti tradizionali.</p>
  <p><strong>Coerenza su sequenze lunghe.</strong> L'AI fatica a mantenere coerenza visiva tra shot consecutive — stesso personaggio, stessa luce, stesso ambiente. Per una sequenza narrativa di 30 secondi o più, il workflow tradizionale è ancora più affidabile e spesso più veloce.</p>
  <p><strong>Rotoscoping e clean-up.</strong> Rimuovere un microfono dal frame, isolare un soggetto frame-by-frame, eliminare riflessi. Lavoro di precisione dove l'AI aiuta (Runway ha un buon auto-roto) ma non sostituisce l'occhio.</p>
  
  <h2>E quando li combino</h2>
  <p>Questa è la parte interessante — e il motivo per cui il profilo ibrido è il più forte sul mercato.</p>
  <p>Un progetto recente: il regista voleva un cielo apocalittico per una scena esterna. Soluzione tradizionale: matte painting in Photoshop, proiezione 3D, compositing in Nuke. Tempo stimato: due giorni. Soluzione ibrida: ho generato 20 varianti di cielo con AI, selezionato la migliore, poi l'ho raffinata in After Effects — color match, integrazione con la ripresa, correzione artefatti. Tempo reale: quattro ore. Risultato identico.</p>
  <p>L'AI ha fatto il lavoro "pesante" (generare la base), l'esperienza ha fatto il lavoro "intelligente" (selezionare, raffinare, integrare). Questo è il workflow del futuro — ed è già il mio presente.</p>
  
  <p>Se vuoi capire meglio come funzionano i miei <a href="/vfx">effetti visivi tradizionali</a> o il mio approccio alla <a href="/ai-video">produzione video con AI</a>, ho pagine dedicate a entrambi.</p>
  
  <h2>La regola che applico</h2>
  <p>Non è complicata: <strong>se il risultato AI è al 90% di qualità in un decimo del tempo, uso l'AI e porto quel 90% al 100% con gli strumenti tradizionali.</strong> Se il risultato AI è al 60%, uso direttamente i VFX tradizionali. La capacità di giudicare dove siamo su quella scala è ciò che fa la differenza — e viene solo dall'esperienza.</p>`,

        contentEn: `<h2>The question everyone asks me</h2>
  <p>"With AI, are traditional VFX still needed?" Directors, producers, agencies all ask me this. The answer is yes — but not for everything. And not like before.</p>
  <p>I use generative AI tools (Runway, Veo, Kling) every day, alongside After Effects, Nuke and 3ds Max. I haven't replaced one with the other. I've added tools to the toolbox. The choice depends on the shot, the project, the budget and the result needed.</p>
  <p>Here's how I actually decide.</p>
  
  <h2>When I choose AI</h2>
  <p><strong>Concept and pre-visualization.</strong> Need to explore ten creative directions for a director? AI generates variants in hours, not weeks. I can show three different looks for a scene before shooting a single frame. For anyone presenting an idea to a client or investor, this changes everything.</p>
  <p><strong>Environmental elements and backgrounds.</strong> Skies, landscapes, organic textures — AI produces excellent base material that I then refine in compositing. A dramatic AI-generated sky integrated into real footage can be indistinguishable from premium stock.</p>
  <p><strong>Social and digital content with tight timelines.</strong> When budget is contained and destination is Instagram or a website, AI enables visually rich content at a fraction of traditional cost.</p>
  <p><strong>Experimental narrative projects.</strong> Short films and concepts entirely AI-generated. New creative territory where traditional film experience is the real differentiator — because AI generates frames, but doesn't tell stories. That's your job.</p>
  
  <h2>When I choose traditional VFX</h2>
  <p><strong>Live footage integration.</strong> Need to insert a 3D element into real footage with moving camera? That requires precise camera tracking, lighting match, multilayer compositing. AI doesn't do this — not yet, and when it does, someone will still need to judge if the result is credible.</p>
  <p><strong>Pixel-level control.</strong> Luxury brand commercials, theatrical films, any project where every frame must be perfect. AI produces output with subtle artifacts that a distracted audience won't notice, but a creative director will. When perfection is required, I serve with my traditional tools.</p>
  <p><strong>Coherence across long sequences.</strong> AI struggles to maintain visual consistency between consecutive shots — same character, same lighting, same environment. For a narrative sequence of 30 seconds or more, the traditional workflow is still more reliable and often faster.</p>
  <p><strong>Rotoscoping and clean-up.</strong> Removing a microphone from frame, isolating a subject frame-by-frame, eliminating reflections. Precision work where AI helps (Runway has decent auto-roto) but doesn't replace the eye.</p>
  
  <h2>And when I combine them</h2>
  <p>This is the interesting part — and why the hybrid profile is the strongest in the market.</p>
  <p>A recent project: the director wanted an apocalyptic sky for an exterior scene. Traditional solution: matte painting in Photoshop, 3D projection, compositing in Nuke. Estimated time: two days. Hybrid solution: I generated 20 sky variants with AI, selected the best, then refined it in After Effects — color match, integration with footage, artifact correction. Actual time: four hours. Identical result.</p>
  <p>AI did the "heavy" work (generating the base), experience did the "smart" work (selecting, refining, integrating). This is the future workflow — and it's already my present.</p>
  
  <p>If you want to learn more about my <a href="/en/vfx">traditional visual effects</a> or my approach to <a href="/en/ai-video">AI video production</a>, I have dedicated pages for both.</p>
  
  <h2>The rule I apply</h2>
  <p>It's not complicated: <strong>if the AI result is at 90% quality in a tenth of the time, I use AI and bring that 90% to 100% with traditional tools.</strong> If the AI result is at 60%, I go straight to traditional VFX. The ability to judge where we are on that scale is what makes the difference — and it only comes from experience.</p>`,
    },
    {
        slug: 'vfx-cinema-indipendente-guida-workflow',
        slugEn: 'vfx-independent-film-workflow-guide',
        titleIt: 'VFX per cinema indipendente: guida completa al workflow',
        titleEn: 'VFX for independent cinema: complete workflow guide',
        excerptIt: 'Come ottenere effetti visivi credibili con budget contenuti. Dalla pianificazione sul set alla consegna finale, il workflow che uso per i film indipendenti.',
        excerptEn: 'How to achieve credible visual effects on tight budgets. From on-set planning to final delivery, the workflow I use for independent films.',
        date: '2026-03-08',
        readingTime: 9,
        category: 'vfx',
        categoryLabel: { it: 'VFX', en: 'VFX' },
        keywordTarget: 'VFX cinema indipendente',
        thumbnail: '/images/blog/vfx-cinema-indipendente-workflow-completo.jpg',
        thumbnailAlt: { it: 'VFX per cinema indipendente - workflow completo', en: 'VFX for independent cinema - complete workflow' },
        contentIt: `<h2>Il VFX nel cinema indipendente non è un lusso</h2>
  <p>C'è un pregiudizio diffuso: gli effetti visivi sono roba da blockbuster. Servono milioni di budget e centinaia di artisti. È falso. Alcuni dei VFX più efficaci che ho realizzato erano per cortometraggi e film indipendenti con budget minuscoli.</p>
  <p>La differenza non è nei soldi — è nella pianificazione. Un VFX ben pianificato su un film indipendente costa una frazione di uno improvvisato su una produzione ricca. E il risultato può essere identico.</p>
  <p>In questa guida condivido il workflow che uso quando lavoro con produzioni indipendenti. Non è teoria — è quello che faccio ogni giorno.</p>
  
  <h2>Fase 1: Pre-produzione — dove si vince o si perde</h2>
  <p>Il 70% del successo dei VFX si decide prima di accendere la camera. Sul serio.</p>
  <p><strong>Breakdown delle shot VFX.</strong> Prima delle riprese, analizzo la sceneggiatura e identifico ogni shot che richiederà intervento in post. Per ciascuna, stimo complessità e tempo. Questo dà al producer un quadro reale dei costi e permette al regista di fare scelte informate — magari riscrivere una scena per renderla più realizzabile.</p>
  <p><strong>Consulenza sul set.</strong> Anche solo una videochiamata con il DOP prima delle riprese può fare la differenza. Questioni come: posizione dei green screen, tracking markers, pulizia del set, spazio per set extension. Se queste cose non vengono considerate in ripresa, in post si paga il triplo.</p>
  <p><strong>Reference visive condivise.</strong> Creo un documento con reference per ogni effetto — film esistenti, concept art, test rapidi. Questo allinea regista, DOP e me prima di girare un metro di pellicola.</p>
  
  <h2>Fase 2: Sul set — le regole che cambiano tutto</h2>
  <p><strong>Luci coerenti.</strong> Se devo inserire un elemento CG in una ripresa, ho bisogno di sapere esattamente da dove viene la luce. Una chrome ball e una grey ball sul set sono sufficienti — costano zero e mi danno le informazioni per un lighting match perfetto.</p>
  <p><strong>Clean plate.</strong> Per ogni ripresa VFX, giro un clean plate — la stessa inquadratura senza attori. Sembra banale ma è il singolo elemento che più accelera il compositing.</p>
  <p><strong>Tracking markers.</strong> Piccoli adesivi verdi nei punti giusti del set. Servono al camera tracking 3D e rendono il matchmove dieci volte più veloce e preciso.</p>
  <p><strong>Overscan.</strong> Chiedo sempre al DOP di girare con un po' di margine in più — serve per la stabilizzazione e per le set extension. Non costa nulla e salva ore di lavoro.</p>
  
  <h2>Fase 3: Post-produzione — il workflow integrato</h2>
  <p>Ecco dove il mio approccio fa la differenza per il cinema indipendente.</p>
  <p><strong>Montaggio prima dei VFX.</strong> Non inizio i VFX finché il montaggio non è solido. Non ha senso lavorare tre giorni su una shot che poi viene tagliata. Sembra ovvio, ma capita più spesso di quanto si pensi.</p>
  <p><strong>VFX e color insieme.</strong> Gestendo entrambi, posso fare il compositing già nella direzione cromatica del film. Non lavoro su shot "neutre" che poi qualcun altro deve grading — lavoro direttamente nel look finale. Il risultato è più coerente e il tempo si dimezza.</p>
  <p><strong>Iterazioni rapide.</strong> Il regista vede la shot con VFX e color nella stessa sessione di review. Può dire "quel cielo è troppo drammatico" e io cambio il grading e adatto il compositing in tempo reale. In un workflow frammentato, quella nota diventerebbe tre email tra montatore, VFX artist e colorist.</p>
  
  <h2>Fase 4: Gli strumenti giusti per budget giusti</h2>
  <p><strong>After Effects + Mocha Pro</strong> per il 90% dei VFX di un film indipendente. Compositing, rotoscoping, tracking, clean-up — fa tutto e lo conosco a memoria.</p>
  <p><strong>DaVinci Resolve</strong> per montaggio, color e Fusion (VFX integrati). Un unico software per quasi tutto il flusso — questo è un vantaggio enorme per le produzioni con budget contenuti.</p>
  <p><strong>3ds Max o Unreal Engine</strong> quando servono elementi 3D. Set extension, ambienti, oggetti CG.</p>
  <p><strong>AI generativa</strong> per elementi ambientali, cieli, texture. L'ho usata per generare sfondi su Along Came Ruby — risultati che avrebbero richiesto giorni di matte painting.</p>
  
  <h2>Quanto costa davvero</h2>
  <p>Un film indipendente con 20-30 shot VFX di complessità media (clean-up, set extension, compositing base) richiede indicativamente 3-4 settimane di lavoro. Meno di quanto si pensi — soprattutto se la pre-produzione è stata fatta bene.</p>
  <p>Il costo vero di VFX non pianificati è molto più alto: shot impossibili da salvare, tempi raddoppiati, compromessi sulla qualità che si vedono sullo schermo.</p>
  <p>Il mio consiglio: coinvolgimi in pre-produzione. Costa poco (spesso solo una consulenza) e fa risparmiare molto in post. Scopri i miei <a href="/vfx">servizi VFX</a> o guarda il caso studio <a href="/portfolio/along-came-ruby">Along Came Ruby</a> per vedere questo workflow in azione.</p>`,

        contentEn: `<h2>VFX in independent cinema isn't a luxury</h2>
  <p>There's a widespread prejudice: visual effects are blockbuster stuff. You need millions in budget and hundreds of artists. It's false. Some of the most effective VFX I've done were for short films and independent features with tiny budgets.</p>
  <p>The difference isn't money — it's planning. Well-planned VFX on an indie film costs a fraction of improvised ones on a rich production. And the result can be identical.</p>
  <p>In this guide I share the workflow I use when working with independent productions. This isn't theory — it's what I do every day.</p>
  
  <h2>Phase 1: Pre-production — where you win or lose</h2>
  <p>70% of VFX success is decided before turning on the camera. Seriously.</p>
  <p><strong>VFX shot breakdown.</strong> Before shooting, I analyze the screenplay and identify every shot requiring post work. For each, I estimate complexity and time. This gives the producer a real picture of costs and lets the director make informed choices — maybe rewriting a scene to make it more achievable.</p>
  <p><strong>On-set consulting.</strong> Even just a video call with the DP before shooting can make the difference. Issues like: green screen placement, tracking markers, set cleanliness, space for set extension. If these aren't considered during shooting, you pay triple in post.</p>
  <p><strong>Shared visual references.</strong> I create a document with references for every effect — existing films, concept art, quick tests. This aligns director, DP and me before shooting a single meter of footage.</p>
  
  <h2>Phase 2: On set — the rules that change everything</h2>
  <p><strong>Consistent lighting.</strong> If I need to insert a CG element into footage, I need to know exactly where light is coming from. A chrome ball and grey ball on set are sufficient — they cost nothing and give me the information for perfect lighting match.</p>
  <p><strong>Clean plate.</strong> For every VFX shot, shoot a clean plate — the same frame without actors. Seems basic but it's the single element that most accelerates compositing.</p>
  <p><strong>Tracking markers.</strong> Small green stickers in the right spots on set. They serve 3D camera tracking and make matchmove ten times faster and more accurate.</p>
  <p><strong>Overscan.</strong> I always ask the DP to shoot with a bit of extra margin — needed for stabilization and set extensions. Costs nothing and saves hours of work.</p>
  
  <h2>Phase 3: Post-production — the integrated workflow</h2>
  <p>This is where my approach makes the difference for independent cinema.</p>
  <p><strong>Edit before VFX.</strong> I don't start VFX until the edit is solid. No point working three days on a shot that gets cut. Seems obvious, but it happens more often than you'd think.</p>
  <p><strong>VFX and color together.</strong> Managing both, I can composite already in the film's chromatic direction. I don't work on "neutral" shots that someone else then grades — I work directly in the final look. The result is more coherent and the time halves.</p>
  <p><strong>Rapid iterations.</strong> The director sees the shot with VFX and color in the same review session. They can say "that sky is too dramatic" and I change the grade and adapt the compositing in real time. In a fragmented workflow, that note would become three emails between editor, VFX artist and colorist.</p>
  
  <h2>Phase 4: The right tools for right budgets</h2>
  <p><strong>After Effects + Mocha Pro</strong> for 90% of indie film VFX. Compositing, rotoscoping, tracking, clean-up — does everything and I know it by heart.</p>
  <p><strong>DaVinci Resolve</strong> for editing, color and Fusion (integrated VFX). A single software for nearly the entire pipeline — this is a huge advantage for budget-conscious productions.</p>
  <p><strong>3ds Max or Unreal Engine</strong> when 3D elements are needed. Set extension, environments, CG objects.</p>
  <p><strong>Generative AI</strong> for environmental elements, skies, textures. I used it to generate backgrounds on Along Came Ruby — results that would have required days of matte painting.</p>
  
  <h2>What it actually costs</h2>
  <p>An indie film with 20-30 medium-complexity VFX shots (clean-up, set extension, basic compositing) requires roughly 3-4 weeks of work. Less than you'd think — especially if pre-production was done right.</p>
  <p>The real cost of unplanned VFX is much higher: unsalvageable shots, doubled timelines, quality compromises that show on screen.</p>
  <p>My advice: involve me in pre-production. It costs little (often just a consultation) and saves a lot in post. Check out my <a href="/en/vfx">VFX services</a> or see the <a href="/en/portfolio/along-came-ruby">Along Came Ruby</a> case study to see this workflow in action.</p>`,
    },
    {
        slug: 'color-grading-film-davinci-resolve-workflow',
        slugEn: 'color-grading-film-davinci-resolve-workflow',
        titleIt: 'Color Grading per film: il mio workflow in DaVinci Resolve',
        titleEn: 'Color Grading for film: my DaVinci Resolve workflow',
        excerptIt: 'Dal LOG al look finale: come lavoro il colore su un film. Il processo che uso come colorist certificato DaVinci Resolve, dalla prima correzione al delivery.',
        excerptEn: 'From LOG to final look: how I work color on a film. The process I use as a certified DaVinci Resolve colorist, from first correction to delivery.',
        date: '2026-03-15',
        readingTime: 8,
        category: 'post',
        categoryLabel: { it: 'Post Produzione', en: 'Post Production' },
        keywordTarget: 'color grading film DaVinci Resolve',
        thumbnail: '/images/blog/color-grading-film-davinci-resolve-workflow-professionale.jpg',
        thumbnailAlt: { it: 'Color grading cinematografico in DaVinci Resolve', en: 'Cinematic color grading in DaVinci Resolve' },
        contentIt: `<h2>Il colore non è decorazione</h2>
  <p>C'è un malinteso diffuso sul color grading: molti lo considerano l'ultimo passaggio, il "filtro" da applicare quando tutto il resto è finito. Non è così. Il colore è narrazione. Definisce il tono emotivo di ogni scena, guida l'occhio dello spettatore, separa i piani temporali, distingue i personaggi.</p>
  <p>Lavoro come colorist certificato DaVinci Resolve da diversi anni, su film, documentari e spot. In questo articolo condivido il workflow che applico su un progetto cinematografico — non la teoria, ma quello che faccio concretamente quando un regista mi consegna il girato.</p>
  
  <h2>Fase 1: Il dialogo iniziale</h2>
  <p>Prima di toccare una node, parlo con il regista e con il direttore della fotografia. Il DOP è l'artista che ha immaginato l'atmosfera del film — io sono il tecnico che deve tirarla fuori dal girato e portarla dove lui la vede. Questo dialogo è il passaggio più importante e il più sottovalutato.</p>
  <p><strong>Cosa chiedo:</strong> qual è il tono emotivo del film? Ci sono reference visive (altri film, fotografi, pittori)? Ci sono scene che devono distinguersi dal resto? Quali scelte di fotografia vanno preservate e valorizzate? Spesso è con il DOP che entro più nel dettaglio tecnico — parliamo la stessa lingua quando si tratta di luce, contrasto, resa delle ottiche.</p>
  <p>Da questa conversazione nasce un documento di reference condiviso — una raccolta di frame, screenshot da altri film, palette cromatiche. È la bussola per tutto il lavoro che segue.</p>
  
  <h2>Fase 2: Conform e preparazione timeline</h2>
  <p>Ricevo l'EDL o l'XML dal montaggio e faccio il conform in DaVinci. Verifico che tutti i file media siano collegati, che i metadata delle camere siano corretti e che la timeline corrisponda esattamente al montaggio approvato.</p>
  <p><strong>Le camere che incontro più spesso:</strong> ARRI (LogC3 / LogC4), RED (IPP2 / Log3G10), Sony Venice (S-Log3), Blackmagic (BRAW / Film Gen 5). Ogni camera ha il suo spazio colore e il suo punto di partenza — conoscerli significa non perdere informazioni preziose nel primo passaggio.</p>
  
  <h2>Fase 3: Correzione primaria (balance)</h2>
  <p>Il primo passo è tecnico: portare ogni shot a un punto di partenza neutro e bilanciato. Esposizione, bilanciamento del bianco, contrasto di base. Non sto ancora creando un "look" — sto assicurandomi che il materiale sia pulito e coerente.</p>
  <p>Su un film, questo significa anche uniformare shot girate in giorni diversi, con luce diversa, a volte con camere diverse. Il continuity di colore è invisibile quando è fatto bene — e disastroso quando manca.</p>
  <p><strong>Strumenti che uso in questa fase:</strong> Lift/Gamma/Gain per il bilanciamento, curve per il contrasto, qualifier per isolare problemi specifici (un incarnato troppo rosso, un cielo bruciato).</p>
  
  <h2>Fase 4: Il look — dove inizia la magia</h2>
  <p>Questa è la fase creativa. Sulla base neutra e bilanciata, costruisco il look del film — la firma visiva che lo renderà riconoscibile.</p>
  <p><strong>Come costruisco un look in DaVinci:</strong></p>
  <p>Parto dalla scena chiave — quella che il regista considera più rappresentativa del tono del film. Sviluppo il look su quella scena e poi lo estendo alle altre, adattandolo scena per scena.</p>
  <p>Lavoro con node seriali e paralleli: una node per il contrasto creativo, una per la palette colori (spingo certi toni, desaturo altri), una per la texture (grana, halation se servono), una per le finestre e le maschere che guidano l'attenzione.</p>
  <p>Non uso LUT preconfezionate come punto di arrivo. Le LUT possono essere un punto di partenza, ma il look di un film deve essere costruito su misura per quel film, quel DOP, quelle condizioni di luce. Un preset non può fare questo.</p>
  
  <h2>Fase 5: Secondarie e dettaglio</h2>
  <p>Dopo il look generale, lavoro sui dettagli shot per shot. Qui è dove il tempo si investe davvero.</p>
  <p><strong>Qualifier HSL:</strong> isolo incarnati per trattarli separatamente (spesso servono toni più caldi e saturi del resto della scena). Isolo cieli, vegetazione, elementi specifici che hanno bisogno di attenzione individuale.</p>
  <p><strong>Power Windows:</strong> vignettatere sottili per guidare l'occhio, maschere per correggere problemi di luce sul set (una finestra troppo luminosa, un'ombra dura sul viso). Uso il tracking di DaVinci per seguire i soggetti in movimento.</p>
  <p><strong>Face Refinement:</strong> DaVinci ha strumenti dedicati per il riconoscimento facciale. Li uso con parsimonia — non per "abbellire" ma per garantire che gli incarnati restino naturali e coerenti in ogni condizione di luce.</p>
  
  <h2>Fase 6: Review e iterazione</h2>
  <p>Qui entra il vantaggio del mio workflow integrato. Quando il regista vede il grading e dice "questa scena dovrebbe essere più fredda, più isolata" — posso anche intervenire sul montaggio se serve, accorciare un'inquadratura, cambiare un taglio. Non devo mandare note a un altro professionista e aspettare.</p>
  <p>Di solito faccio 2-3 passaggi di review su un film. Il primo è il look generale, il secondo i dettagli, il terzo la rifinitura finale e il continuity check — riguardo tutto il film dall'inizio alla fine verificando coerenza.</p>
  
  <h2>Fase 7: Delivery</h2>
  <p>Il master finale dipende dalla destinazione: DCP per il cinema (P3 D65, gamma 2.6), Rec.709 per broadcast e streaming, HDR se richiesto (PQ o HLG). DaVinci gestisce tutto nativamente, incluse le versioni multiple per piattaforme diverse.</p>
  <p>Se il film ha VFX, il grading e i VFX si parlano in continuazione — ed è qui che gestire entrambi fa risparmiare settimane. Non devo esportare shot, mandarle al VFX artist, aspettare il ritorno, rifare il match. È già tutto allineato. Scopri di più sui miei servizi di <a href="/post-produzione">post-produzione</a> e <a href="/vfx">effetti visivi</a>.</p>`,

        contentEn: `<h2>Color isn't decoration</h2>
  <p>There's a widespread misconception about color grading: many consider it the last step, the "filter" to apply when everything else is done. It's not. Color is storytelling. It defines the emotional tone of every scene, guides the viewer's eye, separates time planes, distinguishes characters.</p>
  <p>I've been working as a DaVinci Resolve certified colorist for several years, on films, documentaries and commercials. In this article I share the workflow I apply on a cinematic project — not theory, but what I actually do when a director delivers footage.</p>
  
  <h2>Phase 1: The initial dialogue</h2>
  <p>Before touching a single node, I talk to the director and the director of photography. The DP is the artist who imagined the film's atmosphere — I'm the technician who needs to pull it out of the footage and bring it where they see it. This dialogue is the most important and most undervalued step.</p>
  <p><strong>What I ask:</strong> what's the emotional tone of the film? Are there visual references (other films, photographers, painters)? Are there scenes that need to stand apart from the rest? Which photography choices need to be preserved and enhanced? Often it's with the DP that I get into more technical detail — we speak the same language when it comes to light, contrast, lens rendering.</p>
  <p>From this conversation comes a shared reference document — a collection of frames, screenshots from other films, color palettes. It's the compass for all the work that follows.</p>
  
  <h2>Phase 2: Conform and timeline preparation</h2>
  <p>I receive the EDL or XML from editing and conform in DaVinci. I verify all media files are linked, camera metadata is correct and the timeline matches the approved edit exactly.</p>
  <p><strong>Cameras I encounter most:</strong> ARRI (LogC3 / LogC4), RED (IPP2 / Log3G10), Sony Venice (S-Log3), Blackmagic (BRAW / Film Gen 5). Each camera has its own color space and starting point — knowing them means not losing precious information in the first pass.</p>
  
  <h2>Phase 3: Primary correction (balance)</h2>
  <p>The first step is technical: bringing every shot to a neutral, balanced starting point. Exposure, white balance, base contrast. I'm not creating a "look" yet — I'm ensuring the material is clean and consistent.</p>
  <p>On a film, this also means matching shots filmed on different days, with different light, sometimes with different cameras. Color continuity is invisible when done well — and disastrous when missing.</p>
  <p><strong>Tools I use in this phase:</strong> Lift/Gamma/Gain for balance, curves for contrast, qualifiers to isolate specific problems (skin too red, a blown sky).</p>
  
  <h2>Phase 4: The look — where the magic begins</h2>
  <p>This is the creative phase. On the neutral, balanced base, I build the film's look — the visual signature that will make it recognizable.</p>
  <p><strong>How I build a look in DaVinci:</strong></p>
  <p>I start from the key scene — the one the director considers most representative of the film's tone. I develop the look on that scene, then extend it to others, adapting scene by scene.</p>
  <p>I work with serial and parallel nodes: one for creative contrast, one for the color palette (pushing certain tones, desaturating others), one for texture (grain, halation if needed), one for windows and masks that guide attention.</p>
  <p>I don't use packaged LUTs as an endpoint. LUTs can be a starting point, but a film's look must be built custom for that film, that DP, those lighting conditions. A preset can't do this.</p>
  
  <h2>Phase 5: Secondaries and detail</h2>
  <p>After the general look, I work on details shot by shot. This is where time really gets invested.</p>
  <p><strong>HSL Qualifiers:</strong> I isolate skin tones to treat them separately (they often need warmer, more saturated tones than the rest of the scene). I isolate skies, vegetation, specific elements needing individual attention.</p>
  <p><strong>Power Windows:</strong> subtle vignettes to guide the eye, masks to correct on-set lighting issues (an overly bright window, a hard shadow on a face). I use DaVinci's tracking to follow moving subjects.</p>
  <p><strong>Face Refinement:</strong> DaVinci has dedicated facial recognition tools. I use them sparingly — not to "beautify" but to ensure skin tones remain natural and consistent across all lighting conditions.</p>
  
  <h2>Phase 6: Review and iteration</h2>
  <p>Here's where my integrated workflow advantage shows. When the director sees the grade and says "this scene should feel colder, more isolated" — I can also intervene on the edit if needed, shorten a shot, change a cut. I don't need to send notes to another professional and wait.</p>
  <p>I typically do 2-3 review passes on a film. The first for overall look, the second for details, the third for final refinement and continuity check — watching the entire film start to finish verifying coherence.</p>
  
  <h2>Phase 7: Delivery</h2>
  <p>The final master depends on destination: DCP for cinema (P3 D65, gamma 2.6), Rec.709 for broadcast and streaming, HDR if required (PQ or HLG). DaVinci handles everything natively, including multiple versions for different platforms.</p>
  <p>If the film has VFX, the grade and VFX are in constant conversation — and this is where managing both saves weeks. I don't need to export shots, send them to the VFX artist, wait for returns, redo the match. It's already aligned. Learn more about my <a href="/en/post-production">post-production</a> and <a href="/en/vfx">visual effects</a> services.</p>`,
    },
    {
        slug: 'breakdown-vfx-along-came-ruby',
        slugEn: 'vfx-breakdown-along-came-ruby',
        titleIt: 'Breakdown VFX: gli effetti visivi di Along Came Ruby',
        titleEn: 'VFX Breakdown: the visual effects of Along Came Ruby',
        excerptIt: 'Come ho creato l\'effetto spazio-temporale di Along Came Ruby. Dal concept alla composizione finale: processo, strumenti e decisioni creative.',
        excerptEn: 'How I created the space-time effect for Along Came Ruby. From concept to final comp: process, tools and creative decisions.',
        date: '2026-03-22',
        readingTime: 6,
        category: 'vfx',
        categoryLabel: { it: 'VFX Breakdown', en: 'VFX Breakdown' },
        keywordTarget: 'VFX breakdown cortometraggio',
        thumbnail: '/images/blog/breakdown-vfx-along-came-ruby-effetto-spazio-temporale.jpg',
        thumbnailAlt: { it: 'Breakdown VFX Along Came Ruby - effetto spazio-temporale', en: 'VFX breakdown Along Came Ruby - space-time effect' },
        contentIt: `<h2>Il progetto</h2>
  <p>Along Came Ruby è un cortometraggio drammatico/sci-fi diretto da Riccardo Suriano. In un mondo post-apocalittico, Ruby cerca il fratello Henry e incontra una donna enigmatica che custodisce segreti del passato. L'elemento narrativo centrale è la comunicazione tra presente e futuro attraverso lo spazio-tempo — e renderlo visivamente credibile era il mio lavoro.</p>
  <p>Questo è il tipo di progetto che amo: un budget contenuto, una sfida creativa enorme e la libertà di proporre soluzioni. Nessuno mi ha detto "fai questo effetto in questo modo". Il regista mi ha detto "voglio che il pubblico senta che due dimensioni si stanno toccando" — e da lì ho costruito tutto.</p>
  
  <h2>Il concept visivo</h2>
  <p>La prima decisione è stata: niente portali rotondi, niente cerchi luminosi, niente "Stargate". Troppo visto, troppo didascalico. L'effetto doveva essere organico, sottile nei momenti di calma e devastante nei momenti chiave.</p>
  <p>Ho proposto al regista un approccio basato su <strong>distorsioni atmosferiche e particellari luminose</strong> — come se l'aria stessa si strappasse e da quello strappo filtrasse luce di un altro tempo. L'idea era rendere l'effetto parte dell'ambiente, non un elemento sovrapposto.</p>
  <p>Le reference visive che abbiamo condiviso spaziavano da Arrival (la nebbia che avvolge le navi) a Stalker di Tarkovskij (la zona come luogo dove le regole fisiche si piegano). Non copiare — ma capire il principio: gli effetti migliori sono quelli che il pubblico sente prima di vedere.</p>
  
  <h2>Il processo tecnico</h2>
  <p><strong>Ripresa.</strong> Sul set ho chiesto tracking markers discreti negli ambienti esterni. Servivano per ancorare gli effetti 3D allo spazio reale. Ho anche chiesto al DOP di girare alcuni clean plate delle location — fondamentali per il compositing.</p>
  <p><strong>Camera tracking.</strong> Ho estratto i dati di camera da ogni shot VFX usando Mocha Pro per il tracking planare e PFTrack per il 3D matchmove sulle shot più complesse. La precisione del tracking è tutto — se l'effetto "scivola" anche di un pixel rispetto alla scena, il cervello dello spettatore lo percepisce come falso.</p>
  <p><strong>Elementi 3D e particellari.</strong> Le distorsioni spazio-temporali sono state create in 3ds Max con sistemi particellari personalizzati e in After Effects con Trapcode Particular di Red Giant per i sistemi particellari più complessi. Volumi di luce, filamenti di energia, micro-particelle che seguono pattern organici. Ogni elemento è stato stratificato direttamente nella scena, integrato con la ripresa live attraverso blending mode, maschere animate e correzione colore locale.</p>
  <p><strong>Compositing.</strong> In After Effects ho stratificato gli elementi: la shot originale come base, le distorsioni 3D integrate con blending mode e maschere animate, correzione colore locale per far sì che la luce dell'effetto "rimbalzi" sugli oggetti della scena, e infine un passaggio di grana e aberrazione cromatica per sporcare leggermente l'effetto e renderlo fotografico.</p>
  
  <h2>La shot più difficile</h2>
  <p>C'è una sequenza dove Ruby è in primo piano e dietro di lei lo spazio si deforma. La camera è in movimento, lei si muove, l'ambiente è l'interno del rifugio — legno, oggetti, ombre. Tutto si muove.</p>
  <p>Ho dovuto rotoscopare Ruby frame per frame per separare il primo piano dallo sfondo, poi applicare la distorsione solo allo sfondo mantenendo il primo piano intatto. Il tracking doveva essere perfetto perché qualsiasi errore sarebbe stato visibile immediatamente — il volto umano è la prima cosa che il nostro cervello controlla.</p>
  <p>Tempo su questa shot: circa un giorno e mezzo. Il risultato: nessuno nota l'effetto come "effetto" — vedono una scena dove qualcosa di strano sta succedendo all'aria dietro Ruby. Esattamente l'obiettivo.</p>
  
  <h2>Cosa ho imparato (ancora)</h2>
  <p><strong>Il meno è più.</strong> Le prime versioni dell'effetto erano troppo evidenti. Il regista ha avuto ragione a chiedere di tirare indietro — l'effetto funziona meglio quando è al limite della percezione, quando lo spettatore non è sicuro di cosa ha visto.</p>
  <p><strong>Il dialogo col regista è il vero strumento.</strong> Nessun software sostituisce una conversazione chiara su cosa l'effetto deve far sentire al pubblico. "Due dimensioni che si toccano" è una frase — ma è la frase giusta, e da lì è nato tutto il look.</p>
  <p><strong>Il workflow integrato fa la differenza.</strong> Avendo gestito anche il color grading del corto, ho potuto lavorare VFX e colore insieme fin dall'inizio. L'effetto spazio-temporale ha una sua palette cromatica che dialoga con il grading delle scene — non è un elemento incollato sopra, è parte del tessuto visivo del film. Se ti interessa, scopri i miei <a href="/vfx">servizi VFX</a>, il mio approccio alla <a href="/post-produzione">post-produzione integrata</a>, o guarda il <a href="/portfolio/along-came-ruby">caso studio completo di Along Came Ruby</a> nel portfolio.</p>`,

        contentEn: `<h2>The project</h2>
  <p>Along Came Ruby is a drama/sci-fi short film directed by Riccardo Suriano. In a post-apocalyptic world, Ruby searches for her brother Henry and encounters an enigmatic woman who holds secrets of the past. The central narrative element is communication between present and future through space-time — and making it visually credible was my job.</p>
  <p>This is the type of project I love: a contained budget, an enormous creative challenge and the freedom to propose solutions. Nobody told me "make this effect this way." The director told me "I want the audience to feel that two dimensions are touching" — and from there I built everything.</p>
  
  <h2>The visual concept</h2>
  <p>The first decision was: no round portals, no glowing circles, no "Stargate." Too familiar, too literal. The effect needed to be organic, subtle in calm moments and devastating in key moments.</p>
  <p>I proposed to the director an approach based on <strong>atmospheric distortions and light particles</strong> — as if the air itself were tearing and through that tear, light from another time filtered in. The idea was making the effect part of the environment, not an overlaid element.</p>
  <p>The visual references we shared ranged from Arrival (the fog enveloping the ships) to Tarkovsky's Stalker (the zone as a place where physical rules bend). Not copying — but understanding the principle: the best effects are those the audience feels before seeing.</p>
  
  <h2>The technical process</h2>
  <p><strong>Shooting.</strong> On set I requested discreet tracking markers in exterior environments. They were needed to anchor 3D effects to real space. I also asked the DP to shoot clean plates of locations — essential for compositing.</p>
  <p><strong>Camera tracking.</strong> I extracted camera data from every VFX shot using Mocha Pro for planar tracking and PFTrack for 3D matchmove on more complex shots. Tracking precision is everything — if the effect "slides" even one pixel relative to the scene, the viewer's brain perceives it as false.</p>
  <p><strong>3D elements and particles.</strong> The space-time distortions were created in 3ds Max with custom particle systems and in After Effects with Red Giant's Trapcode Particular for the more complex particle systems. Light volumes, energy filaments, micro-particles following organic patterns. Each element was layered directly into the scene, integrated with the live footage through blending modes, animated masks and local color correction.</p>
  <p><strong>Compositing.</strong> In After Effects I layered elements: the original shot as base, 3D distortions integrated with blending modes and animated masks, local color correction to make the effect's light "bounce" on scene objects, and finally a grain and chromatic aberration pass to slightly dirty the effect and make it photographic.</p>
  
  <h2>The hardest shot</h2>
  <p>There's a sequence where Ruby is in the foreground and behind her space deforms. The camera is moving, she's moving, the environment is the interior of the shelter — wood, objects, shadows. Everything is moving.</p>
  <p>I had to rotoscope Ruby frame by frame to separate foreground from background, then apply distortion only to the background while keeping the foreground intact. Tracking had to be perfect because any error would be immediately visible — the human face is the first thing our brain checks.</p>
  <p>Time on this shot: about a day and a half. The result: nobody notices the effect as an "effect" — they see a scene where something strange is happening to the air behind Ruby. Exactly the goal.</p>
  
  <h2>What I learned (again)</h2>
  <p><strong>Less is more.</strong> The first versions of the effect were too obvious. The director was right to ask me to pull back — the effect works better when it's at the edge of perception, when the viewer isn't sure what they saw.</p>
  <p><strong>Dialogue with the director is the real tool.</strong> No software replaces a clear conversation about what the effect should make the audience feel. "Two dimensions touching" is a phrase — but it's the right phrase, and from there the entire look was born.</p>
  <p><strong>The integrated workflow makes the difference.</strong> Having also managed the color grading for the short, I could work VFX and color together from the start. The space-time effect has its own color palette that dialogues with the scene grading — it's not an element pasted on top, it's part of the film's visual fabric. If you're interested, read more about my <a href="/en/vfx">VFX services</a>, my approach to <a href="/en/post-production">integrated post-production</a>, or check out the <a href="/en/portfolio/along-came-ruby">full Along Came Ruby case study</a> in my portfolio.</p>`,
    },
    {
        slug: 'animazione-3d-prodotto-presentazione-cinematografica',
        slugEn: '3d-product-animation-cinematic-presentation',
        titleIt: 'Animazione 3D di prodotto: come presentare oggetti in modo cinematografico',
        titleEn: '3D product animation: how to present objects cinematically',
        excerptIt: 'Dal briefing al render finale. Come trasformo un oggetto fisico in un protagonista visivo con animazione 3D, illuminazione cinematografica e ambienti costruiti su misura.',
        excerptEn: 'From briefing to final render. How I transform a physical object into a visual protagonist with 3D animation, cinematic lighting and custom-built environments.',
        date: '2026-03-10',
        readingTime: 8,
        category: '3d',
        categoryLabel: { it: 'Animazione 3D', en: '3D Animation' },
        keywordTarget: 'animazione 3D prodotto',
        thumbnail: '/images/portfolio/jor-liaison-colosseo-anelli-3d.webp',
        thumbnailAlt: { it: 'Animazione 3D gioielli \u2014 JOR Collezione Liaison', en: '3D jewelry animation \u2014 JOR Liaison Collection' },
        contentIt: `<h2>L\u2019oggetto come protagonista</h2>
<p>Quando un brand mi chiede un video di prodotto in 3D, la prima cosa che dico \u00E8: non stiamo facendo un catalogo. Un oggetto animato in 3D deve raccontare una storia \u2014 deve avere un ambiente, una luce, un movimento che comunichi qualcosa di pi\u00F9 delle sue specifiche tecniche.</p>
<p>La differenza tra un render di prodotto e un\u2019<a href="/animazione-3d" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">animazione 3D cinematografica</a> \u00E8 la stessa che c\u2019\u00E8 tra una foto prodotto su sfondo bianco e una campagna pubblicitaria: entrambe mostrano lo stesso oggetto, ma una lo presenta, l\u2019altra lo fa desiderare.</p>

<h2>Il processo: dal disegno tecnico al mondo costruito</h2>
<p>Ogni progetto segue un flusso preciso che ho affinato in anni di lavoro.</p>
<p><strong>Fase 1 \u2014 Studio dell\u2019oggetto.</strong> Ricevo i disegni tecnici, le foto di riferimento, i campioni fisici quando possibile. Studio i materiali: come riflette la luce il metallo? Quanto \u00E8 trasparente il vetro? Come si comporta la superficie? Questi dettagli fanno la differenza tra un render che sembra finto e uno che sembra fotografato.</p>
<p><strong>Fase 2 \u2014 Modellazione e materiali.</strong> Costruisco il modello 3D in 3ds Max partendo dai disegni tecnici originali. I materiali sono fisicamente accurati \u2014 non basta che \u201Csembrino\u201D metallo, devono reagire alla luce come il metallo vero: riflessi, rifrazione, microimperfezioni superficiali. Per i gioielli, ad esempio, i diamanti hanno bisogno di indici di rifrazione specifici perch\u00E9 la dispersione della luce sia credibile.</p>
<p><strong>Fase 3 \u2014 Ambiente e illuminazione.</strong> Qui si gioca la partita. L\u2019oggetto esiste in uno spazio \u2014 e quello spazio comunica il posizionamento del brand. Per un brand di lusso, costruisco ambienti con materiali nobili: marmo, acqua, luce naturale morbida. Per un prodotto tecnico, ambienti industriali con luci nette e contrasti forti. L\u2019illuminazione \u00E8 cinematografica: key light, fill, rim \u2014 esattamente come su un set reale.</p>
<p><strong>Fase 4 \u2014 Animazione e camera.</strong> I movimenti di camera guidano lo sguardo: dal panorama generale al dettaglio del prodotto. Ogni movimento ha un ritmo preciso. La camera non si muove a caso \u2014 rivela progressivamente, crea aspettativa, porta l\u2019occhio dove deve andare.</p>
<p><strong>Fase 5 \u2014 Render e color grading.</strong> Il render produce i frame grezzi. Il <a href="/post-produzione" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">color grading in DaVinci Resolve</a> li trasforma nel look finale: contrasto, tonalit\u00E0, atmosfera. \u00C8 la stessa fase finale che applico ai film \u2014 e fa la stessa differenza.</p>

<h2>Due esempi concreti dal mio portfolio</h2>
<p><strong>JOR \u2014 Collezione Liaison.</strong> Per questo brand di gioielli ho costruito un intero mondo onirico in Unreal Engine 5: il Colosseo, statue classiche, superfici d\u2019acqua riflettente. I gioielli sono i protagonisti \u2014 la camera li attraversa, ci gira attorno, li rivela tra colonne e archi. Ogni anello con diamanti ha materiali fisicamente accurati: la luce si disperde attraverso le pietre esattamente come nella realt\u00E0. Il risultato non \u00E8 un catalogo: \u00E8 un viaggio. <a href="/portfolio/jor" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">Guarda il caso studio completo</a>.</p>
<p><strong>Guerciotti 60 Anni.</strong> Per i sessant\u2019anni di Guerciotti ho animato il telaio in carbonio della bicicletta da corsa: un oggetto tecnico che doveva comunicare precisione ingegneristica e passione artigianale insieme. La camera esplora ogni dettaglio costruttivo \u2014 le fibre di carbonio, le saldature, le geometrie \u2014 in un ambiente scuro e cinematografico che esalta le forme. <a href="/portfolio/guerciotti-60-anni" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">Guarda il caso studio completo</a>.</p>

<h2>Perch\u00E9 il 3D e non una foto?</h2>
<p>La domanda \u00E8 legittima. Un fotografo bravo pu\u00F2 fare foto prodotto straordinarie. Ma l\u2019animazione 3D offre cose che la fotografia non pu\u00F2:</p>
<p><strong>Movimenti impossibili.</strong> La camera pu\u00F2 attraversare l\u2019oggetto, entrarci dentro, orbitargli attorno a velocit\u00E0 controllata. Non ci sono limiti fisici.</p>
<p><strong>Ambienti su misura.</strong> Vuoi il tuo prodotto in un palazzo del Rinascimento? In orbita? Sott\u2019acqua? Nel 3D l\u2019ambiente si costruisce esattamente come serve il racconto.</p>
<p><strong>Controllo totale sull\u2019illuminazione.</strong> Ogni luce \u00E8 posizionabile al millimetro. Ogni riflesso \u00E8 controllabile. Nessun compromesso con la luce ambiente o i limiti dello studio.</p>
<p><strong>Versioni e varianti.</strong> Colore diverso? Materiale diverso? Ambientazione diversa? Si cambia il parametro e si rilancia il render. Non si riorganizza un set fotografico.</p>

<h2>Cosa serve per partire</h2>
<p>Se stai valutando un\u2019animazione 3D per il tuo prodotto, ecco cosa mi \u00E8 utile per darti un preventivo accurato:</p>
<p>Disegni tecnici o file CAD dell\u2019oggetto (se disponibili), foto di riferimento del prodotto reale, un\u2019idea del tono che vuoi comunicare (lusso, tecnico, giocoso, istituzionale), la destinazione del video (social, sito web, fiera, spot TV) e la durata indicativa.</p>
<p>Da l\u00EC costruisco una proposta con storyboard, tempistiche e costi. Il mio approccio \u00E8 diretto: un unico referente che gestisce modellazione, animazione, illuminazione e color grading in un <a href="/animazione-3d" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">workflow integrato</a>. Meno passaggi, pi\u00F9 coerenza, tempi pi\u00F9 rapidi.</p>`,

        contentEn: `<h2>The object as protagonist</h2>
<p>When a brand asks me for a 3D product video, the first thing I say is: we\u2019re not making a catalogue. A 3D animated object must tell a story \u2014 it needs an environment, lighting, movement that communicates something beyond its technical specifications.</p>
<p>The difference between a product render and a <a href="/en/3d-animation" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">cinematic 3D animation</a> is the same as between a product photo on white background and an advertising campaign: both show the same object, but one presents it, the other makes you want it.</p>

<h2>The process: from technical drawing to built world</h2>
<p>Every project follows a precise flow I\u2019ve refined over years of work.</p>
<p><strong>Phase 1 \u2014 Studying the object.</strong> I receive technical drawings, reference photos, physical samples when possible. I study the materials: how does the metal reflect light? How transparent is the glass? How does the surface behave? These details make the difference between a render that looks fake and one that looks photographed.</p>
<p><strong>Phase 2 \u2014 Modeling and materials.</strong> I build the 3D model in 3ds Max from original technical drawings. Materials are physically accurate \u2014 it\u2019s not enough that they \u201Clook like\u201D metal, they must react to light like real metal: reflections, refraction, surface micro-imperfections. For jewelry, diamonds need specific refraction indices for believable light dispersion.</p>
<p><strong>Phase 3 \u2014 Environment and lighting.</strong> This is where the game is played. The object exists in a space \u2014 and that space communicates the brand\u2019s positioning. For a luxury brand, I build environments with noble materials: marble, water, soft natural light. For a technical product, industrial environments with sharp lights and strong contrasts. Lighting is cinematic: key light, fill, rim \u2014 exactly like on a real set.</p>
<p><strong>Phase 4 \u2014 Animation and camera.</strong> Camera movements guide the eye: from overview to product detail. Every movement has a precise rhythm. The camera doesn\u2019t move randomly \u2014 it reveals progressively, builds anticipation, leads the eye where it needs to go.</p>
<p><strong>Phase 5 \u2014 Render and color grading.</strong> Rendering produces raw frames. <a href="/en/post-production" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">Color grading in DaVinci Resolve</a> transforms them into the final look: contrast, tonality, atmosphere. It\u2019s the same final phase I apply to films \u2014 and it makes the same difference.</p>

<h2>Two concrete examples from my portfolio</h2>
<p><strong>JOR \u2014 Liaison Collection.</strong> For this jewelry brand I built an entire dreamlike world in Unreal Engine 5: the Colosseum, classical statues, reflective water surfaces. The jewels are the protagonists \u2014 the camera passes through them, orbits around them, reveals them between columns and arches. Every diamond ring has physically accurate materials: light disperses through the stones exactly as in reality. The result isn\u2019t a catalogue: it\u2019s a journey. <a href="/en/portfolio/jor" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">See the full case study</a>.</p>
<p><strong>Guerciotti 60 Years.</strong> For Guerciotti\u2019s sixtieth anniversary I animated the carbon fiber racing bicycle frame: a technical object that needed to communicate engineering precision and artisanal passion together. The camera explores every constructive detail \u2014 carbon fibers, welds, geometries \u2014 in a dark, cinematic environment that enhances the forms. <a href="/en/portfolio/guerciotti-60-anni" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">See the full case study</a>.</p>

<h2>Why 3D and not a photo?</h2>
<p>It\u2019s a fair question. A skilled photographer can take extraordinary product photos. But 3D animation offers things photography cannot:</p>
<p><strong>Impossible movements.</strong> The camera can pass through the object, enter inside it, orbit at controlled speed. No physical limits.</p>
<p><strong>Custom environments.</strong> Want your product in a Renaissance palace? In orbit? Underwater? In 3D, the environment is built exactly as the story requires.</p>
<p><strong>Total lighting control.</strong> Every light is positionable to the millimeter. Every reflection is controllable. No compromises with ambient light or studio limitations.</p>
<p><strong>Versions and variants.</strong> Different color? Different material? Different setting? Change the parameter and relaunch the render. No reorganizing a photo set.</p>

<h2>What you need to get started</h2>
<p>If you\u2019re considering a 3D animation for your product, here\u2019s what I need for an accurate quote:</p>
<p>Technical drawings or CAD files of the object (if available), reference photos of the actual product, an idea of the tone you want to communicate (luxury, technical, playful, institutional), the video\u2019s destination (social, website, trade fair, TV spot) and approximate duration.</p>
<p>From there I build a proposal with storyboard, timeline and costs. My approach is direct: a single point of contact managing modeling, animation, lighting and color grading in an <a href="/en/3d-animation" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">integrated workflow</a>. Fewer handoffs, more coherence, faster turnaround.</p>`,
    },
    {
        slug: 'motion-graphics-spot-istituzionali-tratto-continuo-2d',
        slugEn: 'motion-graphics-institutional-spots-line-animation-2d',
        titleIt: 'Motion graphics per spot istituzionali: dal tratto continuo all\u2019animazione 2.5D',
        titleEn: 'Motion graphics for institutional spots: from line animation to 2.5D',
        excerptIt: 'Come trasformo temi complessi in racconti visivi chiari e coinvolgenti. Due approcci diversi \u2014 tratto continuo e animazione 2.5D \u2014 per due clienti istituzionali.',
        excerptEn: 'How I transform complex topics into clear, engaging visual stories. Two different approaches \u2014 continuous line and 2.5D animation \u2014 for two institutional clients.',
        date: '2026-03-15',
        readingTime: 7,
        category: 'motion',
        categoryLabel: { it: 'Motion Graphics', en: 'Motion Graphics' },
        keywordTarget: 'motion graphics spot istituzionale',
        thumbnail: '/images/portfolio/pmi-abbiamo-cura-di-te-animazione.webp',
        thumbnailAlt: { it: 'Motion graphics PMI \u2014 animazione tratto continuo', en: 'PMI motion graphics \u2014 continuous line animation' },
        contentIt: `<h2>Il problema di sempre: rendere interessante ci\u00F2 che \u00E8 complesso</h2>
<p>Bonus fiscali, welfare aziendale, procedure burocratiche. Ogni azienda e istituzione ha messaggi importanti da comunicare che per\u00F2 \u2014 diciamolo \u2014 non sono esattamente avvincenti. Il testo scritto non basta, il video parlato annoia. La <a href="/motion-graphics" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">motion graphics</a> risolve questo problema: trasforma concetti astratti in immagini che si seguono con piacere.</p>
<p>In questo articolo racconto due progetti dove ho affrontato la stessa sfida \u2014 comunicare un tema istituzionale \u2014 con due approcci visivi completamente diversi.</p>

<h2>PMI \u2014 Il tratto continuo che non si interrompe mai</h2>
<p>PMI mi ha chiesto un video per raccontare la propria missione: \u201CAbbiamo cura di te\u201D. Il messaggio parla di attenzione, di cura, di un percorso che accompagna la persona. Serviva uno stile visivo che incarnasse questi valori.</p>
<p><strong>La scelta: un unico tratto continuo per due minuti.</strong> Zero tagli, zero stacchi. Una linea che si trasforma continuamente \u2014 diventa un profilo, poi delle mani, poi un albero, poi una famiglia \u2014 guidando lo spettatore in un flusso ininterrotto. \u00C8 la traduzione visiva della cura: qualcosa che non si interrompe, che accompagna dall\u2019inizio alla fine.</p>
<p>La sfida tecnica era seria. Ogni transizione doveva essere naturale \u2014 ogni elemento doveva nascere dal precedente senza forzature. Ho progettato l\u2019intero storyboard come un\u2019unica linea narrativa, poi animato in After Effects frame per frame le transizioni critiche. Tocchi di acquerello aggiungono emozione senza interrompere il flusso della linea.</p>
<p>Il risultato \u00E8 un video ipnotico dove il messaggio arriva senza fatica. <a href="/portfolio/pmi" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">Guarda il caso studio completo</a>.</p>

<h2>Acea Acqua \u2014 La mascotte 2.5D che guida il racconto</h2>
<p>Acea Acqua doveva comunicare il Bonus Idrico \u2014 un tema burocratico per definizione. La sfida: mantenere la seriet\u00E0 istituzionale di Acea rendendo il contenuto accessibile e perfino simpatico.</p>
<p><strong>La scelta: animazione 2.5D con una goccia d\u2019acqua come mascotte.</strong> Il 2.5D \u00E8 una tecnica che d\u00E0 alle illustrazioni 2D le sembianze del 3D attraverso profondit\u00E0, ombre e movimenti su pi\u00F9 piani. La goccia ha personalit\u00E0 ed espressivit\u00E0 \u2014 strizza l\u2019occhio, gesticola, guida lo spettatore attraverso i passaggi del bonus con transizioni fluide e tipografia animata.</p>
<p>Lo stile grafico \u00E8 pulito e in linea con il brand Acea: palette azzurra, illustrazioni flat con quel tocco di volume dato dal 2.5D, animazione morbida. Il risultato \u00E8 uno spot dove un tema complesso diventa semplice da capire. <a href="/portfolio/bonus-idrico-acea" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">Guarda il caso studio completo</a>.</p>

<h2>Due approcci, una filosofia</h2>
<p>PMI e Acea sono progetti molto diversi nello stile, ma condividono lo stesso principio: <strong>il linguaggio visivo deve servire il messaggio, non decorarlo.</strong></p>
<p>Per PMI il tratto continuo non \u00E8 un vezzo grafico \u2014 \u00E8 la traduzione visiva della continuit\u00E0 della cura. Per Acea la mascotte 2.5D non \u00E8 un\u2019aggiunta carina \u2014 \u00E8 lo strumento che rende umano un tema burocratico. In entrambi i casi, lo stile nasce dal brief, non da una scelta estetica a priori.</p>

<h2>Quando la motion graphics \u00E8 la scelta giusta</h2>
<p>La motion graphics istituzionale funziona quando il contenuto \u00E8 concettuale piuttosto che visivo. Se devi mostrare un prodotto fisico, probabilmente ti serve un video girato o un\u2019<a href="/animazione-3d" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">animazione 3D</a>. Ma se devi spiegare un processo, raccontare valori, comunicare dati o procedure \u2014 la motion graphics trasforma l\u2019astratto in concreto.</p>
<p>I vantaggi rispetto al video girato per questo tipo di comunicazione: nessun set, nessun cast, nessun vincolo meteo. Modifiche e aggiornamenti sono semplici. Il messaggio arriva anche senza audio (fondamentale per i social). E soprattutto: il livello di controllo su ogni frame \u00E8 totale.</p>

<h2>Il mio processo per spot istituzionali</h2>
<p>Ogni progetto inizia con una domanda: qual \u00E8 la singola cosa che lo spettatore deve capire alla fine del video? Da l\u00EC costruisco il racconto a ritroso.</p>
<p>Lo storyboard viene prima di tutto. Non parto mai dall\u2019animazione \u2014 parto dalla struttura narrativa. Poi definisco lo stile: illustrativo, geometrico, tipografico, misto? Dipende dal brand, dal target, dal canale di distribuzione. Solo dopo passo all\u2019animazione vera e propria in After Effects, dove il ritmo e il timing fanno la differenza tra un video che si guarda e uno che si subisce.</p>
<p>La <a href="/post-produzione" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">post-produzione</a> finale \u2014 color, sound design, export ottimizzato per ogni piattaforma \u2014 chiude il ciclo in un <a href="/motion-graphics" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">workflow integrato</a> dove tutto passa per le stesse mani.</p>`,

        contentEn: `<h2>The eternal problem: making complex things interesting</h2>
<p>Tax bonuses, corporate welfare, bureaucratic procedures. Every company and institution has important messages to communicate that \u2014 let\u2019s be honest \u2014 aren\u2019t exactly thrilling. Written text isn\u2019t enough, talking-head videos bore people. <a href="/en/motion-graphics" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">Motion graphics</a> solves this problem: it transforms abstract concepts into images people actually enjoy watching.</p>
<p>In this article I share two projects where I faced the same challenge \u2014 communicating an institutional topic \u2014 with two completely different visual approaches.</p>

<h2>PMI \u2014 The continuous line that never breaks</h2>
<p>PMI asked me for a video to tell their mission: \u201CWe take care of you.\u201D The message speaks of attention, care, a journey that accompanies the person. I needed a visual style that embodied these values.</p>
<p><strong>The choice: a single continuous line for two minutes.</strong> Zero cuts, zero breaks. A line that continuously transforms \u2014 becomes a profile, then hands, then a tree, then a family \u2014 guiding the viewer in an uninterrupted flow. It\u2019s the visual translation of care: something that doesn\u2019t stop, that accompanies from beginning to end.</p>
<p>The technical challenge was serious. Every transition had to feel natural \u2014 every element had to be born from the previous one without forcing. I designed the entire storyboard as a single narrative line, then animated the critical transitions frame by frame in After Effects. Watercolor touches add emotion without breaking the line\u2019s flow.</p>
<p>The result is a hypnotic video where the message arrives effortlessly. <a href="/en/portfolio/pmi" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">See the full case study</a>.</p>

<h2>Acea Acqua \u2014 The 2.5D mascot that guides the story</h2>
<p>Acea Acqua needed to communicate the Water Bonus \u2014 a bureaucratic topic by definition. The challenge: maintain Acea\u2019s institutional seriousness while making the content accessible and even likeable.</p>
<p><strong>The choice: 2.5D animation with a water drop as mascot.</strong> 2.5D is a technique that gives 2D illustrations a 3D appearance through depth, shadows and multi-plane movements. The drop has personality and expressiveness \u2014 it winks, gestures, guides the viewer through the bonus steps with fluid transitions and animated typography.</p>
<p>The graphic style is clean and aligned with the Acea brand: blue palette, flat illustrations with that touch of volume from 2.5D, smooth animation. The result is a spot where a complex topic becomes simple to understand. <a href="/en/portfolio/bonus-idrico-acea" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">See the full case study</a>.</p>

<h2>Two approaches, one philosophy</h2>
<p>PMI and Acea are very different projects in style, but share the same principle: <strong>the visual language must serve the message, not decorate it.</strong></p>
<p>For PMI, the continuous line isn\u2019t a graphic whim \u2014 it\u2019s the visual translation of continuity of care. For Acea, the 2.5D mascot isn\u2019t a cute addition \u2014 it\u2019s the tool that makes a bureaucratic topic human. In both cases, the style is born from the brief, not from an a priori aesthetic choice.</p>

<h2>When motion graphics is the right choice</h2>
<p>Institutional motion graphics works when the content is conceptual rather than visual. If you need to show a physical product, you probably need filmed video or <a href="/en/3d-animation" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">3D animation</a>. But if you need to explain a process, tell values, communicate data or procedures \u2014 motion graphics transforms the abstract into concrete.</p>
<p>Advantages over filmed video for this type of communication: no set, no cast, no weather constraints. Changes and updates are simple. The message arrives even without sound (essential for social media). And above all: control over every frame is total.</p>

<h2>My process for institutional spots</h2>
<p>Every project starts with a question: what is the single thing the viewer must understand at the end of the video? From there I build the story backwards.</p>
<p>Storyboard comes first. I never start from animation \u2014 I start from narrative structure. Then I define the style: illustrative, geometric, typographic, mixed? It depends on the brand, the target, the distribution channel. Only then do I move to actual animation in After Effects, where rhythm and timing make the difference between a video you watch and one you endure.</p>
<p>Final <a href="/en/post-production" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">post-production</a> \u2014 color, sound design, optimized export for each platform \u2014 closes the cycle in an <a href="/en/motion-graphics" class="text-accent underline underline-offset-2 hover:text-text-primary transition-colors">integrated workflow</a> where everything passes through the same hands.</p>`,
    },
];

/**
 * Returns posts that are not drafts.
 * Date filtering is intentionally NOT applied at build time for SSG —
 * all non-draft posts are included in the static build.
 * When moving to ISR or server rendering, add: && p.date <= now
 */
export function getPublishedPosts(): BlogPost[] {
    return posts.filter((p) => !p.draft);
}

export function getPost(slug: string): BlogPost | undefined {
    return posts.find((p) => p.slug === slug || p.slugEn === slug);
}

export function getPostSlug(post: BlogPost, locale: string): string {
    return locale === 'en' ? post.slugEn : post.slug;
}