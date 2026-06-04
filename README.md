# AI-EDU — Dental Crafters: Guide to Claude AI

An internal enablement artifact that teaches the team how to use Claude at work,
reproduced from HubSpot's "The Complete Guide to Claude AI" and rebranded for
Dental Crafters.

## 🔗 Live site

**https://dcmikes.github.io/AI-EDU/** (GitHub Pages, `main` branch, root)

- Link-only / not searchable: a `noindex, nofollow` meta tag plus a site-wide
  `robots.txt` (`Disallow: /`) keep it out of search engines. The repo and Pages
  are **public**, so anyone with the link can open it — it is not access-controlled.

## What it is

A single self-contained page (`index.html`, no build step, no dependencies) with:

- **The full guide** in HubSpot's "steal-this" format — Introduction → Parts 1–4 →
  Conclusion, expert pull-quotes, project cards, `STEAL THIS` command boxes, and a
  three-pillar applications section.
- **Department toggles** at the top that re-render *every* example live. Nine
  departments, each with its own project cards, four `STEAL THIS` prompts
  (Project / Artifact / Dashboard / Workflow), a morning-briefing prompt, the
  Part-3 "Revolution" + pillars, and data-analysis applications:
  Marketing · Sales · Customer Service · Finance · People/HR · Operations · IT ·
  Engineering · Clinical. Finance, HR, and Clinical also carry a **guardrail**
  note (verify figures / keep data confidential / no PHI). The last-used
  department is remembered via `localStorage`.
- **"Prompts that made this page"** — a `#prompts` view (linked from the top bar and
  a mid-page CTA) that tells the build story: every prompt used to make the page,
  cleaned up for grammar/spelling, with what each one produced.

## Branding

Pulled from the company site (dentalcraftersnetwork.com):

- **Logo:** `assets/dc_network_logo.png` (Dental Crafters Network wordmark), used in
  the header and hero.
- **Palette** (the three logo colors): cyan `#2FC2E8`, violet `#8F86C9`, maroon
  `#D24159`, on a dark theme.
- **Fonts:** Quicksand (wordmark/UI), Roboto Slab (hero headline), Helvetica Neue (body).

## Project structure

```
index.html                          # the artifact (guide + toggles + prompts view)
robots.txt                          # Disallow: / (keep out of search)
assets/dc_network_logo.png          # Dental Crafters logo
sources/claude-ai-at-work-guide.md  # raw capture of the original HubSpot guide
```

## Run / edit locally

```bash
# serve from the repo root (any static server works)
python3 -m http.server 8765
# then open http://localhost:8765/index.html
```

To change examples, edit the `DEPTS` object in `index.html`; to add or reorder
departments, edit the `DEPTS` keys and the `ORDER` array. Pushing to `main`
automatically rebuilds the GitHub Pages site.

## Source

Reproduced and adapted from HubSpot's "The Complete Guide to Claude AI:
Revolutionize The Way You Work" (offers.hubspot.com/view/claude-ai-at-work).
Built collaboratively with Claude.

---

> Per-repo session color (read by the centralized statusline/tint engine in
> `DCMikes/AI`): see `Session color:` in `CLAUDE.md`. Data only — no color engine
> lives here.
