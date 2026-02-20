/**
 * Schema.org JSON-LD Markup Components
 * 
 * PersonSchema + LocalBusinessSchema → layout.tsx (global)
 * ServiceSchema → service pages
 * VideoObjectSchema → portfolio projects with video
 * ArticleSchema → blog posts
 * BreadcrumbSchema → all pages except homepage
 */

// ── PERSON ──────────────────────────────────────────────────
export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Piero Perilli',
    url: 'https://pieroperilli.com',
    image: 'https://pieroperilli.com/images/piero-perilli-vfx-artist.jpg',
    jobTitle: 'VFX Artist & Post Production Supervisor',
    description:
      'Artigiano digitale con oltre 20 anni di esperienza in VFX, motion graphics, color grading e post-produzione video. Base Roma/Venezia.',
    knowsAbout: [
      'Visual Effects (VFX)',
      'Motion Graphics',
      'Color Grading',
      '3D Animation',
      'Video Post Production',
      'AI Video Production',
      'Compositing',
      'DaVinci Resolve',
      'After Effects',
      'Unreal Engine',
    ],
    sameAs: [
      'https://www.imdb.com/it/name/nm3859505/',
      'https://www.linkedin.com/in/piero-perilli-26b26658/',
      'https://www.instagram.com/pieroperilli/',
      'https://www.behance.net/pieroperilli',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Piero Perilli — Artigiano Digitale',
      url: 'https://pieroperilli.com',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Roma',
      addressCountry: 'IT',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── LOCAL BUSINESS ──────────────────────────────────────────
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Piero Perilli — VFX & Post Produzione Video',
    url: 'https://pieroperilli.com',
    image: 'https://pieroperilli.com/images/piero-perilli-vfx-artist.jpg',
    description:
      'Servizi professionali di VFX, motion graphics, color grading, animazione 3D e post-produzione video a Roma.',
    telephone: '+393920187759',
    email: 'pieroperilli.info@gmail.com',
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
      { '@type': 'City', name: 'Roma' },
      { '@type': 'Country', name: 'Italia' },
    ],
    serviceType: [
      'Visual Effects (VFX)',
      'Motion Graphics',
      'Color Grading',
      'Video Post Production',
      '3D Animation',
      'AI Video Production',
    ],
    priceRange: '€€€',
    openingHours: 'Mo-Fr 09:00-18:00',
    founder: {
      '@type': 'Person',
      name: 'Piero Perilli',
    },
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
    provider: {
      '@type': 'Person',
      name: 'Piero Perilli',
      url: 'https://pieroperilli.com',
    },
    areaServed: { '@type': 'Country', name: 'Italia' },
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
    author: {
      '@type': 'Person',
      name: 'Piero Perilli',
      url: 'https://pieroperilli.com',
    },
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
    author: {
      '@type': 'Person',
      name: 'Piero Perilli',
      url: 'https://pieroperilli.com',
    },
    publisher: {
      '@type': 'Person',
      name: 'Piero Perilli',
      url: 'https://pieroperilli.com',
    },
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

// ── BREADCRUMB ──────────────────────────────────────────────
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
