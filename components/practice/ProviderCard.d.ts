/**
 * One provider in the directory. Their name leads and their assigned element sets
 * the accent — because each provider owns their practice outright — while the petal
 * headshot frame, house radius and endorsement badge hold them inside the brand.
 *
 * The element accent is the *only* per-provider visual autonomy. Everything else
 * (type, radius, surface, motion) is fixed.
 */
export interface ProviderCardProps {
  name: string;
  /** Post-nominals as the provider is licensed: "LCSW", "APRN, FNP-C", "CMHC". */
  credential?: string;
  /** Tracked-caps role line: "Psychiatric Nurse Practitioner", "Somatic Therapist". */
  role?: string;
  /** "Salt Lake City · In-person & Online". The city is reused by the badge. */
  location?: string;
  /** Headshot URL — warm, natural light, the provider actually at work. */
  photo?: string;
  /** The provider's assigned element accent. Assigned once, then never changed. */
  element?: 'metal' | 'wood' | 'water' | 'earth' | 'fire';
  /** Short specialty labels; 3–5 reads best. */
  specialties?: string[];
  /** Shows "Accepting new clients" or "Waitlist". Omit to say nothing. */
  acceptingNew?: boolean;
  /** One or two plain sentences in the provider's own first-person voice. */
  children?: React.ReactNode;
  /** A <Button> — usually "Begin a Consult →". */
  action?: React.ReactNode;
  /** Show the inline endorsement badge in the footer. Default true. */
  badge?: boolean;
  interactive?: boolean;
  style?: React.CSSProperties;
}
export function ProviderCard(props: ProviderCardProps): JSX.Element;
