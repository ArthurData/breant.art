import type { L10n } from './types';

/* ═══════════════════════════════════════════════════════════════════════
   Articles publiés sur Rtask, le blog de ThinkR.
   ═══════════════════════════════════════════════════════════════════════ */

export interface Article {
  /** Source, ex. « Rtask ». */
  source: string;
  /** Date ISO, pour <time datetime> et le JSON-LD. */
  iso: string;
  /** Date affichée. */
  date: L10n;
  title: string;
  summary: L10n;
  href: string;
}

/** Le blog sur lequel ces articles sont publiés (celui de ThinkR). */
export const blog = {
  name: 'Rtask',
  url: 'https://rtask.thinkr.fr/',
};

export const articles: Article[] = [
  {
    source: 'Rtask',
    iso: '2025-06-12',
    date: { fr: '12 juin 2025', en: '12 June 2025' },
    title: 'From lab to real life: how your Shiny application can survive its users',
    summary: {
      fr: 'Les trois niveaux de tests (unitaires, intégration, bout en bout) qui gardent une application Shiny stable en production.',
      en: 'The three levels of testing (unit, integration, end to end) that keep a Shiny application stable in production.',
    },
    href: 'https://rtask.thinkr.fr/from-lab-to-real-life-how-your-shiny-application-can-survive-its-users/',
  },
  {
    source: 'Rtask',
    iso: '2025-05-21',
    date: { fr: '21 mai 2025', en: '21 May 2025' },
    title: 'Security blind spots in Shiny: why your app is more vulnerable than you think',
    summary: {
      fr: 'XSS, injection de commandes, injection SQL : les trois failles qui menacent une application Shiny, et comment s’en protéger.',
      en: 'XSS, command injection and SQL injection: the three flaws that threaten a Shiny application, and how to guard against them.',
    },
    href: 'https://rtask.thinkr.fr/security-blind-spots-in-shiny-why-your-app-is-more-vulnerable-than-you-think/',
  },
  {
    source: 'Rtask',
    iso: '2024-11-22',
    date: { fr: '22 novembre 2024', en: '22 November 2024' },
    title: 'Signature.py: award-winning application at the 2024 Shiny Contest',
    summary: {
      fr: 'Architecture modulaire, style, tests et intégration continue de l’application primée au Shiny Contest 2024 de Posit.',
      en: 'Modular architecture, styling, testing and continuous integration behind the app awarded at Posit’s 2024 Shiny Contest.',
    },
    href: 'https://rtask.thinkr.fr/signature-py-award-winning-application-at-the-2024-shiny-contest/',
  },
];
