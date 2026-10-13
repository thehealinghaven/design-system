const { Mark, Eyebrow, Button, Tag, Card, AsideCard, QuotePull, PhotoFrame } = window.TheHealingHavenDesignSystem_2c8068;

const VERTICALS = [
  { i: 'No. 01', t: 'Mental Health', tone: 'gold', tag: 'Therapy', b: 'Somatic, EMDR and trauma-informed therapy, paced to you.' },
  { i: 'No. 02', t: 'Aesthetics', tone: 'rose', tag: 'Aesthetics', b: 'Care for how you look, in a room that feels like a haven.' },
  { i: 'No. 03', t: 'Wellness', tone: 'water', tag: 'Reiki & sound', b: "Breath, sound bowls and the body's own knowing." },
  { i: 'No. 04', t: 'Coaching', tone: 'earth', tag: 'Executive function', b: "Systems that fit the brain you actually have." },
  { i: 'No. 05', t: 'The Somatic Room', tone: 'wood', tag: 'Somatic', b: 'A dedicated space for nervous-system work.' },
];
const PEOPLE = [['Helen DeLovely, LCSW','Founder · fire'],['Provider name','Role · element'],['Provider name','Role · element']];

function Hero({ go }) {
  return (
    <header style={{ position: 'relative', overflow: 'hidden', background: 'var(--charcoal)', backgroundImage: 'var(--glow-gold), var(--glow-wood)', padding: '110px var(--gutter-page) 100px' }}>
      <div className="hh-breathe" aria-hidden="true" style={{ position: 'absolute', top: '50%', right: '-140px', width: '520px', height: '520px', marginTop: '-260px', border: '1px solid rgba(221,201,163,0.5)', borderRadius: '50%', animation: 'hh-breathe 18s ease-in-out infinite' }} />
      <div style={{ position: 'relative', maxWidth: 'var(--measure)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1.25fr) minmax(0,380px)', gap: 'var(--grid-gap-lg)', alignItems: 'center' }}>
        <div>
          <Eyebrow onDark>Neurodivergent-affirming therapy · Salt Lake City</Eyebrow>
          <h1 style={{ margin: '28px 0 0', maxWidth: '15ch', fontFamily: 'var(--font-display)', fontSize: 'var(--text-display)', fontWeight: 'var(--display-weight)', lineHeight: 'var(--leading-display)', letterSpacing: 'var(--tracking-display)', color: 'var(--cream)', fontVariationSettings: "'SOFT' 100" }}>
            Come as you are — <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--gold-light)' }}>and stay a while.</em>
          </h1>
          <p style={{ margin: '34px 0 0', maxWidth: '52ch', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 350, fontSize: 'var(--text-lead)', lineHeight: 1.5, color: 'rgba(245,238,224,0.82)', fontVariationSettings: "'SOFT' 100" }}>
            From mental health into health &amp; wellness. A somatic, holistic practice for the slow, honest work of taking the mask off.
          </p>
          <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px 26px' }}>
            <Button variant="primary" onClick={() => go('consult')}>Begin a Consult →</Button>
            <Button variant="ghost" onClick={() => go('membership')}>Explore membership →</Button>
          </div>
          <div style={{ marginTop: '36px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <Tag tone="solid">Free 15-min consult</Tag><Tag tone="gold">Somatic work</Tag><Tag tone="rose">Neurodivergent-affirming</Tag>
          </div>
        </div>
        <PhotoFrame src="../../assets/imagery/helen-laptop.jpg" alt="Helen DeLovely" height={440} caption="Helen DeLovely, LCSW · Salt Lake City" />
      </div>
    </header>
  );
}

function Home({ go }) {
  return (
    <div>
      <Hero go={go} />
      <Section eyebrow="01 · Five verticals" title="Slow on purpose. " italicTail="Built around you." lede="From mental health into health &amp; wellness. Most people start with a free fifteen-minute consult and we decide together where to begin.">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 'var(--grid-gap)' }}>
          {VERTICALS.map((s) => (
            <Card key={s.i} index={s.i} title={s.t} interactive>
              {s.b}
              <div style={{ marginTop: '16px' }}><Tag tone={s.tone}>{s.tag}</Tag></div>
            </Card>
          ))}
        </div>
      </Section>
      <Section eyebrow="02 · No masking required">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)', gap: 'var(--grid-gap)' }}>
          <QuotePull emphasis="as a person." caption="The Healing Haven" size={34}>A clinician who shows up </QuotePull>
          <AsideCard label="Reassurance" title="No masking required" accent="fire">
            Reaching out is the hardest step. There's no obligation after it — we'll talk for fifteen minutes and you can decide nothing at all.
          </AsideCard>
        </div>
      </Section>
      <Section tone="dark" eyebrow="03 · The providers" title="The people " italicTail="you'll meet." style={{ marginTop: 'var(--section-y)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 'var(--grid-gap)' }}>
          {PEOPLE.map(([n, r], i) => (
            <div key={i} style={{ background: 'rgba(245,238,224,0.06)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius)', padding: 'var(--card-pad-sm)' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-micro)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold-light)', marginBottom: '14px' }}>{r}</div>
              <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '22px', lineHeight: 1.3, color: 'var(--cream)', fontVariationSettings: "'SOFT' 100" }}>{n}</p>
            </div>
          ))}
        </div>
      </Section>
      <ConsultBand go={go} />
    </div>
  );
}

Object.assign(window, { Home });
