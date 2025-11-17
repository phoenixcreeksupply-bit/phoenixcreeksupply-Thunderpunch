# snapshots/

This folder holds lightweight static snapshots and a small internal "site card" describing the site.

Files:

- `digital-kits.html` — A static HTML snapshot of the Digital Kits page (generated from `app/(site)/digital-kits/page.js`). Open in a browser to preview content and links.
- `site-card.json` — Internal JSON describing the site (title, URL, preview image path, build status, last commit, generated timestamp, and list of snapshots).
 - `affiliates.html` — A static HTML snapshot of the affiliates hub (generated from `app/(site)/gear/affiliates.js`). Lists affiliates, logos, descriptions, and primary CTAs.

Purpose:

- Provide an internal reference snapshot for review or documentation without running the full Next.js server.
- Supply a machine-readable site card that other tools or scripts can consume (CI, internal dashboards).

How to open locally (PowerShell):

```powershell
# Open the Digital Kits snapshot in your default browser
Start-Process .\snapshots\digital-kits.html

# Or open the folder in Explorer
Start-Process .\snapshots
```

Notes:

 - The `preview_image` referenced in `site-card.json` is the canonical social preview: `/brand/pcs-og.png`. If you want a social preview image in the repo, add the image to `public/brand/pcs-og.png` and commit.
- Snapshots are static and do not reflect runtime admin overrides, build-time flags, or server-side logging that occur at runtime.
