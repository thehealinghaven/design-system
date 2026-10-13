import React from 'react';

export function Eyebrow({ children, onDark = false, rule = true, color, style }) {
  const c = color || (onDark ? 'var(--gold-light)' : 'var(--gold-deep)');
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-eyebrow-size)', fontWeight: 500, letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: c, ...style }}>
      {rule && <span style={{ width: '32px', height: '1px', background: 'currentColor', opacity: 0.9 }} />}
      <span>{children}</span>
    </div>
  );
}
