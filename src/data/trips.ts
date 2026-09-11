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

/**
 * The other kind of trip on this page: not an upcoming one the editors have
 * vetted, but a completed one a country's own admin logged afterwards. These
 * live in Supabase, not here, because they are written from the browser by
 * whoever holds that country's password rather than committed to the repo.
 * The shape mirrors the `trips` table exactly.
 */
export interface LoggedTrip {
  id: string;
  country: string;
  area_slug: string | null;
  locality: string | null;
  region_label: string | null;
  trip_date: string;
  title: LocalizedString;
  summary: LocalizedString;
  participant_count: number | null;
  photos: { path: string }[];
  published: boolean;
  created_at: string;
}
