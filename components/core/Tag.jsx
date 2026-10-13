import React from 'react';

const tones = {
  gold:  { background: 'var(--wash-gold)',  color: 'var(--gold-deep)' },
  wood:  { background: 'var(--wash-wood)',  color: 'var(--wood-deep)' },
  water: { background: 'var(--wash-water)', color: 'var(--on-wash-water)' },
  earth: { background: 'var(--wash-earth)', color: 'var(--on-wash-earth)' },
  fire:  { background: 'var(--wash-fire)',  color: 'var(--fire)' },
  solid: { background: 'var(--charcoal)',   color: 'var(--cream-light)' },
};

export function Tag({ children, tone = 'gold', style }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.06em', padding: '6px 13px', borderRadius: 'var(--radius-pill)', ...tones[tone], ...style }}>{children}</span>
  );
}
