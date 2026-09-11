import { test, before } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

/* These run against dist/, so they check what visitors actually receive
   rather than what the source intends. Skipped with a clear message when the
   site has not been built, so `npm test` on a clean checkout still passes the
   suites that do not need a build. */
const BUILT = existsSync('dist/index.html');
const opts = BUILT ? {} : { skip: 'run `npm run build` first' };

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

let pages: string[] = [];
/* Astro emits a redirect stub at dist/index.html for the bare '/' route: a
   two-line meta-refresh with no <html> element and no heading. It is not a
   content page, so the page-level assertions below exclude it. */
const isRedirectStub = (html: string) => /http-equiv="refresh"/.test(html);
before(() => {
  if (!BUILT) return;
  pages = walk('dist')
    .filter((f) => f.endsWith('.html'))
    .filter((f) => !isRedirectStub(readFileSync(f, 'utf8')));
});

test('the root redirect stub points at the default locale', opts, () => {
  const html = readFileSync(join('dist', 'index.html'), 'utf8');
  assert.ok(isRedirectStub(html), 'dist/index.html is no longer a redirect stub');
  assert.match(html, /url=\/en\//, 'the root redirect does not point at /en/');
  assert.match(html, /rel="canonical"/, 'the root redirect has no canonical link');
});

test('the build produced a page for every locale', opts, () => {
  for (const loc of ['en', 'ms', 'zh-cn', 'zh-hk', 'ta', 'ar']) {
    assert.ok(existsSync(join('dist', loc, 'index.html')), `missing /${loc}/`);
    assert.ok(existsSync(join('dist', loc, 'safety', 'index.html')), `missing /${loc}/safety/`);
  }
});

test('every internal link resolves to a built page', opts, () => {
  const broken: string[] = [];
  for (const file of pages) {
    const html = readFileSync(file, 'utf8');
    for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
      const href = m[1];
      if (href.startsWith('//')) continue;
      const target = href.endsWith('/') ? join('dist', href, 'index.html') : join('dist', href);
      if (!existsSync(target)) broken.push(`${file} -> ${href}`);
    }
  }
  assert.deepEqual(broken.slice(0, 10), [], `${broken.length} broken internal link(s)`);
});

test('every page declares its language and direction', opts, () => {
  for (const file of pages) {
    const html = readFileSync(file, 'utf8');
    assert.match(html, /<html lang="[a-zA-Z-]+" dir="(ltr|rtl)">/, `${file} has no lang/dir`);
  }
  const ar = readFileSync(join('dist', 'ar', 'index.html'), 'utf8');
  assert.match(ar, /dir="rtl"/, 'Arabic is not marked right-to-left');
});

test('every page has exactly one h1, a title and a description', opts, () => {
  for (const file of pages) {
    const html = readFileSync(file, 'utf8');
    const h1s = [...html.matchAll(/<h1[\s>]/g)].length;
    assert.equal(h1s, 1, `${file} has ${h1s} h1 elements`);
    assert.match(html, /<title>[^<]{3,}<\/title>/, `${file} has no title`);
    assert.match(html, /<meta name="description" content="[^"]{10,}"/, `${file} has no description`);
  }
});

test('no page ships an em dash to a visitor', opts, () => {
  const offenders = pages.filter((f) => readFileSync(f, 'utf8').includes('—'));
  assert.deepEqual(offenders.slice(0, 5), [], `${offenders.length} page(s) contain an em dash`);
});

test('no external link opens without noopener', opts, () => {
  const bad: string[] = [];
  for (const file of pages) {
    const html = readFileSync(file, 'utf8');
    for (const m of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) {
      if (!/rel="[^"]*noopener/.test(m[0])) bad.push(`${file}: ${m[0].slice(0, 80)}`);
    }
  }
  assert.deepEqual(bad.slice(0, 5), [], `${bad.length} target=_blank link(s) without rel=noopener`);
});

test('the security headers are declared and strict', () => {
  const v = JSON.parse(readFileSync('vercel.json', 'utf8'));
  const headers: { key: string; value: string }[] = v.headers.flatMap((h: any) => h.headers);
  const get = (k: string) => headers.find((h) => h.key.toLowerCase() === k)?.value;

  const csp = get('content-security-policy');
  assert.ok(csp, 'no Content-Security-Policy');
  for (const directive of ["default-src 'self'", "object-src 'none'", "base-uri 'self'", "frame-ancestors 'none'"]) {
    assert.ok(csp!.includes(directive), `CSP is missing ${directive}`);
  }
  assert.ok(!/script-src[^;]*\*/.test(csp!), 'CSP script-src contains a wildcard');

  assert.match(get('strict-transport-security') ?? '', /max-age=\d{7,}/, 'HSTS max-age is too short or absent');
  assert.equal(get('x-content-type-options'), 'nosniff');
  assert.equal(get('x-frame-options'), 'DENY');
  assert.ok((get('referrer-policy') ?? '').includes('strict-origin'), 'Referrer-Policy is not strict');
  assert.ok(get('permissions-policy'), 'no Permissions-Policy');
});

test('no inline event handler survives into the built HTML', opts, () => {
  // onclick= and friends are exactly what a strict CSP is meant to forbid.
  const bad = pages.filter((f) => /<[^>]+\son(click|load|error|mouse\w+)=/i.test(readFileSync(f, 'utf8')));
  assert.deepEqual(bad.slice(0, 5), [], `${bad.length} page(s) carry an inline event handler`);
});

test('the freshness marker is emitted', opts, () => {
  assert.ok(existsSync('dist/version.json'), 'version.json missing from the build');
  const v = JSON.parse(readFileSync('dist/version.json', 'utf8'));
  assert.ok(!Number.isNaN(Date.parse(v.builtAt)), 'version.json has no valid builtAt');
});

/* ---- Content Security Policy ------------------------------------------
   The meta policy is what protects the GitHub Pages mirror, which cannot
   send response headers at all. These assertions stop it regressing to the
   permissive header policy it replaced. */

const metaCsp = (html: string): string | null =>
  html.match(/<meta http-equiv="Content-Security-Policy" content="([^"]+)"/)?.[1] ?? null;

test('every page carries a CSP meta tag', opts, () => {
  const missing = pages.filter((f) => !metaCsp(readFileSync(f, 'utf8')));
  assert.deepEqual(missing.slice(0, 5), [], `${missing.length} page(s) have no CSP meta tag`);
});

test("script-src never allows unsafe-inline or unsafe-eval", opts, () => {
  for (const f of pages) {
    const csp = metaCsp(readFileSync(f, 'utf8'))!;
    const scriptSrc = csp.split(';').find((d) => d.trim().startsWith('script-src')) ?? '';
    assert.ok(!scriptSrc.includes("'unsafe-inline'"), `${f} allows unsafe-inline scripts`);
    assert.ok(!scriptSrc.includes("'unsafe-eval'"), `${f} allows unsafe-eval`);
    assert.ok(!scriptSrc.includes('*'), `${f} has a wildcard in script-src`);
  }
});

test('every inline script on a page is covered by a hash in that page policy', opts, () => {
  for (const f of pages) {
    const html = readFileSync(f, 'utf8');
    const csp = metaCsp(html)!;
    for (const m of html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
      if (m[1].length === 0) continue;
      const hash = `'sha256-${createHash('sha256').update(m[1], 'utf8').digest('base64')}'`;
      assert.ok(csp.includes(hash),
        `${f} has an inline script with no matching hash in its policy. ` +
        'A script that is not hashed will be blocked at runtime.');
    }
  }
});

test('the policy locks down the dangerous fetch directives', opts, () => {
  for (const f of pages.slice(0, 40)) {
    const csp = metaCsp(readFileSync(f, 'utf8'))!;
    for (const directive of [
      "default-src 'self'", "object-src 'none'", "base-uri 'self'",
      "form-action 'self'", "frame-src 'none'", "connect-src 'self'",
    ]) {
      assert.ok(csp.includes(directive), `${f} policy is missing ${directive}`);
    }
  }
});

test('the response headers add the cross-origin isolation set', () => {
  const v = JSON.parse(readFileSync('vercel.json', 'utf8'));
  const headers: { key: string; value: string }[] = v.headers.flatMap((h: any) => h.headers);
  const get = (k: string) => headers.find((h) => h.key.toLowerCase() === k)?.value;
  assert.equal(get('cross-origin-resource-policy'), 'same-origin');
  assert.equal(get('x-permitted-cross-domain-policies'), 'none');
  assert.ok((get('cross-origin-opener-policy') ?? '').includes('same-origin'));
  // A permissions policy that grants nothing it does not need.
  const pp = get('permissions-policy') ?? '';
  for (const feature of ['camera=()', 'microphone=()', 'geolocation=()', 'payment=()', 'usb=()']) {
    assert.ok(pp.includes(feature), `Permissions-Policy does not disable ${feature}`);
  }
});

test('the response-header CSP never falls behind the meta-tag CSP', opts, () => {
  // These two policies are enforced together by any browser that receives
  // both (every visitor except the header-less GitHub Pages mirror): a
  // resource must satisfy the *intersection* of the two. A header img-src or
  // connect-src that forgot an origin the meta tag already allows silently
  // blocks that feature for every visitor on Vercel, with no error beyond a
  // console CSP violation nobody watches. This caught exactly that drift
  // once already: vercel.json had never been updated after the trips
  // backend, live weather and the terrain map layer were added, so all
  // three were broken in production while the meta tag (and the tests
  // above) said the policy was fine.
  const v = JSON.parse(readFileSync('vercel.json', 'utf8'));
  const headers: { key: string; value: string }[] = v.headers.flatMap((h: any) => h.headers);
  const headerCsp = headers.find((h) => h.key.toLowerCase() === 'content-security-policy')?.value ?? '';
  const headerDirective = (name: string) => (headerCsp.split(';').find((d) => d.trim().startsWith(name)) ?? '').trim();

  const html = readFileSync(pages[0], 'utf8');
  const metaCspValue = metaCsp(html)!;
  const metaDirective = (name: string) => (metaCspValue.split(';').find((d) => d.trim().startsWith(name)) ?? '').trim();

  for (const directive of ['img-src', 'connect-src']) {
    const metaOrigins = metaDirective(directive).split(/\s+/).filter((t) => t.startsWith('http'));
    const headerOrigins = new Set(headerDirective(directive).split(/\s+/).filter((t) => t.startsWith('http')));
    const missing = metaOrigins.filter((o) => !headerOrigins.has(o));
    assert.deepEqual(missing, [],
      `vercel.json's ${directive} is missing ${missing.join(', ')}, which the meta CSP already allows; ` +
      'add it to vercel.json or the header CSP will block it in production');
  }
});

test('a security contact is published', () => {
  const txt = readFileSync('public/.well-known/security.txt', 'utf8');
  assert.match(txt, /^Contact: /m, 'security.txt has no Contact line');
  assert.match(txt, /^Expires: /m, 'security.txt has no Expires line (RFC 9116 requires it)');
  const expires = txt.match(/^Expires: (.+)$/m)![1];
  assert.ok(new Date(expires) > new Date(), 'the security.txt Expires date is in the past');
});

/* ---- Maps -------------------------------------------------------------- */

test('every area page carries a map pinned to its own coordinates', opts, () => {
  const areaPages = pages.filter((f) => /dist\/en\/[a-z-]+\/[a-z0-9-]+\/index\.html$/.test(f));
  assert.ok(areaPages.length >= 50, `expected 50+ area pages, found ${areaPages.length}`);
  for (const f of areaPages) {
    const html = readFileSync(f, 'utf8');
    const data = html.match(/class="trail-map-live"[^>]*data-points="([^"]+)"/)?.[1];
    assert.ok(data, `${f} has no map`);
    const points = JSON.parse(data!.replace(/&quot;/g, '"').replace(/&#34;/g, '"'));
    assert.equal(points.length, 1, `${f} should pin exactly one coordinate`);
    assert.ok(Number.isFinite(points[0].lat) && Number.isFinite(points[0].lng), `${f} pin has no coordinates`);
  }
});

test('a map never loads tiles until the visitor asks', opts, () => {
  for (const f of pages.filter((p) => readFileSync(p, 'utf8').includes('trail-map'))) {
    const html = readFileSync(f, 'utf8');
    assert.ok(!/<img[^>]+tile\.openstreetmap/.test(html),
      `${f} embeds a tile image in the markup, which defeats click-to-load`);
    assert.match(html, /class="trail-map-load"/, `${f} has a map with no load control`);
    assert.match(html, /class="trail-map-live"[^>]*hidden/, `${f} map container is not hidden until asked`);
  }
});

test('the static locator is real markup, not a placeholder box', opts, () => {
  const f = pages.find((p) => readFileSync(p, 'utf8').includes('trail-map-static'))!;
  const html = readFileSync(f, 'utf8');
  assert.match(html, /class="trail-map-static"[^>]*viewBox/, 'the locator has no viewBox');
  assert.ok((html.match(/class="pin-dot"/g) ?? []).length > 0, 'the locator draws no pins');
  assert.ok((html.match(/class="grat"/g) ?? []).length > 0, 'the locator draws no graticule');
});

/**
 * Deliberately avoids `Array.includes` / `Set.has` / `String.includes`
 * against a URL: CodeQL's incomplete-url-substring-sanitization query
 * flags exactly that shape, since on a plain string it would let
 * "https://evil.example/https://tile.openstreetmap.org" slip past. This
 * compares each origin token to each allow-listed origin with `===`, so
 * there is no substring operation over a URL anywhere in this test.
 */
function originListsMatch(present: string[], allowed: string[]): { extra: string[]; missing: string[] } {
  const extra = present.filter((p) => !allowed.some((a) => a === p));
  const missing = allowed.filter((a) => !present.some((p) => p === a));
  return { extra, missing };
}

test('the CSP only ever reaches the named, justified third parties', opts, () => {
  // Every third-party origin the site is allowed to contact, and why. A new
  // entry here should mean a new feature that genuinely needs it, not scope
  // creep: this list is the thing to update when that happens, not a
  // constraint to route around.
  const allowedImgSrc = [
    'https://tile.openstreetmap.org', // map tiles, loaded only after the visitor asks
    'https://tile.openmaps.fr', // the free terrain-relief layer toggle on the same map (OpenTopoMap-R)
    'https://sdcyiwsfihldacmoreny.supabase.co', // trip photos a country admin uploaded
  ];
  const allowedConnectSrc = [
    'https://sdcyiwsfihldacmoreny.supabase.co', // trips database, auth and the password-setup function
    'https://api.open-meteo.com', // live trail weather, read straight from the visitor's browser
  ];

  const html = readFileSync(pages[0], 'utf8');
  const csp = metaCsp(html)!;
  const directive = (name: string) => (csp.split(';').find((d) => d.trim().startsWith(name)) ?? '').trim();

  const imgOrigins = directive('img-src').split(/\s+/).filter((t) => t.startsWith('http'));
  const imgResult = originListsMatch(imgOrigins, allowedImgSrc);
  assert.deepEqual(imgResult.extra, [], `img-src allows an origin not on the allow list: ${imgResult.extra.join(', ')}`);
  assert.deepEqual(imgResult.missing, [], `img-src is missing an origin the site depends on: ${imgResult.missing.join(', ')}`);

  const connectOrigins = directive('connect-src').split(/\s+/).filter((t) => t.startsWith('http'));
  const connectResult = originListsMatch(connectOrigins, allowedConnectSrc);
  assert.deepEqual(connectResult.extra, [], `connect-src allows an origin not on the allow list: ${connectResult.extra.join(', ')}`);
  assert.deepEqual(connectResult.missing, [], `connect-src is missing an origin the site depends on: ${connectResult.missing.join(', ')}`);

  // Everything else must still be strictly first-party.
  for (const d of ['script-src', 'default-src', 'frame-src']) {
    const value = directive(d);
    assert.ok(!/https?:\/\//.test(value), `${d} was widened to a third party: ${value}`);
  }
});

test('no map library is loaded from a CDN', opts, () => {
  for (const f of pages) {
    const html = readFileSync(f, 'utf8');
    assert.ok(!/src="https?:\/\/[^"]*(leaflet|mapbox|maplibre)/i.test(html),
      `${f} loads a map library from a third party rather than this origin`);
  }
});

test('every area page ships a complete twelve month season strip', opts, () => {
  const areaPages = pages.filter((f) => /dist\/en\/[a-z-]+\/[a-z0-9-]+\/index\.html$/.test(f));
  for (const f of areaPages) {
    const html = readFileSync(f, 'utf8');
    assert.match(html, /data-season-now/, `${f} has no season strip`);
    const cells = (html.match(/class="season-cell"/g) ?? []).length;
    assert.equal(cells, 12, `${f} renders ${cells} month cells rather than 12`);
    // Rendered at build time, so the strip is complete without JavaScript.
    assert.ok((html.match(/season-cell-label/g) ?? []).length === 12,
      `${f} depends on JavaScript to label its months`);
  }
});

test('the season strip states are not carried by colour alone', opts, () => {
  const f = pages.find((p) => readFileSync(p, 'utf8').includes('data-season-now'))!;
  const html = readFileSync(f, 'utf8');
  // Each cell carries a symbol and a screen-reader label as well as a state.
  assert.ok((html.match(/season-cell-mark/g) ?? []).length === 12, 'cells lack a non-colour marker');
  assert.ok((html.match(/class="sr-only">[^<]+:/g) ?? []).length >= 12, 'cells lack a spoken label');
});
