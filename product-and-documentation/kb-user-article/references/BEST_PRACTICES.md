# SaaS Documentation Best Practices & Product Knowledge

This reference guide powers `💡 Recommendation:` callouts in user-facing KB articles. Use these frameworks to identify gaps and suggest enhancements that improve clarity, task completion, and user confidence.

---

## Part 1: SaaS Documentation Best Practices

### Progressive Disclosure
**What it is:** Lead with the simplest, most common path first. Move advanced options, edge cases, and optional features after the main workflow.

**When to recommend:**
- Article jumps directly into advanced configuration without showing the basic workflow first.
- Optional features or settings are mixed with required steps.
- Users would need to understand 5+ concepts before completing their first task.
- "Power user" content blocks simple approaches.

**Example recommendation:**
"💡 Recommendation: Start with 'How to create a basic DSR in 5 steps' before covering advanced analytics and conditional blocks. Move custom styling and integrations to a separate 'Advanced' section."

---

### Task-Based Structure
**What it is:** Organize content around *what users do* (e.g., "Prep for a customer call" or "Find content to share") rather than *how the UI is built* (menu structures, panel options, database fields).

**When to recommend:**
- Article describes clicking buttons and navigating menus without connecting to user goals.
- Section headers are UI-driven ("Sidebar Options," "Settings Panel") instead of outcome-driven ("Customize Your Dashboard," "Control Notifications").
- User is unsure why they'd use a feature after reading about it.
- Steps feel disconnected from a broader workflow.

**Example recommendation:**
"💡 Recommendation: Restructure as 'How to prepare for a call in 5 steps' with each step showing the outcome. Currently reads like a feature manual rather than a task guide."

---

### Error Recovery
**What it is:** Document what to do when steps fail—missing data errors, timeouts, permission issues, invalid inputs, and how to unstick yourself.

**When to recommend:**
- No troubleshooting section exists.
- Steps have preconditions (e.g., "must have write access") but don't explain what happens if you lack them.
- Common failure modes aren't addressed (file too large, API limits, character restrictions).
- No guidance on reverting accidental actions.

**Example recommendation:**
"💡 Recommendation: Add 'What if it doesn't work?' section covering: 'If the file won't upload, check file size (max 25MB) and format. If permissions error appears, contact your admin to request folder write access.'"

---

### Onboarding Moments
**What it is:** Include "getting started" callouts, first-time user tips, and acknowledgment that some users are brand new to this feature or [Product Name].

**When to recommend:**
- Article assumes users know [Product Name] well or have done similar tasks before.
- No "Why would I do this?" context before the how.
- Feature is frequently misunderstood by new users (AI assistant sources, DSR analytics, etc.).
- No mention of entry points (where to find the feature for the first time).

**Example recommendation:**
"💡 Recommendation: Add opening context: 'If you're new to RFP Automation, start by understanding what it does: takes your RFP, maps it to content, and generates answers. Here's how.' Then explain entry points (Admin Console → RFP Tools → New RFP)."

---

### Expected Results
**What it is:** Tell users what they should see on screen after completing a step. Set clear expectations.

**When to recommend:**
- Steps lack outcome statements (no "you should see X" or "the panel now shows Y").
- Multiple similar actions happen and it's unclear which one succeeded.
- User can't confirm they did the step correctly.
- Success looks different based on settings or data state (e.g., DSR shows analytics only if tracking is enabled).

**Example recommendation:**
"💡 Recommendation: After 'Click Create DSR,' add: 'A new window opens showing your DSR dashboard. You'll see the title at the top and a 'Share' button in the toolbar.'"

---

### Related Content Navigation
**What it is:** Link prerequisite articles (what users need to know first), next-step articles (what to do after), and admin-side articles (what setup was required).

**When to recommend:**
- No "Before you start" prerequisites section.
- No "Next steps" or related articles at the end.
- Article references a feature (e.g., "custom fields") without linking to its setup guide.
- User workflow spans multiple articles but no navigation between them.

**Example recommendation:**
"💡 Recommendation: Add 'Prerequisites' section: 'Make sure your admin has set up content folders (see [Admin: Set Up Content Folders]).' Add 'Next steps' linking to 'How to Share a DSR with Buyers' and 'How to Review DSR Analytics.'"

---

### Contextual Help
**What it is:** Inline tips and callout boxes that explain why a step matters, what common mistakes are, or what confuses users—placed right where they need it.

**When to recommend:**
- Complex steps or decision points have no explanation.
- Field names or options are jargon-heavy without guidance.
- Common misconceptions aren't addressed ("No, this doesn't auto-save—you must click Save manually").
- Advanced options lack "when to use this" guidance.

**Example recommendation:**
"💡 Recommendation: After 'Select visibility setting,' add tip: 'Private = only you can see this. Internal = your team can see. Public = buyers can see. Most DSRs are Internal during prep, then Public when shared.'"

---

## Part 2: Product Knowledge

### Platform Architecture
[Product Name] operates on **5 pillars**, with **content feeding everything**:

1. **Knowledge** — Content library, battle cards, playbooks, case studies, templates. All searchable via AI assistant.
2. **Learning** — LMS courses, AI roleplays, training paths. Assigned to reps and tracked for completion.
3. **Buyer Engagement** — Digital Sales Rooms (DSRs), content sharing, email tracking, engagement analytics.
4. **AI Intelligence** — AI assistant (search + synthesis across all content), AI recommendations, auto-generated meeting preps, RFP automation.
5. **Rep Success** — Meeting prep workflows, Chrome extension, Slack/Teams apps, call recording insights, activity tracking.

**For recommendations:** Help users understand which pillar a feature belongs to and how it connects to their workflow.

---

### Common User Workflows

#### Meeting Prep Workflow
1. **Entry:** Calendar (Outlook, Gmail, Google Calendar) or Chrome extension
2. **Prep:** View meeting context, AI assistant questions, get AI recommendations
3. **Review:** Read call plan, check namedrops, align on key messages
4. **Call:** Have access to prep during meeting; record if enabled
5. **Post-Call:** Review recording, log activity, update CRM

**For recommendations:** Help users find entry points, understand meeting prep sub-features (AI recommendations, namedrops, call plans).

#### AI assistant Workflow
1. Search for content across knowledge base
2. Review search results with source attribution
3. Ask follow-up questions
4. Evaluate answers for accuracy and relevance
5. Share or export findings with others

**For recommendations:** Highlight content types available (articles, battle cards, playbooks, case studies), explain search modes (agent, document), clarify source attribution.

#### Digital Sales Room (DSR) Workflow
1. **Create:** Select template, customize, add content
2. **Configure:** Set visibility, enable buyer tracking, add collaborators
3. **Share:** Generate link, send to buyers, track engagement
4. **Monitor:** View buyer activity, content views, time spent
5. **Iterate:** Update content based on engagement

**For recommendations:** Clarify entry points, explain sharing options, help users understand analytics.

#### RFP Automation Workflow
1. **Upload:** Paste or upload RFP document
2. **Map:** AI maps RFP questions to content and messaging
3. **Generate:** System creates answer draft
4. **Review:** Edit answers, refine messaging
5. **Export:** Download or send to buyers

**For recommendations:** Show turnaround time, explain review process, help users understand AI confidence levels.

#### Template Hub Workflow
1. Browse or search templates
2. Review template structure and content types
3. Duplicate and customize
4. Use in workflows (DSR, email, content creation)

**For recommendations:** Show which templates are for which use case, explain block types available.

#### Content Library Workflow
1. Organize content into folders/collections
2. Tag and metadata for discoverability
3. Share with team
4. Track views, downloads, engagement
5. Keep updated (versioning)

**For recommendations:** Help users find content, understand metadata, organize effectively.

---

### Entry Points

- **Chrome Extension** — Available in Gmail, Google Calendar, Outlook, LinkedIn. Main entry for meeting prep and content discovery.
- **Slack App** — AI assistant, content search, notifications, quick actions.
- **Microsoft Teams App** — Similar to Slack; AI assistant, meeting context.
- **Web App** — Full platform access; admin console, content library, LMS, reporting.
- **Mobile** — Limited to reading DSRs and meeting preps (no creation or editing on mobile).

**For recommendations:** Clarify which entry points support which workflows and features.

---

### Feature-Specific Callout Suggestions

#### AI assistant
- **Content types table:** Show what content AI assistant can search (articles, battle cards, playbooks, case studies, templates). Note any content types excluded.
- **Mode comparison:** Quick table: Agent mode (summarizes multiple sources) vs. Document mode (returns results from one doc).
- **Prompt examples:** Show how to ask follow-up questions, refine searches, ask for comparisons.
- **Source attribution:** Always explain how to see source documents and why attribution matters.
- **Limitations:** Note: doesn't search CRM data, call transcripts, or external sources; only searches approved [Product Name] content.

#### Meeting Prep
- **Entry point clarity:** Calendar detection (automatic for some calendars, manual entry for others) + Chrome extension fallback.
- **Sub-features breakdown:** Separate sections for AI Recommendations, Namedrops, Call Plans, Recording (if enabled), Post-call activity.
- **Multi-platform differences:** Note which features work on Outlook vs. Gmail vs. native calendar app.
- **Prerequisites:** Must have meetings in calendar; admin must have enabled meeting prep feature.

#### RFP Automation
- **Workflow diagram:** Visual showing upload → map → generate → review → export flow.
- **Turnaround time:** How long AI takes to map and generate (usually < 5 min for <20 questions).
- **Review process:** Explain confidence scores, how to edit answers, when to accept/reject AI-generated content.
- **Limitations:** Works best with well-structured RFPs; unusual formats may need manual mapping.

#### Digital Sales Rooms
- **Sharing options:** Private (only you), Internal (your team), Public (buyers can access).
- **Analytics:** What events are tracked (views, time spent, content interactions).
- **Buyer experience:** Quick explanation of what buyers see and can do (view content, download, contact seller, etc.).
- **Collaboration:** Who can edit, how to add team members, version control.

#### Template Hub
- **Block types table:** What types of content blocks are available (text, images, videos, data tables, forms, etc.).
- **Template categories:** Which templates are for DSRs, emails, presentations, case studies, etc.
- **Customization scope:** What can be changed (text, images, structure) vs. what's locked.

---

## Part 3: When NOT to Recommend

### Don't recommend:
- **Unknown dependencies:** Features or setup you're unsure exists or how it works. Use [MISSING] markers instead.
- **Speculative improvements:** "Maybe users would appreciate…" is not actionable. Recommendations must be grounded in documented gaps.
- **Length bloat:** Recommending additions that would make the article too long or unfocused. Better to link to a separate article.
- **Duplicated framework requirements:** If the article already meets compliance checklist standards, don't recommend the same thing twice.
- **Marketing positioning:** Don't recommend reframing as "revolutionary" or "seamless"—this is content guidance, not marketing.
- **Unreleased features:** Don't recommend callouts for features in development or not yet announced.
- **Beyond scope:** Don't recommend admin or setup tasks in a user-facing article (reference and link instead).
- **Assumed user expertise:** Avoid recommending tips that assume users already know related features deeply.

---

## How to Use This Guide

1. **After writing an article**, review each SaaS practice above. Does the article meet that standard?
2. **If gap found**, draft a `💡 Recommendation:` callout tied to the specific practice and "When to recommend" trigger.
3. **Check Part 2** for product context. Are you asking users to understand architecture, workflows, or features accurately?
4. **Use Part 3** to avoid over-recommending or speculating.
5. **Keep recommendations actionable** — they should be editable tasks, not vague ideas.

---

**Last updated:** 2026-04-09  
**Applies to:** User-facing KB articles (your help center)
