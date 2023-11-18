<script lang="ts">
	import Icon from './icon.svelte';

	export let icon: string;
	export let iconSize = 28;
</script>

<div class="flex gap-2 items-center px-2 text-gray-500 border border-gray-500 border-opacity-25 rounded-lg h-11">
	<Icon kind={icon} width={iconSize} height={iconSize} />
	<slot />
</div>
