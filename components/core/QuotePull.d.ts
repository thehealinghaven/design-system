/**
 * The pull-quote: Fraunces italic at SOFT 100 on charcoal, with the key phrase
 * flipped to upright fire. The brand's loudest typographic moment.
 */
export interface QuotePullProps {
  /** The quote, minus the emphasised tail. */
  children?: React.ReactNode;
  /** Trailing phrase rendered upright in fire — the signature move. */
  emphasis?: React.ReactNode;
  /** Tracked caps attribution. */
  caption?: React.ReactNode;
  tone?: 'dark' | 'light';
  /** Quote font size in px. 28 in-page, 96 on a 1920px slide. */
  size?: number;
  style?: React.CSSProperties;
}
export function QuotePull(props: QuotePullProps): JSX.Element;
