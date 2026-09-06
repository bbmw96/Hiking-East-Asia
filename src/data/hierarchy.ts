import { allAreas } from './all-areas.ts';
import type { Area, CountrySlug } from './types.ts';

export interface DivisionGroup {
  division: string;
  areas: Area[];
}

/**
 * Groups a country's areas by administrative division.
 *
 * An area that spans more than one division appears under each of them, which
 * is deliberate: Taman Negara really is in Pahang and in Kelantan and in
 * Terengganu, and someone browsing Kelantan should find it. The count of
 * groups is therefore not the count of areas.
 */
export function divisionsForCountry(country: CountrySlug): DivisionGroup[] {
  const byDivision = new Map<string, Area[]>();
  for (const area of allAreas) {
    if (area.country !== country) continue;
    for (const division of area.divisions) {
      const list = byDivision.get(division) ?? [];
      list.push(area);
      byDivision.set(division, list);
    }
  }
  return [...byDivision.entries()]
    .map(([division, areas]) => ({ division, areas }))
    .sort((a, b) => a.division.localeCompare(b.division, 'en'));
}

/** Every division named anywhere on the site, with its country. */
export function allDivisions(): { country: CountrySlug; division: string; count: number }[] {
  const seen = new Map<string, { country: CountrySlug; division: string; count: number }>();
  for (const area of allAreas) {
    for (const division of area.divisions) {
      const key = `${area.country}|${division}`;
      const row = seen.get(key) ?? { country: area.country, division, count: 0 };
      row.count += 1;
      seen.set(key, row);
    }
  }
  return [...seen.values()].sort(
    (a, b) => a.country.localeCompare(b.country) || a.division.localeCompare(b.division, 'en')
  );
}
