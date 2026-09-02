import { ui } from './ui';
import { defaultLocale, type Locale } from './locales';

export function getUi(locale: Locale) {
  return ui[locale] ?? ui[defaultLocale];
}

/** Swap the locale segment of a path, e.g. /ms/malaysia/kinabalu -> /ar/malaysia/kinabalu */
export function swapLocale(pathname: string, nextLocale: Locale): string {
  const parts = pathname.split('/').filter(Boolean);
  parts[0] = nextLocale;
  return `/${parts.join('/')}/`;
}
