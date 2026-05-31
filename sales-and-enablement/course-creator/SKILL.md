---
name: course-creator
description: create and review self-paced enterprise learning courses for target LMS and sales enablement. use when the user asks to design a complete self-paced course, convert source material into modules and lessons, generate knowledge checks, build graded assessments, create a feedback form, produce an lms-ready course blueprint, or prepare tool-call plans for lms_* course creation tools.
---

# Course Creator

## Purpose

Use this skill to create complete self-paced learning courses for enterprise enablement teams. Default to sales training, sales onboarding, product launch readiness, discovery training, objection handling, account management, CSM onboarding, partner onboarding, HR onboarding, or any other enterprise learning use case that can be delivered as an asynchronous course.

This skill must never design live workshops, instructor-led training, facilitator-led sessions, classroom agendas, breakout exercises, or live role-play events. All learning must be self-paced and LMS-ready.

## Core LMS structure

Always design courses for this hierarchy:

```text
path
  course
    module or section
      lesson
      knowledge check
      assessment
```

Use this course structure:

1. A course contains one or more modules.
2. A module can contain lessons, knowledge checks, assessments, or a mix of these entities.
3. Lessons are reading, viewing, or embedded content. Lessons must not contain graded questions.
4. Knowledge checks are ungraded. They reinforce learning and do not affect pass or fail status.
5. Assessments are graded. They determine pass or fail status.
6. The final module must always contain the final graded assessment.
7. The last learner-facing step must always be a feedback form. If the LMS build tools do not support a separate feedback form object, use the course rating and feedback setting and include the feedback questions in the final course pack.

Load `guidelines/lms-structure-and-entities.md` for detailed LMS rules before creating a final output or tool-call plan.

## Required operating model

Work stage by stage. Ask the user questions at each stage. Give clear options and put the relevant instructional design methodology in brackets after each option.

Example option style:

- Behavior-first course focused on measurable sales actions [Action Mapping]
- Structured certification course with graded assessment [Dick and Carey, Bloom]
- Rapid product update course with short modules [SAM, Microlearning]

After each stage:

1. Produce the stage output.
2. Run the matching evaluation checklist from `evals/`.
3. If the stage has blocking gaps, ask targeted clarifying questions before moving forward.
4. If the stage passes with assumptions, state the assumptions and continue only when the user agrees or asks for best-effort completion.

If the user asks for a full course in one pass, perform the same stages internally, state key assumptions, and output the complete course pack.

## Stage workflow

### Stage 1: Training Intake Analyst

Produce the course brief, business goal, learner profile, constraints, course type, source-material inventory, and LMS constraints.

Use:

- ADDIE Analysis for discovery.
- Kemp for learner, context, constraints, and resource fit.

Read:

- `guidelines/execution-logic.md`
- `guidelines/stage-question-bank.md`
- `references/addie.md`
- `references/kemp.md`
- `evals/stage-1-intake-eval.md`

### Stage 2: Performance Goal Mapper

Translate the business goal into observable learner behaviors, practice requirements, and success metrics.

Use:

- Action Mapping for business goal to behavior alignment.
- Dick and Carey for instructional goal and assessment alignment.

Read:

- `references/action-mapping.md`
- `references/dick-carey.md`
- `evals/stage-2-performance-goal-eval.md`

### Stage 3: Course Architect

Create the course map, module sequence, lesson hierarchy, LMS entities, estimated duration, and assessment placement.

Use:

- ADDIE Design for course architecture.
- Dick and Carey for alignment.
- Kemp for flexible sequencing and constraints.

Read:

- `guidelines/lms-structure-and-entities.md`
- `guidelines/course-pack-schema.md`
- `references/addie.md`
- `references/dick-carey.md`
- `references/kemp.md`
- `evals/stage-3-course-architecture-eval.md`

### Stage 4: Lesson Designer

Design self-paced lesson plans and lesson content blocks. Do not create live activities.

Use:

- Gagne for structured lesson flow.
- Merrill for problem-centered instruction.
- Tell-Show-Do-Apply for practical sales enablement lessons.

Read:

- `references/gagne-nine-events.md`
- `references/merrill-first-principles.md`
- `references/tell-show-do-apply.md`
- `guidelines/self-paced-design-rules.md`
- `evals/stage-4-lesson-design-eval.md`

### Stage 5: Knowledge Check and Scenario Designer

Create ungraded knowledge checks, self-paced scenario practice, flash recall, and feedback loops.

Use:

- CCAF for self-paced scenario practice.
- Merrill for application and integration.
- Microlearning for short retrieval practice.

Read:

- `references/ccaf.md`
- `references/merrill-first-principles.md`
- `references/microlearning.md`
- `evals/stage-5-practice-scenario-eval.md`

### Stage 6: Assessment Builder

Create graded assessments, answer keys, scoring logic, rubric criteria, passing rules, retake recommendations, and manual review requirements.

Use:

- Dick and Carey for assessment alignment.
- Bloom for cognitive level and performance depth.
- target LMS rules for auto-graded versus manually reviewed assessment types.

Read:

- `references/dick-carey.md`
- `references/bloom-assessment.md`
- `guidelines/lms-structure-and-entities.md`
- `evals/stage-6-assessment-eval.md`

### Stage 7: Reinforcement and Retention Planner

Design only self-paced reinforcement. Include in-course recaps, spaced refreshers, optional post-course nudges, job aids, and learner-owned application tasks. Do not create manager-led live coaching unless the user explicitly asks for a separate post-course adoption plan.

Use:

- SAM for iteration.
- Microlearning for short reinforcement.
- 70-20-10 only as an optional post-course workplace application lens, not as a live training model.

Read:

- `references/sam.md`
- `references/microlearning.md`
- `references/70-20-10.md`
- `evals/stage-7-reinforcement-eval.md`

### Stage 8: LMS Output Builder

Convert the approved design into an LMS-ready course pack and, when tools are available, an executable tool-call plan.

Use:

- target LMS Output Logic.
- target LMS entity rules.

Read:

- `guidelines/output-logic.md`
- `guidelines/lms-build-mode.md`
- `tools.md`
- `evals/output-contract-eval.md`
- `evals/final-lms-readiness-eval.md`

### Stage 9: Quality Reviewer

Run the final quality check. Verify business alignment, self-paced constraints, LMS validity, learner experience, assessment validity, and feedback form inclusion.

Use:

- Dick and Carey for alignment.
- Kirkpatrick for outcome evaluation.
- The final evals in `evals/`.

Read:

- `references/kirkpatrick-evaluation.md`
- `evals/stage-8-quality-review-eval.md`
- `evals/final-lms-readiness-eval.md`

## Final course pack output

When producing the final course pack, use this order:

1. Course brief
2. Design assumptions
3. Instructional design choices and why
4. Course settings
5. Course map
6. Module-by-module build plan
7. Lesson content plans
8. Knowledge checks, clearly marked ungraded
9. Assessments, clearly marked graded
10. Final assessment module
11. Feedback form as the last learner-facing step
12. Reinforcement and retention plan
13. Measurement plan
14. LMS build blueprint
15. Optional tool-call plan if target LMS tools are available
16. Quality review summary

Read `guidelines/output-logic.md` and `examples/stage-7-final-course-pack-example.md` before generating the final course pack.

## Tool use rules

If target LMS tools are available, do not call them until the user approves the course blueprint or explicitly asks to build directly in LMS.

Use the tools in this order when building in LMS:

1. Resolve users if reviewers or assignees are named.
2. List course categories.
3. Create the course.
4. Create modules or sections.
5. Create lessons.
6. Update lesson content.
7. Add knowledge checks.
8. Create assessments.
9. Add assessment questions in bulk.
10. Update course settings.
11. Get the course to verify structure.
12. Publish only if the user explicitly asks to publish.

Read `tools.md` and `guidelines/lms-build-mode.md` before using tools.

## Hard constraints

- Keep the delivery format self-paced only.
- Do not design live training, workshops, classroom agendas, trainer scripts, breakout activities, or live facilitation notes.
- Do not place graded questions inside lessons.
- Do not mark knowledge checks as graded.
- Do not use flip cards in assessments. Flip cards are only for knowledge checks.
- Avoid checklist questions in assessments unless the user explicitly chooses them after being warned.
- Free response and pitch assessments require manual reviewers.
- The final module must include the final graded assessment.
- The last learner-facing step must be a feedback form.
- If required input is missing, ask a small number of targeted questions rather than blocking the whole workflow.
- If source material is provided, use it as the source of truth and cite it in the course pack when possible.
