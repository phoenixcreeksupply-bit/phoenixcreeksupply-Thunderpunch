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
];

export default affiliates;
