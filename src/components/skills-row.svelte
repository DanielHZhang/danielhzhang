<script lang="ts">
	import type { SkillsData } from '../content';

	export let data: SkillsData[];
	export let title: string;
</script>

<div class="flex flex-col">
	<h1 class="text-2xl text-yellow-400">{title}</h1>
	<div class="mt-4 space-y-4">
		{#each data as { component, label }, index}
			<div class="flex items-center" title={label}>
				<svelte:component this={component} class="w-12 h-12" />
				<!-- <img src={type} alt={label} class="w-16 h-16" /> -->
				<p class="text-white ml-3">{label}</p>
			</div>
		{/each}
	</div>
</div>
