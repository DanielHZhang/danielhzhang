<script lang="ts">
	import { IconGithub } from '$lib/assets/icons';
	import { githubProfileUrl } from '$lib/config/constants';
</script>

<footer class="text-base">
	<div class="flex justify-between items-center md:p-12 xs:p-2">
		<div>
			<a class="text-gold" href="/">DANIEL HAIYAO ZHANG</a>
			<p class="text-gray-400">Made with 🍁 from Canada</p>
		</div>
		<div>
			<a href={githubProfileUrl}>
				<IconGithub width={32} height={32} />
			</a>
		</div>
	</div>
</footer>
