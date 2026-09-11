import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { writeFile, readFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

/**
 * Writes a small version.json into the build output so the client-side
 * script in BaseLayout can silently detect that a newer deploy exists,
 * without any manual "last updated" date to keep in sync by hand.
 */
function buildVersionMarker() {
  return {
    name: 'build-version-marker',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const outFile = fileURLToPath(new URL('version.json', dir));
        await writeFile(outFile, JSON.stringify({ builtAt: new Date().toISOString() }));
      },
    },
  };
}

/**
 * Injects a Content-Security-Policy meta tag into every built page, with a
 * SHA-256 hash for each inline script on that page.
 *
 * Two reasons this is a meta tag rather than only a response header:
 *
 *  1. GitHub Pages cannot send custom response headers at all. The header
 *     policy in vercel.json therefore protects the Vercel copy and leaves the
 *     Pages mirror with no policy whatsoever. A meta tag travels inside the
 *     HTML, so the same protection applies on any host the build is served
 *     from, including a local preview.
 *  2. Hashing lets script-src drop 'unsafe-inline'. Astro emits its client
 *     scripts inline, so a header written by hand has to allow all inline
 *     script or break the site. Hashes are computed here from the exact bytes
 *     that shipped, so only those scripts can run and an injected one cannot.
 *
 * Where a header policy is also present both are enforced and the stricter
 * wins, so this tightens Vercel as well rather than replacing anything.
 *
 * frame-ancestors and HSTS are deliberately absent: neither is honoured in a
 * meta tag, and both are already set as real headers in vercel.json.
 */
function cspMetaTags() {
  const sha256 = (body) => `'sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}'`;

  async function htmlFiles(dir) {
    const out = [];
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) out.push(...(await htmlFiles(full)));
      else if (entry.name.endsWith('.html')) out.push(full);
    }
    return out;
  }

  return {
    name: 'csp-meta-tags',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const files = await htmlFiles(root);
        let injected = 0;
        const allHashes = new Set();

        for (const file of files) {
          const html = await readFile(file, 'utf8');
          // Only scripts with a body: a <script src=...> is covered by 'self'.
          const hashes = new Set();
          for (const m of html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
            if (m[1].length === 0) continue;
            const h = sha256(m[1]);
            hashes.add(h);
            allHashes.add(h);
          }

          const policy = [
            "default-src 'self'",
            `script-src 'self' ${[...hashes].join(' ')}`.trim(),
            // Style keeps 'unsafe-inline' because the markup carries style
            // attributes, which no hash can cover. Style injection cannot
            // execute code, so this is the accepted residual.
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' https://fonts.gstatic.com",
            // Map tiles after the visitor presses the map button, and trip
            // photos the country admins upload to Supabase Storage.
            "img-src 'self' data: https://tile.openstreetmap.org https://*.tile.opentopomap.org https://sdcyiwsfihldacmoreny.supabase.co",
            // The trips backend (Supabase auth, database and edge functions)
            // and the free weather API the area pages read live conditions
            // from, both contacted directly from the visitor's browser.
            "connect-src 'self' https://sdcyiwsfihldacmoreny.supabase.co https://api.open-meteo.com",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self'",
            "frame-src 'none'",
            "worker-src 'self'",
            "manifest-src 'self'",
            'upgrade-insecure-requests',
          ].join('; ');

          const tag = `<meta http-equiv="Content-Security-Policy" content="${policy}">`;
          // First thing in <head>, so the policy is in force before the parser
          // reaches anything it governs.
          const next = html.replace(/<head>/, `<head>${tag}`);
          if (next !== html) {
            await writeFile(file, next);
            injected++;
          }
        }

        logger.info(`content security policy injected into ${injected} page(s), ${allHashes.size} distinct inline script hash(es)`);
      },
    },
  };
}

export default defineConfig({
  site: 'https://hiking.bbmw0.com',
  // '/' for a domain root (Vercel, hiking.bbmw0.com). Set SITE_BASE to a subpath
  // (e.g. /Hiking-East-Asia) to build for a project-subdirectory host instead.
  base: process.env.SITE_BASE || '/',
  integrations: [buildVersionMarker(), cspMetaTags()],
  vite: {
    plugins: [tailwindcss()],
  },
});
