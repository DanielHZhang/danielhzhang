import type { Project, WorkExperience } from '$lib/types';

export function load() {
	const workExperience: WorkExperience[] = [
		{
			company: {
				name: 'Webflow',
				url: 'https://webflow.com',
				brandColor: '#146ef5',
			},
			role: 'Backend Engineer',
			description: 'Full-stack development - Generative AI design assistant',
			tech: [
				{ name: 'TypeScript', icon: 'typescript' },
				{ name: 'React', icon: 'react' },
				{ name: 'Node.js', icon: 'node-js' },
				{ name: 'OpenAI', icon: 'open-ai' },
			],
			time: 'July 2024 - Present (Full Time)',
			image: 'webflow-homepage.webp',
		},
		{
			company: {
				name: 'Prezo',
				url: 'https://prezo.ai',
				brandColor: 'rgb(171, 102, 255)',
			},
			role: 'Software Engineer',
			description: 'Full-stack development - Generative AI presentation platform',
			tech: [
				{ name: 'TypeScript', icon: 'typescript' },
				{ name: 'Python', icon: 'python' },
				{ name: 'Vue.js', icon: 'vue-js' },
				{ name: 'Deno', icon: 'deno' },
				{ name: 'OpenAI', icon: 'open-ai' },
			],
			time: 'Feb 2023 - Feb 2024 (Full Time)',
			image: 'prezo-homepage.webp',
		},
		{
			company: {
				name: 'Clutch',
				url: 'https://clutch.ca',
				brandColor: 'rgb(255, 70, 76)',
			},
			role: 'Software Engineer',
			description: 'Full-stack development - Automotive platform',
			tech: [
				{ name: 'TypeScript', icon: 'typescript' },
				{ name: 'React', icon: 'react' },
				{ name: 'Node.js', icon: 'node-js' },
				{ name: 'PostgreSQL', icon: 'postgresql' },
				{ name: 'Terraform', icon: 'terraform' },
				{ name: 'AWS', icon: 'aws' },
			],
			time: 'Dec 2021 - Jan 2023 (Full Time)',
			image: 'clutch-homepage.webp',
		},
	];

	const projects: Project[] = [
		{
			title: 'MemorizeAnything',
			language: 'typescript',
			tags: [
				{ name: 'React', icon: 'react' },
				{ name: 'Redux', icon: 'redux' },
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
				{ name: 'Node.js', icon: 'node-js' },
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
			description: 'A performant and purely-iterative AVL tree implementation in Rust.',
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
			tags: [
				{ name: 'GitHub Actions', icon: 'github-actions' },
				{ name: 'NPM', icon: 'npm' },
			],
			url: 'https://github.com/DanielHZhang/npm-publish-release',
		},
		// {
		// 	title: 'Leetcode',
		// 	language: 'python',
		// 	tags: [{ name: 'Data Structures', icon: 'binary-tree' }],
		// 	description: 'A collection of leetcode problems that I have solved.',
		// 	url: 'https://github.com/DanielHZhang/leetcode',
		// },
		{
			title: 'vscode-theme-fullmetal',
			description: 'A vibrant, balanced, and intuitive theme for VSCode.',
			language: 'json',
			tags: [{ name: 'VSCode', icon: 'vscode' }],
			url: 'https://github.com/DanielHZhang/vscode-theme-fullmetal',
		},
	];

	return {
		workExperience,
		projects,
	};
}
