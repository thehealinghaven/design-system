/**
 * Lockup of the mark with the practice name in Fraunces and an optional tracked
 * caps sub-line. The standard signature in headers, footers and letterheads.
 */
export interface WordmarkProps {
  /** Practice name, set in Fraunces. */
  name?: string;
  /** Tracked all-caps sub-line; pass "" to omit. */
  line?: string;
  /** Invert for charcoal / wood-deep grounds. */
  onDark?: boolean;
  /** Font size of the name in px. Default 20. */
  size?: number;
  showMark?: boolean;
  markSize?: number;
  style?: React.CSSProperties;
}
export function Wordmark(props: WordmarkProps): JSX.Element;
