# Frontend (Nuxt 3 + Tailwind CSS)

This folder contains the Nuxt 3 frontend for the Review Site.

## Quick Start

See the main project [README.md](../README.md) and [QUICKSTART.md](../QUICKSTART.md) for complete setup instructions.

## Local Development

```powershell
cd frontend
npm install
npm run dev
```

Frontend will start at `http://localhost:3000`.

## Configuration

The frontend reads the Strapi API base URL from the environment variable `STRAPI_URL`. 
- **Default (dev):** `http://localhost:1337`
- **Production:** Set via Netlify environment variables

## Pages

- **`/`** — List of reviews with search
- **`/review/[slug]`** — Full review detail page

## Building

```powershell
npm run build      # Build for production
npm run generate   # Generate static site to .output/public
npm run preview    # Preview production build locally
```

## Styling

Uses **Tailwind CSS** for responsive, utility-first styling. Configured in:
- `tailwind.config.cjs`
- `postcss.config.cjs`
- `assets/styles/tailwind.css`

## Deployment

For production deployment to Netlify, see [DEPLOYMENT.md](../DEPLOYMENT.md).

The `netlify.toml` file configures:
- Build command: `npm run generate`
- Publish directory: `.output/public`
- Environment variables: `STRAPI_URL`
