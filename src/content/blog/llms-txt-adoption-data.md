---
title: "10% of Sites Have Added llms.txt. Only 1 of the Top 50 AI-Cited Sites Has."
description: "llms.txt got pitched as the new robots.txt for AI search. The adoption data, the server logs, and Google's own statements all point the same direction: it isn't doing much."
pubDate: 2026-08-30
status: "note"
tags: ["llms-txt", "fact-check", "ai-search"]
draft: true
---

I almost added an `llms.txt` file to both of my sites on faith. It's cheap, it's
quick, and half the "AI search checklist" posts out there list it as step
one. Before I did, I went looking for evidence that it actually changes
anything. It mostly doesn't — at least not yet, and not in the way it's being
sold.

## What it's supposed to do

The pitch is simple: `llms.txt` is a plain-text file at your site root that
tells AI systems what your site is about and which pages matter, the same way
`robots.txt` tells crawlers what they can access. Add it, and in theory an AI
model has an easier time understanding and citing your content.

## What the adoption numbers actually show

A study that checked roughly 300,000 domains found about 1 in 10 had added
an `llms.txt` file. Narrow that same dataset down to the fifty domains AI
systems cite the most often, and the number drops to exactly one. If the file
mattered for getting cited, you'd expect the opposite pattern — heavy adoption
among the sites that actually get quoted. It's the reverse.

## What happens when you look at server logs

Separately, log analysis on sites that do have the file found that the large
majority of them — over 95% in the sample — recorded zero real AI-crawler
requests for it, ever. Some of the traffic that did hit the file wasn't an AI
system at all; a meaningful chunk of it was other SEO tools checking whether
the file existed, not a language model reading it.

<div class="callout">
<p class="eyebrow">the statistical version</p>
<p>One analyst ran llms.txt presence through a model predicting which sites get cited by AI. Removing the variable entirely made the model's predictions slightly more accurate — a fancier way of saying it found no real relationship at all.</p>
</div>

## What the platform itself says

Google's own John Mueller and Gary Illyes have said directly, on the record,
that Google does not use `llms.txt`. It isn't part of how their systems parse
a site, for AI Overviews or otherwise.

## So what actually seems to matter instead

Nothing here means AI visibility is unsolvable — it means the leverage isn't
in a new text file nobody's reading. The things that keep showing up in
adoption and citation data instead: making sure crawlers can actually reach
your content in the first place (a shocking number of sites accidentally
block the exact bots they want), clear structure and real schema markup, and
content that directly and specifically answers a question instead of circling
it. Slower to do than dropping a text file at your root. Also the part that
seems to be doing the actual work.

## The takeaway

If `llms.txt` is already on a site, it's not hurting anything — it costs
nothing to leave in place. But it isn't a checklist item worth spending real
time on, and it's definitely not a substitute for the boring technical work
(crawlability, schema, actually answering the question) that the data
suggests is doing the heavy lifting.
