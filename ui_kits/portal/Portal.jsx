const { Mark, Wordmark, Eyebrow, Button, Tag, Card, AsideCard } = window.TheHealingHavenDesignSystem_2c8068;

function MembershipCard({ name = 'Helen deLovely', member = 'Member since 2024', rate = '$123' }) {
  return (
    <div style={{ background: 'var(--gradient-signature)', borderRadius: 'var(--radius)', padding: '32px 30px', display: 'flex', flexDirection: 'column', gap: '30px', minHeight: '210px', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Mark size={44} color="var(--gold-light)" />
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-micro)', fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold-light)' }}>Membership</span>
      </div>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '26px', color: 'var(--cream)', fontVariationSettings: "'SOFT' 100" }}>{name}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '10px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-caption)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(221,201,163,0.85)' }}>
          <span>{member}</span><span>{rate} / session</span>
        </div>
      </div>
    </div>
  );
}

function Login({ onIn }) {
  const [email, setEmail] = React.useState('');
  const field = { width: '100%', padding: '13px 14px', background: 'var(--surface-functional)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-md)', color: 'var(--charcoal)' };
  const label = { display: 'block', fontFamily: 'var(--font-body)', fontSize: 'var(--text-micro)', fontWeight: 600, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--gold-deep)', marginBottom: '8px' };
  return (
    <div style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,480px)' }}>
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--charcoal)', backgroundImage: 'var(--glow-gold)', padding: '72px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Wordmark onDark line="Helen DeLovely, LCSW · SLC" />
        <div className="hh-breathe" aria-hidden="true" style={{ position: 'absolute', bottom: '-160px', left: '-80px', width: '440px', height: '440px', border: '1px solid rgba(221,201,163,0.5)', borderRadius: '50%', animation: 'hh-breathe 18s ease-in-out infinite' }} />
        <div style={{ position: 'relative' }}>
          <h1 style={{ margin: 0, maxWidth: '18ch', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 350, fontSize: '52px', lineHeight: 1.05, color: 'var(--cream)', fontVariationSettings: "'SOFT' 100" }}>Welcome back. Nothing here is urgent.</h1>
          <p style={{ margin: '24px 0 0', maxWidth: '46ch', fontSize: 'var(--text-body-lg)', lineHeight: 'var(--leading-body)', color: 'rgba(245,238,224,0.72)' }}>Your sessions, superbills, and between-session notes — in one quiet place.</p>
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-caption)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(221,201,163,0.6)' }}>The Healing Haven · Member portal</div>
      </div>
      <div style={{ background: 'var(--cream)', padding: '72px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '26px' }}>
        <Eyebrow>Member login</Eyebrow>
        <form onSubmit={(e) => { e.preventDefault(); onIn(); }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div><span style={label}>Email</span><input style={field} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" /></div>
          <div><span style={label}>Password</span><input style={field} type="password" defaultValue="••••••••" /></div>
          <Button variant="dark" type="submit" style={{ alignSelf: 'flex-start' }}>Sign in</Button>
          <Button variant="ghost" type="button" onClick={onIn}>Email me a link instead →</Button>
        </form>
        <AsideCard label="Not a member yet" title="Start with a consult" accent="gold">
          Membership opens after the first few sessions. Begin with the free fifteen-minute consult.
        </AsideCard>
      </div>
    </div>
  );
}

Object.assign(window, { Login, MembershipCard });
