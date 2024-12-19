<script>
	import { linkedinProfileUrl } from '$lib/config/constants';
	import LinkButton from '../ui/link-button.svelte';
	import SectionTitle from '../ui/section-title.svelte';
</script>

<div>
	<SectionTitle id="#contact" class="text-brand-sakura">Let's Connect</SectionTitle>
	<div class="anime anime-done px-8 flex xs:flex-col md:flex-row justify-center gap-4">
		<LinkButton href={linkedinProfileUrl} variant="ghost" class="xs:w-full sm:w-auto">LinkedIn message</LinkButton>
		<LinkButton
			href="mailto:hello@danielhzhang.com"
			variant="solid"
			class="xs:w-full sm:w-auto bg-brand-sakura-dark hover:bg-brand-sakura-bright text-brand-ground"
			>Send email</LinkButton
		>
	</div>
</div>
