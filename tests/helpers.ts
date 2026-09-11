import { malaysiaAreas } from '../src/data/malaysia.ts';
import { singaporeAreas } from '../src/data/singapore.ts';
import { thailandAreas } from '../src/data/thailand.ts';
import { indonesiaAreas } from '../src/data/indonesia.ts';
import { vietnamAreas } from '../src/data/vietnam.ts';
import { philippinesAreas } from '../src/data/philippines.ts';
import { bruneiAreas } from '../src/data/brunei.ts';
import { japanAreas } from '../src/data/japan.ts';
import { southKoreaAreas } from '../src/data/south-korea.ts';
import { taiwanAreas } from '../src/data/taiwan.ts';
import { hongKongAreas } from '../src/data/hong-kong.ts';
import { chinaAreas } from '../src/data/china.ts';
import { northKoreaAreas } from '../src/data/north-korea.ts';
import type { Area } from '../src/data/types.ts';

/* The tests import each country file directly rather than through
   all-areas.ts, so a country accidentally dropped from that aggregate is a
   test failure rather than something the suite silently stops checking. */
export const areasByCountry: Record<string, Area[]> = {
  malaysia: malaysiaAreas,
  singapore: singaporeAreas,
  thailand: thailandAreas,
  indonesia: indonesiaAreas,
  vietnam: vietnamAreas,
  philippines: philippinesAreas,
  brunei: bruneiAreas,
  japan: japanAreas,
  'south-korea': southKoreaAreas,
  taiwan: taiwanAreas,
  'hong-kong': hongKongAreas,
  china: chinaAreas,
  'north-korea': northKoreaAreas,
};

export const allCountryAreas: Area[] = Object.values(areasByCountry).flat();

export const LOCALES = ['en', 'ms', 'zh-cn', 'zh-hk', 'ta', 'ar'] as const;

/** Every key path in a nested object, e.g. 'safety.scamTitle'. */
export function keyPaths(obj: unknown, prefix = ''): string[] {
  if (obj === null || typeof obj !== 'object') return [prefix];
  return Object.entries(obj as Record<string, unknown>).flatMap(([k, v]) =>
    keyPaths(v, prefix ? `${prefix}.${k}` : k)
  );
}
