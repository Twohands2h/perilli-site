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

    return {
        title: `${isIt ? post.titleIt : post.titleEn} | Piero Perilli`,
        description: isIt ? post.excerptIt : post.excerptEn,
        alternates: getPageAlternates(`/blog/${post.slug}`, params.locale),
        openGraph: {
            ...ogBase,
            type: 'article',
            images: [
                {
                    url: `https://pieroperilli.com${post.thumbnail}`,
                    width: 1200,
                    height: 630,
                    alt: isIt ? post.thumbnailAlt.it : post.thumbnailAlt.en,
                },
            ],
        },
    };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
    return children;
}
