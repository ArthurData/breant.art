import { en } from './en';
import { fr } from './fr';

export type Locale = 'en' | 'fr';
export type Translations = typeof en;

export const translations: Record<Locale, Translations> = { en, fr };

export const defaultLocale: Locale = 'en';
