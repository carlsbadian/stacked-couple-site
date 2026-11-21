/**
 * The four stacks — one definition, read by the homepage and /the-stacks/.
 * Display order is locked: Optimization · Mind · Fuel · Movement.
 *
 * `outcome` is the reader-facing headline (what you get); `summary` says what's
 * inside. Written benefit-first (2026-11 repositioning) — describe what the
 * reader gets, never promise a result.
 *
 * `color` is the stack's brand color from the final asset set; `icon` is the
 * icon-only crop of the brand stack icon (public/brand/icon-*.svg).
 */
export const STACKS = [
  {
    key: 'optimization',
    name: 'Optimization',
    href: '/the-stacks/optimization/',
    icon: '/brand/icon-optimization.svg',
    color: 'var(--navy)',
    outcome: 'Dial in what’s happening inside.',
    summary:
      'Peptides, targeted supplements, lab work, and tracking: what’s worth considering, what to test, and how to tell it’s working.',
  },
  {
    key: 'mind',
    name: 'Mind',
    href: '/the-stacks/mind/',
    icon: '/brand/icon-mind.svg',
    color: 'var(--steel)',
    outcome: 'Sleep deeper. Stress less.',
    summary:
      'Sleep, stress, and focus habits that make every other change easier to stick with.',
  },
  {
    key: 'fuel',
    name: 'Fuel',
    href: '/the-stacks/fuel/',
    icon: '/brand/icon-fuel.svg',
    color: 'var(--copper)',
    outcome: 'Eat for strength and steady energy.',
    summary:
      'Protein targets and simple whole-food frameworks that support your training and your goals.',
  },
  {
    key: 'movement',
    name: 'Movement',
    href: '/the-stacks/movement/',
    icon: '/brand/icon-movement.svg',
    color: 'var(--amber)',
    outcome: 'Train for the long game.',
    summary:
      'Strength, mobility, and recovery you can keep doing for decades — not just this month.',
  },
] as const;
