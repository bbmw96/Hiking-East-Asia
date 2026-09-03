import { malaysiaAreas } from './malaysia';
import { singaporeAreas } from './singapore';

export interface OfficialChannel {
  authorityName: string;
  url: string;
  country: 'malaysia' | 'singapore';
}

/** Deduplicated list of every permit-issuing authority already cited across the area data, so this directory can never drift out of sync with the permit boxes it mirrors. */
export function getOfficialChannels(): OfficialChannel[] {
  const areas = [...malaysiaAreas, ...singaporeAreas];
  const seen = new Set<string>();
  const channels: OfficialChannel[] = [];

  for (const area of areas) {
    const key = area.permit.url;
    if (seen.has(key)) continue;
    seen.add(key);
    channels.push({
      authorityName: area.permit.authorityName,
      url: area.permit.url,
      country: area.country,
    });
  }

  return channels;
}
