import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * The four locked pillars. Every piece of content lives in exactly one.
 * The Stacks → Optimization · Movement · Fuel · Mind
 */
export const PILLARS = ['movement', 'fuel', 'optimization', 'mind'] as const;

/**
 * `experiment` — the content hub / blog. Markdown/MDX articles managed
 * here (and later by a git-based CMS like Sveltia/Decap). Rendered by
 * /the-experiment/ routes.
 */
const experiment = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experiment' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pillar: z.enum(PILLARS),
    pubDate: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

/**
 * `stacks` — schema validation for the pillar/category MDX pages that
 * live directly under src/pages/the-stacks/ (they are routes, but the
 * glob loader lets us enforce a uniform, CMS-compatible frontmatter
 * schema on them too).
 */
const stacks = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/pages/the-stacks' }),
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    description: z.string(),
    pillar: z.enum(PILLARS),
    eyebrow: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { experiment, stacks };
