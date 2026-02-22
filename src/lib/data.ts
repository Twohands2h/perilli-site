/**
 * Data Layer — Single source of truth for portfolio & blog data.
 *
 * Strategy:
 *   1. Try Sanity (ISR 60s)
 *   2. If Sanity returns data → use it (converted to local types)
 *   3. If Sanity fails or returns empty → fall back to static .ts files
 *
 * This ensures the site NEVER breaks even if Sanity is down.
 */

import { getSanityProjects, getSanityProject, getSanityBlogPosts, getSanityBlogPost } from '@/sanity/queries';
import { sanityProjectToLocal, sanityPostToLocal } from '@/sanity/adapter';
import { projects as staticProjects, getProject as getStaticProject, categories } from '@/data/projects';
import { getPost as getStaticPost, getPublishedPosts as getStaticPublished, getPostSlug as getStaticPostSlug } from '@/data/posts';
import type { Project } from '@/data/projects';
import type { BlogPost } from '@/data/posts';

// ── PROJECTS ────────────────────────────────────────────────

export async function getAllProjects(): Promise<Project[]> {
  try {
    const sanityData = await getSanityProjects();
    if (sanityData && sanityData.length > 0) {
      return sanityData.map(sanityProjectToLocal);
    }
  } catch (e) {
    console.warn('[DataLayer] Sanity projects fetch failed, using static fallback:', e);
  }
  return staticProjects;
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  try {
    const sanityData = await getSanityProject(slug);
    if (sanityData) {
      return sanityProjectToLocal(sanityData);
    }
  } catch (e) {
    console.warn(`[DataLayer] Sanity project "${slug}" fetch failed, using static fallback:`, e);
  }
  return getStaticProject(slug);
}

export async function getRelatedProjects(currentSlug: string, count: number = 3): Promise<Project[]> {
  // For related projects, use the full list (Sanity or static)
  const allProjects = await getAllProjects();
  const current = allProjects.find(p => p.slug === currentSlug);
  if (!current) return allProjects.filter(p => p.slug !== currentSlug).slice(0, count);

  const sameCategory = allProjects.filter(p => p.slug !== currentSlug && p.category === current.category);
  const otherCategory = allProjects.filter(p => p.slug !== currentSlug && p.category !== current.category);
  return [...sameCategory, ...otherCategory].slice(0, count);
}

export { categories };

// ── BLOG POSTS ──────────────────────────────────────────────

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const sanityData = await getSanityBlogPosts();
    if (sanityData && sanityData.length > 0) {
      return sanityData.map(sanityPostToLocal);
    }
  } catch (e) {
    console.warn('[DataLayer] Sanity blog posts fetch failed, using static fallback:', e);
  }
  return getStaticPublished();
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  try {
    const sanityData = await getSanityBlogPost(slug);
    if (sanityData) {
      return sanityPostToLocal(sanityData);
    }
  } catch (e) {
    console.warn(`[DataLayer] Sanity post "${slug}" fetch failed, using static fallback:`, e);
  }
  return getStaticPost(slug);
}

export function getPostSlug(post: BlogPost, locale: string): string {
  return getStaticPostSlug(post, locale);
}
