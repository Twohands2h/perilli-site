import { unstable_setRequestLocale } from 'next-intl/server';
import { getAllPosts } from '@/lib/data';
import BlogList from '@/components/blog/BlogList';

export default async function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const posts = await getAllPosts();

  return <BlogList posts={posts} />;
}
