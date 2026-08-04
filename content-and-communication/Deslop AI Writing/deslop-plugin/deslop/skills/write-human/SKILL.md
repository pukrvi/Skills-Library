---
name: write-human
description: Draft new writing that doesn't read as AI-generated in the first place — blog posts, emails, LinkedIn posts, memos, docs, reports. Use when asked to "write this without sounding like AI", "draft it in my voice", "write it human", "no AI slop", or whenever producing prose the user will publish or send under their own name. This is the drafting counterpart to the deslop skill, which audits and rewrites text that already exists.
license: MIT
metadata:
  version: 1.0.0
  compiled: 2026-08
  spec: agentskills 1.0
---

# Write human

Cleaning slop out of a draft costs more than not putting it there. This skill is the drafting-time version of `deslop`: the same evidence, applied before the first sentence instead of after the last.

The reference files live in the sibling skill — `../deslop/references/`. Read `vocabulary.md` and `structures.md` before drafting anything long. `registers.md` sets strictness. Read the full `deslop` SKILL.md if you need the audit procedure.

---

## Before you write

Answer these. If you can't, ask — a draft built on guesses about audience and format will need rewriting anyway.

1. **Who reads this, and what do they already know?** Determines register and how much context to include.
2. **What is the one thing they should do or believe afterwards?** If there isn't one, the piece has no argument and will pad itself.
3. **What specifics do I actually have?** Numbers, names, dates, versions, examples, quotes. List them before drafting. This list is the spine.
4. **What do I not know?** Name it now so it becomes an honest admission rather than a hedge.
5. **Register and voice?** See `../deslop/references/registers.md`. If the user has supplied a writing sample, match it and skip the named profiles.

**If the specifics list is empty, stop and say so.** The most common cause of slop is being asked to write a piece for which no real information exists. Ask for the material rather than generating abstractions to fill the space. Never invent a number, a date, a customer name, or a mechanism.

---

## The seven drafting rules

### 1. Every paragraph carries a specific

A number, a name, a date, a version, a measurement, or a concrete example. This is the single highest-leverage constraint in the whole method: puffery, false ranges, negative parallelism and the treadmill effect all die on contact with a real detail.

"The festival serves as a vibrant testament to the region's rich cultural heritage" cannot survive as a sentence next to "The festival has run every April since 1987. Locals build their own stalls."

If a paragraph has no specific available, it is probably a paragraph that shouldn't exist.

### 2. Lead with the thing

Delete any opening sentence that could open any piece on this topic. "In today's rapidly evolving landscape of…" is not an opening; it is a throat-clear.

Test: swap your first line into an unrelated article on the same subject. If it fits, rewrite it.

Context can come second. It usually should.

### 3. Vary the sentences by varying the thinking

Target: sentence-length standard deviation of 5 or more across any ten sentences. Every paragraph should contain either a sentence under 8 words or one over 25.

But do not hit this by chopping. Random fragmentation produces a different detectable register — the humanizer voice — and reads worse. Sentence length varies naturally when the *granularity of the claim* varies. A short sentence lands a conclusion. A long one carries a qualified argument. If all your sentences are the same length, you are making four claims of the same size.

Also: no two consecutive sentences opening with the same word or grammatical construction. Watch for `This means…` / `This allows…` / `It's worth noting…`.

### 4. Carry the connection with content, not connectives

Transition-word density under 2 per 100 words. Almost every "Moreover", "Furthermore", "Additionally", "That said", "In conclusion" can simply be deleted. If the logical link isn't already visible in the content, the transition word is papering over a missing argument — write the argument instead.

### 5. Name uncertainty instead of hedging it

"I haven't tested this above 10,000 rows" reads human. "This could potentially present challenges at scale" reads generated.

One hedge or none. Never stack them ("could potentially", "may eventually", "might ultimately").

Every "studies show / experts agree / research suggests" gets a named source or gets cut.

### 6. Use plain verbs and concrete nouns

`is` and `has` are good words. Do not replace them with serves as / stands as / functions as / represents / boasts / features.

Prefer nouns you could photograph. "Three engineers" beats "stakeholders". "The deploy script" beats "the solution".

Contractions, outside formal and legal registers. Their absence is a formality tell.

Cut hollow intensifiers on sight: very, really, truly, quite, genuinely, significantly, incredibly, seamlessly, robustly.

Repeat the precise word rather than cycling synonyms. "developers… engineers… practitioners… builders" for one group is thesaurus abuse.

### 7. Stop when the argument is finished

No "In conclusion". No summary that restates the intro. No optimistic wrap-up. No "the future looks bright" or "only time will tell".

End on a concrete observation, a named limitation, or a specific ask.

A summary is justified only when the piece is long enough that the reader needs one, and then it must land a judgment rather than list what was covered.

---

## Shapes to avoid while drafting

These are the ones that appear *because* they feel like good writing while you're producing them. Full catalogue in `../deslop/references/structures.md`.

- **"It's not X, it's Y"** and every variant, including the split-across-two-sentences form. Cap: one per piece. State the positive claim instead.
- **Triads.** Not the existence of one, the *defaulting* to three. Let the content set the count.
- **Self-posed rhetorical questions.** "The result? Devastating." Merge into a declarative.
- **-ing analysis tails.** "…, highlighting the team's commitment to innovation." Name the consequence or cut.
- **False ranges.** "From X to Y" where X and Y aren't on a spectrum.
- **Invented labels.** Don't coin "the supervision paradox" and use it as if it were established. Describe the mechanism.
- **Engagement hooks.** "Here's the thing", "The catch?", "Plot twist:", "What nobody tells you".
- **Speculative scenario openers.** "Imagine a world where every deploy is instant" → "Instant deploys would cut our release cycle from a day to minutes."
- **Assistant residue.** Never "Certainly!", "Great question!", "I hope this helps!", "In this article, we will explore".
- **Significance inflation.** If the sentence still works with the inflation clause deleted, delete it.

**For LinkedIn, founder content, and GTM material specifically:** the nine formula templates in `structures.md` §15 are the dominant failure mode of that register. "Most people X. The few who win Y." "Here's the truth: [obvious thing]." "If you're not doing X, you're already behind." Recognize the shape while drafting and replace it with the specific claim plus the evidence.

---

## Formatting while drafting

- Em dashes: at most 1 per 1,000 words. Use commas, colons, periods, or parentheses — and shape the sentence so it doesn't want a dash.
- En dashes in ranges (`1990–2000`), scores, and compound proper nouns. Models under-use these; get them right.
- Bold: at most one phrase per major section. Never `**Term:** definition` bullet stacks.
- Headings in sentence case. No emoji outside social. Never generic headers (Overview / Key Points / Summary).
- Never 3+ headings in under 300 words. Never 8+ bullets in under 200 words.
- Bullets only for genuinely list-shaped content — steps, options, specs, parameters. Not for decoration, and not as a substitute for an argument.
- Never write 5+ verbless adjective-noun bullets. The symmetry is the tell.
- No arrow characters (→) as connectors in prose.
- Paragraph lengths must not be uniform. At least one 1-sentence paragraph per ~600 words.
- Conversational replies: break at thought boundaries. A 150-word reply with zero line breaks reads as machine output.
- Never emit invisible Unicode: U+00A0, U+2009, U+202F, U+200B, U+200D, U+2060. Straight quotes and `...` in plain-text contexts.

---

## Model-specific self-checks

If you know which model is drafting, watch its own habits first. Full detail in `../deslop/references/vocabulary.md` §Model fingerprints.

**If you are Claude:** watch hedge stacks, "It's worth noting", "That said", "Here's the thing", "You're absolutely right", `genuinely` / `honestly` / `straightforward` (banned in Anthropic's own system prompt), `load-bearing`, the query-reframing move, and closers like "Would that be helpful?". Also: because bullets are suppressed for you, you will drift into *listicle in a trench coat* — "The first wall is… The second wall is…" Watch for it.

**If you are GPT:** watch the em-dash rate above all, plus tricolons, the delve/tapestry family, and the 2026 plain-word layer (quietly, matters, real, land, earn, "the work").

**If you are Gemini:** watch bullet density, bolded-label bullets, heading density, comparison tables produced unasked, "on one hand… on the other hand", and the reflex to end with a suggested next step.

---

## Never do these, even when asked to "sound more human"

The predictable failure mode of humanizing is installing a *humanizer voice* — which is just as detectable and worse to read.

- **No fake first person.** If the piece has no author presence and the user didn't ask for one, don't add "I've seen this a hundred times" or "in my experience".
- **No manufactured stakes.** "now more than ever", "the stakes have never been higher".
- **No forced contrarianism.** Inventing a foil invents a claim.
- **No performed candor.** "Let's be honest", "real talk", "to be fully transparent".
- **No em-dash theatrics.**
- **No staccato conversion.** Vary sentence length by varying the sentences.
- **No invented specifics.** This is the one that matters most. A fabricated number, date, customer name, benchmark, or mechanism is worse than the vague phrasing it replaced, because it is confidently wrong instead of merely empty. **If the concrete detail is missing, flag the gap and leave it.**

---

## Before you hand it over

Run this checklist on your own draft. Report anything you flagged but couldn't fix.

- Every paragraph has a specific: number, name, date, version, or example
- The opening sentence could not open any other piece on this topic
- The closing paragraph adds new information, or there isn't one
- Two body paragraphs cannot be swapped without breaking the piece
- No paragraph merely restates a previous one
- Sentence lengths vary; at least one under 8 words or one over 25 per paragraph
- No two consecutive sentences open the same way
- Fewer than 2 transition words per 100 words
- Em dashes under 1 per 1,000 words
- Zero: "It's not X, it's Y" beyond one earned instance; rhetorical-question transitions; -ing analysis tails; "serves as / stands as"; "In conclusion"; assistant residue
- Zero Tier-1 vocabulary from `../deslop/references/vocabulary.md`
- Contractions present, unless the register forbids them
- Every attribution is named, or cut
- Every hedge is single, or replaced by a concrete statement of what's unknown
- No invented specifics — every number, name and date traces to source material
- Gaps flagged explicitly to the user

Then read it aloud. Where you run out of breath or drift, cut.
