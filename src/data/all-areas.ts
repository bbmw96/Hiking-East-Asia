import { malaysiaAreas } from './malaysia.ts';
import { singaporeAreas } from './singapore.ts';
import { thailandAreas } from './thailand.ts';
import { indonesiaAreas } from './indonesia.ts';
import { vietnamAreas } from './vietnam.ts';
import { philippinesAreas } from './philippines.ts';
import { bruneiAreas } from './brunei.ts';
import { japanAreas } from './japan.ts';
import { southKoreaAreas } from './south-korea.ts';
import { taiwanAreas } from './taiwan.ts';
import { hongKongAreas } from './hong-kong.ts';
import { chinaAreas } from './china.ts';
import { northKoreaAreas } from './north-korea.ts';
import type { Area, CountrySlug } from './types.ts';

/** Every trail area on the site, in the order the countries are presented.
 *  Anything that needs to reason across countries (the official channel
 *  directory, the per-country safety sections) reads this one list, so a new
 *  country only has to be added here to appear everywhere it should. */
export const allAreas: Area[] = [
  ...malaysiaAreas,
  ...singaporeAreas,
  ...thailandAreas,
  ...indonesiaAreas,
  ...vietnamAreas,
  ...philippinesAreas,
  ...bruneiAreas,
  ...japanAreas,
  ...southKoreaAreas,
  ...taiwanAreas,
  ...hongKongAreas,
  ...chinaAreas,
  ...northKoreaAreas,
];

export function getAreasByCountry(country: CountrySlug): Area[] {
  return allAreas.filter((area) => area.country === country);
}
