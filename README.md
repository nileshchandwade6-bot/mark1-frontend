# MARK-1 — Frontend (v1)

Next.js App Router + TypeScript + Tailwind + Supabase.

## Setup

1. `npm install`
2. Copy `.env.local.example` → `.env.local` and fill in your **existing**
   Supabase project's URL and anon key (Supabase dashboard → Settings → API).
   Do not run any schema SQL again — this app reads your existing tables.
3. `npm run dev` → open http://localhost:3000

## What's built (v1)

- `/login`, `/signup` — Supabase Auth (email/password)
- `/dashboard` — protected, real data only, no mock data:
  - Today's Tasks, Projects, Clients, Earnings summaries
  - Daily Dashboard summary (reads `daily_dashboards` for today's date, if present)
  - Profile section + sign out
  - AI Assistant panel (placeholder — button disabled until `/api/ai/chat` exists)
- `middleware.ts` protects `/dashboard` and bounces logged-in users away from `/login`, `/signup`

## Not built yet (by design, per scope)

Full CRM, invoicing, learning system, and AI automation routes — next phases.

## Design system

Token system documented inline in `tailwind.config.ts` — "Command Deck":
deep indigo nav (`ink`), cool off-white content (`paper`), brass/gold signature
accent, signal-blue for AI features. Space Grotesk (display) + Inter (body) +
IBM Plex Mono (data/numbers).
