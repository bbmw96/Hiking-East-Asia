import type { LocalizedString } from './types.ts';

export interface Trip {
  slug: string;
  country: 'malaysia' | 'singapore';
  areaSlug: string;
  date: string;
  title: LocalizedString;
  description: LocalizedString;
  organiser: LocalizedString;
  contactUrl: string;
}

export const officialTrips: Trip[] = [];
