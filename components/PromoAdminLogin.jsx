"use client";

import { useState } from 'react';

export default function PromoAdminLogin({ onSuccessUrl = '/admin' }) {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/promos/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || 'Login failed');
      }
      // On success, reload to let server render the admin UI
      window.location.href = onSuccessUrl;
    } catch (err) {
      setError(err.message || 'Login failed');
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-black/60 rounded-md">
      <h2 className="text-xl font-semibold mb-3">Promo Admin Login</h2>
      <form onSubmit={submit} className="flex flex-col gap-3">
        <input
          type="password"
          placeholder="Admin token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="p-2 rounded bg-white/5 border border-white/10"
        />
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-yellow-400 text-black rounded" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </div>
        {error && <div className="text-red-400">{error}</div>}
      </form>
    </div>
  );
}
