---
title: "I Published 35 AI Articles a Week for Four Months. Organic Traffic Never Moved."
description: "A fully automated finance-content pipeline was publishing on a near-daily schedule with nothing to show for it. The autopsy: cannibalized topics, a silently broken sitemap, and a homepage that wasn't a homepage."
pubDate: 2026-08-15
status: "teardown"
tags: ["case-study", "technical-seo", "content-strategy"]
draft: false
---

For about four months, one of my sites ran an automated publishing pipeline —
Python script, scheduled via GitHub Actions, generating and posting new
articles on a near-daily schedule. At peak, that was around 35 posts a week.

Organic traffic stayed at close to zero the entire time.

Not "grew slower than expected." Zero, flat, the whole four months. That's the
kind of result that makes you stop adding more content and start asking what's
actually broken. Here's what I found when I finally opened the hood.

## Finding 1: the topic generator was quietly duplicating itself

The publishing script picked each day's topic from a rotation list —
`FOUNDATION_TOPICS` — that only had three real entries in it. With 35 posts a
week cycling through three topics, the site wasn't publishing 35 distinct
articles. It was publishing the same three ideas, reworded, over and over.

<div class="callout">
<p class="eyebrow">what this looks like from Google's side</p>
<p>Dozens of URLs competing with each other for the same handful of queries, none of them a clear best answer for anything. That's textbook content cannibalization — and it's invisible if you're only watching "posts published per week" as your metric.</p>
</div>

## Finding 2: the sitemap had been broken for a while, silently

Separately — and this one wasn't the pipeline's fault — the site's SEO plugin
had lost a set of database tables at the hosting level. That meant the sitemap
had effectively stopped rebuilding correctly, which meant a growing share of
"new" content was never getting reliably discovered in the first place. It
took a support ticket with the host (Cloudways, ticket #954632) to confirm the
missing tables and get them restored.

Layer that on top of Finding 1: even the handful of genuinely distinct pages
weren't consistently making it into the sitemap that tells crawlers — AI or
otherwise — what to look at.

## Finding 3: the homepage wasn't a homepage

The last piece was the most obvious once I saw it and the easiest to miss
before that: the homepage was 100% a sales page for a paid membership tier.
No content hub, no links out to the actual articles, nothing for a
first-time visitor — or a crawler trying to understand what the site is about
— to land on. A domain publishing daily content with a homepage that never
mentioned any of it.

## What I actually did about it

**Cut frequency, fixed the rotation.** I rewrote the publishing script to pull
from 12 real topics instead of 3, on a deterministic day-of-week rotation
instead of a random pick, and dropped the schedule from 35 posts a week to 11.
Fewer, less repetitive posts, each one now injected with verified current
financial data instead of generic filler, plus FAQ and comparison-table schema
markup so there was an actual structured answer for something to cite.

**Deleted the cruft on purpose.** Rather than trying to rescue four months of
near-duplicate pages, I ran a cleanup script that removed 544 posts outright.
Painful to watch the post count drop that fast. Necessary — a smaller set of
distinct, real pages beats a large set of pages fighting each other.

**Got the sitemap actually working again**, then separately found and loosened
a Cloudflare rule that had been blocking AI-crawler traffic more aggressively
than intended — worth checking for on any site that's turned on "block AI
bots" style settings without auditing exactly which user agents that covers.

**Rebuilt the homepage as an actual homepage** — a real entry point into the
content, not a funnel straight to a pricing page.

## Where it stands now

Google's Index report for the site currently shows 1,250 pages indexed
against 1,090 still excluded. Looking at the last two and a half months on
that chart, the indexed count has climbed steadily — from roughly 800 pages
in early June to over 1,600 now — while the excluded count has stayed close
to flat. That's the shape you want: growth in the "in" column, not the "out"
column.

The single biggest reason still sitting in that excluded bucket — 857 pages —
is "crawled, currently not indexed." That's Google's polite way of saying it
looked at a page and decided it wasn't worth including, which tracks with how
many of those pages used to be near-duplicates of each other. The old
disaster-level signals, meanwhile, are down to noise: only 15 pages still
showing a 404, only 3 blocked by robots.txt.

I don't have a clean side-by-side traffic export for the original four-month
window versus now — I didn't think to pull that data until after most of the
fixes had already shipped, which is its own small lesson (export your
baseline before you start changing things, not after). What I can say for
certain, from the chart above: the index count is trending up, not flat,
since the cleanup.

## The takeaway, if you're running something similar

If you've automated content production for a site you run solo, "posts
published per week" is a vanity number until you've separately confirmed three
boring things: your topics aren't secretly repeating, your sitemap is actually
current, and your homepage gives a new visitor (human or crawler) somewhere
real to go. None of that requires an agency. It requires actually looking.
