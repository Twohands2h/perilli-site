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
  <p>Prima di toccare una node, parlo con il regista. A volte anche con il direttore della fotografia, se è disponibile. Questo è il passaggio più importante e il più sottovalutato.</p>
  <p><strong>Cosa chiedo:</strong> qual è il tono emotivo del film? Ci sono reference visive (altri film, fotografi, pittori)? Ci sono scene che devono distinguersi dal resto? Ci sono elementi specifici di fotografia da preservare o correggere?</p>
  <p>Da questa conversazione nasce un documento di reference condiviso — una raccolta di frame, screenshot da altri film, palette cromatiche. È la bussola per tutto il lavoro che segue.</p>
  
  <h2>Fase 2: Conform e preparazione timeline</h2>
  <p>Ricevo l'EDL o l'XML dal montaggio e faccio il conform in DaVinci. Verifico che tutti i file media siano collegati, che i metadata delle camere siano corretti (fondamentale per applicare le LUT di partenza giuste) e che la timeline corrisponda esattamente al montaggio approvato.</p>
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
  <p>Before touching a single node, I talk to the director. Sometimes with the DP too, if available. This is the most important and most undervalued step.</p>
  <p><strong>What I ask:</strong> what's the emotional tone of the film? Are there visual references (other films, photographers, painters)? Are there scenes that need to stand apart from the rest? Are there specific photography elements to preserve or correct?</p>
  <p>From this conversation comes a shared reference document — a collection of frames, screenshots from other films, color palettes. It's the compass for all the work that follows.</p>
  
  <h2>Phase 2: Conform and timeline preparation</h2>
  <p>I receive the EDL or XML from editing and conform in DaVinci. I verify all media files are linked, camera metadata is correct (essential for applying the right starting LUTs) and the timeline matches the approved edit exactly.</p>
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
        titleIt: 'Breakdown: gli effetti visivi di <a href="/portfolio/along-came-ruby">Along Came Ruby</a>',
        titleEn: 'Breakdown: the visual effects of <a href="/en/portfolio/along-came-ruby">Along Came Ruby</a>',
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
  <p><strong>Elementi 3D.</strong> Le distorsioni spazio-temporali sono state create in 3ds Max con sistemi particellari personalizzati. Volumi di luce, filamenti di energia, micro-particelle che seguono pattern organici. Ogni elemento è stato renderizzato su sfondo trasparente con canali di profondità e motion vector per il compositing.</p>
  <p><strong>Compositing.</strong> In After Effects ho stratificato gli elementi: la shot originale come base, le distorsioni 3D integrate con blending mode e maschere animate, correzione colore locale per far sì che la luce dell'effetto "rimbalzi" sugli oggetti della scena, e infine un passaggio di grana e aberrazione cromatica per sporcare leggermente l'effetto e renderlo fotografico.</p>
  
  <h2>La shot più difficile</h2>
  <p>C'è una sequenza dove Ruby è in primo piano e dietro di lei lo spazio si deforma. La camera è in movimento, lei si muove, l'ambiente è esterno con vento e vegetazione. Tutto si muove.</p>
  <p>Ho dovuto rotoscopare Ruby frame per frame per separare il primo piano dallo sfondo, poi applicare la distorsione solo allo sfondo mantenendo il primo piano intatto. Il tracking doveva essere perfetto perché qualsiasi errore sarebbe stato visibile immediatamente — il volto umano è la prima cosa che il nostro cervello controlla.</p>
  <p>Tempo su questa shot: circa un giorno e mezzo. Il risultato: nessuno nota l'effetto come "effetto" — vedono una scena dove qualcosa di strano sta succedendo all'aria dietro Ruby. Esattamente l'obiettivo.</p>
  
  <h2>Cosa ho imparato (ancora)</h2>
  <p><strong>Il meno è più.</strong> Le prime versioni dell'effetto erano troppo evidenti. Il regista ha avuto ragione a chiedere di tirare indietro — l'effetto funziona meglio quando è al limite della percezione, quando lo spettatore non è sicuro di cosa ha visto.</p>
  <p><strong>Il dialogo col regista è il vero strumento.</strong> Nessun software sostituisce una conversazione chiara su cosa l'effetto deve far sentire al pubblico. "Due dimensioni che si toccano" è una frase — ma è la frase giusta, e da lì è nato tutto il look.</p>
  <p><strong>Il workflow integrato fa la differenza.</strong> Avendo gestito anche il color grading del corto, ho potuto lavorare VFX e colore insieme fin dall'inizio. L'effetto spazio-temporale ha una sua palette cromatica che dialoga con il grading delle scene — non è un elemento incollato sopra, è parte del tessuto visivo del film. Se ti interessa, scopri i miei <a href="/vfx">servizi VFX</a> o il mio approccio alla <a href="/post-produzione">post-produzione integrata</a>.</p>`,

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
  <p><strong>3D elements.</strong> The space-time distortions were created in 3ds Max with custom particle systems. Light volumes, energy filaments, micro-particles following organic patterns. Each element was rendered on transparent background with depth channels and motion vectors for compositing.</p>
  <p><strong>Compositing.</strong> In After Effects I layered elements: the original shot as base, 3D distortions integrated with blending modes and animated masks, local color correction to make the effect's light "bounce" on scene objects, and finally a grain and chromatic aberration pass to slightly dirty the effect and make it photographic.</p>
  
  <h2>The hardest shot</h2>
  <p>There's a sequence where Ruby is in the foreground and behind her space deforms. The camera is moving, she's moving, the environment is exterior with wind and vegetation. Everything is moving.</p>
  <p>I had to rotoscope Ruby frame by frame to separate foreground from background, then apply distortion only to the background while keeping the foreground intact. Tracking had to be perfect because any error would be immediately visible — the human face is the first thing our brain checks.</p>
  <p>Time on this shot: about a day and a half. The result: nobody notices the effect as an "effect" — they see a scene where something strange is happening to the air behind Ruby. Exactly the goal.</p>
  
  <h2>What I learned (again)</h2>
  <p><strong>Less is more.</strong> The first versions of the effect were too obvious. The director was right to ask me to pull back — the effect works better when it's at the edge of perception, when the viewer isn't sure what they saw.</p>
  <p><strong>Dialogue with the director is the real tool.</strong> No software replaces a clear conversation about what the effect should make the audience feel. "Two dimensions touching" is a phrase — but it's the right phrase, and from there the entire look was born.</p>
  <p><strong>The integrated workflow makes the difference.</strong> Having also managed the color grading for the short, I could work VFX and color together from the start. The space-time effect has its own color palette that dialogues with the scene grading — it's not an element pasted on top, it's part of the film's visual fabric. If you're interested, read more about my <a href="/en/vfx">VFX services</a> or my approach to <a href="/en/post-production">integrated post-production</a>.</p>`,
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