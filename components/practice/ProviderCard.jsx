import React from 'react';
import { MemberBadge } from './MemberBadge.jsx';

/* One provider, one card. The card has to hold two truths at once: this person owns
   their practice (their name leads, their element accent, their own voice) and they
   stand inside The Healing Haven (the badge, the house radius, the petal frame). */

const elements = {
  metal: { ink: 'var(--provider-metal)', wash: 'var(--wash-gold)' },
  wood:  { ink: 'var(--provider-wood)',  wash: 'var(--wash-wood)' },
  water: { ink: 'var(--provider-water)', wash: 'var(--wash-water)' },
  earth: { ink: 'var(--provider-earth)', wash: 'var(--wash-earth)' },
  fire:  { ink: 'var(--provider-fire)',  wash: 'var(--wash-fire)' },
};

export function ProviderCard({
  name, credential, role, location, photo, element = 'metal',
  specialties = [], acceptingNew, children, action, badge = true,
  interactive = false, style,
}) {
  const [hot, setHot] = React.useState(false);
  const el = elements[element] || elements.metal;
  return (
    <article
      onMouseEnter={interactive ? () => setHot(true) : undefined}
      onMouseLeave={interactive ? () => setHot(false) : undefined}
      style={{
        display: 'flex', flexDirection: 'column', gap: '18px',
        background: 'var(--cream-light)',
        border: `1px solid ${hot ? 'var(--gold-light)' : 'var(--border-hairline)'}`,
        borderRadius: 'var(--radius)', padding: '30px',
        transform: hot ? 'translateY(-2px)' : 'none',
        boxShadow: hot ? 'var(--shadow-card-hover)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-brand), box-shadow var(--dur-base) var(--ease-brand), border-color var(--dur-base) var(--ease-brand)',
        ...style,
      }}>
      <header style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        {photo && (
          <div style={{ position: 'relative', width: '104px', height: '124px', flexShrink: 0, overflow: 'hidden', borderRadius: 'var(--radius-petal)', background: 'var(--cream-deep)', boxShadow: 'var(--shadow-lift)' }}>
            <img src={photo} alt={name} style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
            <span aria-hidden="true" style={{ position: 'absolute', inset: '9px', border: '1px solid rgba(245,238,224,0.42)', borderRadius: 'var(--radius-petal-inner)' }} />
          </div>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', minWidth: 0 }}>
          <span aria-hidden="true" style={{ width: '28px', height: '2px', background: el.ink, marginBottom: '3px' }} />
          <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontVariationSettings: 'var(--soft-restrained)', fontWeight: 'var(--display-weight)', fontSize: 'var(--text-heading)', lineHeight: 'var(--leading-heading)', letterSpacing: 'var(--tracking-title)', color: 'var(--charcoal)' }}>
            {name}{credential && <span style={{ fontSize: '15px', color: 'var(--stone)' }}>, {credential}</span>}
          </h3>
          {role && <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-micro)', fontWeight: 600, letterSpacing: 'var(--tracking-caption)', textTransform: 'uppercase', color: el.ink }}>{role}</div>}
          {(location || acceptingNew !== undefined) && (
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-meta)', color: 'var(--handle)' }}>
              {location}
              {location && acceptingNew !== undefined && ' · '}
              {acceptingNew !== undefined && (acceptingNew ? 'Accepting new clients' : 'Waitlist')}
            </div>
          )}
        </div>
      </header>

      {children && <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-md)', lineHeight: 'var(--leading-body)', color: 'var(--charcoal-soft)', textWrap: 'pretty' }}>{children}</p>}

      {specialties.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {specialties.map((s) => (
            <span key={s} style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.06em', padding: '6px 13px', borderRadius: 'var(--radius-pill)', background: el.wash, color: el.ink }}>{s}</span>
          ))}
        </div>
      )}

      {(badge || action) && (
        <footer style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '14px', marginTop: 'auto', paddingTop: '18px', borderTop: 'var(--hairline)' }}>
          {badge && <MemberBadgeInline />}
          {action}
        </footer>
      )}
    </article>
  );
}

/* Delegates to the real badge so there is only ever one copy of the mark geometry.
   No location: the card header already prints the city, and the footer row must stay
   on one line so the endorsement never outweighs the provider's own CTA. */
function MemberBadgeInline() {
  return <MemberBadge variant="inline" size="sm" />;
}
