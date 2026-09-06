import type { Locale } from '../i18n/locales.ts';

export type Difficulty = 'easy' | 'moderate' | 'hard' | 'expert';

export type LocalizedString = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export interface OfficialLink {
  label: string;
  url: string;
}

export type CountrySlug =
  | 'malaysia'
  | 'singapore'
  | 'thailand'
  | 'indonesia'
  | 'vietnam'
  | 'philippines'
  | 'brunei'
  | 'japan'
  | 'south-korea'
  | 'taiwan'
  | 'hong-kong'
  | 'china';

export interface Area {
  slug: string;
  country: CountrySlug;
  region: string;
  coordinates: { lat: number; lng: number };
  difficulty: Difficulty;
  duration: LocalizedString;
  elevationM?: number;
  permit: {
    required: boolean;
    authorityName: string;
    url: string;
    fee?: LocalizedString;
    advanceNotice?: LocalizedString;
    howToApply: LocalizedString;
  };
  season: {
    /* The prose below is the source of truth: it was checked against the
       authority when the area was written. These two arrays are a reading of
       that prose as month numbers, so the site can say where today sits in a
       season without anyone having to parse a sentence at runtime. A test
       asserts they never contradict each other. */
    monthsBest: number[];
    monthsAvoid: number[];
    bestMonths: LocalizedString;
    avoidMonths?: LocalizedString;
    notes: LocalizedString;
  };
  name: LocalizedString;
  tagline: LocalizedString;
  overview: LocalizedString;
  highlights: LocalizedList;
  gettingThere: LocalizedString;
  safety: LocalizedString;
  whatToBring: LocalizedList;
  heroGradient: string;
  heroAlt: LocalizedString;
  officialLinks: OfficialLink[];
}

export interface CountryMeta {
  slug: string;
  status: 'live' | 'coming-soon';
  region: 'southeast-asia' | 'east-asia';
  name: LocalizedString;
  teaser: LocalizedString;
  heroGradient: string;
  flagEmoji: string;
}
