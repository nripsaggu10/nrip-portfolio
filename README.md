# Nripdev Singh — React portfolio

Personal portfolio built with React 19.3, TypeScript, and Vite. It preserves the original navy-and-mint design, project illustrations, mobile layout, and PDF résumé.

## Development

On macOS, double-click `run.command` in Finder to start the project in a separate Terminal window and open Chrome at `http://localhost:5173/`. It selects Node through nvm and installs dependencies if missing. Leave this window running: saving source files updates the browser automatically, while your VS Code terminal stays free for Git commands. Press Control+C in the server window to stop it. After restarting your Mac, launch it again.

Only run one development server on port 5173 at a time. You can also launch with `./run.command` from the project folder. If the file loses executable permission after copying, run `chmod +x run.command` once.

Use Node.js 24 (see `.nvmrc`).

```sh
npm ci
npm run dev
```

The portfolio is at `/`; Résumé links open `/nripdev-singh-resume.pdf` directly. Replace `public/nripdev-singh-resume.pdf` to update the document. No backend or environment secrets are required.

## Checks and production build

```sh
npm run test:run
npm run build
npm run preview
```

`build` checks TypeScript and produces the deployable `dist/` directory. Tests exercise menu behavior, both project dialogs, focus restoration, company tabs, navigation targets, and the résumé PDF link.

### Live tests in Chrome

Run `npm test` to open Google Chrome with the Vitest browser dashboard. The tests execute in the real browser and automatically rerun when you save a test or an imported source file. Keep the terminal running; press Control+C to stop. Chrome must be installed and Node 24 selected in this terminal. The development server does not need to be running separately.

The browser configuration uses Vitest's preview provider and Testing Library interactions. Dialog and observer APIs use the real browser implementations. The dashboard lists each passing or failing test. `npm run test:run` retains the fast, one-time jsdom run for pre-commit checks and CI without opening a browser.

## Project organization

See [the full folder tree and parent–child component map](docs/PROJECT_STRUCTURE.md).

- `src/app/`: application composition.
- `src/layouts/portfolio-layout/`: header, footer, and social rails.
- `src/pages/portfolio/sections/`: hero, about, experience, projects, and contact.
- `src/pages/portfolio/sections/projects/querywear/` and `healthfirst/`: project-specific data and artwork.
- `src/pages/resume/`: PDF résumé and its child components.
- `src/shared/`: reusable reveal/toast components, profile data, and foundational styles.
- Each visual component owns its `.tsx` markup and `.css`; interactive behavior lives in adjacent `.ts` hooks. Tests are placed beside the feature they cover.
- `src/main.tsx` is the React entry point; `index.html` is its HTML shell. The résumé is served as a static PDF.

## Hover feedback and responsive checks

Portraits and project artwork use small lifts, border highlights, and gentle zoom on devices with a mouse or trackpad. Informational cards also respond subtly. Touch screens keep a stable layout; reduced-motion preferences disable movement. The portrait stays in its original colors. Project actions also highlight their card for keyboard focus.

`npm test` includes browser-only layout checks at 320, 390, 600, 640, 768, 1024, 1280, and 1920 pixels. These verify portrait sizing and horizontal overflow. `npm run test:run` excludes browser-only layout checks because jsdom does not calculate real layout.

## Fluid typography

The portfolio type scale lives in `src/shared/styles/tokens.css`. Body text uses `--font-body` (16–18px at the default browser text size). Compact project descriptions use `--font-card-body` (15–17px), and percentage statistics use `--font-metric` rather than the project-title scale. Separate fluid tokens cover headings, controls, labels, and metadata. These use `clamp()` with rem and viewport units, so text grows smoothly and respects browser text preferences. Artwork text uses container-relative units to scale with its card. Component styles consume these tokens rather than shrinking important text to tiny pixel sizes on mobile.

The hero grows to fit its content. Browser checks cover text scaling, navigation bounds, hero spacing, and 200% browser text size. The résumé also has fluid screen typography, while its print rules remain separate.

## Deployment

Netlify deploys this GitHub repository's `main` branch. `netlify.toml` sets Node 24, `npm run build`, and `dist` as the publish directory. `/resume` and `/resume/` continue to resolve to the résumé page. Commit source and `package-lock.json`; do not commit `node_modules` or build output.

To publish a change, test it, commit it, and push to `main`. Confirm the resulting deployment in Netlify. Live website: https://nrip-portfolio.netlify.app/.

Project illustrations are labeled interface concepts, not screenshots of the repositories. Personal content and metrics were supplied by Nripdev Singh. Visual direction inspired by [Brittany Chiang's v4 portfolio](https://v4.brittanychiang.com/).
