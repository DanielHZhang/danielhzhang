<script lang="ts">
	import { tw } from '$lib/utils/styles';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		variant?: 'solid' | 'outline' | 'ghost';
	}
	let { class: className, variant = 'solid', children, ...rest }: Props = $props();
</script>

<button class={tw`p-2 ${className}`} {...rest}>
	{@render children?.()}
</button>
