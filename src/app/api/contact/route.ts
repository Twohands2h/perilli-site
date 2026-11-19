import { NextResponse } from 'next/server';

// Simple in-memory rate limiter (resets on deploy/restart — fine for this scale)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5; // max 5 submissions per hour per IP

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimit.get(ip);

    if (!entry || now > entry.resetAt) {
        rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
        return false;
    }

    entry.count++;
    return entry.count > RATE_LIMIT_MAX;
}

// Basic HTML sanitization to prevent injection in email body
function sanitize(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// Confirmation email template for the visitor — light theme, Gmail-friendly
function getConfirmationEmailHtml(name: string): string {
    const firstName = sanitize(name.split(' ')[0]);
    return `
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #ffffff; font-family: Arial, Helvetica, sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="520" style="max-width: 520px;">
          
          <!-- Logo -->
          <tr>
            <td align="left" style="padding-bottom: 24px;">
              <img src="https://pieroperilli.com/images/PieroLogo.png" alt="PIERO." width="100" style="display: block; border: 0;" />
            </td>
          </tr>

          <!-- Divider top -->
          <tr>
            <td style="border-top: 2px solid #f5aa44; padding-top: 28px;">
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding-bottom: 20px;">
              <p style="margin: 0; font-size: 18px; font-weight: 700; color: #111111; line-height: 1.3;">
                Ciao ${firstName},
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding-bottom: 14px;">
              <p style="margin: 0; font-size: 15px; color: #444444; line-height: 1.6;">
                grazie per avermi contattato. Ho ricevuto il tuo messaggio e ti risponder&ograve; il prima possibile.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding-bottom: 28px;">
              <p style="margin: 0; font-size: 15px; color: #444444; line-height: 1.6;">
                Nel frattempo, puoi dare un'occhiata al mio portfolio e ai miei lavori recenti.
              </p>
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td align="left" style="padding-bottom: 36px;">
              <a href="https://pieroperilli.com/portfolio" 
                 style="display: inline-block; background-color: #f5aa44; color: #ffffff; font-size: 13px; font-weight: 700; text-decoration: none; padding: 12px 28px; letter-spacing: 0.5px;">
                VEDI IL PORTFOLIO
              </a>
            </td>
          </tr>

          <!-- Divider bottom -->
          <tr>
            <td style="border-top: 1px solid #e0e0e0; padding-top: 20px;">
            </td>
          </tr>

          <!-- Minimal signature -->
          <tr>
            <td>
              <p style="margin: 0; font-size: 13px; color: #111111; line-height: 1.6;">
                <strong>Piero Perilli</strong><br>
                <span style="color: #666666;">VFX Artist & Post Produzione Video</span><br>
                <a href="https://pieroperilli.com" style="color: #f5aa44; text-decoration: none;">pieroperilli.com</a>
                &nbsp;&middot;&nbsp;
                <span style="color: #666666;">+39 392 018 7759</span>
                &nbsp;&middot;&nbsp;
                <span style="color: #666666;">Roma</span>
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding-top: 6px;">
              <p style="margin: 0; font-size: 10px; color: #999999; letter-spacing: 0.3px;">
                VFX&nbsp;&nbsp;&middot;&nbsp;&nbsp;Motion Graphics&nbsp;&nbsp;&middot;&nbsp;&nbsp;Color Grading&nbsp;&nbsp;&middot;&nbsp;&nbsp;Animazione 3D&nbsp;&nbsp;&middot;&nbsp;&nbsp;AI Video
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ── GA4: la richiesta viene contata dal server (Measurement Protocol) ─────────
// Così ogni contatto arriva in Analytics come evento generate_lead, anche quando il visitatore
// non ha accettato i cookie. Senza consenso l'evento è anonimo: id casuale, nessun dato personale,
// solo la pagina e il tipo di progetto. Con il consenso viene collegato alla visita (cookie _ga),
// e Analytics sa da quale canale è arrivato il contatto.
// Richiede la variabile GA_API_SECRET su Vercel; se manca, non fa nulla.
function parseCookies(header: string | null): Record<string, string> {
    const out: Record<string, string> = {};
    if (!header) return out;
    for (const part of header.split(';')) {
        const i = part.indexOf('=');
        if (i > 0) out[part.slice(0, i).trim()] = decodeURIComponent(part.slice(i + 1).trim());
    }
    return out;
}

function parseSessionId(value?: string): string | undefined {
    if (!value) return undefined;
    // Formato nuovo: GS2.1.s1700000000$o5$g1$t1700000500...
    const gs2 = value.match(/^GS2\.\d+\.s(\d+)/);
    if (gs2) return gs2[1];
    // Formato precedente: GS1.1.1700000000.5.1.1700000500.0.0.0
    const parts = value.split('.');
    return parts.length > 2 && /^\d+$/.test(parts[2]) ? parts[2] : undefined;
}

async function sendLeadToGA(request: Request, projectType?: string): Promise<void> {
    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    const apiSecret = process.env.GA_API_SECRET;
    if (!measurementId || !apiSecret || measurementId === 'G-XXXXXXXXXX') return;

    const cookies = parseCookies(request.headers.get('cookie'));
    const consented = cookies['pp_consent'] === 'true';
    const gaCookie = consented ? cookies['_ga'] : undefined; // GA1.1.123456789.1700000000
    const clientId = gaCookie?.split('.').slice(-2).join('.')
        || `${Math.floor(Math.random() * 2147483647)}.${Math.floor(Date.now() / 1000)}`;
    const sessionId = consented ? parseSessionId(cookies[`_ga_${measurementId.replace(/^G-/, '')}`]) : undefined;

    const referer = request.headers.get('referer') || '';
    const params: Record<string, string | number> = {
        form_name: 'contact',
        consent_state: consented ? 'granted' : 'anonymous',
        language: referer.includes('/en/') ? 'en' : 'it',
        engagement_time_msec: 1,
    };
    if (projectType) params.project_type = String(projectType).slice(0, 100);
    if (sessionId) params.session_id = sessionId;
    if (referer.startsWith('https://pieroperilli.com/')) params.page_location = referer.split('?')[0];

    try {
        await fetch(
            `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`,
            {
                method: 'POST',
                body: JSON.stringify({
                    client_id: clientId,
                    non_personalized_ads: true,
                    events: [{ name: 'generate_lead', params }],
                }),
                signal: AbortSignal.timeout(2500),
            },
        );
    } catch (gaErr) {
        // Analytics non deve mai bloccare l'invio del contatto
        console.error('GA4 lead event error:', gaErr);
    }
}

export async function POST(request: Request) {
    // Rate limit by IP
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded?.split(',')[0]?.trim() || 'unknown';

    if (isRateLimited(ip)) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const body = await request.json();
    const { name, email, message, projectType, _hp } = body;

    // Honeypot check — if filled, it's a bot
    if (_hp) {
        // Return 200 so bot thinks it succeeded, but don't send anything
        return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Basic validation
    if (name.length > 200 || email.length > 200 || message.length > 5000) {
        return NextResponse.json({ error: 'Fields too long' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    // If Resend is not configured, return 503 so frontend falls back to mailto
    if (!RESEND_API_KEY) {
        return NextResponse.json({ error: 'Email service not configured' }, { status: 503 });
    }

    try {
        // 1. Send notification to Piero
        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'Piero Perilli <noreply@pieroperilli.com>',
                to: ['info@pieroperilli.com'],
                reply_to: email,
                subject: `Nuovo contatto dal sito: ${sanitize(name)}`,
                html: `
          <h2>Nuovo messaggio dal sito</h2>
          <p><strong>Nome:</strong> ${sanitize(name)}</p>
          <p><strong>Email:</strong> ${sanitize(email)}</p>
          ${projectType ? `<p><strong>Tipo progetto:</strong> ${sanitize(projectType)}</p>` : ''}
          <p><strong>Messaggio:</strong></p>
          <p>${sanitize(message).replace(/\n/g, '<br>')}</p>
        `,
            }),
        });

        if (!res.ok) {
            const error = await res.json();
            console.error('Resend error:', error);
            return NextResponse.json({ error: 'Send failed' }, { status: 500 });
        }

        // Contatto arrivato: lo conto in Analytics (non blocca nulla se fallisce)
        await sendLeadToGA(request, projectType);

        // 2. Send confirmation email to visitor (fire-and-forget, don't block on failure)
        try {
            await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${RESEND_API_KEY}`,
                },
                body: JSON.stringify({
                    from: 'Piero Perilli <noreply@pieroperilli.com>',
                    to: [email],
                    reply_to: 'info@pieroperilli.com',
                    subject: 'Grazie per avermi contattato — Piero Perilli',
                    html: getConfirmationEmailHtml(name),
                }),
            });
        } catch (confirmErr) {
            // Log but don't fail the whole request if confirmation email fails
            console.error('Confirmation email error:', confirmErr);
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Contact form error:', err);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}