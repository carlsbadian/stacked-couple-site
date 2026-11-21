/**
 * Proof — Todd's and Jenn's own tracked numbers, shown on the homepage
 * (the "Tracked, not guessed" card in the hero and the "We track it" section).
 *
 * ⚠ NEVER invent or estimate a value here. Every number must be a real,
 * measured result Todd or Jenn supplied. Until a field is filled it renders
 * as a visible [PLACEHOLDER] — which is fine on a preview branch and NOT fine
 * on the live site. Fill these in before merging to main.
 *
 * How to fill a metric:
 *   start / now  — display strings, e.g. '24.1%' and '17.8%'
 *   detail       — what and over how long, e.g. 'Body fat, DEXA · 9 months'
 *   series       — optional raw readings in time order, e.g. [24.1, 22.6, 20.3, 17.8];
 *                  draws the sparkline from real data. Without it the hero shows a
 *                  generic shape labeled "Illustrative".
 */
export interface Metric {
  label: string;
  start?: string;
  now?: string;
  detail?: string;
  series?: number[];
}

export const METRICS: Metric[] = [
  { label: 'Body composition' },
  { label: 'Bloodwork' },
  { label: 'Strength' },
  { label: 'Sleep' },
];

/**
 * Before/after photos. Drop the files in public/proof/ and set the paths,
 * e.g. { src: '/proof/todd-before.webp', caption: 'Todd · March 2026' }.
 */
export interface ProofPhoto {
  src?: string;
  alt?: string;
  caption?: string;
}

export const PHOTOS: { before: ProofPhoto; after: ProofPhoto } = {
  before: {},
  after: {},
};
