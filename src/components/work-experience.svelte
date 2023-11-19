<script lang="ts">
	import { base } from '$app/paths';
	import Icon from './icon.svelte';
	import SectionTitle from './section-title.svelte';
	import Tag from './tag.svelte';

	const baseColorRgb = '72, 194, 126';
	const gradientColor = `rgba(${baseColorRgb}, 0.15)`;

	const workExperiences = [
		{
			company: {
				name: 'Prezo',
				url: 'https://prezo.ai',
				brandColor: 'rgb(171, 102, 255)',
			},
			role: 'Software Engineer',
			description: 'Full stack development - Generative AI platform',
			tech: [
				{ name: 'TypeScript', icon: 'typescript' },
				{ name: 'Python', icon: 'python' },
				{ name: 'Vue.js', icon: 'vue-js' },
				{ name: 'Deno', icon: 'deno' },
				{ name: 'OpenAI', icon: 'open-ai' },
			],
			time: 'Feb 2023 - Present (Full Time)',
			image: 'prezo-homepage.webp',
		},
		{
			company: {
				name: 'Clutch',
				url: 'https://clutch.ca',
				brandColor: 'rgb(255, 70, 76)',
			},
			role: 'Software Engineer',
			description: 'Full stack development - Automotive platform',
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
</script>

<div class="flex flex-col">
	<SectionTitle color="rgb({baseColorRgb}, 0.75)">Work Experience</SectionTitle>
	<div class="flex flex-col gap-5">
		{#each workExperiences as work}
			<div
				class="flex flex-col border border-gray-500 border-opacity-25 rounded-2xl p-12 gradient-bg"
				style="--gradient-color: {gradientColor}"
			>
				<div class="flex gap-12">
					<img
						src={`${base}/${work.image}`}
						alt="Prezo home page"
						class="rounded-lg lg:w-[430px] h-[225px] md:w-80 object-cover"
					/>
					<div class="flex flex-col gap-3">
						<h1 class="text-3xl font-medium flex items-center">
							<a href={work.company.url} class="underline" style="color: {work.company.brandColor}">
								{work.company.name}
							</a>
							<Icon kind="arrow-right-circle" class="w-8 inline-block mx-4 stroke-gold" />
							<span class="text-gold">{work.role}</span>
						</h1>
						<h2 class="text-gray-400">{work.description}</h2>
						<div class="text-gray-400 flex flex-wrap gap-2 mt-2">
							{#each work.tech as tech}
								<Tag icon={tech.icon}>{tech.name}</Tag>
							{/each}
						</div>
						<div class="mt-auto text-white">{work.time}</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style scoped>
	.gradient-bg {
		background: radial-gradient(ellipse at center, var(--gradient-color), var(--transparent));
	}
</style>
