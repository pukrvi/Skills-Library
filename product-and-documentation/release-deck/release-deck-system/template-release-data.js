/* =========================================================================
   RELEASE DATA — edit this file each month, then add matching <section>
   elements in template.html (one per feature + one divider per section).

   Overview always renders exactly 4 cards, so keep sections.length ≤ 4.
   ========================================================================= */

window.RELEASE = {
  brandName: 'Your Company',
  footerText: 'Product Updates',
  month: 'Month',           // "March", "April" …
  year: '2026',
  tagline: 'Innovation built around your success',
  overviewHeadline: 'Your Enablement Just Got Smarter',

  sections: [
    {
      id: 'lnc',                          // used to build <section id="s-section-lnc">
      title: 'Learning & Coaching',
      features: [
        {
          id: 'course-analytics',         // <section id="s-f-course-analytics">
          category: 'LMS',                // green eyebrow text
          title: 'Improved Course Analytics',
          summary: 'One-sentence outcome. Why this matters to the user.',
          bullets: [
            '**Feature bullet** with bold lead-in, followed by supporting detail.',
            '**Another bullet** — keep these to ~1 line each for readability.',
            '**Three to five bullets** is the sweet spot.',
          ],
          audience: 'Admin',              // see AUDIENCE_STYLES in slide-components.jsx
          release: 'General',             // see RELEASE_STYLES (General / Beta / Feature-Flag / Early Access / Coming Soon)
          screenshot: {
            src: null,                    // 'assets/screenshots/course-analytics.png' — omit to render the striped placeholder
            alt: 'Course Analytics dashboard',
            caption: 'Coaching → Courses → Analytics',
          },
        },
      ],
    },

    // Add up to 3 more sections here.
  ],
};
