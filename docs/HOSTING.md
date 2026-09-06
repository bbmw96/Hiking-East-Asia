# Hosting: one domain, two hosts

## Why the mirror is at `bbmw96.github.io/Hiking-East-Asia/`

`hiking.bbmw0.com` is one hostname, and DNS resolves one hostname to one
target. Its CNAME points at `cname.vercel-dns.com`, so Vercel answers it.
GitHub Pages cannot answer the same hostname at the same time, so Pages serves
the mirror at its own default URL instead.

This is not a Pages misconfiguration. No setting in GitHub, Vercel or
Squarespace makes two hosts answer one name, because the question is settled
before either of them is reached.

It also means the redundancy is currently **manual**. If Vercel has an outage,
`hiking.bbmw0.com` goes down with it, and the mirror only helps the people who
know the other URL.

## The three ways to actually get failover

### 1. Manual switchover (what is in place today)

Vercel serves the domain. Pages serves the mirror. During a Vercel outage you
either share the mirror URL or repoint the CNAME at `bbmw96.github.io` and wait
for DNS to propagate.

- Costs nothing, adds no moving parts.
- Recovery is measured in minutes to hours and needs a person.

### 2. Multiple A records (round robin)

Put Vercel's IP and GitHub's four Pages IPs on the same hostname.

**Do not do this.** In normal operation roughly four in five visitors are sent
to Pages rather than the primary, which is not what the setup intends. During
an outage there is no health check, so a fifth of connections still go to the
dead host and only recover if the browser decides to retry another address.
It makes the good case worse to make the bad case partially less bad.

### 3. A health-checked edge in front (`infra/failover-worker/`)

Point the hostname at something that chooses, and let it choose per request.

```
visitor -> hiking.bbmw0.com -> Cloudflare worker -> Vercel        (normal)
                                              \-> GitHub Pages   (primary 5xx or timeout)
```

This is the only option that survives an outage without anyone noticing, and
it is the code in this repository.

## What the worker does

`infra/failover-worker/src/worker.ts`.

- Proxies to Vercel, with a 4 second timeout.
- Fails over on a 5xx or a thrown fetch. **Not** on a 4xx: a genuine 404 is a
  correct answer, and treating it as an outage would hide broken links and
  double every not-found request.
- Rewrites paths in both directions. The mirror is a GitHub *project* site
  served from `/Hiking-East-Asia/`, while the primary is served from the root,
  so a plain proxy would return HTML whose every link is wrong. Requests get
  the prefix added on the way out; `href`, `src` and `action` attributes get it
  stripped on the way back, using Cloudflare's streaming `HTMLRewriter`.
- Sets `X-Served-By: primary | mirror` so you can see which host answered, and
  `Cache-Control: no-store` on failover responses so a mirror copy cannot mask
  the primary coming back.

The path logic is unit tested in `tests/failover.test.ts`, including the round
trip and the near-miss case where a path merely starts with the same letters as
the base.

## Deploying it

Cloudflare's free plan covers this: DNS is free, and Workers include 100,000
requests a day.

1. Add `bbmw0.com` to Cloudflare and change the nameservers at Squarespace to
   the two Cloudflare gives you.
2. In Cloudflare DNS, add `hiking` as a proxied (orange cloud) AAAA record to
   `100::`, the documented discard address. The worker route intercepts the
   request before the address is used; the record exists only so the name
   resolves.
3. `cd infra/failover-worker && npx wrangler deploy`
4. Keep the domain attached in Vercel. The worker reaches Vercel through
   `hiking-east-asia.vercel.app`, so nothing there changes.

### The trade-off, stated plainly

Step 1 moves DNS for **the whole of `bbmw0.com`**, not just this subdomain.
Cloudflare's free plan cannot take a single subdomain; that is a paid feature.
Squarespace stays the registrar, but its DNS panel stops being the thing that
serves, so **every existing record on `bbmw0.com` has to be recreated in
Cloudflare first**, including whatever serves the main Squarespace site and any
email records. Copy them across before flipping the nameservers, not after.

If that is more disruption than an occasional outage is worth, option 1 is a
perfectly reasonable place to stay. The worker will still be here.

## Where each piece sits

| Piece | Role | Where it is configured |
|---|---|---|
| Squarespace | Domain registrar, and DNS today | Squarespace domains panel |
| Vercel | Primary host, serves `hiking.bbmw0.com` | Project settings, domain attached |
| GitHub Pages | Mirror, built by `deploy-pages.yml` on every push to `main` | Settings, Pages, source: GitHub Actions |
| Cloudflare worker | Health-checked switch between the two | `infra/failover-worker/`, not yet deployed |
