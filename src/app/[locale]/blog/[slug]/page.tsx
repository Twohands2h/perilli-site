import { unstable_setRequestLocale } from 'next-intl/server';
import { getAllPosts, getPostBySlug } from '@/lib/data';
import BlogPostView from '@/components/blog/BlogPostView';
import { notFound } from 'next/navigation';

export default async function BlogPostPage({ params: { locale, slug } }: { params: { locale: string; slug: string } }) {
  unstable_setRequestLocale(locale);

  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  const allPosts = await getAllPosts();
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return <BlogPostView post={post} related={related} />;
}
