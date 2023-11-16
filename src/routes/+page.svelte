<script lang="ts">
	import Contact from '../components/contact.svelte';
	import Footer from '../components/footer.svelte';
	import Hero from '../components/hero.svelte';
	import Projects from '../components/projects.svelte';
	import WorkExperience from '../components/work-experience.svelte';
</script>

<div class="flex flex-col">
	<Hero />
	<div class="flex flex-col gap-32 lg:px-[15%] md:px-[8%]">
		<WorkExperience />
		<Projects />
		<Contact />
	</div>
	<Footer />
</div>

<style lang="postcss">
	/* :global(html) {
		background-color: theme(colors.gray.100);
	} */
</style>
