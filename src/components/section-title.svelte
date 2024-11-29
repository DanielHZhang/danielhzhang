<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		color?: string;
		id: string;
		children: Snippet;
	}
	const { color = '#ba7385', id, children }: Props = $props();
</script>

<div class="flex flex-col mb-14">
	<h1 {id} class="md:text-7xl xs:text-5xl font-semibold text-center pt-4 anime anime-done" style="color: {color};">
		{@render children()}
	</h1>
</div>
