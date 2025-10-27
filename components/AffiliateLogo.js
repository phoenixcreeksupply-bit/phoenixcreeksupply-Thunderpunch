"use client";
import { useEffect, useState } from 'react';

// Renders an affiliate logo with graceful fallbacks:
// 1) local `logo` prop (string)
// 2) if `creative.url` provided (CJ JSON), call /api/cj-creative to resolve image URL
// 3) placeholder box

export default function AffiliateLogo({ logo, creative, alt = '', className = '', svgCenter = false }) {
  const [src, setSrc] = useState(logo || null);
  const [triedCreative, setTriedCreative] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setSrc(logo || null);
    setTriedCreative(false);
    setFailed(false);
  }, [logo]);

  useEffect(() => {
    // if there's no initial logo or logo failed, try creative
    if ((!src || failed) && creative && creative.url && !triedCreative) {
      setTriedCreative(true);
      (async () => {
        try {
          const res = await fetch('/api/cj-creative', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: creative.url })
          });
          const json = await res.json();
          if (json && json.ok && json.imageUrl) {
            setSrc(json.imageUrl);
            setFailed(false);
            return;
          }
        } catch (err) {
          // ignore
        }
        setFailed(true);
      })();
    }
  }, [src, failed, creative, triedCreative]);

  if (src && src.endsWith && src.endsWith('.svg')) {
    // small svg wordmarks look better centered and contained
    return (
      <div className={"w-full h-full flex items-center justify-center bg-gray-800 " + className}>
        <img src={src} alt={alt} className="max-w-[70%] max-h-[70%] object-contain" onError={() => setFailed(true)} />
      </div>
    );
  }

  if (src) {
    return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
  }

  return (
    <div className={"w-full h-full flex items-center justify-center text-gray-500 bg-gray-800 " + className}>
      <div className="text-sm">No image</div>
    </div>
  );
}
