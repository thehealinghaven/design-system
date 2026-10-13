import React from 'react';

export function QuotePull({ children, emphasis, caption, tone = 'dark', size = 28, style }) {
  const dark = tone === 'dark';
  return (
    <div style={{ background: dark ? 'var(--charcoal)' : 'var(--cream-light)', border: dark ? 'none' : '1px solid var(--border-hairline)', borderRadius: 'var(--radius)', padding: '40px 34px', display: 'flex', flexDirection: 'column', justifyContent: 'center', ...style }}>
      <blockquote style={{ margin: 0, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, fontSize: size, lineHeight: 1.15, color: dark ? 'var(--cream)' : 'var(--charcoal)', fontVariationSettings: "'SOFT' 100" }}>
        {children}
        {emphasis && <em style={{ fontStyle: 'normal', color: dark ? 'var(--fire-soft)' : 'var(--fire)' }}>{emphasis}</em>}
      </blockquote>
      {caption && <figcaption style={{ marginTop: '18px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-eyebrow-size)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', fontWeight: 500, color: dark ? 'var(--gold-light)' : 'var(--gold-deep)' }}>{caption}</figcaption>}
    </div>
  );
}
