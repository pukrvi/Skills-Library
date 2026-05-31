/* =========================================================================
   Slide layouts — data-driven. Each takes props from release-data.js.
   Slides use a 3-row flex: HEADER (wordmark + meta) / BODY (flex:1) / FOOTER.
   ========================================================================= */

// ─── Shared header (wordmark left, optional right slot) ──────────────────
function SlideHeader({ children, onDark }) {
  return (
    <header style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: `${SP.padTop - 30}px ${SP.padX}px 0`,
      flexShrink: 0,
    }}>
      <Wordmark color={onDark ? C.white : C.ink} size={36} whiteOnly={onDark} />
      {children && <div>{children}</div>}
    </header>
  );
}

// ─── Shared footer (confidentiality + page num) ──────────────────────────
function SlideFooter({ index, total, onDark, noNum }) {
  const muted = onDark ? 'rgba(255,255,255,0.7)' : '#9AA0AA';
  const num = onDark ? 'rgba(255,255,255,0.85)' : '#B8BCC5';
  return (
    <footer style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: `0 ${SP.padX}px ${SP.padBottom - 60}px`,
      fontSize: 22, color: muted, letterSpacing: '0.02em',
      fontFeatureSettings: '"tnum" 1',
      flexShrink: 0,
    }}>
      <span>{window.RELEASE?.footerText || 'Product Updates'}</span>
      {!noNum && <span style={{ color: num }}>{String(index).padStart(2,'0')} / {String(total).padStart(2,'0')}</span>}
    </footer>
  );
}

// ─── COVER ────────────────────────────────────────────────────────────────
function CoverSlide({ month, year, tagline, index, total }) {
  return (
    <div className="slide" data-label="Cover" style={{ background: C.white }}>
      {/* Green brand band running down the left */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 14,
        background: `linear-gradient(180deg, ${C.green} 0%, ${C.greenDeep} 100%)`,
        zIndex: 1,
      }} />

      <SlideHeader />

      {/* Center: month + "Product Updates" */}
      <main style={{
        flex: 1, minHeight: 0,
        padding: `0 ${SP.padX}px`,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        position: 'relative', zIndex: 2,
      }}>
        <div style={{
          fontSize: 26, fontWeight: 600, color: C.green,
          letterSpacing: '0.24em', textTransform: 'uppercase', marginBottom: 32,
        }}>
          {tagline || 'Innovation built around your success'}
        </div>
        <div style={{
          fontSize: 180, fontWeight: 700, color: C.ink,
          letterSpacing: '-0.04em', lineHeight: 0.92,
        }}>
          Product<br/>Updates
        </div>
        <div style={{
          fontSize: 58, fontWeight: 400, color: C.inkSoft,
          letterSpacing: '-0.01em', marginTop: 40,
        }}>
          {month} <span style={{ color: C.green, fontWeight: 600 }}>{year}</span>
        </div>
      </main>

      {/* Decorative mark in bottom right */}
      <div style={{ position: 'absolute', right: 120, bottom: 160, opacity: 0.9 }}>
        <BrandMark size={180} color={C.green} />
      </div>

      <SlideFooter index={index} total={total} noNum />
    </div>
  );
}

// ─── OVERVIEW (TOC — grid of section cards) ───────────────────────────────
function OverviewSlide({ sections, tagline, month, year, featuresCount, index, total }) {
  const statsChips = (
    <div style={{ display: 'flex', gap: 14 }}>
      <Chip label="Features" value={featuresCount}
        bg={C.greenSoft} fg={C.greenDeep} dot={C.green} />
      <Chip label="Release" value={`${month} ${year}`}
        bg={C.blueSoft} fg={C.blue} dot={C.blue} />
    </div>
  );
  return (
    <div className="slide" data-label="Overview" style={{ background: C.white }}>
      <SlideHeader>{statsChips}</SlideHeader>

      <main style={{
        flex: 1, minHeight: 0,
        padding: `20px ${SP.padX}px 32px`,
        display: 'flex', flexDirection: 'column',
      }}>
        <Eyebrow color={C.green}>Overview</Eyebrow>
        <div style={{
          fontSize: 72, fontWeight: 700, letterSpacing: '-0.02em',
          lineHeight: 1.05, marginTop: 18, marginBottom: 40, color: C.ink,
          maxWidth: 1350,
        }}>
          {tagline || 'Your Enablement Just Got Smarter'}
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: 24, flex: 1, minHeight: 0,
        }}>
          {sections.slice(0, 4).map((sec, i) => (
            <div key={sec.id} style={{
              background: C.surface,
              border: `1px solid ${C.line}`,
              borderRadius: 16, padding: '28px 32px',
              display: 'flex', flexDirection: 'column',
              minHeight: 0,
            }}>
              <div style={{
                display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
                gap: 16, marginBottom: 16,
              }}>
                <div style={{
                  fontSize: 32, fontWeight: 700, color: C.ink,
                  letterSpacing: '-0.01em', flex: 1, minWidth: 0,
                }}>
                  {sec.title}
                </div>
                <div style={{
                  fontSize: 26, fontWeight: 600, color: C.inkMuted,
                  fontFeatureSettings: '"tnum" 1', letterSpacing: '0.08em',
                  lineHeight: 1, flexShrink: 0,
                }}>
                  0{i+1}
                </div>
              </div>
              <ul style={{
                listStyle: 'none', margin: 0, padding: 0,
                display: 'flex', flexDirection: 'column', gap: 18,
              }}>
                {sec.features.map((f) => (
                  <li key={f.title} style={{
                    fontSize: 24, lineHeight: 1.35,
                    color: C.inkSoft, display: 'flex', gap: 14, alignItems: 'flex-start',
                  }}>
                    <span style={{
                      width: 7, height: 7, borderRadius: '50%',
                      background: C.green, marginTop: 12, flexShrink: 0,
                    }} />
                    <span>{f.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

      <SlideFooter index={index} total={total} />
    </div>
  );
}

// ─── SECTION DIVIDER ──────────────────────────────────────────────────────
function SectionDividerSlide({ number, title, index, total }) {
  return (
    <div className="slide" data-label={`Section — ${title}`} style={{ background: C.surface }}>
      <SlideHeader />

      <main style={{
        flex: 1, minHeight: 0,
        padding: `0 ${SP.padX}px`,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        gap: 32,
      }}>
        <div style={{
          fontSize: 30, fontWeight: 600, color: C.green,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: 20,
        }}>
          <span style={{
            width: 72, height: 72, borderRadius: '50%',
            background: C.green, color: C.white,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 30, fontWeight: 700, letterSpacing: 0,
          }}>{String(number).padStart(2,'0')}</span>
        </div>
        <div style={{
          fontSize: 140, fontWeight: 700, color: C.ink,
          letterSpacing: '-0.03em', lineHeight: 1.0, maxWidth: 1500,
        }}>
          {title}
        </div>
      </main>

      <div style={{ position: 'absolute', right: 110, bottom: 140 }}>
        <BrandMark size={120} color={C.green} />
      </div>

      <SlideFooter index={index} total={total} />
    </div>
  );
}

// ─── FEATURE SLIDE ────────────────────────────────────────────────────────
function FeatureSlide({
  category, title, summary, bullets,
  audience, release, screenshot,
  index, total,
}) {
  const aStyle = audienceStyle(audience);
  const rStyle = releaseStyle(release);
  return (
    <div className="slide" data-label={`Feature — ${title}`} style={{ background: C.white }}>
      <SlideHeader>
        <div style={{ display: 'flex', gap: 14 }}>
          <Chip label="Audience" value={audience} {...aStyle} />
          <Chip label="Release" value={release} {...rStyle} />
        </div>
      </SlideHeader>

      <main style={{
        flex: 1, minHeight: 0,
        padding: `28px ${SP.padX}px 24px`,
        display: 'flex', flexDirection: 'column',
      }}>
        <Eyebrow color={C.green}>{category}</Eyebrow>

        <div style={{
          fontSize: TYPE.title, fontWeight: 700, color: C.ink,
          letterSpacing: '-0.02em', lineHeight: 1.08,
          margin: '20px 0 36px', maxWidth: 1700,
        }}>
          {title}
        </div>

        {/* Body grid — left text, right screenshot */}
        <div style={{
          flex: 1, minHeight: 0,
          display: 'grid', gridTemplateColumns: '1fr 1.35fr', gap: 72,
          alignItems: 'stretch',
        }}>
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 28,
            minWidth: 0, minHeight: 0,
          }}>
            <div style={{
              fontSize: TYPE.bodyLg, fontWeight: 500, lineHeight: 1.4,
              color: C.ink, letterSpacing: '-0.005em',
            }}>
              {summary}
            </div>
            <ul style={{
              listStyle: 'none', margin: 0, padding: 0,
              display: 'flex', flexDirection: 'column', gap: 18,
            }}>
              {bullets.map((b, i) => (
                <li key={i} style={{
                  fontSize: TYPE.body, lineHeight: 1.42, color: C.inkSoft,
                  display: 'flex', gap: 18, alignItems: 'flex-start',
                }}>
                  <span style={{
                    marginTop: 15, width: 10, height: 10, borderRadius: '50%',
                    background: C.green, flexShrink: 0,
                  }} />
                  <span><TextMD text={b} /></span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ minWidth: 0, minHeight: 0 }}>
            <ScreenshotFrame src={screenshot?.src} alt={screenshot?.alt || title} caption={screenshot?.caption} />
          </div>
        </div>
      </main>

      <SlideFooter index={index} total={total} />
    </div>
  );
}

// Render bold between **…** — tiny markdown helper for bullets
function TextMD({ text }) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**')
          ? <strong key={i} style={{ color: C.ink, fontWeight: 700 }}>{p.slice(2, -2)}</strong>
          : <React.Fragment key={i}>{p}</React.Fragment>
      )}
    </>
  );
}

// ─── CLOSING SLIDE ────────────────────────────────────────────────────────
function ClosingSlide({ month, index, total }) {
  return (
    <div className="slide" data-label="Closing" style={{
      background: `linear-gradient(135deg, ${C.greenDeep} 0%, ${C.green} 55%, #26A35A 100%)`,
      color: C.white,
    }}>
      <SlideHeader onDark />

      <main style={{
        flex: 1, minHeight: 0,
        padding: `0 ${SP.padX}px`,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        gap: 36, position: 'relative', zIndex: 2,
      }}>
        <div style={{
          fontSize: 26, fontWeight: 600, color: '#C9F2DB',
          letterSpacing: '0.2em', textTransform: 'uppercase',
        }}>
          That's a wrap on {month}
        </div>
        <div style={{
          fontSize: 132, fontWeight: 700, color: C.white,
          letterSpacing: '-0.03em', lineHeight: 1.0, maxWidth: 1500,
        }}>
          Ready to unlock what's next?
        </div>
        <div style={{
          fontSize: 36, fontWeight: 400, color: '#E5F6EC',
          letterSpacing: '-0.005em', maxWidth: 1100, lineHeight: 1.4,
        }}>
          Talk to your CSM for a deep-dive on these releases — and a preview
          of what's shipping next month.
        </div>
      </main>

      {/* Decorative mark */}
      <div style={{ position: 'absolute', right: 100, bottom: 100, opacity: 0.22 }}>
        <BrandMark size={260} color={C.white} />
      </div>

      <SlideFooter index={index} total={total} onDark />
    </div>
  );
}

Object.assign(window, {
  CoverSlide, OverviewSlide, SectionDividerSlide, FeatureSlide, ClosingSlide,
  SlideHeader, SlideFooter,
});
