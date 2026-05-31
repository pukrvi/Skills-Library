# LMS Build Mode

Use this file only when the user wants a course built or prepared for build in target LMS.

## Before tool calls

Do not call LMS creation tools until one of these is true:

- The user approves the final course blueprint.
- The user explicitly asks to build the course directly.
- The user asks for an LMS tool-call plan without execution.

## Build sequence

1. Confirm build mode.
2. Load `tools.md`.
3. Resolve named reviewers or assignees using `resolve_user` if available.
4. List course categories using `lms_list_course_categories`.
5. Create the course using `lms_create_course`.
6. Create each module using `lms_create_section`.
7. Create lessons using `lms_create_lesson`.
8. Update each lesson using `lms_update_lesson_content`.
9. Add knowledge checks using `lms_add_knowledge_check`.
10. Create assessments using `lms_create_assessment`.
11. Add assessment questions using `lms_add_questions_bulk`.
12. Update course settings using `lms_update_course_settings`.
13. Verify with `lms_get_course`.
14. Publish using `lms_publish_course` only after explicit approval.

## Course settings defaults

| Setting | Default |
| --- | --- |
| Sequential learning | True for onboarding, certification, and process courses |
| Passing percentage | 70 percent standard, 80 percent certification |
| Retakes | Allowed, max 2 by default |
| Rating and Feedback | True |
| Content download | False unless user permits |
| Certificates | False unless certification course |
| Reviewers | Required for free response and pitch |

## Verification after build

After retrieving the course, compare against the approved blueprint:

- Course title matches.
- Course description matches.
- Category is set.
- Module count matches.
- Lesson count matches.
- Knowledge checks exist and are ungraded.
- Assessments exist and are graded.
- Final module contains final assessment.
- Rating and Feedback is enabled.
- Manual review questions have reviewers.
- Publish status matches user instruction.

## If a tool is unavailable

If any LMS tool is unavailable, provide a manual build plan with the same sequence. Do not pretend that the course was created.
