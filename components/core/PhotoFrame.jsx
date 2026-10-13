import React from 'react';

export function PhotoFrame({ src, alt = '', caption, height = 460, keyline = true, style }) {
  return (
    <figure style={{ margin: 0, position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-petal)', border: 'var(--hairline-gold)', background: 'var(--cream-deep)', boxShadow: 'var(--shadow-photo)', ...style }}>
      {keyline && <span aria-hidden="true" style={{ position: 'absolute', inset: '18px', border: '1px solid rgba(245,238,224,0.42)', borderRadius: 'var(--radius-petal-inner)', zIndex: 1, pointerEvents: 'none' }} />}
      <img src={src} alt={alt} style={{ display: 'block', width: '100%', height, objectFit: 'cover', objectPosition: 'center' }} />
      {caption && <figcaption style={{ position: 'absolute', left: '22px', right: '22px', bottom: '22px', zIndex: 2, background: 'var(--scrim-charcoal)', color: 'var(--cream-light)', padding: '12px 14px', border: '1px solid rgba(221,201,163,0.28)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-micro)', letterSpacing: '0.24em', textTransform: 'uppercase', fontWeight: 600 }}>{caption}</figcaption>}
    </figure>
  );
}
