<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface Props extends HTMLAnchorAttributes {
		href: string;
		bordered?: boolean;
	}
	const { href, bordered = false, class: className, children, ...rest }: Props = $props();

	const borderClass = bordered
		? 'border border-gray-500 border-opacity-50'
		: 'border border-transparent bg-blue-600 hover:bg-blue-500 active:bg-blue-400';
</script>

<a
	{...rest}
	class="rounded-full px-4 py-2 font-medium grow-0 self-center transition-colors duration-200 ease-out text-center inline-block {borderClass} {className}"
	{href}
>
	{@render children?.()}
</a>
