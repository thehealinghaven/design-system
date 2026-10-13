/**
 * The filled all-caps kicker on social cards and print collateral. This is where
 * a content-pillar accent color lives — never on the mark.
 */
export interface KickerPillProps {
  children?: React.ReactNode;
  /** Pillar accent or gold-deep. */
  background?: string;
  color?: string;
  /** `lg` is the 1080px social/print size (22px, +3px tracking); `md` is web. */
  size?: 'md' | 'lg';
  style?: React.CSSProperties;
}
export function KickerPill(props: KickerPillProps): JSX.Element;
