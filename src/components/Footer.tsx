import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  const isIt = locale === 'it';

  const navLinks = [
    { label: tNav('about'), href: isIt ? '/chi-sono' : '/en/about' },
    { label: tNav('portfolio'), href: isIt ? '/portfolio' : '/en/portfolio' },
    { label: tNav('blog'), href: isIt ? '/blog' : '/en/blog' },
    { label: tNav('contact'), href: isIt ? '/contatti' : '/en/contact' },
  ];

  const serviceLinks = [
    { label: tNav('vfx'), href: isIt ? '/vfx' : '/en/vfx' },
    { label: tNav('motion'), href: isIt ? '/motion-graphics' : '/en/motion-graphics' },
    { label: tNav('postproduction'), href: isIt ? '/post-produzione' : '/en/post-production' },
    { label: tNav('animation3d'), href: isIt ? '/animazione-3d' : '/en/3d-animation' },
    { label: tNav('aivideo'), href: isIt ? '/ai-video' : '/en/ai-video' },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <div className="section-container py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href={isIt ? '/' : '/en'} className="inline-block mb-4">
              <Image
                src="/images/logo-white.png"
                alt="PIERO."
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-text-muted leading-relaxed">
              {t('tagline')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-text-secondary mb-4">
              {t('navigation')}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition-colors duration-300 hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-text-secondary mb-4">
              {t('services')}
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition-colors duration-300 hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-text-secondary mb-4">
              {t('contacts')}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@pieroperilli.com"
                  className="flex items-center gap-2 text-sm text-text-muted transition-colors duration-300 hover:text-accent"
                >
                  <Mail size={14} className="shrink-0" />
                  info@pieroperilli.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+393920187759"
                  className="flex items-center gap-2 text-sm text-text-muted transition-colors duration-300 hover:text-accent"
                >
                  <Phone size={14} className="shrink-0" />
                  +39 392 018 7759
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-text-muted">
                  <MapPin size={14} className="shrink-0" />
                  Roma, Italia
                </span>
              </li>
            </ul>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.imdb.com/it/name/nm3859505/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-wider text-accent/70 transition-colors duration-300 hover:text-accent"
                title="IMDB"
              >
                IMDB
              </a>
              <span className="text-border">·</span>
              <a
                href="https://www.linkedin.com/in/piero-perilli-26b26658/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium uppercase tracking-wider text-text-muted/50 transition-colors duration-300 hover:text-text-secondary"
                title="LinkedIn"
              >
                LinkedIn
              </a>
              <span className="text-border">·</span>
              <a
                href="https://www.instagram.com/pieroperilli/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium uppercase tracking-wider text-text-muted/50 transition-colors duration-300 hover:text-text-secondary"
                title="Instagram"
              >
                Instagram
              </a>
              <span className="text-border">·</span>
              <a
                href="https://www.behance.net/pieroperilli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium uppercase tracking-wider text-text-muted/50 transition-colors duration-300 hover:text-text-secondary"
                title="Behance"
              >
                Behance
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider mt-8 md:mt-12 mb-4 md:mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <span>
            © {new Date().getFullYear()} Piero Perilli. {t('rights')}
          </span>
          <div className="flex items-center gap-4">
            <span>{t('vat')} IT10343871009</span>
            <Link
              href={isIt ? '/privacy' : '/en/privacy'}
              className="transition-colors hover:text-text-secondary"
            >
              {t('privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}