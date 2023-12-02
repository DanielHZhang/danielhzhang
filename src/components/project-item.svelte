<script lang="ts">
	import { onMount } from 'svelte';
	import type { Project } from '../types';
	import { capitalizeFirst, randInt } from '../utils';
	import Tag from './tag.svelte';

	export let project: Project;
	export let gradientColor: string;

	let element: HTMLDivElement;
	let boundingRect: DOMRect | undefined;
	let x: number = 0;
	let y: number = 0;
	let xRotation: number = 0;
	let yRotation: number = 0;

	const mouseEnter = (event: MouseEvent) => {
		if (event.target instanceof HTMLElement) {
			boundingRect = element.getBoundingClientRect();
		}
	};

	const mouseLeave = () => {
		boundingRect = undefined;
	};

	const mouseMove = (event: MouseEvent) => {
		if (event.target instanceof HTMLElement) {
			if (!boundingRect) {
				return;
			}
			x = event.clientX - boundingRect.left;
			y = event.clientY - boundingRect.top;
			const xPercent = x / boundingRect.width;
			const yPercent = y / boundingRect.height;
			xRotation = (yPercent - 0.5) * 10;
			yRotation = (0.5 - xPercent) * 10;
		}
	};

	const formatLanguage = (lang: string) => {
		return lang === 'json' ? lang.toUpperCase() : capitalizeFirst(lang);
	};

	onMount(() => {
		const rect = element.getBoundingClientRect();
		x = randInt(0, rect.width);
		y = randInt(0, rect.height);
	});
</script>

<div
	class="project-item anime anime-done relative flex flex-col gap-4 border border-gray-500 border-opacity-25 rounded-2xl xs:p-6 md:p-8 transition-transform duration-300 ease-out bg-card"
	style="--x: {x}px; --y: {y}px; --x-rotation: {xRotation}deg; --y-rotation: {yRotation}deg; --gradient-color: {gradientColor}"
	role="article"
	bind:this={element}
	on:mouseenter={mouseEnter}
	on:mouseleave={mouseLeave}
	on:mousemove={mouseMove}
>
	<div class="flex justify-between">
		<div class="flex">
			<a href={project.url} class="link text-3xl font-medium text-gold">{project.title}</a>
		</div>
	</div>
	<div class="grow mb-4">
		<p class="text-gray-400">{project.description}</p>
	</div>
	<div class="flex flex-wrap gap-2 items-start">
		{#if project.language}
			<Tag icon={project.language}>{formatLanguage(project.language)}</Tag>
		{/if}
		{#each project.tags as tag}
			<Tag icon={tag.icon}>{tag.name}</Tag>
		{/each}
	</div>
</div>

<style scoped lang="postcss">
	.project-item {
		background: radial-gradient(ellipse at var(--x) var(--y), var(--gradient-color), theme(colors.card));
	}

	.project-item:hover {
		transform: perspective(800px) rotateX(var(--x-rotation)) rotateY(var(--y-rotation));
	}
</style>
