import { posts } from '@/data/posts';
import { getPostBySlug } from '@/lib/data';
import { getPageAlternates, getPageOpenGraph } from '@/lib/seo';
import type { Metadata } from 'next';

export function generateStaticParams() {
    // Generate params from static data
    return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }): Promise<Metadata> {
    const post = await getPostBySlug(params.slug);
    if (!post) return {};

    const isIt = params.locale === 'it';

    const ogBase = getPageOpenGraph(`/blog/${post.slug}`, params.locale);

    const seoTitle = `${isIt ? (post.seoTitleIt ?? post.titleIt) : (post.seoTitleEn ?? post.titleEn)} | Piero Perilli`;
    const seoDescription = isIt ? (post.metaDescriptionIt ?? post.excerptIt) : (post.metaDescriptionEn ?? post.excerptEn);
    const image = {
        url: `https://pieroperilli.com${post.thumbnail}`,
        width: 1200,
        height: 630,
        alt: isIt ? post.thumbnailAlt.it : post.thumbnailAlt.en,
    };

    return {
        title: { absolute: seoTitle },
        description: seoDescription,
        alternates: getPageAlternates(`/blog/${post.slug}`, params.locale),
        openGraph: {
            ...ogBase,
            type: 'article',
            title: seoTitle,
            description: seoDescription,
            publishedTime: post.date,
            ...(post.dateModified && { modifiedTime: post.dateModified }),
            images: [image],
        },
        twitter: {
            card: 'summary_large_image',
            title: seoTitle,
            description: seoDescription,
            images: [image.url],
        },
    };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
    return children;
}
