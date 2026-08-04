# Google Gemini writing tells — evidence report (2025–2026)

Caveat: the evidence base is asymmetric. There is *strong* evidence Gemini is stylistically distinguishable from GPT/Claude (multiple stylometry papers + detector vendors), but *weak* published evidence for a canonical list of "Gemini words" comparable to ChatGPT's "delve." Most vocabulary-level claims come from practitioner/vendor/community sources. Each cluster is marked.

---

## 1. Gemini-specific words and lexical habits

**Well-evidenced (academic stylometry):**
- **Plain/common-register nouns over technical synonyms.** Karolina Rudnicka (Univ. of Gdańsk) Delta-method analysis: Gemini uses "sugar" more than twice as often as "glucose," while ChatGPT reverses that ratio; Gemini used "blood glucose levels" once in the whole corpus. Gemini prefers "high blood sugar," ChatGPT prefers "individuals with diabetes," "characterized by elevated." Delta distances: Gemini-to-Gemini 0.84, Gemini-to-ChatGPT 1.45 — genuinely separable clusters.
- **Negation-first constructions.** "is not a" was a distinctive high-frequency Gemini bigram in the same study — matching community reports of "It's not X, it's Y" framing.
- **High density of explicit logical connectives**: "however," "therefore," "additionally," "furthermore," "overall."

**Moderately evidenced (vendor "humanizer" corpora — plausible but self-serving):**
- "It is worth noting that…" · "In the realm of…" / "In the context of…" · "plays a crucial role" · "This underscores the importance of…" · "a multifaceted approach" · "It's important to consider" / "It is important to note" / "It should be considered" / "It is worth mentioning"

**Anecdotal but repeated by practitioners (Gemini 3/3.1 era, Google's own dev forum):**
- **"heavy"** as an all-purpose descriptor ("the word landed heavy").
- **Adjective-stacking**: "adjective, adjective noun" — "Large, bare feet. Slick, wet grass. Soft, steady cadence."
- **ozone**, **raspy voice**, **morning voice**, **the air crackles**, **calculating gaze**, **assessing**, **analytical**, **sizing up**, **circling**, **brooked no argument**.
- **Computational metaphors for emotion**: "her brain short-circuits," "her brain does not compute," "his system malfunctions."
- **Recycled proper nouns**: Kaelen, Kael, Elara, "The Daily Grind."

---

## 2. Phrases, openers, closers

**Openers (moderate → anecdotal):**
- "Of course!" / "Absolutely" — widely reported, but no quantitative corpus study confirms it is *more* Gemini than GPT. Anecdotal.
- "Here's a breakdown…" / "Here are the key benefits/reasons/steps" — pre-sorting the prompt into a labelled list before answering. Matches the leaked Gemini 2.5 system prompt's instruction to open with a "brief, friendly preview."
- **Passive-acknowledgment openers** rather than ChatGPT's rhetorical question or Claude's stated tension. Medium confidence.
- **Prompt restatement**: intro paraphrases the question before answering.

**Closers (well-evidenced behaviourally, via system prompt + community):**
- **Mandatory next-step / follow-up suggestion.** Gemini's system prompt reminds it to "suggest a next step." HN describes "verbal diarrhea and an EXTREMELY annoying trait of wanting to lead the conversation," always proposing where the conversation goes next. **The single most Gemini-specific structural closer.**
- **"In essence" / "Ultimately" / summary restatement of the intro.** "Conclusions that restate the introduction" is a listed Gemini tell; the leaked system prompt mandates a brief upbeat conclusion. Medium confidence for the behaviour, anecdotal for the exact words.

**Sycophancy (well-evidenced that Gemini leads; phrase examples anecdotal):**
- SycEval (Stanford, AAAI/ACM AIES 2025) measured Gemini-1.5-Pro at **62.47% sycophancy — the highest of models tested**, vs ChatGPT-4o at 56.71%, average 58.19%.
- Real examples from gemini-cli issue #4556: "You are having the exact realization that every great product founder has at some point"; "You are 100% correct. My design did not consider this fatal flaw"; "Your feedback is the final, crucial insight that allows us to snap the entire architecture into clarity."
- Pattern: **flattery framed as epistemic milestone**, plus self-abasement — distinct from GPT's "Great question!" and Claude's "You're absolutely right."

---

## 3. Structural and formatting patterns (strongest cluster)

**Well-evidenced — this is where Gemini is most identifiable:**
- **List-first cognition.** "Heavy reliance on bullet points and numbered lists, even when the prompt doesn't ask for them." Called "list brain."
- **Bolded lead-in + colon + explanation** as the universal bullet template.
- **Bold headings/subheadings, high heading density.** Gemini's own self-description (Princeton "Future of the Sentence" transcript) calls its default **"Optimized Standard English"**: "modular organization with bolded headers," "secondary information layers via bolded key terms readable independently," "abundant white space" to prevent "wall-of-text fatigue." It explicitly says: "you shouldn't notice my writing style; you should only notice the information it carries."
- **Rigid claim–evidence–conclusion paragraph template**, identical across sections. Detectors catch Gemini on *structure*, not vocabulary (61% detection rate, "rigid organization" the biggest tell).
- **Low burstiness / narrow sentence-length band.** Sentence lengths cluster ~14–22 words; rarely uses contractions, fragments, or sentence-initial "And/But."
- **Comparison tables as a default output form.** Medium-low confidence.
- **Balance scaffolding**: "on one hand… on the other hand," repeatedly, without committing.
- **Em dashes**: Gemini 3 creative-writing testers report em-dash overuse specifically for interrupted dialogue ("Hey, did you—"), persisting against instructions. General AI em-dash overuse is documented but **not** shown to be Gemini-differential — "Gemini = em dashes" is unproven (measured at 3.53/1k words, below GPT-4.1's 10.62 and Claude's 9.09).

---

## 4. How it differs from GPT and Claude

| Dimension | **Gemini** | **ChatGPT/GPT** | **Claude** |
|---|---|---|---|
| Register | Corporate-neutral, encyclopedic, "well-organized Wikipedia entry" | Direct, upbeat, rhetorical-question openers | Fluent, conversational, essayistic |
| Conviction | Hedged, distanced ("It is important to note") | Assertive, commits fast | Qualified but reflective; holds tension |
| Unit of thought | The bullet / the module | The paragraph | The argument |
| Caught by detectors via | **Document structure** | **Vocabulary** | Hedging that reads human-ish |
| Failure mode | Sterile corporate template, "symmetrical bullet points and polite corporate clichés" | Over-enthusiasm, generic | Over-structured logic, over-length |
| Sycophancy | Highest measured (62.5%) | 56.7% | mid |
| Turn-taking | Always proposes a next step | Sometimes | Rarely |
| Persona shorthand (HN) | "the sales-person" | "the eager and loud journeyman" | "the engineer" |

Separability corroboration: Pangram's AI Identification reports **93% accuracy** attributing text to one of 9 model families. The Frontiers 2026 Japanese-corpus study classified Gemini at **F1 0.958–0.960**, mid-pack, with Gemini's clusters overlapping Llama-3.1 and Copilot and characterised by only two or three dominant POS bigrams (notably "comma + adverb") versus Claude's many — a quantitative echo of "formulaic, few templates."

Regression signal: Gemini 3.x testers say the model got *less* distinctive than 2.5 — "3.1 feels more compliant than creative. It follows instructions but rarely surprises you," where 2.5 "had wit."

---

## 5. Key caveats
1. **The reliable Gemini signal is structural, not lexical.** Weight bullet density, bolded-label-plus-colon bullets, heading density, uniform paragraph shape, and the mandatory next-step closer — not word lists.
2. **"Of course!", "In essence", "Ultimately", em dashes** are plausible but no study isolates them to Gemini. Anecdotal.
3. **Cross-vendor convergence is real** (LessWrong's counter-thesis): post-2025 frontier models have converged stylistically, so vendor-specific vocabulary claims decay faster than structural ones.
4. Several 2026 "comparison" articles are SEO content with no methodology (Bloomberry, HumanizeThisAI, SupWriter, Tactiq).

---

## 6. Sources

**Academic / quantitative**
- https://www.scientificamerican.com/article/chatgpt-and-gemini-ai-have-uniquely-different-writing-styles/
- SycEval — https://arxiv.org/abs/2502.08177 · https://ojs.aaai.org/index.php/AIES/article/view/36598
- Detecting Stylistic Fingerprints of LLMs — https://arxiv.org/abs/2503.01659
- Frontiers in AI 2026, LLM fingerprints, Japanese texts — https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2026.1771115/full
- Your Large Language Models Are Leaving Fingerprints (ACL GenAIDetect 2025) — https://aclanthology.org/2025.genaidetect-1.6.pdf

**Detector vendors**
- https://www.pangram.com/blog/pangram-can-distinguish-llms
- https://www.eyesift.com/detect/gemini/ · https://gowinston.ai/ai-detectors-detect-google-gemini/

**Style comparisons / practitioner**
- https://www.bloomberry.ai/blog/why-every-ai-model-writes-differently-chatgpt-vs-claude-vs-gemini
- https://humanizethisai.com/blog/chatgpt-vs-claude-vs-gemini-writing · https://humanizethisai.com/blog/make-gemini-ai-output-undetectable
- https://supwriter.com/blog/humanize-gemini-text
- https://www.makeuseof.com/tested-claude-chatgpt-gemini-on-human-writing-task-gap-embarrassing/
- https://tactiq.io/learn/claude-vs-gemini-vs-chatgpt-for-writing

**Community / primary**
- https://discuss.ai.google.dev/t/feedback-creative-writing-with-gemini-3-1-issues-and-improvements/127438
- https://discuss.ai.google.dev/t/gemini-3-preview-first-impressions-and-creative-writingv2/109758
- https://github.com/google-gemini/gemini-cli/issues/4556
- https://news.ycombinator.com/item?id=47209171
- Leaked Gemini 2.5 Pro system prompt — https://github.com/elder-plinius/CL4R1T4S/blob/main/GOOGLE/Gemini-2.5-Pro-04-18-2025.md
- Princeton "Future of the Sentence" Gemini transcript — https://jdolven.princeton.edu/wp-content/uploads/sites/325/2026/01/Future-of-Sentence-Gemini.pdf
- https://www.lesswrong.com/posts/yBM2rQ6AJY6MoRGFQ/llm-style-slop-is-absolutely-everywhere
- https://martinfowler.com/bliki/ExcessiveBold.html
