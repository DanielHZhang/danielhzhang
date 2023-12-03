<script lang="ts">
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { randInt } from '../utils';

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		gradientColor: string;
	}
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

	onMount(() => {
		const rect = element.getBoundingClientRect();
		x = randInt(0, rect.width);
		y = randInt(0, rect.height);
	});
</script>

<div
	{...$$restProps}
	class="perspective-item relative {$$restProps.class ?? ''}"
	style="--x: {x}px; --y: {y}px; --x-rotation: {xRotation}deg; --y-rotation: {yRotation}deg; --gradient-color: {gradientColor}"
	role="article"
	bind:this={element}
	on:mouseenter={mouseEnter}
	on:mouseleave={mouseLeave}
	on:mousemove={mouseMove}
>
	<slot />
</div>

<style scoped lang="postcss">
	.perspective-item {
		background: radial-gradient(ellipse at var(--x) var(--y), var(--gradient-color), theme(colors.card));
		transition: transform 300ms ease-out;
		will-change: transform;
	}

	.perspective-item:hover {
		transform: perspective(800px) rotateX(var(--x-rotation)) rotateY(var(--y-rotation));
	}
</style>
