/**
 * The endorsement badge — the asset that lets an independently-owned provider
 * practice market under its own name while still transferring trust to
 * The Healing Haven.
 *
 * Three variants: `lockup` (mark + "Member practice of / The Healing Haven",
 * for a provider site header or footer), `seal` (circular, for letterhead,
 * intake PDFs and the corner of a social card), and `inline` (a single tracked-caps
 * line for captions, email signatures and directory rows).
 *
 * LOCKED. A provider may choose the variant, the size and whether to show their
 * city — never the wording, the colors, or the type. Never recolor to a provider's
 * element accent: the badge always speaks for the brand, not the provider.
 */
export interface MemberBadgeProps {
  variant?: 'lockup' | 'seal' | 'inline';
  /** `dark` for charcoal, wood-deep, and signature-gradient grounds. */
  tone?: 'light' | 'dark';
  /** Optional city, e.g. "Salt Lake City" or "Denver". Omit on brand-level surfaces. */
  location?: string;
  /** On `inline`, `sm` shortens the wording to "Member practice" for dense in-card footers. */
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}
export function MemberBadge(props: MemberBadgeProps): JSX.Element;
