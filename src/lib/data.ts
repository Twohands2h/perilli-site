/**
 * Data Layer — Single source of truth for portfolio & blog data.
 * Reads directly from static .ts files.
 */

import { projects as staticProjects, getProject as getStaticProject, categories } from '@/data/projects';
import { getPost as getStaticPost, getPublishedPosts as getStaticPublished, getPostSlug as getStaticPostSlug } from '@/data/posts';
import type { Project } from '@/data/projects';
import type { BlogPost } from '@/data/posts';

// ── PROJECTS ────────────────────────────────────────────────

export async function getAllProjects(): Promise<Project[]> {
  return staticProjects;
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return getStaticProject(slug);
}

export async function getRelatedProjects(currentSlug: string, count: number = 3): Promise<Project[]> {
  const current = staticProjects.find(p => p.slug === currentSlug);
  if (!current) return staticProjects.filter(p => p.slug !== currentSlug).slice(0, count);

  const sameCategory = staticProjects.filter(p => p.slug !== currentSlug && p.category === current.category);
  const otherCategory = staticProjects.filter(p => p.slug !== currentSlug && p.category !== current.category);
  return [...sameCategory, ...otherCategory].slice(0, count);
}

export { categories };

// ── BLOG POSTS ──────────────────────────────────────────────

export async function getAllPosts(): Promise<BlogPost[]> {
  return getStaticPublished();
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return getStaticPost(slug);
}

export function getPostSlug(post: BlogPost, locale: string): string {
  return getStaticPostSlug(post, locale);
}
