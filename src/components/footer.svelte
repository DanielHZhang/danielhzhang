<script lang="ts">
	import { githubProfileUrl } from '../utils/constants';
	import Icon from './icon.svelte';
</script>

<footer class="text-base">
	<div class="flex justify-between items-center md:p-12 xs:p-2">
		<div>
			<a class="text-gold" href="/">DANIEL HAIYAO ZHANG</a>
			<p class="text-gray-400">Made with 🍁 from Canada</p>
		</div>
		<div>
			<a href={githubProfileUrl}>
				<Icon kind="github" width={32} height={32} />
			</a>
		</div>
	</div>
</footer>
