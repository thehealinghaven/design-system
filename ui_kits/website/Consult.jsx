const { Eyebrow, Button, AsideCard, Tag, Mark } = window.TheHealingHavenDesignSystem_2c8068;

const field = { width: '100%', padding: '13px 14px', background: 'var(--surface-functional)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-md)', color: 'var(--charcoal)' };
const label = { display: 'block', fontFamily: 'var(--font-body)', fontSize: 'var(--text-micro)', fontWeight: 600, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--gold-deep)', marginBottom: '8px' };

function Consult() {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', about: '', mode: 'Online' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  return (
    <Section eyebrow="No pressure, ever" title="Not sure therapy is the " italicTail="right next step?" lede="Fifteen minutes on the phone, free. Tell me as much or as little as you want — there's no intake form at this stage.">
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,360px)', gap: 'var(--grid-gap-lg)', alignItems: 'start', paddingBottom: 'var(--section-y)' }}>
        {sent ? (
          <div style={{ background: 'var(--surface-functional)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius)', padding: '48px 40px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '18px' }}>
            <Mark size={56} />
            <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '30px', fontWeight: 400, color: 'var(--charcoal)', fontVariationSettings: "'SOFT' 100" }}>Thank you — that was the hardest part.</h3>
            <p style={{ margin: 0, fontSize: 'var(--text-body-md)', lineHeight: 'var(--leading-body)', color: 'var(--charcoal-soft)', maxWidth: '48ch' }}>I answer consult requests myself, usually within a business day. If you'd rather talk sooner, call (385) 443-4045.</p>
            <Button variant="underline" onClick={() => setSent(false)}>Send another</Button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ background: 'var(--surface-functional)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius)', padding: '38px 36px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
              <div><span style={label}>Your name</span><input style={field} value={form.name} onChange={set('name')} placeholder="First name is fine" /></div>
              <div><span style={label}>Email</span><input style={field} type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" /></div>
            </div>
            <div><span style={label}>What brought you here?</span><textarea style={{ ...field, minHeight: '120px', resize: 'vertical' }} value={form.about} onChange={set('about')} placeholder="A sentence is plenty." /></div>
            <div>
              <span style={label}>In person or online?</span>
              <div style={{ display: 'flex', gap: '10px' }}>
                {['Online', 'In person', 'Either'].map((m) => (
                  <button key={m} type="button" onClick={() => setForm({ ...form, mode: m })}
                    style={{ cursor: 'pointer', padding: '9px 16px', borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', border: '1px solid ' + (form.mode === m ? 'var(--gold)' : 'var(--border-hairline)'), background: form.mode === m ? 'var(--wash-gold)' : 'transparent', color: form.mode === m ? 'var(--gold-deep)' : 'var(--charcoal-soft)', transition: 'all var(--dur-base) var(--ease-brand)' }}>{m}</button>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <Button variant="primary" type="submit">Request the consult →</Button>
              <span style={{ fontSize: 'var(--text-caption)', color: 'var(--stone)' }}>15 min · free · no obligation</span>
            </div>
          </form>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--grid-gap-sm)' }}>
          <AsideCard label="Reassurance" title="The hardest step" accent="fire">Reaching out is the hardest step. There's no obligation after it.</AsideCard>
          <AsideCard label="What happens next" title="A call, not an intake" accent="gold">I'll ask what brought you here and what you've already tried. If I'm not the right fit, I'll say so and point you somewhere better.</AsideCard>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <Tag tone="solid">Free 15-min consult</Tag><Tag tone="wood">Utah residents</Tag>
          </div>
        </div>
      </div>
    </Section>
  );
}

Object.assign(window, { Consult });
