# AI-EDU — DCN Claude Training Hub

A living internal training site: one-page Claude trainings for the Dental
Crafters Network team, published on GitHub Pages. Each topic is a single page
with three sections (Why / How / Prompts), and the landing page lists every
topic with an audience rating (beginner / intermediate / advanced), its
written date, last-updated date, and content version so people can catch
up on anything they missed. The list sorts by audience level first, then
by release date, newest first.

## Live site

**https://dcmikes.github.io/AI-EDU/** (GitHub Pages, `main` branch, root)

Link-only, not searchable: every page carries `noindex, nofollow` and
`robots.txt` disallows crawling. The repo and the site are public, so anyone
with the link can open it; do not put confidential material here.

## Structure

```
index.html                # landing page; renders the topic list
topics/_template.html     # copy this to start a new topic page
topics/<topic>.html       # one page per topic (Why / How / Prompts)
assets/js/topics.js       # the topic registry the landing page renders
assets/css/site.css       # DCN brand palette, fonts, layout
assets/logos/             # DCN logo SVGs (horizontal white-text, icon)
assets/fonts/             # Space Grotesk (OFL-licensed; license included)
robots.txt                # Disallow: / (keep out of search)
```

## Adding a topic

1. Copy `topics/_template.html` to `topics/<your-topic>.html` and fill in
   the TODOs: title, dates, version, and the Why / How / Prompts sections.
2. Add an entry to the `TOPICS` array in `assets/js/topics.js` (title,
   href, audience, written, updated, version, summary). Sorting is
   automatic: audience level, then release date.
3. Push to `main`; GitHub Pages republishes automatically.

External resources (like Anthropic Academy courses) go straight into
`topics.js` with `external: true` and a full URL; no page needed.

## Updating a topic

Edit the page, then in `topics.js` set `updated` to today and bump
`version`: minor for content tweaks (1.0 to 1.1), major when the guidance
itself changes (2.0). The landing page shows both, so readers can tell at a
glance whether a page changed since they last read it.

## Branding

Follows the DCN brand guidelines (via the `brand-dcn` skill in the
DentalCrafters/skills repo): Obsidian `#111111` background, Cobalt `#0A2540`
panels, BioLime `#B7FF00` accent, Titanium `#F8F9FA` text, Chrome `#6E7378`
secondary, Enamel Mint `#C8FFE6` highlight panels. Headlines are Space
Grotesk (bundled; open OFL license). The brand's body and callout fonts
(Adelle Sans, Microgramma) are licensed to DCN for internal use only, so
this public repo uses system-font stand-ins for them instead of bundling
the files. Logos are the bundled brand SVGs; do not recolor or rebuild them.

## Run locally

```bash
# any static server from the repo root
python3 -m http.server 8765
# then open http://localhost:8765/
```
