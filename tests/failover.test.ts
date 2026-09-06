import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isUnhealthy, toMirrorPath, fromMirrorUrl } from '../infra/failover-worker/src/worker.ts';

const BASE = '/Hiking-East-Asia';

test('a 5xx is a failover, a 4xx is not', () => {
  for (const s of [500, 502, 503, 504, 599]) {
    assert.equal(isUnhealthy(new Response(null, { status: s })), true, `${s} should fail over`);
  }
  // A genuine 404 is a correct answer. Sending every missing page to the
  // mirror would hide broken links and double every not-found request.
  for (const s of [200, 204, 301, 304, 400, 403, 404, 410, 429]) {
    assert.equal(isUnhealthy(new Response(null, { status: s })), false, `${s} should not fail over`);
  }
});

test('request paths map onto the mirror subdirectory', () => {
  assert.equal(toMirrorPath('/', BASE), '/Hiking-East-Asia/');
  assert.equal(toMirrorPath('/en/', BASE), '/Hiking-East-Asia/en/');
  assert.equal(toMirrorPath('/en/malaysia/mount-kinabalu/', BASE), '/Hiking-East-Asia/en/malaysia/mount-kinabalu/');
  assert.equal(toMirrorPath('/version.json', BASE), '/Hiking-East-Asia/version.json');
  // A worker pointed at a user site rather than a project site has no base.
  assert.equal(toMirrorPath('/en/', ''), '/en/');
});

test('mirrored links are rewritten back to the root layout', () => {
  assert.equal(fromMirrorUrl('/Hiking-East-Asia/en/', BASE), '/en/');
  assert.equal(fromMirrorUrl('/Hiking-East-Asia/', BASE), '/');
  assert.equal(fromMirrorUrl('/Hiking-East-Asia', BASE), '/');
  assert.equal(fromMirrorUrl('/_astro/x.css', BASE), '/_astro/x.css', 'a root path must pass through');
  assert.equal(fromMirrorUrl('', BASE), '', 'an empty value must not throw');
  // A path that merely starts with the same letters must not be truncated.
  assert.equal(fromMirrorUrl('/Hiking-East-Asia-other/x', BASE), '/Hiking-East-Asia-other/x');
});

test('the round trip is lossless for every route the site builds', () => {
  for (const p of ['/', '/en/', '/ar/safety/', '/zh-hk/japan/mount-fuji/', '/version.json']) {
    assert.equal(fromMirrorUrl(toMirrorPath(p, BASE), BASE), p, `round trip changed ${p}`);
  }
});
