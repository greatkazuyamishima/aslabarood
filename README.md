# ASLA BAROOD

A React + Vite firearms database UI with category filtering, route-based navigation, and search.

## Tech Stack

- React 19
- Vite 8
- React Router DOM 7
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- ESLint 10

## Features

- Sidebar category navigation
- Home page with searchable card grid
- Dynamic category route: `/:type`
- Card UI with image, metadata, and responsive layout
- Tailwind-based custom styling and typography

## Project Structure

```text
.
├── data.json
├── public/
│   └── images/                 # Static images served from /images/*
├── src/
│   ├── components/
│   │   ├── AslaBaroodCard.jsx
│   │   ├── Hero.jsx
│   │   └── SideBar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── CategoryPage.jsx
│   ├── App.jsx
│   ├── global.css
│   └── main.jsx
├── eslint.config.js
├── package.json
└── vite.config.js
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

### 5) Lint code

```bash
npm run lint
```

## Routing

- `/` -> Home page
- `/:type` -> Category page filtered by `typeId`

Example category URLs:

- `/pistol`
- `/revolver`
- `/ar`
- `/shotgun`
- `/smg`
- `/sniper`
- `/explosive`

## Data Model (`data.json`)

Each weapon object includes:

- `id`
- `name`
- `type`
- `typeId` (used for route/category filtering)
- `shortDescription`
- `detailedDescription`
- `year`
- `country`
- `manufacturer`
- `caliber`
- `action`
- `weightKg`
- `barrelLengthMm`
- `effectiveRangeM`
- `fireModes`
- `magazineCapacity`
- `designedBy`
- `usedBy`
- `variants`
- `image` (public URL path, e.g. `/images/glock17.png`)

## Images and Static Assets

This app expects card and hero images to be served from `public/images`.

Important rules:

- Keep image references in `data.json` as absolute public paths: `/images/file.png`
- Ensure matching files exist in `public/images`
- Vercel only serves files that are actually present in `public`

If an image path is wrong or missing in `public/images`, production will return `404` for that file.

## Deployment (Vercel)

No special config is required for a standard Vite deploy.

Recommended checks before deploy:

- Run `npm run build` locally
- Confirm all `data.json` image paths exist in `public/images`
- Confirm routes work after refresh (`/`, `/:type`)

## Development Notes

- Sidebar category links should stay aligned with `typeId` values in `data.json`
- Category filtering is implemented in `CategoryPage.jsx` using the route param
- Search filtering is implemented in `Home.jsx` by weapon name

## Future Improvements

- Add dedicated details page per item (`/item/:id`)
- Add empty-state UI for no category/search results
- Add image fallback for missing assets
- Add unit/component tests