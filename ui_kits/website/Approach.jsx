const { Eyebrow, Button, Tag, Card, AsideCard, PhotoFrame, QuotePull } = window.TheHealingHavenDesignSystem_2c8068;

const STEPS = [
  ['01', 'The consult', 'Fifteen minutes, free, no intake forms. You tell me what brought you here; I tell you honestly whether I am the right fit.'],
  ['02', 'Settling in', 'The first few sessions are about safety and pace, not history-taking. Nothing gets opened before your body says it can.'],
  ['03', 'The deeper work', 'EMDR, somatic work, breath, sound. We follow what the nervous system is doing rather than a curriculum.'],
  ['04', 'Not forever', "The goal is a life you don't need weekly therapy to hold. We name that out loud and work toward it."],
];

function Approach({ go }) {
  return (
    <div>
      <Section eyebrow="How I work" title="Safety comes " italicTail="before insight" lede="The body decides it's safe before the mind can do the deeper work. Everything below follows from that one idea.">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,380px)', gap: 'var(--grid-gap-lg)', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--grid-gap-sm)' }}>
            {STEPS.map(([n, t, b]) => (
              <div key={n} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', background: 'var(--cream-light)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius)', padding: '28px 30px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '30px', lineHeight: 1, color: 'var(--gold)', flexShrink: 0, fontVariationSettings: "'SOFT' 100" }}>{n}</span>
                <div>
                  <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-display)', fontSize: 'var(--text-heading)', fontWeight: 400, color: 'var(--charcoal)' }}>{t}</h3>
                  <p style={{ margin: 0, fontSize: 'var(--text-body-md)', lineHeight: 'var(--leading-body)', color: 'var(--charcoal-soft)' }}>{b}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--grid-gap-sm)' }}>
            <PhotoFrame src="../../assets/imagery/hero-shot.jpg" alt="The room" height={300} caption="The room · 250 E 200 S, SLC" />
            <AsideCard label="Logistics" title="In-person &amp; online" accent="wood">
              Wednesdays and Thursdays in Salt Lake City; the rest of the week on video anywhere in Utah. Fifty-minute sessions, weekly to start.
            </AsideCard>
          </div>
        </div>
      </Section>
      <Section eyebrow="Modalities" title="What we might " italicTail="actually do">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: 'var(--space-10)' }}>
          {[['water', 'Reiki & sound'], ['gold', 'Somatic work'], ['fire', 'EMDR'], ['wood', 'Parts work'], ['earth', 'Executive function'], ['gold', 'Breath practice'], ['wood', 'Nature-based sessions']].map(([tone, t], i) => <Tag key={i} tone={tone}>{t}</Tag>)}
        </div>
        <QuotePull tone="light" emphasis="the body's own knowing." caption="Grounded, not floaty" size={30}>We work with breath, sound bowls, and </QuotePull>
      </Section>
      <ConsultBand go={go} />
    </div>
  );
}

Object.assign(window, { Approach });
