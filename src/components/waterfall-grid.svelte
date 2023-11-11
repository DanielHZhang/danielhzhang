<script lang="ts" generics="T">
	export let items: T[];
</script>

<div class="grid waterfall-grid">
	{#each items as items}
		<div style="">
			<div>
				<slot />
			</div>
		</div>
	{/each}
</div>

<style>
	.waterfall-grid {
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}
</style>
