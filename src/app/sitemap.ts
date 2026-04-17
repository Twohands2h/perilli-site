import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { getPublishedPosts } from '@/data/posts';

const BASE_URL = 'https://pieroperilli.com';

// IT path → EN path for localized static URLs
const enPaths: Record<string, string> = {
  '/chi-sono': '/about',
  '/post-produzione': '/post-production',
  '/animazione-3d': '/3d-animation',
  '/contatti': '/contact',
};

function getEnPath(itPath: string): string {
  return enPaths[itPath] || itPath;
}

// Helper: builds alternates object with x-default (required by Google for best hreflang)
function buildAlternates(itUrl: string, enUrl: string) {
  return {
    languages: {
      it: itUrl,
      en: enUrl,
      'x-default': itUrl,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages = [
    { path: '/',                priority: 1.0, changeFrequency: 'weekly'  as const },
    { path: '/chi-sono',        priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/vfx',             priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/motion-graphics', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/animazione-3d',   priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/post-produzione', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/ai-video',        priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/portfolio',       priority: 0.8, changeFrequency: 'weekly'  as const },
    { path: '/blog',            priority: 0.8, changeFrequency: 'weekly'  as const },
    { path: '/contatti',        priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  // Static pages — IT + EN entries, each with full hreflang alternates
  const staticEntries: MetadataRoute.Sitemap = staticPages.flatMap((page) => {
    const itUrl = `${BASE_URL}${page.path}`;
    const enUrl = `${BASE_URL}/en${getEnPath(page.path)}`;
    const alternates = buildAlternates(itUrl, enUrl);

    return [
      {
        url: itUrl,
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates,
      },
      {
        url: enUrl,
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates,
      },
    ];
  });

  // Portfolio — same slug IT/EN
  const portfolioEntries: MetadataRoute.Sitemap = projects.flatMap((project) => {
    const itUrl = `${BASE_URL}/portfolio/${project.slug}`;
    const enUrl = `${BASE_URL}/en/portfolio/${project.slug}`;
    const alternates = buildAlternates(itUrl, enUrl);

    return [
      {
        url: itUrl,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates,
      },
      {
        url: enUrl,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates,
      },
    ];
  });

  // Blog — different slug IT/EN
  const blogEntries: MetadataRoute.Sitemap = getPublishedPosts().flatMap((post) => {
    const itUrl = `${BASE_URL}/blog/${post.slug}`;
    const enUrl = `${BASE_URL}/en/blog/${post.slugEn}`;
    const alternates = buildAlternates(itUrl, enUrl);
    const postDate = new Date(post.date);

    return [
      {
        url: itUrl,
        lastModified: postDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
        alternates,
      },
      {
        url: enUrl,
        lastModified: postDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
        alternates,
      },
    ];
  });

  return [...staticEntries, ...portfolioEntries, ...blogEntries];
}