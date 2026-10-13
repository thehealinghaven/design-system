const { Mark, Wordmark, Eyebrow, Button, Tag, Card, AsideCard } = window.TheHealingHavenDesignSystem_2c8068;

const NAVI = ['Sessions', 'Superbills', 'Notes to Helen', 'Practices', 'Account'];

const SESSIONS = [
  ['Thu 13 Aug', '10:00 am', 'In person · Suite 1521', 'Upcoming'],
  ['Thu 6 Aug', '10:00 am', 'Online', 'Attended'],
  ['Thu 30 Jul', '10:00 am', 'In person · Suite 1521', 'Attended'],
];

const BILLS = [['July 2026', '$492', 'Ready'], ['June 2026', '$492', 'Sent'], ['May 2026', '$369', 'Sent']];

function Dashboard({ onOut }) {
  const [tab, setTab] = React.useState('Sessions');
  return (
    <div style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '260px 1fr', background: 'var(--cream)' }}>
      <aside style={{ background: 'var(--charcoal)', padding: '30px 24px', display: 'flex', flexDirection: 'column', gap: '34px' }}>
        <Wordmark onDark size={18} markSize={36} line="Member portal" />
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {NAVI.map((n) => (
            <button key={n} onClick={() => setTab(n)} style={{ textAlign: 'left', cursor: 'pointer', border: 'none', borderRadius: 'var(--radius)', padding: '11px 14px', background: tab === n ? 'rgba(245,238,224,0.08)' : 'transparent', color: tab === n ? 'var(--gold-light)' : 'rgba(245,238,224,0.7)', fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, letterSpacing: 'var(--tracking-button)', textTransform: 'uppercase', transition: 'all var(--dur-base) var(--ease-brand)' }}>{n}</button>
          ))}
        </nav>
        <div style={{ marginTop: 'auto' }}><Button variant="ghost" onClick={onOut} style={{ color: 'var(--gold-light)' }}>Sign out</Button></div>
      </aside>
      <main style={{ padding: '48px 44px', display: 'flex', flexDirection: 'column', gap: '34px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '30px', flexWrap: 'wrap' }}>
          <div>
            <Eyebrow>{tab}</Eyebrow>
            <h1 style={{ margin: '18px 0 0', fontFamily: 'var(--font-display)', fontSize: '40px', fontWeight: 350, lineHeight: 1.05, color: 'var(--charcoal)', fontVariationSettings: "'SOFT' 50" }}>Good morning, <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--gold-deep)', fontVariationSettings: "'SOFT' 100" }}>Sam</em></h1>
          </div>
          <Button variant="primary">Request a change →</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.5fr) minmax(0,340px)', gap: 'var(--grid-gap)', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--grid-gap-sm)' }}>
            <div style={{ background: 'var(--surface-functional)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
              <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border-hairline)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-micro)', fontWeight: 600, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--gold-deep)' }}>Your sessions</div>
              {SESSIONS.map(([d, t, where, state]) => (
                <div key={d} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '18px 24px', borderBottom: '1px solid rgba(236,226,206,0.7)' }}>
                  <span style={{ width: '110px', fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--charcoal)' }}>{d}</span>
                  <span style={{ width: '80px', fontSize: 'var(--text-body-sm)', color: 'var(--charcoal-soft)' }}>{t}</span>
                  <span style={{ flex: 1, fontSize: 'var(--text-body-sm)', color: 'var(--stone)' }}>{where}</span>
                  <Tag tone={state === 'Upcoming' ? 'gold' : 'wood'}>{state}</Tag>
                </div>
              ))}
            </div>
            <div style={{ background: 'var(--surface-functional)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
              <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border-hairline)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-micro)', fontWeight: 600, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--gold-deep)' }}>Superbills</div>
              {BILLS.map(([m, amt, state]) => (
                <div key={m} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '16px 24px', borderBottom: '1px solid rgba(236,226,206,0.7)' }}>
                  <span style={{ flex: 1, fontSize: 'var(--text-body-md)', color: 'var(--charcoal)' }}>{m}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: 'var(--charcoal)' }}>{amt}</span>
                  <Tag tone={state === 'Ready' ? 'gold' : 'wood'}>{state}</Tag>
                  <Button variant="underline">Download</Button>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--grid-gap-sm)' }}>
            <MembershipCard name="Sam Ortega" member="Member since 2024" rate="$123" />
            <AsideCard label="Between sessions" title="Two-minute grounding" accent="wood">
              Grow · hold · shrink · hold. Four rounds, eyes open or closed. It doesn't have to work to be worth doing.
            </AsideCard>
            <Card index="Note" title="From Helen">Brought the singing bowl back into the room this week — we can use it Thursday if you want to.</Card>
          </div>
        </div>
      </main>
    </div>
  );
}

Object.assign(window, { Dashboard });
