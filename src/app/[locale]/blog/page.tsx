import { unstable_setRequestLocale } from 'next-intl/server';
import { BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { getAllPosts } from '@/lib/data';
import BlogList from '@/components/blog/BlogList';

export default async function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const posts = await getAllPosts();

  const isIt = locale === 'it';

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: isIt ? '/' : '/en' },
        { name: 'Blog', url: isIt ? '/blog' : '/en/blog' },
      ]} />
      <BlogList posts={posts} />
    </>
  );
}
