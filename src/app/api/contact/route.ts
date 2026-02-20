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

export async function POST(request: Request) {
    // Rate limit by IP
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded?.split(',')[0]?.trim() || 'unknown';

    if (isRateLimited(ip)) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const body = await request.json();
    const { name, email, message, _hp } = body;

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
          <p><strong>Messaggio:</strong></p>
          <p>${sanitize(message).replace(/\n/g, '<br>')}</p>
        `,
            }),
        });

        if (res.ok) {
            return NextResponse.json({ success: true });
        } else {
            const error = await res.json();
            console.error('Resend error:', error);
            return NextResponse.json({ error: 'Send failed' }, { status: 500 });
        }
    } catch (err) {
        console.error('Contact form error:', err);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
