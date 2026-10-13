/**
 * The warm surface card: cream-light field, hairline border, 4px house radius,
 * an italic "No. 01" index, a Fraunces title, and Manrope body. Interactive cards
 * lift 2px and warm their border to gold-light on hover.
 */
export interface CardProps {
  children?: React.ReactNode;
  /** Small italic index label, e.g. "No. 01". */
  index?: React.ReactNode;
  title?: React.ReactNode;
  /** `dark` renders the charcoal variant. */
  tone?: 'light' | 'dark';
  /** Enable the hover lift — only for cards that are links. */
  interactive?: boolean;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
