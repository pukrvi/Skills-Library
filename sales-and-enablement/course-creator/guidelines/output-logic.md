# Output logic

## Final output principles

The final output must be practical enough for an enablement team to build in target LMS without rethinking the design.

## Required output order

1. Start with the takeaway.
2. Provide the complete course pack.
3. Clearly separate LMS entities.
4. Mark Knowledge Checks as ungraded.
5. Mark Assessments as graded.
6. Include the final assessment module.
7. Include the feedback form as the last learner-facing step.
8. Include the LMS build blueprint and optional tool-call plan.
9. End with a quality review summary.

## Course map format

```markdown
| Module | LMS items | Objective | Est. time | Methodology | Assessment role |
| --- | --- | --- | ---: | --- | --- |
| 1 | Lesson, Knowledge Check | Build foundation | 12 min | Gagne, Tell-Show-Do-Apply | Practice only |
```

## Module plan format

```markdown
## Module [N]: [Title]

Goal: [Module goal]
Estimated time: [minutes]
LMS items:

1. Lesson: [Title]
2. Knowledge Check: [Title] Ungraded
3. Assessment: [Title] Graded if used
```

## Lesson format

```markdown
### Lesson: [Title]

Objective: [Observable objective]
Methodology: [Gagne, Merrill, or Tell-Show-Do-Apply]
Estimated time: [minutes]
Content blocks:

1. Rich Text Block: [Heading]
   - Key message:
   - Body:
   - Example:
2. Divider
3. Document or video block if source material is used

Learner takeaway: [One sentence]
```

## Knowledge check format

```markdown
### Knowledge Check: [Title] Ungraded

Purpose: [Practice or recall goal]
Question type: [Single Select, Multi Select, Matching, Sorting, Checklist, Flip Card]
Framework: [CCAF, Bloom, Microlearning]
Question:
Options:
Correct answer or expected completion:
Feedback:
```

## Assessment format

```markdown
### Assessment: [Title] Graded

Purpose: [Readiness goal]
Question type: [Single Select, Multi Select, Matching, Sorting, Free Response, Pitch]
Auto-graded: [Yes or No]
Manual reviewer required: [Yes or No]
Bloom level:
Question:
Options if applicable:
Correct answer or rubric:
Feedback or reviewer guidance:
```

## Feedback form format

```markdown
## Feedback Form Last Learner-Facing Step

Placement: After final assessment
Implementation: Enable Rating and Feedback in course settings. If a separate feedback object is available, create it after the final assessment.
Questions:
1. How useful was this course for your role?
2. Which lesson was most useful?
3. What remains unclear?
4. How confident are you applying this in your work?
5. What should we improve before the next cohort?
```

## Quality review format

```markdown
## Quality Review Summary

| Check | Status | Notes |
| --- | --- | --- |
| Self-paced only | Pass | No live sessions included. |
| LMS hierarchy valid | Pass | Course uses modules, lessons, knowledge checks, assessments. |
| Knowledge checks ungraded | Pass | All practice checks are marked ungraded. |
| Assessments graded | Pass | Final assessment is graded. |
| Final module has assessment | Pass | Final module contains graded assessment. |
| Last step is feedback | Pass | Feedback form follows final assessment. |
```
