import type { L10n } from './types';

/* ═══════════════════════════════════════════════════════════════════════
   Contenu rédactionnel de la page.
   Les listes sont ailleurs : projects.ts, talks.ts, articles.ts.
   ═══════════════════════════════════════════════════════════════════════ */

export const hero = {
  eyebrow: {
    fr: 'Arthur Bréant · consultant & formateur chez ThinkR',
    en: 'Arthur Bréant · consultant & trainer at ThinkR',
  } as L10n,
  lede: {
    fr: "De la maquette à la production. Expert Shiny en R et en Python, je suis aussi l'auteur d'hyperverse, un pont entre le monde de la data et celui du développement web moderne.",
    en: 'From mockup to production. A Shiny expert in R and Python, I am also the author of hyperverse, a bridge between the data world and modern web development.',
  } as L10n,
};

export const pillars: {
  tone: 'violet' | 'coral' | 'teal';
  title: string;
  text: L10n;
  href?: string;
}[] = [
  {
    tone: 'violet',
    title: 'Shiny R & Python',
    text: {
      fr: 'Des applications Shiny pensées pour la production : architecture, tests, sécurité, performance, déploiement.',
      en: 'Shiny applications built for production: architecture, testing, security, performance, deployment.',
    },
  },
  {
    tone: 'coral',
    title: 'hyperverse',
    text: {
      fr: "L'écosystème R que j'ai créé pour construire des applis web au-delà de Shiny.",
      en: 'The R ecosystem I created to build web apps beyond Shiny.',
    },
    href: '#hyperverse',
  },
  {
    tone: 'teal',
    title: 'TOPIQ',
    text: {
      fr: 'Concevoir, construire et lancer un produit complet, seul, de bout en bout.',
      en: 'Designing, building and shipping a complete product, solo, end to end.',
    },
    href: '#topiq',
  },
];

export const hyperverse = {
  eyebrow: { fr: 'Projet phare', en: 'Flagship project' } as L10n,
  site: 'https://hyperverse.world',
  github: 'https://github.com/hyperverse-r',
  talks: 'https://hyperverse.world/talks',
  lede: {
    fr: "Écosystème R modulaire pour construire des applications web modernes « the web way » : le serveur pilote l'interface, le navigateur reste léger.",
    en: 'A modular R ecosystem for building modern web applications the web way: the server drives the interface, the browser stays light.',
  } as L10n,
};

export const topiq = {
  url: 'https://topiq.run',
  text: {
    fr: "Comparateur analytique de chaussures de running. Tout le marché sur un graphique interactif (drop, stack, poids, prix), un palmarès des modèles non dominés à chaque budget, un assistant de recommandation et un blog.",
    en: 'An analytical running-shoe comparator. The whole market on one interactive chart (drop, stack, weight, price), a ranking of non-dominated models at every budget, a recommendation assistant and a blog.',
  } as L10n,
  note: {
    fr: "Un vrai projet en production, monétisé par des liens affiliés. La preuve que je sais concevoir, lancer et faire vivre un produit complet, seul.",
    en: 'A real project in production, monetised through affiliate links. Proof that I can design, ship and keep alive a complete product on my own.',
  } as L10n,
  stats: [
    {
      key: { fr: 'Stack', en: 'Stack' } as L10n,
      value: { fr: 'Astro', en: 'Astro' } as L10n,
    },
    {
      key: { fr: 'Modèles référencés', en: 'Models listed' } as L10n,
      value: { fr: '+200', en: '+200' } as L10n,
    },
    {
      key: { fr: 'Visites par mois', en: 'Visits per month' } as L10n,
      value: { fr: '+1 000', en: '+1,000' } as L10n,
    },
    {
      key: { fr: 'Modèle économique', en: 'Business model' } as L10n,
      value: { fr: 'liens affiliés', en: 'affiliate links' } as L10n,
    },
  ],
};

export const pedagogy = {
  title: { fr: 'Pédagogie', en: 'Teaching' } as L10n,
  text: {
    fr: "Formateur chez ThinkR sur trois formations certifiantes reconnues par l'État, du premier niveau au niveau avancé. Savoir expliquer, c'est la moitié du métier.",
    en: 'Trainer at ThinkR on three state-recognised certifying courses, from beginner to advanced level. Being able to explain things is half the job.',
  } as L10n,
  testimonial: {
    /* Extrait d'un avis vérifié, laissé en français dans les deux langues :
       traduire les mots d'un client reviendrait à les réécrire. */
    quote:
      'Formation très complète sur Git avec R ! Arthur a été très pédagogue et a pu répondre à toutes nos questions.',
    author: 'I. N.',
    date: { fr: 'mars 2025', en: 'March 2025' } as L10n,
    sourceLabel: { fr: 'avis vérifié', en: 'verified review' } as L10n,
    sourceUrl: 'https://www.avis-verifies.com/avis-clients/thinkr.fr?p=25ctq',
  },
};

export const skills: {
  tone: 'violet' | 'coral' | 'teal';
  label: L10n;
  list: string;
}[] = [
  {
    tone: 'violet',
    label: { fr: 'Data', en: 'Data' },
    list: 'R · Python · SQL',
  },
  {
    tone: 'coral',
    label: { fr: 'Web', en: 'Web' },
    list: 'htmx · Alpine.js · React · Vue.js · Astro · JavaScript · CSS',
  },
  {
    tone: 'teal',
    label: { fr: 'Écosystème R', en: 'R ecosystem' },
    list: 'Shiny · golem · plumber2 · Quarto · hyperverse',
  },
];

export const speaker = {
  bioShort: {
    fr: "Arthur Bréant est consultant et formateur chez ThinkR. Il construit des applications web avec R et Python et a créé hyperverse, un écosystème R pour développer des applications web modernes.",
    en: 'Arthur Bréant is a consultant and trainer at ThinkR. He builds web applications with R and Python and created hyperverse, an R ecosystem for modern web development.',
  } as L10n,
  bioLong: {
    fr: "Consultant et formateur chez ThinkR, Arthur Bréant conçoit et déploie des applications web avec R et Python, de la maquette à la production. Expert Shiny en R comme en Python, il est l'auteur de l'écosystème hyperverse, qui rapproche le développement R des pratiques du web moderne. Il enseigne trois formations certifiantes reconnues par l'État, intervient chaque année aux Rencontres R et publie sur le blog Rtask.",
    en: 'A consultant and trainer at ThinkR, Arthur Bréant designs and ships web applications with R and Python, from mockup to production. A Shiny expert in both R and Python, he is the author of the hyperverse ecosystem, which brings R development closer to modern web practices. He teaches three state-recognised certifying courses, speaks every year at the Rencontres R conference and writes on the Rtask blog.',
  } as L10n,
  topics: [
    { fr: 'Shiny en production', en: 'Shiny in production' },
    {
      fr: 'Le web moderne avec R et hyperverse',
      en: 'Modern web development with R and hyperverse',
    },
    { fr: 'Shiny for Python', en: 'Shiny for Python' },
    { fr: 'Sécuriser une application Shiny', en: 'Securing a Shiny application' },
    { fr: "De la maquette à l'application", en: 'From mockup to application' },
  ] as L10n[],
  photo: '/avatar.webp',
  offCode: {
    label: { fr: 'Hors du code', en: 'Off the clock' } as L10n,
    text: {
      fr: "Coureur, nageur et cycliste. TOPIQ est né sur ce terrain de jeu. J'aime aussi voyager, bien manger et lire.",
      en: 'Runner, swimmer and cyclist. TOPIQ was born on that playground. I also like travelling, eating well and reading.',
    } as L10n,
  },
};

export const contactSection = {
  title: {
    fr: "Une idée, une question, ou juste envie d'échanger ?",
    en: 'An idea, a question, or just up for a chat?',
  } as L10n,
};
