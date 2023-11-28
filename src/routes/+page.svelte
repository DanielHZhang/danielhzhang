<script lang="ts">
	import { onMount } from 'svelte';
	import Contact from '../components/contact.svelte';
	import Footer from '../components/footer.svelte';
	import Hero from '../components/hero.svelte';
	import Projects from '../components/projects.svelte';
	import WorkExperience from '../components/work-experience.svelte';

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				// entry.target.classList.toggle('anime-done', entry.isIntersecting);
				if (entry.isIntersecting) {
					setTimeout(() => {
						entry.target.classList.add('anime-done');
					}, 250);
				}
			});
		});

		// Remove the done state from all elements initially, in case that JavaScript is disabled on the user's browser
		const fadeElements = document.querySelectorAll('.anime');
		for (const element of fadeElements) {
			element.classList.remove('anime-done');
			observer.observe(element);
		}
	});
</script>

<svelte:head>
	<title>Daniel Haiyao Zhang - Software Engineer</title>
</svelte:head>

<div class="flex flex-col text-xl gap-36 xl:px-[12%] lg:px-[6%] md:px-[4%] sm:px-4 xs:px-2 mx-auto">
	<Hero />
	<WorkExperience />
	<Projects />
	<Contact />
	<Footer />
</div>
