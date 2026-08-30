# How to get a draft written

1. Write a plain text or markdown file with rough, raw notes about something
   that actually happened on one of your sites. Full sentences aren't
   necessary — bullet points of real facts work fine.
2. Push that file into `drafts/inbox/` on `main` (GitHub's web "Add file" →
   "Create new file" works fine for this).
3. That push triggers the `Draft from inbox` GitHub Action, which asks Claude
   to turn your notes into a fully structured post and opens a pull request.
4. Check the **Pull requests** tab. The new PR:
   - is always `draft: true`, so merging it alone does not publish anything
   - only states facts your notes actually contained — anywhere a number
     would help but your notes didn't have one, it left a bracketed
     `[insert: ...]` placeholder instead of guessing
5. Read it, fix anything off, fill in the placeholders, change `draft: true`
   to `draft: false`, then merge. Cloudflare Pages deploys automatically.

## Example note

```
- site: poppopmake.com
- date noticed: 2026-09-02
- problem: the 401k calculator page stopped showing up in Google's "People
  also ask" box after changing the FAQ schema format
- root cause: new FAQ markup was missing the required @type field on one of
  the Question entries, so the whole FAQPage block failed validation
- fix: corrected the schema, resubmitted the URL in Search Console
- status: fixed, but haven't confirmed the PAA box came back yet
- tags: schema, faq, technical-seo
```

## One-time setup this needs

In the GitHub repo: **Settings → Secrets and variables → Actions → New
repository secret**, name it `ANTHROPIC_API_KEY`, and paste in a key from
console.anthropic.com (Get API Keys → Create Key). This is billed separately,
per token, from a Claude.ai Pro/Max chat subscription — it is not the same
account balance. Usage here should be small (a few thousand tokens per
draft), but it isn't free.

If you'd rather not manage a separate metered API key, Anthropic's official
Claude Code GitHub Action is worth a look as an alternative trigger — it can
run against a Claude subscription in some setups. Worth checking
docs.claude.com for the current setup steps if you want to go that route
instead of this script.
