const { Mark, Wordmark, Eyebrow, Button, Tag } = window.TheHealingHavenDesignSystem_2c8068;

const NAV = [['home','Home'],['approach','How I Work'],['fees','Fees & Fit'],['consult','Begin a Consult']];

function SiteNav({ route, go }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20, background: 'rgba(245,238,224,0.92)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-hairline)' }}>
      <div style={{ maxWidth: 'var(--measure)', margin: '0 auto', padding: '18px var(--gutter-page)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px' }}>
        <a href="#home" onClick={(e) => { e.preventDefault(); go('home'); }} style={{ display: 'block' }}><Wordmark size={19} markSize={38} line="Helen DeLovely, LCSW · SLC" /></a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          {NAV.slice(0, 3).map(([id, label]) => (
            <a key={id} href={'#' + id} onClick={(e) => { e.preventDefault(); go(id); }}
              style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 600, letterSpacing: 'var(--tracking-button)', textTransform: 'uppercase', color: route === id ? 'var(--gold-deep)' : 'var(--charcoal)', borderBottom: route === id ? '1px solid var(--gold)' : '1px solid transparent', paddingBottom: '4px' }}>{label}</a>
          ))}
          <div style={{ display: 'flex', gap: '14px' }}>
            <Button variant="dark" onClick={() => go('portal')}>Member Login</Button>
            <Button variant="primary" onClick={() => go('consult')}>Begin a Consult →</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

function ConsultBand({ go }) {
  return (
    <section style={{ background: 'var(--gradient-signature)', padding: '88px var(--gutter-page)' }}>
      <div style={{ maxWidth: 'var(--measure)', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '40px' }}>
        <div>
          <Eyebrow onDark>No pressure, ever</Eyebrow>
          <h2 style={{ margin: '22px 0 0', maxWidth: '18ch', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 350, fontSize: 'var(--text-title-xl)', lineHeight: 'var(--leading-title)', color: 'var(--cream)', fontVariationSettings: "'SOFT' 100" }}>Reaching out is the hardest step.</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', alignItems: 'flex-start' }}>
          <Button variant="primary" onClick={() => go('consult')} style={{ background: 'var(--gold-light)', color: 'var(--charcoal)' }}>Book the free 15-min consult</Button>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 28px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-meta)', color: 'rgba(245,238,224,0.82)' }}>
            <span>helendelovely.com</span><span>(385) 443-4045</span><span>hello@helendelovely.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer style={{ background: 'var(--charcoal)', padding: '72px var(--gutter-page)' }}>
      <div style={{ maxWidth: 'var(--measure)', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '32px' }}>
        <Wordmark onDark line="Helen DeLovely, LCSW · SLC" />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <Tag tone="gold">Somatic work</Tag><Tag tone="wood">Trauma-focused</Tag><Tag tone="fire">LGBTQ+ affirming</Tag>
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-caption)', lineHeight: 1.7, color: 'rgba(245,238,224,0.55)', textAlign: 'right', maxWidth: '34ch' }}>
          250 E 200 S, Suite 1521 · Salt Lake City, UT 84111<br />Helen deLovely LCSW PLLC
        </div>
      </div>
    </footer>
  );
}

function Section({ eyebrow, title, italicTail, lede, children, tone = 'light', style }) {
  const dark = tone === 'dark';
  return (
    <section style={{ background: dark ? 'var(--surface-feature)' : 'transparent', padding: dark ? '96px var(--gutter-page)' : 'var(--section-y) var(--gutter-page) 0', ...style }}>
      <div style={{ maxWidth: 'var(--measure)', margin: '0 auto' }}>
        {eyebrow && <Eyebrow onDark={dark}>{eyebrow}</Eyebrow>}
        {title && <h2 style={{ margin: '22px 0 16px', maxWidth: 'var(--measure-headline)', fontFamily: 'var(--font-display)', fontSize: 'var(--text-title-xl)', fontWeight: 350, lineHeight: 'var(--leading-title)', letterSpacing: 'var(--tracking-title)', color: dark ? 'var(--cream)' : 'var(--charcoal)', fontVariationSettings: "'SOFT' 50" }}>
          {title}{italicTail && <em style={{ fontStyle: 'italic', fontWeight: 400, color: dark ? 'var(--gold-light)' : 'var(--gold-deep)', fontVariationSettings: "'SOFT' 100" }}>{italicTail}</em>}
        </h2>}
        {lede && <p style={{ margin: '0 0 var(--space-10)', maxWidth: 'var(--measure-prose)', fontSize: 'var(--text-body-lg)', lineHeight: 'var(--leading-body)', color: dark ? 'var(--text-on-dark-muted)' : 'var(--charcoal-soft)' }}>{lede}</p>}
        {children}
      </div>
    </section>
  );
}

Object.assign(window, { SiteNav, SiteFooter, ConsultBand, Section });
