import React from 'react';

export function Card({ children, index, title, tone = 'light', interactive = false, style }) {
  const [hot, setHot] = React.useState(false);
  const dark = tone === 'dark';
  return (
    <div
      onMouseEnter={interactive ? () => setHot(true) : undefined}
      onMouseLeave={interactive ? () => setHot(false) : undefined}
      style={{
        background: dark ? 'var(--charcoal)' : 'var(--cream-light)',
        border: dark ? 'none' : `1px solid ${hot ? 'var(--gold-light)' : 'var(--border-hairline)'}`,
        borderRadius: 'var(--radius)', padding: '34px 30px',
        transform: hot ? 'translateY(-2px)' : 'none',
        boxShadow: hot ? 'var(--shadow-card-hover)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-brand), box-shadow var(--dur-base) var(--ease-brand), border-color var(--dur-base) var(--ease-brand)',
        ...style,
      }}>
      {index && <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '13px', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: dark ? 'var(--gold-light)' : 'var(--gold-deep)', marginBottom: '14px' }}>{index}</div>}
      {title && <h3 style={{ margin: '0 0 10px', fontFamily: 'var(--font-display)', fontSize: 'var(--text-heading)', fontWeight: 400, color: dark ? 'var(--cream)' : 'var(--charcoal)' }}>{title}</h3>}
      {children && <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-md)', lineHeight: 'var(--leading-body)', color: dark ? 'var(--text-on-dark-muted)' : 'var(--charcoal-soft)' }}>{children}</div>}
    </div>
  );
}
