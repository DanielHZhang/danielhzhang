<script lang="ts">
	import type { Project } from '$lib/types';
	import { capitalize } from '$lib/utils/string';
	import PerspectiveCard from './perspective-card.svelte';
	import Tag from './tag.svelte';

	interface Props {
		project: Project;
		gradientColor: string;
	}
	const { project, gradientColor }: Props = $props();

	const formatLanguage = (lang: string) => {
		return lang === 'json' ? lang.toUpperCase() : capitalize(lang);
	};

	const onCardClick = () => {
		window.open(project.url, '_blank')?.focus();
	};
</script>

<PerspectiveCard
	{gradientColor}
	class="anime anime-done bg-card cursor-pointer flex flex-col relative gap-4 border border-gray-500 border-opacity-25 rounded-2xl xs:p-6 md:p-8"
	onclick={onCardClick}
>
	<div class="flex justify-between">
		<div class="flex">
			<a href={project.url} target="_blank" class="link text-3xl font-medium text-gold">{project.title}</a>
		</div>
	</div>
	<div class="grow mb-4">
		<p class="text-gray-400">{project.description}</p>
	</div>
	<div class="flex flex-wrap gap-2 items-start">
		{#if project.language}
			<Tag icon={project.language}>{formatLanguage(project.language)}</Tag>
		{/if}
		{#each project.tags as tag}
			<Tag icon={tag.icon}>{tag.name}</Tag>
		{/each}
	</div>
</PerspectiveCard>
