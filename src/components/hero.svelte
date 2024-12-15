<script lang="ts">
	import { IconBriefcase, IconBulb, IconGithub, IconLinkedin } from '$lib/assets/icons';
	import { githubProfileUrl, linkedinProfileUrl } from '$lib/config/constants';
	import { onMount } from 'svelte';
	import { expoOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import * as THREE from 'three';

	let atTopOfPage = true;

	const threeContainerId = 'hero-canvas-container';
	const renderEnabled = false;

	const handleScroll = () => {
		if (window.scrollY > 20) {
			atTopOfPage = false;
		} else {
			atTopOfPage = true;
		}
	};

	onMount(() => {
		if (!renderEnabled) {
			return;
		}

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer({ alpha: true });

		const webglContext = renderer.domElement.getContext('webgl2') || renderer.domElement.getContext('webgl');
		if (!webglContext) {
			return;
		}

		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		const cube = new THREE.Mesh(geometry, material);
		scene.add(cube);

		renderer.setSize(window.innerWidth, window.innerHeight);
		camera.position.z = 5;

		const container = document.getElementById(threeContainerId)!;
		container.appendChild(renderer.domElement);

		// renderer.render(scene, camera);
		// function rerender() {
		// 	requestAnimationFrame(rerender);
		// 	cube.rotation.x += 0.01;
		// 	cube.rotation.y += 0.01;
		// 	renderer.render(scene, camera);
		// }
		// rerender();

		window.addEventListener('resize', () => {
			renderer.setSize(window.innerWidth, window.innerHeight);
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
		});
	});
</script>

<svelte:window on:scroll={handleScroll} />

<div class="flex items-end min-h-screen">
	<div id={threeContainerId} class="absolute -z-10 inset-0 overflow-hidden"></div>

	<div class="flex flex-grow relative pb-[20vh] xs:px-2">
		<div class="flex flex-col gap-3 lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl text-gray-300 font-medium">
			<img src="favicon.svg" alt="logo" class="w-16 h-16" />
			<div class="leading-normal text-gold">Hello there!</div>
			<div class="leading-tight text-gray-400">
				I'm <span class="text-brand-main">Daniel</span>, a Canadian software engineer.
			</div>
			<div class="leading-tight text-gray-450 lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl">
				<p>I love exploring diverse areas of software and hardware.</p>
				<p>Currently obsessed with AI, web dev, and game dev.</p>
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
	.link-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: theme(colors.gold);
	}
</style>
