<script lang="ts">
	import { getIcon, type IconName } from '$lib/assets/icons';
	import type { Snippet } from 'svelte';

	interface Props {
		icon: IconName;
		children: Snippet;
	}
	let { icon, children }: Props = $props();
	let iconSize = $state(28);

	if (typeof icon === 'string') {
		switch (icon) {
			case 'Javascript':
			case 'Typescript':
			case 'GithubActions':
			case 'Vscode':
			case 'OpenAi':
			case 'VueJs':
				iconSize = 26;
				break;
			default:
				iconSize = 28;
		}
	}

	const Icon = getIcon(icon)!;
</script>

<div
	class="flex gap-2 items-center px-2 text-gray-500 border border-gray-500 border-opacity-25 rounded-lg h-11 text-base"
>
	<Icon width={iconSize} height={iconSize} />
	{@render children()}
</div>
