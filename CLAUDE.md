# CLAUDE.md

Full-stack boilerplate: React + Vite frontend (`client/`), Express + Knex/SQLite backend (`server/`), shared types in `models/`.

## Where the real code lives

- `client/` — React app. Components, hooks, `apis/` (frontend fetch wrappers), routes.
- `server/` — Express. `routes/` (endpoints), `db/` (Knex connection, queries, migrations, seeds), `auth0.ts` (JWT middleware).
- `models/` — TypeScript interfaces shared by both sides.

Everything else at the root is tool config. Don't read it unless the task is about that tool.

## Config files — skip by default

`vite.config.js`, `tsconfig.json`, `tailwind.config.js`, `postcss.config.js`, `.aiexclude` are stock boilerplate. Read one only when the task actually touches it (e.g. the API proxy, a TS compiler error, Tailwind's `content` globs).

`package-lock.json` is generated — never read or hand-edit it. `package.json` is worth reading for scripts and dependency versions.

## Commands

- `npm run dev` — client + server in parallel
- `npm run build` / `npm start`
- `npm test` (vitest), `npm run lint`, `npm run format`
- `npm run knex migrate:latest` / `npm run knex seed:run`

## Conventions

- ESM (`"type": "module"`). Prettier: no semicolons, single quotes.
- New DB table: migration in `server/db/migrations/`, queries in `server/db/`, route in `server/routes/`, type in `models/`.
