---
description: Re-run desktop QA and auto-correction on the current build
argument-hint: [optional-section-name]
---

Re-run Phase 3 (Desktop QA) on the current build.

If a section name is provided ($ARGUMENTS), only QA that section. Otherwise, QA all sections.

For each section:
1. Read `.affinity-generation/context/template-base-hydration.json` and use `.affinity-generation/design-comps/*.png` as the route-level visual target
2. Compare the hydrated design data, matching route comp PNG, and available screenshot reference against the built code
3. Check visual fidelity: spacing, typography, colors, layout, border radius, shadows
4. Check code quality: semantic HTML, no hardcoded values, proper types, no unused CSS
5. If any issues found: fix them, then re-check until the section passes

After desktop QA passes, verify the build still compiles with your framework's build command (e.g., `npm run build`).
