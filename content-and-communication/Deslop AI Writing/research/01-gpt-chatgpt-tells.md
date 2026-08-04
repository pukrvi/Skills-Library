# GPT / ChatGPT writing tells — evidence report (2024–2026)

Confidence tiers used throughout:
- **Tier A** = peer-reviewed corpus study with published word lists/frequencies
- **Tier B** = large measured dataset from a credible non-academic source
- **Tier C** = practitioner/editorial consensus lists (high face validity, no frequency data)

---

## 1. Word lists

### 1a. Tier A — Kobak et al. "excess vocabulary" (Science Advances, 2025)
15M+ PubMed abstracts, 2010–2024. Words flagged where 2024 observed frequency exceeded frequency extrapolated from 2021–2022.

Headline: **454 excess words in 2024** (vs 190 at the COVID peak). The 2024 set is **66% verbs, 14% adjectives** (COVID-era excess was 79.2% nouns) — a *stylistic* not *topical* shift. Ratios: `delves` r=28.0, `underscores` r=13.8, `showcasing` r=10.7. Gaps: `potential` δ=0.052, `findings` δ=0.041, `crucial` δ=0.037. Authors infer **≥13.5% of 2024 abstracts were LLM-processed**, up to ~40% in some subfields.

**All 407 words annotated "style" in `excess_words.csv`:**

accentuates, achieving, acknowledges, acknowledging, across, additionally, address, addresses, addressing, adept, adhered, adhering, advancement, advancements, advancing, advocates, advocating, affirming, afflicted, aiding, aims, akin, align, aligning, aligns, alongside, amid, amidst, analysis, announced, apologizes, approach, assess, assessed, assessing, assessments, attains, attributed, augmenting, avenue, avenues, based, between, bolster, bolstered, bolstering, both, broader, burgeoning, capabilities, capitalizing, categorized, categorizes, categorizing, challenge, challenges, combating, commendable, compelling, complex, complicates, complicating, comprehend, comprehending, comprehensive, comprising, conditions, conducted, consequently, consolidates, contributing, conversely, correlating, crafted, crafting, crucial, culminating, customizing, declare, declared, deductively, delineates, delve, delved, delves, delving, demonstrated, demonstrates, demonstrating, dependability, dependable, despite, detailing, detrimentally, diminishes, diminishing, discern, discerned, discernible, discerning, displaying, disrupts, distinct, distinctions, distinctive, diverse, during, easing, effectively, elevate, elevated, elevates, elevating, elucidate, elucidates, elucidating, embracing, emerged, emerges, emphasises, emphasising, emphasize, emphasizes, emphasizing, employed, employing, employs, empowers, emulating, emulation, enabling, encapsulates, encompass, encompassed, encompasses, encompassing, endangering, endeavors, endeavours, enduring, enhance, enhanced, enhancements, enhances, enhancing, ensuring, equipping, escalating, essentials, evaluates, evolving, exacerbating, examines, exceeding, excels, exceptional, exceptionally, exerting, exhibit, exhibited, exhibiting, exhibits, expedite, expediting, exploration, explores, facilitated, facilitates, facilitating, featuring, fight, findings, focusing, formidable, fostering, fosters, foundational, furnish, garnered, garnering, gauged, grappling, groundbreaking, groundwork, hardest, harness, harnesses, harnessing, heighten, heightened, highlight, highlighting, highlights, hinder, hinges, hinting, hold, holds, however, identified, illuminates, illuminating, imbalances, impact, impactful, impacting, impede, impeding, imperative, impressive, inadequately, including, incorporates, incorporating, indicating, individuals, influencing, inherent, initially, innovative, inquiries, insights, integrates, integrating, integration, interconnectedness, interplay, into, intricacies, intricate, intricately, introduces, invaluable, investigates, involves, involving, juxtaposed, leading, leverages, leveraging, like, limitations, linked, maintaining, merges, methodologies, meticulous, meticulously, midst, multifaceted, necessitate, necessitates, necessitating, necessity, need, notable, notably, noteworthy, nuanced, nuances, observed, offer, offering, offers, optimizing, orchestrating, outcomes, outlines, overlook, overlooking, overwhelmed, particularly, paving, persist, pinpoint, pinpointed, pinpointing, pioneering, pioneers, pivotal, poised, pose, posed, poses, posing, postponed, potential, potentially, precise, predominantly, presents, preserving, pressing, prevalent, primarily, primary, promise, promising, pronounced, propelling, providing, realizes, realm, realms, recognizing, refine, refines, refining, reframing, remains, remarkable, renowned, research, resulting, rethink, revealed, revealing, reveals, revolutionize, revolutionizing, revolves, role, scrutinize, scrutinized, scrutinizing, seamless, seamlessly, seeks, serves, serving, shaping, shedding, showcased, showcases, showcasing, signifying, solidify, spanned, spanning, specifically, spurred, stands, statement, stemming, strategically, strategies, streamline, streamlined, streamlines, streamlining, struggle, subsequently, substantial, substantiated, substantiates, surged, surmount, surpass, surpassed, surpasses, surpassing, swift, swiftly, techniques, their, thereby, these, this, thorough, through, transformative, typically, ultimately, uncharted, uncovering, underexplored, underscore, underscored, underscores, underscoring, understanding, unexplored, unlocking, unparalleled, unraveling, unveil, unveiled, unveiling, unveils, uphold, upholding, urging, using, utilized, utilizes, utilizing, valuable, various, varying, verifies, versatility, wandering, warranting, were, while, within, yielding

**Ambiguous content/style (24):** background, closures, complexities, concurrently, deeper, faces, heterogenous, inaugural, investigation, landscape, lies, minimizing, mirroring, modulating, originality, prioritize, prioritizes, prioritizing, prominence, prompting, reliance, remotely, resuming, significant — plus standardizing, synthesizes, efficacy.

Sources: https://www.science.org/doi/10.1126/sciadv.adt3813 · https://arxiv.org/html/2406.07016 · https://github.com/berenslab/llm-excess-vocab

> Practical note: this list mixes true tells (`delves`, `underscores`, `showcasing`, `meticulously`, `intricate`, `pivotal`, `realm`, `groundbreaking`, `commendable`, `noteworthy`, `multifaceted`, `invaluable`) with high-frequency function words (`this`, `these`, `their`, `were`, `into`, `within`, `while`, `both`) that are statistically elevated but useless as standalone flags. Use the distinctive ~120 for detection; the function words only matter in aggregate.

### 1b. Tier A — Juzek & Ward, "Why Does ChatGPT Delve So Much?" (COLING 2025)
21 "focal words" spiking 2020–2024 in PubMed (5.2B tokens, 26.7M abstracts), increases **+277% to +6,697%**. Core set: delve/delves/delved/delving, intricate/intricacies, underscore/underscores, surpass/surpassing, emphasizing, groundbreaking, advancements. Compared against 9,953 GPT-3.5-generated abstracts.

They tested and **rejected the popular "Nigerian English RLHF annotator" explanation** — the International Corpus of English shows no evidence these words are especially prevalent in any particular English variety.
https://aclanthology.org/2025.coling-main.426.pdf · https://arxiv.org/html/2412.11385v1

### 1c. Tier A — Kousha & Thelwall, *Scientometrics* (2026)
Through **July 2025**, 2.4M PubMed Central full texts + Scopus:
- delve family: **+1,500%** (2022–2024)
- underscore family: **+1,000%**; papers using "underscore" 6+ times **+10,000%** (2022→2025)
- intricate: **+700%** (repeated use +5,400%)
- meticulous: **+600%** (repeated use +2,800%)
- unveil/unveils/unveiled, nuanced/nuance: +150–250%
- interplay, foster/fostering, heighten/heightened, bolster: <200%
- 2024 PMC prevalence: **underscore ≈30% of papers; pivotal ≈15%**

https://link.springer.com/article/10.1007/s11192-026-05601-5

### 1d. Tier A — Semantic-cluster study (arXiv 2506.21817, 2025)
28.8M PubMed abstracts 1975–2024. Critical finding: **LLMs do not substitute one word for its synonyms — entire semantic clusters rise together.**
- "meticulously" cluster (+991.83%): carefully, rigorously, precisely, thoroughly, comprehensively
- "underscore/emphasize" cluster (+765.78%): highlight, stress, reinforce, accentuate
- "showcase" cluster (+508.12%): demonstrate, illustrate, reveal, exhibit
- "crucial" cluster (+27.42%): substantial, notable, noteworthy
- Change concentrated in adjectives/adverbs/verbs; nouns barely move.
- **Declining words** (the inverse tell): `important` (adj.) is the single largest decliner, plus `declare`, `clearly` — 13 decreasing focal words total.

https://arxiv.org/html/2506.21817v1

### 1e. Tier A — RLHF causation (arXiv 2508.01930, 2025)
Llama base vs instruct, isolating what human-feedback learning adds. Top LHF-induced: **nuanced (+8342%), nuance (+6301%), firstly (+4794%), reliance (+3193%), generalizability (+3124%), underscore (+2829%), multifaceted (+1848%), secondly (+1597%), necessitate (+1477%)**. Human raters significantly preferred high-LHF-score variants (52.4% vs 47.6%, χ²=9.4, p<0.01) — **these words are overused because humans reward them**, not because of data contamination.

Cross-referenced 32-word literature set: advancements, aligns, boasts, commendable, comprehending, crucial, delve, delved, delves, delving, emphasizing, garnered, groundbreaking, intricacies, intricate, invaluable, meticulous, meticulously, notable, noteworthy, pivotal, potential, realm, showcases, showcasing, significant, strategically, surpasses, surpassing, underscore, underscores, underscoring.
https://arxiv.org/html/2508.01930v1

### 1f. Tier A — *Perspectives on Medical Education* (2025), 135-term tracking
103 of 135 tracked terms crossed modified-Z ≥3.5 by 2024. Highest Z: **delve**, then underscore, primarily, meticulous, boast; also commendable, showcase, surpass, intricate, tapestry, unlocking. Declining controls: "purpose of," "end of," "to determine," "hypothesis," "results suggest," "all patients," "treatment of." Notes **deliberate avoidance of "delve" beginning ~March 2024** once the association became public.
https://pmejournal.org/articles/10.5334/pme.1929

### 1g. Tier A — Spillover into human speech (arXiv 2409.01754)
~280,000 transcripts from 20,000+ academic YouTube channels. Over 18 months: **adept +51%, delve +48%, meticulous +40%, realm +35%**. Correlation between a word's ChatGPT-distinctiveness and its spoken-usage acceleration: **r = 0.63, p < 0.01**. Consequence: these words are now contaminated as detection signals because humans absorbed them.
https://arxiv.org/html/2409.01754v1

### 1h. Tier C — Consolidated practitioner blacklist (2026)

**Signature nouns:** tapestry, realm, landscape, testament, beacon, symphony, treasure trove, journey, roadmap, ecosystem, cornerstone, backbone, paradigm, synergy, interplay, nuance, myriad, plethora, underpinnings, complexities, endeavor, metamorphosis, milestone, game-changer, deep dive, insights, implications, perspectives, signal, "the work"

**Signature verbs:** delve, dive/dive into, leverage, harness, unlock, unleash, elevate, empower, foster, bolster, amplify, streamline, revolutionize, transform, enhance, illuminate, facilitate, cultivate, underscore, resonate, embark, navigate, unravel, elucidate, encompass, discern, showcase, supercharge, turbocharge, hone, tailor, craft, uncover, unveil, utilize, employ, optimize, spearhead, redefine, reimagine, curate, align, surface, land, shape, earn, hold, pull, compound, shift

**Signature adjectives:** pivotal, crucial, vital, essential, paramount, integral, profound, nuanced, multifaceted, comprehensive, holistic, systemic, inherent, pertinent, robust, seamless, innovative, transformative, groundbreaking, cutting-edge, state-of-the-art, scalable, bespoke, nascent, invaluable, relentless, unwavering, stark, noteworthy, commendable, exemplary, ever-evolving, ever-changing, vibrant, bustling, dynamic, unparalleled, formidable, meticulous, intricate, actionable, effortless, synergistic, future-ready, nimble, scrappy, stellar, dazzling, remarkable

**Signature adverbs:** meticulously, seamlessly, effortlessly, notably, arguably, undoubtedly, importantly, essentially, ultimately, fundamentally, genuinely, truly, quietly, deeply, significantly, strategically, robustly, incredibly, remarkably, utterly, vastly

**Connectives:** furthermore, moreover, additionally, consequently, subsequently, nevertheless, nonetheless, similarly, alternatively, thus, indeed, notably, in essence, that said

Sources: walterwrites.ai/most-common-chatgpt-words-to-avoid/ · useaiwriter.com/articles/ai-words-to-avoid-2026 · scanforai.com/ai-vocabulary · oliviacal.com/post/ai-writing-tells · prowlo.com/blog/ai-words-to-avoid · beingovee.substack.com/p/chatgpts-100-favourite-words-and

### 1i. Tier C — The *new* 2026 layer (Forbes / Jodie Cook)
Most valuable for "what's current" — tells that did **not** exist in 2023–24 lists. Plain, short, Anglo-Saxon words, the opposite of the Latinate 2023 signature:

**quietly, shift, matters, shape, land, actually, real, earn, "the work", hold, pull, compound, signal, "built different", honestly, deeper, stark, clean, sharp**

"quietly" is the flagship — *quietly building, quietly dominating, quiet confidence, quiet rebellion*. "matters" as formulaic importance-assertion. "real" as unearned intensifier (*real growth, real value*). "earn" attached to abstractions (*earn trust, earn attention*).
https://www.forbes.com/sites/jodiecook/2026/02/03/the-15-new-giveaway-signs-of-ai-generated-content-in-february-2026/ · https://www.forbes.com/sites/jodiecook/2026/05/21/15-new-giveaway-signs-of-ai-writing-may-2026-update/

---

## 2. Phrase list

**Openers / throat-clearing**
"In today's fast-paced world" · "In today's digital age" · "In the era of" · "In a world where" · "In this day and age" · "In the modern era" · "In the ever-evolving landscape of" · "At its core" · "Imagine a world where" · "Picture this" · "Let's face it" · "Here's the thing" · "Let me be clear" · "I'm going to state this as clearly as possible" · "Honestly?" · "Real talk" · "Look —"

**Engagement bait / tour-guide metacommentary**
"Let's dive in" · "Let's delve into" · "Let's explore" · "Let's unpack this" · "Let's break this down" · "Buckle up" · "Stay tuned" · "Here's the deal" · "What if I told you" · "Think of it as" · "Ready to go deeper?" · "Let that sink in"

**Faux-suspense / payoff promises**
"Here's the kicker" · "But here's the thing" · "The best part?" · "What nobody tells you" · "The part everyone misses" · "And that's when it clicked"

**Hedges / editorializing asides**
"It's important to note that" · "It's worth noting" · "It should be noted that" · "It is essential to understand" · "One might argue that" · "One must consider" · "It could be argued that" · "No discussion would be complete without" · "Based on the information provided"

**Vague attribution (weasel)**
"Studies show" · "Experts agree" · "Research suggests" · "Observers have noted" · "Many believe" · "It is widely regarded as"

**Significance puffery**
"Plays a pivotal role in" · "Plays a vital role" · "Serves as a testament to" · "A testament to" · "Stands as" · "Marks a pivotal moment" · "Underscores the importance of" · "Highlights the shift" · "Reflecting the broader trend" · "Cementing its place as"

**Metaphor stock**
"Rich tapestry" · "Treasure trove" · "Navigating the landscape of" · "The transformative power of" · "Harness the power of" · "Beacon of" · "A marathon, not a sprint" · "Move the needle" · "Low-hanging fruit" · "Paradigm shift" · "Seamless integration" · "Robust solution" · "Game-changer" · "Cutting-edge" · "State-of-the-art"

**Closers**
"In conclusion" · "To summarize" · "Overall" · "At the end of the day" · "One thing is clear" · "This paves the way for" · "Only time will tell" · "The future isn't coming — it's already here" · "The possibilities are endless" · "Whether you're a X or a Y, there's something here for everyone"

**Assistant/collaboration residue**
"As a large language model" · "My training data" · "I hope this helps!" · "Let me know if you need anything else" · "I hope this message finds you well" (in non-letter contexts) · "Absolutely!" / "Certainly!" / "Great question!" as paragraph openers · "You're absolutely right"

**Therapist mode (2026 addition)**
"You're not alone" · "You're not broken" · "That's completely valid" · "Take a breath" — Cook (Feb 2026) and the GPT-5.3 system card both flag this; OpenAI explicitly cited "Stop. Take a breath." as the "cringe" behavior it targeted.

---

## 3. Structural patterns

### 3.1 Negative parallelism — the strongest current structural tell
Forms: "It's not just X, it's Y" · "It's not about X, it's about Y" · "This isn't simply X. It's Y." · "Not only does it X, but it also Y" · "More than a X, this is Y" · "X isn't dead. It's evolving."

**Tier B measured evidence** — Barron's / AlphaSense corpus of corporate documents (April 2026), counts of "It's not just a ___, it's a ___":
- 2022: ~46 · 2023: ~49 · 2024: **100** · 2025: **208**

Doubled, then doubled again. Mechanistic explanation: RLHF rewards rhetorical escalation over factual density.
https://slowrevealgraphs.com/2026/05/13/... · https://blog.pallasadvisory.com/2026/04/28/tell-isnt-ai-unedited-ai-corporate-writing/ · https://humanizedcopy.com/posts/the-it-s-not-just-x-it-s-y-tell-ai-negative-parallelism

### 3.2 Rule of three / tricolon abuse
Triads everywhere, matched in length and rhythm: "innovative, transformative, and groundbreaking." Lists defaulting to exactly three items regardless of how many actually matter.

### 3.3 Triple negation reveal
"Not X. Not Y. Just Z." — false tension before the point.

### 3.4 Cadence uniformity / low burstiness
Sentences clustering at 15–24 words with minimal variance. Multiple sources independently call this **the single biggest tell in 2026**. Human writing "spikes"; AI "flatlines."

### 3.5 Other recurrent structures
- **Rhetorical Q&A**: self-posed question answered immediately.
- **Colon reveals**: "The best part: it learns."
- **Dramatic fragments as paragraphs**: "That's it. That's the whole thing."
- **Anaphora abuse**: repeated sentence openings in quick succession.
- **Superficial analysis via -ing tags**: "…, highlighting the team's commitment to innovation."
- **False ranges**: "from strategic planning to implementation" where items aren't on a spectrum.
- **"Despite its challenges" formula**: acknowledge problem → immediately dismiss.
- **Fractal summaries**: a summary at every level.
- **Restated summaries / signposted conclusions** adding no new content.
- **Listicle in a trench coat**: "The first… The second…" prose that's secretly a list.
- **One-point dilution / treadmill effect**: ~100 words of information padded to 500.
- **Grandiose stakes inflation**: every claim framed as world-historical.
- **Faux balance without consequence**: both sides acknowledged, nothing changes.
- **Complement sandwich**: praise A, praise B, "both have strong points."
- **The "serves as" dodge**: "stands as," "serves as," "functions as" replacing "is."
- **Invented concept labels**: "the supervision paradox," presented as established terminology.
- **-ing participial openers** at 2–5× human rate.
- **"From X to Y" construction** repeated.
- **Anthropomorphized abstractions**: "the data tells us a story."
- **Over-explanation of basics**; **missing personal stakes**; **no proper nouns / sensory detail / loose ends**; **arguments that teleport**; **metaphors that almost land**; **synonym cycling**; **dead metaphor repeated 5–10×**; **historical analogy stacking**.
- **Missing emotional spikes** — flat register, no mood drift.
- **Too clean to be human** — absence of irrelevant detail and unresolved threads.

Sources: tropes.fyi/directory · vrid.ai/blog/signs-of-ai-writing · creatoreconomy.so/p/use-my-no-ai-slop-skill-to-remove-20-ai-slop-patterns · matthewvollmer.substack.com/p/i-asked-the-machine-to-tell-on-itself

---

## 4. Formatting & punctuation tells

### 4.1 Em dash — measured per model (arXiv 2603.27006, "The Last Fingerprint")
12 models, 5 providers, ~240,000 words, tested under normal / no-markdown / explicit-em-dash-prohibition conditions. **Em dashes per 1,000 words:**

| Model | Default | Markdown suppressed |
|---|---|---|
| **OpenAI GPT-4.1** | **10.62** | **9.10** |
| Anthropic Claude Opus | 9.09 | 0.19 |
| DeepSeek V3 | 6.95 | 5.41 |
| Google Gemini 2.5 Pro | 3.53 | 0.00 |
| Meta Llama | 0.00 | 0.00 |
| **Human baseline** | **3.23 mean** (range 0.33–17.12) | — |

Under *explicit prohibition*, GPT-4.1 still emitted 3.86/1,000. Llama 3.1 8B base produced 0.49 and 28 markdown features; the RLHF'd instruct version produced **zero** em dashes and 5 markdown features — fine-tuning, not pretraining, sets the amplitude. Conclusion: the em dash is "a signature of the specific fine-tuning procedure," enabling **model attribution**.

Human range overlaps heavily (up to 17.12) — em dash alone is a bad detector and generates false positives against em-dash-loving humans.
https://arxiv.org/html/2603.27006v1 · https://www.seangoedecke.com/em-dashes/

Practitioner rule of thumb: AI ~1 em dash per 50–80 words vs human ~1 per 500.

### 4.2 Other markup/punctuation tells
- **Bold-first bullets** — every list item opens with a bolded phrase + colon.
- **Excessive boldface in running prose**; bolding ordinary nouns for no reason.
- **Format bleed** — stray markdown where it doesn't render; headers inside sentences.
- **Inconsistent Title Case headings**; **colons in headers**.
- **Colon reveals** in short-form ("Here's the thing:", "Think about it:").
- **Emoji section headers** and emoji bullets (🚀 ✅ 💡 🔑).
- **Unicode decoration**: arrow bullets (→, ➜, ✔), curly quotes/apostrophes, non-breaking spaces, narrow dashes.
- **Double-hyphen (--)** as em dash substitute — a tell for models told to avoid em dashes.
- **Nested bullet hierarchies** where prose would serve.
- **Symmetrical list items** — every entry same length, same clause count.
- **Perfect grammar, Oxford commas everywhere, zero contractions, zero typos.**
- **Uniform paragraph lengths** (~3 sentences each).
- Table-heavy output, auto-appended "Key Takeaways" boxes and TL;DR sections.

### 4.3 Wikipedia's canonical 12 (Sept 2025→)
1. Em dash overuse · 2. Rule-of-three lists · 3. Vague attribution · 4. Significance overemphasis · 5. False ranges · 6. Restated summaries · 7. Superficial -ing analysis tags · 8. Negative parallelism · 9. Editorializing asides · 10. Misplaced letter phrasing · 11. Collaborative remnants ("I hope this helps!") · 12. Formatting habits.
Wikipedia's own caveat: **"A single sign proves nothing."**

---

## 5. What changed in 2025–2026

**(a) The Latinate signature is being trained out — and is contaminated anyway.** "Delve" avoidance began ~March 2024. Humans have absorbed delve/realm/meticulous/adept (+35–51%). These words now indicate *era* more than *authorship*.

**(b) Em dash was explicitly patched.** Sam Altman, 14 Nov 2025: custom instructions to avoid em dashes finally work. GPT-5.1 suppressed em-dash production. Em dash is now a false-positive generator for OpenAI models, still stronger for Claude/Gemini defaults.

**(c) The register flipped: formal/Latinate → casual/staccato.** GPT-4 era = long formal sentences, heavy transitions. GPT-5 era = "casual, less robotic, more freeform." Tells moved from *meticulously, intricate, pivotal* to **quietly, matters, real, shift, land, the work**; from long compound sentences to three-to-four-word staccato fragments; from em dashes to **colons** ("Here's the thing:").

**(d) Structural tells overtook lexical tells.** Negative parallelism doubled in corporate documents in 2024 *and again* in 2025. Cadence uniformity is now widely named "the single biggest AI tell in 2026."

**(e) New 2026 failure modes.** Therapist mode; coaching questions ("Are you ready to go deeper?"); "Honestly?" openers that precede nothing honest; "LLM-safe truths" (accurate statements that teach nothing); metaphors that almost land; arguments that teleport; too-tidy internal cross-references.

**(f) OpenAI now explicitly optimizes against its own tells.** GPT-5.3 Instant system card targets "cringe" — naming "Stop. Take a breath." and reflexive "Absolutely!" — plus sycophancy, fewer dead ends, caveats and "overly declarative phrasing." Expect further tell-turnover.

**(g) "Slop" became the official word.** Merriam-Webster's 2025 Word of the Year. LinkedIn shipped a "Seems Like AI Slop" report button in July 2026.

**(h) Detector science moved away from perplexity/burstiness.** LLMs are *trained* to minimize perplexity, so canonical human texts score as AI. Stanford TOEFL study: detectors misclassified **61.3%** of non-native essays as AI. Function-word stylometry hits **95.03%** on full essays but degrades badly at 200 words. The discriminative signal is AI's stylistic **uniformity** (compact cluster) versus human variability.

**(i) These markers detect *unedited* AI use, not AI use.** 92% of the Fortune 500 use OpenAI tools. Pallas Advisory's 13,308-word human-edited corpus scored near-zero on every pattern.

---

## 6. Sources

**Peer-reviewed / preprint**
- Kobak et al., Science Advances 2025 — https://www.science.org/doi/10.1126/sciadv.adt3813 | https://arxiv.org/html/2406.07016 | data: https://github.com/berenslab/llm-excess-vocab
- Juzek & Ward, COLING 2025 — https://aclanthology.org/2025.coling-main.426.pdf
- Kousha & Thelwall, Scientometrics 2026 — https://link.springer.com/article/10.1007/s11192-026-05601-5
- AI-Induced Language Change — https://arxiv.org/html/2506.21817v1
- Word Overuse and Alignment in LLMs — https://arxiv.org/html/2508.01930v1
- LLM influence on human spoken communication — https://arxiv.org/html/2409.01754v1
- Perspectives on Medical Education 2025 — https://pmejournal.org/articles/10.5334/pme.1929
- The Last Fingerprint (markdown/em dash) — https://arxiv.org/html/2603.27006v1
- TRACE ghostwriter attribution — https://arxiv.org/html/2603.28054
- Stylometric detection, DSH/Oxford — https://academic.oup.com/dsh/advance-article/doi/10.1093/llc/fqag064/8714041

**Editorial checklists / word lists**
- Wikipedia:Signs of AI writing — https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
- Forbes/Jodie Cook Feb 2026 + May 2026 (URLs above)
- https://tropes.fyi/directory · https://vrid.ai/blog/signs-of-ai-writing
- https://creatoreconomy.so/p/use-my-no-ai-slop-skill-to-remove-20-ai-slop-patterns
- https://matthewvollmer.substack.com/p/i-asked-the-machine-to-tell-on-itself
- https://www.useaiwriter.com/articles/ai-words-to-avoid-2026 · https://scanforai.com/ai-vocabulary
- https://gregoryagency.com/news-insights/updated-look-at-ai-tells/

**Model-era / punctuation**
- https://techcrunch.com/2025/11/14/openai-says-its-fixed-chatgpts-em-dash-problem/
- https://openai.com/index/gpt-5-system-card/
- https://www.pangram.com/blog/why-perplexity-and-burstiness-fail-to-detect-ai

---

## Bottom line
Three things matter most, in order: **(1) structure over vocabulary** — negative parallelism and uniform sentence cadence are the load-bearing 2026 signals; **(2) density, not presence** — a single word proves nothing, three-plus tells within a few hundred words is diagnostic; **(3) the word list has a half-life** — the 2023 Latinate set is being patched out *and* absorbed into human speech, while the 2026 set is short plain words that are much harder to blacklist.
