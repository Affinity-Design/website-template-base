# Website-Day Template Base

This is the static Next.js template cloned by the Website-Day v5 platform for customer builds.

## Platform Contract

- Customer hydration context is committed under `.affinity-generation/context/`.
- Customer Figma design comps are committed under `.affinity-generation/design-comps/*.png`.
- Files under `public/template-assets/` are template stock art only. They are never the design target.
- The audited routes are `/`, `/features`, `/pricing`, `/about`, `/contact`, `/blog`, and `/blog/sample-post`.
- Placeholder copy must stay greppable with platform lint markers such as `TODO_WEBSITE_DAY`.

## Static Export

The template is configured for static export:

```bash
npm install
npm run build
```

The build writes static output to `dist/`.

Required Next.js settings live in `next.config.mjs`:

- `output: "export"`
- `images: { unoptimized: true }`
- `trailingSlash: true`

The `next` dependency must stay pinned to a published stable npm release with a matching `package-lock.json`. Do not use `-preview`, `-canary`, or `-rc` versions because clean build containers download the exact matching `@next/swc-*` package.

The build script is:

```bash
next build && node -e "const fs=require('fs');fs.rmSync('dist',{recursive:true,force:true});fs.renameSync('out','dist')"
```

## Claude Build Workflow

Use `/build <figma-url>` after the platform has hydrated `.affinity-generation/`. The build agent must read hydrated context from disk and must not call live Figma tools. Visual matching should use the route PNGs in `.affinity-generation/design-comps/`.

## Repository Contents

```text
app/                 Next.js App Router static pages for audited routes
.claude/             Build commands, agents, and phase rules
global.css           Shared design token and reset reference
DESIGN-SYSTEM.md     Fluid scaling conventions
best-practice/       Claude Code reference docs
```
