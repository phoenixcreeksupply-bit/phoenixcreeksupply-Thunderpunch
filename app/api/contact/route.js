import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiter map: { ip -> { count, firstSeen } }
// NOTE: this is per-server-process and resets on restart. For production-scale
// use a shared store (Redis) if you need clustered rate limiting.
const RATE_LIMIT_MAP = new Map();
const RATE_LIMIT_MAX = 5; // max submissions
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function getIpFromReq(req) {
  const xf = req.headers.get('x-forwarded-for');
  if (xf) return xf.split(',')[0].trim();
  // Next.js doesn't expose remoteAddress here; fallback
  return 'unknown';
}

// POST /api/contact
export async function POST(req) {
  try {
    const contentType = req.headers.get('content-type') || '';
    let body = {};

    if (contentType.includes('application/json')) {
      body = await req.json();
    } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('text/plain')) {
      const text = await req.text();
      // attempt to parse urlencoded form
      try {
        const params = new URLSearchParams(text);
        for (const [k, v] of params.entries()) body[k] = v;
      } catch (e) {
        // fallback: treat as plain text message
        body.message = text;
      }
    } else {
      // fallback to trying json
      try {
        body = await req.json();
      } catch (e) {
        body = {};
      }
    }

    const name = (body.name || '').toString().trim();
    const email = (body.email || '').toString().trim();
    const message = (body.message || '').toString().trim();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'name, email and message are required' }, { status: 400 });
    }

    // Read SMTP/SendGrid config from env vars
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || '';
    // default to both clarity and support if env not provided
    const CONTACT_TO = process.env.CONTACT_TO_EMAIL || 'clarity@phoenixcreeksupply.com,support@phoenixcreeksupply.com';

    // If neither SendGrid nor SMTP are configured, sending will fail later. We don't hard-fail
    // here so captcha verification can still be toggled independently.

  // CAPTCHA enforcement: allow disabling via DISABLE_CAPTCHA env var
  const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY || '';
  const HCAPTCHA_SECRET = process.env.HCAPTCHA_SECRET || '';
  const DISABLE_CAPTCHA = (process.env.DISABLE_CAPTCHA || 'false').toLowerCase() === 'true';
  const requireCaptcha = !DISABLE_CAPTCHA && !!(RECAPTCHA_SECRET || HCAPTCHA_SECRET);

    const token = (body.captchaToken || '').toString();
    const provider = (body.captchaProvider || '').toString();

    if (requireCaptcha) {
      if (!token) {
        return NextResponse.json({ ok: false, error: 'captcha required' }, { status: 400 });
      }

      let verified = false;

      if (provider === 'recaptcha' && RECAPTCHA_SECRET) {
        // verify with Google
        const params = new URLSearchParams();
        params.append('secret', RECAPTCHA_SECRET);
        params.append('response', token);
        const r = await fetch('https://www.google.com/recaptcha/api/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: params.toString(),
        });
        const j = await r.json();
        // require success and reasonable score (if provided)
        if (j.success && (j.score === undefined || j.score >= 0.4)) verified = true;
      } else if (provider === 'hcaptcha' && HCAPTCHA_SECRET) {
        const params = new URLSearchParams();
        params.append('secret', HCAPTCHA_SECRET);
        params.append('response', token);
        const r = await fetch('https://hcaptcha.com/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: params.toString(),
        });
        const j = await r.json();
        if (j.success) verified = true;
      }

      if (!verified) {
        return NextResponse.json({ ok: false, error: 'captcha verification failed' }, { status: 400 });
      }
    }

    // Honeypot check (simple): if the hidden 'hp' field is filled, treat as spam
    const honeypot = (body.hp || '').toString().trim();
    if (honeypot) {
      return NextResponse.json({ ok: false, error: 'spam detected' }, { status: 400 });
    }

    // Rate limiting by IP (simple, in-memory)
    const ip = getIpFromReq(req) || 'unknown';
    const now = Date.now();
    const entry = RATE_LIMIT_MAP.get(ip) || { count: 0, firstSeen: now };
    if (now - entry.firstSeen > RATE_LIMIT_WINDOW_MS) {
      // reset window
      entry.count = 0;
      entry.firstSeen = now;
    }
    entry.count += 1;
    RATE_LIMIT_MAP.set(ip, entry);
    if (entry.count > RATE_LIMIT_MAX) {
      return NextResponse.json({ ok: false, error: 'rate limit exceeded' }, { status: 429 });
    }

    let transporter = null;
    if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS) {
      transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: parseInt(SMTP_PORT, 10),
        secure: Number(SMTP_PORT) === 465, // true for 465, false for other ports
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });
    }
    const mailHtml = `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><hr/><p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>`;
    const mailText = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    if (SENDGRID_API_KEY) {
      // Send via SendGrid API
      const sgPayload = {
        personalizations: [
          {
            to: [{ email: CONTACT_TO }],
            subject: `Contact form submission — ${name}`,
          },
        ],
        from: { email: email, name: name },
        content: [
          { type: 'text/plain', value: mailText },
          { type: 'text/html', value: mailHtml },
        ],
      };

      const sgRes = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sgPayload),
      });

      if (!sgRes.ok) {
        const body = await sgRes.text();
        console.error('SendGrid send failed', sgRes.status, body);
        return NextResponse.json({ ok: false, error: 'failed to send email (SendGrid)' }, { status: 500 });
      }
    } else if (transporter) {
      const mailOptions = {
        from: `${name} <${email}>`,
        to: CONTACT_TO,
        subject: `Contact form submission — ${name}`,
        text: mailText,
        html: mailHtml,
      };

      await transporter.sendMail(mailOptions);
    } else {
      // No sending provider configured (neither SendGrid nor SMTP)
      console.error('No email provider configured: set SENDGRID_API_KEY or SMTP_* env vars');
      return NextResponse.json({ ok: false, error: 'email provider not configured' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('contact API error', err);
    return NextResponse.json({ ok: false, error: String(err.message || err) }, { status: 500 });
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
