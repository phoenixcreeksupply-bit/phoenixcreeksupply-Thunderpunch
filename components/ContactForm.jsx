"use client";

import { useState, useEffect, useRef } from 'react';

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';
const HCAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || '';

function loadScript(src, id) {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) return resolve();
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.defer = true;
    s.id = id;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('failed to load ' + src));
    document.head.appendChild(s);
  });
}

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [hp, setHp] = useState(''); // honeypot field — should remain empty
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    // load reCAPTCHA v3 if configured
    if (RECAPTCHA_SITE_KEY) {
      const src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      loadScript(src, 'recaptcha-api').catch(err => console.warn('recaptcha load failed', err));
    } else if (HCAPTCHA_SITE_KEY) {
      const src = 'https://js.hcaptcha.com/1/api.js';
      loadScript(src, 'hcaptcha-api').catch(err => console.warn('hcaptcha load failed', err));
    }
    return () => {
      mounted.current = false;
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      let token = null;
      let provider = null;

      if (RECAPTCHA_SITE_KEY && window.grecaptcha && window.grecaptcha.execute) {
        provider = 'recaptcha';
        await window.grecaptcha.ready();
        token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact' });
      } else if (HCAPTCHA_SITE_KEY && window.hcaptcha && window.hcaptcha.execute) {
        provider = 'hcaptcha';
        // hCaptcha usually requires a widget; if execute exists use it
        try {
          token = await window.hcaptcha.execute();
        } catch (err) {
          console.warn('hcaptcha execute failed', err);
        }
      }

  const payload = { name, email, message, captchaToken: token, captchaProvider: provider, hp };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (!res.ok || !json.ok) {
        // tailored user-friendly messages for common server responses
        if (res.status === 429) {
          if (mounted.current) setError('Too many submissions from your IP — please try again later.');
          return;
        }

        const err = (json && json.error) ? json.error.toString().toLowerCase() : '';
        if (err.includes('spam') || err.includes('honeypot')) {
          if (mounted.current) setError('Submission blocked as spam. If you believe this is an error, contact clarity@phoenixcreeksupply.com.');
          return;
        }

        if (err.includes('captcha')) {
          if (mounted.current) setError('CAPTCHA verification failed or missing. Please try again.');
          return;
        }

        if (mounted.current) setError(json.error || 'Submission failed');
        return;
      }

      if (mounted.current) {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (err) {
      console.error('contact submit error', err);
      if (mounted.current) setError(err.message || String(err));
    } finally {
      if (mounted.current) setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      {/* honeypot field — visually hidden but present in DOM. Real users won't fill this. */}
      <label style={{ display: 'none' }} aria-hidden>
        <input
          type="text"
          name="hp"
          value={hp}
          onChange={e => setHp(e.target.value)}
          autoComplete="off"
          tabIndex={-1}
        />
      </label>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={name}
        onChange={e => setName(e.target.value)}
        className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-neutral-200 focus:border-amber-500 focus:outline-none"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-neutral-200 focus:border-amber-500 focus:outline-none"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        required
        value={message}
        onChange={e => setMessage(e.target.value)}
        className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-neutral-200 focus:border-amber-500 focus:outline-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-amber-500 hover:bg-amber-600 text-neutral-900 font-semibold py-3 rounded-lg transition duration-300 disabled:opacity-60"
      >
        {loading ? 'Sending…' : 'Send Message'}
      </button>

      {success && <p className="text-center text-green-400">Message sent — thank you.</p>}
      {error && <p className="text-center text-rose-400">{error}</p>}

      {!RECAPTCHA_SITE_KEY && !HCAPTCHA_SITE_KEY && (
        <p className="text-xs text-neutral-500">Note: CAPTCHA not configured. Set NEXT_PUBLIC_RECAPTCHA_SITE_KEY or NEXT_PUBLIC_HCAPTCHA_SITE_KEY in env.</p>
      )}
    </form>
  );
}
