import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

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

export default defineConfig({
  site: 'https://hiking.bbmw0.com',
  // '/' for a domain root (Vercel, hiking.bbmw0.com). Set SITE_BASE to a subpath
  // (e.g. /Hiking-East-Asia) to build for a project-subdirectory host instead.
  base: process.env.SITE_BASE || '/',
  integrations: [buildVersionMarker()],
  vite: {
    plugins: [tailwindcss()],
  },
});
