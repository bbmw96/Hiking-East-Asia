import { test } from 'node:test';
import assert from 'node:assert/strict';
import { areasByCountry, allCountryAreas, LOCALES } from './helpers.ts';
import { allAreas } from '../src/data/all-areas.ts';
import { countries, getLiveCountries } from '../src/data/countries.ts';
import type { CountrySlug } from '../src/data/types.ts';
import { getOfficialChannels } from '../src/data/channels.ts';
import { countrySafety, getCountrySafety } from '../src/data/safety-countries.ts';

test('every country file is wired into the shared area list', () => {
  assert.equal(allAreas.length, allCountryAreas.length,
    'a country file exists but is missing from src/data/all-areas.ts');
  for (const area of allCountryAreas) {
    assert.ok(allAreas.some((a) => a.slug === area.slug && a.country === area.country),
      `${area.country}/${area.slug} is not in allAreas`);
  }
});

test('area slugs are unique within their country', () => {
  for (const [country, areas] of Object.entries(areasByCountry)) {
    const seen = new Set<string>();
    for (const a of areas) {
      assert.ok(!seen.has(a.slug), `duplicate slug ${country}/${a.slug}`);
      seen.add(a.slug);
    }
  }
});

test('each area declares the country whose file it lives in', () => {
  for (const [country, areas] of Object.entries(areasByCountry)) {
    for (const a of areas) {
      assert.equal(a.country, country,
        `${a.slug} is in ${country}.ts but declares country '${a.country}'`);
    }
  }
});

test('slugs are URL safe', () => {
  for (const a of allCountryAreas) {
    assert.match(a.slug, /^[a-z0-9]+(-[a-z0-9]+)*$/, `slug '${a.slug}' is not URL safe`);
  }
});

test('every localised string is present and non-empty in all six locales', () => {
  const check = (value: unknown, where: string): void => {
    assert.ok(value && typeof value === 'object', `${where} is not a localised object`);
    for (const loc of LOCALES) {
      const v: unknown = (value as Record<string, unknown>)[loc];
      assert.ok(v !== undefined, `${where} is missing locale '${loc}'`);
      if (Array.isArray(v)) {
        assert.ok(v.length > 0, `${where}.${loc} is an empty list`);
        v.forEach((item, i) => assert.ok(String(item).trim().length > 0, `${where}.${loc}[${i}] is blank`));
      } else {
        assert.ok(String(v).trim().length > 0, `${where}.${loc} is blank`);
      }
    }
  };

  for (const a of allCountryAreas) {
    const at = `${a.country}/${a.slug}`;
    check(a.name, `${at}.name`);
    check(a.tagline, `${at}.tagline`);
    check(a.overview, `${at}.overview`);
    check(a.duration, `${at}.duration`);
    check(a.season.bestMonths, `${at}.season.bestMonths`);
    check(a.season.avoidMonths, `${at}.season.avoidMonths`);
    check(a.season.notes, `${at}.season.notes`);
    check(a.permit.howToApply, `${at}.permit.howToApply`);
  }
  for (const c of countries) {
    check(c.name, `country ${c.slug}.name`);
    check(c.teaser, `country ${c.slug}.teaser`);
  }
  for (const s of countrySafety) {
    check(s.guides, `safety ${s.country}.guides`);
  }
});

test('coordinates are real and land in the right hemisphere for the region', () => {
  for (const a of allCountryAreas) {
    const { lat, lng } = a.coordinates;
    assert.ok(Number.isFinite(lat) && Number.isFinite(lng), `${a.slug} has non-numeric coordinates`);
    assert.ok(lat >= -90 && lat <= 90, `${a.slug} latitude ${lat} out of range`);
    assert.ok(lng >= -180 && lng <= 180, `${a.slug} longitude ${lng} out of range`);
    // Every country on this site sits inside this box. A transposed lat/lng
    // pair, or a stray minus sign, lands outside it.
    assert.ok(lat > -11 && lat < 46, `${a.country}/${a.slug} latitude ${lat} is outside Southeast and East Asia`);
    assert.ok(lng > 94 && lng < 146, `${a.country}/${a.slug} longitude ${lng} is outside Southeast and East Asia`);
  }
});

test('elevations are plausible where stated', () => {
  for (const a of allCountryAreas) {
    if (a.elevationM === undefined) continue;
    assert.ok(a.elevationM > 0 && a.elevationM < 9000,
      `${a.slug} elevation ${a.elevationM} m is implausible`);
  }
});

test('every permit cites an authority over https', () => {
  for (const a of allCountryAreas) {
    assert.ok(a.permit.authorityName.trim().length > 0, `${a.slug} has no authority name`);
    assert.match(a.permit.url, /^https:\/\//,
      `${a.slug} permit URL is not https: ${a.permit.url}`);
    assert.doesNotThrow(() => new URL(a.permit.url), `${a.slug} permit URL is malformed`);
  }
});

test('a required permit says how to apply', () => {
  for (const a of allCountryAreas) {
    if (!a.permit.required) continue;
    for (const loc of LOCALES) {
      assert.ok(String(a.permit.howToApply[loc]).trim().length > 12,
        `${a.slug} requires a permit but ${loc} howToApply is too short to be useful`);
    }
  }
});

test('the official channel directory covers every permit-issuing authority', () => {
  const channels = getOfficialChannels();
  for (const a of allCountryAreas) {
    assert.ok(channels.some((c) => c.authorityName === a.permit.authorityName && c.url === a.permit.url),
      `${a.slug}'s authority is missing from the channel directory`);
  }
});

test('every live country has areas, and every area belongs to a live country', () => {
  const live = new Set(getLiveCountries().map((c) => c.slug));
  for (const slug of live) {
    assert.ok((areasByCountry[slug] ?? []).length > 0, `country ${slug} is live but has no areas`);
  }
  for (const a of allCountryAreas) {
    assert.ok(live.has(a.country), `${a.slug} belongs to '${a.country}', which is not live`);
  }
});

test('every live country has verified emergency numbers', () => {
  for (const c of getLiveCountries()) {
    const s = getCountrySafety(c.slug as CountrySlug);
    assert.ok(s, `no safety record for ${c.slug}`);
    assert.ok(s!.emergency.length > 0, `${c.slug} has no emergency numbers`);
    for (const line of s!.emergency) {
      assert.match(line.number, /^[0-9]{3,4}$/, `${c.slug} emergency number '${line.number}' is not a short code`);
      assert.ok(['all', 'police', 'fire', 'ambulance'].includes(line.kind),
        `${c.slug} has unknown emergency kind '${line.kind}'`);
    }
  }
});

/* ---- Structured season months ------------------------------------------
   The prose is the source of truth; these arrays are a reading of it. These
   tests keep the reading honest. */

test('every area carries structured season months', () => {
  for (const a of allCountryAreas) {
    const at = `${a.country}/${a.slug}`;
    assert.ok(Array.isArray(a.season.monthsBest), `${at} has no monthsBest`);
    assert.ok(Array.isArray(a.season.monthsAvoid), `${at} has no monthsAvoid`);
    assert.ok(a.season.monthsBest.length > 0, `${at} names no good month at all`);
  }
});

test('season months are valid, unique and never contradict each other', () => {
  for (const a of allCountryAreas) {
    const at = `${a.country}/${a.slug}`;
    for (const [name, list] of [['monthsBest', a.season.monthsBest], ['monthsAvoid', a.season.monthsAvoid]] as const) {
      for (const m of list) {
        assert.ok(Number.isInteger(m) && m >= 1 && m <= 12, `${at} ${name} contains ${m}`);
      }
      assert.equal(new Set(list).size, list.length, `${at} ${name} repeats a month`);
    }
    const both = a.season.monthsBest.filter((m) => a.season.monthsAvoid.includes(m));
    assert.deepEqual(both, [], `${at} lists ${both.join(', ')} as both a best and an avoid month`);
  }
});

test('the month arrays agree with the prose they were read from', () => {
  /* Only the cases a machine can check without parsing English properly, but
     they are the ones most likely to drift: an area whose prose says it is
     good all year must not have a partial best list, and an area whose prose
     names no avoid window must not have avoid months invented for it. */
  for (const a of allCountryAreas) {
    const at = `${a.country}/${a.slug}`;
    const best = a.season.bestMonths.en.toLowerCase();
    if (/^year[ -]round/.test(best)) {
      assert.equal(a.season.monthsBest.length, 12,
        `${at} prose says year round but only ${a.season.monthsBest.length} months are marked good`);
    }
    if (a.season.monthsBest.length === 12) {
      assert.deepEqual(a.season.monthsAvoid, [],
        `${at} marks every month good yet also marks months to avoid`);
    }
  }
});

/* ---- Administrative hierarchy ------------------------------------------ */

test('every area is placed in at least one division', () => {
  for (const a of allCountryAreas) {
    assert.ok(Array.isArray(a.divisions) && a.divisions.length > 0,
      `${a.country}/${a.slug} has no division`);
    for (const d of a.divisions) {
      assert.ok(d.trim().length > 0, `${a.country}/${a.slug} has a blank division`);
    }
  }
});

test('the structured hierarchy never claims more than the region text says', () => {
  /* This is the test that makes the hierarchy trustworthy. Every division and
     locality has to appear in the area's own region string, which was written
     and checked during research. If a value cannot be found there it was
     added from memory, and on this site that is exactly what must not happen.
     Writing this test caught four such entries on its first run. */
  for (const a of allCountryAreas) {
    const at = `${a.country}/${a.slug}`;
    for (const d of a.divisions) {
      assert.ok(a.region.includes(d),
        `${at} claims division '${d}', which does not appear in its region string '${a.region}'`);
    }
    if (a.locality) {
      assert.ok(a.region.includes(a.locality),
        `${at} claims locality '${a.locality}', which does not appear in its region string '${a.region}'`);
    }
  }
});

test('divisions are not repeated within one area', () => {
  for (const a of allCountryAreas) {
    assert.equal(new Set(a.divisions).size, a.divisions.length,
      `${a.country}/${a.slug} repeats a division`);
  }
});
