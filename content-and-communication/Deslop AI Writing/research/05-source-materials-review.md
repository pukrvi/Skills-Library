# Review of the tertiary research already in this folder

Four source documents were reviewed. This file records what each contains, what is worth keeping, and where each is wrong or dated.

---

## 1. `A list of words that AI over-uses | Embryo.txt`
Source: https://embryo.com/blog/list-words-ai-overuses/ · dated March 2025 · 386 entries

**Method (stated by the author):** cross-referenced published lists for Gemini, ChatGPT, Claude, Qwen, DeepSeek and others, then checked against GPTZero's AI Vocabulary checker.

**Useful:** the largest raw list in the folder, and honest about its own limits. The author reports that removing every listed word still left content scoring 90–100% AI on GPTZero, but cut manual humanization time to under a third. That is the correct expectation to set: word removal is a preprocessing step, not a solution.

**Problems:**
- Untiered. `however`, `therefore`, `for example`, `for instance`, `in other words`, `namely`, `specifically` are ordinary English connectives sitting next to `tapestry`. Banning them outright produces stilted prose.
- Roughly a third of the list is business/consulting jargon rather than AI-specific: `KPIs`, `SLA`, `ROI`, `TCO`, `MVP`, `scrum`, `sprint`, `onboarding`, `offboarding`, `throughput`, `latency`, `uptime`, `downtime`, `bandwidth`. These are correct domain vocabulary in a technical or PM context.
- Some entries are near-unusable as rules: `basic`, `core`, `key`, `critical`, `drive`, `explore`, `grasp`, `promote`, `recognize`, `strive`, `thrive`.
- Duplicates and inconsistent casing.

**Verdict:** mine it for Tier 2/Tier 3 candidates. Do not ship as-is.

---

## 2. `Ban..txt` (Ruben Hassid, ruben.substack.com/p/delve)

**Word list:** ~100 items, heavily weighted to marketing/SaaS adjectives (`frictionless`, `plug-and-play`, `turnkey`, `always-on`, `hyper-personalized`, `machine-first`, `paradigm-shifting`). Several duplicates (`cutting-edge`, `scalable`, `intelligent` appear twice).

**The valuable part is section 2 — nine named rhetorical formulas with worked examples.** This is better material than the word list and is not well covered elsewhere:

1. **Cinematic world + moral** — "In a world where [scary change], [virtue] becomes [currency]."
2. **Moralizing generalization** — "Most people [lazy thing]. The few who win [disciplined thing]."
3. **Simple binary** — "Stop [old habit]. Start [new habit]."
4. **Rhythmic fake depth** — "It's not [obvious]. It's not [second obvious]. It's [third 'unexpected']."
5. **Doomer productivity threat** — "If you're not [doing X] yet, you're already [behind]."
6. **Invisible-layer glorification** — "The real [game] isn't [what everyone sees]. It's [what masters do]."
7. **False simplification** — "You don't need more [resources]. You need [intangible virtue]."
8. **Era statement** — "It's never been easier to [X]. It's never been harder to [deeper X]."
9. **Declared truth** — "Here's the truth: [obvious statement]" / "What nobody tells you is that [obvious statement]."

These are LinkedIn/thought-leadership slop specifically, and they are the exact shapes the GTM/marketing register produces. Worth carrying into the skill verbatim as a named pattern set.

**Problems:** the author admits deriving the word list by asking ChatGPT, Gemini, Claude and Perplexity to do deep research on themselves — circular and unverifiable. No dates, no frequencies.

**Verdict:** discard most of the word list; keep all nine formulas.

---

## 3. `AI Writing Blacklist Guide.pdf` (14 pages)
"De-Slop Stylometrics: A Master Lexical, Syntactic, and Structural Blacklist"

The most rigorous of the three text sources. Contributes four things nothing else in the folder has:

**(a) The burstiness maths.** Burstiness = SD of sentence word counts ÷ mean sentence word count. States human prose sits high, raw LLM output clusters low, and LLM sentences cluster at 15–25 words. Gives the underlying mechanism: next-token prediction + SFT + RLHF systematically penalize low-probability tokens, so synthetic text has unnaturally low perplexity by construction.

**(b) A model-generation timeline.** Useful for dating any word list:
- **GPT-4 era (2023–mid 2024):** decorative abstractions — delve, tapestry, testament, vibrant, intricate, interplay, crucial, pivotal
- **GPT-4o era (mid 2024–mid 2025):** corporate participial openers and gerunds — align with, bolster, fostering, highlighting, showcasing, underscoring
- **GPT-5 era (mid 2025 onward):** conversational softening, participial transitions (emphasizing, enhancing), polite organizational framing
- **Grok anomaly:** pseudo-scientific jargon (empirical, causal, correlate) plus persistent `underscore`

**(c) The copulative-avoidance analysis.** Models suppress `is/are/was/were` in favour of inflated substitutes. Blacklisted replacements: serves as, stands as, marks, functions as, operates as, represents, boasts, features, maintains, offers, underscores, highlights, reflects. This is a genuinely load-bearing structural rule and is under-covered in the other sources.

**(d) Worked before/after transformations** across four domains — B2B SaaS marketing, academic/historical, corporate strategic brief, product review. These are the best few-shot examples available in the folder and should go into the skill as examples.

**Also supplies** a ready-made system-prompt block ("STYLOGRAPHIC HUMANIZATION ENGINE").

**Problems:**
- Frames the whole exercise as "bypassing detection algorithms," which is the wrong objective (see `04-humanization-craft.md` §6). Detector-optimization is adversarial to quality.
- The numeric thresholds in its tables were lost in PDF extraction, so the specific burstiness figures cannot be cited from this document.
- "Absolute ban on em dashes" is over-correction. A rate cap preserves a legitimate punctuation mark.
- "STRICT SVO SYNTAX" as a directive would itself flatten burstiness — it contradicts the document's own §2.
- Citation numbering is inconsistent; several sources are SEO content (contentbeta, humanizethisai, thehumanizeai.pro).

**Verdict:** the strongest conceptual source in the folder. Take the timeline, the copulative rule, and the worked examples. Reject the detector-evasion framing and the absolute em-dash ban.

---

## 4. `avoid-ai-writing-main.zip` (Conor Bronsdon, v3.22.2, MIT)

A complete, mature open-source skill: 793-line SKILL.md, a 1,947-line JS pattern detector with tests, a validation harness, a false-positive measurement corpus, CI workflows, Cursor rules, and a `.claude-plugin/marketplace.json`.

**Architecture worth copying wholesale:**
- **Three modes** — `detect` (flag only), `rewrite` (default), `edit` (in-place file edits, minimal targeted spans)
- **Three-tier vocabulary**, with Tier 1 split into **1A frequency markers** (evidence about authorship) and **1B clarity edits** (wordiness fixes that fire on ordinary human formal prose and must *never* be presented as authorship evidence). This split is the single best idea in the repo.
- **Six context profiles** (linkedin / blog / technical-blog / investor-email / docs / casual) with a full tolerance matrix, plus auto-detection cues
- **Five voice profiles** (casual / professional / technical / warm / blunt) with concrete quantified targets, treated as an axis independent of context
- **Severity tiers** P0/P1/P2
- **Carve-outs everywhere** — e.g. `load-bearing` before a literal structural noun is building terminology; negations enumerating spec constraints in a list aren't a reveal; changelogs legitimately narrate change
- **"Never inject these"** — seven things a rewrite may never add (fake first person, manufactured stakes, forced contrarianism, performed candor, em-dash theatrics, staccato conversion, invented specifics). Provenance test: subtract and sharpen, never add.
- **Self-reference escape hatch** — quoted examples in writing *about* AI writing are exempt
- **Built-in second-pass audit** in the output format
- **Honest framing up front** — signals, not proof; cites the 60%+ ESL false-positive rate

**Pattern coverage** beyond the common lists: chatbot citation-markup leaks, AI-tool URL parameters, unfilled placeholders, reasoning-chain artifacts, narrated candor, recap-flattery openers, lingering-attention claims, self-labeling significance, diff-anchored writing, wall-of-text replies, list-label periods, hyphenated-pair attributive/predicate errors, invented contrast-pair mirroring, moral-adjective category errors.

**Gaps to fill in our version:**
- No per-model (GPT vs Gemini vs Claude) differentiation — the user's explicit requirement
- No Unicode/invisible-character normalization rules
- Some entries are crypto/VC-specific ("reward emissions", "tokenized incentive structures")
- The 2026 plain-word layer (quietly, matters, real, land, earn, the work) is only partly present
- No mention of the leaked Anthropic system-prompt ban on genuinely/honestly/straightforward
- No LinkedIn/thought-leadership formula set (the Hassid nine)

**Verdict:** use as the structural template. Our contribution is per-model fingerprints, the 2026 vocabulary layer, Unicode forensics, the GTM/LinkedIn formula set, and a drafting-mode skill (write clean from the start) rather than editing-only.

---

## Coverage gaps across all four sources

None of the four covers:
1. **Per-model tells** — the user's core requirement. Filled by files 01–03.
2. **Vendor-confirmed evidence** — Anthropic's own system prompt banning three words is the highest-confidence lexical datum available and appears in none of them.
3. **Unicode/invisible-character forensics** — zero-width spaces, non-breaking spaces, word joiners, homoglyphs.
4. **The 2026 register flip** — from Latinate (delve, meticulous) to plain Anglo-Saxon (quietly, matters, real). Three of the four lists are pre-flip.
5. **Contamination of the old lists** — humans have measurably absorbed delve/realm/meticulous/adept into speech (+35–51% over 18 months), so those words now indicate era more than authorship.
6. **Drafting guidance** — all four are editing/filtering tools. None tells a model how to write cleanly on the first pass.
