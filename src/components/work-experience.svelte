<script lang="ts">
	import { base } from '$app/paths';
	import Icon from './icon.svelte';
	import SectionTitle from './section-title.svelte';

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
			tech: 'TypeScript, Python, Vue.js, Deno, Supabase, Cloudflare',
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
			tech: 'TypeScript, React, Node.js, PostgreSQL, Terraform, AWS',
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
					<div class="flex flex-col">
						<h1 class="text-3xl font-medium mb-4 flex items-center">
							<a href={work.company.url} class="underline" style="color: {work.company.brandColor}">
								{work.company.name}
							</a>
							<Icon kind="arrow-badge-right" class="w-6 inline-block mx-4" />
							<span class="text-gold">{work.role}</span>
						</h1>
						<h2 class="text-gray-400">{work.description}</h2>
						<div class="text-gray-400">Technologies: {work.tech}</div>
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
