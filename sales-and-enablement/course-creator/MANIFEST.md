# Course Creator Skill Manifest

## Purpose

This skill helps create complete self-paced LMS courses using AI and instructional design methodology. It is optimized for target LMS course structure and enterprise enablement use cases.

## Included folders

| Folder | Purpose |
|---|---|
| `agents` | ChatGPT UI metadata. |
| `references` | Instructional design methodology explainers with examples. |
| `guidelines` | Execution logic, LMS structure, output logic, source grounding, and tool use. |
| `evals` | Stage-level and final output validation checklists. |
| `examples` | Ideal output examples for each major stage. |
| `scripts` | Optional validation utility for generated markdown course packs. |
| `assets` | Placeholder for future reusable course assets. |

## Key files

| File | Purpose |
|---|---|
| `SKILL.md` | Main skill instructions and trigger behavior. |
| `tools.md` | [Product Name] tool list and LMS Build Mode sequence. |
| `references/methodology-index.md` | Entry point for methodology reference files. |
| `references/examples-of-methodology-outputs.md` | Examples of methodology-specific output fragments. |
| `guidelines/execution-logic.md` | Primary step-by-step workflow. |
| `guidelines/stage-question-bank.md` | Stage questions and option sets with methodology labels. |
| `guidelines/lms-structure-and-entities.md` | target LMS hierarchy, entities, and rules. |
| `guidelines/output-logic.md` | Final course pack and LMS-ready output rules. |
| `guidelines/lms-build-mode.md` | Tool-call sequence for LMS build mode. |
| `evals/stage-1-intake-eval.md` through `evals/stage-8-quality-review-eval.md` | Stage validation checklists. |
| `evals/final-lms-readiness-eval.md` | Final LMS compliance and readiness review. |
| `examples/stage-7-final-course-pack-example.md` | Example final course pack structure. |
| `examples/lms-json-blueprint-example.json` | Example structured LMS blueprint. |
| `scripts/validate_course_pack.py` | Optional structural validator for markdown course packs. |

## Default scope

- Self-paced courses only.
- target LMS-ready course structure.
- Enterprise enablement use cases, with sales training as the default.
- Knowledge Checks are ungraded.
- Assessments are graded.
- Final module is always an assessment module.
- Last learner-facing step is always feedback.
