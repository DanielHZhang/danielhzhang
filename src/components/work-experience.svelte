<script lang="ts">
	import SectionTitle from './section-title.svelte';
	import WorkItem from './work-item.svelte';

	const baseColorRgb = '72, 194, 126';
	const gradientColor = `rgba(${baseColorRgb}, 0.15)`;
</script>

<div class="flex flex-col">
	<SectionTitle color="rgb({baseColorRgb}, 0.75)">Work Experience</SectionTitle>
	<div class="flex flex-col gap-5">
		<WorkItem
			company={{ name: 'Prezo', url: 'https://prezo.ai', brandColor: 'rgb(171, 102, 255)' }}
			role="Software Engineer"
			description="Full stack development - Generative AI platform"
			tech="TypeScript, Python, Vue.js, Deno, Supabase, Cloudflare"
			time="Feb 2023 - Present (Full Time)"
			image="prezo-homepage.webp"
			{gradientColor}
		/>
		<WorkItem
			company={{ name: 'Clutch', url: 'https://clutch.ca', brandColor: 'rgb(255, 70, 76)' }}
			role="Software Engineer"
			description="Full stack development - Automotive platform"
			tech="TypeScript, React, Node.js, PostgreSQL, Terraform, AWS"
			time="Dec 2021 - Jan 2023 (Full Time)"
			image="clutch-homepage.webp"
			{gradientColor}
		/>
	</div>
</div>
