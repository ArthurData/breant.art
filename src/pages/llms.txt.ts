import type { APIRoute } from 'astro';
import { site, sameAs } from '../data/site';
import { speaker, hyperverse, topiq, pedagogy } from '../data/content';
import { articles, blog } from '../data/articles';
import { talks, talksPage } from '../data/talks';
import { packages, projects, featuredProject } from '../data/projects';

/**
 * /llms.txt — résumé en texte brut, destiné aux moteurs de réponse et aux
 * assistants qui lisent le site sans exécuter son JavaScript. Généré depuis
 * les mêmes données que la page, donc toujours à jour.
 */
export const GET: APIRoute = () => {
  const lines: string[] = [];
  const push = (...items: string[]) => lines.push(...items);

  push(`# ${site.name}`, '');
  push(`> ${speaker.bioShort.en}`, '');
  push(`Site: ${site.url}`, `Based in: France`, `Languages: French, English`, '');

  push('## Bio', '', speaker.bioLong.en, '');

  push('## Expertise', '', ...site.knowsAbout.map((s) => `- ${s}`), '');

  push(
    '## hyperverse',
    '',
    `${hyperverse.lede.en}`,
    `Site: ${hyperverse.site} | Source: ${hyperverse.github}`,
    '',
    ...packages.map(
      (pkg) =>
        `- ${pkg.name} (${pkg.status === 'cran' ? 'on CRAN' : 'in development'}): ${pkg.text.en} ${pkg.href}`
    ),
    ''
  );

  push(
    '## Awarded work',
    '',
    `- ${featuredProject.name}: ${featuredProject.text.en}`,
    `  Award announcement: ${featuredProject.awardUrl}`,
    ...featuredProject.implementations.map(
      (impl) => `  ${impl.label}: demo ${impl.demo} | source ${impl.repo}`
    ),
    ''
  );

  push(
    '## TOPIQ',
    '',
    topiq.text.en,
    `Site: ${topiq.url}`,
    ...topiq.stats.map((stat) => `- ${stat.key.en}: ${stat.value.en}`),
    ''
  );

  push(
    '## Other projects',
    '',
    ...projects.map((project) => `- ${project.name}: ${project.text.en} ${project.href}`),
    ''
  );

  push(
    '## Talks',
    '',
    `${talksPage.lede.en} ${talksPage.url}`,
    ...talks.map(
      (talk) =>
        `- ${talk.iso} | ${talk.title.en} | ${talk.event}${talk.slides ? ` | slides: ${talk.slides}` : ''}`
    ),
    ''
  );

  push(
    '## Articles',
    '',
    `Published on ${blog.name}, the ThinkR blog (${blog.url}).`,
    ...articles.map(
      (article) => `- ${article.iso} | ${article.title} | ${article.summary.en} | ${article.href}`
    ),
    ''
  );

  push('## Teaching', '', pedagogy.text.en, '');

  push(
    '## Speaking topics',
    '',
    ...speaker.topics.map((topic) => `- ${topic.en}`),
    ''
  );

  push('## Elsewhere', '', ...sameAs.map((url) => `- ${url}`), '');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
