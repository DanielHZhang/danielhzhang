<script lang="ts">
	import { randomInteger } from '$lib/utils/number';
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		gradientColor: string;
	}
	const { gradientColor, class: className, children, ...rest }: Props = $props();

	let element = $state<HTMLDivElement>();
	let boundingRect = $state<DOMRect>();
	let x = $state(0);
	let y = $state(0);
	let xRotation = $state(0);
	let yRotation = $state(0);

	const mouseEnter = (event: MouseEvent) => {
		if (event.target instanceof HTMLElement && element) {
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
		if (!element) return;
		const rect = element.getBoundingClientRect();
		x = randomInteger(0, rect.width);
		y = randomInteger(0, rect.height);
	});
</script>

<div
	{...rest}
	class="perspective-item relative {className ?? ''}"
	style="--x: {x}px; --y: {y}px; --x-rotation: {xRotation}deg; --y-rotation: {yRotation}deg; --gradient-color: {gradientColor}"
	role="article"
	bind:this={element}
	onmouseenter={mouseEnter}
	onmouseleave={mouseLeave}
	onmousemove={mouseMove}
>
	{@render children?.()}
</div>

<style scoped lang="postcss">
	.perspective-item {
		/* theme(colors.card) */
		background: radial-gradient(ellipse at var(--x) var(--y), var(--gradient-color), var(--color-card));
		transition: transform 300ms ease-out;
		will-change: transform;
	}

	.perspective-item:hover {
		transform: perspective(800px) rotateX(var(--x-rotation)) rotateY(var(--y-rotation));
	}
</style>
