<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface $$Props extends HTMLAnchorAttributes {
		href: string;
		bordered?: boolean;
	}
	export let href: string;
	export let bordered = false;

	const borderClass = bordered
		? 'border border-gray-500 border-opacity-50'
		: 'border border-transparent bg-blue-600 hover:bg-blue-500 active:bg-blue-400';

	const className = $$restProps.class ?? '';
</script>

<a
	{...$$restProps}
	class="rounded-full px-4 py-2 font-medium grow-0 self-center transition-colors duration-200 ease-out text-center inline-block {borderClass} {className}"
	{href}
>
	<slot />
</a>
