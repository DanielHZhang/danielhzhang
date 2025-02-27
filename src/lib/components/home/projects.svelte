<script lang="ts">
	import ProjectItem from '../ui/project-item.svelte';
	import SectionTitle from '../ui/section-title.svelte';
	import type { Project } from '$lib/types';
	import { colors } from '$lib/config/constants';

	interface Props {
		data: Project[];
	}
	let { data }: Props = $props();
</script>

<div class="flex flex-col">
	<SectionTitle id="projects" class="text-brand-secondary">Personal Projects</SectionTitle>
	<div class="grid gap-2 sm:gap-5 waterfall-grid">
		{#each data as project}
			<ProjectItem {project} gradientColor={colors.secondary.gradient} />
		{/each}
	</div>
</div>

<style scoped lang="postcss">
	.waterfall-grid {
		/* theme(minWidth.screen) */
		grid-template-columns: repeat(auto-fill, minmax(var(--min-width-screen), 1fr));
	}
</style>
