/**
 * Single source of truth for site-wide values.
 * Fill in TODO links here — every component reads from this file.
 */

export const SITE = {
  name: 'The Stacked Couple',
  tagline: 'Stacking and Tracking. Thriving in Midlife.',
  subline: 'Midlife on our own terms. Intentional. Supported. Stacked.',
  url: 'https://www.thestackedcouple.com',
  location: 'Southern California', // outward-facing: SoCal / Pacific coast only — never the specific city
} as const;

export const SOCIAL = {
  instagram: { label: 'Instagram', handle: '@thestackedcouple', url: 'https://instagram.com/thestackedcouple' },
  tiktok: { label: 'TikTok', handle: '@stacked.couple', url: 'https://tiktok.com/@stacked.couple' },
  youtube: { label: 'YouTube', handle: '@TheStackedCouple', url: 'https://youtube.com/@TheStackedCouple' },
  // TODO(Todd): add the live Substack URL when the publication is set up.
  substack: { label: 'Substack', handle: 'The Stacked Couple', url: '' },
} as const;

export const AFFILIATE = {
  ascension: {
    name: 'Ascension Peptides',
    code: 'STACKED',
    discount: '50% off',
    url: 'https://ascensionpeptides.com/ref/stackedcouple/',
    disclaimer:
      'All compounds sold by Ascension Peptides are for research purposes only and are not intended for human consumption. The Stacked Couple is not responsible for how these compounds are used.',
  },
} as const;

export const LEGAL_FOOTER =
  'The Stacked Couple shares our personal experience for educational and informational purposes only. Nothing here is medical advice. Consult your physician before beginning any new health protocol.';

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'The Stacks', href: '/the-stacks/' },
  { label: 'The Experiment', href: '/the-experiment/' },
  { label: 'About Us', href: '/about/' },
  { label: 'Work With Us', href: '/work-with-us/' },
] as const;
