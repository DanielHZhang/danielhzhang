<script lang="ts">
	import { fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
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

<div class="flex items-end pb-[20%] min-h-screen relative">
	<div class="flex flex-col text-5xl text-gray-300 leading-tight font-medium">
		<div>Hello!</div>
		<div>I'm <span class="text-blue-400">Daniel</span>, a self-taught software engineer from Toronto.</div>
		<div>My days are spent building web apps, graphics simulations, and artificial intelligence.</div>
	</div>

	{#if atTopOfPage}
		<div
			class="flex justify-between absolute bottom-8 inset-x-0"
			transition:fly={{ duration: 200, y: 40, easing: expoOut }}
		>
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
		color: theme(colors.blue.500);
	}
</style>
