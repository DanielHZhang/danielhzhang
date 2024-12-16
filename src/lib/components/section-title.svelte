<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		id: string;
		children: Snippet;
	}
	const { id, children, class: className }: Props = $props();
</script>

<div class="flex flex-col mb-14">
	<h1 {id} class="md:text-7xl xs:text-5xl font-semibold text-center pt-4 anime anime-done {className}">
		{@render children()}
	</h1>
</div>
