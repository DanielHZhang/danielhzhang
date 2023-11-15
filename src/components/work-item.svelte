<script lang="ts">
	import { base } from '$app/paths';
	import ArrowRightIcon from '../icons/arrow-badge-right.svg?component';

	export let company: { name: string; url: string };
	export let role: string;
	export let description: string;
	export let tech: string;
	export let time: string;
	export let image: string;
	export let gradientColor: string;
</script>

<div
	class="flex flex-col border border-gray-500 border-opacity-25 rounded-2xl p-12 gradient-bg"
	style="--gradient-color: {gradientColor}"
>
	<div class="flex gap-12">
		<img src={`${base}/${image}`} alt="Prezo home page" class="rounded-lg w-[430px] h-[225px] object-cover" />
		<div class="flex flex-col">
			<h1 class="text-3xl mb-4 flex items-center">
				<a href={company.url} class="text-blue-400 underline">{company.name}</a>
				<ArrowRightIcon class="w-6 inline-block mx-4" />
				<!-- <span class="mr-5" /> -->
				<span class="text-white">{role}</span>
			</h1>
			<h2 class="text-lg text-gray-400">{description}</h2>
			<div class="text-lg text-gray-400">Technologies: {tech}</div>
			<div class="mt-auto text-gray-400">{time}</div>
		</div>
	</div>
</div>

<style scoped>
	.gradient-bg {
		background: radial-gradient(ellipse at center, var(--gradient-color), var(--transparent));
	}
</style>
