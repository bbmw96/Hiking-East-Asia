import { ui } from './ui';
import { defaultLocale, type Locale } from './locales';

/** Astro's configured base path with any trailing slash removed, so it is '' at a
 *  domain root and '/Some-Subpath' when the site is served from a subdirectory. */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function getUi(locale: Locale) {
  return ui[locale] ?? ui[defaultLocale];
}

/** Prefixes an absolute site path with the configured base, so the same markup works
 *  whether the site is served from a domain root (hiking.bbmw0.com) or from a
 *  project subpath (a GitHub Pages project site). Pass paths starting with '/'. */
export function url(path: string): string {
  return `${base}${path}`;
}

/** Swap the locale segment of a path, e.g. /ms/malaysia/kinabalu -> /ar/malaysia/kinabalu.
 *  Accepts a pathname that may carry the base prefix, and returns one that carries it too. */
export function swapLocale(pathname: string, nextLocale: Locale): string {
  const withoutBase = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  const parts = withoutBase.split('/').filter(Boolean);
  parts[0] = nextLocale;
  return `${base}/${parts.join('/')}/`;
}
