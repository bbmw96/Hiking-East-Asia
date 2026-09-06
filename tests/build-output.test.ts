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

test('a security contact is published', () => {
  const txt = readFileSync('public/.well-known/security.txt', 'utf8');
  assert.match(txt, /^Contact: /m, 'security.txt has no Contact line');
  assert.match(txt, /^Expires: /m, 'security.txt has no Expires line (RFC 9116 requires it)');
  const expires = txt.match(/^Expires: (.+)$/m)![1];
  assert.ok(new Date(expires) > new Date(), 'the security.txt Expires date is in the past');
});
