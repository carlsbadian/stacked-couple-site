/**
 * The Toolkit directory — single source of truth for partner/placeholder
 * cards on /toolkit. To activate a future partner: set isPlaceholder to
 * false, fill in url (and promo), done. Rendering handles the rest.
 */
import { AFFILIATE, COMMUNITY } from './site';

/**
 * Regimen partner OneLink for the Toolkit card. AppsFlyer routes the
 * visitor to the right store by device; af_sub4 identifies the placement,
 * so give other placements their own link rather than reusing this one.
 */
const REGIMEN_ONELINK_TOOLKIT =
  'https://regimen.onelink.me/IFAf/website?pid=partner&c=stackedcouple&af_channel=partner&af_sub4=toolkit_card';

export interface ToolkitItem {
  title: string;
  /**
   * Optional partner logo shown above the title (path under /brand).
   * `href` makes it clickable — link it to the partner's own site.
   */
  logo?: { src: string; alt: string; width: number; height: number; href?: string };
  badges: string[];
  description: string;
  /** Shown as the highlighted offer line on active cards. */
  promo?: string;
  /** CTA label. Placeholders show this on a disabled button. */
  cta: string;
  /** Outbound or internal URL. Ignored while isPlaceholder is true. */
  url?: string;
  /** App-store links — rendered as official store badges instead of a CTA. */
  stores?: { appStore: string; googlePlay: string };
  isPlaceholder: boolean;
}

export interface ToolkitCategory {
  name: string;
  items: ToolkitItem[];
}

export const TOOLKIT: ToolkitCategory[] = [
  {
    name: 'Research & Protocol Compounds',
    items: [
      {
        title: 'Ascension Peptides',
        badges: ['Primary Research Source', '50% OFF'],
        description: 'Our trusted source for third-party tested research compounds.',
        promo: 'Use code STACKED for 50% off at checkout.',
        cta: 'Shop Ascension Peptides →',
        url: AFFILIATE.ascension.url,
        isPlaceholder: false,
      },
      {
        title: 'Vetted Compound Source [Coming Soon]',
        badges: ['Under Review'],
        description: 'Additional research compound partner currently undergoing protocol verification.',
        cta: 'Partner Announcement Soon',
        isPlaceholder: true,
      },
    ],
  },
  {
    name: 'Protocol Tracking & Software',
    items: [
      {
        title: 'Regimen App',
        logo: {
          src: '/brand/partners/regimen-wordmark-black.png',
          alt: 'Regimen',
          width: 1600,
          height: 400,
          href: 'https://helloregimen.com',
        },
        badges: ['Peptide Tracker', 'Code: STACKED'],
        description:
          'The app we use to track our peptides. Dosing schedules, reconstitution math, half-life tracking, and injection site rotation.',
        promo: 'Use code STACKED for exclusive subscription discount.',
        cta: 'Download Regimen App →',
        // Regimen OneLink (AppsFlyer): device-routing + partner attribution.
        // Both badges point at it on purpose — it sends iOS to the App Store,
        // Android to Google Play, and credits us via af_sub4=toolkit_card.
        stores: {
          appStore: REGIMEN_ONELINK_TOOLKIT,
          googlePlay: REGIMEN_ONELINK_TOOLKIT,
        },
        isPlaceholder: false,
      },
    ],
  },
  {
    name: 'Diagnostics & Baseline Labs',
    items: [
      {
        title: 'Direct Baseline Bloodwork [Coming Soon]',
        badges: ['Diagnostic Labs'],
        description: 'Nationwide lab panels for IGF-1, hormone profiles, and metabolic baselines.',
        cta: 'Coming Soon',
        isPlaceholder: true,
      },
      {
        title: 'At-Home Specialty Testing [Coming Soon]',
        badges: ['Diagnostics'],
        description: 'Targeted hormone, gut health, and biological age tracking kits.',
        cta: 'Coming Soon',
        isPlaceholder: true,
      },
    ],
  },
  {
    name: 'Ancillaries & Supplies',
    items: [
      {
        title: 'Protocol Ancillary Kits [Coming Soon]',
        badges: ['Supplies'],
        description: 'BAC Water, U-100 insulin syringes, mixing supplies, and alcohol prep pads.',
        cta: 'Coming Soon',
        isPlaceholder: true,
      },
    ],
  },
  {
    name: 'Equipment & Recovery',
    items: [
      {
        title: 'Recovery & Fitness Gear [Coming Soon]',
        badges: ['Equipment'],
        description: 'Red light therapy panels, wearables, cold plunges, and training equipment.',
        cta: 'Coming Soon',
        isPlaceholder: true,
      },
    ],
  },
];

export const TOOLKIT_META = {
  title: 'The Toolkit',
  subtitle:
    'Curated compounds, labs, equipment, and tracking tools we personally use and trust.',
  disclosure:
    'Disclosure: Some links below contain community discounts or affiliate links where we may earn a commission. We only feature products in our active stack.',
} as const;

// Re-exported for the /links page so all outbound URLs stay config-driven.
export const LINK_HUB_URLS = {
  ascension: AFFILIATE.ascension.url,
  community: COMMUNITY.joinUrl,
  regimenAppStore: 'https://apps.apple.com/us/app/regimen-peptide-tracker/id6753905449',
  regimenGooglePlay: 'https://play.google.com/store/apps/details?id=com.regimen.app&pcampaignid=web_share',
} as const;
