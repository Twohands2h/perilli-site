import { NextResponse } from 'next/server';
import sitemap from '@/app/sitemap';

// IndexNow: avvisa Bing (e gli altri motori che lo usano) delle pagine nuove o modificate.
// Lo chiama ogni mattina il cron di Vercel (vercel.json). Segnala solo gli URL della sitemap con
// un lastmod nelle ultime 48 ore: articoli (date / dateModified) e pagine in src/data/lastModified.ts.
// Prova senza inviare nulla: /api/indexnow?dry=1 (aggiungere &hours=720 per vedere l'ultimo mese).
// Google non usa IndexNow: per Google restano sitemap e Search Console.

export const dynamic = 'force-dynamic';

const HOST = 'pieroperilli.com';
const KEY = '110ba79e2e85c790ca1ed6ec954f4542'; // stesso valore del file public/110ba79e2e85c790ca1ed6ec954f4542.txt
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const DEFAULT_HOURS = 48;

function authorized(request: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (secret) return request.headers.get('authorization') === `Bearer ${secret}`;
  return (request.headers.get('user-agent') || '').includes('vercel-cron');
}

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const dryRun = params.get('dry') === '1';
  const requested = Number(params.get('hours'));
  const hours = Number.isFinite(requested) && requested > 0 ? Math.min(requested, 24 * 30) : DEFAULT_HOURS;

  if (!dryRun && !authorized(request)) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const now = Date.now();
  const since = now - hours * 60 * 60 * 1000;
  const urlList = sitemap()
    .filter((entry) => {
      if (!entry.lastModified) return false;
      const t = new Date(entry.lastModified).getTime();
      return t >= since && t <= now;
    })
    .map((entry) => entry.url);

  if (dryRun || urlList.length === 0) {
    return NextResponse.json({ dryRun, hours, submitted: 0, urlList });
  }

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
      signal: AbortSignal.timeout(10000),
    });
    return NextResponse.json({ status: res.status, submitted: urlList.length, urlList }, { status: res.ok ? 200 : 502 });
  } catch (err) {
    console.error('IndexNow error:', err);
    return NextResponse.json({ error: 'indexnow_unreachable', urlList }, { status: 502 });
  }
}
