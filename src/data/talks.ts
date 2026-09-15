import type { L10n } from './types';

/* ═══════════════════════════════════════════════════════════════════════
   Talks. Les filtres (thèmes + années) sont dérivés de cette liste :
   ajoute une entrée, le filtre correspondant apparaît.
   ═══════════════════════════════════════════════════════════════════════ */

export interface Talk {
  /** Date ISO, pour <time datetime> et le JSON-LD. */
  iso: string;
  /** Date affichée. */
  date: L10n;
  /** Année, utilisée comme filtre. */
  year: string;
  title: L10n;
  event: string;
  /** Thème, utilisé comme filtre. */
  topic: L10n;
  slides: string | null;
  video: string | null;
}

/** Page dédiée qui regroupe la série des Rencontres R. */
export const talksPage = {
  url: 'https://pierrot.show/',
  label: { fr: 'pierrot.show', en: 'pierrot.show' } as L10n,
  lede: {
    fr: "Chaque année aux Rencontres R, Pierrot vit une nouvelle aventure : c'est mon running gag pour faire passer le sujet du talk. Toute la série est réunie sur",
    en: 'Every year at the Rencontres R conference, Pierrot lives a new adventure: it is my running gag for carrying the topic of the talk. The whole series is gathered on',
  } as L10n,
};

export const talks: Talk[] = [
  {
    iso: '2026-06-17',
    date: { fr: '17 juin 2026', en: '17 June 2026' },
    year: '2026',
    title: {
      fr: 'Hyperverse : faire du web depuis R, le web comme il a été conçu',
      en: 'Hyperverse: building for the web from R, the way the web was designed',
    },
    event: 'Rencontres R 2026',
    topic: { fr: 'hyperverse', en: 'hyperverse' },
    slides: 'https://hyperverse.world/talks/rencontres-r-2026/',
    video: null,
  },
  {
    iso: '2026-06-16',
    date: { fr: '16 juin 2026', en: '16 June 2026' },
    year: '2026',
    title: { fr: 'La sécurité', en: 'Security' },
    event: 'Rencontres R 2026',
    topic: { fr: 'Sécurité', en: 'Security' },
    slides: 'https://arthurdata.github.io/rencontresR2026',
    video: null,
  },
  {
    iso: '2025-06-11',
    date: { fr: '11 juin 2025', en: '11 June 2025' },
    year: '2025',
    title: { fr: 'Les tests', en: 'Testing' },
    event: 'Rencontres R 2025',
    topic: { fr: 'Tests', en: 'Testing' },
    slides: 'https://arthurdata.github.io/rencontresR2025',
    video: null,
  },
  {
    iso: '2023-06-01',
    date: { fr: 'juin 2023', en: 'June 2023' },
    year: '2023',
    title: {
      fr: 'Construiriez-vous votre cuisine sans en avoir fait des plans ?',
      en: 'Would you build your kitchen without drawing the plans first?',
    },
    event: 'Rencontres R 2023',
    topic: { fr: 'Conception', en: 'Design' },
    slides: 'https://arthurdata.github.io/rencontresR2023',
    video: null,
  },
];

/** Thèmes (ordre d'apparition) puis années (décroissant). */
export function talkFilters(list: Talk[]): { key: string; label: L10n }[] {
  const topics: { key: string; label: L10n }[] = [];

  for (const talk of list) {
    if (!topics.some((t) => t.key === talk.topic.fr)) {
      topics.push({ key: talk.topic.fr, label: talk.topic });
    }
  }

  const years = [...new Set(list.map((t) => t.year))]
    .sort()
    .reverse()
    .map((year) => ({ key: year, label: { fr: year, en: year } }));

  return [...topics, ...years];
}
