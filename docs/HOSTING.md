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

## Put the mirror on your own domain first (Squarespace only, no Cloudflare)

Before any of the failover options below, there is a change worth making on its
own merits, and it is entirely a Squarespace DNS job.

**A GitHub Pages project site with a custom domain serves at the root of that
domain, not at `/<repo>/`.** So `mirror.bbmw0.com` gives the mirror the same
path layout as the primary, which means:

- the mirror stops being a second-class `github.io` URL and becomes a real
  address on your own domain, worth sharing during an outage;
- every path matches the primary exactly, so any failover added later needs no
  path rewriting at all.

Three steps, in this order. The order matters: claiming a domain before its DNS
exists makes GitHub fail its check and takes the mirror offline.

1. **Squarespace DNS**, add a CNAME record: host `mirror`, value
   `bbmw96.github.io`. Wait for it to resolve.
2. **GitHub**, Settings, Secrets and variables, Actions, Variables tab: add
   `PAGES_CUSTOM_DOMAIN` = `mirror.bbmw0.com`. The Pages workflow writes the
   `CNAME` file only when that variable is set, which is why nothing changes
   until you are ready.
3. **GitHub**, Settings, Pages, Custom domain: `mirror.bbmw0.com`, then wait
   for the DNS check to pass and tick Enforce HTTPS.

`hiking.bbmw0.com` is untouched throughout and keeps pointing at Vercel.

## Can Squarespace do all of the DNS?

Yes, and it already does. Everything above happens in the Squarespace panel.

What Squarespace cannot do, and what no registrar's basic DNS can do, is
**health-checked failover**. DNS serves fixed records; it has no way to say "if
this origin returns a 500, use the other one". A handful of specialist DNS
providers offer health-checked records, but even those would not fix this case
on their own, because the decision has to be made per request and the two hosts
have to be checked live. That is a proxy's job, not a name server's.

## The three ways to actually get failover

### 1. Manual switchover (what is in place today)

Vercel serves `hiking.bbmw0.com`. Pages serves the mirror. During a Vercel
outage you either share the mirror URL or repoint the `hiking` CNAME at
`bbmw96.github.io` and wait for DNS to propagate.

With the mirror on `mirror.bbmw0.com` this option gets meaningfully better: the
fallback address is on your own domain and its paths match, so a link to a
trail page on the primary works unchanged on the mirror.

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
