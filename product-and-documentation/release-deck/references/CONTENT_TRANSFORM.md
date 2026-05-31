# Content Transform Reference

Rules and patterns for converting release documentation content into slide-ready material.

## Title Transformation

Convert feature titles from doc format to deck format using these rules:

**Rules**:
1. Remove leading prefixes: "New -", "Bug Fix:", "Enhancement:", etc.
2. Apply title case (capitalize major words)
3. Maximum 60 characters (including spaces)
4. Use noun phrases (not verbs when possible)
5. Remove marketing hyperbole (exclamation marks, superlatives)
6. Be descriptive of the feature outcome, not the underlying technology

**Examples**:

| Doc Format | Deck Format | Rationale |
|-----------|-----------|-----------|
| "New - Advanced Customer Segmentation Engine" | "Advanced Customer Segmentation" | Remove "New -", shorten tech term |
| "Bug Fix: Webhook Timeout Issues Resolved" | "Webhook Reliability Improvements" | Positive framing, outcome focus |
| "Enhancement: Real-Time Data Sync!" | "Real-Time Data Synchronization" | Remove marketing punctuation |
| "API Rate Limiting Controls (for Enterprise)" | "Enterprise API Rate Limiting" | Lead with benefit audience |
| "Custom Report Builder with 50+ Templates" | "Custom Report Builder" | Avoid feature count in title |
| "AI-Powered Automation (Beta)" | "Intelligent Workflow Automation" | Replace "Beta" with user-friendly term |

**Length Check**:
```
"Advanced Customer Segmentation" = 31 chars ✓
"Custom Report Builder with AI and ML" = 38 chars ✓
"Implementation of Machine Learning Model for Predictive Analytics" = 65 chars ✗ (too long)
Shortened: "Predictive Analytics Engine" = 27 chars ✓
```

## Description Condensing

Convert longer feature descriptions from release docs into concise slide descriptions.

**Rules**:
1. Maximum 2-4 sentences (hard limit)
2. Maximum 100 words total
3. Lead with the **benefit** (not how it works)
4. Use **present tense** and active voice
5. Remove "Why" and "What's better" bullet sections
6. No step-by-step instructions or technical jargon
7. One-line per sentence when possible
8. Target audience: VP/Director level understanding (business outcomes)

**Structure**:
```
Sentence 1: What is it + primary benefit (20-25 words)
Sentence 2: How users apply it (20-30 words)
Sentence 3: Business impact/additional benefit (optional, 15-20 words)
Sentence 4: Availability/scope (optional, 10-15 words)
```

**Example Transformation**:

**Original Doc** (165 words):
```
Custom Report Builder with 50+ Pre-built Templates

Overview: [Product Name] now includes a powerful report builder that lets
users create custom reports without coding. You can start from 50+
industry-specific templates covering sales, marketing, and customer
success use cases.

Why It Matters:
- Reps no longer wait for IT teams to create custom reports
- Non-technical users can build reports in minutes, not hours
- Consistent data visualization across teams

What's Better:
- Faster than building from scratch (saves 5-10 hours per quarter per user)
- Templates are pre-configured with best practices
- Drag-and-drop interface requires zero coding knowledge

How It Works:
1. Open Report Builder
2. Choose template or start blank
3. Customize fields and filters
4. Click Export

Audience: All users
```

**Transformed for Slide** (62 words):
```
Create custom sales reports in minutes without coding. Choose from
50+ pre-built templates or start from scratch, then customize fields,
filters, and visualizations with a simple drag-and-drop interface. Save
hours per quarter on reporting tasks, and get consistent data views
across your entire team.
```

**Why This Works**:
- Removes "Why", "What's Better", "How It Works" sections
- Leads with benefit (create reports fast)
- Explains what users do (customize templates, drop-drop interface)
- Mentions business value (save hours, consistent data)
- 62 words, 4 sentences, no jargon
- No step-by-step instructions

## Category Mapping Table

Map from doc product names to deck category labels and section divider titles.

**Standard Mappings**:

| Doc Product Area | Category Label | Divider Title | Notes |
|-----------------|----------------|---------------|-------|
| Account Management | Admin | Account Administration | For managers, admins |
| Sales Pipeline | Reps | Sales Productivity | For sales teams |
| Customer Reporting | Ops | Reporting & Analytics | For data-driven users |
| Integrations/APIs | Integrations | Extended Integrations | Technical, broad applicability |
| Performance/Infrastructure | Platform | Platform Improvements | System-level features |
| Safety/Compliance | Compliance | Security & Compliance | Governance, risk, audit |
| User Interface | User Experience | User Experience Enhancements | Visual, workflow improvements |
| Automation/Workflows | Automation | Intelligent Automation | Rules-based, AI features |
| Messaging/Comms | Engagement | Customer Engagement | Communication tools |

**How to Use**:
1. List all feature categories from release doc
2. Match each to standard category (or define new if unique)
3. Use Label in Overview cards
4. Use Divider Title for Section Divider slides
5. Maintain consistency across all references

## Audience Normalization

Standardize audience terminology to match the `AUDIENCE_STYLES` map in `slide-components.jsx`. Only three values are valid:

| Doc Term | Deck Value | Chip Style |
|----------|-----------|------------|
| Administrators, IT, System admins, Enablement Teams | `Admins` | Blue tint |
| Sales Reps, BDRs, AEs, Learners, Managers, end-users | `Users` | Green soft |
| Features for both admins and users | `All` | Purple tint |

**Rules**:
- Use exactly one of: `Admins`, `Users`, `All` — no other values produce styled chips
- Default to `Users` if unclear
- Use `All` when the feature genuinely applies to both admin and end-user roles

**Examples**:
- Doc says: "For Sales Reps and CSMs" → `Users`
- Doc says: "Admin-only feature" → `Admins`
- Doc says: "All users and admins" → `All`

## Release Type Normalization

Standardize release status to match the `RELEASE_STYLES` map in `slide-components.jsx`. Only these exact string values produce correctly-styled chips:

**Mapping Table**:

| Doc Release Status | Deck Value | Chip Style |
|------------------|-----------|------------|
| GA, General Availability, Production | `General` | Blue soft |
| Feature-flagged, limited rollout | `Feature-Flag` | Amber tint |
| Beta, Pre-release | `Beta` | Yellow tint |
| Early Access, Pilot, Limited Launch | `Early Access` | Purple soft |
| Coming Soon, Preview, Planned | `Coming Soon` | Gray |

**Rules**:
- Always use an exact string from the table above — the chip won't style correctly otherwise
- If doc doesn't specify, assume `"General"`
- `"Early Access"` supersedes all "not quite GA" statuses
- There is no "Enterprise" or "Deprecation" chip — use `"General"` or `"Feature-Flag"` as closest match

## Overview Card Generation

The Overview slide renders a **2×2 grid of exactly 4 section cards**. Each card shows the section title and lists its feature titles.

**Input**: The 4 sections with their features from `release-data.js`

**How it works**: The Overview component automatically renders `feature.title` for each feature in each section. You don't write separate card content — the data drives it.

**What you control**:
1. `overviewHeadline` — the big headline above the grid (72px, max ~8 words)
2. `section.title` — shown as the card header (32px bold)
3. `feature.title` — shown as bullet items within each card (24px)

**Rules for feature titles** (these appear on the overview card AND the feature slide):
1. Keep feature titles concise — they must fit on one line at 24px within the card
2. Use noun phrases: "Improved Course Analytics", not "We Improved Course Analytics"
3. Max ~40 characters for overview readability
4. Avoid technical jargon — these are customer-facing

**Example**:

**Full Feature List for Reporting Category**:
- Custom Report Builder with 50+ Templates
- Real-Time Dashboard Analytics Engine
- Advanced Data Export to 10+ Formats
- Scheduled Report Delivery (Daily/Weekly/Monthly)
- API Access for Custom Integrations

**Overview Card Generation**:
```
**Custom Report Builder**: Create reports in minutes without coding
**Real-Time Dashboards**: Monitor KPIs with instant data updates
**Smart Export**: Send reports to 10+ platforms automatically
**Scheduled Delivery**: Auto-send reports on your schedule
```

**Character Count Check**:
- "Create reports in minutes without coding" = 40 chars ✓
- "Monitor KPIs with instant data updates" = 38 chars ✓
- "Send reports to 10+ platforms automatically" = 43 chars ✓
- "Auto-send reports on your schedule" = 34 chars ✓

All fit within 50 char limit.

## Content Sections to Exclude

These sections from release docs are NOT included on presentation slides:

**Section: Functioning/How It Works**
- Reason: Deck is customer-facing and high-level, not training material
- Where it goes: Separate enablement/training decks
- Impact: Deck stays concise and benefits-focused

**Section: Technical Requirements**
- Reason: Audience is business, not technical
- Where it goes: Admin/deployment guides
- Impact: Simplifies feature description

**Section: Pricing/Tier Information**
- Reason: Separate sales/packaging discussion
- Where it goes: Sales guides, pricing docs
- Impact: Focuses on capability, not commercial

**Section: Known Limitations**
- Reason: Customer-facing deck emphasizes benefits
- Where it goes: Release notes, known issues documents
- Impact: Positive framing

**Section: Internal Engineering Notes**
- Reason: Not customer-relevant
- Where it goes: Engineering documentation
- Impact: Professional, focused content

## Worked Example: Feature Transformation

**Scenario**: Transform 2 complex features from Q1 release doc into deck content.

### Feature 1: Webhook System Enhancement

**Original Doc**:
```
Webhook Real-Time Event Publishing

Overview:
[Product Name] now publishes events to your Webhook in real-time.
Previously only batch processing every 4 hours.

Why It Matters:
- Reduced data freshness from hours to milliseconds
- Third-party systems can react instantly to [Product Name] changes
- Enables real-time sync with other platforms (Salesforce, HubSpot, etc.)

What's Better:
- 200x faster event delivery vs. previous batch model
- Supports 50+ event types (down from 12)
- Automatic retry logic with exponential backoff

How It Works:
1. Create webhook endpoint
2. Register in [Product Name]
3. Events publish in real-time
4. System handles retries automatically

Audience: Developers, Integrations teams
Release: GA (General Availability)
```

**Extraction for Slide**:

- **Category**: Integrations
- **Title**: "Real-Time Webhook Events" (removed "Webhook Real-Time Event Publishing")
- **Description**:
  ```
  Push events to your systems instantly with real-time webhook
  publishing. Sync with Salesforce, HubSpot, and any third-party
  platform automatically, with built-in retry logic ensuring no data
  is lost.
  ```
  (Word count: 38, meets requirements)
- **Audience**: Developer (from mapping: "Developers, Integrations teams")
- **Release Type**: General (from mapping: "GA")

**Overview Card Entry**: "Real-time Webhooks: Instant sync to any third-party system" (57 chars - exceeds 50, revise)

**Revised**: "Real-time Webhooks: Sync any system instantly" (44 chars ✓)

---

### Feature 2: Advanced Segmentation Engine

**Original Doc**:
```
AI-Powered Customer Segmentation (Early Access)

Overview:
Advanced segmentation engine using machine learning to identify
customer groups based on 200+ behavioral and demographic attributes.
Automatically suggest optimal segment thresholds based on your data.

Why It Matters:
- Segment customers in seconds, not days (previously manual process)
- ML identifies hidden patterns human analysts miss
- Automatically calibrated to your data distribution

What's Better:
- 10x faster than manual segmentation
- Discovers 30% more actionable segments
- Requires zero configuration - ML auto-calibrates

How It Works:
1. Load your customer data
2. System runs ML analysis
3. Segments appear automatically
4. Review and refine as needed

Audience: Marketing, Sales leaders, Operators
Release: Early Access (limited beta)
```

**Extraction for Slide**:

- **Category**: Automation (segmentation is a type of intelligent automation)
- **Title**: "Intelligent Customer Segmentation" (removed "AI-Powered", simplified)
- **Description**:
  ```
  Automatically discover high-value customer groups using machine
  learning. The system analyzes 200+ behavioral attributes and suggests
  optimal segments in seconds—no manual configuration needed.
  ```
  (Word count: 36, meets requirements)
- **Audience**: User (maps to "Marketing, Sales leaders, Operators" → primary business audience)
- **Release Type**: Early Access (from mapping: "Early Access (limited beta)")

**Overview Card Entry**: "Smart Segmentation: Auto-discover high-value customer groups" (58 chars - revise)

**Revised**: "Smart Segmentation: Discover customer groups instantly" (52 chars - still exceeds 50)

**Final Revision**: "Smart Segmentation: Discover valuable customer groups" (49 chars ✓)

---

## Summary Checklist

When transforming release doc content:

- [ ] Extract feature title; remove prefixes and marketing fluff
- [ ] Ensure title is ≤60 characters
- [ ] Extract description; condense to 2-4 sentences, max 100 words
- [ ] Lead with benefit, not mechanics
- [ ] Remove "Why", "What's Better", "How It Works" sections
- [ ] Use present tense, active voice
- [ ] Map product area to standard Category
- [ ] Normalize audience to controlled vocabulary
- [ ] Normalize release type to controlled vocabulary
- [ ] Generate overview card text (≤50 chars per feature)
- [ ] Bold feature name in overview card
- [ ] Verify no technical jargon or step-by-step instructions
- [ ] Cross-check against slide sequencing plan
- [ ] Obtain stakeholder review before building slides
