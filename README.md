# Nripdev Singh — React portfolio

Personal portfolio built with React 19.3, TypeScript, and Vite. It preserves the original navy-and-mint design, project illustrations, mobile layout, and printable résumé.

## Development

Use Node.js 24 (see `.nvmrc`).

```sh
npm ci
npm run dev
```

The portfolio is at `/`; the résumé is at `/resume.html`. Each page has its own React entry and stylesheet. No backend or environment secrets are required.

## Checks and production build

```sh
npm test
npm run build
npm run preview
```

`build` checks TypeScript and produces the deployable `dist/` directory. Tests exercise menu behavior, both project dialogs, focus restoration, clipboard success/failure, navigation targets, and résumé printing. Native focus trapping and responsive layout are also checked in a real browser.

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
