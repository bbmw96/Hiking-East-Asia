import { malaysiaAreas } from './malaysia';
import { singaporeAreas } from './singapore';
import { thailandAreas } from './thailand';
import { indonesiaAreas } from './indonesia';
import { vietnamAreas } from './vietnam';
import { philippinesAreas } from './philippines';
import { bruneiAreas } from './brunei';
import { japanAreas } from './japan';
import { southKoreaAreas } from './south-korea';
import type { Locale } from '../i18n/locales';
import type { CountrySlug, LocalizedString } from './types';

export interface OfficialChannel {
  authorityName: string;
  areaName: LocalizedString;
  url: string;
  country: CountrySlug;
}

/** Deduplicated list of every permit-issuing authority already cited across the area data, so this directory can never drift out of sync with the permit boxes it mirrors. Several areas share one authority name (e.g. PERHILITAN, NParks, DNP) but link to that authority's page for a different park, so each entry also carries the area name to tell them apart. The dedup key combines authority name and URL, not URL alone, because a couple of authorities without a dedicated web page (e.g. the Philippines' DENR-run parks) fall back to the same national portal URL while remaining genuinely different offices. */
export function getOfficialChannels(): OfficialChannel[] {
  const areas = [...malaysiaAreas, ...singaporeAreas, ...thailandAreas, ...indonesiaAreas, ...vietnamAreas, ...philippinesAreas, ...bruneiAreas, ...japanAreas, ...southKoreaAreas];
  const seen = new Set<string>();
  const channels: OfficialChannel[] = [];

  for (const area of areas) {
    const key = `${area.permit.authorityName}|${area.permit.url}`;
    if (seen.has(key)) continue;
    seen.add(key);
    channels.push({
      authorityName: area.permit.authorityName,
      areaName: area.name,
      url: area.permit.url,
      country: area.country,
    });
  }

  return channels;
}

export function channelLabel(channel: OfficialChannel, allChannels: OfficialChannel[], locale: Locale): string {
  const sameAuthority = allChannels.filter((c) => c.authorityName === channel.authorityName);
  if (sameAuthority.length <= 1) return channel.authorityName;
  return `${channel.authorityName} · ${channel.areaName[locale]}`;
}
