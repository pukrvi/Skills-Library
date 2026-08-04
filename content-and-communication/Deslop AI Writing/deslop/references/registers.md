# Registers and voice

Two independent axes.

**Register (context)** sets *how strict* to be, based on audience and medium.
**Voice** sets *how the prose should sound*.

You can write blunt for a blog or warm for docs. Where both govern the same rule and disagree, resolve toward the **stricter** of the two.

---

## Registers

**`social`** — LinkedIn, X, short-form. Punchy fragments and visual formatting are the medium, not a tell.
**`blog`** — the default. Standard long-form prose. All rules at full strength.
**`technical`** — long-form with code, architecture, APIs. Technical terms get a pass.
**`exec`** — investor emails, board updates, executive memos. High-trust audience; promotional language is the biggest risk.
**`docs`** — documentation, READMEs, guides. Clarity over voice.
**`casual`** — Slack, internal notes, quick replies. Only the worst offenders.

### Auto-detection

| Signal | Register |
|---|---|
| Under 300 words, hashtags or @mentions | `social` |
| Code blocks, API references, architecture | `technical` |
| Salutation + fundraising or board language | `exec` |
| Step-by-step instructions, parameter docs, README structure | `docs` |
| No strong signal | `blog` (strictest safe default) |

Say which register you picked and why. The user can override.

### Tolerance matrix

Rules not listed apply at full strength across all registers.

| Rule | social | blog | technical | exec | docs | casual |
|---|---|---|---|---|---|---|
| Em dashes | relaxed (2/post) | strict | strict | strict | relaxed | skip |
| Bold overuse | relaxed (hooks OK) | strict | strict | strict | relaxed | skip |
| Emoji in headings | relaxed (1–2 end of line) | strict | strict | strict | skip | skip |
| Excessive bullets | skip | strict | relaxed | strict | skip | skip |
| Bare noun-phrase bullets | strict | strict | relaxed (option lists) | strict | relaxed (parameter lists) | skip |
| Hedging | strict | strict | relaxed ("may" is accurate) | strict | relaxed | skip |
| Word list | strict | strict | **partial** (see below) | strict | relaxed | P0 only |
| Promotional language | relaxed (some sell expected) | strict | strict | **extra strict** | strict | skip |
| Significance inflation | strict | strict | strict | **extra strict** | relaxed | skip |
| Copula avoidance | skip | strict | relaxed | strict | skip | skip |
| Uniform paragraph length | skip | strict | strict | strict | relaxed | skip |
| Numbered list inflation | relaxed | strict | relaxed | strict | skip | skip |
| Rhetorical questions | relaxed (1 as hook) | strict | strict | strict | strict | skip |
| Transition phrases | skip | strict | strict | strict | relaxed | skip |
| Generic conclusions | skip | strict | strict | **extra strict** | skip | skip |
| Hashtag stuffing | strict | strict | strict | **extra strict** | skip | skip |
| Hedge-stacked predictions | strict | strict | relaxed | **extra strict** | relaxed | skip |
| Real/actual inflation | strict | strict | strict | **extra strict** | relaxed | skip |
| Subjectless fragments | relaxed (the register) | strict | relaxed | strict | skip | skip |
| Wall-of-text replies | n/a | n/a | n/a | n/a | n/a | strict |
| LinkedIn formula set | **extra strict** | strict | strict | strict | skip | skip |

**"Extra strict"** — flag borderline instances. In an investor email, one "thriving ecosystem" undermines the whole message.
**"Skip"** — don't audit this category here. The rule doesn't apply or isn't worth the edit.

### Technical register word-list exceptions

Legitimate technical meaning, **do not flag**: `robust`, `comprehensive`, `seamless`, `ecosystem`, `leverage` (when discussing actual platform leverage or APIs), `facilitate`, `underpin`, `streamline`, `scalable`, `dynamic`, `latency`, `throughput`, `stakeholders` (in a real RACI sense).

Still flag even in technical prose: `delve`, `tapestry`, `beacon`, `embark`, `testament to`, `game-changer`, `harness`, `unlock`, `revolutionize`, `cutting-edge`.

Also: the business/PM acronym set that appears on some published ban lists — KPI, SLA, ROI, TCO, MVP, sprint, scrum, onboarding, offboarding — is **correct domain vocabulary** in a technical or product context. Do not flag it there.

---

## Voice profiles

Voice is **optional**. If the writer doesn't name one, infer it from the input's existing register and don't impose a persona on text that already has one.

Each profile is a set of concrete targets, not a vibe.

**`casual`** — Contractions throughout; their absence reads stiff. Short sentences, ~14 words average; fragments allowed. At least one first-person or concrete-anecdote touch *if the source already has one*. Near-zero jargon. Keep warm hedges ("I think") but cut corporate ones ("it's worth noting"). *Blog posts, community, social.*

**`professional`** — Active voice for most sentences. Vary sentence length; avoid three near-identical lengths in a row. One concrete claim per paragraph — a number, a name, a date — never "experts say". Make the ask explicit. Low tolerance for hedging. *LinkedIn, investor email, pitches.*

**`technical`** — Prefer plain copulatives ("X is Y") over inflated substitutes. One idea per sentence; imperative mood for instructions. Jargon is fine, defined on first use. Tables and lists only where the content is genuinely list-shaped, never for decoration. *Docs, technical blog.*

**`warm`** — Address the reader directly and acknowledge them at least once. Cut intensifiers in favour of stronger verbs. No performative empathy ("I completely understand how you feel"). Medium sentences, 15–20 words, unhurried cadence. *Mentorship, onboarding, thank-yous.*

**`blunt`** — Lead with the claim; cut the windup. Em dashes rare; use periods for emphasis. No padding to hit a rule of three. Near-zero hedging. Short declaratives with an occasional long sentence for contrast. *Decision memos, hard feedback, thought leadership.*

### Calibrating to a sample

If the writer gives you a sample of their own writing ("match my voice — here's a post"), analyse its sentence-length pattern, contraction rate, paragraph openings, and recurring word choices, then match those instead of a named profile.

**Do not "upgrade" their vocabulary.** If they write "stuff" and "things", keep that register. If they use em dashes heavily and that's genuinely their voice, the cap doesn't apply to them — it applies to machine output.

### Sensible default pairings

casual ↔ casual · professional ↔ social/exec · technical ↔ docs/technical · blunt ↔ exec

---

## A note on where personality does *not* belong

For encyclopedic, technical, and legal text, neutral and plain **is** the correct human voice. Pass 6 of the main procedure ("put a person back in") does not apply there. Injecting first person or opinion into API documentation makes it worse, not more human.
