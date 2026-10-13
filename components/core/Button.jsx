import React from 'react';

const base = {
  fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600,
  letterSpacing: 'var(--tracking-button)', textTransform: 'uppercase',
  border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px',
  transition: 'all var(--dur-base) var(--ease-brand)',
};

export function Button({ children, variant = 'primary', href, onClick, disabled = false, type = 'button', style, ...rest }) {
  const [hot, setHot] = React.useState(false);
  let look;
  if (variant === 'primary') {
    look = { padding: '13px 28px', borderRadius: 'var(--radius-pill)', background: hot ? 'var(--gold-deep)' : 'var(--gold)', color: 'var(--cream-light)', boxShadow: hot ? 'var(--shadow-button-hover)' : 'var(--shadow-button)', transform: hot ? 'translateY(-1px)' : 'none' };
  } else if (variant === 'dark') {
    look = { padding: '13px 28px', borderRadius: 'var(--radius-pill)', background: hot ? 'var(--gold-deep)' : 'var(--charcoal)', color: 'var(--cream-light)', transform: hot ? 'translateY(-1px)' : 'none' };
  } else if (variant === 'underline') {
    look = { padding: '6px 0', background: 'transparent', color: hot ? 'var(--gold-deep)' : 'var(--charcoal)', borderBottom: `1px solid ${hot ? 'var(--gold-deep)' : 'var(--gold)'}`, borderRadius: 0 };
  } else {
    look = { padding: '6px 0', background: 'transparent', color: hot ? 'var(--fire)' : 'var(--gold-deep)', borderRadius: 0 };
  }
  const s = { ...base, ...look, ...(disabled ? { opacity: 0.45, cursor: 'not-allowed', boxShadow: 'none', transform: 'none' } : null), ...style };
  const on = disabled ? {} : { onMouseEnter: () => setHot(true), onMouseLeave: () => setHot(false) };
  if (href && !disabled) return <a href={href} style={s} {...on} {...rest}>{children}</a>;
  return <button type={type} onClick={disabled ? undefined : onClick} disabled={disabled} style={s} {...on} {...rest}>{children}</button>;
}
