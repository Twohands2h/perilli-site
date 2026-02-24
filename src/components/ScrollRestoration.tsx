'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Saves scroll position for:
 * 1. List pages (portfolio, blog) → detail page navigation
 * 2. Language switch → preserves scroll position across locale change
 */
const LIST_PAGES = ['/portfolio', '/en/portfolio', '/blog', '/en/blog'];

export default function ScrollRestoration() {
  const pathname = usePathname();

  // Restore scroll after language switch
  useEffect(() => {
    const saved = sessionStorage.getItem('lang-switch-scroll');
    if (saved) {
      const timer = setTimeout(() => {
        window.scrollTo(0, parseInt(saved, 10));
        sessionStorage.removeItem('lang-switch-scroll');
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  useEffect(() => {
    // On mount: if this is a list page and we have a saved position, restore it
    const isListPage = LIST_PAGES.includes(pathname);

    if (isListPage) {
      const saved = sessionStorage.getItem(`scroll:${pathname}`);
      if (saved) {
        // Small delay to let the page render and hydrate
        const timer = setTimeout(() => {
          window.scrollTo(0, parseInt(saved, 10));
          sessionStorage.removeItem(`scroll:${pathname}`);
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  useEffect(() => {
    // Before navigating away from a list page, save scroll position
    const isListPage = LIST_PAGES.includes(pathname);

    if (!isListPage) return;

    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href) return;

      // Only save if navigating to a detail page (portfolio/slug or blog/slug)
      const isDetailNav =
        (pathname.includes('portfolio') && href.includes('portfolio/')) ||
        (pathname.includes('blog') && href.includes('blog/'));

      if (isDetailNav) {
        sessionStorage.setItem(`scroll:${pathname}`, String(window.scrollY));
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [pathname]);

  return null;
}
