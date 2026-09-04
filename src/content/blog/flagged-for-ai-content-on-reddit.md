---
title: "I Got Flagged for Posting AI Content on Reddit. So I Built the Tool That Should've Existed."
description: "A Reddit AI-detection flag turned into the reason for a new product — and a reminder that the fix was never about sounding more human."
pubDate: 2026-09-04
status: teardown
tags: [case-study, build-in-public, ai-disclosure]
draft: false
---

I run an automated content pipeline for a personal finance newsletter. Part of that pipeline drafts casual, Reddit-style posts from the newsletter's own articles — the idea being: put the insight where people already hang out, not just wait for search traffic to find it.

Two days ago I tried to post one of those drafts. Reddit flagged it. *"This looks like it may have been written by AI."*

It probably reads that way because it was. But that's not the interesting part.

## What actually happened

The post was about bond funds and interest rates — genuinely useful, tied to a real article on the site. The pipeline had rewritten it in a casual, first-person "had a wild realization" voice, aimed at r/povertyfinance and r/UKPersonalFinance. It ended the way a Redditor might casually drop a source: *"found this breakdown here, if u care,"* link attached.

It read like someone sharing something they'd found. It wasn't. And 2026's Reddit isn't quiet about that gap anymore — the number of subreddits with explicit AI-content rules has more than doubled since 2023, and undisclosed AI assistance now risks removal or an outright ban, not just a quiet downvote.

## The bug wasn't the writing

I spent about a minute wondering if I could just prompt my way to sounding more human. Wrong question. The problem was never the prose — it was the shape of the post: an anonymous-looking account, dropping a link to a commercial site, styled as an organic recommendation, with zero disclosure. Reddit's own self-promotion guidance puts a rough ceiling on this — under 10% of your activity should ever be self-promotional, and none of it should be dressed up as something it isn't. A better sentence generator doesn't fix a post that was never supposed to look anonymous in the first place.

## So I'm building the tool I actually needed

Not a tool that auto-posts convincingly. A tool that hands you a fast first draft — pulled from something you already wrote — and then gets out of the way. You finish it, you post it as yourself, you disclose if the platform asks you to. The AI's job ends at the draft. That's the whole pitch.

It's called Loosecopy. The landing page is up, the waitlist is open, and nothing else exists yet — no backend, no real product logic, just proof the problem is worth solving. That's deliberate. I'd rather find out now whether anyone else has hit this same wall before I write a line of the actual thing.

[loosecopy.com](https://loosecopy.com), if you want to see it.
