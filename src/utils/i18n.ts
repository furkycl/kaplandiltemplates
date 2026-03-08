import en from '../locales/en.json';
import tr from '../locales/tr.json';

type Locale = 'en' | 'tr';

const translations: Record<Locale, Record<string, unknown>> = { en, tr };

let currentLocale: Locale = 'en';

export function setLocale(locale: Locale): void {
  currentLocale = locale;
}

export function getLocale(): Locale {
  return currentLocale;
}

export function t(path: string): string {
  const keys = path.split('.');
  let result: unknown = translations[currentLocale];

  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }

  return typeof result === 'string' ? result : path;
}

export function getSupportedLocales(): { code: Locale; name: string }[] {
  return [
    { code: 'en', name: 'English' },
    { code: 'tr', name: 'Türkçe' },
  ];
}
