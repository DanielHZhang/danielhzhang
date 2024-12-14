<script lang="ts">
	import ProjectItem from './project-item.svelte';
	import SectionTitle from './section-title.svelte';
	import type { Project } from '$lib/types';

	interface Props {
		data: Project[];
	}
	let { data }: Props = $props();

	const baseColorRgb = '129, 182, 236';
	const gradientColor = `rgba(${baseColorRgb}, 0.15)`;
</script>

<div class="flex flex-col">
	<SectionTitle id="projects" color="rgb({baseColorRgb})">Personal Projects</SectionTitle>
	<div class="grid gap-2 sm:gap-5 waterfall-grid">
		{#each data as project}
			<ProjectItem {project} {gradientColor} />
		{/each}
	</div>
</div>

<style scoped>
	.waterfall-grid {
		grid-template-columns: repeat(auto-fill, minmax(var(--min-screen), 1fr));
	}
</style>
