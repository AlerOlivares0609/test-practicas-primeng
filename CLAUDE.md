# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Layout

The actual Angular project lives in the `test-practicas-primeng/` subdirectory. All commands should be run from there.

```
test-practicas-primeng/   ← repo root
└── test-practicas-primeng/   ← Angular project root (run commands here)
    └── src/app/
        ├── app.ts / app.html / app.css   ← root component (component showcase)
        ├── app.config.ts                 ← providers: router, hydration, PrimeNG
        ├── app.routes.ts                 ← router (currently empty)
        └── demo/                         ← demo component scaffold
```

## Commands

Run from `test-practicas-primeng/test-practicas-primeng/`:

```bash
npm start          # dev server (ng serve)
npm run build      # production build
npm run watch      # dev build with watch
npm test           # run tests (vitest via ng test)
npm run serve:ssr:test-practicas-primeng  # serve SSR build
```

Run a single test file:
```bash
npx ng test --include="src/app/demo/demo.spec.ts"
```

## Tech Stack

- **Angular 21** with standalone components (no NgModules)
- **PrimeNG 21** — import each component module individually (e.g., `ButtonModule` from `primeng/button`)
- **PrimeNG theme** — Aura preset configured via `providePrimeNG` in `app.config.ts`
- **Tailwind CSS v4** — configured via PostCSS (`@tailwindcss/postcss`), imported globally in `styles.css`
- **Angular SSR** — `@angular/ssr` with Express 5; server entry at `src/server.ts`
- **TypeScript ~5.9**, strict mode

## Key Patterns

- All components use `standalone: true` with explicit `imports: []` arrays — never use `CommonModule`
- Use Angular `signal()` for reactive state instead of class properties where possible
- PrimeNG components use `[(ngModel)]` with `FormsModule` for two-way binding on form controls
- SSR is enabled: avoid browser-only APIs (`window`, `document`) without a platform check
