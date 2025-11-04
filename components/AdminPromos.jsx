"use client";

import { useState, useEffect } from 'react';

export default function AdminPromos() {
  const [prefs, setPrefs] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [promoFolders, setPromoFolders] = useState([]);
  const [activePromos, setActivePromos] = useState(new Set());
  const [adminToken, setAdminToken] = useState('');
  

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

    // Load promo folders and active list
    fetch('/api/promos')
      .then(r => r.json())
      .then(data => {
        setPromoFolders(data.folders || []);
        setActivePromos(new Set(data.active || []));
      })
      .catch(() => {
        // ignore promo loading errors
      });
  }, []);

  function updateSlug(slug, href) {
    setPrefs(p => ({ ...p, [slug]: href }));
  }

  async function save() {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch('/api/affiliate-preferences', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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

  async function togglePromo(folder, enable) {
    setError(null);
    try {
      const res = await fetch('/api/promos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-promo-admin-token': adminToken },
        body: JSON.stringify({ folder, enable }),
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || 'Toggle failed');
      }
      const json = await res.json();
      setActivePromos(new Set(json.active || []));
    } catch (e) {
      setError(e.message || 'Toggle failed');
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

      <hr className="my-4 border-white/10" />

      <div className="mb-3">
        <h3 className="text-lg font-medium">Promo folders</h3>
        <p className="text-sm text-gray-300">Toggle promo folders on/off without removing files. Enter the admin token below to apply changes.</p>
        <div className="mt-2">
          <input
            placeholder="Admin token"
            value={adminToken}
            onChange={e => setAdminToken(e.target.value)}
            className="w-full p-2 rounded bg-white/5 border border-white/10 text-sm mb-2"
          />
          <div className="grid gap-2">
            {promoFolders.length === 0 && <div className="text-sm text-gray-400">No promo folders found.</div>}
            {promoFolders.map(folder => (
              <div key={folder} className="flex items-center justify-between">
                <div className="text-sm">{folder}</div>
                <div>
                  <button
                    onClick={() => togglePromo(folder, !activePromos.has(folder))}
                    className={`px-3 py-1 rounded ${activePromos.has(folder) ? 'bg-green-500' : 'bg-gray-600'}`}
                  >
                    {activePromos.has(folder) ? 'Active' : 'Inactive'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Password input hidden while solo-founder mode is active (ADMIN_PASSWORD not configured) */}

      {error && <div className="text-red-400 mt-3">{error}</div>}

      <div className="mt-4">
        <button onClick={save} disabled={saving} className="btn">
          {saving ? 'Saving…' : 'Save Preferences'}
        </button>
      </div>
    </div>
  );
}
