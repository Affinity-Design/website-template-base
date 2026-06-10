---
description: Run the full hydrated Figma-to-code build pipeline
argument-hint: [figma-url]
---

Run the complete orchestration pipeline for: $ARGUMENTS

## Pre-flight checks
0. Read `.affinity-generation/context/template-base-hydration.json` before any phase work. This packet is the design source of truth and should contain `figma.fileKey`, `figma.url`, `figma.pageSelection`, `figma.frameSelection`, `inputMaterial`, `assets`, `framework.target`, and `execution`.
1. If `figma.dna` or sibling files in `.affinity-generation/context/` provide richer tokens, typography, color, or layout data, treat that hydrated data as authoritative.
2. Use `.affinity-generation/design-comps/*.png` as the route-level Figma design comp source for visual targets. PNGs under `public/template-assets/` are this template's stock art -- never treat them as the design target.
3. Verify the packet's Figma URL is present and matches the user's URL when one is provided.
4. Do not attempt live Figma tool calls. Design data is delivered on disk before this repo is cloned, and visual comparison runs later in the platform-side audit.
5. If you touch `next`, pin a published stable release from npm and regenerate `package-lock.json`; never use `-preview`, `-canary`, or `-rc` versions because clean build containers must download the matching `@next/swc-*` tarball.

## Execute phases in order

0. **Setup — Framework detection & scaffold.** Follow `.claude/rules/phase-init-framework-setup.md`. Detect the user's framework from `package.json`. If none, ask the user which framework to use (Astro recommended for marketing sites, Next.js for web apps), scaffold it into the current directory, and move `global.css` into the framework's expected location. Skip this step only if a framework is already detected.

1. **Phase 0** — Parse the first hydrated Figma page from the packet to auto-generate `PROJECT_BRIEF.md`, set `--size-container-ideal` from frame width, and update design tokens. All token values in em. Set `--size-container-max: 1440px` on desktop. Add responsive `--container-padding` overrides (tablet: 1.5em, mobile: 1em). Skip if brief already exists.
2. **Phase 1** — Analyze remaining hydrated Figma pages: extract structure from `figma.pageSelection` / `figma.frameSelection` / `figma.dna`, download all images from the packet's `assets` manifest to your framework's static asset folder (`public/assets/images/` for Next.js/Astro/Vite, `static/assets/images/` for SvelteKit), map components. Report any failed image downloads to the user immediately. **SITE_MAP.md must include `fileKey` at the top and `nodeId` or hydration frame reference for every section.**
3. **Pre-Phase-2 validation** — Before starting Phase 2, verify that SITE_MAP.md contains:
   - A `fileKey` value at the top
   - A `nodeId` or hydration frame reference for every section entry
   - If either is missing, go back and fix SITE_MAP.md before proceeding. Phase 2 agents CANNOT build accurately without hydration references.
4. **Phase 2** — Build all components. For EACH section:
   a. Read the hydration packet and SITE_MAP.md to get the `fileKey`, `nodeId`, route, and frame mapping
   b. Read the corresponding `figma.frameSelection` entry plus `figma.dna` or sibling hydrated context for exact text, colors, spacing, typography, layout, and asset references
   c. Use the matching `.affinity-generation/design-comps/*.png` route comp as the visual target; if a pre-resolved screenshot reference is also present in the hydration packet, use it as supporting context
   d. Build the component from hydrated design data — not from text descriptions or summaries
   e. Use em for sizing, px for letter-spacing, unitless for line-height
   f. Every section uses full-width bg + max-width centered content
   g. Include responsive styles from the start
   h. Wire up downloaded images from your static asset folder
   - **Do NOT add animations, scroll effects, parallax, or hover transitions unless they are in the Figma design or explicitly requested by the user**
5. **Phase 3** — QA: hydration source-of-truth check (text accuracy, layout verification against `.affinity-generation/design-comps/*.png` route comps and available screenshot references, no invented features), visual fidelity check, code quality check (em usage, letter-spacing in px, line-height unitless, container-max ≤1440px, responsive padding overrides, responsive media queries present), auto-correction loop
6. **Phase 4** — Responsive migration: follow `.claude/rules/phase-4-responsive.md` to verify tablet, mobile landscape, and mobile portrait behavior
7. **Phase 5** — SEO & accessibility pass
8. **Phase 6** — Final review: production build must pass (e.g., `npm run build`, `pnpm build`), verify all breakpoints
9. **Phase 7** — Launch: Start the dev server (e.g., `npm run dev`) so the user can preview the site immediately

Between each phase, confirm the build still compiles with your framework's build command.

Report progress at each phase transition.
