# deslop

A Claude plugin that strips the AI fingerprint out of text — and drafts clean in the first place.

Two skills:

| Skill | Use it for |
|---|---|
| **`deslop`** | Auditing and rewriting text that already exists. Detect-only, rewrite, or edit-a-file-in-place. |
| **`write-human`** | Drafting new prose that doesn't need de-slopping. Blog posts, emails, LinkedIn, memos, docs. |

## What makes this one different

**Model-aware.** Separate tell-sets for ChatGPT/GPT, Gemini, and Claude, because they have genuinely different fingerprints. GPT's tells are lexical and ornamental. Gemini's are organizational — bullet density, bolded-label bullets, the mandatory next-step closer. Claude's are epistemic — hedge stacks, query reframing, "You're absolutely right". Measured em-dash rates per 1,000 words: GPT-4.1 10.62, Claude Opus 9.09, Gemini 2.5 Pro 3.53, human mean 3.23.

**Current to 2026.** Most published ban lists are pre-flip: they catch the GPT-4-era Latinate signature (delve, intricate, meticulous, pivotal) and miss the GPT-5-era plain-word layer (quietly, matters, real, land, earn, "the work"). Both are covered, with the plain words flagged by collocation rather than as bare words.

**Vendor-confirmed evidence where it exists.** Anthropic's own leaked system prompt bans `genuinely`, `honestly`, `straightforward`. You don't ban what your model doesn't overuse.

**Tiered, not flat.** A 400-word ban list mangles technical writing. Tier 1A are frequency markers (evidence). Tier 1B are wordiness fixes that also fire on ordinary human formal prose and must never be reported as authorship evidence. Tier 2 fires on clusters, Tier 3 on density.

**Structure over vocabulary.** Negative parallelism in corporate documents went 46 → 49 → 100 → 208 between 2022 and 2025. Sentence-length uniformity is the most-cited single tell of 2026. Vocabulary gets patched; shapes don't. The procedure fixes substance, then structure, then rhythm, and only reaches diction in pass four.

**Guardrails on the editor.** Seven things a rewrite may never add — fake first person, manufactured stakes, forced contrarianism, performed candor, em-dash theatrics, staccato conversion, and invented specifics. The test: you may subtract and sharpen, you may not add. A fabricated number is worse than the vague phrasing it replaced.

**Honest about detectors.** Open-source AI detectors misclassify 30–69% of human text; a 2023 Stanford study found 61.3% of non-native TOEFL essays flagged as AI. These patterns are signals, not proof, and they detect *unedited* AI use rather than AI use. Never use this output as the basis for an accusation.

## Install

Copy the `deslop` folder into your plugins directory, or add the marketplace:

```
/plugin marketplace add <path-or-repo>
/plugin install deslop
```

## Structure

```
deslop/
├── .claude-plugin/plugin.json
├── README.md
└── skills/
    ├── deslop/
    │   ├── SKILL.md
    │   └── references/
    │       ├── vocabulary.md    tiered word lists, per-model fingerprints, 2026 layer
    │       ├── structures.md    sentence shapes, rhetorical templates, LinkedIn formulas
    │       ├── typography.md    dashes, Unicode table, formatting tells
    │       ├── registers.md     context profiles, voice profiles, tolerance matrix
    │       └── examples.md      before/after across five domains
    └── write-human/
        └── SKILL.md
```

## Usage

```
deslop this draft
audit this for AI tells, don't rewrite it
clean up post.md in place
does this sound like Gemini wrote it?
write a LinkedIn post about X without the AI slop
draft the release email in a blunt voice
```

## Provenance

Built August 2026 from: peer-reviewed corpus studies (Kobak et al. *Science Advances* 2025 on 15M+ PubMed abstracts; Kousha & Thelwall *Scientometrics* 2026; Juzek & Ward COLING 2025), leaked model system prompts, per-model em-dash measurement (arXiv 2603.27006), detector false-positive research (Booth BFI WP 2025-116), Wikipedia's *Signs of AI writing*, and the open-source `avoid-ai-writing`, `stop-slop`, and `anti-slop-writing` projects.

Word lists have a shelf life of roughly 18 months. Vendors patch them and humans absorb them — an 18-month study of academic speech found delve +48% and meticulous +40% in *human* usage. Re-verify periodically.

MIT.
