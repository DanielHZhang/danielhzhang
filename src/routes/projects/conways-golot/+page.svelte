<script lang="ts">
	import { browser } from '$app/environment';
	import { IconGithub } from '$lib/assets/icons';
	import Nav from '$lib/components/ui/nav.svelte';
	import { assetUrl } from '$lib/config/constants';
	import { onDestroy, onMount } from 'svelte';
	import type { PageData } from './$types';

	type ConwaysGolotModule = typeof import('$lib/projects/conways_golot');

	interface Props {
		data: PageData;
	}
	let { data }: Props = $props();
	let { project } = data;

	let interval = $state(0);
	let canvas = $state<HTMLCanvasElement>();
	let canvasWrapper = $state<HTMLDivElement>();
	let objectUrl = $state<string>();

	async function fetchWasmBindGenJsCode() {
		const response = await fetch(`${assetUrl}/conways_golot.js`);
		const blob = await response.blob();
		return blob.slice(0, blob.size, 'text/javascript');
	}

	onMount(async () => {
		try {
			interval = window.setInterval(() => {
				if (!canvas) {
					return;
				}
				if (canvas.style.width !== '100%') {
					canvas.style.width = '100%';
					canvas.style.height = '100%';
					clearInterval(interval);
				}
			}, 100);

			const wasmBindGenJsCode = await fetchWasmBindGenJsCode();
			objectUrl = URL.createObjectURL(wasmBindGenJsCode);
			const mod: ConwaysGolotModule = await import(
				/* @vite-ignore */
				objectUrl
			);
			await mod.default(`${assetUrl}/conways_golot_bg.wasm`);

			const rect = canvasWrapper?.getBoundingClientRect();
			// this statement will only return if the Rust program exits
			mod.run_bevy_app(window.location.origin, rect?.width || 1280, rect?.height || 720);
		} catch (error) {
			if (error instanceof Error && error.message.includes('Using exceptions for control flow')) {
				return;
			}
			console.error('Failed to start Bevy app:', error);
		}
	});

	onDestroy(() => {
		if (browser) {
			clearInterval(interval);
			if (objectUrl) {
				URL.revokeObjectURL(objectUrl);
			}
		}
	});
</script>

<div class="flex flex-col h-screen">
	<Nav />
	<div class="flex flex-col px-10 relative">
		<h1 class="text-2xl font-semibold flex items-center gap-4 mb-2">
			<span>{project.title}</span>
			{#if project.githubUrl}
				<a class="text-sm font-normal flex gap-1 text-gray-500" href={project.githubUrl} target="_blank">
					<IconGithub class="w-4 fill-gray-500" />
					<span>View on GitHub</span>
				</a>
			{/if}
		</h1>
		<p class="text-gray-500">{project.description}</p>
	</div>
	<div class="flex flex-grow mx-10 mt-5 mb-10 h-44" bind:this={canvasWrapper}>
		<canvas
			bind:this={canvas}
			id="canvas-conways-golot"
			class="outline-none rounded-lg"
			style="width: 100%; height: 100%; min-width: 180px; min-height: 120px;"
		></canvas>
	</div>
</div>
