<script lang="ts">
	import { fly } from 'svelte/transition';
	import { githubProfileUrl, linkedinProfileUrl } from '../utils/constants';
	import Icon from './icon.svelte';

	let atTopOfPage = true;

	const handleScroll = () => {
		if (window.scrollY > 20) {
			atTopOfPage = false;
		} else {
			atTopOfPage = true;
		}
	};
</script>

<svelte:window on:scroll={handleScroll} />

<div class="flex flex-col items-center min-h-screen">
	<div class="flex flex-col text-gold text-6xl leading-tight font-medium">
		<div>Hey there! I'm Daniel Haiyao Zhang!</div>
		<div>I'm a self-taught software engineer from Toronto.</div>
		<div>I'm passionate about the web, artificial intelligence, and computer graphics.</div>
	</div>

	{#if atTopOfPage}
		<div class="flex justify-between absolute bottom-8 left-20 right-20" transition:fly={{ duration: 200, y: -40 }}>
			<a href="#work-experience" class="link-item">
				<Icon kind="briefcase" width={26} height={26} stroke="#fff" />
				<span>Work Experience</span>
			</a>
			<a href="#projects" class="link-item">
				<Icon kind="bulb" width={28} height={28} stroke="#fff" />
				<span>Projects</span>
			</a>
			<a href={githubProfileUrl} class="link-item">
				<Icon kind="github" width={24} height={24} />
				<span>Github</span>
			</a>
			<a href={linkedinProfileUrl} class="link-item">
				<Icon kind="linkedin" width={24} height={24} />
				<span>LinkedIn</span>
			</a>
		</div>
	{/if}
</div>

<style scoped lang="postcss">
	.link-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		transition: color 200ms ease-out;
		color: theme(colors.gold);
	}

	.link-item:hover {
		color: theme(colors.blue.400);
	}
</style>
