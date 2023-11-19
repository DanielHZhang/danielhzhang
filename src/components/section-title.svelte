<script lang="ts">
	import { option } from '../utils';

	export let color = '#9e7a7a';
	export let id = option<string>();
</script>

<div class="flex flex-col mb-14">
	<h1 {id} class="text-7xl font-semibold text-center pt-4" style="color: {color}">
		<slot />
	</h1>
</div>
