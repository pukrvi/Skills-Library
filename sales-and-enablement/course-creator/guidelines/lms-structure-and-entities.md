# target LMS structure and entities

## Hierarchy

```text
path
  course
    module or section
      lesson
      knowledge check
      assessment
```

A Path is a collection of courses. A Course is a standalone learning entity. A Module is also called a Section. Modules contain Lessons, Knowledge Checks, and Assessments.

## Course top-level fields

| Field | Rule |
| --- | --- |
| Name or title | Required. Visible to learners. |
| Description | Recommended. Explain what the learner will learn and why it matters. |
| Category | Required for organization if categories exist. One category per course. |
| Banner or thumbnail | Optional. Can be custom, default, or AI-generated if available. |
| Creation method | Not part of final course content. Course Creator can prepare for Start from Scratch or AI Guided Build. |

## Outline

The Outline step is optional. It can be used to plan modules, lessons, assessment placeholders, and knowledge check placeholders. Power users may skip the outline and go directly to Build.

## Build section

Each module can include:

- Lesson
- Knowledge Check
- Assessment

The LMS may also support AI Role Play and SCORM import, but these are outside the default Course Creator structure unless the user explicitly requests an extension.

## Lessons

Lessons are reading or viewing content. They do not include questions as graded objects.

Lesson creation modes:

- Build from scratch
- Generate with AI
- Import a reusable lesson from LMS Library

Lesson content block types:

| Block type | Use |
| --- | --- |
| Rich Text Block | Main lesson text, explanations, examples, summaries. |
| Single Document | PDF, PPT, video, or other file from library, Google Drive, or OneDrive. |
| Image | Visuals, diagrams, screenshots. |
| Embed URL | Embeddable web or website content. |
| YouTube Video | Embedded YouTube video. |
| AI Video | Feature-flagged. Use only if the tenant supports it. |
| Divider | Visual separation between lesson sections. |
| Copy Block | Reuse content blocks across lessons. |

Estimated time is auto-calculated by AI and can be manually overridden.

## Knowledge Checks

Knowledge Checks are ungraded. They do not affect pass or fail. Use them for engagement, retrieval, recall, and practice.

Supported types:

| Type | Rule |
| --- | --- |
| Single Select | One correct answer. Good for recall or scenario judgment. |
| Multi Select | Multiple correct answers. Good for concept coverage. |
| Matching | Match items across two columns. Good for concept to example mapping. |
| Sorting | Drag and drop items into order. Good for process or priority. |
| Checklist | Best used in Knowledge Checks, not Assessments. |
| Flip Card | Exclusive to Knowledge Checks. Good for terms, talk tracks, and recall. |

Knowledge Checks can be generated with AI using lesson context and resource documents.

## Assessments

Assessments are graded and determine pass or fail.

Supported assessment types:

| Type | Grading | Rule |
| --- | --- | --- |
| Single Select | Auto-graded | One correct answer. |
| Multi Select | Auto-graded | Multiple correct answers. |
| Matching | Auto-graded | Match pairs. |
| Sorting | Auto-graded | Correct sequence or priority. |
| Checklist | Technically supported but not recommended | Incomplete checklists can unfairly fail learners. Use in Knowledge Checks instead. |
| Free Response | Manual review | Requires reviewer and rubric. Can support file upload if available. |
| Pitch | Manual review | Learner records or uploads response. Requires reviewer and rubric. |
| AI-Generated Questions | Varies | Must still follow the type-specific grading rules. |

## Assessment settings

| Setting | Rule |
| --- | --- |
| Randomize Questions | Optional. Recommended for high-stakes assessments. |
| Randomize Answer Options | Optional. Recommended for auto-graded multiple choice. |
| Reveal Answers | Optional. Use for learning-oriented assessments, not high-stakes certification unless approved. |
| Timeout | Optional. Use when time matters. |
| Passing Percentage | Required for graded assessment courses. Common defaults: 70 percent for standard, 80 percent for certification. |
| Retakes | Optional. Recommend 1 to 2 retakes for most self-paced courses. |
| Reviewers | Required when free response or pitch questions are used. |

## Course settings

| Setting | Course Creator recommendation |
| --- | --- |
| Reviewers | Required for manual review questions. Use named reviewers or manager as default. |
| Minimum Reviews Required | Set to 1 unless compliance requires more. |
| Passing Percentage | Recommend 70 percent for normal courses and 80 percent for certification. |
| Allow Retakes | Recommend yes unless compliance requires strict attempt limits. |
| Sequential Learning | Recommend yes for foundational, onboarding, and certification courses. |
| Course Only for Path | Use only if the course should not be taken standalone. |
| Rating and Feedback | Always enable because the final learner-facing step must be a feedback form. |
| Content Download | Decide based on content sensitivity. |
| Certificates | Enable only for certification or compliance-style courses. |

## Publishing and assignment

Allowed actions:

- Save as Draft
- Save and Publish
- Assign to Users
- Assign to Teams
- Assign to Cohorts
- Set Due Date

Course Creator must not publish unless the user explicitly asks.

## LMS Library

The LMS Library stores reusable lessons, assessments, and modules. It is separate from CMS Library. Content in the LMS Library is not searchable by reps in CMS or content search.

## Course Creator structure rules

1. Use Lessons for content only.
2. Use Knowledge Checks for ungraded practice.
3. Use Assessments for graded pass or fail.
4. Put the final graded assessment in the final module.
5. Put feedback after the final assessment. Use Rating and Feedback if no feedback form entity exists.
6. Do not use Flip Card in assessments.
7. Prefer Checklist in Knowledge Checks, not Assessments.
8. If using Free Response or Pitch, include reviewers and rubrics.
