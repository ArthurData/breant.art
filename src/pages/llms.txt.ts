import type { APIRoute } from 'astro';
import { site, profiles } from '../data/site';
import { speaker, hyperverse, topiq, pedagogy, career } from '../data/content';
import { articles, blog } from '../data/articles';
import { talks, talksPage } from '../data/talks';
import { packages, projects, featuredProject } from '../data/projects';

/**
 * /llms.txt — résumé Markdown, destiné aux moteurs de réponse et aux
 * assistants qui lisent le site sans exécuter son JavaScript. Généré depuis
 * les mêmes données que la page, donc toujours à jour.
 *
 * Format llmstxt.org : un H1, une citation de résumé, puis des sections H2
 * composées de listes de liens « - [nom](url): description ».
 */
export const GET: APIRoute = () => {
  const lines: string[] = [];
  const push = (...items: string[]) => lines.push(...items);
  const link = (label: string, url: string) => `[${label}](${url})`;

  push(`# ${site.name}`, '');
  push(`> ${speaker.bioShort.en}`, '');
  push('Based in Lille, France. Writes and speaks in French and English.', '');
  push(
    `- ${link(`${site.domain} (French)`, site.url)}`,
    `- ${link(`${site.domain} (English)`, `${site.url}/en/`)}`,
    ''
  );

  push('## Bio', '', speaker.bioLong.en, '');

  push(
    '## Career',
    '',
    ...career.jobs.map(
      (job) => `- ${job.period.en} | ${job.role.en} | ${job.org} | ${career.place.en}`
    ),
    ''
  );

  push('## Expertise', '', ...site.knowsAbout.map((skill) => `- ${skill}`), '');

  push(
    '## hyperverse',
    '',
    hyperverse.lede.en,
    '',
    `- ${link('hyperverse', hyperverse.site)}: the ecosystem's documentation site.`,
    `- ${link('hyperverse on GitHub', hyperverse.github)}: source of every package.`,
    ...packages.map(
      (pkg) =>
        `- ${link(pkg.name, pkg.href)} (${pkg.status === 'cran' ? 'on CRAN' : 'in development'}): ${pkg.text.en}`
    ),
    ''
  );

  push(
    '## Awarded work',
    '',
    `${featuredProject.name} — ${featuredProject.text.en}`,
    '',
    `- ${link('Award announcement', featuredProject.awardUrl)}: Posit's 2024 Shiny Contest winners.`,
    ...featuredProject.implementations.flatMap((impl) => [
      `- ${link(`${featuredProject.name} in ${impl.label} — demo`, impl.demo)}: the live application.`,
      `- ${link(`${featuredProject.name} in ${impl.label} — source`, impl.repo)}: the source code.`,
    ]),
    ''
  );

  push(
    '## TOPIQ',
    '',
    topiq.text.en,
    '',
    `- ${link('TOPIQ', topiq.url)}: ${topiq.stats.map((stat) => `${stat.key.en.toLowerCase()} ${stat.value.en}`).join(', ')}.`,
    ''
  );

  push(
    '## Other projects',
    '',
    ...projects.map((project) => `- ${link(project.name, project.href)}: ${project.text.en}`),
    ''
  );

  push(
    '## Talks',
    '',
    `${talksPage.lede.en} ${link('pierrot.show', talksPage.url)}.`,
    '',
    ...talks.map((talk) => {
      const title = talk.slides ? link(talk.title.en, talk.slides) : talk.title.en;
      return `- ${talk.iso} | ${title} | ${talk.event}`;
    }),
    ''
  );

  push(
    '## Articles',
    '',
    `Articles written by ${site.name} for ${link(blog.name, blog.url)}, the ThinkR blog.`,
    '',
    ...articles.map(
      (article) => `- ${article.iso} | ${link(article.title, article.href)}: ${article.summary.en}`
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

  push(
    '## Elsewhere',
    '',
    ...profiles.map((profile) => `- ${link(profile.label, profile.url)}`),
    ''
  );

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
