import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'zygggq8k',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

// Default revalidation: re-fetch from Sanity every 60 seconds
export const SANITY_REVALIDATE = 60;
