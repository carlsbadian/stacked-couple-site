# CLAUDE.md — The Stacked Couple

This file gives Claude Code the context it needs to make on-brand edits to this site without re-explaining the brand each time. Read it before making changes.

## What this is

The web platform for **The Stacked Couple** — a brand by Jenn & Todd, a Gen X couple in Southern California, documenting their real wellness/optimization protocols, training, and honest midlife experience.

- **Live domain:** https://www.thestackedcouple.com
- **Host:** Cloudflare Pages, auto-deploys from the `main` branch on every push
- **Stack:** Astro 5 + MDX, static output, no client framework. Content is markdown/MDX so it can be managed by AI tools and later a git-based headless CMS (Sveltia/Decap).
- **Source of truth for brand decisions:** `2026.07.09_StackedCouple_ConsolidatedWorkingDocs.docx` on the NAS (`/Volumes/ClaudeMaster/Claude/The Stacked Couple Website/`). Sections 1–7 govern the site; it is an INTERNAL DRAFT — **nothing publishes without Jenn's explicit written approval.**

## Build & deploy workflow

- `npm run build` → static site in `dist/`. `npm run dev` for the dev server.
- Git and builds run **only on this local copy** — never against the NAS mirror (git fails on the SMB mount).
- Cloudflare Pages must be set to build command `npm run build`, output `dist`. (The pre-Astro site deployed raw files — if Pages settings haven't been updated, pushing Astro source to `main` will break the live site.)
- Publishing gate: pushing `main` = live. Jenn holds editorial approval over all content with her face, voice, or name.

## Brand positioning

- **Tagline (LOCKED):** "Stacking and Tracking. Thriving in Midlife."
- **Sub-line (LOCKED):** "Midlife on our own terms. Intentional. Supported. Stacked."
- The old "Midlife. Optimized." tagline is retired — do not reintroduce it.
- Use "Gen X" / "midlife" framing. Never pin the brand to a specific age. Never name the specific city — "Southern California," "SoCal," or "Pacific coast" only.

## Voice rules

ALWAYS: direct, honest, clear, data-driven, uncurated. Treat the reader as an intelligent peer. Authority through specificity, not credentials. Both voices exist: Todd's is the method, Jenn's is the meaning.

NEVER: biohack/hack/hustle/grind · manifest/high vibe/quantum leap · boss babe · "10 steps to…" frameworks · "No BS" / "real results" filler · "anti-aging" (we are pro-vitality) · credentials on platform (exercise-science/premed stay off) · last names, specific city, kids/family detail, career specifics · anything from Jenn's separate In Truth brand.

## The compound-naming rule (important)

No specific peptide/compound names or dosing in live page text. The site teaches frameworks; compound-level detail is delivered via the email list and newsletter. Ascension Peptides may be named as the affiliate partner (code STACKED, 50% off) but **always** with the research-use disclaimer (`ResearchDisclaimer.astro` — the `AffiliateBadge` component pairs them automatically). Never remove the legal footer (in `Footer.astro`, sourced from `src/config/site.ts`).

## Architecture

- `src/config/site.ts` — single source of truth: tagline, socials, affiliate, legal footer, nav. TODO links (Substack, Ascension URL) get filled here.
- `src/pages/` — routes per the approved blueprint: `index`, `about`, `work-with-us`, `get-the-guide`, `the-stacks/` (hub + `movement.mdx`, `fuel.mdx`, `mind.mdx`, `optimization/` with 4 category MDX + `toolkit.mdx`), `the-experiment/` (feed + `[slug]` dynamic route).
- `src/content/experiment/` — blog articles (MDX, schema-validated). `src/content/config.ts` defines schemas for both `experiment` and the `stacks` pages.
- Top-level nav stays lean: Home · The Stacks · The Experiment · About Us · Work With Us (+ "Get the Guide" CTA).

## Content pillars (LOCKED)

**The Stacks → Movement · Fuel · Optimization · Mind.** Every piece of content lives in exactly one (`pillar` frontmatter field). Optimization contains: Peptide Protocols, Targeted Supplements, Tracking & Tech, Biomarker Labs — and hosts The Toolkit. The old pillar names (The Stack/The Sweat/The Science/The Real) are retired.

## Monetization model

1. **In-text affiliate links** inside MDX narrative content (only what's in our own stack).
2. **The Toolkit** (`/the-stacks/optimization/toolkit/`) — public, ungated aggregator of gear/sources/codes.
3. **Gated lead magnet** ("Get the Guide") — sells execution tools (dosage tracker, reconstitution cheat sheet, startup checklist), not links. Email capture via `EmailCapture.astro`.

## Visual system

Six colors (LOCKED — defined in `src/styles/global.css`): Deep Navy `#1B2F4A` (primary/anchor) · Steel Blue `#4A7FA5` (secondary) · Cream `#FAF7F2` (base) · Copper `#A0522D` (CTAs/labels — not decoration) · Amber `#C8973A` (warmth, sparingly) · Stone `#8A9099` (subtext/dividers). Navy leads every layout; the old Rust color is retired.

Typography: Georgia/serif headers · Helvetica/sans body · monospace labels/data. **Signature device:** the offset "stack" — the hero's offset "Stacking and / Tracking." is the centerpiece; keep it. Spend boldness in one place, keep everything else quiet. Responsive, visible keyboard focus, `prefers-reduced-motion` respected.

## Social handles (keep these exact)

- Instagram: https://instagram.com/thestackedcouple (@thestackedcouple)
- TikTok: https://tiktok.com/@stacked.couple (@stacked.couple)
- YouTube: https://youtube.com/@TheStackedCouple (@TheStackedCouple)
- Substack: URL TBD — add in `src/config/site.ts` when live.

## Known open items

- Email capture is a console-log placeholder (`EmailCapture.astro`). Needs a real provider. Do not claim the form works.
- Intake form (`work-with-us.astro`) has no backend — placeholder handler, same rule.
- Ascension affiliate URL + Substack URL are empty TODOs in `src/config/site.ts`.
- Toolkit item links are unlinked list items pending affiliate URLs.
- The Experiment feed does not yet pull the Substack RSS (TODO in `the-experiment/index.astro`).
- Cloudflare Pages build settings must be updated for Astro before the `astro-rebuild` branch merges to `main`.
