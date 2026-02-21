import { client, SANITY_REVALIDATE } from './client';

// ── TESTIMONIALS ────────────────────────────────────────────
export interface SanityTestimonial {
  _id: string;
  name: string;
  role: string;
  quoteIt: string;
  quoteEn: string;
  featured: boolean;
  order: number;
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  return client.fetch(
    `*[_type == "testimonial" && featured == true] | order(order asc) {
      _id, name, role, quoteIt, quoteEn, featured, order
    }`,
    {},
    { next: { revalidate: SANITY_REVALIDATE } }
  );
}
