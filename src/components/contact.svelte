<script>
	import { linkedinProfileUrl } from '../utils/constants';
	import LinkButton from './link-button.svelte';
	import SectionTitle from './section-title.svelte';
</script>

<div>
	<SectionTitle id="#contact">Let's Connect</SectionTitle>
	<div class="anime anime-done px-8 flex xs:flex-col md:flex-row justify-center gap-4">
		<LinkButton href={linkedinProfileUrl} bordered class="xs:w-full sm:w-auto">LinkedIn message</LinkButton>
		<LinkButton href="mailto:hello@danielhzhang.com" class="xs:w-full sm:w-auto">Send email</LinkButton>
	</div>
</div>
