<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	// import init, { run_bevy_app } from '$lib/projects/conways_golot';
	import * as GameContext from '$lib/projects/conways_golot';
	import { base } from '$app/paths';
	import Nav from '$lib/components/ui/nav.svelte';
	import { IconArrowLeft, IconGithub } from '$lib/assets/icons';
	import type { PageData } from './$types';
	import { browser } from '$app/environment';

	type ConwaysGolotModule = typeof import('$lib/projects/conways_golot');

	interface Props {
		data: PageData;
	}
	let { data }: Props = $props();
	let { project } = data;
	let heartbeat = $state(0);
	let canvas = $state<HTMLCanvasElement>();
	let canvasWrapper = $state<HTMLDivElement>();
	let wasmContext = $state();

	async function resizeCanvas() {
		if (!canvas) {
			return;
		}
		const dppx = window.devicePixelRatio;
		// canvas.width = window.innerWidth * dppx;
		// canvas.height = window.innerHeight * dppx;
		// canvas.style.width = `${window.innerWidth}px`;
		// canvas.style.height = `${window.innerHeight}px`;
	}

	async function fetchWasm() {
		const response = await fetch(`${base}/conways_golot_bg.wasm`);
		const blob = await response.blob();
		return blob.slice(0, blob.size, 'text/javascript');
	}

	async function fetchWasmBindGenJsCode() {
		const response = await fetch(`${base}/conways_golot.js`);
		const blob = await response.blob();
		return blob.slice(0, blob.size, 'text/javascript');
	}

	onMount(async () => {
		try {
			window.addEventListener('resize', resizeCanvas);
			heartbeat = window.setInterval(() => {
				if (!canvas) {
					return;
				}
				if (canvas.style.width !== '100%') {
					canvas.style.width = '100%';
					canvas.style.height = '100%';
					clearInterval(heartbeat);
				}
			}, 100);

			// const wasm = await fetchWasm();
			const wasmBindGenJsCode = await fetchWasmBindGenJsCode();
			const objectUrl = URL.createObjectURL(wasmBindGenJsCode);
			/* @vite-ignore */
			const mod = (await import(objectUrl)) as ConwaysGolotModule;
			URL.revokeObjectURL(objectUrl);
			await mod.default(`${base}/conways_golot_bg.wasm`);

			// const blob = new Blob([wasmBindGenJsCode], { type: 'text/javascript' });

			// const b = new URL(`http://localhost:5173/conways_golot_bg.wasm`);
			// console.log(a, base);
			// console.log(a, wasm);
			// const wasm = await import(b.href);
			// console.log(what, wasm);
			// await mod.default(wasm);
			wasmContext = mod;
			// what.run_bevy_app(window.location.origin);

			// const a = URL.createObjectURL();
			// const huh = new Blob([]);

			// run_bevy_app(window.location.origin); // this statement will only return if the Rust program exits
			requestAnimationFrame(resizeCanvas);
		} catch (error) {
			if (error instanceof Error && error.message.includes('Using exceptions for control flow')) {
				return;
			}
			console.error('Failed to start Bevy app:', error);
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('resize', resizeCanvas);
			clearInterval(heartbeat);
			wasmContext = undefined;
		}
		// console.log('destroy');
	});
</script>

<div class="flex flex-col h-screen">
	<Nav />
	<div class="flex flex-col px-10 relative">
		<h1 class="text-2xl font-semibold flex items-center gap-4 mb-2">
			<span>{project.title}</span>
			{#if project.githubUrl}
				<a
					class="text-sm font-normal flex gap-1 text-gray-500"
					href="https://github.com/your-repo-link"
					target="_blank"
				>
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
			style="width: 100%; height: 100%; min-width: 180px; min-height: 120px; aspect-ratio: 1.77778 / 1;"
		></canvas>
	</div>
</div>
