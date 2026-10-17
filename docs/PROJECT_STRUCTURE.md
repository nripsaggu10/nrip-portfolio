# Project structure

The portfolio uses React and TypeScript. Each visual component owns its TSX markup and CSS. Hooks hold interactive behaviour; data files hold reusable content.

## Component tree

```text
src/main.tsx
└── App
    └── PortfolioLayout
        ├── Header
        ├── SocialRails
        ├── PortfolioPage
        │   ├── Hero
        │   ├── About
        │   ├── Experience
        │   │   ├── Company tabs
        │   │   ├── Role (Morgan Stanley)
        │   │   └── CareerRole (Bounteous or Aditya Birla)
        │   ├── Education
        │   ├── Projects
        │   │   ├── ProjectCard
        │   │   │   └── QueryWearArtwork or HealthFirstArtwork
        │   │   └── ProjectDialog
        │   ├── Toolbox (Technical Expertise)
        │   ├── Certifications
        │   ├── Recognition
        │   └── Contact
        └── Footer
```

## Directories

- `src/app/` contains application composition and the startup screen.
- `src/layouts/portfolio-layout/` contains navigation, footer, and social rails.
- `src/pages/portfolio/sections/` contains page features and their child components.
- `src/shared/` contains shared components, data, styles, and issuer logos.
- `src/test/` contains test setup, rendering helpers, and browser layout tests.
- `public/certificates/` contains the supplied credential PDFs.
- `public/nripdev-singh-resume.pdf` is the supplied résumé opened by header links.

## Behaviour

- `useHeader.ts` manages the menu and keyboard focus.
- `useNavigation.ts` tracks the active section and restores section URLs.
- `useExperienceTabs.ts` manages company tabs and keyboard navigation.
- `useProjects.ts` and `useProjectDialog.ts` manage project details and focus restoration.
- `useStartupScreen.ts` manages the opening logo animation.

The generated résumé page has been removed. Netlify redirects older résumé URLs to the PDF. The development server updates the portfolio automatically when source files are saved.
