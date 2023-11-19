<script lang="ts">
	import Icon from './icon.svelte';

	export let icon: string;

	function calcIconSize(iconName: string) {
		switch (iconName) {
			case 'javascript':
			case 'typescript':
			case 'github-actions':
			case 'vscode':
			case 'open-ai':
			case 'vue-js':
				return 26;
			default:
				return 28;
		}
	}

	const iconSize = calcIconSize(icon);
</script>

<div
	class="flex gap-2 items-center px-2 text-gray-500 border border-gray-500 border-opacity-25 rounded-lg h-11 text-base"
>
	<Icon kind={icon} width={iconSize} height={iconSize} />
	<slot />
</div>
