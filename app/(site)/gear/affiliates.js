// Central list of affiliates. Add entries here as the program grows.
// Each affiliate should include: slug (url part), name, description, href (external affiliate link), and optional logo path.

// Default affiliate template and helper
// Use `AFFILIATE_TEMPLATE` as a reference when adding new affiliates, or call
// `makeAffiliate({ slug: 'x', name: 'X', ... })` to create a new affiliate object.
export const AFFILIATE_TEMPLATE = {
  slug: '',
  name: '',
  category: '',
  description: '',
  href: '',
  logo: '',
  features: [],
  preferred: [],
  links: []
};

export function makeAffiliate(overrides = {}) {
  return { ...AFFILIATE_TEMPLATE, ...overrides };
}

// Build-time toggles: set these env vars to make flash sale links the primary CTA for specific affiliates.
// These are evaluated at build time (Next.js) so change the env var and redeploy to flip the CTA.
const SHOW_MUCK_SALE = process.env.NEXT_PUBLIC_MUCK_SALE === 'true';
const SHOW_ROCKY_SALE = process.env.NEXT_PUBLIC_ROCKY_SALE === 'true';
// Durango has multiple potential promos; control which promo becomes primary at build time.
const SHOW_DURANGO_TK_SALE = process.env.NEXT_PUBLIC_DURANGO_TK_SALE === 'true'; // tkqlhce flash sale
const SHOW_DURANGO_DP_SALE = process.env.NEXT_PUBLIC_DURANGO_DP_SALE === 'true'; // dpbolvw affiliate exclusive

const affiliates = [
  {
    slug: 'king-camo',
    name: 'King Camo',
    category: 'Apparel & Field Gear',
    description: 'Durable, field-ready camouflage and outdoor apparel built for serious prospectors and hunters.',
    // primary href (Shop)
    href: 'https://www.tkqlhce.com/click-101573160-15774549',
  // local logo (replace with the provided JPG). Please add the provided file to public/images/
  // Filename expected: public/images/king-camo-banner-400x262.jpg
  logo: '/images/king-camo-banner-400x262.jpg',
    features: [
      'Field-ready fabrics and patterns',
      'Fast shipping options',
      'Closeout and clearance deals'
    ],
    // preferred host order for primary selection (dpbolvw preferred first)
    preferred: ['dpbolvw.net', 'tkqlhce.com'],
    // multiple tracked links from the affiliate package
    links: [
           
      {
        label: 'Free Shipping $200+',
        href: 'https://www.dpbolvw.net/click-101573160-15778345',
        pixel: 'https://www.ftjcfx.com/image-101573160-15778345'
      },
      {
        label: 'Closeout Deals',
        href: 'https://www.dpbolvw.net/click-101573160-15778347',
        pixel: 'https://www.ftjcfx.com/image-101573160-15778347'
      },
      {
        label: 'Shop XKG Wind-Defender Bib Pant',
        href: 'https://www.dpbolvw.net/click-101573160-15780347',
        pixel: 'https://www.lduhtrp.net/image-101573160-15780347'
      },
      {
        label: 'King Camo - Holiday Gift Guide',
        href: 'https://www.jdoqocy.com/click-101573160-16993510'
      }
      ,
      {
        label: 'New Arrivals',
        href: 'https://www.dpbolvw.net/click-101573160-15784073',
        // Creative metadata — CJ creative JSON (requires CJ authentication to fetch).
        // Frontend can use this URL or you can replace with a direct image asset in /public/images.
        creative: {
          source: 'cj-json',
          url: 'https://members.cj.com/member/7418368/publisher/links/search/publisher/linkcreative/15784073.json',
          width: 400,
          height: 262
        }
      }
      ,
      {
        label: 'Shop XKG Summit 2P Tent',
        href: 'https://www.tkqlhce.com/click-101573160-17122530'
      }
      ,
      {
        label: 'Shop XKG Ridge Pant',
        href: 'https://www.kqzyfj.com/click-101573160-16993510'
      }
      ,
      {
        label: 'Shop King Camo (evergreen)',
        displayLabel: 'Shop King Camo',
        href: 'https://www.dpbolvw.net/click-101573160-15784057',
        primary: true
      }
    ]
  }
  ,
  // TCL Home Security — full affiliate card (mimics King Camo layout)
  {
    slug: 'tcl-homesecurity',
    name: 'TCL Home Security',
    category: 'Tools & Gear',
  description: 'Smart home security cameras, alarm systems, and monitoring solutions for home and small business.',
    // primary href (Shop)
    href: 'https://www.tkqlhce.com/click-101573160-17146925',
  // main local logo — place the provided image at: public/images/tcl-homesecurity-main.jpg
  logo: '/images/tcl-homesecurity-main.jpg',
    features: [
      'Indoor & outdoor smart cameras',
      'Professional and DIY installation',
      'Monitoring plans & bundle discounts'
    ],
    // preferred host order for primary selection if multiple partners exist
    preferred: ['tkqlhce.com', 'dpbolvw.net'],
    links: [
      {
        label: 'Shop TCL Home Security',
        displayLabel: 'Shop TCL Home Security',
        href: 'https://www.tkqlhce.com/click-101573160-17146925',
        pixel: 'https://www.lduhtrp.net/image-101573160-17146925',
        primary: true
      },
      {
        label: 'Shop Camera Bundles',
        displayLabel: 'Camera Bundles',
        href: 'https://www.tkqlhce.com/click-101573160-17146925',
        creative: {
          source: 'remote',
          url: 'https://www.lduhtrp.net/image-101573160-17146925',
          width: 768,
          height: 768
        }
      },
      {
        label: 'Monitoring Plans',
        displayLabel: 'Monitoring Plans',
        href: 'https://www.tkqlhce.com/click-101573160-17146925'
      },
      {
        label: 'New Arrivals',
        href: 'https://www.tkqlhce.com/click-101573160-17146925',
        creative: {
          source: 'local',
          url: '/images/tcl-new-arrivals-300x250.jpg',
          width: 300,
          height: 250
        }
      }
    ]
  },
  {
    slug: 'durango',
    name: 'Durango',
    category: 'Footwear & Outdoor',
    description: 'Durango — built for every mile. Rugged harness boots and footwear engineered for long days on and off the trail.',
  // Use existing Durango image in public/images (uploaded earlier). Update if you want a different creative.
  // encode spaces in filename so the image URL is safe in rendered HTML
  logo: '/images/Durango%20Moto%20Boots.jpg',
    features: [
      'Durable harness construction',
      'Comfort for long wear',
      'Leather and engineered soles'
    ],
    links: [
      // Flash sale (tkqlhce) - Oct 31-Nov 2
      {
        label: 'Flash Sale - Durango',
        displayLabel: 'Flash Sale - Durango',
        href: 'https://www.tkqlhce.com/click-101573160-17187377',
        pixel: 'https://www.awltovhc.com/image-101573160-17187377',
        primary: SHOW_DURANGO_TK_SALE
      },
      // Affiliate exclusive (dpbolvw)
      {
        label: 'Affiliate Exclusive - Durango',
        displayLabel: 'Durango - Affiliate Exclusive',
        href: 'https://www.dpbolvw.net/click-101573160-17174334',
        pixel: 'https://www.ftjcfx.com/image-101573160-17174334',
        primary: SHOW_DURANGO_DP_SALE
      },
      // Evergreen jdoqocy link - shown when no promo toggles are enabled
      {
        label: 'Shop Durango (jdoqocy)',
        displayLabel: 'Shop Durango',
        href: 'https://www.jdoqocy.com/click-101573160-17170523',
        primary: !SHOW_DURANGO_TK_SALE && !SHOW_DURANGO_DP_SALE
      },
      {
        label: 'New Arrivals',
        href: 'https://www.jdoqocy.com/click-101573160-17170523',
        creative: {
          source: 'local',
          url: '/images/Durango%20Moto%20Boots.jpg',
          width: 728,
          height: 90
        }
      }
      ,
      // Nov 4-6 Deal Roundup promo (moved from homepage into "More offers")
      {
        label: 'Nov 4-6 Deal Roundup',
        displayLabel: 'Nov 4-6 Deal Roundup — Rebel™ styles from $69',
        href: 'https://www.tkqlhce.com/click-101573160-17178574',
        pixel: 'https://www.awltovhc.com/image-101573160-17178574'
      }
    ]
  }
  ,
  {
    slug: 'rocky',
    name: 'Rocky',
    category: 'Footwear & Tactical',
    description: 'Rocky tactical and work boots — rugged footwear built for long days and demanding conditions.',
    // homepage tracked link (kqzyfj)
    href: 'https://www.kqzyfj.com/click-101573160-15489688',
    // local creative placeholder. Upload the provided Rocky banner to public/images/rocky-banner-300x250.jpg
    logo: '/images/rocky-banner-300x250.jpg',
    features: [
      'Durable tactical construction',
      'All-day comfort',
      'Slip-resistant outsoles'
    ],
    links: [
      // Flash sale link for Rocky — becomes primary when NEXT_PUBLIC_ROCKY_SALE=true
      {
        label: 'Flash Sale - Rocky Boots',
        displayLabel: 'Flash Sale - Rocky Boots',
        href: 'https://www.kqzyfj.com/click-101573160-17175339',
        // 1x1 impression pixel
        pixel: 'https://www.tqlkg.com/image-101573160-17175339',
        primary: SHOW_ROCKY_SALE
      },
      // Evergreen link — primary when no flash sale is active
      {
        label: 'Shop Rocky (kqzyfj)',
        displayLabel: 'Shop Rocky',
        href: 'https://www.kqzyfj.com/click-101573160-15489688',
        primary: !SHOW_ROCKY_SALE
      },
      {
        label: 'New Arrivals',
        href: 'https://www.kqzyfj.com/click-101573160-15489688',
        creative: {
          source: 'local',
          url: '/images/rocky-banner-300x250.jpg',
          width: 300,
          height: 250
        }
      }
    ]
  }
  ,
  {
    slug: 'muck-boot',
    name: "Muck Boot Company",
    category: 'Footwear & Outdoor',
    description: 'Rugged, waterproof boots and footwear built for wet and muddy conditions — great for prospecting, hunting, and heavy outdoor work.',
  // use the uploaded Muck logo image (saved in public/images)
  logo: '/images/MuckBootLogo.jpg',
    features: [
      'Waterproof construction',
      'Insulated options for cold weather',
      'Durable outsoles for rough terrain'
    ],
    // only tracked links for Muck Boot — merchant direct URLs removed per request
    links: [
      // Flash sale link (dpbolvw) — becomes primary when SHOW_MUCK_SALE is true
      {
        label: 'Flash Sale - Shop Muck',
        displayLabel: 'Flash Sale - Shop Muck',
        href: 'https://www.dpbolvw.net/click-101573160-14323207',
        // 1x1 impression pixel supplied by user
        pixel: 'https://www.awltovhc.com/image-101573160-14323207',
        // primary only when the sale toggle is enabled at build time
        primary: SHOW_MUCK_SALE
      },
      // Evergreen (kqzyfj) — primary when sale toggle is not enabled
      {
  label: 'Shop Muck (kqzyfj)',
  displayLabel: 'Shop Muck',
  href: 'https://www.kqzyfj.com/click-101573160-17142980',
  primary: !SHOW_MUCK_SALE
      },
      {
        label: 'Bone Collector (kqzyfj)',
        // banner click should also use the tracked click URL so impressions/clicks attribute correctly
        href: 'https://www.kqzyfj.com/click-101573160-17142980',
        creative: {
          source: 'local',
          url: '/images/BoneCollectorMuck.jpg',
          width: 300,
          height: 600
        }
      }
      ,
      // User-provided Muck promo (moved from homepage into 'More offers')
      {
        label: 'Muck Deal Banner',
        displayLabel: 'Muck Deal — Limited Time Banner',
        href: 'https://www.anrdoezrs.net/click-101573160-15670205',
        pixel: 'https://www.awltovhc.com/image-101573160-15670205',
        creative: {
          source: 'remote',
          url: 'https://www.awltovhc.com/image-101573160-15670205',
          width: 728,
          height: 90
        }
      }
      ,
      // Nov 7-11 flash sale moved from homepage into 'More offers'
      {
        label: 'Muck Boots Nov 7-11 Flash Sale',
        displayLabel: 'Muck Boots Flash Sale — Nov 7-11',
        href: 'https://www.dpbolvw.net/click-101573160-17190602',
        pixel: 'https://www.lduhtrp.net/image-101573160-17190602'
      }
    ]
  }
  ,
  {
    slug: 'georgia-boot',
    name: 'Georgia Boot',
    category: 'Footwear & Work',
    description: 'Rugged work boots built for tough jobs — slip-resistant, durable, and comfortable for long days.',
  // local creative placeholder — normalized filename used in public/images
  logo: '/images/georgia-boot-300x250.jpg',
    features: [
      'Work-grade construction',
      'Slip-resistant outsoles',
      'All-day comfort'
    ],
    links: [
      {
        label: 'Shop Georgia Boot',
        displayLabel: 'Shop Georgia Boot',
        href: 'https://www.jdoqocy.com/click-101573160-15736465',
        primary: true,
        pixel: 'https://www.ftjcfx.com/image-101573160-15736465'
      },
      {
        label: 'New Arrivals',
        href: 'https://www.jdoqocy.com/click-101573160-15736465',
        creative: {
          source: 'local',
          // point to the uploaded image (normalized filename)
          url: '/images/georgia-boot-300x250.jpg',
          width: 300,
          height: 250
        }
      }
    ]
  }
];

// Added affiliate: Cigars International (tracked link + impression pixel)
affiliates.push({
  slug: 'cigars-international',
  name: 'Cigars International',
  category: 'Tobacco & Accessories',
  description: 'Cigars, humidors, and accessories — premium tobacco for enthusiasts.',
  href: 'https://www.anrdoezrs.net/click-101573160-15735448',
  // Local logo (existing upload found; use that filename)
  logo: '/images/CigarsInt.png',
  links: [
    {
      label: 'Shop Cigars International',
      displayLabel: 'Shop Cigars International',
      href: 'https://www.anrdoezrs.net/click-101573160-15735448',
      primary: true,
      pixel: 'https://www.lduhtrp.net/image-101573160-15735448'
    }
  ]
});

// Added affiliate: Groundluxe (grounding/fitted bed sheet)
affiliates.push({
  slug: 'groundluxe',
  name: 'Groundluxe',
  category: 'Home & Wellness',
  description: 'Groundluxe fitted grounding bed sheet — organic cotton with grounding technology.',
  href: 'https://www.dpbolvw.net/click-101573160-17165115',
  // point to the uploaded image (present in public/images)
  logo: '/images/groundluxe-fitted-sheet.png',
  features: [
    'Organic cotton',
    'Grounding / earthing technology',
    'Machine washable'
  ],
  links: [
    {
      label: 'Shop Groundluxe Fitted Sheet',
      displayLabel: 'Shop Groundluxe',
      href: 'https://www.dpbolvw.net/click-101573160-17165115',
      primary: true,
      pixel: 'https://www.lduhtrp.net/image-101573160-17165115'
    },
    {
      label: 'New Arrivals',
      href: 'https://www.dpbolvw.net/click-101573160-17165115',
        creative: {
        source: 'local',
        url: '/images/groundluxe-fitted-sheet.png',
        width: 342,
        height: 340
      }
    }
  ]
});

// If you upload the provided logo, place it at: public/images/cigars-international.png
// and the site will use it automatically. Optionally update the creative size below.

// Added affiliate from user-provided anchor/image snippet
// ActionHeat affiliate (user supplied creative) — rename and point to local asset
affiliates.push({
  slug: 'actionheat',
  name: 'ActionHeat',
  category: 'Apparel & Heated Gear',
  description: 'Battery-heated apparel and cold-weather gear.',
  href: 'https://www.anrdoezrs.net/click-101573160-15379347',
  // Prefer a local raster asset in public/images — upload the provided JPG/PNG to this path.
  // Place the provided ad image at: public/images/actionheat-300x250.jpg
  logo: '/images/actionheat-300x250.jpg',
  features: [
    'Battery heated jackets & vests',
    'Designed for cold-weather work and recreation',
    'Shop now deals'
  ],
  links: [
    {
      label: 'Shop ActionHeat (tracked)',
      displayLabel: 'Shop ActionHeat',
      href: 'https://www.anrdoezrs.net/click-101573160-15379347',
      primary: true,
      // Impression pixel (image-based)
      pixel: 'https://www.lduhtrp.net/image-101573160-15379347',
      creative: {
        source: 'local',
        url: '/images/actionheat-300x250.jpg',
        width: 300,
        height: 250
      }
    }
  ]
});

// Prospectors Dream — new affiliate card added with provided logo and links
affiliates.push({
  slug: 'prospectors-dream',
  name: 'Prospectors Dream',
  category: 'Tools & Gear',
  description: 'Prospectors Dream — gold panning kits, sluices, and prospecting supplies (Dream Mat).',
  href: 'https://prospectorsdream.com',
  // use uploaded logo (existing file in public/images)
  logo: '/images/DreamMatLogo.jpg',
  features: [
    'Gold panning kits and sluices',
    'Compact pocket sluices and prospecting kits',
    'Made for field use and easy cleanup'
  ],
  links: [
    {
      label: 'Gold Pan Kit — Adventure Sluice Combo',
      href: 'https://prospectorsdream.com/products/gold-pan-kit-adventure-sluice-combo-dream-mat?sca_ref=9910922.RTrHHEA6uW'
    },
    {
      label: 'Gold Pan Kit w/ Pocket Sluices',
      href: 'https://prospectorsdream.com/products/gold-pan-kit-w-pocket-sluices?sca_ref=9910922.RTrHHEA6uW'
    },
    {
      label: '9-Piece Expedition Gold Prospecting Kit',
      href: 'https://prospectorsdream.com/products/9-piece-expedition-gold-prospecting-kit?sca_ref=9910922.RTrHHEA6uW'
    }
  ]
});

export default affiliates;
