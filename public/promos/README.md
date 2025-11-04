Promo staging (public/promos)
=================================

Drop HTML snippets into affiliate-specific folders here to activate promotions.

How it works
- Any file placed at `/public/promos/<folder>/active.html` will be served at the path `/promos/<folder>/active.html`.
- The component `components/PromoStaging.jsx` fetches that file at runtime. If it exists, the HTML is inlined into the page.

Activate a promo
1. Create a folder under `public/promos/`, for example `public/promos/myAffiliate/`.
2. Place your HTML snippet in `public/promos/myAffiliate/active.html`.
3. The promo will show wherever `PromoStaging` is rendered (the default wiring shows it just above the footer).

Deactivate a promo
- Remove or rename `active.html` (for example `inactive.html`) and the promo will stop appearing.

Security note
- The content is rendered with `dangerouslySetInnerHTML` because these are raw promotional snippets. Only maintainers with repo access should place files here.
