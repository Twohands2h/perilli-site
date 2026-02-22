import { defineType, defineField } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Progetto Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo (IT)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleEn',
      title: 'Titolo (EN)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'VFX', value: 'vfx' },
          { title: 'Motion Graphics', value: 'motion' },
          { title: 'Animazione 3D', value: 'animation' },
          { title: 'Post Produzione', value: 'post' },
          { title: 'AI Video', value: 'ai' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoryLabel',
      title: 'Label Categoria (IT)',
      type: 'string',
    }),
    defineField({
      name: 'categoryLabelEn',
      title: 'Label Categoria (EN)',
      type: 'string',
    }),
    defineField({
      name: 'client',
      title: 'Cliente',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Anno',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Ruolo',
      type: 'string',
    }),
    // ── Images: Sanity asset OR local URL ──
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail (Sanity)',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'altIt', title: 'Alt text (IT)', type: 'string' }),
        defineField({ name: 'altEn', title: 'Alt text (EN)', type: 'string' }),
      ],
    }),
    defineField({
      name: 'thumbnailUrl',
      title: 'Thumbnail URL (locale/legacy)',
      type: 'string',
      description: 'Path immagine locale es. /images/portfolio/... — usato se Sanity image non presente',
    }),
    defineField({
      name: 'thumbnailAltIt',
      title: 'Thumbnail Alt (IT)',
      type: 'string',
    }),
    defineField({
      name: 'thumbnailAltEn',
      title: 'Thumbnail Alt (EN)',
      type: 'string',
    }),
    defineField({
      name: 'thumbnailVideo',
      title: 'Thumbnail Video (MP4 per hover)',
      type: 'file',
      options: { accept: 'video/mp4' },
    }),
    defineField({
      name: 'thumbnailVideoUrl',
      title: 'Thumbnail Video URL (locale/legacy)',
      type: 'string',
      description: 'Path MP4 locale — usato se Sanity file non presente',
    }),
    defineField({
      name: 'heroImage',
      title: 'Immagine Hero (Sanity)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heroImageUrl',
      title: 'Hero Image URL (locale/legacy)',
      type: 'string',
      description: 'Path immagine locale — usato se Sanity image non presente',
    }),
    defineField({
      name: 'tools',
      title: 'Strumenti usati',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    // ── Case study ──
    defineField({ name: 'briefingIt', title: 'Briefing (IT)', type: 'text', rows: 4 }),
    defineField({ name: 'briefingEn', title: 'Briefing (EN)', type: 'text', rows: 4 }),
    defineField({ name: 'challengeIt', title: 'Sfida (IT)', type: 'text', rows: 4 }),
    defineField({ name: 'challengeEn', title: 'Sfida (EN)', type: 'text', rows: 4 }),
    defineField({ name: 'solutionIt', title: 'Soluzione (IT)', type: 'text', rows: 4 }),
    defineField({ name: 'solutionEn', title: 'Soluzione (EN)', type: 'text', rows: 4 }),
    defineField({ name: 'resultIt', title: 'Risultato (IT)', type: 'text', rows: 4 }),
    defineField({ name: 'resultEn', title: 'Risultato (EN)', type: 'text', rows: 4 }),
    // ── Content blocks ──
    defineField({
      name: 'contentBlocks',
      title: 'Blocchi Contenuto',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'textBlock',
          title: 'Testo',
          fields: [
            defineField({ name: 'textIt', title: 'Testo (IT)', type: 'text', rows: 6 }),
            defineField({ name: 'textEn', title: 'Testo (EN)', type: 'text', rows: 6 }),
          ],
          preview: {
            select: { title: 'textIt' },
            prepare: ({ title }) => ({ title: title?.substring(0, 80) || 'Testo', subtitle: 'Blocco testo' }),
          },
        },
        {
          type: 'object',
          name: 'imageBlock',
          title: 'Immagine',
          fields: [
            defineField({ name: 'image', title: 'Immagine (Sanity)', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'imageUrl', title: 'Image URL (locale/legacy)', type: 'string' }),
            defineField({ name: 'altIt', title: 'Alt (IT)', type: 'string' }),
            defineField({ name: 'altEn', title: 'Alt (EN)', type: 'string' }),
            defineField({ name: 'fullWidth', title: 'Full width', type: 'boolean', initialValue: false }),
          ],
          preview: {
            select: { title: 'altIt', media: 'image' },
            prepare: ({ title, media }) => ({ title: title || 'Immagine', subtitle: 'Blocco immagine', media }),
          },
        },
        {
          type: 'object',
          name: 'galleryBlock',
          title: 'Galleria',
          fields: [
            defineField({
              name: 'images',
              title: 'Immagini',
              type: 'array',
              of: [{
                type: 'object',
                fields: [
                  defineField({ name: 'image', title: 'Immagine (Sanity)', type: 'image', options: { hotspot: true } }),
                  defineField({ name: 'imageUrl', title: 'Image URL (locale/legacy)', type: 'string' }),
                  defineField({ name: 'altIt', title: 'Alt (IT)', type: 'string' }),
                  defineField({ name: 'altEn', title: 'Alt (EN)', type: 'string' }),
                ],
              }],
            }),
            defineField({
              name: 'columns',
              title: 'Colonne',
              type: 'number',
              options: { list: [{ title: '2 colonne', value: 2 }, { title: '3 colonne', value: 3 }] },
              initialValue: 2,
            }),
          ],
          preview: {
            select: { images: 'images' },
            prepare: ({ images }) => ({ title: `Galleria (${images?.length || 0} immagini)`, subtitle: 'Blocco galleria' }),
          },
        },
        {
          type: 'object',
          name: 'videoBlock',
          title: 'Video (YouTube/Vimeo)',
          fields: [
            defineField({ name: 'embedId', title: 'Embed ID', type: 'string' }),
            defineField({
              name: 'platform',
              title: 'Piattaforma',
              type: 'string',
              options: { list: [{ title: 'YouTube', value: 'youtube' }, { title: 'Vimeo', value: 'vimeo' }] },
            }),
            defineField({ name: 'title', title: 'Titolo', type: 'string' }),
          ],
          preview: {
            select: { title: 'title', platform: 'platform' },
            prepare: ({ title, platform }) => ({ title: title || 'Video', subtitle: `Video ${platform || ''}` }),
          },
        },
        {
          type: 'object',
          name: 'videoMp4Block',
          title: 'Video MP4',
          fields: [
            defineField({ name: 'video', title: 'File MP4 (Sanity)', type: 'file', options: { accept: 'video/mp4' } }),
            defineField({ name: 'videoUrl', title: 'Video URL (locale/legacy)', type: 'string' }),
            defineField({ name: 'poster', title: 'Poster (Sanity)', type: 'image' }),
            defineField({ name: 'posterUrl', title: 'Poster URL (locale/legacy)', type: 'string' }),
            defineField({ name: 'title', title: 'Titolo', type: 'string' }),
          ],
          preview: {
            select: { title: 'title' },
            prepare: ({ title }) => ({ title: title || 'Video MP4', subtitle: 'Blocco video MP4' }),
          },
        },
        {
          type: 'object',
          name: 'videoLoopBlock',
          title: 'Video Loop (tipo GIF)',
          fields: [
            defineField({ name: 'video', title: 'File MP4 (Sanity)', type: 'file', options: { accept: 'video/mp4' } }),
            defineField({ name: 'videoUrl', title: 'Video URL (locale/legacy)', type: 'string' }),
            defineField({ name: 'poster', title: 'Poster (Sanity)', type: 'image' }),
            defineField({ name: 'posterUrl', title: 'Poster URL (locale/legacy)', type: 'string' }),
            defineField({ name: 'title', title: 'Titolo', type: 'string' }),
          ],
          preview: {
            select: { title: 'title' },
            prepare: ({ title }) => ({ title: title || 'Video Loop', subtitle: 'Blocco video loop' }),
          },
        },
      ],
    }),
    // ── External links ──
    defineField({ name: 'imdbLink', title: 'Link IMDB', type: 'url' }),
    // ── Related services (internal linking) ──
    defineField({
      name: 'relatedServices',
      title: 'Servizi correlati',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'VFX', value: 'vfx' },
          { title: 'Motion Graphics', value: 'motion-graphics' },
          { title: 'Animazione 3D', value: 'animazione-3d' },
          { title: 'Post Produzione', value: 'post-produzione' },
          { title: 'AI Video', value: 'ai-video' },
        ],
      },
    }),
    // ── Legacy images array (for gallery in project detail page) ──
    defineField({
      name: 'legacyImages',
      title: 'Immagini legacy (array URL)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'src', title: 'URL immagine', type: 'string' }),
          defineField({ name: 'altIt', title: 'Alt (IT)', type: 'string' }),
          defineField({ name: 'altEn', title: 'Alt (EN)', type: 'string' }),
        ],
      }],
      description: 'Immagini dal vecchio file projects.ts — migrare a contentBlocks quando possibile',
    }),
    // ── Legacy video fields ──
    defineField({ name: 'videoEmbed', title: 'Video Embed ID (legacy)', type: 'string' }),
    defineField({
      name: 'videoType',
      title: 'Video Type (legacy)',
      type: 'string',
      options: { list: [{ title: 'YouTube', value: 'youtube' }, { title: 'Vimeo', value: 'vimeo' }, { title: 'MP4', value: 'mp4' }] },
    }),
    defineField({ name: 'videoUrl', title: 'Video URL (legacy)', type: 'string' }),
  ],
  orderings: [
    { title: 'Anno (recente)', name: 'yearDesc', by: [{ field: 'year', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'client', media: 'thumbnail' },
  },
});
