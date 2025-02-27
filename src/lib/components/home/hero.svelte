<script lang="ts">
	import { IconBriefcase, IconBulb, IconGithub, IconLinkedin } from '$lib/assets/icons';
	import { githubProfileUrl, linkedinProfileUrl } from '$lib/config/constants';
	import { expoOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let atTopOfPage = $state(true);

	const handleScroll = () => {
		if (window.scrollY > 20) {
			atTopOfPage = false;
		} else {
			atTopOfPage = true;
		}
	};
</script>

<svelte:window on:scroll={handleScroll} />

<div class="flex items-end min-h-screen">
	<div class="flex flex-grow relative pb-[20vh] xs:px-2">
		<div class="flex flex-col gap-3 lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl text-gray-300 font-medium">
			<img src="favicon.svg" alt="logo" class="w-16 h-16" />
			<div class="leading-normal text-gold">Hello there!</div>
			<div class="leading-tight text-gray-400">
				I'm <span class="text-brand-main">Daniel</span>, a Canadian software engineer.
			</div>
			<div class="leading-tight text-gray-450 lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl">
				<p>I love exploring diverse areas of software and hardware.</p>
				<p>Currently working on AI, web dev, and game dev.</p>
			</div>
		</div>

		{#if atTopOfPage}
			<div
				class="grid md:grid-cols-[repeat(4,auto)] xs:grid-cols-[repeat(2,auto)] xs:px-2 justify-between gap-2 absolute bottom-10 inset-x-0"
				transition:fly={{ duration: 200, y: 40, easing: expoOut }}
			>
				<a href="#work-experience" class="link link-item">
					<IconBriefcase width={26} height={26} stroke="#fff" />
					<span class="xs:hidden sm:inline md:hidden lg:inline">Work Experience</span>
					<span class="xs:inline sm:hidden md:inline lg:hidden">Work</span>
				</a>
				<a href="#projects" class="link link-item">
					<IconBulb width={28} height={28} stroke="#fff" />
					<span>Projects</span>
				</a>
				<a href={githubProfileUrl} class="link link-item">
					<IconGithub width={24} height={24} />
					<span>Github</span>
				</a>
				<a href={linkedinProfileUrl} class="link link-item">
					<IconLinkedin width={24} height={24} />
					<span>LinkedIn</span>
				</a>
			</div>
		{/if}
	</div>
</div>

<style scoped lang="postcss">
	@reference "tailwindcss/theme";

	.link-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--color-gold);
		/* theme(colors.gold); */
	}
</style>
