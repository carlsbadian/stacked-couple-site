# CLAUDE.md — The Stacked Couple

This file gives Claude Code the context it needs to make on-brand edits to this site without re-explaining the brand each time. Read it before making changes.

## What this is

The web platform for **The Stacked Couple** — a brand by Jenn & Todd, a Gen X couple in Southern California, documenting their real wellness/optimization protocols, training, and honest midlife experience.

- **Live domain:** https://www.thestackedcouple.com
- **Host:** Cloudflare Pages, auto-deploys from the `main` branch on every push
- **Stack:** Astro 5 + MDX, static output, no client framework. Content is markdown/MDX so it can be managed by AI tools and later a git-based headless CMS (Sveltia/Decap).
- **Source of truth for brand decisions:** `2026.07.09_StackedCouple_ConsolidatedWorkingDocs.docx` on the NAS (see **NAS assets** below). Sections 1–7 govern the site; it is an INTERNAL DRAFT — **nothing publishes without Jenn's explicit written approval.**

## Design system — read before any styling work

`src/styles/global.css` is the single source of truth for all type and color. Read it — and the reference doc below — before changing anything visual. The reasoning lives in the file's own comments.

@docs/design-system.md

### Hard rules

- **Never declare `font-family`, `font-size`, or a raw hex value in a component `<style>` block.** Astro scopes styles per file, so a local rule silently beats the global one — this caused heading-size drift. Use the CSS custom properties in `global.css`.
- **No text below 14px anywhere** — disclaimers, captions, affiliate language, footer included. If a layout needs smaller, change the layout.
- **Minimum font weight 400.** No 300 or lighter.
- **Never use `--stone` as text** (fails contrast). Use `--stone-deep` on light grounds, `--stone-light` on navy.
- **Never use `--copper` as text on navy** (2.41:1) — use `--copper-light`. **Never use `--amber` as text on cream/white** (2.47:1) — navy grounds only.
- **Never set a full sentence in uppercase or in the mono face.** Four words max in caps. Mono is for eyebrows, labels, nav, and protocol/dose data only.
- **Never remove a focus ring. Never justify text.**
- **The wordmark uses `--wordmark`, not `--serif`.**
- **Brand direction (Jenn, locked):** headings stay **regular weight** — no bold/heavy; buttons stay **square, copper, uppercase mono**. Repo-specific layout utilities live in the "section 15" block at the bottom of `global.css` — when re-syncing the design system from the cloud project, replace sections 01–14 and leave 15 intact.

### Copy is not yours to rewrite

Website copy is approved separately. Do not generate, rephrase, expand, or "improve" any user-facing copy. If copy seems wrong or a section is empty, flag it and stop — do not fill the gap.

### Before reporting a styling task complete

- `grep -rn "font-size:\|font-family:" src/ --include=*.astro` returns nothing outside `global.css` (small UI primitives — arrow glyphs, the wordmark size, form inputs — are the only allowed exceptions).
- No computed text below 14px; no horizontal scroll at 200% zoom.
- Every text/background pair measured against WCAG AA, not eyeballed.

## NAS assets & source files

Additional working files and brand assets live on the NAS at **`192.168.4.23`** (SMB share `ClaudeMaster`, mounted on macOS at `/Volumes/ClaudeMaster`). The project folder is:

```
/Volumes/ClaudeMaster/Claude NAS/The Stacked Couple Website/
├── 2026.07.09_StackedCouple_ConsolidatedWorkingDocs.docx   # brand source of truth (Sections 1–7)
├── files/                        # full mirror of this Astro repo (has its own .git — DO NOT build/git here; SMB breaks git)
├── files.zip                     # zipped snapshot of the above
└── The Stacked Couple Digital Assets/
    ├── All Final Designs- THE STACKED COUPLE/   # CANONICAL assets (2026-08 delivery): real vectors (.ai/.eps/.pdf/.svg) + .jpg/.png renders — Logo/, ICON/, Badge logo/, Four stack Icon/, Four STACK BANNERS/, BRAND PATTERN/, SOCIAL MIDEA/, illustrations, Brand Design Guideline.pdf
    └── Do Not Use - Old - Logo Assets/          # deprecated first-generation set — never source from here
```

Related brand docs also sit one level up in `/Volumes/ClaudeMaster/Claude NAS/The Stacked Couple Documents/` (`stacked_couple_brand_alignment*.pdf`, `THE STACKED COUPLE working docs.docx`).

- The NAS must be mounted for these paths to resolve; if `/Volumes/ClaudeMaster` is missing, the share isn't connected.
- **Always develop, build, and commit in this local working copy** — never against `files/` on the NAS (git/build fail on the SMB mount). Treat the NAS copy as a reference/asset store, not the working repo.

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

**The Stacks → Optimization · Mind · Fuel · Movement** (display order per Todd, 2026-08-06; earlier orders are retired). Every piece of content lives in exactly one (`pillar` frontmatter field). Optimization contains: Peptide Protocols, Targeted Supplements, Tracking & Tech, Biomarker Labs — and hosts The Toolkit. The old pillar names (The Stack/The Sweat/The Science/The Real) are retired.

## Monetization model

1. **In-text affiliate links** inside MDX narrative content (only what's in our own stack).
2. **The Toolkit** (`/the-stacks/optimization/toolkit/`) — public, ungated aggregator of gear/sources/codes.
3. **Gated lead magnet** ("Get the Guide") — sells execution tools (dosage tracker, reconstitution cheat sheet, startup checklist), not links. Email capture via `EmailCapture.astro`.

## Visual system

Six colors (LOCKED — defined in `src/styles/global.css`): Deep Navy `#1B2F4A` (primary/anchor) · Steel Blue `#4A7FA5` (secondary) · Cream `#FAF7F2` (base) · Copper `#A0522D` (CTAs/labels — not decoration) · Amber `#C8973A` (warmth, sparingly) · Stone `#8A9099` (subtext/dividers). Navy leads every layout; the old Rust color is retired.

Typography (see **Design system** above and `global.css` for the full token scale): Georgia headers (system font) · Atkinson Hyperlegible Next body · Atkinson Hyperlegible Mono labels/data. Headers stay regular weight — quiet and elegant, not bold. The homepage hero leads with the "The Stacked Couple" wordmark; the tagline supports it beneath. Responsive, visible keyboard focus, `prefers-reduced-motion` respected.

## Social handles (keep these exact)

- Instagram: https://instagram.com/thestackedcouple (@thestackedcouple)
- TikTok: https://tiktok.com/@stacked.couple (@stacked.couple)
- YouTube: https://youtube.com/@TheStackedCouple (@TheStackedCouple)
- Substack: URL TBD — add in `src/config/site.ts` when live.

## Known open items

- Email capture is a console-log placeholder (`EmailCapture.astro`). Needs a real provider. Do not claim the form works.
- Intake form (`work-with-us.astro`) has no backend — placeholder handler, same rule.
- Substack URL is an empty TODO in `src/config/site.ts`. (Ascension affiliate URL is live: https://ascensionpeptides.com/ref/stackedcouple/ — auto-applies the 50% discount; code STACKED is the checkout fallback.)
- Toolkit item links are unlinked list items pending affiliate URLs.
- The Experiment feed does not yet pull the Substack RSS (TODO in `the-experiment/index.astro`).
- Cloudflare Pages build settings must be updated for Astro before the `astro-rebuild` branch merges to `main`.
