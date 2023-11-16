<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface $$Props extends HTMLAnchorAttributes {
		href: string;
	}
	export let href: string;
</script>

<a class="bg-blue-500 rounded-full px-4 py-2 font-medium grow-0 self-center" {href} {...$$restProps}>
	<slot />
</a>
