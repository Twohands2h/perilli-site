import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
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
                from: 'Sito Web <noreply@pieroperilli.com>',
                to: ['info@pieroperilli.com'],
                reply_to: email,
                subject: `Nuovo contatto dal sito: ${name}`,
                html: `
          <h2>Nuovo messaggio dal sito</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Messaggio:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
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