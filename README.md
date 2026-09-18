# freecant

Marketing site for freecant — 1-on-1 Rocket League coaching. Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Stack

- **Next.js 14** (App Router, `src/` directory)
- **TypeScript**
- **Tailwind CSS** — dark theme by default, design tokens in [tailwind.config.ts](tailwind.config.ts) and [src/app/globals.css](src/app/globals.css)
- **Framer Motion** — scroll-in and on-load animations
- **Lucide React** — icons (a few brand marks Lucide doesn't ship — X, YouTube, TikTok, Discord — are hand-authored SVGs in `src/components/icons/social-icons.tsx`)
- **Vercel Analytics** — pageviews + custom click events

## Project structure

```
src/
  app/
    layout.tsx          # root layout, metadata, fonts, <Header>, <Analytics>
    page.tsx             # homepage — assembles all sections in order
    globals.css           # design tokens (CSS variables)
    icon.tsx               # favicon (generated, edge runtime — see note below)
    apple-icon.tsx          # iOS home-screen icon (generated)
    opengraph-image.tsx     # social share image (generated)
    design-system/page.tsx  # internal component gallery, not linked from the site
  components/
    ui/                 # Button, Section, Stat, Badge — shared primitives
    sections/           # Hero, Stats, Sessions, Reviews, About, DiscordCTA
    icons/               # hand-authored social brand SVGs
    header.tsx / Footer.tsx
  data/
    reviews.ts            # review content — see "Content you still need to fill in"
  lib/
    cn.ts                 # tiny classnames helper
```

## Local development

Requires Node.js 18.18+ (the project was built and tested on Node 24).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The homepage hot-reloads on save. `/design-system` is an internal preview page showing every UI primitive (buttons, badges, stats, etc.) — not linked anywhere in the real site, safe to ignore or delete later.

Useful scripts:

```bash
npm run dev       # local dev server
npm run build     # production build
npm run start     # run the production build locally (after `npm run build`)
npm run lint      # ESLint (Next's config, includes basic a11y rules)
npx tsc --noEmit  # type-check without emitting files
```

## Environment variables

| Variable | Purpose | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, used for `metadataBase` (resolves Open Graph / Twitter card image URLs) | `https://freecant.vercel.app` |

Set `NEXT_PUBLIC_SITE_URL` in Vercel's project environment variables once you have a real domain (see deployment steps below) — otherwise social share previews will resolve against the fallback Vercel URL.

## Content you still need to fill in

A few things were deliberately left as clearly-marked placeholders rather than invented:

- **`src/data/reviews.ts`** — 6 placeholder reviews with `"Placeholder quote — replace..."` text. Swap in real testimonials.
- **`src/components/sections/About.tsx`** — the bio paragraph is a bracketed placeholder (`[Bio placeholder — swap in your story...]`). Also has a photo placeholder box (no real headshot yet).
- **`src/components/sections/Hero.tsx`** — the right-column video placeholder (no real embed yet).
- **`src/components/Footer.tsx`** — X, YouTube, and TikTok social links are `href="#"` placeholders (Discord is live). Paste real handles into the `SOCIAL_LINKS` array.
- **`src/components/sections/Sessions.tsx`** — only 3 of your 4 products are listed (Group Cohort is excluded — marked work-in-progress with no price/URL yet).

## Analytics & event tracking

[Vercel Analytics](https://vercel.com/docs/analytics) is wired up via `<Analytics />` in `layout.tsx` — pageviews are automatic once deployed to Vercel (enable Analytics for the project in the Vercel dashboard; it's a paid add-on beyond the free tier's limits, check current pricing). It does nothing locally besides a harmless 404 in the console for `/_vercel/insights/script.js` — that route only exists on Vercel's infrastructure.

Custom click events are wired on the `Button` component via an `analyticsEvent` prop:

- `book_session_click` — Hero's "Book a session" button
- `join_discord_click` — both "Join the Discord" buttons (Hero + the Discord CTA section), tagged with `location: "hero"` / `location: "discord_cta"` so you can tell which placement converts better

Events show up in the Vercel dashboard under your project's Analytics tab once deployed.

## Design system

Colors, fonts, spacing, and radii are all defined as Tailwind theme tokens (`tailwind.config.ts`) backed by CSS variables (`globals.css`) — swap a variable and it updates everywhere. Current tokens:

- Background `#0A0A0B`, foreground `#F5F5F7`, accent `#FF5722`
- Body font: Inter (`font-sans`) · Headings: Sora (`font-display`)

Visit `/design-system` locally to see every shared component rendered together.

## Deploying to Vercel

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new), import the repo. Vercel auto-detects Next.js — no build config needed.
3. Add the `NEXT_PUBLIC_SITE_URL` environment variable (Project Settings → Environment Variables) once you know your final domain.
4. Deploy. Every push to `main` auto-deploys to production; every PR/branch gets its own preview URL.
5. (Optional) Enable Web Analytics for the project under the Vercel dashboard's Analytics tab.
6. To add a custom domain: Project Settings → Domains → add your domain, then point its DNS at Vercel (an `A`/`ALIAS` record for an apex domain, or a `CNAME` for a subdomain like `www`) per the instructions Vercel shows for your specific domain.
