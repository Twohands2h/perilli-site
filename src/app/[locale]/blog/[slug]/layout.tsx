import { posts, getPost } from '@/data/posts';
import type { Metadata } from 'next';

export function generateStaticParams() {
    return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { locale: string; slug: string } }): Metadata {
    const post = getPost(params.slug);
    if (!post) return {};

    const isIt = params.locale === 'it';

    return {
        title: `${isIt ? post.titleIt : post.titleEn} | Piero Perilli`,
        description: isIt ? post.excerptIt : post.excerptEn,
    };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
    return children;
}