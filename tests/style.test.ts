import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { ui } from '../src/i18n/ui.ts';
import { LOCALES, keyPaths, allCountryAreas } from './helpers.ts';

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const srcFiles = walk('src').filter((f) => /\.(ts|astro|css|json)$/.test(f));

test('every locale carries an identical set of UI keys', () => {
  const base = keyPaths(ui.en).sort();
  for (const loc of LOCALES) {
    const got = keyPaths(ui[loc]).sort();
    const missing = base.filter((k) => !got.includes(k));
    const extra = got.filter((k) => !base.includes(k));
    assert.deepEqual(missing, [], `locale '${loc}' is missing keys`);
    assert.deepEqual(extra, [], `locale '${loc}' has keys English does not`);
  }
});

test('no UI string is blank', () => {
  for (const loc of LOCALES) {
    const walkStrings = (o: unknown, path = ''): void => {
      if (typeof o === 'string') {
        assert.ok(o.trim().length > 0, `${loc}.${path} is blank`);
        return;
      }
      if (o && typeof o === 'object') {
        for (const [k, v] of Object.entries(o)) walkStrings(v, path ? `${path}.${k}` : k);
      }
    };
    walkStrings(ui[loc]);
  }
});

test('no em dash anywhere in the source', () => {
  // House style. An em dash in copy is a style break; in a code comment it is
  // a sign the comment was pasted rather than written.
  for (const f of srcFiles) {
    const text = readFileSync(f, 'utf8');
    const line = text.split('\n').findIndex((l) => l.includes('—'));
    assert.equal(line, -1, `em dash in ${f}:${line + 1}`);
  }
});

test('placeholder tokens are preserved in every translation', () => {
  // A translator dropping {n} or {country} silently breaks the sentence.
  const withTokens = keyPaths(ui.en).filter((path) => {
    const v = path.split('.').reduce<any>((o, k) => o?.[k], ui.en);
    return typeof v === 'string' && /\{[a-z]+\}/.test(v);
  });
  assert.ok(withTokens.length > 0, 'expected at least one templated string');
  for (const path of withTokens) {
    const en = path.split('.').reduce<any>((o, k) => o?.[k], ui.en) as string;
    const tokens = [...en.matchAll(/\{[a-z]+\}/g)].map((m) => m[0]).sort();
    for (const loc of LOCALES) {
      const v = path.split('.').reduce<any>((o, k) => o?.[k], ui[loc]) as string;
      const got = [...v.matchAll(/\{[a-z]+\}/g)].map((m) => m[0]).sort();
      assert.deepEqual(got, tokens, `${loc}.${path} lost or changed a placeholder`);
    }
  }
});

test('no secret-shaped string is committed', () => {
  const patterns: [RegExp, string][] = [
    [/gh[pousr]_[A-Za-z0-9]{20,}/, 'GitHub token'],
    [/sk-[A-Za-z0-9]{20,}/, 'API secret key'],
    [/AKIA[0-9A-Z]{16}/, 'AWS access key id'],
    [/-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----/, 'private key'],
    [/eyJhbGciOi[A-Za-z0-9_-]{10,}/, 'JWT'],
  ];
  for (const f of [...srcFiles, 'vercel.json', 'astro.config.mjs', 'package.json']) {
    let text: string;
    try { text = readFileSync(f, 'utf8'); } catch { continue; }
    for (const [re, what] of patterns) {
      assert.ok(!re.test(text), `possible ${what} committed in ${f}`);
    }
  }
});

test('English function words do not leak into non-Latin translations', () => {
  /* Written after exactly this bug: a Chinese highlight shipped reading
     "水深自腰至胸，never 间断". Romanised place names and codes like RM5 or
     MaTEx are legitimate in these locales, so this checks only for common
     English function words, which never are. */
  const LEAKS = /(^|[\s，。、（(])(the|and|with|from|never|always|which|that|this|there|because)([\s，。、）)]|$)/i;
  const offenders: string[] = [];

  const walk = (node: unknown, path: string) => {
    if (typeof node === 'string') {
      const loc = path.split('.').pop() ?? '';
      /* Romanised proper nouns are conventionally parenthesised in these
         locales, e.g. 双龙寺（Wat Phra That Doi Suthep）, and 'That' there is
         part of a Thai temple name rather than an English word. Strip
         bracketed spans before matching so a real name cannot be mistaken
         for untranslated copy. */
      const outsideBrackets = node.replace(/[（(][^）)]*[）)]/g, ' ');
      if (['zh-cn', 'zh-hk', 'ta', 'ar'].includes(loc) && LEAKS.test(outsideBrackets)) {
        offenders.push(`${path}: ${node.slice(0, 60)}`);
      }
      return;
    }
    if (Array.isArray(node)) return node.forEach((v, i) => walk(v, `${path}[${i}]`));
    if (node && typeof node === 'object') {
      for (const [k, v] of Object.entries(node)) walk(v, path ? `${path}.${k}` : k);
    }
  };

  walk(ui, 'ui');
  for (const a of allCountryAreas) walk(a, `${a.country}/${a.slug}`);
  assert.deepEqual(offenders.slice(0, 5), [], `${offenders.length} untranslated English fragment(s):\n` + offenders.slice(0,5).join('\n'));
});
