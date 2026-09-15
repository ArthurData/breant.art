/** Chaîne bilingue. Résolue à la compilation par <T />, selon la locale de la page. */
export interface L10n {
  fr: string;
  en: string;
}

export type Locale = 'fr' | 'en';

export const locales: Locale[] = ['fr', 'en'];
export const defaultLocale: Locale = 'fr';

/** `Astro.currentLocale` est typé `string | undefined` : on le ramène à Locale. */
export function resolveLocale(current: string | undefined): Locale {
  return current === 'en' ? 'en' : defaultLocale;
}

/** URL de la page dans une locale donnée. */
export function localePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}
