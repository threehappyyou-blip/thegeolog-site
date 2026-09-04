---
title: "1,885 Pages Added Schema Markup. Their AI Citations Didn't Move."
description: "FAQ schema is the most recommended AI-search tactic on the internet. A controlled study tracking real pages found no meaningful citation gain from adding it."
pubDate: 2026-09-04
status: "note"
tags: ["schema-markup", "fact-check", "ai-search"]
draft: true
---

FAQ schema shows up on nearly every AI-search checklist as the highest-leverage
technical change a site can make. Several widely shared posts cite figures in
the range of two to three times more citations after adding it. I went
looking for the study behind those numbers before implementing it broadly.
What I found instead was a controlled experiment with the opposite
conclusion.

## The claim

The pitch is straightforward: AI systems answer questions, so content marked
up as a question-and-answer pair should be easier for a model to lift and
cite. Several SEO blogs report substantial, specific multipliers — one
frequently cited figure is roughly three times the citation rate for pages
with FAQ schema compared to pages without it.

## The study that actually tested it

Ahrefs ran the more rigorous version of this test. Between August 2025 and
March 2026, its research team tracked 1,885 real pages that added JSON-LD
schema, matched them against roughly 4,000 comparable pages that didn't, and
measured the change in citations across Google AI Overviews, AI Mode, and
ChatGPT using a matched difference-in-differences design — a method built
specifically to separate a genuine effect from ordinary variation between
similar pages.

<div class="callout">
<p class="eyebrow">what the matched comparison found</p>
<p>No meaningful citation increase on any platform. AI Overviews even showed a small decline relative to the control group, though the researchers considered that difference too close to noise to treat as a real effect.</p>
</div>

## Why the informal numbers look so much better

The pages that already carry structured data tend to also be the pages doing
everything else correctly: clean technical SEO, well-maintained content,
established authority, strong existing rankings. Line those pages up against
a random sample without schema, and of course the schema group cites better —
schema is riding alongside a dozen other advantages, not causing the result
on its own. Strip the markup out of an otherwise well-run page, and the
evidence suggests the rest of those signals still carry it through to
citation.

There's also a structural reason to be skeptical going forward: Google
confirmed in May 2026 that FAQ rich results are being phased out of Search
entirely, with the feature removed from Search Console, the Rich Results
Test, and the API by August. A tactic that a platform is actively
deprecating is a strange one to treat as the centerpiece of an AI-visibility
strategy.

## What seems to correlate instead

A separate analysis of roughly 800,000 AI responses across ChatGPT, Gemini,
Perplexity, and Google's AI Mode found a much larger gap tied to something
else entirely: businesses with no active review presence were cited in about
1% of relevant answers, while businesses that actively collected and
responded to reviews were cited in over 75% of them. That's a difference
worth chasing. A few extra FAQ blocks are not.

## The takeaway

Schema markup isn't doing anything harmful, and there are legitimate reasons
to keep using it — other rich results, voice assistants, and general entity
clarity all still benefit. But the evidence doesn't support treating it as
the lever that gets a page cited by AI. The pages that actually earn
citations appear to be earning them through content quality, third-party
verification, and cross-platform trust signals — the slower, less
markup-shaped work that doesn't fit neatly into a checklist item.
