/**
 * SANITY IMPORT SCRIPT
 * Importa i 24 progetti e 4 articoli blog da file .ts a Sanity.
 *
 * Prerequisiti:
 *   npm install @sanity/client
 *
 * Uso:
 *   SANITY_TOKEN=<token> node import-to-sanity.mjs
 *
 * Per ottenere il token:
 *   1. Vai su https://www.sanity.io/manage/project/zygggq8k
 *   2. API → Tokens → Add API Token
 *   3. Nome: "import", Permissions: Editor
 */

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'zygggq8k',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

// ── PROJECTS DATA (from projects.ts) ──
// We import this inline to avoid TypeScript compilation issues

async function importProjects() {
  // Dynamic import of the projects — we'll read them from a JSON file instead
  const { projects } = await import('./export-data.mjs');

  console.log(`\n📦 Importing ${projects.length} projects...\n`);

  for (const p of projects) {
    const doc = {
      _type: 'project',
      _id: `project-${p.slug}`, // deterministic ID for idempotent imports
      title: p.titleIt,
      titleEn: p.titleEn,
      slug: { _type: 'slug', current: p.slug },
      category: p.category,
      categoryLabel: p.categoryLabel.it,
      categoryLabelEn: p.categoryLabel.en,
      client: p.client,
      year: p.year,
      role: p.role,
      thumbnailUrl: p.thumbnail,
      thumbnailAltIt: p.thumbnailAlt.it,
      thumbnailAltEn: p.thumbnailAlt.en,
      thumbnailVideoUrl: p.thumbnailVideo || undefined,
      heroImageUrl: p.heroImage,
      tools: p.tools,
      briefingIt: p.briefingIt,
      briefingEn: p.briefingEn,
      challengeIt: p.challengeIt,
      challengeEn: p.challengeEn,
      solutionIt: p.solutionIt,
      solutionEn: p.solutionEn,
      resultIt: p.resultIt,
      resultEn: p.resultEn,
      imdbLink: p.imdbLink || undefined,
      videoEmbed: p.videoEmbed || undefined,
      videoType: p.videoType || undefined,
      videoUrl: p.videoUrl || undefined,
      // Legacy images array
      legacyImages: p.images?.length > 0
        ? p.images.map((img) => ({
            _type: 'object',
            _key: Math.random().toString(36).slice(2, 10),
            src: img.src,
            altIt: img.alt.it,
            altEn: img.alt.en,
          }))
        : undefined,
      // Content blocks
      contentBlocks: p.contentBlocks?.map((block) => {
        const key = Math.random().toString(36).slice(2, 10);
        switch (block.type) {
          case 'text':
            return { _type: 'textBlock', _key: key, textIt: block.textIt, textEn: block.textEn };
          case 'image':
            return {
              _type: 'imageBlock', _key: key,
              imageUrl: block.src,
              altIt: block.alt.it, altEn: block.alt.en,
              fullWidth: block.fullWidth || false,
            };
          case 'gallery':
            return {
              _type: 'galleryBlock', _key: key,
              images: block.images.map((img) => ({
                _type: 'object',
                _key: Math.random().toString(36).slice(2, 10),
                imageUrl: img.src,
                altIt: img.alt.it, altEn: img.alt.en,
              })),
              columns: block.columns || 2,
            };
          case 'video':
            return {
              _type: 'videoBlock', _key: key,
              embedId: block.embedId, platform: block.platform, title: block.title,
            };
          case 'video-mp4':
            return {
              _type: 'videoMp4Block', _key: key,
              videoUrl: block.url, posterUrl: block.poster, title: block.title,
            };
          case 'video-loop':
            return {
              _type: 'videoLoopBlock', _key: key,
              videoUrl: block.url, posterUrl: block.poster, title: block.title,
            };
          default:
            return null;
        }
      }).filter(Boolean) || undefined,
    };

    try {
      await client.createOrReplace(doc);
      console.log(`  ✅ ${p.slug}`);
    } catch (err) {
      console.error(`  ❌ ${p.slug}:`, err.message);
    }
  }
}

async function importBlogPosts() {
  const { posts } = await import('./export-data.mjs');

  console.log(`\n📝 Importing ${posts.length} blog posts...\n`);

  for (const p of posts) {
    const doc = {
      _type: 'blogPost',
      _id: `post-${p.slug}`,
      title: p.titleIt,
      titleEn: p.titleEn,
      slug: { _type: 'slug', current: p.slug },
      slugEn: { _type: 'slug', current: p.slugEn },
      excerpt: p.excerptIt,
      excerptEn: p.excerptEn,
      date: p.date,
      draft: p.draft || false,
      readingTime: p.readingTime,
      category: p.category,
      categoryLabel: p.categoryLabel.it,
      categoryLabelEn: p.categoryLabel.en,
      keywordTarget: p.keywordTarget,
      thumbnailUrl: p.thumbnail,
      thumbnailAltIt: p.thumbnailAlt.it,
      thumbnailAltEn: p.thumbnailAlt.en,
      contentIt: p.contentIt,
      contentEn: p.contentEn,
    };

    try {
      await client.createOrReplace(doc);
      console.log(`  ✅ ${p.slug}`);
    } catch (err) {
      console.error(`  ❌ ${p.slug}:`, err.message);
    }
  }
}

async function main() {
  console.log('🚀 Sanity Import — Progetto Perilli');
  console.log('====================================');

  if (!process.env.SANITY_TOKEN) {
    console.error('\n❌ Manca SANITY_TOKEN. Crea un token su:');
    console.error('   https://www.sanity.io/manage/project/zygggq8k/api#tokens\n');
    process.exit(1);
  }

  await importProjects();
  await importBlogPosts();

  console.log('\n✨ Import completato!\n');
  console.log('Prossimi step:');
  console.log('  1. Vai su https://perilli-site.sanity.studio');
  console.log('  2. Verifica che i 24 progetti e 4 articoli siano presenti');
  console.log('  3. Deploya gli schema aggiornati nel progetto Studio\n');
}

main().catch(console.error);
