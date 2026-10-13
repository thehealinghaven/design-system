repo: thehealinghaven/design-system
branch: main

secondary_repo: thehealinghaven/brand-kit
secondary_branch: main

## Last sync

date: 2026-08-05T15:28:48Z

### Updated in this project
- Built the token layer (colors, type, spacing, effects, motion) from the upstream design-system document.
- Authored 9 React primitives and 23 Design System cards from the documented component anatomy.
- Added marketing-site and member-portal UI kits plus five 1920×1080 slide masters.
- Copied the real logo lockups, mark geometry and photography into `assets/`.

## Screen map

| Project file | Built from |
|---|---|
| `tokens/*.css` | design-system `Healing Haven Design System.dc.html` (§02 Color, §03 Type, §06 Effects, §07 Motion) |
| `components/brand/Mark.jsx` | design-system `Mark.dc.html` (geometry copied verbatim) |
| `components/core/*.jsx` | design-system §04 Components |
| `guidelines/voice.card.html` | brand-kit §H Reference · Voice do & don't |
| `guidelines/colors-pillars.card.html` | brand-kit §H Reference · Content-pillar accent system |
| `slides/*.html` | brand-kit §F Slide-deck master |
| `ui_kits/website/*` | design-system §04 Components + brand-kit §H (no upstream site code) |
| `ui_kits/portal/*` | design-system §06 (signature gradient / membership card), `Member Login` variant, brand-kit fees + superbill copy |
| `assets/*` | both repos, `assets/logos` + `assets/imagery` |
