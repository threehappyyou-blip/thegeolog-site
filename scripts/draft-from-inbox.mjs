#!/usr/bin/env node
// scripts/draft-from-inbox.mjs
//
// Reads raw notes from drafts/inbox/, asks Claude to draft a full log entry
// in TheGEOLog's voice, and writes it into src/content/blog/.
//
// Safety property this script guarantees: every file it writes has
// `draft: true`, regardless of what the model returns. Publishing is always
// a separate, manual step (flip draft to false, then merge the PR).

import { readdir, readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';

const INBOX_DIR = 'drafts/inbox';
const PROCESSED_DIR = 'drafts/processed';
const BLOG_DIR = 'src/content/blog';

// Swap to 'claude-haiku-4-5-20251001' for cheaper/faster drafts, or
// 'claude-opus-5' for max quality on the harder case-study writeups.
const MODEL = 'claude-sonnet-5';

const SYSTEM_PROMPT = `You draft posts for TheGEOLog, a solo operator's dated, public log of real fixes to AI-search-visibility problems on their own live sites.

Voice: plain, specific, first person, no marketing language, no hype, no invented urgency. For case-study/teardown notes, structure the body as: what was happening, numbered findings using "## Finding 1", "## Finding 2" etc., what I did about it, where it stands now, and the takeaway. For a quick note or a fact-check, a shorter structure is fine — don't force the findings format onto something that isn't a teardown.

Hard rule, non-negotiable: only state facts, numbers, and dates that are explicitly present in the notes you're given below. Never invent a statistic, a date, or an outcome, and never smooth over a gap by guessing a plausible-sounding number. Anywhere a real number would strengthen the post but the notes don't supply one, write a bracketed placeholder like [insert: exact organic traffic change from Search Console] instead.

Respond with ONLY a single JSON object — no markdown code fences, no commentary before or after — matching exactly this shape:
{
  "title": string,
  "description": string,
  "status": "fixed" | "broken" | "note" | "teardown",
  "tags": string[],
  "body": string
}

Field notes:
- description: one sentence, under 160 characters, written for a meta description.
- status: "fixed" if the notes describe a resolved problem, "broken" if it's still unresolved, "teardown" for a full multi-part audit, "note" for a short observation or fact-check.
- tags: 2-4 short kebab-case tags.
- body: the post body in Markdown, using "##" for headings. You may use one
  <div class="callout"><p class="eyebrow">label</p><p>text</p></div> block for
  a single key emphasis, but don't overuse it.`;

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 60);
}

function escapeYamlString(s) {
  return String(s).replace(/"/g, '\\"');
}

async function draftFromNotes(notes) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 6000,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: notes }],
    }),
  });

  if (!res.ok) {
    throw new Error(`Anthropic API error ${res.status}: ${await res.text()}`);
  }

  const data = await res.json();
  const textBlock = data.content.find((b) => b.type === 'text');
  if (!textBlock) throw new Error('No text content in the Claude response.');

  try {
    return JSON.parse(textBlock.text);
  } catch {
    throw new Error(`Could not parse JSON from Claude's response:\n${textBlock.text.slice(0, 500)}`);
  }
}

function toFileContents(draft) {
  const today = new Date().toISOString().slice(0, 10);
  const tags = (draft.tags || []).map((t) => `"${escapeYamlString(t)}"`).join(', ');
  return `---
title: "${escapeYamlString(draft.title)}"
description: "${escapeYamlString(draft.description)}"
pubDate: ${today}
status: "${draft.status}"
tags: [${tags}]
draft: true
---

${draft.body}
`;
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error('ANTHROPIC_API_KEY is not set. Add it as a repository secret first.');
  }

  let files = [];
  try {
    files = (await readdir(INBOX_DIR)).filter((f) => !f.startsWith('.'));
  } catch {
    console.log(`No ${INBOX_DIR} directory found — nothing to draft.`);
    return;
  }

  if (files.length === 0) {
    console.log('Inbox is empty — nothing to draft.');
    return;
  }

  await mkdir(PROCESSED_DIR, { recursive: true });

  for (const file of files) {
    const inboxPath = path.join(INBOX_DIR, file);
    const notes = await readFile(inboxPath, 'utf8');

    if (!notes.trim()) {
      console.log(`Skipping empty file: ${file}`);
      continue;
    }

    console.log(`Drafting from ${file}...`);
    const draft = await draftFromNotes(notes);
    const slug = slugify(draft.title) || `entry-${Date.now()}`;
    const outPath = path.join(BLOG_DIR, `${slug}.md`);

    await writeFile(outPath, toFileContents(draft), 'utf8');
    console.log(`  -> wrote ${outPath} (draft: true, status: ${draft.status})`);

    await writeFile(path.join(PROCESSED_DIR, file), notes, 'utf8');
    await rm(inboxPath);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
