export type ProjectData = {
	title: string;
	tags: { name: string; icon: string }[];
	language: string;
	description: string;
	url?: string;
};

export const projects: ProjectData[] = [
	{
		title: 'MemorizeAnything',
		language: 'typescript',
		tags: [
			{ name: 'React', icon: 'react' },
			{ name: 'Redux', icon: 'redux' },
			{ name: 'Node.js', icon: 'node-js' },
			{ name: 'Express', icon: 'express' },
			{ name: 'MongoDB', icon: 'mongodb' },
			{ name: 'Webpack', icon: 'webpack' },
		],
		description:
			'A web platform for students to create flashcards and lecture notes and optimize their studying time based on spaced repetition.',
		url: 'https://www.memorizeanything.net',
	},
	{
		title: 'DevCertified',
		language: 'javascript',
		tags: [
			{ name: 'Next.js', icon: 'next-js' },
			{ name: 'GraphQL', icon: 'graphql' },
			{ name: 'Docker', icon: 'docker' },
			{ name: 'Firebase', icon: 'firebase' },
		],
		description:
			'An online code editor and execution environment that simplifies conducting coding interviews with prospective candidates for recruiters.',
		url: 'https://www.devcertified.com',
	},
	{
		title: 'Unlike the Others',
		language: 'typescript',
		tags: [
			{ name: 'React', icon: 'react' },
			{ name: 'Fastify', icon: 'fastify' },
			{ name: 'Prisma', icon: 'prisma' },
			{ name: 'PostgreSQL', icon: 'postgresql' },
		],
		description: 'An online social deduction game based on Among Us.',
		url: 'https://github.com/DanielHZhang/unlike-the-others',
	},
	{
		title: 'Superbuffer',
		language: 'typescript',
		tags: [
			{ name: 'Data Structures', icon: 'binary-tree' },
			{ name: 'Compression', icon: 'stack-push' },
		],
		description:
			'A type-safe library for serializing and deserializing JSON into raw binary and for over 50% compression over the wire compared to regular JSON.',
		url: 'https://github.com/DanielHZhang/superbuffer',
	},
	{
		title: 'rusty-avl',
		language: 'rust',
		tags: [{ name: 'Data Structures', icon: 'binary-tree' }],
		description: 'A performant and purely iterative AVL tree implementation in Rust.',
		url: 'https://github.com/DanielHZhang/rusty-avl',
	},
	{
		title: 'xsurf',
		language: 'typescript',
		tags: [{ name: 'Security', icon: 'shield-lock' }],
		description: 'A middleware library for generating and validating CSRF tokens.',
		url: 'https://github.com/DanielHZhang/xsurf',
	},
	{
		title: 'tsc-suppress',
		language: 'typescript',
		tags: [{ name: 'CLI', icon: 'terminal' }],
		description:
			'A lightweight extension of the TypeScript compiler that adds the ability to skip type-checking in order to speed up compilation times during development.',
		url: 'https://github.com/DanielHZhang/tsc-suppress',
	},
	{
		title: 'npm-publish-release',
		description:
			'npm-publish-release is a GitHub action that automates publishing a package release to the NPM registry.',
		language: 'typescript',
		tags: [
			{ name: 'GitHub Actions', icon: 'github-actions' },
			{ name: 'NPM', icon: 'npm' },
		],
		url: 'https://github.com/DanielHZhang/npm-publish-release',
	},
	{
		title: 'Leetcode',
		language: 'python',
		tags: [{ name: 'Data Structures', icon: 'binary-tree' }],
		description: 'A collection of leetcode problems that I have solved.',
		url: 'https://github.com/DanielHZhang/npm-publish-release',
	},
	{
		title: 'vscode-theme-fullmetal',
		description: 'A vibrant, balanced, and intuitive theme for VSCode.',
		language: 'json',
		tags: [{ name: 'VSCode', icon: 'vscode' }],
		url: 'https://github.com/DanielHZhang/vscode-theme-fullmetal',
	},
];

import type { ComponentType, SvelteComponent } from 'svelte';
import type { SVGAttributes } from 'svelte/elements';

export type SkillsData = {
	component: ComponentType<SvelteComponent<SVGAttributes<SVGSVGElement>, any, any>>;
	label: string;
};
