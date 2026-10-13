/**
 * Reassurance and caveat card — cream field with a 3px left accent rule in gold,
 * fire, or wood. The one place a left-border accent is on-brand here.
 */
export interface AsideCardProps {
  children?: React.ReactNode;
  /** Tiny tracked caps label, e.g. "Reassurance". */
  label?: React.ReactNode;
  /** Fraunces italic title. */
  title?: React.ReactNode;
  accent?: 'gold' | 'fire' | 'wood';
  style?: React.CSSProperties;
}
export function AsideCard(props: AsideCardProps): JSX.Element;
