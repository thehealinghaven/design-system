import React from 'react';

export function KickerPill({ children, background = 'var(--gold-deep)', color = 'var(--cream-social)', size = 'md', style }) {
  const dims = size === 'lg'
    ? { fontSize: '22px', letterSpacing: '3px', padding: '13px 24px' }
    : { fontSize: '11px', letterSpacing: '0.18em', padding: '7px 14px' };
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-body)', fontWeight: 700, textTransform: 'uppercase', borderRadius: 'var(--radius-pill)', background, color, ...dims, ...style }}>{children}</span>
  );
}
