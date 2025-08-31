# Copilot Instructions for Food Website

## Overview
This codebase is a full-stack food website with a React frontend (Vite) and a TypeScript/Node backend. The architecture is split into two main folders:
- `app/`: Frontend (React + Vite)
- `server/`: Backend (Node.js + TypeScript)

## Architecture & Data Flow
- **Frontend (`app/`)**: Uses React (see `src/App.jsx`, `src/main.jsx`). Static assets are in `src/assets/` and `public/`.
- **Backend (`server/`)**: Entry point is `src/index.ts`. Serves images from `public/images/`. TypeScript config is in `tsconfig.json`.
- **Communication**: Frontend and backend are separated; integration is likely via HTTP API (not directly visible, but implied by structure).

## Developer Workflows
- **Frontend**:
  - Install dependencies: `npm install` in `app/`
  - Start dev server: `npm run dev` in `app/`
  - Build: `npm run build` in `app/`
- **Backend**:
  - Install dependencies: `npm install` in `server/`
  - Start server: `npm start` or `npm run dev` in `server/` (check `server/package.json` for exact scripts)
  - TypeScript compilation: Managed via `tsconfig.json`

## Conventions & Patterns
- **File Structure**: 
  - Frontend code in `app/src/`, assets in `app/src/assets/`, static files in `app/public/`
  - Backend code in `server/src/`, images in `server/public/images/`
- **React**: Main entry is `main.jsx`, root component is `App.jsx`.
- **TypeScript**: All backend logic is in TypeScript (`server/src/`).
- **Vite**: Used for frontend build and dev server (`vite.config.js`).

## Integration Points
- **Static Assets**: Images for food items are served from `server/public/images/`.
- **External Dependencies**: Managed via `package.json` in both `app/` and `server/`.
- **No monorepo tooling detected**: Each part manages its own dependencies/scripts.

## Examples
- To add a new food image, place it in `server/public/images/` and reference it from the frontend as needed.
- To add a new React component, create it in `app/src/` and import it in `App.jsx`.

## Key Files
- `app/src/App.jsx`, `app/src/main.jsx`: Main React logic
- `app/package.json`, `server/package.json`: Dependency and script management
- `server/src/index.ts`: Backend entry point
- `vite.config.js`: Frontend build config

---

**For AI agents:**
- Always check both `app/` and `server/` for relevant code and scripts.
- When updating build or dev workflows, ensure changes are reflected in the correct `package.json`.
- Follow the file structure conventions for new code/assets.
- If unsure about integration, clarify how frontend and backend communicate (API endpoints, static assets, etc.).
