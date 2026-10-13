The endorsement badge. Use it wherever a provider's own name leads and the brand
needs to stand behind it.

```jsx
<MemberBadge variant="lockup" location="Salt Lake City" />
<MemberBadge variant="seal" size="sm" location="Denver" />
<MemberBadge variant="inline" tone="dark" />
<MemberBadge variant="inline" size="sm" />
```

**Where each variant goes**

| Variant | Surface |
| --- | --- |
| `lockup` | Provider site header/footer, deck closing slide, office signage |
| `seal` | Letterhead, intake and consent PDFs, corner of a 1080×1080 card |
| `inline` | Email signature, caption sign-off line, directory row, business card back |
| `inline` + `size="sm"` | Dense in-card footers (`ProviderCard`). Shortens to "Member practice" — only legal where the surrounding page has already established The Healing Haven by name |

**Rules.** The badge never carries a provider's element accent — it is always gold
on light, gold-light on dark. It never sits next to a second Healing Haven mark on
the same surface (pick the badge *or* the wordmark). Keep it subordinate: at least
one type step smaller than the provider's own name. Omit `location` on brand-level
surfaces so the badge stays geography-neutral; include it only when the surface is
tied to one office.

Never write "a Healing Haven clinic", "part of The Healing Haven", or "powered by" —
the wording is *Member practice of The Healing Haven*, because each provider owns
their practice outright.
