# Hiking East Asia

A multilingual hiking guide for Malaysia, Singapore and the wider Southeast and East Asian region, built for `hiking.bbmw0.com`. Every trail page links to the real government or park authority that issues its permit, states current best/avoid months, and covers safety, access and what to bring.

All thirteen countries are live: Malaysia, Singapore, Thailand, Indonesia, Vietnam, the Philippines, Brunei, Japan, South Korea, Taiwan, Hong Kong, mainland China and North Korea. Each has researched trail areas with real permit/authority links, fees, best/avoid months, safety notes and what to bring, translated across all six locales. A small number of areas were deliberately substituted for a country's single most famous trail because research found it currently closed or inaccessible to independent trekkers rather than because it was overlooked: Taal Volcano (Philippines, active eruption risk), the classic Taroko Gorge trails (Taiwan, post-2024-earthquake closures not expected to fully reopen until 2031) and the Tiger Leaping Gorge High Trail (mainland China, closed to independent trekkers under a recurring rockfall/landslide pattern as of mid-2026) are all noted in the relevant country's git history rather than featured as flagship recommendations.

## Languages

English (UK), Bahasa Melayu, Mandarin (simplified), Cantonese (traditional, Hong Kong usage), Tamil and Arabic (right-to-left), routed as `/en/`, `/ms/`, `/zh-cn/`, `/zh-hk/`, `/ta/`, `/ar/`. All UI chrome and every country's trail content is translated in full. These are AI translations; before public launch, have a native speaker of each language proofread `src/i18n/ui.ts` and the country files under `src/data/`, particularly the Cantonese (colloquial register) and Arabic (formal MSA) copy.

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
    [country]/       one template for every country page and one for every trail page
```

## Adding a new trail or area

Add an entry to that country's file under `src/data/` following the `Area` type in `src/data/types.ts`. Every field that varies by language is a `LocalizedString`/`LocalizedList` object keyed by locale; fill in all six. The trail page, its country-page card, the map pin and the contents menu all come from `src/pages/[locale]/[country]/[slug].astro`, so there is no page to write.

## Adding a new country

1. Add the slug to `CountrySlug` in `src/data/types.ts`, then a `CountryMeta` entry to `src/data/countries.ts` with `status: 'coming-soon'`.
2. It appears automatically in the Countries menu and gets a placeholder page at `/<locale>/<slug>/`.
3. When you have real trail data, create `src/data/<country>.ts`, add it to `src/data/all-areas.ts`, and flip the country's `status` to `'live'`. The country page and every trail page are generated from the shared templates in `src/pages/[locale]/[country]/`; nothing needs copying.

## Images

Every hero and card is a photo slot. Until a photograph is added, it shows `TerrainArt.astro`, a generated gradient and contour-line illustration labelled "illustrative image, not a photograph" in every language. No photographs ship yet: Wikimedia Commons, park authority sites and stock libraries were not reachable from the environment this site was built in.

To add one:

1. Save the file as `public/photos/<key>.jpg`, where the key is `areas/<country>/<area-slug>` for a trail (e.g. `areas/malaysia/mount-kinabalu`) or `countries/<country>` for a country.
2. Add the same key to `src/data/photo-credits.json` with `title`, `author`, `licence` (the exact short name from the source page, e.g. `CC BY-SA 4.0`), `sourceUrl`, and `ext` if the file is not a `.jpg`.

The photo then replaces the illustration on that trail's page and card, or on that country's page and homepage card, with its credit printed underneath. A photo with no credit entry is never shown, and the test suite fails the build if a credit has no file or a file has no credit. Use the hiking club's own trip photos, or correctly licensed shots of the named location. Don't use AI-generated images of named real places unless they are labelled as illustrative: an inaccurate render of a specific summit or trail misleads readers on a safety-relevant site.

## Trust & safety programme

The WhatsApp export attached to the original brief for this site turned out to be a hiking community's group chat dealing with an active trip-organiser scam (see the "Privacy issue with the uploads" note in the session history; no names, numbers or allegations from it were used anywhere on the site). Rather than publish any of that, `/trips/`, `/safety/`'s "verify before you pay" checklist and its "official booking channels" list are a direct, static-site-friendly response to the same problem:

- **`src/data/trips.ts`**: the club's own official trips. Nothing here is auto-generated or user-submitted; add an entry only for a trip you (the site owner) are personally organising or vouching for, since the page presents it as vetted. Each entry links to the relevant `Area`'s permit page (`areaSlug` + `country` must match a real slug in `malaysia.ts`/`singapore.ts`) and to a `contactUrl` (a `mailto:`, a form link, or a WhatsApp/Telegram invite you control).
- **`src/data/channels.ts`**: not hand-maintained. It's derived automatically from every area's `permit.authorityName`/`permit.url`, so the "official booking channels" list on `/safety/` can never drift out of sync with the permit boxes on the trail pages.
- **`src/components/VerifyChecklist.astro`**: a client-side, localStorage-backed checklist (no backend). Deliberately a process checklist rather than a whitelist of "trusted" named operators, since a name-based list would itself need constant re-verification to stay honest, and getting it wrong would be worse than not having it.
- **`src/data/config.ts`**: `SAFETY_CONTACT_EMAIL` powers the "report a concern" mailto button on `/safety/`. It is currently a placeholder (`safety@bbmw0.com`); set it to a real, monitored address before launch.

This intentionally stops short of open trip listings, member accounts, or public organiser reviews: a platform anyone can post to is exactly the vector the original scam used, and moderating that safely needs real backend infrastructure (auth, a database, a moderation queue) that wasn't in scope for this pass. If that's wanted later, `app-forge`-style Supabase scaffolding is the natural next step, kept as a deliberately separate decision rather than something bolted on here.

## Permit and season data

Sourced from official authority websites and cross-checked between May and September 2026, across every authority linked from `/safety/`'s official channels list: Sabah Parks, PERHILITAN, Pahang/Sarawak Forestry and Petaling Jaya City Council (Malaysia); NParks (Singapore); Thailand's DNP; Indonesia's national park offices; Vietnam's park management boards; the Philippines' DENR-run protected area offices; Brunei Forestry; Japan's prefectural and national park authorities; South Korea's Korea National Park Service; Taiwan's Hike Smart Taiwan / national park services; Hong Kong's AFCD; and mainland China's scenic-area administrative committees (Huangshan, Wulingyuan/Zhangjiajie, Mount Emei, Deqin County for Meili Snow Mountain). Fees and booking processes change; re-verify against the linked official source before publishing an update, and keep the pattern of always linking to the primary authority rather than a third-party booking agent.

## Keeping dates live without a rebuild

The footer's copyright year is computed from the visitor's own clock (`data-live-year`, set in `BaseLayout.astro`), not baked in at build time, so it never goes stale between deploys. A small Astro integration in `astro.config.mjs` also writes `dist/version.json` with the build timestamp; every page silently fetches it on load and again when the tab regains focus, and records in `localStorage` whether a newer deploy has shipped. This is intentionally invisible: no popup, no forced reload, nothing for a visitor to notice. It does not, and cannot, auto-refresh the permit/fee/season facts themselves, since those come from manual research against each authority's own site, not a live feed; re-verifying them stays a manual step (see above).

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # astro check + static build to dist/
npm run preview
```

`dist/` is a static site. GitHub Pages builds and serves it from `main`; see Hosting below.

## Licence and reuse

Proprietary, all rights reserved. See [`LICENSE`](LICENSE). The repository is
public so the site can be served from GitHub Pages, not so the work can be
reused. Photographs under `public/photos/` are
each used under their own licence, recorded in `src/data/photo-credits.json`.

Forking cannot be disabled on a public GitHub repository, and no file in a
repository can prevent it. What is and is not enforceable, and why public was
chosen anyway, is set out in [`docs/REPOSITORY-POLICY.md`](docs/REPOSITORY-POLICY.md).

## Hosting

GitHub Pages is the only host. `.github/workflows/deploy-pages.yml` publishes
`hiking.bbmw0.com` on every push to `main`. The domain and DNS settings, the
retired Vercel project, and what a host without response headers means for
security are written out in [`docs/HOSTING.md`](docs/HOSTING.md).
