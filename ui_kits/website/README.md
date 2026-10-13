# UI kit — helendelovely.com (marketing site)

Four click-through screens: **Home**, **How I Work**, **Fees & Fit**, **Begin a Consult** (with a working form → confirmation state). Nav and footer are shared in `Chrome.jsx`; `Section` there is the standard section shell (eyebrow → Fraunces title with an italic gold tail → 66ch lede → content grid).

Screens compose the published primitives — `Button`, `Tag`, `Card`, `AsideCard`, `QuotePull`, `PhotoFrame`, `Mark`, `Wordmark`, `Eyebrow` — and nothing is re-implemented locally.

## Provenance & honesty note

The source repos (`thehealinghaven/design-system`, `thehealinghaven/brand-kit`) contain the **brand and component language**, plus social/print/deck masters — they do **not** contain the website's own page code. So:

- Every visual value here (colors, type sizes, radii, shadows, motion, button and card anatomy, copy lines, fees, address, phone) is lifted from those sources.
- The **page composition** — which sections exist and in what order — is inferred from the documented patterns ("Begin a Consult →", "Member Login", the consult CTA band on the signature gradient, the petal photo frame, the tag cluster).

If the real site's markup is available, point us at it and this kit can be corrected to match section for section.
