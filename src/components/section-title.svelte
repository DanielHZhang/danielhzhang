<script lang="ts">
	import { option } from '../utils';

	export let color = '#ba7385';
	export let id = option<string>();
</script>

<div class="flex flex-col mb-14">
	<h1 {id} class="md:text-7xl xs:text-5xl font-semibold text-center pt-4 anime anime-done" style="color: {color};">
		<slot />
	</h1>
</div>
