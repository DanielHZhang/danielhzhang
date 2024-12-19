<script lang="ts">
	import Contact from '$lib/components/contact.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Projects from '$lib/components/projects.svelte';
	import WorkExperience from '$lib/components/work-experience.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { App } from '$lib/render/scene';

	interface Props {
		data: PageData;
	}
	let { data }: Props = $props();

	let canvasEl = $state<HTMLCanvasElement>();
	let isRendering = $state(false);
	const renderEnabled = true;

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

	onMount(() => {
		if (!renderEnabled) return;
		if (!canvasEl) return;

		const webglContext = canvasEl.getContext('webgl2');
		if (!webglContext) return;

		const app = new App(canvasEl);
		app.start(() => {
			isRendering = true;
		});
		return app.dispose;
	});
</script>

<svelte:head>
	<title>Daniel Haiyao Zhang - Software Engineer</title>
	<meta
		name="description"
		content="Hi there, I'm Daniel Zhang, a software engineer with 3+ years of experience in web development. My interests are in distributed systems, real-time graphics, and machine learning. Check out my portfolio site to see my work experience and some of the projects I've worked on."
	/>
</svelte:head>

<canvas bind:this={canvasEl} class="fixed inset-0 w-full h-full z-0 overflow-hidden"></canvas>

<div class="flex flex-col text-lg sm:text-xl gap-36 px-2 2xl:w-[65vw] xl:w-[75vw] lg:w-[85vw] md:w-[95vw] mx-auto">
	<Hero />
	<WorkExperience data={data.workExperience} />
	<Projects data={data.projects} />
	<Contact />
	<Footer />
</div>
