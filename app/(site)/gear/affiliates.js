// Central list of affiliates. Add entries here as the program grows.
// Each affiliate should include: slug (url part), name, description, href (external affiliate link), and optional logo path.

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
        label: 'Shop King Camo',
        href: 'https://www.tkqlhce.com/click-101573160-15774549',
        pixel: 'https://www.ftjcfx.com/image-101573160-15774549'
      },
      {
        label: 'Free Shipping ($200+)',
        href: 'https://www.dpbolvw.net/click-101573160-15778345',
        pixel: 'https://www.ftjcfx.com/image-101573160-15778345'
      },
      {
        label: 'Closeout Deals',
        href: 'https://www.dpbolvw.net/click-101573160-15778347',
        pixel: 'https://www.ftjcfx.com/image-101573160-15778347'
      },
      {
        label: 'King Camo Home',
        href: 'https://www.jdoqocy.com/click-101573160-15778348',
        pixel: 'https://www.ftjcfx.com/image-101573160-15778348'
      }
      ,
      {
        label: 'Shop XKG Wind-Defender Bib Pant',
        href: 'https://www.tkqlhce.com/click-101573160-15780347'
      },
      {
        label: 'Shop XKG Wind-Defender Bib Pant',
        href: 'https://www.dpbolvw.net/click-101573160-15780347',
        pixel: 'https://www.lduhtrp.net/image-101573160-15780347'
      }
      ,
      {
        label: '3-Days Only - 50% OFF XKG Ridge Pant',
        href: 'https://www.kqzyfj.com/click-101573160-16972766',
        pixel: 'https://www.tqlkg.com/image-101573160-16972766'
      }
      ,
      {
        label: 'King Camo - Holiday Gift Guide',
        href: 'https://www.jdoqocy.com/click-101573160-16993510'
      }
      ,
      {
        label: 'Kings Logo 400x262 (Banner)',
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
      {
        label: 'Shop Durango (jdoqocy)',
        displayLabel: 'Shop Durango',
        href: 'https://www.jdoqocy.com/click-101573160-17170523',
        primary: true
      },
      {
        label: 'Durango Banner 728x90 (creative)',
        href: 'https://www.jdoqocy.com/click-101573160-17170523',
        creative: {
          source: 'local',
          url: '/images/Durango%20Moto%20Boots.jpg',
          width: 728,
          height: 90
        }
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
      {
        label: 'Shop Rocky (kqzyfj)',
        displayLabel: 'Shop Rocky',
        href: 'https://www.kqzyfj.com/click-101573160-15489688',
        // Explicit primary so this tracked shop link is the visible CTA by default
        primary: true
      },
      {
        label: 'Rocky Banner 300x250 (creative)',
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
      {
        label: 'Shop Muck (kqzyfj)',
        displayLabel: 'Shop Muck',
        href: 'https://www.kqzyfj.com/click-101573160-17142980',
        // make this the default primary CTA so users see the tracked commission link first
        primary: true
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
    ]
  }
  ,
  {
    slug: 'georgia-boot',
    name: 'Georgia Boot',
    category: 'Footwear & Work',
    description: 'Rugged work boots built for tough jobs — slip-resistant, durable, and comfortable for long days.',
    // local creative placeholder — upload the provided banner to public/images/georgia-boot-300x250.jpg
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
        label: 'Georgia Boot Banner 300x250 (creative)',
        href: 'https://www.jdoqocy.com/click-101573160-15736465',
        creative: {
          source: 'local',
          url: '/images/georgia-boot-300x250.jpg',
          width: 300,
          height: 250
        }
      }
    ]
  }
];

export default affiliates;
