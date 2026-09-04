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
  integrations: [buildVersionMarker()],
  vite: {
    plugins: [tailwindcss()],
  },
});
