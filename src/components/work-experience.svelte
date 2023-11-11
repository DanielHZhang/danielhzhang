<script lang="ts">
	import { base } from '$app/paths';
	import SectionTitle from './section-title.svelte';
</script>

<div class="flex flex-col">
	<SectionTitle>Work Experience</SectionTitle>
	<div class="flex flex-col border border-gray-500 border-opacity-25 rounded-2xl p-12 gradient-bg">
		<div class="flex gap-1">
			<img
				src={`${base}/prezo-homepage.webp`}
				alt="Prezo home page"
				class="rounded-lg w-[430px] h-[225px] object-cover"
			/>
			<div>
				<h1 class="text-2xl">Prezo - Software Engineer</h1>
				<h2>Full stack development - Generative AI platform</h2>
				<div>Technologies: TypeScript, Python, Deno, Supabase, Cloudflare</div>
				<div>Feb 2023 - Present (Full Time)</div>
			</div>
		</div>
	</div>
</div>
