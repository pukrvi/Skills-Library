# Example LMS tool-call plan

This is a planning artifact. Do not execute tool calls until the user approves the blueprint.

## Planned sequence

1. `lms_list_course_categories`
   - Purpose: Choose or confirm the category.

2. `lms_create_course`
   - Input: Course title, description, category, target audience, estimated duration.

3. `lms_create_section`
   - Repeat for each module.

4. `lms_create_lesson`
   - Repeat for each lesson.

5. `lms_update_lesson_content`
   - Add rich text blocks, documents, embeds, and videos.

6. `lms_add_knowledge_check`
   - Add ungraded knowledge checks.

7. `lms_create_assessment`
   - Create graded assessment entities.

8. `lms_add_questions_bulk`
   - Add graded questions.

9. `lms_update_course_settings`
   - Configure sequential learning, passing percentage, retakes, reviewers, rating and feedback.

10. `lms_get_course`
   - Verify course structure.

11. `lms_publish_course`
   - Execute only after explicit user approval.
