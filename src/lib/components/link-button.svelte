<script lang="ts">
	import { tw } from '$lib/utils/styles';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface Props extends HTMLAnchorAttributes {
		href: string;
		variant?: 'solid' | 'ghost';
	}
	let { href, variant = 'solid', color = 'primary', class: className, children, ...rest }: Props = $props();

	let variantClass = $state('');
	if (variant === 'solid') {
		variantClass = tw`border-transparent bg-brand-primary hover:bg-brand-primary/80`;
	} else if (variant === 'ghost') {
		variantClass = tw`border-gray-500 border-opacity-50 hover:border-opacity-80`;
	}
</script>

<a
	{...rest}
	class={tw`rounded-lg px-4 py-2 font-medium grow-0 self-center transition-all duration-200 ease-out text-center inline-block border ${variantClass} ${className}`}
	{href}
>
	{@render children?.()}
</a>
