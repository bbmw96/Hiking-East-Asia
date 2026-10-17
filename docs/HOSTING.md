# Hosting

GitHub Pages is the site's only host. `.github/workflows/deploy-pages.yml`
builds and publishes it on every push to `main`. Vercel was retired in October
2026, after its free plan's storage filled with old deployment snapshots (the
built site itself is about 32 MB).

## Moving `hiking.bbmw0.com` onto GitHub Pages

Three settings live outside the repository. Do them in this order: GitHub asks
for the custom domain to be added on its side before DNS points at it, so no
other GitHub account can claim the subdomain in between.

1. **GitHub**, Settings, Pages, Custom domain: `hiking.bbmw0.com`, Save.
   Then Actions, Deploy to GitHub Pages, Run workflow. The build reads its
   base path from the Pages settings, so it has to run once after the domain
   is set to produce links for the domain root.
2. **Squarespace**, Domains, `bbmw0.com`, DNS: change the `hiking` CNAME record
   from `cname.vercel-dns.com` to `bbmw96.github.io`.
3. **GitHub**, Settings, Pages: once the DNS check passes and the certificate
   is issued, tick Enforce HTTPS.

Until step 2 propagates, visitors still reach the last Vercel deployment.
Between steps 2 and 3, HTTPS can show a certificate warning for up to an hour
while GitHub issues the certificate. Afterwards the old address,
`bbmw96.github.io/Hiking-East-Asia/`, redirects to `hiking.bbmw0.com`.

## Retiring Vercel

`vercel.json` holds a single setting, `git.deploymentEnabled: false`. It stops
Vercel building on every push, so it stops consuming storage, without taking
down what Vercel is already serving. A test keeps that setting in place.

Once `hiking.bbmw0.com` answers from GitHub Pages:

- In Vercel, remove the domain from the `hiking-east-asia` project, then delete
  the project.
- Delete `vercel.json` from the repository.

## What a host without response headers means

GitHub Pages cannot send custom response headers. Vercel used to send a CSP,
HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy and the
cross-origin isolation set.

| Protection | On GitHub Pages |
|---|---|
| Content-Security-Policy | Kept, as a meta tag on every page (`astro.config.mjs`). It is stricter than the old header: inline scripts are allowed by hash, not by `'unsafe-inline'`. |
| Referrer-Policy | Kept, as a meta tag in `BaseLayout.astro`. |
| X-Frame-Options, `frame-ancestors` | Replaced by a frame guard script in `BaseLayout.astro`: a framed page hides itself, so there is nothing to click. A sandboxed frame without scripts can stop the guard, but it also stops every other script on the page, including the trips admin login. |
| HTTPS | Enforce HTTPS redirects plain HTTP. |
| HSTS, X-Content-Type-Options, Permissions-Policy, COOP, COEP, CORP | Cannot be set. The site serves no visitor-supplied content and requests no device permissions, so the practical exposure is small. |

If those headers become necessary, the route is a CDN that can add them in
front of Pages. Cloudflare's free plan can, but it means moving DNS for the
whole of `bbmw0.com` to Cloudflare, with every existing record (the main
Squarespace site, email) recreated there before the nameservers change.

## Where each piece sits

| Piece | Role | Configured in |
|---|---|---|
| Squarespace | Registrar and DNS for `bbmw0.com` | Squarespace domains panel |
| GitHub Pages | Serves `hiking.bbmw0.com` | Settings, Pages; built by `deploy-pages.yml` |
| Supabase | Trips backend: admin login, trip log, trip photos | Supabase project `hiking-east-asia` |
