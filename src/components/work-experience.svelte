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
			description: 'Full-stack development - Generative AI presentation platform',
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
</script>

<div id="work-container" class="project project-transition flex flex-col">
	<SectionTitle id="work-experience" color="rgb({baseColorRgb}, 0.75)">Work Experience</SectionTitle>
	<div class="anime anime-done flex flex-col sm:gap-5 xs:gap-2">
		{#each workExperiences as work}
			<div
				class="anime anime-done flex flex-col border border-gray-500 border-opacity-25 rounded-2xl lg:p-12 sm:p-8 xs:p-6 gradient-bg"
				style="--gradient-color: {gradientColor}"
			>
				<div class="flex xs:flex-col md:flex-row lg:gap-12 md:gap-6 xs:gap-4">
					<img
						src={`${base}/${work.image}`}
						alt="Prezo home page"
						class="rounded-lg xl:w-[430px] lg:w-80 md:w-60 h-[225px] object-cover"
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

<style scoped lang="postcss">
	.gradient-bg {
		background: radial-gradient(ellipse at center, var(--gradient-color), theme(colors.card));
	}
</style>
