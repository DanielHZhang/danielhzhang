<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	interface $$Props extends SVGAttributes<SVGSVGElement> {
		kind: string;
	}
	export let kind: string;
</script>

{#await import(`../icons/${kind}.svg`) then c}
	<svelte:component this={c.default} {...$$props} />
{/await}
