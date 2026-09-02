import type { Locale } from '../i18n/locales';

export type Difficulty = 'easy' | 'moderate' | 'hard' | 'expert';

export type LocalizedString = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export interface OfficialLink {
  label: string;
  url: string;
}

export interface Area {
  slug: string;
  country: 'malaysia' | 'singapore';
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
