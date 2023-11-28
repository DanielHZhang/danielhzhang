<script lang="ts">
	import { fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
	import { githubProfileUrl, linkedinProfileUrl } from '../utils/constants';
	import Icon from './icon.svelte';
	import * as THREE from 'three';
	import { onMount } from 'svelte';

	let atTopOfPage = true;

	const handleScroll = () => {
		if (window.scrollY > 20) {
			atTopOfPage = false;
		} else {
			atTopOfPage = true;
		}
	};

	const threeContainerId = 'hero-canvas-container';

	onMount(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer({ alpha: true });

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
	<div id={threeContainerId} class="absolute -z-10 inset-0 overflow-hidden" />

	<div class="relative pb-[20vh] xs:px-2">
		<div class="flex flex-col gap-3 lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl text-gray-300 font-medium">
			<div class="leading-normal text-gold">Hello!</div>
			<div class="leading-tight text-gray-400">
				I'm <span class="text-blue-400">Daniel</span>, a self-taught software engineer from Toronto.
			</div>
			<div class="leading-tight text-gray-450">
				My days are spent building web apps, graphics simulations, and artificial intelligence.
			</div>
		</div>

		{#if atTopOfPage}
			<div
				class="grid md:grid-cols-[repeat(4,auto)] xs:grid-cols-[repeat(2,auto)] xs:px-2 justify-between gap-2 absolute bottom-10 inset-x-0"
				transition:fly={{ duration: 200, y: 40, easing: expoOut }}
			>
				<a href="#work-experience" class="link-item">
					<Icon kind="briefcase" width={26} height={26} stroke="#fff" />
					<span class="xs:hidden sm:inline md:hidden lg:inline">Work Experience</span>
					<span class="xs:inline sm:hidden md:inline lg:hidden">Work</span>
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
