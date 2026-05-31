# Generic tool reference for Course Creator

Use this file when the user wants the course to be built or prepared for build inside target LMS.

## LMS course creation tools

| Tool | Use |
| --- | --- |
| `lms_list_course_categories` | List available course categories before selecting the course category. |
| `lms_create_course` | Create the top-level course with title, description, category, and basic metadata. |
| `lms_create_section` | Create a module or section inside the course. |
| `lms_create_lesson` | Create a lesson entity inside a module. |
| `lms_update_lesson_content` | Add or update rich text, documents, images, videos, embeds, and other lesson blocks. |
| `lms_add_knowledge_check` | Add ungraded knowledge checks. Use only supported knowledge check question types. |
| `lms_create_assessment` | Create a graded assessment entity. |
| `lms_add_questions_bulk` | Add assessment questions in bulk. Use for single select, multi select, matching, sorting, free response, and pitch where supported. |
| `lms_update_course_settings` | Configure reviewers, passing percentage, retakes, sequential learning, rating and feedback, content download, certificates, and other settings. |
| `lms_get_course` | Verify the created course structure before publishing. |
| `lms_publish_course` | Publish the course only after explicit user approval. |

## [Product Name] knowledge and document tools

| Tool | Use |
| --- | --- |
| `knowledge_search_documents` | Search internal source material such as product docs, battlecards, onboarding docs, or enablement content. |
| `knowledge_ask` | Ask a knowledge system for internal product, sales, or enablement information. |
| `knowledge_chat_with_document` | Ask questions against a specific document used as course source material. |
| `web_search` | Search external sources only when the user requests external research or fresh public information. |
| `resolve_user` | Resolve named users when configuring reviewers, assignees, or ownership. |

## Related tools outside core course scope

| Tool | Use |
| --- | --- |
| `roleplay_list` | Review existing AI role plays only if the user asks to include a separate path extension. Do not use for the default course structure. |
| `roleplay_list_templates` | Review role play templates only if the user asks to add role play outside the core course. |

## Tool sequence for LMS Build Mode

1. Get approval for the LMS blueprint.
2. Resolve reviewers or assignees if needed.
3. List available categories.
4. Create the course.
5. Create each module or section.
6. Create lessons and update lesson content.
7. Add knowledge checks as ungraded entities.
8. Create assessments and add graded questions.
9. Configure settings.
10. Retrieve the course and compare it against the blueprint.
11. Ask for explicit approval before publishing.

## Guardrails

- Do not publish unless the user explicitly asks.
- Do not create live workshop content.
- Do not use role play tools for the default course unless the user explicitly requests a path-level extension.
- Do not use checklist questions in assessments unless the user approves the grading risk.
- Do not set free response or pitch assessments without reviewers.
