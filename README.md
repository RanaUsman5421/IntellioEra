# IntellioEra React

Complete React JavaScript conversion of the IntellioEra website. The page markup is separated by route into components while the original visual system and animation runtime are preserved for pixel-level fidelity.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Structure

- `src/pages/`: Home, Solutions, Pricing, Blogs, FAQ, Demo, Contact, Growth, About, Privacy and Terms
- `src/components/`: shared header, footer, background, overlays and raw-markup boundary
- `src/hooks/`: React lifecycle integration
- `src/legacyRuntime.js`: original animation and interaction engine scoped to the React application
- `src/styles/global.css`: complete original design system, themes and responsive rules
