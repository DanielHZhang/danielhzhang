<script>
	import { linkedinProfileUrl } from '$lib/config/constants';
	import LinkButton from './link-button.svelte';
	import SectionTitle from './section-title.svelte';

	const color = '#f778ba';
</script>

<div>
	<SectionTitle id="#contact" {color}>Let's Connect</SectionTitle>
	<div class="anime anime-done px-8 flex xs:flex-col md:flex-row justify-center gap-4">
		<LinkButton href={linkedinProfileUrl} bordered class="xs:w-full sm:w-auto">LinkedIn message</LinkButton>
		<LinkButton href="mailto:hello@danielhzhang.com" class="xs:w-full sm:w-auto">Send email</LinkButton>
	</div>
</div>
