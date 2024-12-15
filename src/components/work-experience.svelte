<script lang="ts">
	import { base } from '$app/paths';
	import { IconArrowRightCircle } from '$lib/assets/icons';
	import type { WorkExperience } from '$lib/types';
	import PerspectiveCard from './perspective-card.svelte';
	import SectionTitle from './section-title.svelte';
	import Tag from './tag.svelte';

	interface Props {
		data: WorkExperience[];
	}
	let { data }: Props = $props();

	const baseColorRgb = '33, 176, 124';
	const gradientColor = `rgba(${baseColorRgb}, 0.15)`;

	const onCardClick = (url: string) => {
		window.open(url, '_blank')?.focus();
	};
</script>

<div id="work-container" class="project project-transition flex flex-col">
	<SectionTitle id="work-experience" color="rgb({baseColorRgb})">Work Experience</SectionTitle>
	<div class="anime anime-done flex flex-col gap-2 sm:gap-5">
		{#each data as { company, image, description, role, tech, time }}
			<PerspectiveCard
				{gradientColor}
				class="anime anime-done bg-card cursor-pointer flex flex-col border border-gray-500 border-opacity-25 rounded-2xl lg:p-12 sm:p-8 xs:p-6"
				onclick={() => onCardClick(company.url)}
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
							<IconArrowRightCircle class="w-8 inline-block mx-4 stroke-gold xs:hidden sm:block" />
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
