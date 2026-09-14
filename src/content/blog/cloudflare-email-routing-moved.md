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
<p class="eyebrow">what actually happened on screen</p>
<p>Two dead-end page loads — /email/dmarc-management, then /email/security — before I stopped assuming Email Routing had just moved down a menu and started searching for where it actually went instead.</p>
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

## Where things stand

The rule is live: mail to hello@thegeolog.com is set to forward, status
shows Active. I haven't sent the confirmation test email yet as of writing
this — I wrote this entry before actually confirming it reaches an inbox,
which is a slightly backwards order of operations. Updating this line once I
know for sure.
