# The Stacked Couple — Website

Marketing/launch site for The Stacked Couple. Live at **https://www.thestackedcouple.com**.

## How it works

- **Static site.** A single `index.html` plus image assets. No framework, no build step.
- **Host:** Cloudflare Pages, connected to this repo. Pushing to `main` auto-deploys in under a minute.
- **Domain:** registered at Namecheap, pointed to Cloudflare Pages via a `www` CNAME.

## Editing

Edit `index.html` (and assets), then commit and push to `main`. Cloudflare rebuilds automatically. If you use Claude Code, it reads `CLAUDE.md` in this folder for brand rules — check there before making changes.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The entire site |
| `favicon.ico`, `favicon-16/32/180/192/512.png` | Browser tab + device icons |
| `og-image.png` | Social share preview image (1200×630) |
| `CLAUDE.md` | Brand rules and context for editing |

## Open items

- Email signup form is a placeholder — needs a real provider embed wired in.
