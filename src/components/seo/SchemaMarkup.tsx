/**
 * Schema.org JSON-LD Markup Components
 *
 * PersonSchema + LocalBusinessSchema → layout.tsx (global, every page)
 * WebSiteSchema → page.tsx (homepage only)
 * ServiceSchema → service pages
 * VideoObjectSchema → portfolio projects with video
 * ArticleSchema → blog posts
 * BreadcrumbSchema → all pages except homepage
 * FAQSchema → service pages / FAQ-rich content
 * SpeakableSchema → voice assistants + AI answer engines
 */

// Shared entity IDs so Google can link Person ↔ Business as the same real-world entity
const PERSON_ID = 'https://pieroperilli.com/#person';
const BUSINESS_ID = 'https://pieroperilli.com/#business';
const PROFILE_IMAGE =
  'https://pieroperilli.com/images/piero-perilli-vfx-artist-artigiano-digitale-roma.jpg';

// ── PERSON ──────────────────────────────────────────────────
export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Piero Perilli',
    givenName: 'Piero',
    familyName: 'Perilli',
    url: 'https://pieroperilli.com',
    image: PROFILE_IMAGE,
    jobTitle: 'VFX Artist e Artigiano Digitale',
    description:
      "VFX Artist con oltre 20 anni di esperienza in post-produzione per cinema, advertising e brand. Specializzato in VFX, motion graphics, animazione 3D, color grading e AI video production. Unisce la precisione artigianale dell'orologiaio all'integrazione di strumenti di intelligenza artificiale nel workflow professionale.",
    telephone: '+39-392-018-7759',
    email: 'info@pieroperilli.com',
    nationality: { '@type': 'Country', name: 'Italy' },
    knowsLanguage: ['it', 'en'],
    homeLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Roma',
        addressRegion: 'Lazio',
        addressCountry: 'IT',
      },
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Roma',
      addressRegion: 'Lazio',
      addressCountry: 'IT',
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'VFX Artist e Motion Graphics Designer',
      occupationalCategory: '27-1014.00', // ONET: Multimedia Artists and Animators
    },
    knowsAbout: [
      'Visual Effects (VFX)',
      'VFX compositing',
      'Green screen e chroma keying',
      'Motion Graphics',
      'Animazione 3D',
      'Character animation',
      'Color Grading',
      'DaVinci Resolve',
      'After Effects',
      '3ds Max',
      'ZBrush',
      'Unreal Engine',
      'Character Creator',
      'tyFlow',
      'AI Video Production',
      'Runway',
      'Google Veo',
      'Kling AI',
      'Higgsfield',
      'Post-produzione cinematografica',
      'Post-produzione advertising',
      'Set extension',
      'Motion tracking',
      'Simulazioni particellari',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'DaVinci Resolve Certified — Color Correction',
        credentialCategory: 'certification',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'DaVinci Resolve Certified — Fusion',
        credentialCategory: 'certification',
      },
    ],
    workExample: [
      {
        '@type': 'Movie',
        name: 'I Am Curious Johnny',
        image:
          'https://m.media-amazon.com/images/M/MV5BNzk4YmFhM2QtYjQ1Ny00ZjQ5LWFlZTAtZGNmM2JiZWRkNGMzXkEyXkFqcGc@._V1_.jpg',
        dateCreated: '2025',
        director: { '@type': 'Person', name: 'Julien Temple' },
        sameAs: 'https://www.imdb.com/title/tt35450650/',
      },
      {
        '@type': 'Movie',
        name: 'Floverr',
        image:
          'https://m.media-amazon.com/images/M/MV5BZWExMzJkZmUtYWI1Ni00ZjBmLWEwNDQtOTViYjI2ZTI1ODI5XkEyXkFqcGc@._V1_UY580_CR149,0,392,580_.jpg',
        dateCreated: '2026',
        director: { '@type': 'Person', name: 'Anita Udeep' },
        sameAs: 'https://www.imdb.com/title/tt36724898/',
      },
      {
        '@type': 'Movie',
        name: 'Non Tutto È Perduto',
        image:
          'https://m.media-amazon.com/images/M/MV5BOWI0NTE3ZTMtYWEzMS00YzZlLTg4YmItN2Y5NDM5OTdiZmUxXkEyXkFqcGc@._V1_UY580_CR9,0,392,580_.jpg',
        dateCreated: '2023',
        director: { '@type': 'Person', name: 'Francesco Bellomo' },
        sameAs: 'https://www.imdb.com/title/tt31173315/',
      },
      {
        '@type': 'Movie',
        name: 'A mamma non piace',
        image:
          'https://m.media-amazon.com/images/M/MV5BMTJkNjg3MWMtOTA0MS00MWQ3LWE4YmMtZWJmZjk4NzI2ZWQ2XkEyXkFqcGc@._V1_UY580_CR7,0,392,580_.jpg',
        dateCreated: '2025',
        director: { '@type': 'Person', name: 'Gianni Leacche' },
        sameAs: 'https://www.imdb.com/title/tt38095764/',
      },
      {
        '@type': 'TVSeries',
        name: 'Radio Caterina',
        image:
          'https://m.media-amazon.com/images/M/MV5BYzdhNzI4MmQtNWVhNy00MDEwLWE0OTQtZjAyZWMxOTUzZmNiXkEyXkFqcGc@._V1_UY580_CR7,0,392,580_.jpg',
        dateCreated: '2023',
        director: { '@type': 'Person', name: 'David Orlandelli' },
        sameAs: 'https://www.imdb.com/title/tt29257837/',
      },
      {
        '@type': 'Movie',
        name: 'Along Came Ruby',
        image:
          'https://m.media-amazon.com/images/M/MV5BODNmZDExMTItYTBjOC00OWFkLTk1MTEtOWU0MmI0YWI3MjA3XkEyXkFqcGc@._V1_UX392_CR0,0,392,580_.jpg',
        dateCreated: '2024',
        director: { '@type': 'Person', name: 'Riccardo Suriano' },
        sameAs: 'https://www.imdb.com/title/tt28106482/',
      },
      {
        '@type': 'Movie',
        name: 'Isole',
        image:
          'https://m.media-amazon.com/images/M/MV5BODkzODcyMTctMGVkYS00YmE2LWFmM2MtNjZiNmY2OWJhNDBiXkEyXkFqcGc@._V1_UY580_CR179,0,392,580_.jpg',
        dateCreated: '2016',
        director: { '@type': 'Person', name: 'Valerio de Berardinis' },
        sameAs: 'https://www.imdb.com/it/title/tt5429970/',
      },
      {
        '@type': 'Movie',
        name: 'Frangiamore',
        image:
          'https://m.media-amazon.com/images/M/MV5BNjMxNWE3ZTktOWY3Mi00YjJiLWJiYmUtNmU4YzMzOGZlMTE4XkEyXkFqcGc@._V1_UY580_CR319,0,392,580_.jpg',
        dateCreated: '2020',
        director: { '@type': 'Person', name: 'Sylvio Giardina' },
        sameAs: 'https://www.imdb.com/it/title/tt13472468/',
      },
    ],
    sameAs: [
      'https://www.imdb.com/it/name/nm3859505/',
      'https://www.linkedin.com/in/piero-perilli-26b26658/',
      'https://www.instagram.com/pieroperilli/',
      'https://www.behance.net/pieroperilli',
    ],
    worksFor: { '@id': BUSINESS_ID },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── LOCAL BUSINESS / PROFESSIONAL SERVICE ───────────────────
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': BUSINESS_ID,
    name: 'Piero Perilli — VFX, Motion Graphics e Post Produzione',
    alternateName: 'Piero Perilli — Artigiano Digitale',
    url: 'https://pieroperilli.com',
    image: PROFILE_IMAGE,
    logo: 'https://pieroperilli.com/images/logo-white.png',
    description:
      'Studio freelance di post-produzione video a Roma: VFX, motion graphics, animazione 3D, color grading e AI video production. Un unico interlocutore dal concept al master finale per agenzie, produzioni cinematografiche e brand.',
    telephone: '+39-392-018-7759',
    email: 'info@pieroperilli.com',
    priceRange: '€€€',
    vatID: 'IT10343871009',
    founder: { '@id': PERSON_ID },
    provider: { '@id': PERSON_ID },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Roma',
      addressRegion: 'Lazio',
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.9028,
      longitude: 12.4964,
    },
    areaServed: [
      { '@type': 'Country', name: 'Italy' },
      { '@type': 'Place', name: 'Europa' },
    ],
    serviceType: [
      'Visual Effects',
      'Motion Graphics',
      'Animazione 3D',
      'Post Produzione Video',
      'AI Video Production',
      'Color Grading',
      'Compositing',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servizi di Post-Produzione Video',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Visual Effects (VFX)',
            description:
              'Compositing, green screen, set extension, motion tracking, effetti particellari e clean-up per cinema, advertising e digital content.',
            url: 'https://pieroperilli.com/vfx',
            provider: { '@id': BUSINESS_ID },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Motion Graphics',
            description:
              'Animazioni grafiche, infografiche animate, titoli, loghi animati ed elementi UI per brand, campagne e contenuti digitali.',
            url: 'https://pieroperilli.com/motion-graphics',
            provider: { '@id': BUSINESS_ID },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Animazione 3D',
            description:
              'Modellazione, texturing, lighting, rendering e animazione 3D di prodotti, personaggi e ambienti per cinema, pubblicità e presentazione aziendale.',
            url: 'https://pieroperilli.com/animazione-3d',
            provider: { '@id': BUSINESS_ID },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Post Produzione Video',
            description:
              'Montaggio, color grading e finishing professionale in DaVinci Resolve per cinema, TV e digital. Workflow integrato con VFX e motion graphics.',
            url: 'https://pieroperilli.com/post-produzione',
            provider: { '@id': BUSINESS_ID },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Video Production',
            description:
              'Generazione video con AI (Runway, Google Veo, Kling, Higgsfield) integrata nel workflow professionale di post-produzione. Strumenti potenziati da oltre 20 anni di esperienza visiva.',
            url: 'https://pieroperilli.com/ai-video',
            provider: { '@id': BUSINESS_ID },
          },
        },
      ],
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    sameAs: [
      'https://www.imdb.com/it/name/nm3859505/',
      'https://www.linkedin.com/in/piero-perilli-26b26658/',
      'https://www.instagram.com/pieroperilli/',
      'https://www.behance.net/pieroperilli',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── SERVICE ─────────────────────────────────────────────────
interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
}

export function ServiceSchema({ name, description, url, image }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `https://pieroperilli.com${url}`,
    provider: { '@id': PERSON_ID },
    areaServed: [
      { '@type': 'Country', name: 'Italy' },
      { '@type': 'Place', name: 'Europa' },
    ],
    ...(image && { image }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── VIDEO OBJECT ────────────────────────────────────────────
interface VideoObjectSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
}

export function VideoObjectSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  contentUrl,
  embedUrl,
}: VideoObjectSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
    ...(duration && { duration }),
    ...(contentUrl && { contentUrl }),
    ...(embedUrl && { embedUrl }),
    author: { '@id': PERSON_ID },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── ARTICLE ─────────────────────────────────────────────────
interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  keywords?: string[];
}

export function ArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  image,
  keywords,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: `https://pieroperilli.com${url}`,
    datePublished,
    ...(dateModified && { dateModified }),
    ...(image && { image }),
    ...(keywords && { keywords: keywords.join(', ') }),
    author: { '@id': PERSON_ID },
    publisher: { '@id': BUSINESS_ID },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://pieroperilli.com${url}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── FAQ PAGE (AI/LLM discoverability) ──────────────────────
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── SPEAKABLE (voice assistants + AI answer engines) ───────
export function SpeakableSchema({
  url,
  cssSelectors = ['h1', '.speakable'],
}: {
  url: string;
  cssSelectors?: string[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors,
    },
    url: `https://pieroperilli.com${url}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── BREADCRUMB ─────────────────────────────────────────────
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://pieroperilli.com${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}