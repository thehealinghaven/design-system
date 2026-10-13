/**
 * The house button: a tracked all-caps pill, or a quiet text link with a gold rule.
 * Hover is a 1px lift plus a shift to gold-deep — never a color pop or a bounce.
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /**
   * primary   — gold pill, the single main action per view
   * dark      — charcoal pill, secondary action (Member Login)
   * underline — text with a gold rule under it, tertiary
   * ghost     — gold-deep text only, hovers to fire
   */
  variant?: 'primary' | 'dark' | 'underline' | 'ghost';
  /** Renders an <a> instead of a <button>. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
