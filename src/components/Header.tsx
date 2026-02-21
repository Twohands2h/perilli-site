'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { getAltLocaleHref } from '@/lib/routes';

const navItems = [
  { key: 'about', href: { it: '/chi-sono', en: '/en/about' } },
  { key: 'vfx', href: { it: '/vfx', en: '/en/vfx' } },
  { key: 'motion', href: { it: '/motion-graphics', en: '/en/motion-graphics' } },
  { key: 'animation3d', href: { it: '/animazione-3d', en: '/en/3d-animation' } },
  { key: 'postproduction', href: { it: '/post-produzione', en: '/en/post-production' } },
  { key: 'aivideo', href: { it: '/ai-video', en: '/en/ai-video' } },
  { key: 'portfolio', href: { it: '/portfolio', en: '/en/portfolio' } },
  { key: 'blog', href: { it: '/blog', en: '/en/blog' } },
] as const;

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const altLocale = locale === 'it' ? 'en' : 'it';
  const altLocaleHref = getAltLocaleHref(pathname, locale);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href={locale === 'it' ? '/' : '/en'} className="relative z-50">
          <Image
            src="/images/logo-white.png"
            alt="PIERO."
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const href = item.href[locale as 'it' | 'en'];
            const isActive = pathname === href || pathname.startsWith(href + '/');
            return (
              <Link
                key={item.key}
                href={href}
                className={`px-3 py-2 text-xs font-medium uppercase tracking-wider
                           transition-colors duration-300
                           ${isActive ? 'text-accent' : 'text-text-secondary hover:text-text-primary'}`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        {/* Right side: Language + CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          {/* Language Switch */}
          <Link
            href={altLocaleHref}
            className="flex items-center gap-1.5 px-2 py-1.5 text-xs font-medium uppercase tracking-wider
                       text-text-muted transition-colors duration-300 hover:text-text-primary"
          >
            <Globe size={14} />
            {altLocale.toUpperCase()}
          </Link>

          {/* CTA Desktop */}
          <Link
            href={locale === 'it' ? '/contatti' : '/en/contact'}
            className="hidden md:inline-flex btn-primary text-xs py-2.5 px-5"
          >
            {t('contact')}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav className="lg:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-lg z-40">
          <div className="section-container py-8 flex flex-col gap-1">
            {navItems.map((item) => {
              const href = item.href[locale as 'it' | 'en'];
              const isActive = pathname === href || pathname.startsWith(href + '/');
              return (
                <Link
                  key={item.key}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 text-lg font-medium
                             transition-colors duration-300
                             border-b border-border/30
                             ${isActive ? 'text-accent' : 'text-text-secondary hover:text-text-primary'}`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
            <Link
              href={locale === 'it' ? '/contatti' : '/en/contact'}
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-6 justify-center"
            >
              {t('contact')}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}