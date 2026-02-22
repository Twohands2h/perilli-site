/**
 * Sanity → Local Adapter
 *
 * Converts Sanity query results into the Project/BlogPost types
 * that the existing pages already consume. This keeps the page
 * components unchanged while the data source switches from
 * static .ts files to Sanity CMS.
 *
 * Image strategy: Sanity image asset URL if uploaded, else local path.
 */

import type { Project, ContentBlock } from '@/data/projects';
import type { BlogPost } from '@/data/posts';
import type { SanityProject, SanityBlogPost, SanityContentBlock } from '@/sanity/queries';

// ── PROJECTS ────────────────────────────────────────────────

function convertContentBlock(block: SanityContentBlock): ContentBlock | null {
  switch (block._type) {
    case 'textBlock':
      return {
        type: 'text',
        textIt: block.textIt || '',
        textEn: block.textEn || '',
      };
    case 'imageBlock':
      return {
        type: 'image',
        src: block.imageSanity || block.imageUrl || '',
        alt: { it: block.altIt || '', en: block.altEn || '' },
        fullWidth: block.fullWidth,
      };
    case 'galleryBlock':
      return {
        type: 'gallery',
        images: (block.images || []).map((img) => ({
          src: img.imageSanity || img.imageUrl || '',
          alt: { it: img.altIt || '', en: img.altEn || '' },
        })),
        columns: (block.columns as 2 | 3) || 2,
      };
    case 'videoBlock':
      return {
        type: 'video',
        embedId: block.embedId || '',
        platform: (block.platform as 'youtube' | 'vimeo') || 'youtube',
        title: block.title,
      };
    case 'videoMp4Block':
      return {
        type: 'video-mp4',
        url: block.videoSanity || block.videoUrl || '',
        poster: block.posterSanity || block.posterUrl,
        title: block.title,
      };
    case 'videoLoopBlock':
      return {
        type: 'video-loop',
        url: block.videoSanity || block.videoUrl || '',
        poster: block.posterSanity || block.posterUrl,
        title: block.title,
      };
    default:
      return null;
  }
}

export function sanityProjectToLocal(sp: SanityProject): Project {
  const thumbnail = sp.thumbnailSanity || sp.thumbnailUrl || '';
  const heroImage = sp.heroImageSanity || sp.heroImageUrl || '';

  return {
    slug: sp.slug,
    titleIt: sp.title,
    titleEn: sp.titleEn,
    category: sp.category as Project['category'],
    categoryLabel: {
      it: sp.categoryLabel || sp.category,
      en: sp.categoryLabelEn || sp.category,
    },
    client: sp.client,
    year: sp.year,
    role: sp.role,
    thumbnail,
    thumbnailVideo: sp.thumbnailVideoUrl,
    thumbnailAlt: {
      it: sp.thumbnailAltIt || '',
      en: sp.thumbnailAltEn || '',
    },
    heroImage,
    images: (sp.legacyImages || []).map((img) => ({
      src: img.src,
      alt: { it: img.altIt, en: img.altEn },
    })),
    tools: sp.tools || [],
    briefingIt: sp.briefingIt,
    briefingEn: sp.briefingEn,
    challengeIt: sp.challengeIt,
    challengeEn: sp.challengeEn,
    solutionIt: sp.solutionIt,
    solutionEn: sp.solutionEn,
    resultIt: sp.resultIt,
    resultEn: sp.resultEn,
    videoEmbed: sp.videoEmbed,
    videoType: sp.videoType as Project['videoType'],
    videoUrl: sp.videoUrl,
    contentBlocks: sp.contentBlocks
      ?.map(convertContentBlock)
      .filter((b): b is ContentBlock => b !== null),
    imdbLink: sp.imdbLink,
  };
}

// ── BLOG POSTS ──────────────────────────────────────────────

export function sanityPostToLocal(sp: SanityBlogPost): BlogPost {
  return {
    slug: sp.slug,
    slugEn: sp.slugEn,
    titleIt: sp.title,
    titleEn: sp.titleEn,
    excerptIt: sp.excerpt,
    excerptEn: sp.excerptEn,
    date: sp.date,
    draft: sp.draft,
    readingTime: sp.readingTime,
    category: sp.category,
    categoryLabel: {
      it: sp.categoryLabel || sp.category,
      en: sp.categoryLabelEn || sp.category,
    },
    keywordTarget: sp.keywordTarget,
    thumbnail: sp.thumbnailSanity || sp.thumbnailUrl || '',
    thumbnailAlt: {
      it: sp.thumbnailAltIt || '',
      en: sp.thumbnailAltEn || '',
    },
    contentIt: sp.contentIt,
    contentEn: sp.contentEn,
  };
}
