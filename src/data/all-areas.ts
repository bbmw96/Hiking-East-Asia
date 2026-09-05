import { malaysiaAreas } from './malaysia';
import { singaporeAreas } from './singapore';
import { thailandAreas } from './thailand';
import { indonesiaAreas } from './indonesia';
import { vietnamAreas } from './vietnam';
import { philippinesAreas } from './philippines';
import { bruneiAreas } from './brunei';
import { japanAreas } from './japan';
import { southKoreaAreas } from './south-korea';
import { taiwanAreas } from './taiwan';
import { hongKongAreas } from './hong-kong';
import { chinaAreas } from './china';
import type { Area, CountrySlug } from './types';

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
];

export function getAreasByCountry(country: CountrySlug): Area[] {
  return allAreas.filter((area) => area.country === country);
}
