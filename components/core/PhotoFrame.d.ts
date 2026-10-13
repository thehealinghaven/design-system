/**
 * The signature "petal" photo frame — 34px 34px 6px 34px radius, warm gold hairline,
 * inset cream keyline, and a tracked caption chip on a charcoal scrim.
 */
export interface PhotoFrameProps {
  src: string;
  alt?: string;
  /** Tracked caps caption chip, e.g. "Helen DeLovely, LCSW · Salt Lake City". */
  caption?: React.ReactNode;
  /** Image height in px. Default 460. */
  height?: number | string;
  /** Inset keyline. Default true. */
  keyline?: boolean;
  style?: React.CSSProperties;
}
export function PhotoFrame(props: PhotoFrameProps): JSX.Element;
