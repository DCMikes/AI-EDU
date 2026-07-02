# AI-EDU

Session color: #EC4899 (pink)

DCN Claude Training Hub: a living, static GitHub Pages site of one-page
Claude trainings for the Dental Crafters Network team.

## Rules for this repo

- Static site only: no build step, no dependencies. `index.html` renders the
  topic list from `assets/js/topics.js`.
- Every topic page uses the Why / How / When structure from
  `topics/_template.html` and carries a written date, updated date, and
  content version; the same metadata lives in its `topics.js` entry.
- Branding follows the `brand-dcn` skill (DentalCrafters/skills repo):
  Obsidian/Cobalt/BioLime/Titanium palette, Space Grotesk headlines, DCN
  voice rules (no em or en dashes, no superlatives, no guarantee wording).
- This repo is PUBLIC. Never commit the Adelle Sans or Microgramma font
  files (internal-only license) or anything confidential. Space Grotesk
  (OFL) is fine and already bundled.
- Keep every page `noindex, nofollow` and keep `robots.txt` as `Disallow: /`;
  the site is shared by link only.

## Notes

- This file carries the per-repo `Session color:` line read by the
  centralized statusline/tint engine in `DCMikes/AI`. Do not add a color
  engine or hooks here; data only (see user-level CLAUDE.md).
