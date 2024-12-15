import svg from '@poppanator/sveltekit-svg';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		svg({
			includePaths: ['./src/lib/assets/icons'],
			svgoOptions: false,
		}),
	],
});
