# Trips backend

The completed-trips log and the per-country admin dashboard on `/trips/` are
backed by a Supabase project (`hiking-east-asia`, `ap-southeast-1`, free
tier). This directory is the record of what is actually running there; the
live project is the source of truth, this is the paper trail.

## Why a public anon key is safe to commit

`src/data/config.ts` hardcodes `SUPABASE_URL` and `SUPABASE_ANON_KEY`. That
key is not a secret. It only identifies the project to Supabase's API
gateway; every request made with it is still filtered by the Row Level
Security policies in `migrations/0001_trips_and_photos.sql`. Reading the key
out of the page with a browser's inspector, which anyone can do on any
Supabase site, gives no more access than a signed-out visitor already has.

The one key that would actually matter, the service role key, is never in
this repository, never in the built site, and never passed to this session.
It exists only inside the `admin-auth` edge function's own environment,
injected by Supabase at deploy time.

## Schema (`migrations/0001_trips_and_photos.sql`)

- `public.trips`: one row per logged trip. `country` and `title`/`summary`
  (jsonb, one key per site locale) mirror the shape the site's own `Area`
  data uses. Row Level Security: anyone can read a row where
  `published = true`; only a signed-in user whose JWT carries
  `app_metadata.country` equal to the row's `country` can read, insert,
  update or delete it, published or not.
- Storage bucket `trip-photos`, public read. Upload/update/delete is scoped
  to the first path segment matching the admin's own `app_metadata.country`,
  so an admin physically cannot write into another country's folder.

`app_metadata` is used rather than `user_metadata` for the `country` and
`must_change_password` claims deliberately: `user_metadata` is editable by
the signed-in user themselves via the client SDK, so trusting it in a
security policy would let an admin grant themselves another country's access
by calling `updateUser` on their own session. `app_metadata` can only be
changed with the service role key, which never reaches a browser.

## Admin accounts and the forced first password change

Twelve accounts were created once, on 2026-09-10, one per country, each as
`<country>-admin@hiking-east-asia.internal` with a random 16-character
temporary password and `app_metadata: { country, role: "country-admin",
must_change_password: true }`. The temporary passwords were shown once, in
the tool output of that single bootstrap call, and handed to the club owner
to distribute to each country's actual admin out of band. They are not
recorded anywhere in this repository or in the Supabase project itself.

The bootstrap code that created them lived briefly in `functions/admin-auth`
under a `/bootstrap` route gated by a secret generated just for that one
call, then was deleted from the function in the very next deploy. The
`index.ts` in this directory is that later, permanent version: it only
exposes `/complete-password-setup`, which:

1. requires a valid Supabase session token (so only someone who is already
   signed in as a country admin can call it),
2. requires the new password to be at least 12 characters,
3. uses the service role key, server-side only, to set the new password and
   clear `must_change_password`.

The client (`src/components/TripLog.astro`) will not show the trip
dashboard to an account still carrying `must_change_password: true`; it can
only reach the password-change form until that call succeeds. There is no
path in the browser bundle that can clear the flag without actually setting
a new password, because the flag is only ever cleared server-side, inside
the edge function, after the password write succeeds.

If a country's admin forgets their password, or the role needs to move to
someone else, the fix is the same shape as the original bootstrap: a
short-lived, secret-gated route added to the edge function, run once, then
removed. There is deliberately no standing "reset password" capability
reachable from the public site.

## Redeploying the edge function

```
# from a machine with the Supabase CLI and access to this project
supabase functions deploy admin-auth --project-ref sdcyiwsfihldacmoreny
```

The version of `index.ts` in this directory is exactly what is deployed;
keep them in sync by hand, since this session's Supabase access is through
a management API, not the CLI.
