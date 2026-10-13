/**
 * Small tinted pill for specialties and modalities — one element wash per tag.
 * Sentence case, not caps; these are content labels, not buttons.
 */
export interface TagProps {
  children?: React.ReactNode;
  /** Element wash. `solid` is the charcoal chip used for the free-consult offer. */
  tone?: 'gold' | 'wood' | 'water' | 'earth' | 'fire' | 'rose' | 'solid';
  style?: React.CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;
