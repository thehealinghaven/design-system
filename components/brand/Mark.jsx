import React from 'react';

/* Geometry copied verbatim from the practice's Mark.dc.html — never redraw or recolor
   outside the two approved colors (gold on light, gold-light on dark). */
export function Mark({ size = 56, color = 'var(--gold)', title = 'The Healing Haven mark', style, className }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} role="img" aria-label={title}
      className={className} style={{ display: 'block', flexShrink: 0, ...style }}>
      <g transform="translate(100,100)">
        <circle cx="0" cy="0" r="85" fill="none" stroke={color} strokeWidth="5.7" />
        <path d="M -34 48.2 C -42.5 14.2, -21.3 -19.8, 11.3 -25.5 C 43.9 -31.2, 63.8 -4.3, 56.7 25.5 C 51 48.2, 28.3 58.1, 8.5 46.8 C -9.9 36.8, -5.7 12.8, 12.8 9.9 C 26.9 8.5, 34 19.8, 28.3 32.6"
          fill="none" stroke={color} strokeWidth="9.9" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="0" cy="-65.2" r="5.4" fill={color} />
        <circle cx="63.8" cy="-19.8" r="5.4" fill={color} />
        <circle cx="39.7" cy="55.3" r="5.4" fill={color} />
        <circle cx="-39.7" cy="55.3" r="5.4" fill={color} />
        <circle cx="-63.8" cy="-19.8" r="5.4" fill={color} />
      </g>
    </svg>
  );
}
