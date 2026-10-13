const { Mark, Eyebrow, Button, Tag, Card, AsideCard, QuotePull, PhotoFrame } = window.TheHealingHavenDesignSystem_2c8068;

const SERVICES = [
  { i: 'No. 01', t: 'Somatic & nervous-system work', tone: 'water', tag: 'Reiki & sound', b: "We work with breath, sound bowls, and the body's own knowing — because the body decides it's safe before the mind can do the deeper work." },
  { i: 'No. 02', t: 'EMDR & trauma-informed care', tone: 'fire', tag: 'Trauma-focused', b: 'Slow, consented, paced to you. There is no schedule your healing has to keep.' },
  { i: 'No. 03', t: 'Adult ADHD & executive function', tone: 'earth', tag: 'Executive function', b: 'Systems that fit the brain you actually have, not the one a productivity book assumes.' },
  { i: 'No. 04', t: 'LGBTQ+ affirming therapy', tone: 'gold', tag: 'Belonging', b: 'For every body. Every identity. Every story. You will not have to translate yourself here.' },
];

function Hero({ go }) {
  return (
    <header style={{ position: 'relative', overflow: 'hidden', background: 'var(--charcoal)', backgroundImage: 'var(--glow-gold), var(--glow-wood)', padding: '110px var(--gutter-page) 100px' }}>
      <div className="hh-breathe" aria-hidden="true" style={{ position: 'absolute', top: '50%', right: '-140px', width: '520px', height: '520px', marginTop: '-260px', border: '1px solid rgba(221,201,163,0.5)', borderRadius: '50%', animation: 'hh-breathe 18s ease-in-out infinite' }} />
      <div style={{ position: 'relative', maxWidth: 'var(--measure)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1.25fr) minmax(0,380px)', gap: 'var(--grid-gap-lg)', alignItems: 'center' }}>
        <div>
          <Eyebrow onDark>Salt Lake City · In-person &amp; Online</Eyebrow>
          <h1 style={{ margin: '28px 0 0', maxWidth: '15ch', fontFamily: 'var(--font-display)', fontSize: 'var(--text-display)', fontWeight: 350, lineHeight: 'var(--leading-display)', letterSpacing: 'var(--tracking-display)', color: 'var(--cream)', fontVariationSettings: "'SOFT' 100" }}>
            You don't have to be <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--gold-light)' }}>anyone but yourself</em> here
          </h1>
          <p style={{ margin: '34px 0 0', maxWidth: '52ch', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 350, fontSize: 'var(--text-lead)', lineHeight: 1.5, color: 'rgba(245,238,224,0.82)', fontVariationSettings: "'SOFT' 100" }}>
            A somatic, holistic therapy practice for the slow, honest work of taking the mask off — and feeling safe inside your own life again.
          </p>
          <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px 26px' }}>
            <Button variant="primary" onClick={() => go('consult')}>Begin a Consult →</Button>
            <Button variant="ghost" onClick={() => go('approach')}>Learn how I work →</Button>
          </div>
          <div style={{ marginTop: '36px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <Tag tone="solid">Free 15-min consult</Tag><Tag tone="gold">Somatic work</Tag><Tag tone="wood">Trauma-focused</Tag>
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
      <Section eyebrow="01 · The work" title="Therapy here is slow. " italicTail="That's the point." lede="Four ways in. Most people start with a free fifteen-minute consult and we decide together where to begin — there is no obligation after it.">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--grid-gap)' }}>
          {SERVICES.map((s) => (
            <Card key={s.i} index={s.i} title={s.t} interactive>
              {s.b}
              <div style={{ marginTop: '16px' }}><Tag tone={s.tone}>{s.tag}</Tag></div>
            </Card>
          ))}
        </div>
      </Section>
      <Section eyebrow="02 · What it feels like">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)', gap: 'var(--grid-gap)' }}>
          <QuotePull emphasis="speed of safety." caption="Helen DeLovely, LCSW" size={34}>We move at the </QuotePull>
          <AsideCard label="Reassurance" title="The hardest step" accent="fire">
            Reaching out is the hardest step. There's no obligation after it — we'll talk for fifteen minutes and you can decide nothing at all.
          </AsideCard>
        </div>
      </Section>
      <Section tone="dark" eyebrow="03 · Who this is for" title="For every body. Every identity. " italicTail="Every story." style={{ marginTop: 'var(--section-y)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 'var(--grid-gap)' }}>
          {[['Mask off', "You've been performing okay for years and you're tired."],
            ['Newly diagnosed', 'Adult ADHD or autism, and a life that suddenly makes more sense.'],
            ['Queer & trans folks', "Affirming isn't a badge here, it's the baseline."],
            ['Carrying something old', 'Trauma that the body still keeps score of.']].map(([t, b]) => (
            <div key={t} style={{ background: 'rgba(245,238,224,0.06)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius)', padding: 'var(--card-pad-sm)' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-micro)', letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', fontWeight: 600, color: 'var(--gold-light)', marginBottom: '14px' }}>{t}</div>
              <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '19px', lineHeight: 1.4, color: 'var(--cream)', fontVariationSettings: "'SOFT' 100" }}>{b}</p>
            </div>
          ))}
        </div>
      </Section>
      <ConsultBand go={go} />
    </div>
  );
}

Object.assign(window, { Home });
