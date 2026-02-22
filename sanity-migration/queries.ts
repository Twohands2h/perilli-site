import { client, SANITY_REVALIDATE } from './client';

// ── TESTIMONIALS ────────────────────────────────────────────
export interface SanityTestimonial {
  _id: string;
  name: string;
  role: string;
  quoteIt: string;
  quoteEn: string;
  featured: boolean;
  order: number;
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  return client.fetch(
    `*[_type == "testimonial" && featured == true] | order(order asc) {
      _id, name, role, quoteIt, quoteEn, featured, order
    }`,
    {},
    { next: { revalidate: SANITY_REVALIDATE } }
  );
}

// ── PROJECTS ────────────────────────────────────────────────

const PROJECT_FIELDS = `
  _id,
  title,
  titleEn,
  "slug": slug.current,
  category,
  categoryLabel,
  categoryLabelEn,
  client,
  year,
  role,
  "thumbnailSanity": thumbnail.asset->url,
  "thumbnailAltIt": coalesce(thumbnail.altIt, thumbnailAltIt),
  "thumbnailAltEn": coalesce(thumbnail.altEn, thumbnailAltEn),
  thumbnailUrl,
  thumbnailVideoUrl,
  "heroImageSanity": heroImage.asset->url,
  heroImageUrl,
  tools,
  briefingIt, briefingEn,
  challengeIt, challengeEn,
  solutionIt, solutionEn,
  resultIt, resultEn,
  contentBlocks[] {
    _type,
    // textBlock
    textIt, textEn,
    // imageBlock
    "imageSanity": image.asset->url,
    imageUrl,
    altIt, altEn, fullWidth,
    // galleryBlock
    images[] {
      "imageSanity": image.asset->url,
      imageUrl,
      altIt, altEn
    },
    columns,
    // videoBlock
    embedId, platform, title,
    // videoMp4Block & videoLoopBlock
    "videoSanity": video.asset->url,
    videoUrl,
    "posterSanity": poster.asset->url,
    posterUrl
  },
  imdbLink,
  relatedServices,
  legacyImages[] { src, altIt, altEn },
  videoEmbed, videoType, videoUrl
`;

export interface SanityProject {
  _id: string;
  title: string;
  titleEn: string;
  slug: string;
  category: string;
  categoryLabel: string;
  categoryLabelEn: string;
  client: string;
  year: string;
  role: string;
  thumbnailSanity?: string;
  thumbnailUrl?: string;
  thumbnailAltIt?: string;
  thumbnailAltEn?: string;
  thumbnailVideoUrl?: string;
  heroImageSanity?: string;
  heroImageUrl?: string;
  tools: string[];
  briefingIt: string;
  briefingEn: string;
  challengeIt: string;
  challengeEn: string;
  solutionIt: string;
  solutionEn: string;
  resultIt: string;
  resultEn: string;
  contentBlocks?: SanityContentBlock[];
  imdbLink?: string;
  relatedServices?: string[];
  legacyImages?: { src: string; altIt: string; altEn: string }[];
  videoEmbed?: string;
  videoType?: string;
  videoUrl?: string;
}

export interface SanityContentBlock {
  _type: string;
  // text
  textIt?: string;
  textEn?: string;
  // image
  imageSanity?: string;
  imageUrl?: string;
  altIt?: string;
  altEn?: string;
  fullWidth?: boolean;
  // gallery
  images?: { imageSanity?: string; imageUrl?: string; altIt?: string; altEn?: string }[];
  columns?: number;
  // video
  embedId?: string;
  platform?: string;
  title?: string;
  // video mp4 / loop
  videoSanity?: string;
  videoUrl?: string;
  posterSanity?: string;
  posterUrl?: string;
}

export async function getProjects(): Promise<SanityProject[]> {
  return client.fetch(
    `*[_type == "project"] | order(year desc) { ${PROJECT_FIELDS} }`,
    {},
    { next: { revalidate: SANITY_REVALIDATE } }
  );
}

export async function getProject(slug: string): Promise<SanityProject | null> {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0] { ${PROJECT_FIELDS} }`,
    { slug },
    { next: { revalidate: SANITY_REVALIDATE } }
  );
}

// ── BLOG POSTS ──────────────────────────────────────────────

const BLOG_FIELDS = `
  _id,
  title,
  titleEn,
  "slug": slug.current,
  "slugEn": slugEn.current,
  excerpt,
  excerptEn,
  date,
  draft,
  readingTime,
  category,
  categoryLabel,
  categoryLabelEn,
  keywordTarget,
  "thumbnailSanity": thumbnail.asset->url,
  "thumbnailAltIt": coalesce(thumbnail.altIt, thumbnailAltIt),
  "thumbnailAltEn": coalesce(thumbnail.altEn, thumbnailAltEn),
  thumbnailUrl,
  contentIt,
  contentEn
`;

export interface SanityBlogPost {
  _id: string;
  title: string;
  titleEn: string;
  slug: string;
  slugEn: string;
  excerpt: string;
  excerptEn: string;
  date: string;
  draft?: boolean;
  readingTime: number;
  category: string;
  categoryLabel: string;
  categoryLabelEn: string;
  keywordTarget: string;
  thumbnailSanity?: string;
  thumbnailUrl?: string;
  thumbnailAltIt?: string;
  thumbnailAltEn?: string;
  contentIt: string;
  contentEn: string;
}

export async function getBlogPosts(): Promise<SanityBlogPost[]> {
  return client.fetch(
    `*[_type == "blogPost" && draft != true] | order(date desc) { ${BLOG_FIELDS} }`,
    {},
    { next: { revalidate: SANITY_REVALIDATE } }
  );
}

export async function getBlogPost(slug: string): Promise<SanityBlogPost | null> {
  return client.fetch(
    `*[_type == "blogPost" && (slug.current == $slug || slugEn.current == $slug)][0] { ${BLOG_FIELDS} }`,
    { slug },
    { next: { revalidate: SANITY_REVALIDATE } }
  );
}
