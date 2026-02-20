'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/SchemaMarkup';
import { posts, getPost, getPostSlug } from '@/data/posts';
import { notFound } from 'next/navigation';

export default function BlogPostPage({ params }: { params: { locale: string; slug: string } }) {
    const locale = useLocale();
    const isIt = locale === 'it';
    const post = getPost(params.slug);

    if (!post) return notFound();

    const title = isIt ? post.titleIt : post.titleEn;
    const content = isIt ? post.contentIt : post.contentEn;
    const currentSlug = getPostSlug(post, locale);

    // Related posts (same category, excluding current)
    const related = posts
        .filter((p) => p.slug !== post.slug)
        .slice(0, 2);

    return (
        <article>
            {/* Schema Markup */}
            <ArticleSchema
                headline={title}
                description={isIt ? post.excerptIt : post.excerptEn}
                url={`${isIt ? '' : '/en'}/blog/${currentSlug}`}
                datePublished={post.date}
                image={`https://pieroperilli.com${post.thumbnail}`}
                keywords={post.keywordTarget ? post.keywordTarget.split(',').map(k => k.trim()) : undefined}
            />
            <BreadcrumbSchema items={[
                { name: 'Home', url: isIt ? '/' : '/en' },
                { name: 'Blog', url: isIt ? '/blog' : '/en/blog' },
                { name: title, url: `${isIt ? '' : '/en'}/blog/${currentSlug}` },
            ]} />

            {/* Sticky breadcrumb */}
            <div className="sticky top-16 md:top-20 z-40 bg-background/90 backdrop-blur-md border-b border-border/30">
                <div className="section-container py-3">
                    <Link
                        href={isIt ? '/blog' : '/en/blog'}
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-muted hover:text-accent transition-colors"
                    >
                        <ArrowLeft size={14} />
                        {isIt ? 'Torna al blog' : 'Back to blog'}
                    </Link>
                </div>
            </div>

            {/* Hero */}
            <section className="pt-8 pb-6 md:pt-12 md:pb-8 lg:pt-16 lg:pb-12">
                <div className="section-container">
                    <AnimateOnScroll>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                                {isIt ? post.categoryLabel.it : post.categoryLabel.en}
                            </span>
                            <span className="text-xs text-text-muted">
                                {post.readingTime} min {isIt ? 'di lettura' : 'read'}
                            </span>
                        </div>

                        <h1
                            className="font-bold text-text-primary mb-4 max-w-3xl"
                            style={{
                                fontSize: 'clamp(1.75rem, 4.5vw, 3rem)',
                                lineHeight: '1.1',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            {title}
                        </h1>

                        <p className="text-text-secondary text-base md:text-lg max-w-2xl">
                            {isIt ? post.excerptIt : post.excerptEn}
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Featured image */}
            <section className="pb-8 md:pb-12 lg:pb-16">
                <div className="section-container">
                    <AnimateOnScroll>
                        <div className="relative aspect-[21/9] rounded-lg overflow-hidden bg-surface">
                            <Image
                                src={post.thumbnail}
                                alt={isIt ? post.thumbnailAlt.it : post.thumbnailAlt.en}
                                fill
                                className="object-cover"
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Article body */}
            <section className="pb-10 md:pb-16 lg:pb-24">
                <div className="section-container">
                    <div
                        className="max-w-3xl mx-auto prose-custom"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            </section>

            {/* Related posts */}
            {related.length > 0 && (
                <section className="py-8 md:py-12 lg:py-16 border-t border-border">
                    <div className="section-container">
                        <AnimateOnScroll>
                            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-text-primary mb-8">
                                {isIt ? 'Potrebbe interessarti' : 'You might also like'}
                            </h2>
                        </AnimateOnScroll>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {related.map((rel, i) => (
                                <AnimateOnScroll key={rel.slug} delay={i * 80}>
                                    <Link
                                        href={`${isIt ? '' : '/en'}/blog/${getPostSlug(rel, locale)}`}
                                        className="group block"
                                    >
                                        <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-surface mb-4">
                                            <Image
                                                src={rel.thumbnail}
                                                alt={isIt ? rel.thumbnailAlt.it : rel.thumbnailAlt.en}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </div>
                                        <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2 block">
                                            {isIt ? rel.categoryLabel.it : rel.categoryLabel.en}
                                        </span>
                                        <h3 className="text-base font-bold text-text-primary group-hover:text-accent transition-colors">
                                            {isIt ? rel.titleIt : rel.titleEn}
                                        </h3>
                                    </Link>
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="relative py-14 md:py-20 lg:py-28 border-t border-border bg-surface overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,170,68,0.04)_0%,_transparent_60%)]" />
                <div className="relative section-container text-center">
                    <AnimateOnScroll>
                        <h2
                            className="font-bold text-text-primary mb-6"
                            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
                        >
                            {isIt ? 'Hai un progetto in mente?' : 'Have a project in mind?'}
                        </h2>
                        <p className="text-text-secondary max-w-xl mx-auto mb-10 text-sm md:text-base">
                            {isIt
                                ? 'Se questo articolo ti ha dato spunti utili e vuoi capire come applicarli al tuo progetto, raccontami di cosa hai bisogno.'
                                : "If this article gave you useful ideas and you want to understand how to apply them to your project, tell me what you need."}
                        </p>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={100}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href={isIt ? '/contatti' : '/en/contact'} className="btn-primary">
                                {isIt ? 'Parliamone' : "Let\u0027s talk"}
                                <ArrowRight size={16} />
                            </Link>
                            <a href="https://calendly.com/pieroperilli-info/30min" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                                <Calendar size={16} />
                                {isIt ? 'Prenota una call' : 'Book a call'}
                            </a>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>
        </article>
    );
}