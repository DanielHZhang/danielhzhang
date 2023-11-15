<script lang="ts">
	import Footer from '../components/footer.svelte';
	import Hero from '../components/hero.svelte';
	import Projects from '../components/projects.svelte';
	import Skills from '../components/skills.svelte';
	import WorkExperience from '../components/work-experience.svelte';
</script>

<div class="flex flex-col">
	<Hero />
	<div class="flex flex-col gap-32 px-[15%]">
		<WorkExperience />
		<Skills />
		<Projects />
	</div>
	<Footer />
</div>

<style lang="postcss">
	/* :global(html) {
		background-color: theme(colors.gray.100);
	} */
</style>
