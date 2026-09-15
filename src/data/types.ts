/** Chaîne bilingue. Rendue par <T /> en deux <span data-l>, une seule visible. */
export interface L10n {
  fr: string;
  en: string;
}

export type Locale = 'fr' | 'en';

export const locales: Locale[] = ['fr', 'en'];
export const defaultLocale: Locale = 'fr';
