<script lang="ts">
	import { projects } from '../content';
	import { capitalizeFirst } from '../utils';
	import Icon from './icon.svelte';
	import SectionTitle from './section-title.svelte';
	import Tag from './tag.svelte';

	const baseColorRgb = '129, 182, 236';
	const gradientColor = `rgba(${baseColorRgb}, 0.15)`;

	function useSmallIcon(iconName: string) {
		switch (iconName) {
			case 'javascript':
			case 'typescript':
			case 'github-actions':
			case 'vscode':
				return true;
			default:
				return false;
		}
	}
	function formatLanguage(lang: string) {
		if (lang === 'json') {
			return lang.toUpperCase();
		}
		return capitalizeFirst(lang);
	}
</script>

<div class="flex flex-col mb-16" style="--gradient-color: {gradientColor}">
	<SectionTitle color="rgb({baseColorRgb}, 0.75)">Personal Projects</SectionTitle>
	<div class="grid gap-5 waterfall-grid">
		{#each projects as project}
			<div class="flex flex-col gap-4 border border-gray-500 border-opacity-25 rounded-2xl p-8 gradient-bg" style="">
				<div class="flex justify-between">
					<div class="flex">
						<h1 class="text-3xl font-medium text-gold">{project.title}</h1>
					</div>
				</div>
				<div class="grow mb-4">
					<p class="text-gray-400">{project.description}</p>
				</div>
				<div class="flex flex-wrap gap-2 items-start">
					<Tag icon={project.language} iconSize={useSmallIcon(project.language) ? 26 : undefined}>
						{formatLanguage(project.language)}
					</Tag>
					{#each project.tags as tag}
						<Tag icon={tag.icon} iconSize={useSmallIcon(tag.icon) ? 26 : undefined}>{tag.name}</Tag>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>

<style scoped>
	.gradient-bg {
		background: radial-gradient(ellipse at center, var(--gradient-color), var(--transparent));
	}

	.waterfall-grid {
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	}
</style>
