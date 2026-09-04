# Content playbook

Reference this before publishing anything new. Three sections: AdSense
readiness, what makes a good post (SEO + click-through), and getting posts
indexed fast.

## 1. Before applying for AdSense

Google doesn't publish an exact bar, but these are the concrete,
commonly-cited blockers worth clearing first:

- [ ] **No "under construction" look.** A homepage or log page that says
      "check back shortly" is exactly the kind of thin/incomplete signal that
      gets an application rejected. Don't apply until the log page has real
      entries and the homepage rail is populated.
- [ ] **A real number of substantive posts.** There's no official minimum,
      but informally, sites with fewer than ~15–20 solid, original posts get
      rejected far more often than sites with more. Depth matters more than
      count — a handful of 1,500+ word case studies beats a pile of 300-word
      posts.
- [ ] **Privacy Policy page live** — done, at `/privacy`.
- [ ] **Contact method visible** — done, `hello@thegeolog.com` in the footer
      and About page.
- [ ] **Original content only.** This is the one area this site should never
      have to worry about, structurally — every case-study post traces back
      to a real, verifiable fix. Keep it that way; don't pad the count with
      generic AI-search "definition" posts that read like everyone else's.
- [ ] **Easy navigation, no broken links.** Check this before applying —
      click every nav link and every post.
- [ ] Once approved: don't stack multiple ad networks or intrusive pop-ups.
      AdSense policy (and readers) penalize both.

## 2. Per-post checklist (SEO + click-through)

Run through this before hitting publish (before flipping `draft: false`):

- [ ] **Title**: specific, not generic. A number or concrete detail beats an
      abstract claim — "35 posts a week, zero traffic" outperforms "Why
      content frequency doesn't guarantee traffic." Keep it under ~60
      characters so it doesn't get truncated in search results.
- [ ] **Description** (the `description` frontmatter field): written like ad
      copy, not a summary. It's the pitch that gets the click in a results
      page. Under ~155 characters. State the specific outcome, not just the
      topic.
- [ ] **First 2–3 sentences of the body** restate the specific claim from the
      title in plain language. This is what both classic search snippets and
      AI answer engines tend to quote — don't bury the actual finding under
      throat-clearing.
- [ ] **One clear H1** (the title), organized under `##` subheads — already
      the site's convention (`## Finding 1`, `## What I did`, etc.). Keep
      following it; consistent structure helps both readers scanning and
      crawlers parsing.
- [ ] **Internal links**: once there are 2+ related posts, link between them.
      Helps crawl discovery and keeps readers on-site longer (both matter for
      AdSense RPM and for Google's engagement signals).
- [ ] **Tags**: 2–4, reused consistently across posts (`technical-seo`,
      `case-study`, etc.) rather than inventing a new tag each time — this is
      what will eventually make a `/log?tag=x` filtered view worth building.
- [ ] **No placeholder brackets left in.** Search the file for `[insert:`
      before publishing — the automation intentionally leaves these when it
      doesn't have a real number; they must be filled in by hand.

## 3. Getting a new post indexed fast

- [ ] **One-time setup** (do this once, not per post): add this property in
      [Google Search Console](https://search.google.com/search-console),
      verify ownership, and submit `https://thegeolog.com/sitemap-index.xml`.
- [ ] **Per post**: after merging a new entry, use Search Console's URL
      Inspection tool on the new post's URL and click "Request Indexing."
      This is usually much faster than waiting for organic re-crawl.
- [ ] **Never change a published slug.** Once a post is live at
      `/log/some-slug/`, that URL is permanent. Renaming it later is exactly
      what caused the mass-404 problem on the other site — if a title needs
      to change, the slug (filename) doesn't have to.
- [ ] **Depth over frequency.** No fixed schedule to hit — one well-verified,
      1,000+ word case study beats three thin posts. The site's entire
      premise is the opposite of scaled publishing; the cadence should prove
      that, not just the copy.

## 4. Turning on comments (Giscus)

Comments are already wired into every post (`src/components/Comments.astro`)
but need two real IDs from GitHub before they'll actually render. One-time
setup:

- [ ] Repo → **Settings → General → Features** → check **Discussions**.
- [ ] Install the [giscus app](https://github.com/apps/giscus) on this repo
      only (not all repos).
- [ ] Go to [giscus.app](https://giscus.app), enter
      `threehappyyou-blip/thegeolog-site` under Repository. Once it shows a
      green check, set Mapping to "pathname" and Category to "Comments"
      (create that category if it's not offered). Scroll down — it generates
      the real `<script>` snippet with your actual `data-repo-id` and
      `data-category-id`.
- [ ] Copy those two values into `src/components/Comments.astro`, replacing
      `TODO_REPO_ID` and `TODO_CATEGORY_ID`.
