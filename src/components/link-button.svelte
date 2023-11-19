<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { option } from '../utils';

	interface $$Props extends HTMLAnchorAttributes {
		href: string;
		bordered?: boolean;
	}
	export let href: string;
	export let bordered = false;
</script>

<a
	class="{bordered
		? 'border border-gray-500 border-opacity-50'
		: 'bg-blue-600 hover:bg-blue-500 active:bg-blue-400'} rounded-full px-4 py-2 font-medium grow-0 self-center transition-colors duration-200 ease-out"
	{href}
	{...$$restProps}
>
	<slot />
</a>
