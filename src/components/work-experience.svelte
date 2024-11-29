<script lang="ts">
	import { base } from '$app/paths';
	import Icon from './icon.svelte';
	import PerspectiveCard from './perspective-card.svelte';
	import SectionTitle from './section-title.svelte';
	import Tag from './tag.svelte';

	const baseColorRgb = '33, 176, 124';
	const gradientColor = `rgba(${baseColorRgb}, 0.15)`;

	type Experience = {
		company: {
			name: string;
			url: string;
			brandColor: string;
		};
		role: string;
		description: string;
		tech: { name: string; icon: string }[];
		time: string;
		image: string;
	};

	const workExperiences: Experience[] = [
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

	const onCardClick = (url: string) => {
		window.open(url, '_blank')?.focus();
	};
</script>

<div id="work-container" class="project project-transition flex flex-col">
	<SectionTitle id="work-experience" color="rgb({baseColorRgb})">Work Experience</SectionTitle>
	<div class="anime anime-done flex flex-col gap-2 sm:gap-5">
		{#each workExperiences as { company, image, description, role, tech, time }}
			<PerspectiveCard
				{gradientColor}
				class="anime anime-done bg-card cursor-pointer flex flex-col border border-gray-500 border-opacity-25 rounded-2xl lg:p-12 sm:p-8 xs:p-6"
				on:click={() => onCardClick(company.url)}
			>
				<div class="flex flex-col md:flex-row lg:gap-12 gap-4 md:gap-6">
					<img
						src={`${base}/${image}`}
						alt="{company.name} home page"
						class="rounded-lg xl:w-[430px] lg:w-80 md:w-60 h-[225px] object-cover"
					/>
					<div class="flex flex-col gap-3" style="--brand-color: {company.brandColor};">
						<h1 class="text-3xl font-medium flex flex-col sm:flex-row sm:items-center xs:items-start">
							<a href={company.url} class="link text-[var(--brand-color)] after:bg-[var(--brand-color)]">
								{company.name}
							</a>
							<Icon kind="arrow-right-circle" class="w-8 inline-block mx-4 stroke-gold xs:hidden sm:block" />
							<span class="text-gold text-xl sm:text-3xl mt-3 sm:mt-0">{role}</span>
						</h1>
						<h2 class="text-gray-400">{description}</h2>
						<div class="text-gray-400 flex flex-wrap gap-2 mt-2">
							{#each tech as technology}
								<Tag icon={technology.icon}>{technology.name}</Tag>
							{/each}
						</div>
						<div class="mt-auto text-white">{time}</div>
					</div>
				</div>
			</PerspectiveCard>
		{/each}
	</div>
</div>
