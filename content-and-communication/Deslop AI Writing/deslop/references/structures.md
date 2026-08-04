# Sentence structures and rhetorical templates

These are the load-bearing tells. A ban list is trivially defeated by synonym swaps; these shapes survive the swap, which is why they are the actual signature.

---

## 1. Negative parallelism

The single most-identified AI writing tell, and the one with hard growth data behind it. Counts of "It's not just a ___, it's a ___" in a corpus of corporate documents: 2022 ≈ 46, 2023 ≈ 49, 2024 = 100, 2025 = 208. Doubled, then doubled again.

Mechanism: RLHF rewards rhetorical escalation over factual density, so the model swaps a modest noun for an abstract one and scores well.

**Variants to catch:**

- "It's not X — it's Y."
- "It's not just X, it's Y."
- "This isn't about X, it's about Y."
- "Not only does it X, but it also Y."
- "More than a X, this is Y."
- "X isn't dead. It's evolving."
- "The question isn't X. It's Y."
- "The answer isn't X. It's Y."
- "It feels like X. It's actually Y."
- "stops being X and starts being Y"
- "not because X, but because Y"
- "X rather than Y" (when Y is invented to balance X)

**The split form.** The negation and the correction fall in two separate sentences rather than pivoting on one dash. "The headline isn't the speed. The real story is the cost curve." Read alone, each sentence looks like an innocent declarative — which is exactly why it slips past a check tuned to the joined phrasing. Flag it the same way.

**The multi-negation countdown.** "It's not the price. It's not the features. It's the trust." Same move, inflated. Cut straight to the positive claim.

**The tailing negation.** A bare negation fragment tacked onto the end: "The options come from the selected item, no guessing." Write it as a real clause ("without forcing the user to guess") or cut it.

**Fix:** state the positive claim directly, with a specific.
"This is not just a dashboard, it is a command center" → "The dashboard puts approvals, comments, and status on one screen."

**Cap:** one per piece, and only when it earns its place.

**Carve-out:** negations enumerating spec constraints in a list ("no dependencies, no telemetry, no network calls") are list content, not a rhetorical reveal.

---

## 2. Rule of three

Triads of adjectives, nouns, or clauses, matched in length and rhythm. "Innovative, transformative, and groundbreaking." Lists that default to exactly three items regardless of how many actually matter.

The tell is *defaulting*, including padding to three with a filler item. Not the existence of a triad.

**Fix:** let the content set the count. Use two and four deliberately. Cap one "adjective, adjective, and adjective" pattern per piece.

**Related — triple negation reveal.** "Not X. Not Y. Just Z." — "No theory. No fluff. Just execution." Manufactured tension before an ordinary point. Fix: "The plan focuses on execution."

---

## 3. Rhetorical question and answer

A self-posed question answered immediately. "The result? Devastating." "The worst part? Nobody saw it coming." "And the fix? Better briefs."

Also the section-transition form: "But what does this mean for developers?" "So why should you care?" "What's next?"

**Fix:** merge into a declarative. "Aligning creative briefs resolves this."

Rhetorical questions are earned by strong setup, not dropped as transitions.

---

## 4. Copula avoidance

Models systematically suppress `is / are / was / were` in favour of inflated substitutes, which makes sentences sound like press releases.

Blacklisted replacements: **serves as · stands as · marks · functions as · operates as · represents · boasts · features · maintains · offers · underscores · highlights · reflects**

Before: "The initiative serves as a testament to organizational resilience and operates as a catalyst for growth."
After: "The initiative shows the organization's resilience and drives growth."

**Fix:** default to `is` or `has` unless a more specific verb genuinely adds meaning.

---

## 5. Superficial analysis tags

Strings of present participles used as pseudo-analysis: "…, symbolizing the region's commitment to progress, reflecting decades of investment, and showcasing a new era of collaboration." These say nothing.

The same move without the -ing: "this represents a broader shift", "the decision symbolizes a commitment to excellence", "it speaks to a larger trend in the industry."

**Fix:** name a specific consequence, or cut the clause entirely.

Note: -ing participial openers run at 2–5× human rate. Watch those too.

---

## 6. False ranges

"From the Big Bang to dark matter." "From strategic planning to implementation." "From intimate gatherings to global movements." Sweeping breadth between two things that aren't on a spectrum.

**Fix:** list the actual items, or pick the one that matters.

---

## 7. Throat-clearing and engagement bait

**Openers:** In today's fast-paced world · In today's digital age · In the era of · In a world where · In the ever-evolving landscape of · At its core · When it comes to · Welcome to the world of · Imagine a world where · Picture this · Let's face it · Here's the thing · Let me be clear · Let's be honest · Look, · Real talk · Honestly?

**Engagement bait:** Let's dive in · Let's delve into · Let's explore · Let's unpack this · Let's break this down · Buckle up · Stay tuned · What if I told you · Ready to go deeper? · Let that sink in

**Infomercial hooks (mid-flow teasers):** The catch? · The kicker? · But here's the kicker: · The best part? · Plot twist: · The result? · What nobody tells you · The part everyone misses

**Fix:** delete the hook and state the thing. "The catch? It only works on weekends." → "It only works on weekends."

The "Let's + verb" pattern is broader than "let's dive in" — flag any "let's" functioning as a transition rather than a genuine invitation.

---

## 8. Hedging and vague attribution

**Epistemic hedges:** It is important to note that · It's worth noting · It should be noted that · One might argue that · It could be argued that · It is worth considering that · broadly speaking · generally speaking · to be clear · perhaps

**Hedge stacks (the tell is the stack, not either word):** could potentially · may eventually · might ultimately · it seems likely that perhaps. Pick one, or state concretely what's unknown.

**Weasel attribution:** Studies show · Experts agree · Research suggests · Observers have noted · Industry reports suggest · Critics contend · Analysts agree · Several publications note · Many believe

**Vague third-party validation:** "an outside party measuring the same models everyone runs and putting us on top", "independent testing confirms", "third-party benchmarks show we lead". The authority is faceless and the claim unfalsifiable.

**Fix:** name the source, the test, and the result, or cut the claim. "An outside party put us on top" → "On the HELM leaderboard (April 2026 run), we ranked first on reasoning latency."

**Carve-out:** specifically attributed, checkable validation stays — a named benchmark, a linked report, a dated audit. The tell is the vagueness, not the act of citing.

---

## 9. Formulaic conclusions

**Summary openers:** In conclusion · In summary · To summarize · Overall · Ultimately · At the end of the day · As we look to the future

**Generic closers:** The future looks bright · Only time will tell · One thing is certain · As we move forward · The possibilities are endless · This paves the way for · The journey doesn't end here

**Future-narrative closers.** Pattern: modal (may/could/will/is poised to) + "become" + "one of the most [adjective]" + (narrative/story/trend/theme/chapter/movement). Grammatically a prediction, containing no testable content.
Fix: pick the falsifiable version. "DePIN compute may exceed AWS spot pricing for embarrassingly parallel workloads by 2027" is a prediction. "The intersection of AI and DePIN may become one of the most important narratives of the next market cycle" is not.

**Balanced wrap-up.** Restatement of the prompt + high-level acknowledgment of challenges + optimistic closing sentence. This is the default LLM ending shape.

**Fix:** end once the core points are established — on a concrete observation, a named limitation, or a specific ask. A summary is justified only when the piece is long enough that the reader needs one, and it must land a judgment rather than list what was covered.

---

## 10. Assistant residue and sycophancy

**Chatbot artifacts (P0):** I hope this helps! · Certainly! · Absolutely! · Sure thing! · Great question! · Feel free to reach out · Let me know if you need anything else · In this article, we will explore · As mentioned previously · This guide will delve into · Based on the information provided

**Sycophancy (P0):** You're absolutely right! · Excellent point! · That's a really insightful observation · That's a sharp question

**Acknowledgment loops:** "You're asking about…", "The question of whether…", "To answer your question…", or opening a section by summarizing the previous one. The reader knows what they asked.

**Narrated candor** — announcing your disclosure instead of disclosing: "Two caveats I would rather flag than let you discover later:", "I want to be upfront:", "To be fully transparent:", "Rather than bury this, I'll say it plainly:".
The deletion test: cut the frame. If the sentence loses no information, it was never content.
Carve-out: the disclosure itself stays ("I haven't tested this on Windows", "this is a mitigation, not a fix"), as does conventional conflict-of-interest labelling ("In the interest of full disclosure, I own shares in the company discussed").

**Recap-flattery opener** — replying by summarizing someone's own work back at them with praise before getting to the point. Fix: substance first, one plain clause of thanks if warranted.

---

## 11. Significance inflation and puffery

"Marks a pivotal moment in the evolution of…" · "A watershed moment for the industry" · "Serves as a testament to" · "Cementing its place as" · "Cannot be overstated" · "Underscores the importance of"

Test: if the sentence still works after you delete the inflation clause, delete it.

**Promotional / tourism-brochure prose:** "nestled within the breathtaking foothills", "a vibrant hub of innovation", "a thriving ecosystem". Replace with plain description. If you wouldn't say it in conversation, cut it.

**Formulaic challenges:** "Despite challenges, X continues to thrive." "While facing headwinds, the organization remains resilient." Name the actual challenge and the actual response, or cut.

**False concession:** "While X is impressive, Y remains a challenge." Vague on both sides, commits to nothing. Make the concession specific or pick a side.

**Novelty inflation:** "He introduced a term", "She coined the phrase", "a failure mode nobody's naming", "the insight everyone's missing". Most ideas are applications of existing concepts. Describe what the person *did with* the concept.

---

## 12. Invented labels and fabricated symmetry

**Invented labels.** Pseudo-analytical compound terms coined mid-sentence and never defined: "the supervision paradox", "the context-collapse problem", "a coordination tax", "the acceleration trap". Naming a concept is not explaining it. Define on first use or describe the mechanism.

**Invented contrast-pair mirroring.** One half of a contrast is a real term of art; the other is fabricated for parallelism. "False precision rather than genuine accuracy" — "false precision" is a real statistical term, "genuine accuracy" is a phantom counterpart. The asymmetry is invisible unless you know which half is real.
Fix: reach for an actual opposite, or drop the contrast and state the positive claim.

**Aphorism formulas.** "X is the language of Y", "X is the currency of Z", "the architecture of trust", "X is not a tool but a mirror". The shape does the persuading instead of the evidence.
Fix: replace the formula with the concrete claim it gestures at. "Symmetry is the language of trust" → "Symmetric layouts feel more predictable to users."
Carve-out: quotations and established idioms ("time is money") stay.

**Moral-adjective category errors.** Moral adjectives glued to non-agentic nouns: "an honest shape", "a more honest representation", "flagged honestly". Shapes are not moral agents.
Fix: state the concrete property. "An honest shape" → "a more realistic curve."

---

## 13. Manufactured rhythm

**Manufactured punchlines / staccato drama.** Three or more same-shape fragments in a row, each engineered to land like a quotable closer: "It had no preference for symmetry. No aesthetic prior. No nostalgia for human taste."
One fragment that earns its emphasis is human variation. Three in a row is a drumroll.
Fix: keep the one that earns it, fold the rest into ordinary sentences with the claim stated.

**Anaphora abuse.** "They assume that… They assume that… They assume that…"

**Antithesis stacking.** Consecutive sentences each built on a contrast: "Fast, but fragile. Cheap, but limited. Powerful, yet opaque." One is rhetoric. Three is a template.

**Listicle in a trench coat.** Prose that is secretly a list: "The first wall is… The second wall is… The third wall is…" This is specifically what models produce *when told not to use bullets*, so it rises as formatting suppression rises.

---

## 14. Structural and content tests (writer-side, not pattern-matchable)

**Paragraph reshuffle.** Swap two body paragraphs. If nothing breaks, you have a list of topics, not an argument that builds. Each paragraph should be load-bearing for the next.

**Treadmill test.** For each paragraph, name the one fact, claim, or turn it contributes. AI prose typically restates the premise in fresh words — lots of motion, no distance. The tell: you could cut 40–60% and lose no information.

**Fractal summary.** A summary at every level — section, subsection, whole. Cut the ones the reader doesn't need.

**Uniform paragraph shape.** Rigid one-topic-sentence / two-support / one-conclusion blocks repeated down the page.

**Self-labeling significance.** After listing several items, pointing back at one: "That last move is the contrarian one", "This is the interesting part", "That third bullet is the real story". If it's genuinely contrarian the reader sees it; if it isn't recognizable without the label, the label is unearned.

**Emotional flatline.** Announced reactions with no content: "What surprised me most…", "I was fascinated to discover…", "Interesting part of the project:". If it surprised you, say what you expected instead.

**Lingering-attention claims.** "The line I keep coming back to", "I can't stop thinking about this", "still thinking about this one". Unfalsifiable and self-flattering.
Carve-out: leave it when the sentence says *why* it recurred.

**Diff-anchored writing.** Documentation narrating a change instead of describing the thing: "This function was added to replace the previous approach of iterating through all items." A reader without the commit history gets archaeology.
Carve-out: changelogs, release notes, migration guides and decision records narrate change correctly.

**Synonym cycling.** "developers… engineers… practitioners… builders" for one group. Human writers repeat the clearest word.

---

## 15. The LinkedIn / thought-leadership formula set

Nine slot-fill templates that dominate the GTM, marketing and founder-content register. Each manufactures profundity without adding precision. Recognize the shape, not the words.

1. **Cinematic world plus moral** — "In a world where [scary change], [virtue] becomes [currency]."
   *"In a world where everyone has AI, taste becomes the only edge."*
2. **Moralizing generalization** — "Most people [lazy thing]. The few who win [disciplined thing]."
   *"Most people use AI to move faster. The few who win use it to think deeper."*
3. **Simple binary** — "Stop [old habit]. Start [new habit]."
   *"Stop collecting prompts. Start building workflows."*
4. **Rhythmic fake depth** — "It's not [obvious]. It's not [second obvious]. It's [third 'unexpected']."
   *"It's not speed. It's not talent. It's consistency with feedback."*
5. **Doomer productivity threat** — "If you're not [doing X] yet, you're already [behind]."
6. **Invisible-layer glorification** — "The real [game] isn't [what everyone sees]. It's [what masters do]."
7. **False simplification** — "You don't need more [resources]. You need [intangible virtue]."
8. **Era statement** — "It's never been easier to [X]. It's never been harder to [deeper X]."
9. **Declared truth** — "Here's the truth: [obvious statement]" / "What nobody tells you is that [obvious statement]."

**Fix for all nine:** replace the formula with the specific claim and the evidence for it. If there is no specific claim underneath, the sentence has nothing to say and should be cut.

**Speculative scenario openers** belong in this family: "Imagine a world where…", "Picture a future in which…". The scenario does the persuading; no evidence is offered.
Fix: "Imagine a world where every deploy is instant" → "Instant deploys would cut our release cycle from a day to minutes."
Carve-out: fiction, a thought experiment with a stated payoff, and instructional "imagine you have a sorted array".

---

## 16. Template phrases

Slot-fill constructions where a blank could hold any noun and the sentence would sound the same.

- "a [adjective] step towards [adjective] AI infrastructure" → name the capability, benchmark, or outcome
- "Whether you're [X] or [Y]" → false breadth. "Whether you're a startup founder or an enterprise architect" means "everyone". Pick the audience.
- "I recently had the pleasure of [verb]-ing" → "I talked to", "I read", "I attended"
- "This is where X comes in" → cut
- "The good news is" → cut
- "Think of it as…" / "It's like a…" → keep only if the analogy does work

---

## 17. Parenthetical hedging and confidence calibration

**Parenthetical hedging:** "(and, increasingly, Z)", "(or, more precisely, Y)", "(and perhaps more importantly, W)". Sounds nuanced without committing. If the aside matters, give it a sentence. If not, cut it.

**Confidence calibration phrases:** It's worth noting that · Interestingly · Surprisingly · Importantly · Notably · Certainly · Undoubtedly · Without a doubt. These tell the reader how to feel about a fact instead of letting the fact do it.
One "notably" in 2,000 words is fine. Three in 500 words is emphasis stacking. Flag by density.

**Persuasive-authority tropes:** "the real question is", "at its core", "fundamentally", "make no mistake", "the truth is". Same move, asserting depth instead of feeling. Cut the trope and lead with the substance.
