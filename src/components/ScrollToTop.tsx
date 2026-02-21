'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full
                 bg-surface/80 backdrop-blur-sm border border-border/50
                 flex items-center justify-center
                 text-text-muted hover:text-accent hover:border-accent/30
                 transition-all duration-300
                 opacity-0 translate-y-2 animate-fade-in
                 shadow-lg shadow-black/20"
      aria-label="Scroll to top"
    >
      <ChevronUp size={18} />
    </button>
  );
}
