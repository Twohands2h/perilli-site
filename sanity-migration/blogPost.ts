import { defineType, defineField } from 'sanity';

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Articolo Blog',
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
      title: 'Slug URL (IT)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slugEn',
      title: 'Slug URL (EN)',
      type: 'slug',
      options: { source: 'titleEn', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Estratto (IT)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerptEn',
      title: 'Estratto (EN)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Data pubblicazione',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'draft',
      title: 'Bozza (non pubblicato)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'readingTime',
      title: 'Tempo di lettura (minuti)',
      type: 'number',
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'VFX', value: 'vfx' },
          { title: 'AI & VFX', value: 'ai' },
          { title: 'Color Grading', value: 'color' },
          { title: 'Motion Graphics', value: 'motion' },
          { title: 'Post Produzione', value: 'post' },
          { title: 'Animazione 3D', value: 'animation' },
          { title: 'Tutorial', value: 'tutorial' },
        ],
      },
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
      name: 'keywordTarget',
      title: 'Keyword Target SEO',
      type: 'string',
      description: 'La keyword principale per cui questo articolo è ottimizzato',
    }),
    // ── Image: Sanity asset OR local URL ──
    defineField({
      name: 'thumbnail',
      title: 'Immagine thumbnail (Sanity)',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'altIt', title: 'Alt (IT)', type: 'string' }),
        defineField({ name: 'altEn', title: 'Alt (EN)', type: 'string' }),
      ],
    }),
    defineField({
      name: 'thumbnailUrl',
      title: 'Thumbnail URL (locale/legacy)',
      type: 'string',
      description: 'Path immagine locale es. /images/blog/... — usato se Sanity image non presente',
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
    // ── Content ──
    defineField({
      name: 'contentIt',
      title: 'Contenuto (IT)',
      type: 'text',
      rows: 30,
      description: 'HTML del contenuto italiano',
    }),
    defineField({
      name: 'contentEn',
      title: 'Contenuto (EN)',
      type: 'text',
      rows: 30,
      description: 'HTML del contenuto inglese',
    }),
  ],
  orderings: [
    { title: 'Data (recente)', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'date', media: 'thumbnail' },
  },
});
