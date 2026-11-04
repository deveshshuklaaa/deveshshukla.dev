# Portfolio V4 — Engineering Index

[Figma file](https://www.figma.com/design/huKE3nsyUk8P4zBRyVLBlS?node-id=4-2)

## Review frames

- Desktop, 1440px: `4:2`
- Laptop, 1280px: `5:12`
- Tablet, 768px: `5:310`
- Mobile, 390px: `5:596`
- Foundations and components: `3:46`, on page `0:1`

The complete frames contain editable text, auto-layout containers, rules, and component instances. They contain no flattened UI screenshots. All three typeface families were verified in Figma. The supporting library includes semantic colour and spacing variables, text styles, action and filter states, navigation items, notes, and technology labels.

## Direction and audit

The previous site used the same dark rounded container pattern across the hero, approach, projects, skills, and education. Nested project cards made the strongest evidence difficult to scan. The redesign uses warm paper, dark ink, vermilion labels, two dark project chapters, a sage hardware chapter, and editorial typography. Thin rules and space replace nested containers.

References reviewed: [Lee Robinson](https://leerob.com), [David Chipperfield Architects](https://davidchipperfield.com), and [Linear](https://linear.app). These informed the content-first approach, project indexing, and restrained hierarchy; their content and visual assets are not copied.

## Tokens and implementation

- Paper `#F4F2EB`; ink `#202B28`; muted `#5B635F`; accent `#AD3C22`.
- Deep green `#183C37`; sage `#E1E8DB`; soft paper `#E9E8DF`; rule `#A7ADA3`; light muted `#BDC9C0`.
- DM Sans for interface and body text; DM Serif Display Italic for editorial display; IBM Plex Mono for metadata.
- Fonts are served locally as WOFF2, with their OFL licences included.
- Maximum content width 1280px; desktop margins 64px minimum; tablet 32px; mobile 24px.
- Breakpoints: 1024px for type and gutters, 901px for navigation, 768px for single-column composition, and 360px for smaller display type.
- Spacing scale: 0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120.
- Action targets are at least 44px high. Visible focus states, skip navigation, native disclosure controls, and reduced-motion support are included.

The Figma-generated React context was translated into the existing React/Vite component structure and plain CSS. No dependencies were added. Native anchors, buttons, and `details` provide the interactions.

## Project evidence and assets

The portfolio source remains authoritative for descriptions, architecture, technology lists, and validation. The original project objects are preserved, except that the verified public CyberLabX repository URL is now included.

Repository asset audits found no usable application screenshots: StockBill contains logos and starter artwork; Haemophilia contains platform launch placeholders; CyberLabX has no project images; SmartSpray contains training dataset images and platform assets. These were not presented as product screenshots.

The editable architecture studies explain the existing project records. They are not application screenshots or additional benchmark evidence. No demo URLs were invented.

## Verification

- ESLint: passed, no warnings or errors.
- Vite production build: passed.
- Browser widths: 1440, 1280, 768, 390, and 320px; no horizontal overflow.
- All four projects, counts 4/2/2, filter switching, and index links after filtering: passed.
- Engineering notes expose the original decisions, validation context, and complete technology lists.
- Mobile menu, Escape close with focus return, keyboard skip link, button activation, anchors, social links, and mailto link: checked.
- Clipboard action and success feedback: checked.
- All 12 intended text/background pairings meet WCAG AA; minimum contrast 4.87:1.
- Resume PDF and verified education data are unchanged.
- Lighthouse CLI is not installed, so no Lighthouse score is claimed.

Figma Starter-plan quota was reached after the four frames and final contrast correction were saved. Existing full-page exports precede the final small accent adjustment and desktop navigation alignment; the editable file and implementation contain those corrections.

## Safe review and deployment

[Owner-only review deployment](https://devesh-engineering-index-v4-review.dapperopal.chatgpt.site). The private preview is hosted separately from the production domain.

Work is isolated on `design/figma-portfolio-redesign`. The branch-only preview workflow lints, builds, and uploads a seven-day artifact. It does not deploy GitHub Pages. The existing main-only production workflow, domain configuration, and DNS are unchanged. Merge to main requires the owner's review and approval.
