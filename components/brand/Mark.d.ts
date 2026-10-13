/**
 * The Healing Haven mark — a haven circle holding a fiddlehead frond, with five
 * element points. Only two colors are legal: gold on light grounds, gold-light on dark.
 */
export interface MarkProps {
  /** Rendered square size in px. Default 56. */
  size?: number;
  /** Stroke/fill color. Use var(--gold) on light, var(--gold-light) on dark. Never any other value. */
  color?: string;
  /** Accessible label. */
  title?: string;
  style?: React.CSSProperties;
  className?: string;
}
export function Mark(props: MarkProps): JSX.Element;
