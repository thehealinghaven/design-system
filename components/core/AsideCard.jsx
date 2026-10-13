import React from 'react';

const rules = { gold: 'var(--gold)', fire: 'var(--fire)', wood: 'var(--wood)' };

export function AsideCard({ children, label, title, accent = 'gold', style }) {
  return (
    <aside style={{ background: 'var(--cream)', border: '1px solid var(--border-hairline)', borderLeft: `var(--rule-accent) solid ${rules[accent]}`, borderRadius: 'var(--radius)', padding: 'var(--card-pad-sm)', ...style }}>
      {label && <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-micro)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', fontWeight: 600, color: rules[accent] === 'var(--gold)' ? 'var(--gold-deep)' : rules[accent], marginBottom: '8px' }}>{label}</div>}
      {title && <h4 style={{ margin: '0 0 12px', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'var(--text-heading)', fontWeight: 400, color: 'var(--charcoal)' }}>{title}</h4>}
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', lineHeight: 'var(--leading-body)', color: 'var(--charcoal-soft)' }}>{children}</div>
    </aside>
  );
}
