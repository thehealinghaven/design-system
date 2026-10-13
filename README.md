# The Healing Haven — Design System

A somatic, holistic therapy practice in Salt Lake City, run by **Helen De-Lovely, LCSW** (Helen DeLovely LCSW PLLC) DBA: The Healing Haven SLC. One clinician, one room, plus online sessions across Utah. The brand's own summary of itself:

> "A somatic, holistic therapy practice for the slow, honest work of taking the mask off — and feeling safe inside your own life again."

Everything in this project is lifted from the practice's own published brand and design system — the values here are copied, not invented.

## Sources

| Source | What it gave us |
| --- | --- |
| https://github.com/thehealinghaven/design-system | Tokens, type, component anatomy, radius/shadow/motion language, the mark geometry, 12 social + print templates, brand assets |
| https://github.com/thehealinghaven/brand-kit | Voice do/don't, caption anatomy, content-pillar accent system, hashtag bank, platform size sheet, deck master, print collateral |

Both are also published as static pages: `helendelovely.com/design-system` and `helendelovely.com/brand-kit`. **Explore those repos directly** — they hold the full original documents (`.dc.html` sources plus `support.js`) and will make any future work here more faithful than this summary can.

Fonts are **Fraunces** and **Manrope**, both from Google Fonts — the upstream repos load them from the Google CDN and ship no binaries, so nothing was substituted.

## Products / surfaces represented

1. **Marketing site** — `helendelovely.com` → `ui_kits/website/`
2. **Member portal** — the signed-in side referenced by the `Member Login` button and the membership card → `ui_kits/portal/`
3. **Slide deck master** — talks, workshops, onboarding → `slides/`
4. **Social + print collateral** — 1080×1080 / 1080×1350 feed cards, story covers, letterhead, business card (documented upstream; see caveats)

---

## CONTENT FUNDAMENTALS

**The vibe.** Warm, grounded, plain-spoken — with room for poetry where it earns its keep. Slow rather than energetic. It reassures without promising. A sentence is allowed to be short and a little bare.

**Person — two tiers.** The original guide assumed one clinician; with more than one provider it splits. **Brand voice** (The Healing Haven) is third person, never says "I", and never signs off — the mark signs it; its "we" means the collective of providers. **Provider voice** (a named clinician) is unchanged from the original: first person singular — "I", their own name — "you" for the reader, "we" only for the shared work of a session ("we move at the speed of safety"), signing off as **"— Helen"** or their own first name. Which tier owns which surface is in `guidelines/voice-two-tier.card.html`. Intake, consent, billing, crisis resources and location announcements are always brand voice.

**Casing.** Sentence case everywhere. ALL CAPS only for the short tracked eyebrow / kicker label (`Salt Lake City · In-person & Online`, `FAQ FRIDAY`) and for button labels. Never a Title Case Headline.

**Contractions** always — "don't", "that's", "you'll". Dropping them makes the voice clinical.

**Emoji:** none. Not in captions, not in UI. The interpunct `·` is the house separator; the em dash carries the asides; `→` ends forward-motion CTAs.

**Do — real lines from the brand:**

- "Therapy here is slow. That's the point."
- "For every body. Every identity. Every story."
- "You don't have to be anyone but yourself here."
- "We work with breath, sound bowls, and the body's own knowing."
- "Reaching out is the hardest step. There's no obligation after it."

**Don't:**

- \~\~"Embark on a transformational journey of self-actualization."\~\~
- \~\~"Unlock your highest vibrational frequency."\~\~
- \~\~"Become your best self with expert guidance."\~\~
- No clinical-outcome, diagnosis-assuming, guaranteed-healing, or insurance/HIPAA claims.

**Anatomy of a post / section:** eyebrow (tracked caps pillar label) → hook (one plain human line, a real question or a grounded truth — never a shame hook) → body (2–4 sentences that actually answer it) → CTA + sign-off ("Begin a Consult →", "Book the Free 15-Min Consult", "Explore membership →", then "— Helen").

**CTA vocabulary:** *Begin a Consult →* · *Book the free 15-min consult* · *Explore membership →* · *Member Login*. Always paired with the reassurance "15 min · free · no obligation".

**Content pillars** (one per weekday, each with its own accent): Mon Nervous System Science · Tue EMDR & Trauma-Informed Care · Wed Community & Local SLC · Thu Adult ADHD & Neurodivergent · Fri Practice Life / FAQ Friday · Sat LGBTQ+ Affirming & Belonging · Sun Timely / Awareness Hooks.

---

## VISUAL FOUNDATIONS

**Palette — organized by the five elements.** Metal (gold `#B89968`) leads. Wood (sage `#7A8B6F`), water (teal `#7BA7A6`) and earth (terracotta `#C97B5C`) hold quiet positions around it. Fire (`#A53F3F`, Helen's deep red) runs through everything as a signature **at the 1–2% level, like a wax seal on a letter**. Each provider is assigned one of the five elements as a personal accent (`--provider-metal` … `--provider-fire`, the text-safe values); fire stays reserved for Helen. A provider directory is the one layout where more than two element colors may appear and gold need not lead. Ratio is **60 cream / 30 deep neutrals / \~8 gold / 1–2 fire**. Two rules that are never broken: **gold never sits on pure white** (it loses its warmth), and **no more than two element colors in one layout**. Cream — never white — is the hero surface; pure white (`--surface-functional`) is reserved for in-product cards and forms so they read as functional.

**Type.** Two families only. **Fraunces** (variable serif, soft ball terminals) does the feeling: headlines, wordmark, pull-quotes, italic-forward, weight \~400 on web (h1) / \~450 on social, `SOFT 100` for warm headlines, `SOFT 50` restrained, `SOFT 60` for social and slides. A key phrase inside a headline is set in *italic gold*. **Manrope** (300–700) does the work: body, nav, forms, captions, and the tracked all-caps eyebrow at 11px / 0.24em. No Inter anywhere — that's a separate email/PDF sub-brand. Web scale: display clamp(44→78) · title-xl clamp(30→46) · title 32 · heading 24 · body 17 · eyebrow 11.

**Spacing & layout.** 1180px content measure (860px for card grids and link rows), 40px page gutter, **110px between sections**, 24px grid gap, 66ch prose measure, 22ch headline measure. Rhythm inside a section is fixed: eyebrow → 22px → title → 16px → lede → 48px → content grid. Nothing is fixed-position except the sticky translucent site header (cream at 92% with a 10px blur).

**Backgrounds.** Flat fields, never busy: cream for the default page, charcoal or wood-deep for feature sections, and the **signature gradient** `linear-gradient(158deg, #252220, #3A352F 50%, #8C7344)` for the closing slide and the portal membership card. Dark sections get two very soft radial glows (gold at 18%/20%, wood at 84%/82%) and often a single 520px **breathing ring** hairline circle drifting behind the content. No patterns, no textures, no hand-drawn illustration, no aggressive gradients.

**Imagery.** Warm and lived-in: real rooms, natural light, garden greenery, the clinician actually working. Never clinical white walls, never generic wellness stock. Tone is warm — golden, slightly darkened so type can sit on top; no cool filters, no black & white, no heavy grain. Full-bleed only inside a photo panel (e.g. the title slide's right third, with an inset 90px charcoal shadow acting as a protection gradient). Elsewhere photos live in the **petal frame**.

**Corner radii.** `2px` · **`4px` is the house radius** for cards, panels and fields · `16px` rarely · `100px` pills for buttons and tags · and the signature asymmetric **petal** `34px 34px 6px 34px` (with a `22px 22px 2px 22px` inset keyline) for framed photography. Social and print cards go slightly softer at `8px`.

**Cards.** Cream-light field, 1px `#ECE2CE` hairline border, 4px radius, 30–40px padding, an optional italic "No. 01" index, a Fraunces title, Manrope body. **No shadow at rest.** Interactive cards lift 2px and warm their border to gold-light on hover. The *aside* card is the one place a colored left border is on-brand: cream field with a 3px gold, fire, or wood rule.

**Shadows** are warm, never neutral grey: `0 8px 22px rgba(184,153,104,0.10)` for lifts, `0 4px 14px rgba(184,153,104,0.25)` under gold buttons, and one deep `0 24px 60px rgba(37,34,32,0.14)` under framed photos. No inner shadows except the photo-panel protection gradient. Type over imagery is protected by a **capsule** — a tracked caps caption chip on `rgba(37,34,32,0.70)` with a gold hairline — rather than a full-bleed scrim.

**Transparency & blur** are used sparingly and only for two jobs: the sticky header (92% cream + 10px blur) and inset panels on dark grounds (`rgba(245,238,224,0.06)` fill with a `0.12` hairline). Body copy on dark drops to `rgba(245,238,224,0.7–0.82)` rather than a lighter color.

**Motion — everything moves like an exhale.** Two tempos. **Tempo A (interface): 0.2–0.4s, `cubic-bezier(0.25,0.1,0.25,1)`** — fades, 1px button lifts, 2px card lifts, menu reveals. **Tempo B (ambient/reel): 5–18s, `cubic-bezier(0.4,0,0.2,1)`** — the breathing ring (18s), mark settle, rise-and-fade text (22px lift), the gold rule wiping in left-to-right, the 12s grow/hold/shrink/hold breath ring, and word-by-word blur-to-sharp reveals landing the key word last in gold. Rules: never bounce, spring, or overshoot; always hold long enough to be read; one thing moves at a time or in a gentle stagger; every pattern has a legible reduced-motion still.

**Hover states:** gold fills darken to gold-deep and lift 1px; charcoal pills also go gold-deep; text links go gold-deep, ghost links go fire; cards lift 2px with a warm gold shadow and a gold-light border. **Press:** no shrink, no scale — the hover state simply holds. **Focus:** a gold hairline; never a blue browser ring.

---

## Components

Nine primitives, matching the inventory the sources define — no invented families.

**Brand** (`components/brand/`)

- `Mark` — the haven circle with the fiddlehead frond and five element points
- `Wordmark` — mark + practice name + tracked credit line
- `Eyebrow` — the tracked all-caps section label with its 32px rule

**Core** (`components/core/`)

- `Button` — `primary` gold pill · `dark` charcoal pill · `underline` · `ghost`
- `Tag` — element-tinted specialty pill
- `KickerPill` — the filled all-caps kicker for social and print
- `Card` — the warm surface card
- `AsideCard` — reassurance card with a 3px gold / fire / wood left rule
- `QuotePull` — Fraunces italic pull-quote with the fire emphasis
- `PhotoFrame` — the signature petal photo frame

**Practice** (`components/practice/`) — added for the multi-provider expansion

- `MemberBadge` — the endorsement badge: `lockup` · `seal` · `inline`, light and dark. The asset that lets an independently-owned provider practice market under its own name while transferring trust to The Healing Haven. Wording, color and type are locked.
- `ProviderCard` — one provider: petal headshot, name-leads hierarchy, per-provider element accent, credential and role lines, specialty tags, availability, and the inline badge.

### Intentional additions

- `Button`'s **disabled** state (45% opacity, no lift). The sources never show a disabled control; product screens need one.
- `KickerPill`'s **`md`** size. Upstream the kicker only exists at social scale; the small size lets it appear in web UI.

---

## ICONOGRAPHY

**There is no icon set in this brand, and none should be invented.** Neither source repo contains an icon font, an SVG sprite, or PNG glyphs. Iconography is deliberately replaced by three things:

1. **The mark** as the only pictorial element — it signs every asset, at 44–100px.
2. **Typographic marks in place of icons.** The deck's bullets are a Unicode arrow glyph `&#10209;` (⟡-style long arrow) set in Fraunces italic gold at 46px; list dashes are em dashes in gold-deep; CTAs end in `→`; separators are the interpunct `·`; pull-quotes open with a giant Fraunces `&rdquo;` at 120–160px and 50% opacity.
3. **Geometric rules and dots** — the 32px eyebrow hairline, the 90–120px footer rule, the 5px gold underline, and the mark's own five element dots (reused as the "belonging" highlight motif).

Emoji are never used. If a future surface truly needs UI icons (a portal needs a download affordance, say), pick a thin-stroke outline set — **Lucide at 1.5px stroke** is the closest match to the hairline weight of the brand's rules — load it from CDN, keep it in `--charcoal-soft` or `--gold-deep`, and **flag it as an addition**. Nothing in this project ships icons today.

**Assets on disk** (`assets/`)

- `logos/mark-gold.svg`, `logos/mark-gold-light.svg` — the mark, in its two legal colors
- `logos/spark-series-logo-v3-*` — horizontal light/dark and corner-badge lockups, SVG + PNG, plus the gold mark PNG (as supplied upstream)
- `imagery/helen-laptop.jpg`, `helen-darkened.jpg`, `hero-shot.jpg` — the brand's real photography

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The single entry point consumers link. `@import` lines only. |
| `tokens/` | `fonts` · `colors` · `typography` · `spacing` · `effects` · `motion` · `base` |
| `components/brand/` | `Mark`, `Wordmark`, `Eyebrow` (+ `brand.card.html`) |
| `components/core/` | `Button`, `Tag`, `KickerPill`, `Card`, `AsideCard`, `QuotePull`, `PhotoFrame` (+ `core.card.html`, `photoframe.card.html`) |
| `components/practice/` | `MemberBadge`, `ProviderCard` (+ `practice.card.html`) |
| `guidelines/` | 20 specimen cards — colors, type, spacing, radius, shadow, gradients, motion, logo, voice, imagery |
| `ui_kits/website/` | Marketing site: home · consult form · stubs for membership, packages, clinical-training, hiring, blog, contact, schedule-medicaid |
| `ui_kits/portal/` | Member portal: login → dashboard |
| `slides/` | Five 1920×1080 slide masters |
| `assets/` | Logos and photography |
| `SKILL.md` | Agent-skill wrapper so this folder works in Claude Code |
| `github.md` | Upstream source association + screen map |

---

## Caveats

- **No product source code exists upstream.** The repos document the brand and its collateral, not the website or portal implementation. The UI kits use the brand's real values and documented patterns, but their page composition and information architecture are inferred. Each kit's README says so explicitly.
- **The 12 social/print templates** (`01 Consult CTA` … `12 Letterhead`) live upstream as `.dc.html` sources. They are documented here but not re-authored — say the word and they can be brought in as templates.
- **No icon set** exists; see ICONOGRAPHY above.

## Publishing the static page

- `index.html` — open directly in a browser (this is the file hosted at helendelovely.com/design-system).
- `templates/` — individual component/template source files (`.dc.html`), plus `doc-page.js`, `support.js`.
- `Mark.dc.html`, `assets/` — shared logo mark and brand assets (logos, imagery) used across components.
- `support.js` — runtime required alongside every `.dc.html` file; keep it in the same folder.

To publish: push this folder's contents to the repo root (or a subfolder, adjusting relative script paths if you move `index.html`).
