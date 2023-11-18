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
			'MemorizeAnything is a web platform for students to create flashcards and lecture notes and optimize their studying time based on spaced repetition.',
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
			'DevCertified is an online code editor and execution environment that simplifies conducting coding interviews with prospective candidates for recruiters.',
		url: 'https://www.devcertified.com',
	},
	{
		title: 'Unlike the Others',
		language: 'typescript',
		tags: [
			{ name: 'React', icon: 'react' },
			// { name: 'Recoil', icon: 'recoil' },
			{ name: 'Fastify', icon: 'fastify' },
			{ name: 'Prisma', icon: 'prisma' },
			{ name: 'PostgreSQL', icon: 'postgresql' },
		],
		description: 'Unlike the Others is an online multiplayer social deduction game.',
		url: 'https://github.com/DanielHZhang/unlike-the-others',
	},
	{
		title: 'Superbuffer',
		language: 'typescript',
		tags: [
			// { name: 'Open Source', icon: 'open-source-initiative' },
			// { name: 'Data Structure', icon: 'data-structure' },
			// { name: 'Compression', icon: 'compression' },
			// { name: 'Buffer', icon: 'buffer' },
		],
		description:
			'Superbuffer is a type-safe library for serializing and deserializing JSON into raw binary and for over 50% compression over the wire compared to regular JSON.',
		url: 'https://github.com/DanielHZhang/superbuffer',
	},
	{
		title: 'rusty-avl',
		language: 'rust',
		tags: [
			// { name: 'Open Source', icon: 'open-source-initiative' },
			// { name: 'Data Structures', icon: 'data-structure' },
		],
		description: 'rusty-avl is a performant and purely iterative AVL tree implementation in Rust.',
		url: 'https://github.com/DanielHZhang/rusty-avl',
	},
	{
		title: 'xsurf',
		language: 'typescript',
		tags: [
			// { name: 'Open Source', icon: 'open-source-initiative' },
			// { name: 'Security', icon: 'security' },
			// { name: 'Token', icon: 'token' },
		],
		description: 'xsurf is a middleware library for generating and validating CSRF tokens.',
		url: 'https://github.com/DanielHZhang/xsurf',
	},
	{
		title: 'tsc-suppress',
		language: 'typescript',
		tags: [
			// { name: 'Open Source', icon: 'open-source-initiative' },
			// { name: 'Compiler', icon: 'compiler' },
			// { name: 'CLI', icon: 'cli' },
		],
		description:
			'tsc-suppress is a lightweight extension of the TypeScript compiler that adds the ability to skip type-checking in order to speed up compilation times during development.',
		url: 'https://github.com/DanielHZhang/tsc-suppress',
	},
	{
		title: 'npm-publish-release',
		description:
			'npm-publish-release is a GitHub action that automates publishing a package release to the NPM registry.',
		language: 'typescript',
		tags: [
			{ name: 'GitHub Actions', icon: 'github-actions' },
			// { name: 'CI/CD', icon: 'ci-cd' },
			{ name: 'NPM', icon: 'npm' },
		],
		url: 'https://github.com/DanielHZhang/npm-publish-release',
	},
	{
		title: 'Leetcode',
		language: 'python',
		tags: [
			// { name: 'Data Structures', icon: 'data-structure' },
			// { name: 'Algorithms', icon: 'algorithms' },
		],
		description: 'A collection of leetcode problems that I have solved.',
		url: 'https://github.com/DanielHZhang/npm-publish-release',
	},
	{
		title: 'vscode-theme-fullmetal',
		description: 'A vibrant, balanced, and intuitive theme for VSCode.',
		language: 'json',
		tags: [],
		url: 'https://github.com/DanielHZhang/vscode-theme-fullmetal',
	},
];

import type { ComponentType, SvelteComponent } from 'svelte';
import type { SVGAttributes } from 'svelte/elements';

export type SkillsData = {
	component: ComponentType<SvelteComponent<SVGAttributes<SVGSVGElement>, any, any>>;
	label: string;
};
