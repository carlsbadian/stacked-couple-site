# The Stacked Couple — font and color implementation

Paste this whole block into Claude Design.

---

## Scope

Update typography and color tokens on thestackedcouple.com. Do not change layout, copy, or page structure except where explicitly listed under "Specific fixes" below.

**Keep:** Georgia for headers. Do not change the header face.
**Change:** the body face, the mono face, and the color tokens.
**Add:** a dedicated wordmark variable.

---

## 1. Load two web fonts

Add Atkinson Hyperlegible Next and Atkinson Hyperlegible Mono. Both are free and open source from the Braille Institute, available on Google Fonts.

Self-host the files rather than loading from Google's CDN — faster, no third-party request, no layout shift. Preload the two variable files and set `font-display: swap`.

Do not load a web font for headers. Georgia is a system font and stays that way.

---

## 2. Replace the `:root` block in `src/styles/global.css`

```css
:root {
  /* ---- font families ---- */
  --serif:    Georgia, 'Times New Roman', serif;
  --wordmark: Georgia, serif;                     /* logo lockup ONLY */
  --sans:     'Atkinson Hyperlegible Next', system-ui, sans-serif;
  --mono:     'Atkinson Hyperlegible Mono', ui-monospace, monospace;

  /* ---- type scale — nothing renders below --fs-legal ---- */
  --fs-h1:      clamp(40px, 6vw, 64px);
  --fs-h2:      clamp(30px, 4vw, 44px);
  --fs-h3:      clamp(24px, 2.4vw, 30px);
  --fs-h4:      clamp(20px, 1.8vw, 22px);
  --fs-body-lg: clamp(18px, 1.4vw, 20px);
  --fs-body:    clamp(17px, 1.2vw, 18px);
  --fs-caption: 15px;
  --fs-label:   14px;
  --fs-legal:   14px;   /* absolute floor */

  /* ---- rhythm ---- */
  --lh-tight:   1.15;
  --lh-heading: 1.25;
  --lh-body:    1.6;
  --measure:    68ch;

  /* ---- color: core palette ---- */
  --navy:   #1B2F4A;
  --steel:  #4A7FA5;
  --cream:  #FAF7F2;
  --copper: #A0522D;
  --amber:  #C8973A;
  --stone:  #8A9099;
  --ink:    #2B2B2B;

  /* ---- color: text-safe variants (use these for TYPE) ---- */
  --stone-deep:   #656B74;   /* text on cream/white — 5.03:1 */
  --stone-light:  #A8AEB6;   /* text on navy      — 6.05:1 */
  --copper-light: #D08A5E;   /* text on navy      — 4.82:1 */
}
```

---

## 3. Color rules

Apply these wherever text sits on a colored ground.

| Situation | Use | Do not use |
|---|---|---|
| Body text on cream | `--ink` | — |
| Subtext, captions, metadata on cream | `--stone-deep` | `--stone` (fails at 3.01:1) |
| Eyebrows, status labels, small text on navy | `--stone-light` | `--stone` (fails at 4.21:1) |
| Copper-toned type or links on navy | `--copper-light` | `--copper` (fails at 2.41:1) |
| Accent text on cream | `--copper` | `--amber` (fails at 2.47:1) |
| Headings on cream | `--navy` | — |
| Headings on navy | `--cream` | — |

Amber is fine as a non-text element on any ground, and fine as text on navy. Never as text on cream or white.

Never pure black on pure white. Links inside body copy get an underline — color alone is not enough.

---

## 4. Type rules

- Body line-height `1.6`. Headings `1.15`–`1.25`.
- Running text capped at `max-width: var(--measure)` regardless of container width.
- Left-aligned. Never justified.
- No negative letter-spacing on body copy. Uppercase labels get `letter-spacing: 0.08em`.
- All-caps for four words maximum. Never a full sentence, never body copy.
- Minimum weight 400 for all text. No 300 or lighter.
- Tabular figures for doses, measurements, dates, and data columns.
- No text over a busy photo without a solid panel or a scrim at 60% opacity minimum.
- Minimum tap target 44 × 44 px with 8px between adjacent targets.
- Visible focus ring on every interactive element. Do not remove it.
- Honor `prefers-reduced-motion`.

---

## 5. Specific fixes

**Hero sub-line.** Currently set in the mono, all caps, letterspaced, as a full sentence:

> MIDLIFE ON OUR OWN TERMS. INTENTIONAL. SUPPORTED. STACKED.

Change to `var(--sans)`, sentence case, `--fs-body-lg`, normal letter-spacing:

> Midlife on our own terms. Intentional. Supported. Stacked.

Reserve the mono for the eyebrow, status-strip labels, nav links, and protocol/dose data.

**Wordmark.** The logo lockup is `chevron.webp` plus live HTML text. Point that text at `var(--wordmark)` instead of `var(--serif)` so a future header change cannot restyle it by accident.

**Card titles.** Small applications of the header face (around 16px) — check these still read well after the body change and move them to `var(--sans)` at weight 600 if they look weak.

---

## 6. Fix the heading size drift

Section headings render at different sizes across the site — "Four pillars," "The Peptide Guide," and "Who We Are" are all nominally H2 but each is a different size.

Cause: `global.css` defines a base scale, but Astro scopes styles per file, and several page and component `<style>` blocks set `font-size` locally. The local scoped rule beats the global element selector, so the global H2 is silently overridden in roughly eight places. Editing `global.css` therefore appears to do nothing.

Fix:

1. The `:root` block above is the single source of truth for size.
2. Grep the repository for `font-size:`. Every hit outside `global.css` gets replaced with a token or deleted.
3. Same for `font-family:` — no component should declare one directly.
4. Add a lint rule or pre-commit grep so it cannot come back.

---

## 7. Verify before shipping

- No text anywhere renders below 14px. Check disclaimers, image captions, affiliate language, and the footer copyright specifically.
- Every text/background pair measured, not eyeballed.
- Page tested at 200% browser zoom — no horizontal scroll, no clipped text.
- Read on a phone in direct outdoor sunlight.
- Wordmark unchanged from its current appearance.
