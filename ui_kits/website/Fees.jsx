const { Eyebrow, Button, AsideCard, KickerPill } = window.TheHealingHavenDesignSystem_2c8068;

const NOTES = [
  'Members save $66 every session.',
  'Free 15-minute consult before you commit.',
  'Superbills provided for out-of-network claims.',
];

function Tier({ name, price, unit = 'per session', dark = false, note }) {
  return (
    <div style={{ flex: 1, background: dark ? 'var(--charcoal)' : 'var(--cream-light)', border: dark ? 'none' : '1px solid var(--border-hairline)', borderRadius: 'var(--radius)', padding: '40px 36px' }}>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 700, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: dark ? 'var(--gold-light)' : 'var(--handle)', marginBottom: '18px' }}>{name}</div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '68px', lineHeight: 0.9, color: dark ? 'var(--cream-social)' : 'var(--near-black)', fontVariationSettings: "'SOFT' 40" }}>{price}</div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-md)', color: dark ? 'rgba(249,245,236,0.75)' : 'var(--charcoal-soft)', marginTop: '12px' }}>{unit}</div>
      {note && <div style={{ marginTop: '20px', fontSize: 'var(--text-body-sm)', lineHeight: 1.6, color: dark ? 'rgba(249,245,236,0.7)' : 'var(--stone)' }}>{note}</div>}
    </div>
  );
}

function Fees({ go }) {
  return (
    <div>
      <Section eyebrow="Investment" title="Simple, honest " italicTail="pricing" lede="No packages, no tiers of care, no upsell. Two numbers, and a superbill if you want to claim out-of-network.">
        <div style={{ display: 'flex', gap: 'var(--grid-gap)', marginBottom: 'var(--space-9)', flexWrap: 'wrap' }}>
          <Tier name="Standard" price="$189" note="Fifty-minute session, in person or online." />
          <Tier name="Member" price="$123" dark note="Membership includes weekly sessions and between-session messaging." />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: 'var(--space-9)' }}>
          {NOTES.map((n) => (
            <div key={n} style={{ display: 'flex', alignItems: 'baseline', gap: '16px', fontSize: 'var(--text-body-lg)', lineHeight: 1.4, color: 'var(--charcoal-soft)' }}>
              <span style={{ color: 'var(--gold-deep)', fontWeight: 700 }}>&mdash;</span><span>{n}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--grid-gap)' }}>
          <AsideCard label="Fine print" title="Out of network, on purpose" accent="gold">
            I'm not paneled with insurance so sessions stay unhurried and unreported. I provide a superbill each month; many plans reimburse part of it.
          </AsideCard>
          <AsideCard label="If money is the barrier" title="Say so on the consult" accent="fire">
            A small number of reduced-fee spots open each season. Ask — it isn't awkward and you won't be treated differently.
          </AsideCard>
        </div>
      </Section>
      <ConsultBand go={go} />
    </div>
  );
}

Object.assign(window, { Fees });
