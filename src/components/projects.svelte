<script>
	import { projects } from '../content';
	import SectionTitle from './section-title.svelte';

	const baseColorRgb = '129, 182, 236';
	const gradientColor = `rgba(${baseColorRgb}, 0.15)`;
</script>

<div class="flex flex-col mb-16" style="--gradient-color: {gradientColor}">
	<SectionTitle color="rgb({baseColorRgb}, 0.75)">Personal Projects</SectionTitle>

	<div class="grid gap-5 waterfall-grid">
		{#each projects as project}
			<div class="flex flex-col gap-2 border border-gray-500 border-opacity-25 rounded-2xl p-8 gradient-bg" style="">
				<div class="flex justify-between">
					<div class="flex">
						<h1 class="text-2xl">{project.title}</h1>
					</div>
				</div>
				<div>
					<p>{project.description}</p>
				</div>
				<div class="flex flex-wrap gap-2 items-start mt-4">
					{#each project.tags as tag}
						<div class="p-1 bg-slate-700 rounded-lg px-2">
							{tag}
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>

<style scoped lang="postcss">
	.gradient-bg {
		background: radial-gradient(ellipse at center, var(--gradient-color), var(--transparent));
	}

	.waterfall-grid {
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	}
</style>
