<script lang="ts">
	import '../app.pcss';

	let { children } = $props();
</script>

<svelte:head>
	<meta
		name="description"
		content="Hi there, I'm Daniel Zhang, a software engineer with 3+ years of experience in web development. My interests are in distributed systems, real-time graphics, and machine learning. Check out my portfolio site to see my work experience and some of the projects I've worked on."
	/>
</svelte:head>

{@render children()}
