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
				{ name: 'TypeScript', icon: 'Typescript' },
				{ name: 'React', icon: 'React' },
				{ name: 'Node.js', icon: 'NodeJs' },
				{ name: 'OpenAI', icon: 'OpenAi' },
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
				{ name: 'TypeScript', icon: 'Typescript' },
				{ name: 'Python', icon: 'Python' },
				{ name: 'Vue.js', icon: 'VueJs' },
				{ name: 'Deno', icon: 'Deno' },
				{ name: 'OpenAI', icon: 'OpenAi' },
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
				{ name: 'TypeScript', icon: 'Typescript' },
				{ name: 'React', icon: 'React' },
				{ name: 'Node.js', icon: 'NodeJs' },
				{ name: 'PostgreSQL', icon: 'Postgresql' },
				{ name: 'Terraform', icon: 'Terraform' },
				{ name: 'AWS', icon: 'Aws' },
			],
			time: 'Dec 2021 - Jan 2023 (Full Time)',
			image: 'clutch-homepage.webp',
		},
	];

	const projects: Project[] = [
		{
			title: 'MemorizeAnything',
			language: 'Typescript',
			tags: [
				{ name: 'React', icon: 'React' },
				{ name: 'Redux', icon: 'Redux' },
				{ name: 'Express', icon: 'Express' },
				{ name: 'MongoDB', icon: 'MongoDb' },
				{ name: 'Webpack', icon: 'Webpack' },
			],
			description:
				'A web platform for students to create flashcards and lecture notes and optimize their studying time based on spaced repetition.',
			url: 'https://www.memorizeanything.net',
		},
		{
			title: 'DevCertified',
			language: 'Javascript',
			tags: [
				{ name: 'Next.js', icon: 'NextJs' },
				{ name: 'Node.js', icon: 'NodeJs' },
				{ name: 'GraphQL', icon: 'GraphQl' },
				{ name: 'Docker', icon: 'Docker' },
				{ name: 'Firebase', icon: 'Firebase' },
			],
			description:
				'An online code editor and execution environment that simplifies conducting coding interviews with prospective candidates for recruiters.',
			url: 'https://www.devcertified.com',
		},
		{
			title: 'Unlike the Others',
			language: 'Typescript',
			tags: [
				{ name: 'React', icon: 'React' },
				{ name: 'Fastify', icon: 'Fastify' },
				{ name: 'Prisma', icon: 'Prisma' },
				{ name: 'PostgreSQL', icon: 'Postgresql' },
			],
			description: 'An online social deduction game based on Among Us.',
			url: 'https://github.com/DanielHZhang/unlike-the-others',
		},
		{
			title: 'Superbuffer',
			language: 'Typescript',
			tags: [
				{ name: 'Data Structures', icon: 'BinaryTree' },
				{ name: 'Compression', icon: 'StackPush' },
			],
			description:
				'A type-safe library for serializing and deserializing JSON into raw binary and for over 50% compression over the wire compared to regular JSON.',
			url: 'https://github.com/DanielHZhang/superbuffer',
		},
		{
			title: 'rusty-avl',
			language: 'Rust',
			tags: [{ name: 'Data Structures', icon: 'BinaryTree' }],
			description: 'A performant and purely-iterative AVL tree implementation in Rust.',
			url: 'https://github.com/DanielHZhang/rusty-avl',
		},
		{
			title: 'xsurf',
			language: 'Typescript',
			tags: [{ name: 'Security', icon: 'ShieldLock' }],
			description: 'A middleware library for generating and validating CSRF tokens.',
			url: 'https://github.com/DanielHZhang/xsurf',
		},
		{
			title: 'tsc-suppress',
			language: 'Typescript',
			tags: [{ name: 'CLI', icon: 'Terminal' }],
			description:
				'A lightweight extension of the TypeScript compiler that adds the ability to skip type-checking in order to speed up compilation times during development.',
			url: 'https://github.com/DanielHZhang/tsc-suppress',
		},
		{
			title: 'npm-publish-release',
			description:
				'npm-publish-release is a GitHub action that automates publishing a package release to the NPM registry.',
			tags: [
				{ name: 'GitHub Actions', icon: 'GithubActions' },
				{ name: 'NPM', icon: 'Npm' },
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
			language: 'Json',
			tags: [{ name: 'VSCode', icon: 'Vscode' }],
			url: 'https://github.com/DanielHZhang/vscode-theme-fullmetal',
		},
	];

	return {
		workExperience,
		projects,
	};
}
