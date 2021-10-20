import {IconType} from 'src/components/icons';
import {r} from 'src/utils';

export type ProjectData = {
  title: string;
  tags: string[];
  language: IconType;
  description: string;
  url?: string;
};

export const projects: ProjectData[] = [
  {
    title: 'MemorizeAnything',
    language: 'typescript',
    tags: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Webpack'],
    description: r`MemorizeAnything is a web platform for students to create flashcards and lecture
		notes and optimize their studying time based on spaced repetition.`,
    url: 'https://www.memorizeanything.net',
  },
  {
    title: 'DevCertified',
    language: 'javascript',
    tags: ['Next.js', 'GraphQL', 'Docker', 'Firebase'],
    description: r`DevCertified is an online code editor and execution environment that simplifies
		conducting coding interviews with prospective candidates for recruiters.`,
    url: 'https://www.devcertified.com',
  },
  {
    title: 'Unlike the Others',
    language: 'typescript',
    tags: ['React', 'Recoil', 'Fastify', 'Prisma', 'PostgreSQL'],
    description: r`Unlike the Others is an online multiplayer social deduction game.`,
    url: 'https://github.com/DanielHZhang/unlike-the-others',
  },
  {
    title: 'Superbuffer',
    language: 'typescript',
    tags: ['Open Source', 'Data Structure', 'Compression', 'Buffer'],
    description: r`Superbuffer is a type-safe library for serializing and deserializing JSON
		into raw binary and for over 50% compression over the wire compared to regular JSON.`,
    url: 'https://github.com/DanielHZhang/superbuffer',
  },
  {
    title: 'rusty-avl',
    language: 'rust',
    tags: ['Open Source', 'Data Structure'],
    description: r`rusty-avl is a performant and purely iterative AVL tree implementation in Rust.`,
    url: 'https://github.com/DanielHZhang/rusty-avl',
  },
  {
    title: 'xsurf',
    language: 'typescript',
    tags: ['Open Source', 'Security', 'Token'],
    description: r`xsurf is a middleware library for generating and validating CSRF tokens.`,
    url: 'https://github.com/DanielHZhang/xsurf',
  },
  {
    title: 'tsc-suppress',
    language: 'typescript',
    tags: ['Open Source', 'Compiler', 'CLI'],
    description: r`tsc-suppress is a lightweight extension of the TypeScript compiler that adds the
		ability to skip type-checking in order to speed up compilation times during development.`,
    url: 'https://github.com/DanielHZhang/tsc-suppress',
  },
  {
    title: 'npm-publish-release',
    language: 'typescript',
    tags: ['GitHub Actions', 'CI/CD', 'NPM'],
    description: r`npm-publish-release is a GitHub action that automates publishing a package
		release to the NPM registry.`,
    url: 'https://github.com/DanielHZhang/npm-publish-release',
  },
];

export type SkillsData = {
  type: IconType;
  label: string;
};

export const skills: Record<string, SkillsData[]> = {
  languages: [
    {type: 'javascript', label: 'Javascript'},
    {type: 'typescript', label: 'Typescript'},
    {type: 'python', label: 'Python'},
    {type: 'rust', label: 'Rust'},
    {type: 'java', label: 'Java'},
    {type: 'html', label: 'HTML'},
    {type: 'css', label: 'CSS'},
    {type: 'sass', label: 'Sass'},
    {type: 'graphql', label: 'GraphQL'},
  ],
  frameworks: [
    {type: 'react', label: 'React'},
    {type: 'redux', label: 'Redux'},
    {type: 'nextjs', label: 'Next.js'},
    {type: 'express', label: 'Express'},
    {type: 'fastify', label: 'Fastify'},
  ],
  runtimes: [
    {type: 'nodejs', label: 'Node.js'},
    {type: 'deno', label: 'Deno'},
    {type: 'electron', label: 'Electron'},
    {type: 'docker', label: 'Docker'},
    {type: 'kubernetes', label: 'Kubernetes'},
    {type: 'jupyter', label: 'Jupyter'},
  ],
  tools: [
    {type: 'git', label: 'Git'},
    {type: 'npm', label: 'NPM'},
    {type: 'webpack', label: 'Webpack'},
    {type: 'babel', label: 'Babel'},
    {type: 'jest', label: 'Jest'},
    {type: 'actions', label: 'GitHub Actions'},
    {type: 'aws', label: 'AWS'},
    {type: 'heroku', label: 'Heroku'},
  ],
  databases: [
    {type: 'mongodb', label: 'MongoDB'},
    {type: 'postgres', label: 'PostgreSQL'},
    {type: 'sqlite', label: 'SQLite'},
    {type: 'prisma', label: 'Prisma'},
    {type: 'firebase', label: 'Firebase'},
  ],
};
