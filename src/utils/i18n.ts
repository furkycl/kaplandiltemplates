import en from '../locales/en.json';
import tr from '../locales/tr.json';
import ar from '../locales/ar.json';
import ko from '../locales/ko.json';
import ja from '../locales/ja.json';
import de from '../locales/de.json';
import fr from '../locales/fr.json';
import it from '../locales/it.json';
import es from '../locales/es.json';
import pt from '../locales/pt.json';

type Locale = 'en' | 'tr' | 'ar' | 'ko' | 'ja' | 'de' | 'fr' | 'it' | 'es' | 'pt';

const translations: Record<Locale, Record<string, unknown>> = {
  en, tr, ar, ko, ja, de, fr, it, es, pt,
};

const storedLocale = localStorage.getItem('locale') as Locale | null;
let currentLocale: Locale = storedLocale && storedLocale in translations ? storedLocale : 'en';

export function setLocale(locale: Locale): void {
  currentLocale = locale;
  localStorage.setItem('locale', locale);
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
    { code: 'ar', name: 'العربية' },
    { code: 'ko', name: '한국어' },
    { code: 'ja', name: '日本語' },
    { code: 'de', name: 'Deutsch' },
    { code: 'fr', name: 'Français' },
    { code: 'it', name: 'Italiano' },
    { code: 'es', name: 'Español' },
    { code: 'pt', name: 'Português' },
  ];
}
