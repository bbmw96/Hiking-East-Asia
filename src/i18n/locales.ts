export const locales = ['en', 'ms', 'zh-cn', 'zh-hk', 'ta', 'ar'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

interface LocaleMeta {
  label: string;
  nativeLabel: string;
  dir: 'ltr' | 'rtl';
  htmlLang: string;
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: { label: 'English (UK)', nativeLabel: 'English (UK)', dir: 'ltr', htmlLang: 'en-GB' },
  ms: { label: 'Malay', nativeLabel: 'Bahasa Melayu', dir: 'ltr', htmlLang: 'ms-MY' },
  'zh-cn': { label: 'Mandarin (Simplified)', nativeLabel: '简体中文', dir: 'ltr', htmlLang: 'zh-Hans' },
  'zh-hk': { label: 'Cantonese (Traditional)', nativeLabel: '繁體中文（廣東話）', dir: 'ltr', htmlLang: 'zh-Hant-HK' },
  ta: { label: 'Tamil', nativeLabel: 'தமிழ்', dir: 'ltr', htmlLang: 'ta' },
  ar: { label: 'Arabic', nativeLabel: 'العربية', dir: 'rtl', htmlLang: 'ar' },
};

export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function isRTL(locale: Locale): boolean {
  return localeMeta[locale].dir === 'rtl';
}

export function localePath(locale: Locale, path: string): string {
  const clean = path.replace(/^\/+/, '');
  return `/${locale}${clean ? `/${clean}` : ''}`;
}
