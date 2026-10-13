import React from 'react';

/* The endorsement badge. This is the only asset that lets an independently-owned
   provider practice market as itself while transferring trust to The Healing Haven.
   Locked: the two mark colors, the wording, and the tracked-caps eyebrow treatment.
   Configurable: variant, size, and the optional location line. */

const WORDING = 'Member practice of';

export function MemberBadge({ variant = 'lockup', tone = 'light', location, size = 'md', style }) {
  const dark = tone === 'dark';
  const ink = dark ? 'var(--cream)' : 'var(--charcoal)';
  const accent = dark ? 'var(--gold-light)' : 'var(--gold-deep)';
  const markColor = dark ? 'var(--gold-light)' : 'var(--gold)';
  const hairline = dark ? 'var(--border-on-dark)' : 'var(--border-gold)';

  if (variant === 'inline') {
    /* `sm` shortens the wording for dense in-card contexts where the surrounding page
       has already established the brand. Full wording everywhere else. */
    const short = size === 'sm';
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-micro)', fontWeight: 600, letterSpacing: 'var(--tracking-caption)', textTransform: 'uppercase', color: accent, whiteSpace: 'nowrap', ...style }}>
        <MarkGlyph size={short ? 14 : 15} color={markColor} />
        <span>{short ? 'Member practice' : `${WORDING} The Healing Haven`}{location ? ` · ${location}` : ''}</span>
      </span>
    );
  }

  if (variant === 'seal') {
    const d = size === 'sm' ? 92 : size === 'lg' ? 148 : 118;
    return (
      <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: `${d * 0.055}px`, width: d, height: d, borderRadius: '50%', border: `1px solid ${hairline}`, background: dark ? 'rgba(245,238,224,0.06)' : 'var(--cream-light)', textAlign: 'center', ...style }}>
        <MarkGlyph size={d * 0.3} color={markColor} />
        <span aria-hidden="true" style={{ width: d * 0.22, height: '1px', background: accent, opacity: 0.55 }} />
        <span style={{ fontFamily: 'var(--font-body)', fontSize: `${Math.max(7, d * 0.068)}px`, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: accent, lineHeight: 1.5, maxWidth: d * 0.74 }}>
          Member practice
        </span>
        {location && <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: `${Math.max(8, d * 0.075)}px`, color: dark ? 'var(--text-on-dark-muted)' : 'var(--stone)' }}>{location}</span>}
      </span>
    );
  }

  const markSize = size === 'sm' ? 30 : size === 'lg' ? 52 : 40;
  const nameSize = size === 'sm' ? 15 : size === 'lg' ? 26 : 19;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: `${markSize * 0.35}px`, ...style }}>
      <MarkGlyph size={markSize} color={markColor} />
      <span style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-micro)', fontWeight: 600, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: accent }}>{WORDING}</span>
        <span style={{ fontFamily: 'var(--font-display)', fontVariationSettings: 'var(--soft-restrained)', fontWeight: 'var(--display-weight)', fontSize: `${nameSize}px`, lineHeight: 1, letterSpacing: 'var(--tracking-title)', color: ink }}>
          The Healing Haven{location ? <span style={{ color: dark ? 'var(--text-on-dark-muted)' : 'var(--stone)' }}> {location}</span> : null}
        </span>
      </span>
    </span>
  );
}

/* The mark, inlined so the badge is a single self-contained asset providers can
   drop into their own site or letterhead without pulling the whole system. */
function MarkGlyph({ size, color }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} role="img" aria-label="The Healing Haven mark" style={{ display: 'block', flexShrink: 0 }}>
      <g transform="translate(100,100)">
        <circle cx="0" cy="0" r="85" fill="none" stroke={color} strokeWidth="5.7" />
        <path d="M -34 48.2 C -42.5 14.2, -21.3 -19.8, 11.3 -25.5 C 43.9 -31.2, 63.8 -4.3, 56.7 25.5 C 51 48.2, 28.3 58.1, 8.5 46.8 C -9.9 36.8, -5.7 12.8, 12.8 9.9 C 26.9 8.5, 34 19.8, 28.3 32.6" fill="none" stroke={color} strokeWidth="9.9" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="0" cy="-65.2" r="5.4" fill={color} />
        <circle cx="63.8" cy="-19.8" r="5.4" fill={color} />
        <circle cx="39.7" cy="55.3" r="5.4" fill={color} />
        <circle cx="-39.7" cy="55.3" r="5.4" fill={color} />
        <circle cx="-63.8" cy="-19.8" r="5.4" fill={color} />
      </g>
    </svg>
  );
}
