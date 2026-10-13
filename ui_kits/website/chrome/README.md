# Site chrome — standard header & footer

The shared navigation used across helendelovely.com (GoHighLevel). This folder is the canonical copy. Edit here first, then update the GHL Global Sections.

- `header.html` — HH-SITE-HEADER, the home-page header: dark announcement bar ("Now accepting new clients — free 15-minute consults"), The Healing Haven / Salt Lake City wordmark, The Haven · Team · Pricing · FAQ · Membership, and Join membership + Book a free consult. Links point to `/home#…` so they work from any page. Adds a CSS-only mobile menu (no JavaScript) below 980px.
- `footer.html` — HH-CHROME-FOOTER. Four columns (brand · Explore · Contact · The Fine Print) plus the 988/911 crisis line. Self-contained, so it works on pages without the header.

## Using them in GHL

1. Save each snippet as a **Global Section** (one Custom Code element, full width, margins/padding 0). Add those sections to every page instead of pasting copies, so nav changes happen in one place.
2. On pages that use these, turn the GHL site Header/Footer **off**.
3. Both blocks are scoped (`.hh-site-head`, `.hh-chrome-footer`) and break out to full width with `100vw`, so they don't collide with page styles.

## Notes

- The footer email is a plain `mailto:` link. Cloudflare obfuscates it automatically on the live site.
- Values follow `tokens/colors.css` (gold, gold-deep, sage, cream, charcoal) and the Fraunces + Manrope pair. Load the fonts on the page (see `tokens/fonts.css`).
- Extracted from the live home page on 2026-10-13. The older HH-CHROME-HEADER v2 (Therapy · Packages · EMDR · Contact) on /packages and /clinical-training is superseded by this header.
