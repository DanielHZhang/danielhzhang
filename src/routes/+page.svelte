<script lang="ts">
	import Contact from '$lib/components/contact.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Projects from '$lib/components/projects.svelte';
	import WorkExperience from '$lib/components/work-experience.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}
	let { data }: Props = $props();

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				// entry.target.classList.toggle('anime-done', entry.isIntersecting);
				if (entry.isIntersecting && !entry.target.classList.contains('anime-done')) {
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
	<meta
		name="description"
		content="Hi there, I'm Daniel Zhang, a software engineer with 2+ years of experience in web development. My interests are in distributed systems, real-time graphics, and machine learning. Check out my portfolio site to see my work experience and some of the projects I've worked on."
	/>
</svelte:head>

<div class="flex flex-col text-lg sm:text-xl gap-36 xl:px-[12%] lg:px-[6%] md:px-[4%] sm:px-4 xs:px-2 mx-auto">
	<Hero />
	<WorkExperience data={data.workExperience} />
	<Projects data={data.projects} />
	<Contact />
	<Footer />
</div>
