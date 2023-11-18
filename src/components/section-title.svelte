<script lang="ts">
	export let color = '#9e7a7a';
</script>

<div class="flex flex-col mb-14">
	<h1 class="text-7xl font-semibold text-center" style="color: {color}">
		<slot />
	</h1>
</div>
