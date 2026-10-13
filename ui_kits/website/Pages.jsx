const { Button } = window.TheHealingHavenDesignSystem_2c8068;
function Stub({ eyebrow, title, tail, go }) {
  return (
    <Section eyebrow={eyebrow} title={title} italicTail={tail} lede="Placeholder. This live page exists on helendelovely.com but hasn't been composed in this kit yet." style={{ paddingBottom: 'var(--section-y)' }}>
      <Button variant="primary" onClick={() => go('consult')}>Begin a Consult →</Button>
    </Section>
  );
}
Object.assign(window, { Stub });
