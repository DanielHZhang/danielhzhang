<script lang="ts">
	import Contact from '../components/contact.svelte';
	import Footer from '../components/footer.svelte';
	import Hero from '../components/hero.svelte';
	import Projects from '../components/projects.svelte';
	import WorkExperience from '../components/work-experience.svelte';
</script>

<div class="flex flex-col text-xl">
	<Hero />
	<div class="flex flex-col gap-32 xl:px-[10%] lg:px-[6%] md:px-4 sm:px-2">
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
