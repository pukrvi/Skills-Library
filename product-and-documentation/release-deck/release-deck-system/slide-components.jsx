/* =========================================================================
   Shared slide components — import once per deck.
   All slides are authored at 1920×1080. Uses design tokens from
   deck-tokens.css. No styles object (name collisions); inline styles only.
   ========================================================================= */

const TYPE = {
  title: 64,       // feature slide titles
  subtitle: 38,    // section titles, sub-heads (maps to 68pt PPTX)
  body: 30,        // body copy
  bodyLg: 34,      // emphasized body
  small: 24,       // captions / meta
  pill: 22,        // chip text
  eyebrow: 22,     // category eyebrow
  coverLg: 96,     // cover month (maps to 80pt PPTX)
};

const SP = {
  padX: 100,
  padTop: 90,
  padBottom: 100,   // reserves footer breathing room
  titleGap: 44,
  itemGap: 28,
  lineGap: 16,
};

const C = {
  green: '#0E8744',
  greenDeep: '#0A5F30',
  greenSoft: '#E8F6EE',
  greenChip: '#1FB363',
  ink: '#1A1F26',
  inkSoft: '#4A5260',
  inkMuted: '#8A8F98',
  line: '#E6E3DE',
  surface: '#F7F5F2',
  white: '#FFFFFF',
  blue: '#2D81FF',
  blueSoft: '#EAF2FF',
  purple: '#8F00FF',
  purpleSoft: '#F3E9FF',
  amber: '#DE7F10',
  amberSoft: '#FFF3E0',
};

// Map release-type -> chip color
const RELEASE_STYLES = {
  'General':     { bg: C.blueSoft,   fg: C.blue,      dot: C.blue },
  'Feature-Flag':{ bg: '#FFF6E0',    fg: '#B5760A',   dot: '#CF842B' },
  'Beta':        { bg: '#FFF4C6',    fg: '#8A6D00',   dot: '#CF842B' },
  'Early Access':{ bg: C.purpleSoft, fg: C.purple,    dot: C.purple },
  'Coming Soon': { bg: '#F0F0F0',    fg: '#595959',   dot: '#8C8C8C' },
};

// Map audience -> chip color (3 valid labels only)
const AUDIENCE_STYLES = {
  'Admins':  { bg: '#EFF4FB', fg: '#1565C0', dot: '#1565C0' },
  'Users':   { bg: C.greenSoft, fg: C.greenDeep, dot: C.green },
  'All':     { bg: '#F2EEF8', fg: C.purple, dot: C.purple },
};
const audienceStyle = (a) => AUDIENCE_STYLES[a] || { bg: '#F0F0F0', fg: '#262626', dot: '#8C8C8C' };
const releaseStyle  = (r) => RELEASE_STYLES[r]  || { bg: '#F0F0F0', fg: '#262626', dot: '#8C8C8C' };

// ─── Chip ─────────────────────────────────────────────────────────────────
function Chip({ label, value, bg, fg, dot, size = 'md' }) {
  const h = size === 'lg' ? 52 : 44;
  const px = size === 'lg' ? 22 : 18;
  const fs = size === 'lg' ? TYPE.pill + 4 : TYPE.pill + 2;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      height: h, padding: `0 ${px}px`,
      background: bg, color: fg,
      borderRadius: 999, fontSize: fs, fontWeight: 500,
      lineHeight: 1, letterSpacing: '-0.005em',
      border: `1px solid ${fg}22`,
      whiteSpace: 'nowrap',
    }}>
      {dot && <span style={{ width: 8, height: 8, borderRadius: '50%', background: dot }} />}
      {label && <span style={{ opacity: 0.7, fontWeight: 500 }}>{label}</span>}
      <span style={{ fontWeight: 600 }}>{value}</span>
    </span>
  );
}

// ─── Deck footer (bottom confidentiality + page number) ──────────────────
function DeckFooter({ index, total, noNum }) {
  return (
    <div style={{
      position: 'absolute', left: SP.padX, right: SP.padX, bottom: 42,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      fontSize: 24, color: '#9AA0AA', letterSpacing: '0.02em',
      fontFeatureSettings: '"tnum" 1',
    }}>
      <span>{window.RELEASE?.footerText || 'Product Updates'}</span>
      {!noNum && <span style={{ color: '#B8BCC5' }}>{String(index).padStart(2,'0')} / {String(total).padStart(2,'0')}</span>}
    </div>
  );
}

// ─── Eyebrow (small category label above title) ───────────────────────────
function Eyebrow({ children, color = C.green }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 12,
      fontSize: 26, fontWeight: 600, color,
      letterSpacing: '0.12em', textTransform: 'uppercase',
    }}>
      <span style={{ width: 28, height: 2, background: color, borderRadius: 2 }} />
      {children}
    </div>
  );
}

// ─── Brand mark placeholder ───────────────────────────────────────────────
function BrandMark({ size = 40, color = C.green }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="3" y="3" width="26" height="26" rx="8" fill={color} opacity="0.14" />
      <path d="M16 6L27 16L16 26L5 16L16 6Z" fill={color} />
      <circle cx="16" cy="16" r="4.5" fill="#fff" opacity="0.92" />
    </svg>
  );
}

// Backwards-compatible alias for existing callsites
const BrandSmile = BrandMark;

// Wordmark — generic placeholder; override with window.RELEASE.brandName.
function Wordmark({ color = C.ink, size = 40, whiteOnly = false }) {
  const brandName = window.RELEASE?.brandName || 'Your Company';
  const fill = whiteOnly ? '#FFFFFF' : color;
  return (
    <span aria-label={brandName} style={{
      display: 'inline-flex', alignItems: 'center', gap: size * 0.28,
      color: fill, fontSize: Math.max(18, size * 0.62), fontWeight: 700,
      lineHeight: 1, letterSpacing: '0',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif',
      whiteSpace: 'nowrap',
    }}>
      <BrandMark size={size * 0.72} color={whiteOnly ? '#FFFFFF' : C.green} />
      <span>{brandName}</span>
    </span>
  );
}

// ─── Screenshot placeholder (used when real image missing) ────────────────
function ScreenshotFrame({ src, alt, caption, children }) {
  return (
    <div style={{
      background: C.white, border: `1px solid ${C.line}`, borderRadius: 10,
      boxShadow: '0 1px 2px rgba(0,0,0,.04), 0 18px 48px rgba(20,25,40,.07)',
      overflow: 'hidden', width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column',
    }}>
      {src ? (
        <img src={src} alt={alt || ''} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left' }}/>
      ) : children ? children : (
        <div style={{
          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: `repeating-linear-gradient(135deg, ${C.surface} 0 12px, #F2EFEA 12px 24px)`,
          color: C.inkMuted, fontSize: TYPE.body, fontWeight: 500,
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: TYPE.subtitle - 8, fontWeight: 600, marginBottom: 8 }}>{alt || 'Screenshot'}</div>
            {caption && <div style={{ fontSize: TYPE.small, color: C.inkMuted }}>{caption}</div>}
          </div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, {
  TYPE, SP, C, RELEASE_STYLES, AUDIENCE_STYLES,
  audienceStyle, releaseStyle,
  Chip, DeckFooter, Eyebrow, BrandSmile, BrandMark, Wordmark, ScreenshotFrame,
});
