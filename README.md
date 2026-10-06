# El precio de la inteligencia

Complete source project for the bilingual interactive research website **El precio de la inteligencia: Los costos ocultos de la infraestructura de IA en Chile**.

## Requirements

- Node.js 22.13 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local address shown in the terminal.

## Production build

```bash
npm install
npm run build
npm run start
```

## Project contents

- `app/` — page source, layout, interactions, bilingual content, and styling
- `public/` — favicon and social-preview artwork
- `package.json` and `package-lock.json` — dependencies and exact locked versions
- `vite.config.ts`, `next.config.ts`, and `tsconfig.json` — build and TypeScript configuration
- `.openai/hosting.json` — existing Sites hosting metadata

Generated directories such as `node_modules/`, `dist/`, `.next/`, `.vinext/`, and `.wrangler/` are intentionally excluded. They are recreated by the install and build commands above.
