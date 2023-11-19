<script>
	import { linkedinProfileUrl } from '../utils/constants';
	import LinkButton from './link-button.svelte';
	import SectionTitle from './section-title.svelte';
</script>

<div class="mb-16">
	<SectionTitle id="#contact">Let's Connect</SectionTitle>
	<div class="flex justify-center gap-4">
		<LinkButton href="mailto:hello@danielhzhang.com">Send email</LinkButton>
		<LinkButton href={linkedinProfileUrl} bordered>LinkedIn message</LinkButton>
	</div>
</div>
