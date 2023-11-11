<script lang="ts">
	// import { skills } from '../content';
	import SkillsRow from './skills-row.svelte';
	import JavascriptIcon from '../icons/javascript.svg?component';
	import TypescriptIcon from '../icons/typescript.svg?component';

	import type { SkillsData } from '../content';
	import SectionTitle from './section-title.svelte';

	// const skills = {
	// 	languages: [
	// 		{ component: JavascriptIcon, label: 'Javascript' },
	// 		{ type: 'typescript', label: 'Typescript' },
	// 		{ type: 'python', label: 'Python' },
	// 		{ type: 'rust', label: 'Rust' },
	// 		{ type: 'java', label: 'Java' },
	// 		{ type: 'html', label: 'HTML' },
	// 		{ type: 'css', label: 'CSS' },
	// 		{ type: 'sass', label: 'Sass' },
	// 		{ type: 'graphql', label: 'GraphQL' },
	// 	],
	// 	frameworks: [
	// 		{ type: 'react', label: 'React' },
	// 		{ type: 'redux', label: 'Redux' },
	// 		{ type: 'nextjs', label: 'Next.js' },
	// 		{ type: 'express', label: 'Express' },
	// 		{ type: 'fastify', label: 'Fastify' },
	// 	],
	// 	runtimes: [
	// 		{ type: 'nodejs', label: 'Node.js' },
	// 		{ type: 'deno', label: 'Deno' },
	// 		{ type: 'electron', label: 'Electron' },
	// 		{ type: 'docker', label: 'Docker' },
	// 		{ type: 'kubernetes', label: 'Kubernetes' },
	// 		{ type: 'jupyter', label: 'Jupyter' },
	// 	],
	// 	tools: [
	// 		{ type: 'git', label: 'Git' },
	// 		{ type: 'npm', label: 'NPM' },
	// 		{ type: 'webpack', label: 'Webpack' },
	// 		{ type: 'babel', label: 'Babel' },
	// 		{ type: 'jest', label: 'Jest' },
	// 		{ type: 'actions', label: 'GitHub Actions' },
	// 		{ type: 'aws', label: 'AWS' },
	// 		{ type: 'heroku', label: 'Heroku' },
	// 	],
	// 	databases: [
	// 		{ type: 'mongodb', label: 'MongoDB' },
	// 		{ type: 'postgres', label: 'PostgreSQL' },
	// 		{ type: 'sqlite', label: 'SQLite' },
	// 		{ type: 'prisma', label: 'Prisma' },
	// 		{ type: 'firebase', label: 'Firebase' },
	// 	],
	// } satisfies Record<string, SkillsData[]>;
</script>

<div class="flex flex-col">
	<SectionTitle>Skills</SectionTitle>
	<div class="grid skills-grid">
		<div class="flex flex-col border border-gray-500 rounded-2xl p-4">
			<div class="flex gap-1 items-center">
				<JavascriptIcon class="w-10 h-10" />
				<TypescriptIcon class="w-10 h-10" />
				<h1 class="text-xl ml-4">JavaScript / TypeScript</h1>
			</div>
			<div>
				<div>test</div>
			</div>
		</div>
		<!-- <SkillsRow title="Languages" data={skills.languages} />
		<SkillsRow title="Frameworks" data={skills.frameworks} />
		<SkillsRow title="Runtimes" data={skills.runtimes} />
		<SkillsRow title="Databases" data={skills.databases} />
		<SkillsRow title="Tools" data={skills.tools} /> -->
	</div>
</div>

<style>
	.skills-grid {
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
	}
</style>
