export type ProjectCategory = 'vfx' | 'motion' | 'animation' | 'post' | 'ai';

export interface Project {
    slug: string;
    titleIt: string;
    titleEn: string;
    category: ProjectCategory;
    categoryLabel: { it: string; en: string };
    client: string;
    year: string;
    role: string;
    thumbnail: string;
    thumbnailAlt: { it: string; en: string };
    heroImage: string;
    images: { src: string; alt: { it: string; en: string } }[];
    tools: string[];
    // Case study content
    briefingIt: string;
    briefingEn: string;
    challengeIt: string;
    challengeEn: string;
    solutionIt: string;
    solutionEn: string;
    resultIt: string;
    resultEn: string;
    // Video
    videoEmbed?: string; // YouTube or Vimeo embed ID
    videoType?: 'youtube' | 'vimeo' | 'mp4';
    videoUrl?: string; // Direct mp4 URL if not embed
    // External links
    imdbLink?: string;
}

export const projects: Project[] = [
    {
        slug: 'along-came-ruby',
        titleIt: 'Along Came Ruby',
        titleEn: 'Along Came Ruby',
        category: 'vfx',
        categoryLabel: { it: 'VFX', en: 'VFX' },
        client: 'Riccardo Suriano (regista)',
        year: '2024',
        role: 'VFX Artist',
        thumbnail: '/images/portfolio/vfx-cortometraggio-along-came-ruby-thumb.webp',
        thumbnailAlt: { it: 'VFX per il cortometraggio Along Came Ruby', en: 'VFX for Along Came Ruby short film' },
        heroImage: '/images/portfolio/vfx-effetti-visivi-along-came-ruby-hero.webp',
        images: [
            { src: '/images/portfolio/vfx-effetto-spazio-temporale-along-came-ruby.webp', alt: { it: 'Effetto spazio-temporale Along Came Ruby', en: 'Space-time effect Along Came Ruby' } },
            { src: '/images/portfolio/compositing-vfx-cortometraggio-along-came-ruby.webp', alt: { it: 'Compositing VFX Along Came Ruby', en: 'VFX compositing Along Came Ruby' } },
        ],
        tools: ['After Effects', 'Mocha Pro', '3ds Max', 'DaVinci Resolve'],
        briefingIt: 'Un cortometraggio drammatico/sci-fi diretto da Riccardo Suriano, con Alexandra Boulas e Liz Kastner. In un mondo post-apocalittico, Ruby intraprende un viaggio alla ricerca del fratello Henry, incontrando una donna enigmatica che custodisce segreti del passato.',
        briefingEn: 'A drama/sci-fi short film directed by Riccardo Suriano, starring Alexandra Boulas and Liz Kastner. In a post-apocalyptic world, Ruby embarks on a journey to find her brother Henry, encountering an enigmatic woman who holds secrets of the past.',
        challengeIt: 'La sfida principale era creare l&apos;effetto visivo che illustra la comunicazione tra presente e futuro attraverso lo spazio-tempo. Questo elemento narrativo chiave doveva essere credibile, emotivamente potente e integrato perfettamente con le riprese live in ambienti naturali.',
        challengeEn: 'The main challenge was creating the visual effect illustrating communication between present and future through space-time. This key narrative element needed to be credible, emotionally powerful and seamlessly integrated with live footage in natural environments.',
        solutionIt: 'Ho sviluppato un sistema di particelle e distorsioni luminose che evocano il passaggio dimensionale, combinando <a href="/vfx">compositing multilayer</a> con elementi 3D. Ogni shot è stata lavorata frame-by-frame per garantire un&apos;integrazione fotorealistica con l&apos;atmosfera distopica del film.',
        solutionEn: 'I developed a system of particles and light distortions evoking dimensional passage, combining multilayer <a href="/en/vfx">compositing</a> with 3D elements. Every shot was worked frame-by-frame to ensure photorealistic integration with the film&apos;s dystopian atmosphere.',
        resultIt: 'Gli effetti visivi hanno dato vita alla visione del regista, trasformando location reali in un mondo post-apocalittico credibile. Il cortometraggio ha completato la post-produzione ed è in fase di distribuzione festival.',
        resultEn: 'The visual effects brought the director&apos;s vision to life, transforming real locations into a credible post-apocalyptic world. The short film has completed post-production and is in festival distribution.',
        imdbLink: 'https://pro.imdb.com/title/tt28106482/',
    },
    {
        slug: 'guerciotti-60-anni',
        titleIt: 'Guerciotti 60 Anni',
        titleEn: 'Guerciotti 60 Years',
        category: 'animation',
        categoryLabel: { it: 'Animazione 3D', en: '3D Animation' },
        client: 'Guerciotti',
        year: '2024',
        role: '3D Animator / VFX',
        thumbnail: '/images/portfolio/animazione-3d-guerciotti-60-anni-thumb.jpg',
        thumbnailAlt: { it: 'Animazione 3D per Guerciotti 60 anni', en: '3D animation for Guerciotti 60 years' },
        heroImage: '/images/portfolio/video-prodotto-3d-guerciotti-telaio-carbonio.jpg',
        images: [
            { src: '/images/portfolio/animazione-3d-spline-telaio-guerciotti-dettaglio.jpg', alt: { it: 'Spline 3D del telaio Guerciotti', en: '3D spline of Guerciotti frame' } },
            { src: '/images/portfolio/product-visualization-3d-guerciotti-render-finale.webp', alt: { it: 'Product visualization 3D Guerciotti', en: '3D product visualization Guerciotti' } },
        ],
        tools: ['3ds Max', 'tyFlow', 'Unreal Engine 5', 'DaVinci Resolve'],
        briefingIt: 'In collaborazione con Guerciotti, ho realizzato il video di lancio del loro innovativo telaio in carbonio, creato per celebrare il 60&deg; anniversario del brand.',
        briefingEn: 'In collaboration with Guerciotti, I created the launch video for their innovative carbon frame, designed to celebrate the brand&apos;s 60th anniversary.',
        challengeIt: 'Dare vita, attraverso l&apos;animazione 3D, a un telaio di alta gamma, esaltandone l&apos;eleganza e la precisione tecnica. La sfida era raccontare sia l&apos;artigianalità del processo produttivo che la tecnologia del prodotto finito.',
        challengeEn: 'Bringing a high-end frame to life through 3D animation, highlighting its elegance and technical precision. The challenge was telling the story of both the craftsmanship of the production process and the technology of the finished product.',
        solutionIt: 'Ho realizzato questa <a href="/animazione-3d">animazione 3D di prodotto</a> modellando il telaio in 3ds Max partendo dai disegni tecnici originali. Le spline del telaio sono state animate come se si costruissero davanti agli occhi dello spettatore, con simulazioni di fiamme e particelle create con tyFlow che richiamano il processo di saldatura artigianale. Dal visualizzare le materie prime fino a presentare il prodotto finito.',
        solutionEn: 'I created this <a href="/en/animazione-3d">3D product animation</a> by modeling the frame in 3ds Max from original technical drawings. The frame splines were animated as if building before the viewer&apos;s eyes, with flame and particle simulations created with tyFlow evoking the artisanal welding process. From visualizing raw materials to presenting the finished product.',
        resultIt: 'Un video che unisce precisione tecnica e racconto emotivo — esattamente quello che serve a un brand che vuole comunicare il proprio DNA. Il risultato è stato un&apos;esperienza al tempo stesso impegnativa e profondamente gratificante.',
        resultEn: 'A video that combines technical precision and emotional storytelling — exactly what a brand needs to communicate its DNA. The result was both challenging and deeply rewarding.',
    },
    {
        slug: 'ipotesi-metaverso',
        titleIt: 'Ipotesi Metaverso',
        titleEn: 'Ipotesi Metaverso',
        category: 'motion',
        categoryLabel: { it: 'Motion Graphics', en: 'Motion Graphics' },
        client: 'Mostra d&apos;arte, Roma',
        year: '2024',
        role: 'Motion Designer / VFX',
        thumbnail: '/images/portfolio/motion-graphics-mostra-ipotesi-metaverso-thumb.webp',
        thumbnailAlt: { it: 'Motion graphics per la mostra Ipotesi Metaverso', en: 'Motion graphics for the Ipotesi Metaverso exhibition' },
        heroImage: '/images/portfolio/animazione-particellare-mostra-arte-roma.webp',
        images: [
            { src: '/images/portfolio/ambiente-particellare-immersivo-ipotesi-metaverso.webp', alt: { it: 'Ambiente particellare immersivo', en: 'Immersive particle environment' } },
            { src: '/images/portfolio/motion-graphics-cerchio-luminoso-ipotesi-metaverso.webp', alt: { it: 'Cerchio luminoso Ipotesi Metaverso', en: 'Light circle Ipotesi Metaverso' } },
        ],
        tools: ['After Effects', '3ds Max', 'DaVinci Resolve'],
        briefingIt: 'Creazione di contenuti visivi immersivi per la mostra d&apos;arte "Ipotesi Metaverso" a Roma — animazioni particellari e ambienti digitali proiettati nello spazio espositivo.',
        briefingEn: 'Creation of immersive visual content for the "Ipotesi Metaverso" art exhibition in Rome — particle animations and digital environments projected in the exhibition space.',
        challengeIt: 'Creare ambienti particellari che funzionassero sia come opere autonome che come sfondo immersivo per la mostra. Le animazioni dovevano essere loop continui di lunga durata, visivamente ipnotici e tecnicamente impeccabili su schermi di grande formato.',
        challengeEn: 'Creating particle environments that worked both as standalone works and as immersive backdrop for the exhibition. Animations needed to be long-duration continuous loops, visually hypnotic and technically flawless on large-format screens.',
        solutionIt: 'Ho applicato le mie competenze di <a href="/motion-graphics">motion graphics</a> progettando sistemi particellari complessi che simulano flussi di energia, vortici luminosi e strutture organiche in costante trasformazione. Ogni animazione è stata ottimizzata per la proiezione su larga scala, con particolare attenzione alla fluidità e alla resa cromatica.',
        solutionEn: 'I applied my <a href="/en/motion-graphics">motion graphics</a> expertise designing complex particle systems simulating energy flows, light vortexes and organic structures in constant transformation. Each animation was optimized for large-scale projection, with particular attention to fluidity and color rendering.',
        resultIt: 'Le animazioni hanno trasformato lo spazio espositivo in un ambiente immersivo che ha coinvolto i visitatori. Il progetto ha dimostrato come le motion graphics possano uscire dallo schermo e diventare esperienza fisica.',
        resultEn: 'The animations transformed the exhibition space into an immersive environment that engaged visitors. The project demonstrated how motion graphics can leave the screen and become a physical experience.',
    },
    {
        slug: 'radio-caterina',
        titleIt: 'Radio Caterina',
        titleEn: 'Radio Caterina',
        category: 'post',
        categoryLabel: { it: 'Post Produzione', en: 'Post Production' },
        client: 'History Channel / David Orlandelli',
        year: '2024',
        role: 'Montaggio, Color, Animazioni',
        thumbnail: '/images/portfolio/post-produzione-documentario-radio-caterina-history-channel.jpg',
        thumbnailAlt: { it: 'Post-produzione per Radio Caterina - History Channel', en: 'Post-production for Radio Caterina - History Channel' },
        heroImage: '/images/portfolio/montaggio-color-grading-documentario-history-channel.jpg',
        images: [],
        tools: ['DaVinci Resolve', 'After Effects', 'Premiere Pro'],
        briefingIt: 'Documentario per History Channel diretto da David Orlandelli. Il progetto richiedeva montaggio, color grading e animazioni grafiche per raccontare una storia legata alla radio e alla memoria storica italiana.',
        briefingEn: 'Documentary for History Channel directed by David Orlandelli. The project required editing, color grading and graphic animations to tell a story about radio and Italian historical memory.',
        challengeIt: 'Gestire l&apos;intero flusso di post-produzione di un documentario broadcast: montaggio narrativo da materiale eterogeneo (interviste, archivio, footage originale), color grading coerente su fonti diverse e animazioni grafiche che supportassero la narrazione.',
        challengeEn: 'Managing the entire post-production pipeline for a broadcast documentary: narrative editing from heterogeneous material (interviews, archive, original footage), coherent color grading across diverse sources and graphic animations supporting the narrative.',
        solutionIt: '<a href="/post-produzione">Workflow integrato</a> montaggio-color-grafica in DaVinci Resolve, con passaggi in After Effects per le animazioni più complesse. Il vantaggio di gestire tutto in un unico flusso ha permesso iterazioni rapide con la produzione e coerenza stilistica su tutto il documentario.',
        solutionEn: '<a href="/en/post-produzione">Integrated editing-color-graphics workflow</a> in DaVinci Resolve, with After Effects passes for more complex animations. The advantage of managing everything in a single pipeline allowed rapid iterations with production and stylistic coherence across the documentary.',
        resultIt: 'Documentario completato nei tempi richiesti e trasmesso su History Channel. Il workflow integrato ha permesso di ottimizzare i tempi di post-produzione mantenendo la qualità broadcast richiesta.',
        resultEn: 'Documentary completed on schedule and broadcast on History Channel. The integrated workflow optimized post-production timelines while maintaining required broadcast quality.',
        imdbLink: 'https://www.imdb.com/it/title/tt29257837/',
    },
    {
        slug: 'breaking-olimpiadi',
        titleIt: 'Breaking: dalla strada alle olimpiadi',
        titleEn: 'Breaking: from the street to the Olympics',
        category: 'post',
        categoryLabel: { it: 'Post Produzione', en: 'Post Production' },
        client: 'RaiPlay / Fabrizio Silvestri',
        year: '2024',
        role: 'Montaggio e Color',
        thumbnail: '/images/portfolio/post-produzione-documentario-breaking-olimpiadi-raiplay.jpg',
        thumbnailAlt: { it: 'Post-produzione per Breaking - RaiPlay documentario', en: 'Post-production for Breaking - RaiPlay documentary' },
        heroImage: '/images/portfolio/montaggio-color-documentario-breaking-rai-documentari.jpg',
        images: [],
        tools: ['DaVinci Resolve', 'Premiere Pro'],
        briefingIt: 'Documentario per RAI Documentari / RaiPlay diretto da Fabrizio Silvestri, sulla cultura del breaking dalle origini di strada fino all&apos;ingresso alle Olimpiadi.',
        briefingEn: 'Documentary for RAI Documentari / RaiPlay directed by Fabrizio Silvestri, about breaking culture from street origins to Olympic inclusion.',
        challengeIt: 'Raccontare un viaggio dalla strada alla competizione olimpica mantenendo l&apos;energia e il ritmo della cultura breaking. Il materiale comprendeva footage di gare, interviste, archivio storico e riprese originali — fonti visivamente molto diverse da armonizzare.',
        challengeEn: 'Telling a journey from street to Olympic competition while maintaining the energy and rhythm of breaking culture. Material included competition footage, interviews, historical archive and original shoots — visually diverse sources to harmonize.',
        solutionIt: 'Montaggio narrativo ritmico che segue l&apos;energia della danza, con un color grading che distingue le epoche (archivio vs contemporaneo) mantenendo coerenza emotiva. Il <a href="/post-produzione">workflow integrato</a> ha permesso di sincronizzare ritmo del montaggio e look cromatico in tempo reale.',
        solutionEn: 'Rhythmic narrative editing following the energy of dance, with color grading distinguishing eras (archive vs contemporary) while maintaining emotional coherence. The <a href="/en/post-produzione">integrated workflow</a> allowed synchronizing editing rhythm and chromatic look in real time.',
        resultIt: 'Documentario disponibile su RaiPlay. Il progetto ha dimostrato come il workflow integrato montaggio-color sia particolarmente efficace per documentari con materiale eterogeneo e ritmo narrativo complesso.',
        resultEn: 'Documentary available on RaiPlay. The project demonstrated how the integrated editing-color workflow is particularly effective for documentaries with heterogeneous material and complex narrative rhythm.',
    },
    {
        slug: 'doppelganger',
        titleIt: 'Doppelganger',
        titleEn: 'Doppelganger',
        category: 'motion',
        categoryLabel: { it: 'Motion Graphics', en: 'Motion Graphics' },
        client: 'Progetto artistico',
        year: '2023',
        role: 'Motion Designer / 3D',
        thumbnail: '/images/portfolio/motion-design-ibrido-2d-3d-doppelganger.jpg',
        thumbnailAlt: { it: 'Motion design ibrido 2D/3D Doppelganger', en: 'Hybrid 2D/3D motion design Doppelganger' },
        heroImage: '/images/portfolio/motion-graphics-doppelganger-progetto-artistico.jpg',
        images: [],
        tools: ['After Effects', '3ds Max', 'Photoshop'],
        briefingIt: 'Progetto di motion design che esplora il tema del doppio e dell&apos;identità attraverso un approccio ibrido 2D/3D.',
        briefingEn: 'Motion design project exploring the theme of the double and identity through a hybrid 2D/3D approach.',
        challengeIt: 'Creare un pezzo visivamente distintivo che fondesse tecniche 2D e 3D in uno stile unico, comunicando il concetto di duplicità e alterità attraverso il puro linguaggio visivo.',
        challengeEn: 'Creating a visually distinctive piece blending 2D and 3D techniques into a unique style, communicating the concept of duality and otherness through pure visual language.',
        solutionIt: 'Ho sviluppato un approccio ibrido di <a href="/motion-graphics">motion design</a> che combina la fluidità dell&apos;animazione 2D con la profondità degli ambienti 3D. Layer sovrapposti, distorsioni e transizioni organiche creano un&apos;estetica stratificata e ricercata.',
        solutionEn: 'I developed a hybrid <a href="/en/motion-graphics">motion design</a> approach combining the fluidity of 2D animation with the depth of 3D environments. Overlapping layers, distortions and organic transitions create a layered, sophisticated aesthetic.',
        resultIt: 'Un pezzo che dimostra la versatilità del motion design ibrido — perfetto come esempio di ciò che è possibile quando si fondono tecniche diverse al servizio di un concetto creativo forte.',
        resultEn: 'A piece demonstrating the versatility of hybrid motion design — perfect as an example of what is possible when different techniques are blended in service of a strong creative concept.',
    },
];

export const categories = [
    { key: 'all', labelIt: 'Tutti', labelEn: 'All' },
    { key: 'vfx', labelIt: 'VFX', labelEn: 'VFX' },
    { key: 'motion', labelIt: 'Motion Graphics', labelEn: 'Motion Graphics' },
    { key: 'animation', labelIt: 'Animazione', labelEn: 'Animation' },
    { key: 'post', labelIt: 'Post Produzione', labelEn: 'Post Production' },
    { key: 'ai', labelIt: 'AI Video', labelEn: 'AI Video' },
] as const;

export function getProject(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}