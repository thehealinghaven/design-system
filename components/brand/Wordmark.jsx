import React from 'react';
import { Mark } from './Mark.jsx';

export function Wordmark({ name = 'The Healing Haven', line = 'Helen DeLovely, LCSW · SLC', onDark = false, size = 20, showMark = true, markSize = 44, style }) {
  const gold = onDark ? 'var(--gold-light)' : 'var(--gold-deep)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '18px', ...style }}>
      {showMark && <Mark size={markSize} color={onDark ? 'var(--gold-light)' : 'var(--gold)'} />}
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: size, color: onDark ? 'var(--cream)' : 'var(--charcoal)', fontVariationSettings: "'SOFT' 100", lineHeight: 1.1 }}>{name}</div>
        {line && <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-eyebrow-size)', letterSpacing: 'var(--tracking-caption)', textTransform: 'uppercase', color: gold, marginTop: '4px' }}>{line}</div>}
      </div>
    </div>
  );
}
