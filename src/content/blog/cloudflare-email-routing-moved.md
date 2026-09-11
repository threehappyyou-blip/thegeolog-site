---
title: "I Kept Clicking 'Email' Looking for Email Routing. It Wasn't There Anymore."
description: "Setting up hello@thegeolog.com should have taken five minutes. Cloudflare had quietly moved the whole feature somewhere I never would have guessed."
pubDate: 2026-09-11
status: "fixed"
tags: ["cloudflare", "email-routing", "case-study"]
draft: false
---

Today's job was supposed to be small: get hello@thegeolog.com forwarding to
my personal inbox. Every guide I'd half-remembered said the same thing — go
to the domain, click Email, click Email Routing, add a forwarding rule, done
in five minutes. That's not what happened.

## Where I looked first

I opened the thegeolog.com dashboard, clicked **Email** in the sidebar, and
got two options: **DMARC Management** and **Email Security**. Neither one
was what I wanted. DMARC Management tracks who's sending mail on your
behalf and flags spoofing. Email Security is a phishing-protection product.
Both real features, both useful eventually, neither one a forwarding rule.

I clicked around inside both anyway, on the assumption that "Email Routing"
had just been renamed or buried a level deeper. It hadn't. It genuinely
wasn't under Email at all anymore.

## Where it actually was

Cloudflare had restructured the whole thing. Email Routing moved out of the
per-domain Email section entirely and now lives at the account level, under
**Compute → Email Service → Email Routing** — the same place Workers & Pages
lives, not anywhere near where the domain-specific email settings are. If
you're hunting for a standalone "Email Routing" item in a domain's sidebar
the way older guides describe, it's not a matter of scrolling further. It
moved to a different part of the dashboard entirely.

<div class="callout">
<p class="eyebrow">what this cost</p>
<p>Nothing broke and nothing was lost — it just meant a detour through two irrelevant settings pages before finding the actual feature. The lesson isn't "Cloudflare did something wrong." It's that a mental model of where a setting lives can go stale without any announcement, and the fix is checking the live dashboard rather than trusting what you remember from six months ago.</p>
</div>

## The part that went smoother than expected

Once I found Email Service and onboarded thegeolog.com into it, the setup
actually got easier than I'd braced for. Destination addresses turn out to
be shared across an entire Cloudflare account, not scoped to one domain — so
the personal inbox I'd already verified while setting up email forwarding on
my other two sites was sitting there ready to reuse. No second verification
email, no extra step.

## The mistake I almost made

When I got to creating the actual routing rule, I nearly picked a destination
address from memory instead of checking what was actually listed. The
address I expected to see and the address that was actually configured
weren't the same one — an old assumption from earlier in the process that
hadn't been true for a while. Worth double-checking the real value on screen
rather than the one you're carrying around in your head, especially after a
detour that already had two wrong turns in it.

## Where it stands now

The rule is live: mail to hello@thegeolog.com forwards to the correct inbox,
status shows Active. Sending a live test message is the last step, still
pending as of writing this.

## The takeaway

Platforms move things. Docs and old tutorials — including the ones in your
own head — lag behind. When a setting isn't where a guide says it should be,
the fastest path isn't clicking around the same wrong section harder. It's
checking whether the feature moved somewhere structurally different, and
verifying every value on the actual current screen instead of the one you
remember.
