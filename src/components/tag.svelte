<script lang="ts">
	import Icon from './icon.svelte';

	export let icon: string;
</script>

<div class="flex gap-[6px] items-center p-2 border border-gray-500 border-opacity-25 rounded-lg">
	<Icon kind={icon} class="w-8 h-8" />
	<slot />
</div>
