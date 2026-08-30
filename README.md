# TheGEOLog

A dated, public log of AI-search-visibility fixes — one operator, no agency.
Built with Astro (static output) + Markdown content collections.

## Before you deploy

- [ ] `astro.config.mjs` — confirm `site:` matches your real final domain
- [ ] `src/layouts/BaseLayout.astro` — replace the `TODO` byline name in `personSchema`
- [ ] `src/pages/about.astro` — replace the placeholder bio + decide whether to name/link your other sites
- [ ] `src/content/blog/35-posts-a-week-zero-traffic.md` — fill in the three
      `[insert: ...]` lines with real numbers from Search Console, then change
      `draft: true` to `draft: false` to publish it
- [ ] `hello@thegeolog.com` in about.astro — point this at a real inbox

## Local development

```
npm install
npm run dev
```

## Adding a new log entry

Add a new `.md` file under `src/content/blog/`. Frontmatter fields:

```yaml
---
title: "..."
description: "..."          # used as the meta description + card blurb
pubDate: 2026-09-01
status: "fixed"              # fixed | broken | note | teardown — drives the colored chip
tags: ["technical-seo"]
draft: true                  # flip to false when it's ready to publish
---
```

## Build & deploy

```
npm run build
```

Output goes to `dist/`. This project is set up to deploy the same way as
poppopmake.com: push to GitHub, connect the repo in Cloudflare Pages, set:

- Build command: `npm run build`
- Output directory: `dist`

Then point the domain's DNS at Cloudflare Pages the same way poppopmake.com is set up.
