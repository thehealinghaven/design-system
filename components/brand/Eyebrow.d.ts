/**
 * The tracked all-caps label that opens every section, with its optional 32px
 * hairline rule. 11px Manrope, 0.24em tracking, gold.
 */
export interface EyebrowProps {
  children?: React.ReactNode;
  /** Switch to gold-light for dark grounds. */
  onDark?: boolean;
  /** Show the leading 32px hairline rule. Default true. */
  rule?: boolean;
  /** Override color — use a pillar accent token when labelling pillar content. */
  color?: string;
  style?: React.CSSProperties;
}
export function Eyebrow(props: EyebrowProps): JSX.Element;
