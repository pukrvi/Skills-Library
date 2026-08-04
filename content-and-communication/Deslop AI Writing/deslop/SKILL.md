---
name: deslop
description: Audit and rewrite text so it stops reading as AI-generated. Use when asked to "deslop", "remove AI writing", "make this sound human", "clean up AI slop", "does this sound like AI", "remove em dashes", "audit this for AI tells", or when checking whether a draft has ChatGPT, Gemini, or Claude fingerprints on it. Handles vocabulary, phrasing, sentence structure, punctuation, invisible Unicode artifacts, formatting, and rhythm. Supports detect-only, rewrite, and edit-file-in-place modes.
license: MIT
metadata:
  version: 1.0.0
  compiled: 2026-08
  spec: agentskills 1.0
---

# Deslop

Text that reads as machine-written has a fingerprint. This skill finds it and removes it.

## Read this before you start

**Signals, not proof.** Every pattern here is statistically more common in LLM output. Humans on deadline, humans writing in a second language, and humans writing in unfamiliar genres produce the same shapes. Open-source AI detectors misclassify 30–69% of human text; a 2023 Stanford study found 61.3% of non-native TOEFL essays flagged as AI. Never use this skill's output as the basis for an accusation.

**Density, not presence.** One em dash is fine. One triad is fine. One "however" is fine. Three or more distinct tells inside a few hundred words is the diagnostic threshold. Wikipedia's own guide says it plainly: *a single sign proves nothing.*

**The goal is prose a reader trusts, not a number a detector prints.** Detector-optimization is adversarial to quality — the cheapest way to raise perplexity is worse word choice, and the cheapest way to raise burstiness is random sentence-chopping. That is exactly what humanizer tools do, and their output is recognizably damaged. Fix the writing; the score follows.

**These markers detect *unedited* AI use, not AI use.** 92% of the Fortune 500 uses these tools. A human-edited corpus of 13,308 words scored near-zero on every pattern in this file.

---

## Modes

**`rewrite`** (default) — flag the tells, return a clean version, show what changed, then re-audit your own rewrite.

**`detect`** — flag only. No rewriting. Use when the writer wants to decide for themselves, when the patterns may be intentional, when auditing published or third-party text, or when they just want a quick scan.

**`edit`** — edit a named file in place with minimal, targeted edits. Change the flagged spans, not the document. Leave already-human paragraphs untouched. Never rewrite quoted material, code blocks, or text attributed to someone else — flag those instead. For a large file, confirm which section to clean first. After editing, re-read the file and confirm the patterns resolved.

Trigger `detect` on "detect", "flag only", "audit only", "scan", "just tell me what's wrong". Trigger `edit` when the user names a file and asks you to fix it. Default to `rewrite`.

Optional switches, all inferable from natural language: `--mode`, `--model gpt|gemini|claude|unknown`, `--register social|blog|technical|exec|docs|casual`, `--voice casual|professional|technical|warm|blunt`, `--depth quick|full`.

---

## The procedure

Run these passes **in this order**. Order matters: most surface tells disappear on their own once the substance is real, so fixing diction first wastes work.

### Pass 0 — Machine fingerprints (mechanical, always)

These are not stylistic patterns. They are artifacts, and their presence is near-proof that text was pasted out of a chat UI without cleanup. Strip every one, always, in every register:

- Citation markup leaks: `citeturn0search0`, `contentReference[oaicite:0]{index=0}`, `oai_citation`, `[attached_file:1]`, `grok_card`
- Tracking parameters on URLs: `utm_source=chatgpt.com`, `utm_source=copilot.com`, `utm_source=claude.ai`, `utm_source=perplexity.ai`, `referrer=grok.com` — keep the URL, drop the parameter
- Unfilled placeholders: `[Your Name]`, `[INSERT SOURCE URL]`, `[Describe the specific section]`, `2025-XX-XX`, `<!-- add citation -->`
- Reasoning-chain leakage in published prose: "Let me think step by step", "Breaking this down", "To approach this systematically", "Here's my thought process"
- Model-limitation disclaimers: "As of my last update", "I don't have access to real-time data", "based on available information"
- Invisible Unicode: U+00A0, U+2009, U+202F, U+200B, U+200D, U+2060, homoglyphs, ligatures ﬁ ﬂ, fullwidth forms, styled math letters

See `references/typography.md` for the full character table and the context rules on curly quotes and ellipses.

### Pass 1 — Substance

This pass fixes more tells per edit than any other. Slop is a shortage of specifics, not a surplus of em dashes.

1. **Specificity check.** Does every paragraph carry at least one number, name, date, version, measurement, or concrete example? A paragraph with none is a deletion candidate.
2. **Opening check.** Delete the first sentence if it could open any article on this topic. "In today's fast-moving landscape of…" is not an opening; it is a warm-up.
3. **Closing check.** Delete the last paragraph if it introduces no new information.
4. **Reshuffle test.** Can two body paragraphs swap places without breaking the piece? If yes, there is no argument — only a list of topics. Add causal connective tissue or cut.
5. **Treadmill test.** For each paragraph, name the one fact, claim, or turn it contributes. If there isn't one, cut it. Typical AI drafts lose nothing at 40–60% shorter.
6. **Attribution.** Every "experts say / studies show / research suggests / industry reports indicate" gets a named source or gets cut.
7. **Hedge collapse.** Every stack ("could potentially", "may eventually", "it seems likely that perhaps") reduces to one hedge, or to a concrete statement of what is actually unknown. "I haven't tested this above 10k rows" beats "this could potentially present challenges at scale."

### Pass 2 — Sentence structures

The load-bearing pass. These survive word-swapping, which is why a ban list alone never works.

Full catalogue with variants and carve-outs in `references/structures.md`. The priority targets:

1. **Negative parallelism** — "It's not X, it's Y" and every variant, including the split-across-two-sentences form and the multi-negation countdown. Rewrite as a direct positive claim. Cap: one per piece, and only if it earns its place.
2. **Rule of three** — the tell is *defaulting* to three, including padding to three with a filler item. Let the content set the count; use two and four deliberately.
3. **Rhetorical question and answer** — "The result? Devastating." Merge into a declarative.
4. **Copula avoidance** — serves as / stands as / functions as / operates as / represents / boasts / features / maintains / offers. Restore `is` and `has`.
5. **Superficial -ing tails** — "…, highlighting the team's commitment to innovation." Say the specific consequence or cut.
6. **False ranges** — "from X to Y" where X and Y aren't on a spectrum.
7. **Throat-clearing openers** — "Here's the thing", "Let's be clear", "It's worth noting that", "At its core", "When it comes to", "The catch?", "Plot twist:".
8. **Assistant residue** — "Great question!", "Certainly!", "You're absolutely right!", "I hope this helps!", "In this article, we will explore".
9. **Formulaic conclusions** — "In conclusion", "Ultimately", "At the end of the day", "The future looks bright", "Only time will tell".
10. **Invented labels** — pseudo-technical compounds coined mid-sentence and never defined ("the supervision paradox", "the acceleration trap"). Define the term on first use or describe the mechanism instead of branding it.

### Pass 3 — Rhythm

AI text is metronomic. Human text is not. Structural regularity is weighted above vocabulary by every serious detector, so a draft with every flagged word fixed and the rhythm untouched still reads as machine output.

| Metric | AI-typical | Human-typical | Target |
|---|---|---|---|
| Sentence-length SD | 0.5–3 | 5–20 | **≥ 5** per 10-sentence window |
| Type-token ratio (200+ words) | 0.35–0.45 | 0.50–0.65 | flag under 0.40 |
| Transition-word density | 3–8 / 100 words | 0–2 / 100 | **under 2** |

- Every paragraph gets either a sentence under 8 words or one over 25.
- At least one 1-sentence paragraph per ~600 words. Paragraph lengths must not be uniform.
- No two consecutive sentences opening with the same word or grammatical construction. AI loves `This means…` / `This allows…` / `It's worth noting…`.
- Delete every however / moreover / furthermore / additionally the logic doesn't need. That is most of them. If the connection isn't already there, the transition word is papering over a missing argument.
- Undo synonym cycling. "developers… engineers… practitioners… builders" for one group is thesaurus abuse. Repeat the precise noun.

Treat these numbers as **diagnostics of craft problems, not as goals.** If sentence-length SD is 1.2, the fix is not "split some sentences." It is: you have four sentences making the same-sized claim, and you are not varying the granularity of your thinking.

### Pass 4 — Diction

Only now touch the word list. Tiers matter more than length — a flat 400-word ban mangles domain vocabulary and produces stilted text.

- **Tier 1A — always replace.** True frequency markers. A cluster is evidence about how the text was produced.
- **Tier 1B — always replace, but NOT evidence.** Wordiness and inflated formality (`utilize`, `in order to`, `commence`). These fire on ordinary human formal prose. Fix them, and never present the fix as an authorship signal.
- **Tier 2 — flag when 2+ appear in one paragraph.** Fine alone, a signal together.
- **Tier 3 — flag only at high density** (roughly 3%+ of the text).

Match inflected forms: `delve` covers `delving`/`delved`, `meticulous` covers `meticulously`. Judge by context when a variant has a separate honest sense.

Full tiered lists, per-model lists, and the 2026 plain-word layer: `references/vocabulary.md`.

### Pass 5 — Typography and formatting

- **Em dashes ≤ 1 per 1,000 words.** Convert the rest to commas, colons, periods, or parentheses — **and change the sentence shape**. Swapping `—` for a spaced ` – ` fixes nothing; it keeps the same appositive-emphasis rhythm under a different glyph.
- **En dashes stay** where they are correct (ranges `1990–2000`, scores, `Bose–Einstein`). Models under-use these, so their presence is a human signal.
- Bold: at most one phrase per major section. Kill every `**Term:** definition` bullet stack — the single most recognizable AI formatting fingerprint.
- Headings in sentence case, not Title Case. No emoji in headings outside social. No `---` rule between every section.
- Bullets: never 8+ in under 200 words; never 5+ verbless adjective-noun items ("Stable mining efficiency / Reliable pool connectivity") — the symmetry is the tell. Convert to prose unless the content is genuinely list-shaped.
- No arrow characters (→ ⇒ ➜) as connectors in running prose.
- List-label periods: `**Intros.** Years of conferences` → `**Intros:** years of conferences`.
- Never 3+ headings in under 300 words. Never generic headers: Overview / Key Points / Summary / Conclusion / Introduction.
- Social: never 6+ trailing hashtags.
- Conversational registers: a reply under ~150 words with 4+ sentences and zero line breaks is a wall-of-text tell. Break at thought boundaries.

### Pass 6 — Put a person back in (deliberately, last)

Removal is half the job. A rewrite that clears every flag but reads sterile — even sentence lengths, no stance, no first person where one belongs — is still recognizably machine output.

- Is there at least one opinion, preference, or judgment the author owns?
- Is there one admitted limitation, or one thing the author doesn't know?
- Is there one fragment, aside, or bit of rhythm a copyeditor might flag?
- Read it aloud. Where you run out of breath or drift, cut.

For encyclopedic, technical, or legal text, neutral and plain **is** the correct human voice. Do not inject personality there.

---

## Model-aware auditing

If the user says which model produced the text, or you can tell, weight the audit accordingly. The three major models have genuinely different fingerprints.

| | ChatGPT / GPT | Gemini | Claude |
|---|---|---|---|
| Tells skew | lexical and ornamental | organizational | epistemic and rhetorical |
| Look first at | word list, em dashes, tricolons | bullet density, heading density, next-step closer | hedge stacks, "worth noting", reframing, sycophancy |
| Em dashes /1k words | 10.62 | 3.53 | 9.09 |
| Signature move | "delve"-family, tapestry-nouns; 2026: quietly / matters / real / land | bolded-label bullets, comparison tables, mandatory follow-up suggestion | "You're absolutely right", "Here's the thing", genuinely / honestly / straightforward |
| Failure mode | over-enthusiasm, generic | sterile corporate template | over-hedged, over-long |

Human em-dash baseline: 3.23 per 1,000 words, range 0.33–17.12. The overlap is wide, which is why em-dash count alone is a bad test.

Per-model detail and evidence in `references/vocabulary.md` §Model fingerprints.

**Caveat with a shelf life.** The 2023 Latinate signature (delve, intricate, meticulous, pivotal) is being patched out by vendors *and* absorbed into human speech — an 18-month study found delve +48% and meticulous +40% in human academic speech. Those words now indicate era more than authorship. The 2026 signature is short and plain: quietly, matters, real, shift, land, earn, "the work". Re-check this list roughly every 18 months.

---

## Register calibration

A flat ruleset breaks technical writing. Strictness varies by register — full tolerance matrix in `references/registers.md`.

Quick version:

| Rule | Social | Blog | Technical | Exec/investor | Docs | Casual |
|---|---|---|---|---|---|---|
| Em dashes | 2/post OK | strict | strict | strict | relaxed | skip |
| Bullets | skip | strict | relaxed | strict | skip | skip |
| Hedging | strict | strict | relaxed | strict | relaxed | skip |
| Word list | strict | strict | **partial** | strict | relaxed | P0 only |
| Promotional | relaxed | strict | strict | **extra strict** | strict | skip |
| Uniform paragraphs | skip | strict | strict | strict | relaxed | skip |

**Technical exemptions** — legitimate in context, do not flag: `robust`, `comprehensive`, `seamless`, `ecosystem`, `leverage` (actual platform leverage), `facilitate`, `underpin`, `streamline`. Still flag even in technical prose: `delve`, `tapestry`, `beacon`, `embark`, `testament to`, `game-changer`, `harness`.

Auto-detect when unspecified: under 300 words with hashtags → social; code blocks or API references → technical; salutation plus fundraising language → exec; step-by-step or parameter docs → docs; no strong signal → blog (the strictest safe default). Say which register you picked and why so the user can override.

---

## Severity

**P0 — credibility killers.** Machine fingerprints, cutoff disclaimers, chatbot artifacts, sycophantic openers, vague attributions, significance inflation on routine events.

**P1 — obvious AI smell.** Tier-1 words, negative parallelism, template phrases, "Let's" openers, formulaic openings, bold overuse, em-dash rate, future-narrative closers, hedge stacks, bare-noun-phrase bullet lists.

**P2 — polish.** Generic conclusions, rule of three, uniform paragraph length, copula avoidance, transition phrases.

`--depth quick` covers P0 and P1. `--depth full` covers all three.

---

## Hard constraints on you as the editor

The predictable failure mode of "make it sound human" is installing a *humanizer voice* — staccato fragments, fake first person, manufactured stakes. That trades one detectable register for a louder one. An independent stress test of a popular humanizer prompt found exactly this: generic AI phrasing replaced by a recognizable humanizer fingerprint.

Never **add** to a text something it did not already contain:

- **Fake first person.** If the source has no `I`, the rewrite has no `I`.
- **Manufactured stakes.** "now more than ever", "the stakes have never been higher".
- **Forced contrarianism.** "Everyone says X, but they're wrong" — only legitimate if the source argued it. Inventing a foil invents a claim.
- **Performed candor.** "Let's be honest", "real talk", "here's the thing".
- **Em-dash theatrics.** Never add a dash during a rewrite.
- **Staccato conversion.** Vary sentence length by varying the sentences, not by breaking them.
- **Invented specifics.** A number, name, date, tool, or mechanism the source never contained. This is the most tempting fix because it always reads better, and a fabricated specific is worse than the vague phrasing it replaced. **Flag the gap. Never fill it.**

**The test:** did the information in the rewrite come from the source? You may subtract and sharpen. You may not add.

**Self-reference escape hatch.** When editing writing *about* AI writing — a blog post on this topic, a skill file, a style guide — quoted examples are exempt. Text inside quotation marks, code blocks, or explicitly marked as illustrative is not flagged. Only the author's own prose.

**Preserve what's already good.** If a passage has no tells, leave it alone. If a flagged word is the right word in context, keep it and say why. The replacement tables are defaults, not mandates.

---

## Output format

### Rewrite mode

**1. What's flagged** — every tell, with the text quoted, grouped by severity. Keep Tier 1B clarity edits visually separate from Tier 1A markers and label which is which. A wordiness fix is a writing suggestion, not evidence about who wrote the text.

**2. Rewritten version** — the full text. Preserve structure, intent, and every specific detail.

**3. What changed** — the meaningful edits, not a word-by-word log. Name any gap you flagged but did not fill.

**4. Second-pass audit** — re-read your own output from section 2. Recycled transitions, lingering inflation, copula avoidance, rhythm you flattened while fixing something else. Fix them inline and note it. If it's clean, say so.

### Detect mode

**1. What's flagged** — grouped P0 / P1 / P2, with text quoted. Tier 1A and 1B separated and labelled.

**2. Assessment** — for each flag, is it a clear problem or a judgment call? Some AI-associated patterns are effective writing in small doses. Say which the writer should definitely fix and which are fine in context. If the text is clean, say so plainly rather than manufacturing findings.

### Edit mode

**1. Edits made** — location and before → after, only the spans you touched.

**2. Verification** — confirm you re-read the file, the patterns resolved, and name anything you deliberately left alone.

---

## When to stop patching and rewrite from scratch

If the text has 5+ flagged vocabulary hits across multiple categories, 3+ distinct pattern categories triggered, **and** uniform sentence and paragraph length, the structure itself is generated. Patching phrases won't fix it. Say so, state the core point in one sentence, and rebuild from there.

---

## Reference files

- `references/vocabulary.md` — tiered word lists, per-model fingerprints, the 2026 plain-word layer, corporate workslop
- `references/structures.md` — sentence structures, rhetorical templates, the LinkedIn/thought-leadership formula set, carve-outs
- `references/typography.md` — punctuation rules, the full Unicode table, formatting tells
- `references/registers.md` — context profiles, voice profiles, full tolerance matrix
- `references/examples.md` — worked before/after transformations across five domains
