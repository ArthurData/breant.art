import type { L10n } from './types';

/* ═══════════════════════════════════════════════════════════════════════
   Packages hyperverse + autres projets
   ═══════════════════════════════════════════════════════════════════════ */

export interface Pkg {
  name: string;
  /** 'cran' → pastille jaune, 'wip' → pastille sobre. */
  status: 'cran' | 'wip';
  text: L10n;
  href: string;
}

export const packages: Pkg[] = [
  {
    name: 'htmxr',
    status: 'cran',
    text: {
      fr: 'Primitives htmx et intégration plumber2, pour des applis pilotées par le serveur sans écrire de JavaScript.',
      en: 'htmx primitives and plumber2 integration, for server-driven apps without writing JavaScript.',
    },
    href: 'https://github.com/hyperverse-r/htmxr',
  },
  {
    name: 'lucidr',
    status: 'cran',
    text: {
      fr: 'Icônes Lucide en SVG inline pour toute appli web R, sans dépendance externe.',
      en: 'Lucide icons as inline SVG for any R web app, with no external dependency.',
    },
    href: 'https://github.com/hyperverse-r/lucidr',
  },
  {
    name: 'alpiner',
    status: 'wip',
    text: {
      fr: 'Wrapper Alpine.js pour la réactivité côté client, en complément de htmxr.',
      en: 'An Alpine.js wrapper for client-side reactivity, complementing htmxr.',
    },
    href: 'https://github.com/hyperverse-r/alpiner',
  },
  {
    name: 'glitchtipr',
    status: 'wip',
    text: {
      fr: 'Suivi des erreurs pour applications R : envoi vers GlitchTip ou tout service compatible Sentry, avec la pile d’appels complète.',
      en: 'Error tracking for R applications: send errors to GlitchTip or any Sentry-compatible platform, with full call stack context.',
    },
    href: 'https://github.com/hyperverse-r/glitchtipr',
  },
];

export interface Project {
  name: string;
  text: L10n;
  href: string;
}

/** Projet mis en avant (grande carte). */
export const featuredProject = {
  name: 'Signature',
  award: {
    fr: 'Primé au Shiny Contest 2024 de Posit',
    en: 'Awarded at Posit’s 2024 Shiny Contest',
  } as L10n,
  /** Annonce officielle des lauréats. */
  awardUrl: 'https://posit.co/blog/winners-of-the-2024-shiny-contest/',
  text: {
    fr: "Application primée au Shiny Contest 2024 de Posit dans la catégorie « meilleure application Shiny en Python », puis réimplémentée à l'identique en Shiny pour R et en JavaScript natif. Le même produit, trois fois, dans trois stacks.",
    en: 'An application awarded at Posit’s 2024 Shiny Contest in the “best Shiny app in Python” category, then reimplemented identically in Shiny for R and in vanilla JavaScript. The same product three times over, in three different stacks.',
  } as L10n,
  implementations: [
    {
      label: 'Python',
      demo: 'https://connect.thinkr.fr/signature-py/',
      repo: 'https://github.com/ThinkR-open/signature.py',
    },
    {
      label: 'R',
      demo: 'https://connect.thinkr.fr/signature-r/',
      repo: 'https://github.com/ThinkR-open/signature.r',
    },
    {
      label: 'JavaScript',
      demo: 'https://connect.thinkr.fr/signature-js/',
      repo: 'https://github.com/ThinkR-open/signature.js',
    },
  ],
};

export const projects: Project[] = [
  {
    name: 'css2r',
    text: {
      fr: 'Application Shiny qui extrait le CSS d’un site web.',
      en: 'A Shiny app that extracts the CSS of a website.',
    },
    href: 'https://github.com/ThinkR-open/css2r',
  },
  {
    name: 'quarto-confetti',
    text: {
      fr: 'Extension Quarto : des confettis dans tes présentations.',
      en: 'Quarto extension: confetti in your slides.',
    },
    href: 'https://github.com/ArthurData/quarto-confetti',
  },
  {
    name: 'quarto-i18n',
    text: {
      fr: 'Extension Quarto : présentations Reveal.js multilingues.',
      en: 'Quarto extension: multilingual Reveal.js slides.',
    },
    href: 'https://github.com/ArthurData/quarto-i18n',
  },
  {
    name: 'golem',
    text: {
      fr: 'Contributions au framework d’applications Shiny robustes.',
      en: 'Contributions to the framework for robust Shiny apps.',
    },
    href: 'https://github.com/ThinkR-open/golem',
  },
];
