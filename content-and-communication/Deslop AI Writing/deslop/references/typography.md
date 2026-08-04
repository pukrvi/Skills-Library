# Typography, punctuation, and invisible characters

---

## Dashes

### Em dash (—, U+2014)

The famous tell — and the most misunderstood one. Em dashes are not bad punctuation. Models use them at a rate no human sustains, and in a position where a comma or a period would do.

**Measured rates, per 1,000 words** (12 models, ~240,000 words, tested under normal / no-markdown / explicit-prohibition conditions):

| Source | Default | Markdown suppressed |
|---|---|---|
| GPT-4.1 | 10.62 | 9.10 |
| Claude Opus | 9.09 | 0.19 |
| DeepSeek V3 | 6.95 | 5.41 |
| Gemini 2.5 Pro | 3.53 | 0.00 |
| Llama | 0.00 | 0.00 |
| **Human baseline** | **3.23 mean** (range 0.33–17.12) | — |

Under explicit prohibition GPT-4.1 still emitted 3.86/1k. Llama 3.1 8B base produced 0.49 with 28 markdown features; the RLHF'd instruct version produced zero em dashes and 5 markdown features — fine-tuning, not pretraining, sets the amplitude.

**Rule: cap at 1 per 1,000 words.** Convert the rest to commas, colons, periods, or parentheses.

**The diagnostic is the function, not the character.** AI em dashes almost always do one of two jobs:
- *Appositive emphasis* — "the result — a faster pipeline — surprised us"
- *Dramatic reveal* — "we shipped it — and it broke"

Human em dashes more often mark genuine interruption or a sharp aside.

**The critical failure mode:** replacing `—` with a spaced ` – ` without changing the sentence keeps the same appositive-emphasis rhythm under a different glyph. It fixes nothing and creates a new uniform-rhythm tell as writers mass-migrate. **Change the sentence shape, not just the character.**

**Also catch:** the double-hyphen substitute `--`, used by models told to avoid em dashes. Never carved out.

**Carve-out:** an em dash acting as a separator in a list item that opens with a bolded lead term or a markdown link is typography, not a prose splice — `- **Term** — description`, `- [label](url) — description`. Only the list-item form qualifies. A mid-sentence splice still counts, as does a line-initial `**Bold lead** — full sentence` outside a list (itself a tell).

**Caveat:** the human range overlaps heavily (up to 17.12/1k). Em-dash count alone is a bad detector and produces false positives against em-dash-loving human writers. Weight it as one signal among several.

**Note on GPT-5.1:** OpenAI patched em-dash suppression in November 2025, so newer ChatGPT output may be clean here while every other tell remains. Absence of em dashes is not absence of AI.

### En dash (–, U+2013)

The inverse tell. Models *under*-use it where it is correct — number and date ranges (`1990–2000`), scores (`3–1`), compound proper nouns (`Bose–Einstein`) — and substitute a hyphen.

**En dashes in ranges are a human signal. Keep them. Add them where they belong.**

### Hyphen

**Attributive vs predicate.** A compound is hyphenated *before* the noun ("a high-quality report") but not *after* a linking verb ("the report is high quality"). Models frequently hyphenate the predicate form. Fix to two words.

**Hyphenated-pair density.** "A high-quality, well-architected, future-proof solution." Cut to the modifier that actually matters.

---

## Invisible and substituted characters

Chatbot output carries typographic residue that a human typing in a plain text box or an IDE would never produce.

### Always strip, every register

| Character | Codepoint | Note |
|---|---|---|
| Non-breaking space | U+00A0 | almost never typed by hand |
| Thin space | U+2009 | artifact |
| Narrow no-break space | U+202F | artifact |
| Zero-width space | U+200B | pure artifact; also used in some watermarking |
| Zero-width joiner | U+200D | artifact |
| Word joiner | U+2060 | artifact |
| Soft hyphen | U+00AD | artifact |
| Cyrillic / Greek homoglyphs | e.g. `а` U+0430 for Latin `a` | pipeline artifact |
| Ligatures ﬁ ﬂ ﬀ | U+FB01, U+FB02, U+FB00 | pasted-from-PDF or model artifact |
| Fullwidth forms | Ａ Ｂ Ｃ | never hand-typed |
| Styled math letters | 𝐇𝐞𝐥𝐥𝐨, 𝓗𝓮𝓵𝓵𝓸 | never hand-typed |

### Context-dependent

| Character | Rule |
|---|---|
| Ellipsis `…` (U+2026) | Convert to `...` in casual and plain-text contexts — humans type three periods. Leave in typeset prose. |
| Multiplication sign `×` (U+00D7) | Convert to `x` in plain text (`1920×1080` → `1920x1080`). Keep in typeset or mathematical contexts. |
| Curly quotes `" " ' '` (U+201C/201D, U+2018/2019) | **Weak signal.** Word, Google Docs, macOS and iOS all auto-curl, so most human prose contains them. Meaningful only where nothing auto-curls: code comments, commit messages, terminal output, plain-text email, Slack. Never flag a curly apostrophe (U+2019) on its own. Leave them in finished publications and in locale-correct punctuation (French « », German „ "). |
| Arrows → ⇒ ➜ ✔ | Remove as connectors in running prose ("input → processing → output"); use words. Fine in diagrams, code, and technical notation. |

### Machine fingerprints (near-proof — strip mechanically, always)

These are not style. Their presence is essentially proof that text was pasted out of a specific chat tool without cleanup, regardless of how the surrounding prose reads.

- `citeturn0search0`, `turn0search1`, and the `` variants
- `contentReference[oaicite:0]{index=0}`, `oai_citation`
- `[attached_file:1]`, `grok_card`
- URL parameters: `utm_source=chatgpt.com`, `utm_source=copilot.com`, `utm_source=openai`, `utm_source=claude.ai`, `utm_source=perplexity.ai`, `referrer=grok.com` — keep the URL, drop the parameter
- Unfilled placeholders: `[Your Name]`, `[INSERT SOURCE URL]`, `[Describe the specific section]`, `[Company]`, `2025-XX-XX`, HTML/Markdown comments containing add / fill in / todo / insert

Regex shapes worth having: `\[(?:Your|Insert|Add|Enter|Describe|Specify|Choose)[^\]]+\]` and `\b\d{4}-XX-XX\b`.

---

## Formatting

### The bold-stem bullet

`**Term:** explanation` on every list item. The single most recognizable AI formatting fingerprint, and Gemini's universal bullet template.

Fix: strip the bold header and write the point directly. If the items genuinely need headers, they should probably be paragraphs.

**Related — list-label periods.** Models end a short label with a period and run the explanation as a separate sentence; a person uses a colon. `- **Intros.** Years of conferences and operator network.` → `- **Intros:** years of conferences and operator network.` The colon reads as "here's what this label means"; the period reads as a sentence the next clause then contradicts by continuing.
Carve-out: when the label span is a full sentence on its own, the period is correct. For the unbolded form, only flag when the leading fragment is clearly a label — a 1–4 word noun phrase with no verb.

### Bold in running prose

At most one bolded phrase per major section, or none. If something matters enough to bold, restructure the sentence to lead with it.

### Headings

- Sentence case, not Title Case. Title case only for the piece's main title, if at all.
- No emoji (🚀 ✨ 🔑 ✅ 💡) outside social posts.
- Never 3+ headings in under 300 words.
- Never generic scaffolding headers: Overview, Key Points, Summary, Conclusion, Introduction. Headers should tell the reader something specific.
- **Fragmented headers** — a heading followed by a one-line warm-up that restates it (`## Performance`, then "Speed matters.") before the real content. Cut the warm-up; the heading did that job.
- No `---` horizontal rule between every section.

### Bullets

- Never 8+ bullets in under 200 words. That should be a paragraph.
- **Bare noun-phrase lists.** 5+ consecutive items, each a short (≤6 word) adjective-plus-noun phrase with no verb: "Stable mining efficiency / Reliable pool connectivity / Optimized RandomX performance / Low failed share rates." The tell is the *symmetry* — every item the same grammatical shape, parallel in length, none asserting anything checkable.
  Fix: convert to prose, or rewrite items as full claims ("Failed shares stayed under 1% across a 12-hour run" beats "Low failed share rates").
  Does **not** apply to genuine list content — changelog entries, todo lists, parameter docs, ingredient lists — where bare noun phrases are the correct form. Key on absence of finite verbs.
- **Numbered list inflation.** "Three key takeaways", "Five things to know", "Here are the top seven". Only use a numbered list when the content genuinely has that many discrete parallel items. If you're padding to hit a number, the list shouldn't exist.
- **Nested hierarchies** where prose would serve.

### Hashtags

6+ trailing hashtags on a short social post is a hard flag. The block usually mixes one project-specific tag with broad category tags (#AI #Crypto #Innovation #FutureTech) that do nothing for discoverability.

Rationale for the threshold: LinkedIn and X organic engagement plateaus past 3–5 tags; human posts exceeding 5 are usually launch posts, while LLM posts default to 10–15.

**Not counted:** issue and PR references (`#88`, `owner/repo#88`), 6- and 8-character hex colours containing a digit (`#1a2b3c`), preprocessor directives (`#include`), URL fragments, Markdown headings, and anything inside a code span or fence. Short hex-shaped words stay counted, because `#fff`, `#dad` and `#decade` are also real tags. Channel names (`#general`) stay counted.

Fix: 2–3 specific tags maximum, or none.

### Wall-of-text replies

In conversational registers — issue and PR comments, chat, DMs, casual email — humans break at thought boundaries. Models default to one dense block.

**The tell:** a reply-length text (roughly under 150 words) with four or more sentences and zero line breaks anywhere.

Fix: break at thought boundaries, one idea per line-group.

**Carve-out:** a single dense paragraph is the *correct* shape in formal long-form — a blog intro, a docs paragraph, a deliberately tight one-paragraph email. This fires only in conversational reply registers. Never flag continuous long-form prose for lacking internal breaks.

### Suspiciously clean mechanics

Perfect spacing, punctuation and capitalization in a context where humans type fast (issue comments, chat, DMs) is *corroborating* evidence, never proof — a careful human types a flawless comment.

The inverse matters more: **when editing a human's casual text, preserve their typos, contractions, and idiosyncratic capitalization.** Smoothing away the rough edges erases the fingerprint that marks the text as theirs.
