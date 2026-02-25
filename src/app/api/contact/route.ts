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