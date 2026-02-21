'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ faqs, title }: { faqs: FAQItem[]; title: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24">
      <div className="section-container max-w-text">
        <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-8">
          {title}
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden transition-colors hover:border-accent/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-4 md:p-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="speakable text-sm md:text-base font-medium text-text-primary">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`shrink-0 w-5 h-5 text-text-muted transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-accent' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="speakable px-4 md:px-5 pb-4 md:pb-5 text-sm text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
