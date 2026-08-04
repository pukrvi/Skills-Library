# Claude's writing fingerprint (2025–2026) — evidence report

Based on leaked Anthropic system prompts pulled as raw text, Anthropic's published constitution, three de-slop skill corpora built specifically against Claude output, arXiv stylometry papers with per-model effect sizes, detection-vendor writeups, and community threads.

---

## 0. The single strongest piece of evidence

Anthropic's own leaked system prompts **explicitly ban three words** — direct confirmation these are Claude's dominant lexical tics (you don't ban what the model doesn't overuse).

Claude Opus 4.6 system prompt, verbatim:
> `Claude avoids saying "genuinely", "honestly", or "straightforward".`

Claude Opus 5 leak, with rationale:
> `Claude avoids saying "genuinely," "honestly," or "straightforward." Claude is honest by default and can state its point directly rather than trying to convince the person with those modifiers, which come off as disingenuous.`

The line is **absent** from the Opus 4.7 prompt (4.7 drops it and adds a brevity clause instead), so it is a live, contested tic Anthropic toggles between versions. **Confidence: very high (primary source).**

---

## 1. Claude-specific word list

**Tier A — confirmed by Anthropic's own prompt (very high confidence)**
`genuinely` · `honestly` · `straightforward`

**Tier B — repeatedly named as Claude-specific across independent sources (high confidence)**
`nuanced` · `robust` · `comprehensive` · `multifaceted` · `meaningful` / `meaningfully` · `thoughtful` · `worth` ("worth noting/mentioning") · `ultimately` · `crucially` · `importantly` · `interestingly` · `notably` · `fundamentally` · `inherently` · `actually` · `deeply` · `truly` · `simply` · `arguably` · `quietly` · `delve` · `leverage` · `navigate` · `unpack` · `harness` · `streamline` · `foster` · `bolster` · `underscore` · `pivotal` · `testament` · `landscape` · `realm` · `tapestry` · `ecosystem` · `paradigm` · `seamless` · `transformative`

**Tier C — Claude-idiosyncratic vocabulary (medium confidence; strong anecdotal convergence, esp. Claude Code / Opus 4.x era)**
`load-bearing` · `belt and suspenders` · `smoking gun` · `the unlock` / `that's the unlock` · `honest take` · `clearly` · `obviously` · `sharp` ("that's a sharp observation") · `real` ("the real question") · `substantive` · `calibrated`

`load-bearing` is notable enough that there is a dedicated 2026 article: "How to Stop Claude from Saying 'Load-Bearing'."

**Tier D — invented concept labels (medium-high confidence, structural-lexical hybrid)**
Claude coins pseudo-technical compound nouns: `the supervision paradox`, `the acceleration trap`, `workload creep` — an abstract problem-noun (`paradox`, `trap`, `creep`, `divide`, `vacuum`, `inversion`) bolted to a domain word, then used as if it were established terminology.

---

## 2. Phrase list

### Openers / throat-clearing (high confidence)
- "Here's the thing:" — named as a Claude signature by Mike Kentz and by all three de-slop corpora
- "Here's why that matters" / "Here's what I find interesting" / "Here's where it gets interesting" / "Here's what most people miss" / "Here's the kicker" / "Here's the problem though"
- Any `Here's [X]` construction
- "Let me be direct" / "Let me be clear" / "Let me break this down" / "Let me explain" / "Let me walk you through"
- "The honest answer is…" / "I'll be honest" / "I'm going to be honest"
- "The uncomfortable truth is" / "The truth is," / "The real [X] is" / "The reality is"
- "It turns out"
- "That's a great question" / "Great question!" / "That's a sharp observation" / "You're absolutely right" / "You're absolutely correct"
- "I'd be happy to help" / "I appreciate you sharing that"
- "Certainly" (lower for Claude than GPT)

**"You're absolutely right"** is the best-documented Claude-specific catchphrase of the era: a filed Anthropic GitHub issue (anthropics/claude-code#3382), a Register news story, a top HN thread, BigGo coverage. It fires even when the user made no factual claim. **Confidence: very high.**

The Opus 4.6 prompt's own `<bad_response>` example is itself a specimen of the register Anthropic is suppressing: *"I really appreciate the warmth behind that thought. It's touching that you value our conversations so much, and I genuinely enjoy talking with you too…"*

### Hedging / epistemic-caution phrases (high confidence — Claude's most distinctive cluster vs GPT)
- "It's worth noting that" / "It's worth mentioning" / "It's also worth…"
- "I should note" / "I should mention" / "I want to be clear" / "To be clear"
- "That said," / "That being said," / "On the other hand," / "While it's true that…"
- "Generally speaking," / "In many cases," / "While this may vary,"
- "It's important to acknowledge" / "It's important to remember"
- "There's genuine [disagreement/uncertainty]…"
- "I think it's worth considering…"
- "It's worth distinguishing between two things that often get conflated…"
- "There are actually two different questions embedded in this…"
- "The question assumes Y, but that framing may not quite capture…"
- "Before addressing X directly, it's useful to ask whether…"
- "While this is the general consensus, there are meaningful dissenting…"

The last five are Claude's **query-reframing move** — recasting the user's question before answering it. Multiple detection vendors flag this as a Claude-vs-GPT discriminator. **Confidence: medium-high.**

### Transitions / filler (high confidence)
"At its core" · "When it comes to" · "In today's [fast-paced/rapidly evolving] world" · "This is where X comes in" · "The good news is" · "Plays a crucial role in" · "Despite these challenges…" · "Furthermore/Additionally/Moreover" · "Let's explore / Let's unpack / Let's dive in / Let's break it down" · "Think of it as…" / "It's like a…" · "Imagine a world where…"

### Closers (high confidence)
"In conclusion" · "In summary" · "Overall" · "Ultimately" · "At the end of the day" · "The journey doesn't end here" · "Hope this helps!" · "Let me know if you'd like me to go deeper!" · "Would that be helpful?" / "Want me to dig deeper?" — the last two are explicitly banned in the Opus 5 prompt, again confirming they're a default.

---

## 3. Structural patterns

**A. Negative parallelism / "not X, but Y"** — universally called "the single most commonly identified AI writing tell." Variants:
"It's not X — it's Y." · "It's not just X, it's Y." · "Not because X. Because Y." · "X isn't the problem. Y is." · "The question isn't X. It's Y." · "The answer isn't X. It's Y." · "It feels like X. It's actually Y." · "stops being X and starts being Y" · "doesn't mean X, but actually Y" · "not just X but also Y"
**Confidence: very high.**

**B. Negative listing / "Not X. Not Y. Just Z."** — "Not a bug. Not a feature. A fundamental design flaw." Rhetorical striptease. **High.**

**C. Rule of three / tricolon** — three-item lists where two or five fit better; triple parallel clauses; the third item always the most abstract. Mike Kentz singles Claude out for this ("Claude and the Rule of Threes"). Caveat: Matthew Vollmer's field guide claims Claude is *less* triplet-prone than ChatGPT. **High that it's present; contested whether Claude-distinctive.**

**D. Self-posed rhetorical question answered immediately** — "The result? Devastating." "The worst part? Nobody saw it coming." **High.**

**E. Dramatic fragmentation** — "Three words. That's it. That's the product." Standalone fragments as paragraphs. **High.**

**F. Anaphora abuse** — "They assume that… They assume that… They assume that…" **Medium-high.**

**G. Listicle in a trench coat** — prose that is secretly a list: "The first wall is… The second wall is… The third wall is…" This is what models do *when told not to use bullets* — which matters enormously for Claude, because Anthropic's system prompt now forbids bullets in prose. **Medium-high, rising.**

**H. Superficial participial tails** — "…, highlighting its importance," "…, underscoring its role as a dynamic hub," "…, reflecting a broader trend toward…" **High.**

**I. The "serves as" dodge** — "serves as," "stands as," "marks," "represents" in place of "is." Attributed to repetition-penalty pressure away from plain copulas. **Medium-high.**

**J. Hedge-and-reassure / false concession** — "While critics argue X, supporters maintain Y. The truth lies somewhere between." Claude's version engages real counterarguments rather than strawmen, but is structurally identical. **Medium.**

**K. False agency** — inanimate subjects doing human verbs: "the decision emerges," "the culture shifts," "the data tells us," "the market rewards," "a complaint becomes a fix." **Medium-high.**

**L. Vague declaratives + vague attributions** — "The implications are significant." "The reasons are structural." "Experts argue…" "Industry reports suggest…" **High.**

**M. False ranges** — "from innovation to cultural transformation" where no real spectrum exists. **Medium.**

**N. Fractal summary** — tell them what you'll say, say it, summarize it; five-paragraph-essay shape even for short answers. **High.**

**O. Low burstiness** — uniform sentence lengths. One vendor reports Claude paragraph-level variance ~7 words vs ChatGPT ~4 vs human baseline 11–12, i.e. Claude is *more* varied than GPT but still below human. **Medium (single vendor, unreplicated).**

---

## 4. Formatting tells

- **Em dashes.** Best quantitative anchor: arXiv 2604.22142 ("Voice Under Revision") measured LLM revision of personal narrative: **dash usage +326%**, comma frequency +67%, contractions −31.4%, first-person pronoun density −8.6%, mean word length +8.5%, MTLD lexical diversity +53%. Claude Sonnet 4.6 sat at mean effect size |d| = 1.29, between GPT-5.4 (0.60) and Gemini (1.45), with 78% of features showing reduced dispersion. **Claude-specific nuance:** Vollmer reports Claude places em dashes *mid-sentence* (additive qualification) rather than at clause-ends for drama, and at lower volume than GPT. **High for the pattern, medium for Claude-vs-GPT ranking (sources conflict).**
- **Headers, bold, bullets.** Historically Claude's loudest structural tell. Anthropic has aggressively suppressed it — Opus 4.6/4.7 verbatim: *"Claude avoids over-formatting with bold emphasis, headers, lists, and bullet points, using the minimum formatting needed for clarity"*; *"For reports, documents, technical documentation, and explanations, Claude writes prose without bullets, numbered lists, or excessive bolding… Inside prose, lists read naturally as 'some things include: x, y, and z'"*; *"Claude never uses bullet points when declining a task."* Haiku 4.5 adds: *"each bullet point should be at least 1-2 sentences long"* and mandates CommonMark. **Implication: minimum-1-2-sentence bullets and "some things include: x, y, and z" inline lists are themselves now Claude tells.** **Very high (primary).**
- **Bold-stem bullets** — "**Term**: explanation" format. Flagged as a strong AI signal by every de-slop corpus. **High.**
- **Emoji** — Claude uses effectively none by default (system prompt forbids unless the user does). *Negative* tell: emoji-heavy headers (🚀🔑💡✅) point toward GPT/marketing-tuned models, not Claude. **Very high.**
- **No asterisk emotes** — *"Claude avoids emotes or actions inside asterisks."* **Very high.**
- **Perfect mechanics** — Oxford commas, smart quotes/typographic apostrophes, rightward arrows (→) in non-technical prose, no typos, no fragments unless deliberate. **High.**
- **Inline colons** for dramatic reveals — "It comes down to one thing: trust." **Medium.**
- **Title Case Headings.** **Medium.**
- **Interface artifacts** — claude.ai web output carries different HTML/CSS wrappers than ChatGPT (which injects `data-start`/`data-end`); zero-width spaces, non-breaking spaces, soft hyphens. API output is clean. **Low-medium (vendor marketing, no reproducible examples).**

---

## 5. How Claude differs from GPT and Gemini

| Dimension | **Claude** | **GPT** | **Gemini** |
|---|---|---|---|
| Sentences | Longer, multi-clause, more variance than GPT | Uniform 15–25 words, metronomic | Verbose, flat rhythm |
| Hedging | **Heaviest** — uncertainty woven throughout, not quarantined in a caveat block | Moderate, caveats in a block | Low |
| Self-reference | **High** — "I'd be happy to," "Let me explain," "I think it's worth considering" | Lower | Lowest |
| Signature opener | "You're absolutely right" | "Certainly!" / "Absolutely!" | "Of course!" |
| Em dash | Moderate, mid-sentence/additive | Heaviest (pre-suppression) | Lowest |
| Tricolon | Less than GPT (Vollmer); more than baseline (Kentz) | Intro + triplet + recap at every length | — |
| Lists | System-prompt-suppressed since 4.x; drifts to "listicle in a trench coat" | Aggressive markdown + bold list stems unrequested | **Heaviest** — bullets/numbered lists even unprompted |
| Structure | Reframes the question; genuine counterargument | Five-paragraph shape, conclusion mirrors intro | Strict claim-evidence-conclusion, "Wikipedia entry" |
| Register | "Calm, analytical, slightly formal but not stiff," no corporate enthusiasm | Upbeat, promotional | Neutral, mechanical |
| Voice consistency | Best across long documents | Drifts | Flat |
| "delve" family | **Lower** than GPT | Highest | Middle |
| Detectability | ~10–15 pp lower detector scores than GPT; still reliably detected (Pangram: all four Claude style presets "still clearly look like AI writing"); one paper reports Claude F1 = 1.000 in model attribution | Easiest to detect | — |
| Narrative-revision effect size | \|d\| = 1.29 (middle) | 0.60 (lightest touch) | 1.45 (heaviest) |
| Source-text recoverability after revision | 1.7% (Claude erases the original voice most) | 14.3% | — |

**Net:** Claude's tells skew **epistemic and rhetorical** (hedging, reframing, "worth noting," "genuinely/honestly/straightforward," warm-collegial address, sycophantic affirmation). GPT's skew **lexical and ornamental** ("delve," tapestry-nouns, em dashes, tricolons). Gemini's skew **organizational** (compulsive bullets and headings).

**Moving target:** Anthropic has been actively suppressing the classic tells since Sonnet 4.5. So 2026 Claude output is likelier to be *dense prose with almost no formatting, no emoji, no asterisks, warm tone, heavy hedging, mid-sentence em dashes, and "some things include: x, y, and z" inline lists* — itself a fingerprint distinct from 2024-era header-and-bullet Claude.

---

## 6. Sources

**Primary — Anthropic system prompts and published docs (highest weight)**
- https://github.com/asgeirtj/system_prompts_leaks/blob/main/Anthropic/claude-opus-4.6.md — verbatim "genuinely/honestly/straightforward" ban
- https://github.com/asgeirtj/system_prompts_leaks/blob/main/Anthropic/claude-opus-4.7.md — ban dropped, brevity clause added
- https://github.com/Eversmile12/leaked-llm-prompts/blob/main/Anthropic/opus-5.md — ban restated with rationale
- https://github.com/jujumilk3/leaked-system-prompts/blob/main/anthropic-claude-haiku-4.5_20251119.md
- Claude's Constitution (Feb 2026) — anti-sycophancy, "epistemic cowardice," calibrated uncertainty
- https://www.anthropic.com/news/protecting-well-being-of-users
- https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices

**Curated Claude-specific pattern corpora (high weight)**
- https://github.com/hardikpandya/stop-slop — SKILL.md + references/phrases.md, structures.md, examples.md (~9.8k stars)
- https://github.com/stephenturner/skill-deslop — references/tropes.md, fullest trope catalogue
- https://github.com/xr0zv/no-ai-slop
- https://tropes.fyi/ — named trope taxonomy
- https://gauravtiwari.org/stop-slop-ai-slop/

**Empirical / academic (medium-high)**
- https://arxiv.org/html/2604.22142v1 — Voice Under Revision; dash +326%, Claude |d|=1.29, recoverability 1.7%
- https://arxiv.org/html/2606.09854 — Claude F1 = 1.000 attribution
- https://arxiv.org/abs/2603.23219v1 — Decoding AI Authorship
- https://www.pangram.com/blog/claude-writing-styles

**Community / journalism (medium-low; anecdotal but convergent)**
- https://news.ycombinator.com/item?id=44885398 — "You're absolutely right!" about everything
- https://github.com/anthropics/claude-code/issues/3382
- https://www.theregister.com/software/2025/08/13/claude-codes-endless-sycophancy-annoys-customers/328260
- https://www.developersdigest.tech/blog/stop-claude-saying-load-bearing
- https://mikekentz.substack.com/p/claude-and-the-rule-of-threes-393
- https://matthewvollmer.substack.com/p/i-asked-the-machine-to-tell-on-itself — only source with explicit per-model fingerprint section
- https://willfrancis.com/how-to-stop-claude-writing-like-an-ai/
- https://blogpros.com/claude-written-content-biggest-tells/
- https://www.context-link.ai/blog/claude-em-dash-remover
- https://www.prompthub.us/blog/an-analysis-of-the-claude-4-system-prompt

---

**Caveats:** (a) the two most-cited "Claude vs GPT" style comparisons (Vollmer, HumanizeThisAI) disagree on em-dash volume and tricolon frequency, and both are themselves partly LLM-authored; (b) most vendor detection blogs are SEO content with no reproducible methodology; (c) the only hard per-model numbers come from one arXiv preprint; (d) Anthropic actively edits these tells between model versions, so any word list has a shelf life of months.
