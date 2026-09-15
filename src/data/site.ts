import type { L10n } from './types';

/* ═══════════════════════════════════════════════════════════════════════
   Identité, méta et liens du site.
   ═══════════════════════════════════════════════════════════════════════ */

export const site = {
  name: 'Arthur Bréant',
  domain: 'breant.art',
  url: 'https://breant.art',
  year: 2026,

  titleByLocale: {
    fr: 'Arthur Bréant · Développeur Shiny et applications web R & Python',
    en: 'Arthur Bréant · Shiny developer, web apps with R & Python',
  } satisfies Record<'fr' | 'en', string>,

  descriptionByLocale: {
    fr: "Arthur Bréant, consultant et formateur chez ThinkR à Lille. Développeur d'applications web avec R et Python : Shiny, hyperverse, htmx. Expert Shiny en France, conférencier aux Rencontres R.",
    en: 'Arthur Bréant, consultant and trainer at ThinkR in Lille, France. He builds web applications with R and Python: Shiny, hyperverse, htmx. Shiny expert and speaker at the Rencontres R conference.',
  } satisfies Record<'fr' | 'en', string>,

  ogDescriptionByLocale: {
    fr: 'Je construis des applications web modernes avec R et Python, de la maquette à la production.',
    en: 'I build modern web applications with R and Python, from mockup to production.',
  } satisfies Record<'fr' | 'en', string>,

  /** Image de partage (1200 × 630), générée depuis la charte du site. */
  ogImage: '/og.png',

  /** Sujets déclarés dans le JSON-LD `knowsAbout`. */
  knowsAbout: [
    'Shiny',
    'R (programming language)',
    'Python (programming language)',
    'Web development',
    'htmx',
    'Data analysis',
    'Data visualization',
    'golem',
    'Quarto',
    'plumber2',
    'Alpine.js',
    'SQL',
  ],
} as const;

export const nav: { href: string; label: L10n }[] = [
  { href: '#hyperverse', label: { fr: 'hyperverse', en: 'hyperverse' } },
  { href: '#topiq', label: { fr: 'TOPIQ', en: 'TOPIQ' } },
  { href: '#talks', label: { fr: 'Talks', en: 'Talks' } },
  { href: '#articles', label: { fr: 'Articles', en: 'Articles' } },
  { href: '#parcours', label: { fr: 'Parcours', en: 'Career' } },
  { href: '#pedagogie', label: { fr: 'Pédagogie', en: 'Teaching' } },
  { href: '#speaker', label: { fr: 'Speaker kit', en: 'Speaker kit' } },
];

export const contact = {
  /** Contact privilégié : c'est le plus simple pour me joindre. */
  linkedin: 'https://www.linkedin.com/in/arthurbreant/',
  github: 'https://github.com/ArthurData',
  email: 'breant.arthur@gmail.com',
};

/** Profils et sites, libellés pour /llms.txt et repris dans le `sameAs` du JSON-LD. */
export const profiles = [
  { label: 'GitHub', url: 'https://github.com/ArthurData' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/arthurbreant/' },
  { label: 'hyperverse', url: 'https://hyperverse.world' },
  { label: 'pierrot.show', url: 'https://pierrot.show/' },
  { label: 'TOPIQ', url: 'https://topiq.run' },
];

export const sameAs = profiles.map((profile) => profile.url);
