'use client';

import { trackEvent } from './AnalyticsScripts';

interface TrackedLinkProps {
  href: string;
  eventName: string;
  eventParams?: Record<string, string>;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export default function TrackedLink({
  href,
  eventName,
  eventParams,
  children,
  className,
  target,
  rel,
}: TrackedLinkProps) {
  const handleClick = () => {
    trackEvent(eventName, eventParams);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}
