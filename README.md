# Hiking East Asia

A multilingual hiking guide for Malaysia, Singapore and the wider Southeast and East Asian region, built for `hiking.bbmw0.com`. Every trail page links to the real government or park authority that issues its permit, states current best/avoid months, and covers safety, access and what to bring.

Phase one covers Malaysia (Mount Kinabalu, Taman Negara, Cameron Highlands, Gunung Mulu, Penang National Park, Bukit Gasing) and Singapore (Central Catchment/MacRitchie, Bukit Timah, Southern Ridges, Pulau Ubin & Chek Jawa) in full. The other ten countries in the nav (Thailand, Indonesia, Vietnam, Philippines, Brunei, Japan, South Korea, Taiwan, Hong Kong, mainland China) are "coming soon" placeholders ready for the same treatment.

## Languages

English (UK), Bahasa Melayu, Mandarin (simplified), Cantonese (traditional, Hong Kong usage), Tamil and Arabic (right-to-left), routed as `/en/`, `/ms/`, `/zh-cn/`, `/zh-hk/`, `/ta/`, `/ar/`. All UI chrome and the Malaysia/Singapore content is translated in full. These are AI translations; before public launch, have a native speaker of each language proofread `src/i18n/ui.ts`, `src/data/malaysia.ts` and `src/data/singapore.ts`, particularly the Cantonese (colloquial register) and Arabic (formal MSA) copy.

## Stack

- [Astro](https://astro.build) (static output) + [Tailwind CSS v4](https://tailwindcss.com)
- No content collections/CMS: all trail and permit data lives in typed TypeScript modules under `src/data/`, translated inline per locale. This keeps every language in sync with the same source facts.
- i18n is hand-rolled (`src/i18n/`), not Astro's built-in i18n routing, so that trail pages can be generated once from data rather than duplicated per language.

## Structure

```
src/
  data/            trail + country facts (permits, seasons, highlights), typed, one file per country
  i18n/             locale list, UI string dictionary, helpers
  components/       Header, Footer, cards, permit/season boxes, TerrainArt (illustrative art, see below)
  layouts/          BaseLayout (fonts, <html lang/dir>, reveal-on-scroll script)
  pages/[locale]/   every route, generated per language via getStaticPaths
```

## Adding a new trail or area

Add an entry to `malaysiaAreas` / `singaporeAreas` (or a new country file) following the `Area` type in `src/data/types.ts`. Every field that varies by language is a `LocalizedString`/`LocalizedList` object keyed by locale; fill in all six. The page at `[locale]/<country>/[slug].astro` picks it up automatically.

## Adding a new country

1. Add a `CountryMeta` entry to `src/data/countries.ts` with `status: 'coming-soon'`.
2. It appears automatically in the nav's "more countries" grid and gets a stub page at `/<locale>/<slug>/`.
3. When you have real trail data, create `src/data/<country>.ts`, and copy `src/pages/[locale]/malaysia/` (both `index.astro` and `[slug].astro`) into a same-named folder, swapping the import. Flip the country's `status` to `'live'` in `countries.ts`.

## Images

No photographs are embedded. Real photo sourcing (Wikimedia Commons, park authority sites, stock libraries) was not reachable from the environment this site was built in, and this account's AI image-generation connectors (Higgsfield, Artlist, Krea) were out of credits at build time. Every hero and card instead uses `TerrainArt.astro`, a generated gradient + contour-line illustration, clearly labelled "illustrative image, not a photograph" in every language. Swap these for real photography (ideally the hiking club's own trip photos, or correctly licensed/attributed shots of each named location) before treating the site as launch-ready; do not replace them with AI-generated images of the named real locations without disclosing that they're illustrative, since an inaccurate AI render of a specific summit or trail is actively misleading on a safety-relevant hiking site.

## Trust & safety programme

The WhatsApp export attached to the original brief for this site turned out to be a hiking community's group chat dealing with an active trip-organiser scam (see the "Privacy issue with the uploads" note in the session history; no names, numbers or allegations from it were used anywhere on the site). Rather than publish any of that, `/trips/`, `/safety/`'s "verify before you pay" checklist and its "official booking channels" list are a direct, static-site-friendly response to the same problem:

- **`src/data/trips.ts`**: the club's own official trips. Nothing here is auto-generated or user-submitted; add an entry only for a trip you (the site owner) are personally organising or vouching for, since the page presents it as vetted. Each entry links to the relevant `Area`'s permit page (`areaSlug` + `country` must match a real slug in `malaysia.ts`/`singapore.ts`) and to a `contactUrl` (a `mailto:`, a form link, or a WhatsApp/Telegram invite you control).
- **`src/data/channels.ts`**: not hand-maintained. It's derived automatically from every area's `permit.authorityName`/`permit.url`, so the "official booking channels" list on `/safety/` can never drift out of sync with the permit boxes on the trail pages.
- **`src/components/VerifyChecklist.astro`**: a client-side, localStorage-backed checklist (no backend). Deliberately a process checklist rather than a whitelist of "trusted" named operators, since a name-based list would itself need constant re-verification to stay honest, and getting it wrong would be worse than not having it.
- **`src/data/config.ts`**: `SAFETY_CONTACT_EMAIL` powers the "report a concern" mailto button on `/safety/`. It is currently a placeholder (`safety@bbmw0.com`); set it to a real, monitored address before launch.

This intentionally stops short of open trip listings, member accounts, or public organiser reviews: a platform anyone can post to is exactly the vector the original scam used, and moderating that safely needs real backend infrastructure (auth, a database, a moderation queue) that wasn't in scope for this pass. If that's wanted later, `app-forge`-style Supabase scaffolding is the natural next step, kept as a deliberately separate decision rather than something bolted on here.

## Permit and season data

Sourced from official authority websites and cross-checked in September 2026 (Sabah Parks, PERHILITAN, Pahang/Sarawak Forestry, Petaling Jaya City Council, Singapore's NParks). Fees and booking processes change; re-verify against the linked official source before publishing an update, and keep the pattern of always linking to the primary authority rather than a third-party booking agent.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # astro check + static build to dist/
npm run preview
```

`dist/` is a static site: deploy it to whatever host serves the rest of bbmw0.com (Netlify, Vercel, Cloudflare Pages, S3+CDN, etc.) under the `hiking` subdomain.
