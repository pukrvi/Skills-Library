# De-slopping AI writing — master research synthesis

Compiled August 2026. Sources: peer-reviewed corpus studies (2024–2026), leaked model system prompts, detector-vendor research, open-source anti-slop repos, and the tertiary research already in this folder.

Companion files in this folder:
- `01-gpt-chatgpt-tells.md` — GPT/ChatGPT evidence report
- `02-gemini-tells.md` — Gemini evidence report
- `03-claude-tells.md` — Claude evidence report
- `04-humanization-craft.md` — burstiness, punctuation forensics, positive instruction design, detector reality check
- `05-source-materials-review.md` — what the existing folder documents contain and what to keep

---

## The five findings that should drive the skill design

**1. Structure beats vocabulary, and the gap is widening.**
Every credible 2026 source converges here. Negative parallelism ("It's not just X, it's Y") in corporate documents went 46 → 49 → 100 → 208 occurrences across 2022–2025 (Barron's/AlphaSense). Sentence-length uniformity is now the most-cited single tell. Pangram, which trains on 28M human documents, weights structural regularity above vocabulary. A skill that only bans words will produce text that dodges the words and keeps the shape.

**2. The word lists have a half-life of roughly 18 months.**
The 2023 Latinate signature (delve, intricate, meticulous, pivotal) is being actively patched out by vendors *and* absorbed into human speech — an 18-month study of 280k academic YouTube transcripts found adept +51%, delve +48%, meticulous +40%, realm +35% in *human speech*, correlating r=0.63 with a word's ChatGPT-distinctiveness. Meanwhile the 2026 GPT-5-era signature is short, plain, Anglo-Saxon: quietly, matters, real, shift, land, earn, "the work", stark. Any skill must version its word list and say when it was compiled.

**3. Each of the three models has a genuinely different fingerprint.**

| | GPT / ChatGPT | Gemini | Claude |
|---|---|---|---|
| Tells skew | **Lexical & ornamental** | **Organizational** | **Epistemic & rhetorical** |
| Signature | delve/tapestry-nouns, em dashes, tricolons; 2026: quietly/matters/real | compulsive bullets + bolded-label bullets, heading density, mandatory next-step closer | hedging stacks, "worth noting", query-reframing, "You're absolutely right", genuinely/honestly/straightforward |
| Em dashes /1k words | 10.62 (highest) | 3.53 | 9.09 |
| Sycophancy rate (SycEval) | 56.7% | **62.5% (highest)** | mid |
| Register | upbeat, promotional | corporate-neutral, encyclopedic | calm, analytical, essayistic |
| Failure mode | over-enthusiasm, generic | sterile template, "police report" | over-hedged, over-long |
| Human baseline em dashes | 3.23/1k mean, range 0.33–17.12 | | |

Anthropic's own leaked system prompt bans `genuinely`, `honestly`, `straightforward` — direct confirmation from the vendor about its own model's tics. That is the single highest-confidence lexical datum in the whole corpus.

**4. Positive constraints outperform prohibitions.**
Slop is a shortage of specifics, not a surplus of em dashes. The highest-leverage single instruction found anywhere: *every claim carries a number, a name, a date, or a concrete example.* It kills puffery, false ranges, negative parallelism, and the treadmill effect simultaneously, because none of those survive contact with a real detail. The two best-performing open-source projects (`avoid-ai-writing`'s voice profiles, `no_ai_slop_writing_rules`' voice clone) are the two that specify what to write *toward*.

**5. "Beat the detector" is the wrong goal and will damage the writing.**
The cheapest way to raise perplexity is to insert unpredictable words — worse word choice. The cheapest way to raise burstiness is random sentence-splitting. Both score better and read worse; that's exactly what humanizer tools do and why their output is recognizably damaged. Detectors also misfire: open-source RoBERTa detectors show 30–69% false positives; the 2023 Stanford study found 61.3% of non-native TOEFL essays flagged as AI. And 92% of the Fortune 500 use OpenAI tools — these markers detect *unedited* AI use, not AI use. Pallas Advisory's 13,308-word human-edited corpus scored near-zero on every pattern.

---

## Consolidated banned-word list, tiered

Tiering matters more than length. A flat 400-word ban list mangles domain vocabulary (a distributed-systems paper legitimately needs "robust" and "ecosystem") and produces stilted text.

### Tier 1 — always replace (5–20× more frequent in AI text)

**Decorative nouns:** tapestry · realm · landscape (metaphorical) · testament · beacon · symphony · treasure trove · linchpin · kaleidoscope · epicenter · cornerstone · paradigm · synergy · game-changer · touchpoint · North Star · deep dive

**Verbs:** delve / delve into / delving · embark (on a journey) · leverage (verb) · harness · unlock · unleash · underscore · showcase · elevate · foster · bolster · streamline · revolutionize · elucidate · transcend · nestle

**Adjectives:** crucial · pivotal · robust · seamless · comprehensive · cutting-edge · state-of-the-art · groundbreaking · transformative · invaluable · vibrant · bustling · thriving · intricate · ever-evolving · multifaceted · holistic · bespoke · paramount · unparalleled · burgeoning · adept · cognizant · profound · actionable · impactful

**Adverbs:** meticulously · seamlessly · effortlessly

**Clarity edits (same fix, but NOT evidence of AI authorship — these fire on ordinary formal human prose):** utilize → use · in order to → to · due to the fact that → because · serves as → is · features (v) → has · boasts → has · presents → is/shows · commence → start · ascertain → find out · endeavor → try

### Tier 2 — flag when 2+ appear in one paragraph
navigate · empower · facilitate · resonate · encompass · catalyze · reimagine · galvanize · augment · cultivate · illuminate · juxtapose · underpin · spearhead · nuanced · ecosystem (metaphorical) · myriad · plethora · interplay · cornerstone · poised · nascent · quintessential · overarching · quietly · deeply (in significance collocations) · transformation

### Tier 3 — flag only at high density (~3%+ of text)
significant/significantly · innovative/innovation · effective/effectively · dynamic · scalable · compelling · unprecedented · exceptional · remarkable · sophisticated · instrumental · world-class · best-in-class · valuable · various · vast · key · essential · vital · fundamental

### The 2026 layer — plain-word tells the old lists miss
quietly · matters · real (as intensifier) · shift · shape · land · earn · "the work" · hold · pull · compound · signal · actually · honestly · stark · clean · sharp · "built different"

These are much harder to blacklist because each is ordinary English. Flag by *collocation*: "quietly building", "quietly dominating", "quiet confidence"; "real growth", "real value"; "earn trust", "earn attention"; "why it matters"; "the work".

### Claude-specific (vendor-confirmed)
genuinely · honestly · straightforward · load-bearing (metaphorical) · "the unlock" · "You're absolutely right" · "Here's the thing" · "It's worth noting" · "That said" · "Let me be direct" · "Would that be helpful?" / "Want me to dig deeper?"

### Gemini-specific
"Of course!" · "Here's a breakdown" · "In essence" · "Ultimately" · the mandatory next-step closer · "on one hand… on the other hand" without committing · bolded-label-plus-colon bullets · comparison table as default output shape

### Corporate workslop
actionable insights · dynamic environment · strategic alignment · operational excellence · capacity building · thought leadership · value proposition · cost optimization · digital transformation · best practices · deliverables · stakeholders · move the needle · low-hanging fruit · paradigm shift · at scale

---

## Banned phrases

**Openers / throat-clearing:** In today's fast-paced world · In today's digital age · In the era of · In a world where · In the ever-evolving landscape of · At its core · When it comes to · Imagine a world where · Picture this · Let's face it · Here's the thing · Let me be clear · Welcome to the world of

**Engagement bait:** Let's dive in · Let's delve into · Let's explore · Let's unpack this · Let's break this down · Buckle up · What if I told you · Ready to go deeper? · Let that sink in · Here's the kicker · The best part? · What nobody tells you · Plot twist: · The catch?

**Hedges:** It's important to note that · It's worth noting · It should be noted that · One might argue that · It could be argued that · broadly speaking · generally speaking · could potentially · may eventually · might ultimately

**Vague attribution:** Studies show · Experts agree · Research suggests · Observers have noted · Industry reports suggest · Critics contend · Analysts agree · Independent testing confirms

**Significance puffery:** Plays a pivotal role in · Serves as a testament to · Marks a pivotal moment · Underscores the importance of · Cannot be overstated · Cementing its place as · A watershed moment

**Closers:** In conclusion · In summary · To summarize · Overall · At the end of the day · One thing is clear · This paves the way for · Only time will tell · The future looks bright · The possibilities are endless · Whether you're a X or a Y

**Assistant residue (P0 — credibility killers):** As a large language model · My training data · As of my last update · I hope this helps! · Let me know if you need anything else · Certainly! · Absolutely! · Great question! · You're absolutely right! · In this article, we will explore · Based on the information provided

**Therapist mode (2026):** You're not alone · You're not broken · That's completely valid · Take a breath

**Machine fingerprints (near-proof, strip mechanically):** `citeturn0search0` · `contentReference[oaicite:0]{index=0}` · `oai_citation` · `[attached_file:1]` · `grok_card` · `utm_source=chatgpt.com` / `copilot.com` / `claude.ai` / `perplexity.ai` · `referrer=grok.com` · unfilled `[Your Name]` / `[INSERT SOURCE URL]` / `2025-XX-XX` placeholders · "Let me think step by step" leaking into prose

---

## Banned sentence structures

1. **Negative parallelism.** "It's not X, it's Y" / "not just X but Y" / "not only X but also Y" / "X isn't the problem. Y is." / "The question isn't X. It's Y." Includes the **split form** across two sentences and the **multi-negation countdown** ("Not the price. Not the features. The trust."). Also the **tailing negation** ("The options come from the selected item, no guessing."). Cap: one per piece, and only if it earns its place.
2. **Rule of three.** Triads of adjectives, nouns, or clauses. The tell is *defaulting* to three, including padding to three. Use two or four deliberately.
3. **"No X. No Y. Just Z."**
4. **Rhetorical question and answer.** "The result? Devastating." "And the fix? Better briefs."
5. **Copula avoidance.** serves as / stands as / functions as / operates as / represents / boasts / features / maintains / offers. Restore `is` and `has`.
6. **Superficial -ing tails.** "…, highlighting the team's commitment to innovation," "…, reflecting a broader trend toward…"
7. **False ranges.** "From X to Y" where X and Y aren't on a spectrum.
8. **Antithesis stacking.** Three consecutive contrast-built sentences.
9. **Aphorism formulas.** "X is the language of Y", "the architecture of trust", "X is not a tool but a mirror."
10. **Formulaic challenges.** "Despite challenges, X continues to thrive."
11. **False concession.** "While X is impressive, Y remains a challenge."
12. **Hedge-stacked predictions.** "could potentially create", "may eventually unlock."
13. **Future-narrative closers.** "may become one of the most important narratives of the next cycle."
14. **Invented labels.** "the supervision paradox", "the acceleration trap" — pseudo-technical compounds coined mid-sentence and never defined.
15. **Invented contrast-pair mirroring.** One half a real term of art, the other fabricated for symmetry ("false precision rather than genuine accuracy").
16. **Manufactured punchlines / staccato drama.** Three or more same-shape fragments in a row.
17. **Listicle in a trench coat.** "The first wall is… The second wall is…" — what models produce when told not to use bullets.
18. **Fractal summary.** A summary at every level, including one the reader doesn't need.
19. **Acknowledgment loops.** Restating the question or the previous section before proceeding.
20. **Self-labeling significance.** "That last move is the contrarian one."

---

## Banned punctuation, symbols, and formatting

**Em dash (—, U+2014).** The famous tell. Cap at **1 per 1,000 words**. Measured defaults: GPT-4.1 10.62/1k, Claude Opus 9.09/1k, Gemini 2.5 Pro 3.53/1k, human mean 3.23/1k. Critical: the diagnostic is the *function*, not the character. AI em dashes do appositive emphasis or dramatic reveal. **Swapping `—` for ` – ` without changing the sentence shape fixes nothing** and creates a new uniform-rhythm tell.

**En dash (–, U+2013).** Inverse tell — models *under*-use it where correct (ranges `1990–2000`, scores, `Bose–Einstein`). Keep it there.

**Unicode to strip always:** U+00A0 non-breaking space · U+2009 thin space · U+202F narrow no-break space · U+200B zero-width space · U+200D zero-width joiner · U+2060 word joiner · Cyrillic/Greek homoglyphs · ligatures ﬁ ﬂ · fullwidth forms · styled math letters 𝐇𝐞𝐥𝐥𝐨

**Context-dependent:** `…` (U+2026) → `...` in casual/plain text · `×` (U+00D7) → `x` in plain text · curly quotes/apostrophes — a **weak** signal, since Word, Google Docs, macOS and iOS all auto-curl; strip only in code, commits, terminal output, plain-text email.

**Formatting:**
- `**Term:** definition` bullets — the single most recognizable AI formatting fingerprint
- Bold in running prose: at most one phrase per major section
- Title Case Headings → sentence case
- Emoji in headers (🚀 ✨ 🔑 ✅ 💡) → remove outside social
- Arrow characters (→ ⇒ ➜) as prose connectors → use words
- `---` horizontal rules between every section
- 8+ bullets in under 200 words → should be prose
- 5+ verbless adjective+noun bullets ("Stable mining efficiency / Reliable pool connectivity") → the symmetry is the tell
- 3+ headings in under 300 words
- Formulaic headers: Overview / Key Points / Summary / Conclusion / Introduction
- List-label periods: `**Intros.** Years of conferences` → `**Intros:** years of conferences`
- 6+ trailing hashtags on a short social post
- Wall-of-text: a reply-length text (<150 words, 4+ sentences) with zero line breaks

---

## Rhythm targets

| Metric | AI-typical | Human-typical | Target |
|---|---|---|---|
| Sentence-length SD | 0.5–3 | 5–20 | **≥ 5** over any 10-sentence window |
| Burstiness (SD/mean) | ~0.1–0.3 | ~0.6–0.9 | mix 3–8 word sentences with 25–35 word ones |
| Type-token ratio (200+ words) | 0.35–0.45 | 0.50–0.65 | flag under 0.40 |
| Transition-word density | 3–8 per 100 words | 0–2 per 100 | **under 2** |
| Paragraph shape | uniform 3–4 sentences | 1 to 8 sentences | at least one 1-sentence paragraph per ~600 words |

Treat these as **diagnostics of craft problems, not as goals.** If sentence-length SD is 1.2, the fix isn't "split some sentences" — it's "you have four sentences making the same-sized claim; you're not varying the granularity of your thinking."

---

## Positive rules — what to write toward

Ranked by effect size:

1. **Specificity quota.** Every paragraph carries at least one number, name, date, version, measurement, or concrete example. Highest-leverage instruction in the whole corpus.
2. **Concrete nouns over abstract.** Prefer things you can photograph. "Three engineers" beats "stakeholders."
3. **Name the uncertainty instead of hedging it.** "I haven't tested this above 10k rows" beats "this could potentially present challenges at scale."
4. **Contractions**, outside formal/legal registers.
5. **No two consecutive sentences opening with the same word or construction.**
6. **Carry connection by content, not by transition words.**
7. **Cut hollow intensifiers**: very, really, truly, genuinely, quite, significantly, incredibly.
8. **Take a position.** Neutrality is itself an AI signature where the genre allows a voice.
9. **Lead with the news, not context.** Delete any opening sentence that could head any article on the topic.
10. **Preserve disfluency.** The last 5% of polish is what makes text read as machine-finished.
11. **Repeat the right word** rather than cycling synonyms.

---

## Hard constraints on the editor (the rewrite side)

The predictable failure mode of "make it sound human" is that the model installs a *humanizer voice* — staccato fragments, fake first person, manufactured stakes. That trades one detectable register for a louder one. Never **add** to a text something it did not contain:

- **Fake first person.** If the source has no `I`, the rewrite has no `I`.
- **Manufactured stakes.** "now more than ever", "the stakes have never been higher."
- **Forced contrarianism.** Inventing a foil is inventing a claim.
- **Performed candor.** "Let's be honest", "real talk", "here's the thing."
- **Em-dash theatrics.** Never add dashes during a rewrite.
- **Staccato conversion.** Vary sentence length by varying the sentences, not by breaking them.
- **Invented specifics.** A number, name, date, tool, or mechanism the source never contained. A fabricated specific is *worse* than the vague phrasing it replaced. Flag the gap; never fill it.

The test: did the information in the rewrite come from the source? You may subtract and sharpen. You may not add.

---

## Register calibration — where rules must relax

A flat ruleset breaks technical writing and encyclopedic prose. Strictness must vary:

| Rule | Social | Blog | Technical | Investor/exec | Docs | Casual chat |
|---|---|---|---|---|---|---|
| Em dashes | 2/post OK | strict | strict | strict | relaxed | skip |
| Bold overuse | hooks OK | strict | strict | strict | relaxed | skip |
| Bullets | skip | strict | relaxed | strict | skip | skip |
| Hedging | strict | strict | relaxed ("may" is accurate) | strict | relaxed | skip |
| Word list | strict | strict | **partial** | strict | relaxed | P0 only |
| Promotional | relaxed | strict | strict | **extra strict** | strict | skip |
| Copula avoidance | skip | strict | relaxed | strict | skip | skip |
| Uniform paragraphs | skip | strict | strict | strict | relaxed | skip |

Technical exemptions — legitimate in context, do not flag: `robust`, `comprehensive`, `seamless`, `ecosystem`, `leverage` (actual platform leverage), `facilitate`, `underpin`, `streamline`. Still flag even in technical: `delve`, `tapestry`, `beacon`, `embark`, `testament to`, `game-changer`, `harness`.

Also: for encyclopedic, technical, or legal text, **neutral and plain is the correct human voice.** Don't inject personality there.

---

## Severity model

**P0 — credibility killers.** Machine fingerprints (citation markup, utm params, unfilled placeholders), cutoff disclaimers, chatbot artifacts, vague attributions, sycophantic openers.
**P1 — obvious AI smell.** Tier-1 words, negative parallelism, template phrases, "Let's" openers, formulaic openings, bold overuse, em dash rate, future-narrative closers, hedge stacks.
**P2 — stylistic polish.** Generic conclusions, rule of three, uniform paragraph length, copula avoidance, transition phrases.

Quick pass = P0 + P1. Full audit = all three.

**Density, not presence.** A single em dash, a single triad, one "however" — all fine. Three or more distinct tells within a few hundred words is the diagnostic threshold. Wikipedia's own caveat is the right posture: *a single sign proves nothing.*

---

## What the tertiary research in this folder contributes

See `05-source-materials-review.md` for detail. In short: the Embryo list (386 items, March 2025) and the Ruben Hassid list (~100 items plus nine named rhetorical formulas) are useful raw vocabulary but untiered and partly domain-specific. The *AI Writing Blacklist Guide* PDF supplies the burstiness maths, the model-generation shift timeline (GPT-4 era → GPT-4o era → GPT-5 era), the copulative-avoidance analysis, and worked before/after transformations across four domains. `avoid-ai-writing` (v3.22.2, MIT) is the strongest existing implementation and the right structural model to build on: three modes, three-tier vocabulary, six context profiles, five voice profiles, severity tiers, carve-outs, and an explicit "never inject these" section.
