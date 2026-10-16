# Nripdev Singh — React portfolio

Personal portfolio built with React 19.3, TypeScript, and Vite. It preserves the original navy-and-mint design, project illustrations, mobile layout, and printable résumé.

## Development

On macOS, double-click `run.command` in Finder to start the project in a separate Terminal window and open Chrome at `http://localhost:5173/`. It selects Node through nvm and installs dependencies if missing. Leave this window running: saving source files updates the browser automatically, while your VS Code terminal stays free for Git commands. Press Control+C in the server window to stop it. After restarting your Mac, launch it again.

Only run one development server on port 5173 at a time. You can also launch with `./run.command` from the project folder. If the file loses executable permission after copying, run `chmod +x run.command` once.

Use Node.js 24 (see `.nvmrc`).

```sh
npm ci
npm run dev
```

The portfolio is at `/`; the résumé is at `/resume.html`. Each page has its own React entry and stylesheet. No backend or environment secrets are required.

## Checks and production build

```sh
npm run test:run
npm run build
npm run preview
```

`build` checks TypeScript and produces the deployable `dist/` directory. Tests exercise menu behavior, both project dialogs, focus restoration, clipboard success/failure, navigation targets, and résumé printing.

### Live tests in Chrome

Run `npm test` to open Google Chrome with the Vitest browser dashboard. The tests execute in the real browser and automatically rerun when you save a test or an imported source file. Keep the terminal running; press Control+C to stop. Chrome must be installed and Node 24 selected in this terminal. The development server does not need to be running separately.

The browser configuration uses Vitest's preview provider and Testing Library interactions. Dialog and observer APIs use the real browser implementations. The dashboard lists each passing or failing test. `npm run test:run` retains the fast, one-time jsdom run for pre-commit checks and CI without opening a browser.

## Source map

- `src/App.tsx` composes the portfolio.
- `src/components/` contains sections, illustrations, navigation, and dialogs.
- `src/data/projects.ts` supplies project cards and dialog content from one typed source.
- `src/hooks/` contains scroll observation and clipboard feedback.
- `src/styles/portfolio.css` retains the original responsive design.
- `src/components/Resume.tsx` and `src/styles/resume.css` define the printable résumé.
- `public/favicon.svg` is the initials mark.

## Deployment

Netlify deploys this GitHub repository's `main` branch. `netlify.toml` sets Node 24, `npm run build`, and `dist` as the publish directory. `/resume` and `/resume/` continue to resolve to the résumé page. Commit source and `package-lock.json`; do not commit `node_modules` or build output.

To publish a change, test it, commit it, and push to `main`. Confirm the resulting deployment in Netlify. Live website: https://nrip-portfolio.netlify.app/.

Project illustrations are labeled interface concepts, not screenshots of the repositories. Personal content and metrics were supplied by Nripdev Singh. Visual direction inspired by [Brittany Chiang's v4 portfolio](https://v4.brittanychiang.com/).
