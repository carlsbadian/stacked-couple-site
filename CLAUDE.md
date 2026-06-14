# CLAUDE.md — The Stacked Couple

This file gives Claude Code the context it needs to make on-brand edits to this site without re-explaining the brand each time. Read it before making changes.

## What this is

A single-page marketing site for **The Stacked Couple** — a brand by Jenn & Todd, a Gen X couple in Southern California, documenting their real wellness/optimization protocols, training, and honest midlife experience. The site is a launch page: social link hub + email capture, with room to grow into full pages later.

- **Live domain:** https://www.thestackedcouple.com
- **Host:** Cloudflare Pages, auto-deploys from the `main` branch on every push
- **Stack:** plain static HTML/CSS/JS — no framework, no build step. A single `index.html` plus image assets. Do not introduce a build tool, framework, or npm dependencies unless explicitly asked.

## Deploy workflow

This repo auto-deploys. After editing, commit and push to `main`; Cloudflare rebuilds in under a minute. There is no build command — files are served as-is. Keep all asset paths **relative** (e.g. `favicon-32.png`, not `/favicon-32.png`) so they resolve correctly.

## Brand positioning — the one rule that matters most

**Use "Gen X" and "midlife" for brand-level framing. Do not pin the brand to a specific age** ("mid-50s") in headlines, taglines, bio, or positioning copy. Specific ages (e.g. "54 and 55") are allowed only as *proof points* inside content — the realness is the selling point there — never as the brand's defining label. When in doubt, lead with "Midlife. Optimized." which pins no age at all.

## Voice rules

ALWAYS:
- Direct, confident, honest — never preachy.
- Concrete over vague: real numbers, real protocols, real results.
- Show the body experience (sweat, effort, data) before naming it.
- Both voices exist: Jenn's depth + Todd's directness. Frame midlife as optimization, not crisis.

NEVER:
- Coaching-industry buzzwords (manifest, high vibe, breakthrough).
- Spiritual bypass or vague wellness speak.
- Sycophantic or hype copy.

## The compound-naming rule (important)

Do **not** put specific peptide/compound names or dosing specifics in the live page text. Platforms suppress this content and it carries liability. The site teaches at a high level and drives to an email list; the actual compound-specific detail is meant to be delivered as a file sent post-signup, not hosted as live page text. Keep the "not medical advice" disclaimer block intact — never remove it.

## Visual system — do not drift from this

**Colors (CSS variables already defined in `index.html`):**
- Deep Navy `#1B2F4A` — primary, brand anchor, backgrounds
- Steel Blue `#4A7FA5` — secondary, accents
- Cream `#FAF7F2` — base, light sections, text on dark
- Copper `#A0522D` — primary accent, CTAs, key callouts
- Amber `#C8973A` — secondary accent, highlights
- Rust `#B85A30` — texture/photography accent
- Stone `#8A9099` — subtext, dividers

**Typography:**
- Headers & brand moments: Georgia / serif
- Body & captions: Helvetica / sans-serif
- Labels, data, eyebrows: monospace (utility face)

**Signature device:** the offset "stack" — layered/offset elements that echo the double meaning of *stacked* (physique + protocol + relationship). The hero "Midlife. / Optimized." offset is the centerpiece; keep it.

Spend boldness in one place (the signature), keep everything else quiet. Maintain the quality floor: responsive to mobile, visible keyboard focus, `prefers-reduced-motion` respected.

## Content pillars (for any new sections)

Four pillars, every piece of content lives in one: **The Stack** (protocols & compounds), **The Sweat** (training), **The Science** (research made human), **The Real** (honest midlife conversation).

## Social handles (keep these exact)

- Instagram: https://instagram.com/thestackedcouple (@thestackedcouple)
- TikTok: https://tiktok.com/@stacked.couple (@stacked.couple)
- YouTube: https://youtube.com/@TheStackedCouple (@TheStackedCouple)

## Known open items

- The email signup form currently captures to the browser console as a placeholder. It needs a real provider embed (Zoho Campaigns, Substack, ConvertKit, or Mailchimp) wired into the form's submit handler in `index.html`. Until then, do not claim the form "works."
- `og:url` meta tag should be set to `https://www.thestackedcouple.com`.
