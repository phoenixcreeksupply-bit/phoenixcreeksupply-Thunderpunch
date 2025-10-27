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
  // local logo (placeholder). Original external logo: https://www.ftjcfx.com/image-101573160-15778348
  logo: '/images/king-camo-logo.svg',
    features: [
      'Field-ready fabrics and patterns',
      'Fast shipping options',
      'Closeout and clearance deals'
    ],
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
        label: 'Shop King Camo (evergreen)',
        href: 'https://www.dpbolvw.net/click-101573160-15784057'
      }
    ]
  }
];

export default affiliates;
