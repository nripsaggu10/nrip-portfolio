# Project structure

This is the implemented React + TypeScript structure. Existing section URLs, résumé URL, responsive design, dialogs, clipboard feedback, and startup commands are preserved.

## File responsibilities

| File | Purpose |
| --- | --- |
| `Component.tsx` | Declarative React markup and connecting props/hooks to the view |
| `useComponent.ts` | State, effects, refs, and event-handling behavior |
| `Component.css` | Component styles, including its responsive rules |
| `*.data.ts` | Reusable content and configuration |
| `*.types.ts` | TypeScript data contracts |
| `Component.test.tsx` | Tests for the relevant component/feature |

Display-only components do not need empty hooks. Composition-only components do not need empty CSS files. Tests cover behavior rather than duplicating every static markup file.

## Parent–child component tree

```text
main.tsx
└── App
    └── PortfolioLayout
        ├── Header
        ├── SocialRails
        ├── PortfolioPage (passed as children)
        │   ├── Hero
        │   ├── About
        │   │   └── Reveal
        │   ├── Experience
        │   │   ├── Reveal
        │   │   │   └── Role
        │   │   └── Education
        │   ├── Projects
        │   │   ├── ProjectCard (one per project)
        │   │   │   └── Reveal
        │   │   │       ├── QueryWearArtwork OR HealthFirstArtwork
        │   │   │       └── Project information and details button
        │   │   ├── Recognition → Reveal
        │   │   ├── Toolbox → Reveal
        │   │   └── ProjectDialog (when a project is selected)
        │   └── Contact
        │       └── Toast
        └── Footer

resume.tsx
└── ResumePage
    ├── ResumeHeader
    └── ResumeSection (experience, projects, skills, education, achievement)
```

## Where behavior lives

- `useHeader.ts`: menu state, Escape/outside-click handling, focus restoration.
- `useNavigation.ts`: scroll position, active section, direct section navigation.
- `useProjects.ts`: selected project and the button to restore focus to.
- `useProjectDialog.ts`: native dialog lifecycle, scroll lock, cancel/backdrop handling.
- `useEmailCopy.ts`: clipboard access, success/failure messages, timeout cleanup.
- `useReveal.ts`: visibility observation and reduced-motion handling.
- `useResumePrint.ts`: résumé print action.

## Data ownership

`shared/data/profile.data.ts` supplies repeated contact URLs and email values. Each project owns its content in `querywear/querywear.data.ts` or `healthfirst/healthfirst.data.ts`. `projects.data.ts` assembles the list; the same objects feed cards and dialogs. `project.types.ts` defines the data shape. Add new project entries there instead of copying a complete card component.

## Styling

Each visual component imports its CSS. Shared tokens, reset, typography, and utilities are imported by the portfolio entry first. Component media queries live with the component rather than in a distant global stylesheet. Common artwork styles live with `ProjectCard`; project-specific artwork styles live beside each illustration. Résumé styles load only through the résumé entry.

## Testing

Feature tests live beside their sections. `src/test/` contains only common setup and the shared portfolio render helper. `npm test` discovers `src/**/*.test.tsx`, opens the browser dashboard, and watches for changes. `npm run test:run` runs the same assertions once in jsdom. `npm run build` checks TypeScript and builds both entry pages.

## Full file tree

```text
nrip-portfolio/
├── docs/
│   └── PROJECT_STRUCTURE.md
├── public/
│   └── favicon.svg
├── src/
│   ├── app/
│   │   └── App.tsx
│   ├── layouts/
│   │   └── portfolio-layout/
│   │       ├── components/
│   │       │   ├── footer/
│   │       │   │   ├── Footer.css
│   │       │   │   └── Footer.tsx
│   │       │   ├── header/
│   │       │   │   ├── Header.css
│   │       │   │   ├── Header.test.tsx
│   │       │   │   ├── Header.tsx
│   │       │   │   ├── navigation.data.ts
│   │       │   │   ├── useHeader.ts
│   │       │   │   └── useNavigation.ts
│   │       │   └── social-rails/
│   │       │       ├── SocialRails.css
│   │       │       └── SocialRails.tsx
│   │       ├── PortfolioLayout.css
│   │       └── PortfolioLayout.tsx
│   ├── pages/
│   │   ├── portfolio/
│   │   │   ├── sections/
│   │   │   │   ├── about/
│   │   │   │   │   ├── assets/
│   │   │   │   │   │   └── nripdev-singh.jpg
│   │   │   │   │   ├── About.css
│   │   │   │   │   └── About.tsx
│   │   │   │   ├── contact/
│   │   │   │   │   ├── Contact.css
│   │   │   │   │   ├── Contact.test.tsx
│   │   │   │   │   ├── Contact.tsx
│   │   │   │   │   └── useEmailCopy.ts
│   │   │   │   ├── experience/
│   │   │   │   │   ├── components/
│   │   │   │   │   │   ├── education/
│   │   │   │   │   │   │   ├── Education.css
│   │   │   │   │   │   │   └── Education.tsx
│   │   │   │   │   │   └── role/
│   │   │   │   │   │       ├── Role.css
│   │   │   │   │   │       └── Role.tsx
│   │   │   │   │   ├── Experience.css
│   │   │   │   │   └── Experience.tsx
│   │   │   │   ├── hero/
│   │   │   │   │   ├── Hero.css
│   │   │   │   │   └── Hero.tsx
│   │   │   │   └── projects/
│   │   │   │       ├── components/
│   │   │   │       │   ├── project-card/
│   │   │   │       │   │   ├── ProjectCard.css
│   │   │   │       │   │   └── ProjectCard.tsx
│   │   │   │       │   ├── project-dialog/
│   │   │   │       │   │   ├── ProjectDialog.css
│   │   │   │       │   │   ├── ProjectDialog.tsx
│   │   │   │       │   │   └── useProjectDialog.ts
│   │   │   │       │   └── toolbox/
│   │   │   │       │       ├── Toolbox.css
│   │   │   │       │       └── Toolbox.tsx
│   │   │   │       ├── healthfirst/
│   │   │   │       │   ├── healthfirst.data.ts
│   │   │   │       │   ├── HealthFirstArtwork.css
│   │   │   │       │   └── HealthFirstArtwork.tsx
│   │   │   │       ├── querywear/
│   │   │   │       │   ├── querywear.data.ts
│   │   │   │       │   ├── QueryWearArtwork.css
│   │   │   │       │   └── QueryWearArtwork.tsx
│   │   │   │       ├── recognition/
│   │   │   │       │   ├── Recognition.css
│   │   │   │       │   └── Recognition.tsx
│   │   │   │       ├── project.types.ts
│   │   │   │       ├── projects.data.ts
│   │   │   │       ├── Projects.test.tsx
│   │   │   │       ├── Projects.tsx
│   │   │   │       └── useProjects.ts
│   │   │   ├── PortfolioPage.test.tsx
│   │   │   └── PortfolioPage.tsx
│   │   └── resume/
│   │       ├── components/
│   │       │   ├── resume-header/
│   │       │   │   ├── ResumeHeader.css
│   │       │   │   └── ResumeHeader.tsx
│   │       │   └── resume-section/
│   │       │       ├── ResumeSection.css
│   │       │       └── ResumeSection.tsx
│   │       ├── ResumePage.css
│   │       ├── ResumePage.test.tsx
│   │       ├── ResumePage.tsx
│   │       └── useResumePrint.ts
│   ├── shared/
│   │   ├── components/
│   │   │   ├── reveal/
│   │   │   │   ├── Reveal.css
│   │   │   │   ├── Reveal.tsx
│   │   │   │   └── useReveal.ts
│   │   │   └── toast/
│   │   │       ├── Toast.css
│   │   │       └── Toast.tsx
│   │   ├── data/
│   │   │   └── profile.data.ts
│   │   └── styles/
│   │       ├── reset.css
│   │       ├── tokens.css
│   │       ├── typography.css
│   │       └── utilities.css
│   ├── test/
│   │   ├── renderPortfolio.tsx
│   │   ├── setup.browser.ts
│   │   └── setup.ts
│   ├── main.tsx
│   └── resume.tsx
├── .gitignore
├── .nvmrc
├── index.html
├── netlify.toml
├── package-lock.json
├── package.json
├── README.md
├── resume.html
├── run.command
├── tsconfig.json
├── vite.config.ts
└── vitest.browser.config.ts
```
