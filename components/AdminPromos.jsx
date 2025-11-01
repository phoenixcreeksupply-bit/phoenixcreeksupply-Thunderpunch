"use client";

import { useState, useEffect } from 'react';

export default function AdminPromos() {
  const [prefs, setPrefs] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetch('/api/affiliate-preferences')
      .then(r => r.json())
      .then(data => {
        setPrefs(data || {});
        setLoading(false);
      })
      .catch(e => {
        setError('Failed to load preferences');
        setLoading(false);
      });
  }, []);

  function updateSlug(slug, href) {
    setPrefs(p => ({ ...p, [slug]: href }));
  }

  async function save() {
    setSaving(true);
    setError(null);
    try {
      const headers = { 'Content-Type': 'application/json' };
      if (password) headers['x-admin-password'] = password;
      const res = await fetch('/api/affiliate-preferences', {
        method: 'POST',
        headers,
        body: JSON.stringify(prefs),
      });
      if (!res.ok) throw new Error('Save failed');
      const json = await res.json();
      setPrefs(json);
    } catch (e) {
      setError(e.message || 'Save failed');
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div>Loading promo admin…</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-black/60 rounded-md">
      <h2 className="text-xl font-semibold mb-4">Affiliate Promo Admin</h2>
      <p className="text-sm text-gray-300 mb-4">Set the primary href for an affiliate slug (runtime). This will attempt to persist via GitHub or Vercel APIs if tokens are configured; otherwise it saves to a local file (non-persistent on serverless).</p>

      <div className="grid gap-3">
        {['muck-boot','rocky','durango'].map(slug => (
          <div key={slug} className="flex gap-2 items-center">
            <label className="w-32 text-sm text-gray-200">{slug}</label>
            <input
              value={prefs[slug] ?? ''}
              onChange={e => updateSlug(slug, e.target.value)}
              placeholder="https://..."
              className="flex-1 p-2 rounded bg-white/5 border border-white/10 text-sm"
            />
          </div>
        ))}
      </div>

      <div className="mt-4">
        <label className="block text-sm text-gray-200 mb-2">Admin password (required if configured)</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 rounded bg-white/5 border border-white/10 text-sm" />
      </div>

      {error && <div className="text-red-400 mt-3">{error}</div>}

      <div className="mt-4">
        <button onClick={save} disabled={saving} className="btn">
          {saving ? 'Saving…' : 'Save Preferences'}
        </button>
      </div>
    </div>
  );
}
