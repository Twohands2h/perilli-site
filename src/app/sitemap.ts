import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { posts } from '@/data/posts';

const BASE_URL = 'https://pieroperilli.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Static pages (IT default + EN)
  const staticPages = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/chi-sono', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/vfx', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/motion-graphics', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/animazione-3d', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/post-produzione', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/ai-video', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/portfolio', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/contatti', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.flatMap((page) => [
    {
      url: `${BASE_URL}${page.path}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          it: `${BASE_URL}${page.path}`,
          en: `${BASE_URL}/en${page.path}`,
        },
      },
    },
    {
      url: `${BASE_URL}/en${page.path}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          it: `${BASE_URL}${page.path}`,
          en: `${BASE_URL}/en${page.path}`,
        },
      },
    },
  ]);

  // Portfolio projects
  const portfolioEntries: MetadataRoute.Sitemap = projects.flatMap((project) => [
    {
      url: `${BASE_URL}/portfolio/${project.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          it: `${BASE_URL}/portfolio/${project.slug}`,
          en: `${BASE_URL}/en/portfolio/${project.slug}`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/portfolio/${project.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          it: `${BASE_URL}/portfolio/${project.slug}`,
          en: `${BASE_URL}/en/portfolio/${project.slug}`,
        },
      },
    },
  ]);

  // Blog posts
  const blogEntries: MetadataRoute.Sitemap = posts.flatMap((post) => [
    {
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: {
        languages: {
          it: `${BASE_URL}/blog/${post.slug}`,
          en: `${BASE_URL}/en/blog/${post.slug}`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: {
        languages: {
          it: `${BASE_URL}/blog/${post.slug}`,
          en: `${BASE_URL}/en/blog/${post.slug}`,
        },
      },
    },
  ]);

  return [...staticEntries, ...portfolioEntries, ...blogEntries];
}
