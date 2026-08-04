# The craft of de-slopping AI writing — research report

Sources: Wikipedia's *Signs of AI writing*, three open-source anti-slop skills, detection-metric writeups, 2025–2026 detector-accuracy research. Where a number is vendor marketing rather than research, it says so.

---

## 1. Structural / statistical signatures

**Perplexity** = how surprised a language model is by the next token. Low perplexity = predictable = machine-like. **Burstiness** = variance of that surprise (operationally, the standard deviation of sentence lengths in words). Humans write in bursts: a 4-word sentence, then a 36-word one. Models regress to a comfortable 15–22 word mean and stay there.

### Cited targets (heuristics, not laws)

| Metric | AI-typical | Human-typical | Flag threshold |
|---|---|---|---|
| Average perplexity | 5–30 | 50–200+ | under 40 |
| Sentence-length std dev | 0.5–3 | 5–20 | under 4 |
| Type-token ratio (lexical diversity) | 0.35–0.45 | 0.50–0.70 | under 0.45 |
| Transition-word density | 3–8 per 100 words | 0–2 per 100 words | over 5 |

Worked example: AI sentence lengths `[13, 12, 11, 11]` → SD 0.83. Human `[4, 19, 5, 36]` → SD 14.3.
Source: https://www.write-humanly.com/blog/burstiness-perplexity-deep-dive

The `avoid-ai-writing` skill independently lands on a compatible rule: mix 3–8 word sentences with 20+ word ones; TTR below 0.40 is suspect.

### Actionable structural rules

1. **Sentence-length SD ≥ 5 words** per ~10-sentence window. Enforce by construction: every paragraph gets at least one sentence under 8 words *or* one over 25.
2. **Paragraph-length variance.** Uniform 3–4 sentence blocks are the loudest structural tell. Include at least one 1-sentence paragraph per ~600 words; let some run to 6–7.
3. **Transition density under 2 per 100 words.** Most "Moreover/Furthermore/Additionally" can be deleted — if the logical link isn't already there, the transition word is papering over a missing argument.
4. **Vary sentence openings.** If more than two consecutive sentences start with the same part of speech (especially "The", "This", "It", a participle), rewrite. AI loves `This means…` / `This allows…` / `It's worth noting…`.
5. **Paragraph-reshuffle test**: if you can reorder the paragraphs without breaking the piece, there's no argument — only a list of topics.
6. **Treadmill test**: does each paragraph advance something new, or restate the premise in fresh clothing?
7. **Repeat the right word.** Forced synonym cycling ("the model… the system… the framework… the architecture" for one thing) is an AI habit, not good style.

---

## 2. Punctuation and Unicode forensics

### Dashes

- **Em dash (—, U+2014)**: the famous tell. Not because em dashes are bad — because models use them *at a rate no human sustains*, and where a comma or period would do. `avoid-ai-writing` sets a hard cap of **1 per 1,000 words**.
- **The diagnostic isn't the character, it's the function.** AI em dashes almost always do *appositive emphasis* ("the result — a faster pipeline — surprised us") or *dramatic reveal* ("we shipped it — and it broke"). Human em dashes more often mark genuine interruption or a sharp aside.
- **En dash (–, U+2013)** is the inverse tell: models *under*-use it where it's correct (ranges `1990–2000`, scores, `Bose–Einstein`) and substitute a hyphen. En dashes in ranges are a *human* signal.
- **Spaced en dash ( – )** as a parenthetical dash is standard British/AP-adjacent style and not an AI tell in itself. But writers fleeing the em dash mass-replace `—` with ` – `, creating a new uniform-rhythm tell. **Replacing the character without changing the sentence structure fixes nothing.**

Sources: beutlerink.com/blog/how-to-spot-ai-writing · duey.ai/post/em-dash-ai-writing · stylemanual.gov.au · nickpotkalitsky.substack.com/p/why-ai-cant-stop-using-em-dashes

### Unicode giveaways

| Character | Codepoint | Note |
|---|---|---|
| Em dash — | U+2014 | rate-limit, don't ban |
| En dash – | U+2013 | fine in ranges; suspicious as parenthetical dash at volume |
| Curly quotes ’ ‘ “ ” | U+2019/2018/201C/201D | **weak** signal — word processors auto-produce these. Strong only in plain-text/code/commit/Slack contexts |
| Ellipsis … | U+2026 | single-glyph ellipsis in casual text is a tell; humans type `...` |
| Non-breaking space | U+00A0 | almost never typed by hand |
| Thin space | U+2009 | same |
| Zero-width space / joiner | U+200B / U+200D | pure artifact; also used in some watermarking |
| Word joiner | U+2060 | artifact |
| Multiplication sign × | U+00D7 | `1920×1080` — models use it, humans type `x` |
| Narrow no-break space | U+202F | artifact |
| Cyrillic/Greek homoglyphs | e.g. `а` U+0430 | pipeline artifact |
| Ligatures ﬁ ﬂ | U+FB01/FB02 | pasted-from-PDF or model artifact |
| Fullwidth forms, styled math letters 𝐇𝐞𝐥𝐥𝐨 | various | never hand-typed |

**Rule:** normalize U+00A0, U+2009, U+202F, U+200B, U+200D, U+2060 always. Convert `…`→`...` and `×`→`x` in informal/plain-text contexts. Leave curly quotes in prose documents; strip them in code, commits, terminal output, plain-text email.

### Markup and formatting tells

- **Excessive bolding.** The `**Term:** definition` bullet pattern is the most recognizable AI formatting fingerprint. Rule: at most one bolded phrase per major section.
- **Title Case Headers.** Models default to Title Case for every subhead; most human writers use sentence case.
- **Emoji in headers** (🚀 ✨ 🔑). Remove outside social posts.
- **Bullet abuse.** Two failure modes: (a) 8+ bullets in under 200 words — should be a paragraph; (b) "NP lists" — 5+ short adjective+noun items with no verbs, which read as marketing copy.
- **Arrow characters** (→ ⇒ ➜) as connectors in prose ("input → processing → output").
- **Horizontal rules (`---`) between every section**, and a bolded one-line "takeaway" under each header, are both LLM layout reflexes.

---

## 3. Rhetorical patterns to kill

Highest-value targets because they survive word-swapping. A banned-words list is trivially defeated; these structures are the actual signature.

**1. Negative parallelism — "It's not X, it's Y."** Variants: "not only X but Y", "isn't just about X — it's about Y", tailing negations ("No guessing. No wasted motion."). Models love it because it manufactures contrast with zero information.
Fix: state the positive claim directly. "This is not just a dashboard, it is a command center" → "The dashboard puts approvals, comments, and status in one place."
Grep: `not just`, `not only`, `isn't about`, `rather than merely`, `No ` at sentence start.

**2. Rule of three.** Every list has exactly three items; every adjective comes in a triad. The tell is *defaulting* to three, including padding to three with a filler item. Deliberately use 2 and 4.

**3. Antithesis stacking.** Consecutive sentences each built on a contrast ("Fast, but fragile. Cheap, but limited. Powerful, yet opaque."). One is rhetoric; three in a row is a template.

**4. "From X to Y" false ranges.** "From intimate gatherings to global movements" implies a spectrum between things that aren't on one.

**5. Rhetorical question openers.** "But what does this mean for developers?" Kill on sight; answer the question instead of asking it.

**6. Throat-clearing / permission phrases.** "Let's be clear." "Here's the thing." "It's worth noting that." "The catch?" "Plot twist:" "At the end of the day."

**7. Conclusion-restates-intro / reflexive summary.** A summary is justified only when the piece is long enough that the reader needs one, and it must *land a judgment*, not list what was covered.

**8. Hedge stacks.** "could potentially", "may eventually", "it seems likely that perhaps". Pick one hedge or none. Real uncertainty gets stated concretely ("I haven't tested this above 10k rows").

**9. Sycophantic openers and assistant artifacts.** "Great question!", "Certainly!", "You're absolutely right!", "I hope this helps!", "In this article, we will explore…", "As of my last update…". P0 credibility killers.

**10. Puffery / significance inflation.** "marks a pivotal moment in the evolution of…", "stands as a testament to", "the future looks bright".

**11. Vague attribution.** "Experts believe", "Studies show", "Research suggests" with no source.

**12. False concession.** "While X is impressive, Y remains a challenge" — vague on both sides, commits to nothing.

**13. Copula avoidance.** "serves as", "features", "boasts", "presents", "stands as" where "is" or "has" is correct.

**14. Emotional flatline.** Announced reactions with no content: "What surprised me most…". If it surprised you, say what you expected instead.

---

## 4. Positive instructions that actually work

Consistent finding across prompt-engineering writeups, open-source skills, and editor advice: **negative lists alone produce stilted output** — the model dodges the banned words and keeps the banned *shape*. Positive constraints that force information into the text work better, because slop is fundamentally a shortage of specifics, not a surplus of em dashes.

Ranked roughly by effect size:

1. **Force specificity quotas.** "Every claim carries a number, a name, a date, or a concrete example." Highest-leverage single instruction. It kills puffery, false ranges, negative parallelism, and the treadmill effect simultaneously, because none survive contact with a real detail. Example: "serves as a vibrant testament to the region's rich cultural heritage" → "The festival has run every April since 1987. Locals build their own stalls."
2. **Concrete nouns over abstract ones.** Prefer things you can photograph. "The pipeline" beats "the solution"; "three engineers" beats "stakeholders".
3. **Name the uncertainty instead of hedging it.** "I don't know how this behaves under load" reads human; "this could potentially present challenges at scale" reads generated.
4. **Contractions, always** (outside formal/legal registers). Their absence is a strong formality tell.
5. **Vary sentence openings explicitly.** "No two consecutive sentences may begin with the same word or grammatical construction."
6. **Ban transition scaffolding by name**: however, moreover, furthermore, additionally, in conclusion, that said, when it comes to. Then require the connection be carried by content.
7. **Cut adverbs and hollow intensifiers**: very, really, quite, truly, genuinely, significantly, incredibly, seamlessly, robustly. Prefer a stronger verb.
8. **Active voice, one idea per sentence** as the default; break it deliberately for rhythm.
9. **Take a position.** Neutrality is an AI signature.
10. **Preserve disfluency.** Fragments. First person. A parenthetical that trails off. Over-polishing is itself a tell: the last 5% of polish is what makes text read as machine-finished.
11. **Lead with the news, not context.** Delete any opening sentence that could head any article on the topic. GPTZero: "If your first line could be swapped into *any* blog post, delete it."
12. **Read it aloud** (or instruct the model to simulate this): monotone rhythm and awkward clause stacking surface immediately.
13. **Voice profiles beat generic "sound human."** `avoid-ai-writing` ships five (casual / professional / technical / warm / blunt) with quantified parameters. Giving the model a *specific* target voice outperforms telling it to avoid a generic one.

Sources: gptzero.me/news/how-to-write-like-a-human/ · github.com/conorbronsdon/avoid-ai-writing · github.com/adenaufal/anti-slop-writing · promptaa.com/blog/how-to-prompt-ai-to-write-like-a-human · microsoft.github.io/cat-agent-skills/skills/wikipedia-human-style-writing/

---

## 5. Open-source anti-AI-writing repos

**`conorbronsdon/avoid-ai-writing`** — https://github.com/conorbronsdon/avoid-ai-writing
The most complete. Three modes (detect / rewrite / edit-in-place), a three-tier vocabulary list (Tier 1 always replace; Tier 2 flag in clusters; Tier 3 flag only at density), severity tiers P0/P1/P2, six context profiles (linkedin, blog, technical-blog, investor-email, docs, casual), five voice profiles, stylometric rules (sentence-length mixing, TTR < 0.40 suspect, paragraph-reshuffle test, treadmill test). Catches operational leakage most lists miss: `citeturn0search0` / `oai_citation` markup, `utm_source=chatgpt.com` URL params, unfilled `[Your Name]` placeholders, reasoning-chain artifacts ("Let me think step by step").
*Good*: tiering by severity and context so it doesn't nuke technical prose; second-pass audit built into the output; "preserve existing strength."
*Bad*: Tier 1 list long enough to distort domain vocabulary (a distributed-systems paper legitimately needs "robust" and "ecosystem"); the 1-em-dash-per-1000-words cap is arbitrary; some rules are crypto/VC-specific.

**`adenaufal/anti-slop-writing`** — https://github.com/adenaufal/anti-slop-writing
Universal system prompt, cross-agent. Bilingual — handles Indonesian-specific slop (excessive nominalization, rigid "Anda" formality, missing discourse particles *nah/sih/kan*), a good reminder that slop signatures are language-specific. Three-tier tone system. Cites Wikipedia's guide as base.
*Good*: abstraction→specificity as the core move; "avoid closure formulas, let writing end naturally."
*Bad*: bans em and en dashes outright, which is over-correction; no measurable targets.

**`jalaalrd/anti-ai-slop-writing`** — https://github.com/jalaalrd/anti-ai-slop-writing (multi-agent packaging)

**`realrossmanngroup/no_ai_slop_writing_rules`** — https://github.com/realrossmanngroup/no_ai_slop_writing_rules
Different strategy: instead of a de-slop filter, defines a *specific human voice* (Louis Rossmann's) as the positive target. The "voice profile beats prohibition list" approach taken to its conclusion — a strong specific voice crowds out the default register.

**Microsoft CAT `wikipedia-human-style-writing`** — https://microsoft.github.io/cat-agent-skills/skills/wikipedia-human-style-writing/
Best design idea: **scan for clusters, not isolated words** — density matters more than any single term — and treat the guide as "descriptive, not prescriptive." Addresses root causes (restore facts, cite real sources) rather than swapping words.

**GitHub topics**: https://github.com/topics/anti-ai-slop

**Common weakness across all of them:** overwhelmingly *subtractive*. A model given only a ban list produces text that is shorter and blander but structurally identical — same paragraph rhythm, same absent specifics. The two that perform best (`avoid-ai-writing`'s voice profiles, Rossmann's voice clone) are the two that specify what to write *toward*.

---

## 6. AI-detector reality check, 2026

**What detectors measure.** Mostly perplexity and burstiness proxies, plus learned classifiers over stylometric features. GPTZero has moved to sentence-level scoring and surfaces phrase-frequency evidence (it cites "provide a valuable insight" as ~182× more common in AI text). None detect *authorship*; they detect *statistical typicality*.

**False positive rates** (University of Chicago Booth, Jabarian & Imas, BFI WP 2025-116, Aug 2025):

| Detector | FP rate |
|---|---|
| Pangram | ~0% long/medium, ≤1% short |
| Originality.ai | ≤1% medium-long, 2–3% short |
| GPTZero | ≤1% medium-long, ~2.4% short |
| Turnitin | vendor claims <1%; third-party ~4% at sentence level |
| Open-source RoBERTa detectors | **30–69%** — flags most human text |

**The equity problem.** Liang et al. (2023, *Patterns*) found detectors falsely flagged **61.3%** of non-native TOEFL essays, keying on predictable vocabulary and simpler syntax. Vendors claim the gap has closed (Pangram reports 0.00% on the same dataset, first-party, April 2025), but the structural point stands: any detector that scores *simplicity* as *machine-ness* punishes plain writers, second-language writers, and some neurodivergent writers.

**Why even 1% FP is bad.** 300 students × 8 assignments = 2,400 documents. At 1%, 24 false accusations per term.

**Why "beat the detector" is the wrong objective:**
- **Moving target with no stable equilibrium.** Detector-vs-humanizer benchmarks flip every few months.
- **The optimization is adversarial to quality.** The cheapest way to raise perplexity is to insert unpredictable words — worse word choice. The cheapest way to raise burstiness is random sentence-splitting. Both score better and read worse. Humanizer tools do exactly this and the output is recognizably damaged.
- **It optimizes the proxy, not the thing.** Sentence-length SD is a *symptom* of a writer thinking in varied units of thought. Manufacturing the symptom without the cause gives text that passes a check and still bores the reader.
- **Readers are the real detector.** A specific number, a named source, an admitted limitation, a real example, an actual opinion — none are what detectors measure, and all are what matter.

Correct framing: **treat statistical targets as diagnostics of craft problems, not as goals.** If sentence-length SD is 1.2, the fix isn't "split some sentences" — it's "you have four sentences making the same-sized claim; you're not varying the granularity of your thinking."

Sources: gradpilot.com/news/ai-detector-false-positive-rates-compared · gptzero.me/news/how-to-write-like-a-human/ · tryleap.ai/turnitin/accuracy · hub.paper-checker.com/blog/ai-detection-accuracy-false-positives-2026/ · ryne.ai/blog/why-ai-humanizers-dont-work-and-what-actually-works-in-2026

---

## 7. Self-edit checklist

Run in this order. Order matters: fix substance first, because most surface tells disappear once the substance is real.

### Pass 1 — Substance
- Does every paragraph contain at least one specific: a number, name, date, version, measurement, or real example? Any paragraph with none is a deletion candidate.
- Delete the opening sentence if it could open any article on this topic.
- Delete the closing paragraph if it introduces no new information.
- Reshuffle test: can paragraphs be reordered without damage? If yes, add causal connective tissue or cut.
- Treadmill test: does each paragraph advance, or restate?
- Every "experts say / studies show / research suggests" gets a named source or gets cut.
- Every hedge stack reduces to one hedge or a concrete statement of what's unknown.

### Pass 2 — Rhetorical structures
- Grep `not just`, `not only`, `isn't about`, `it's not` — rewrite each as a direct positive claim. Cap: one per piece.
- Count 3-item lists and adjective triads. If they dominate, convert some to 2 or 4.
- Delete rhetorical-question openers.
- Delete: "Let's be clear", "Here's the thing", "It's worth noting", "The catch?", "At the end of the day", "In today's", "In an era where", "When it comes to".
- Grep `From ` + ` to ` — real range or fake?
- Delete assistant artifacts: "I hope this helps", "Certainly", "Great question", "In this article we will explore", "As of my last update".
- Replace "serves as / features / boasts / presents / stands as" with "is / has".

### Pass 3 — Rhythm
- Sentence-length SD ≥ 5 over any 10-sentence window. Every paragraph has a sentence under 8 words or one over 25.
- At least one 1-sentence paragraph per ~600 words; paragraph lengths not uniform.
- No two consecutive sentences open with the same word or construction.
- Transition words under 2 per 100 words.
- Undo forced synonym cycling: use the precise noun repeatedly.

### Pass 4 — Diction
- Zero Tier-1 words: delve, tapestry, realm, landscape (metaphorical), embark, beacon, testament to, seamless, robust, comprehensive, cutting-edge, leverage (verb), pivotal, underscores, meticulous, game-changer, utilize, vibrant, bustling, intricate, ever-evolving, holistic, actionable, impactful, synergy, in order to, due to the fact that.
- Tier-2 flagged only in clusters (2+ per paragraph): harness, navigate, foster, elevate, streamline, empower, resonate, facilitate, nuanced, crucial, multifaceted, ecosystem, myriad, plethora, cornerstone, paramount, poised, burgeoning.
- Cut hollow intensifiers: very, really, truly, genuinely, quite, significantly, incredibly.
- Contractions present (unless register forbids).
- Domain terms exempt — don't mangle technical accuracy to satisfy a wordlist.

### Pass 5 — Typography and markup
- Em dashes ≤ 1 per 1,000 words. Convert the rest to commas, colons, periods, parentheses — **and change the sentence shape**, don't just swap the glyph for a spaced en dash.
- En dashes present where correct (ranges, scores, compound proper nouns).
- Bold: at most one phrase per section. No `**Term:** definition` bullet stacks.
- Headers in sentence case. No emoji in headers. No `---` between every section.
- Bullets: none over 8 items in under 200 words; no verbless adjective+noun lists.
- No arrow characters (→) as connectors in prose.
- Strip U+00A0, U+2009, U+202F, U+200B, U+200D, U+2060. Convert `…`→`...` and `×`→`x` in plain-text contexts. Leave curly quotes in prose; strip in code/commits/terminal.
- Strip citation markup leaks (`citeturn0search0`, `oai_citation`), `utm_source=chatgpt.com` params, unfilled `[placeholders]`.

### Pass 6 — Human residue (last, deliberately)
- At least one opinion, preference, or judgment the author owns?
- One admitted limitation or thing-I-don't-know?
- One sentence fragment, aside, or bit of rhythm a copyeditor might flag?
- Read aloud. Where you run out of breath or drift, cut.

**Meta-rule for any such skill:** these are descriptive patterns, not prohibitions. A single em dash, a single triad, one "however" — all fine. The signal is *density and defaulting*. The goal is prose a reader trusts, not a number a detector prints. If a rule would make the writing worse, don't follow it.
