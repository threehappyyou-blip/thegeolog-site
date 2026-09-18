---
title: "I Fixed 105 Files on My Other Site After an AdSense Rejection. Then I Checked This One."
description: "poppopmake.com got rejected from AdSense and needed a site-wide technical fix. Checking whether thegeolog had the same bugs turned up a different, smaller pair of gaps."
pubDate: 2026-09-18
status: "fixed"
tags: ["technical-seo", "case-study"]
draft: false
---

poppopmake.com — the other site I run — got rejected from AdSense. Chasing
that down turned into a full technical audit: 98 internal links, 45 sitemap
entries, 26 llms.txt entries, and 36 references inside the site's search
feature all still pointed to bare `.html` URLs instead of clean paths. Worse,
the site had zero canonical tags anywhere — not broken, not partial, just
never added. 93 pages got one for the first time. Eight files turned out to
be missing Open Graph tags entirely, a separate gap from the same sweep.

The fix touched 105 files, basically the whole site. Once it shipped, the
obvious next question was whether this site had the same problems.

## Why I expected the answer to be yes

Same operator, similar era of first building things quickly. If I'd missed
canonical tags on one site, the same blind spot plausibly existed on the
other.

## Why it structurally couldn't

poppopmake.com is close to 105 individual HTML files, each one hand-written
or hand-maintained — which is exactly how a canonical tag ends up on 92 pages
and missing from the 93rd, or present on some files and absent from others.
This site is Astro: every page runs through one shared layout component that
computes its own canonical URL, Open Graph tags, and Twitter card tags from
the page's actual path, not from something typed into each file by hand.
Fetching the homepage and a post page directly confirmed both had correct,
self-referential canonical URLs and complete Open Graph tags. The bug class
that hit poppopmake.com isn't a matter of "did I remember to add this
everywhere" here — there's nowhere for the inconsistency to live.

## What I found instead

Two smaller, genuinely real gaps, unrelated to poppopmake.com's bugs:

- No `og:image` anywhere. Sharing a thegeolog.com link anywhere would show
  a title and description with no preview image.
- The 404 page had no `noindex` directive, meaning it was eligible to get
  indexed by Google like a normal page.

<div class="callout">
<p class="eyebrow">the detour</p>
<p>Generating a real Open Graph image meant getting the site's actual fonts — Source Serif 4 and IBM Plex Mono — into a format Python's image library could render. The npm packages for both only ship woff2 files; fonttools converted them to ttf directly, which took one script instead of hunting for a generic substitute font.</p>
</div>

## What changed

`BaseLayout.astro` now renders a real `og:image` (a generated 1200×630 card
using the site's actual typography and status-chip colors, not a stock
image) plus `og:image:width`, `og:image:height`, and `twitter:image`. It also
takes an optional `noindex` prop, which the 404 page now passes.

## Where this leaves things

Neither site's problem was really about SEO knowledge — both were things
that don't show up until you go looking, on a schedule nobody sets on
purpose. poppopmake.com's fix might or might not be what a future AdSense
review actually cares about; I won't know until it's reviewed again. This
site's actual remaining gap isn't technical at all — it's that there are six
posts here, and the number that matters for AdSense is closer to fifteen.
