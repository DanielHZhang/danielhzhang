/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				white: 'rgb(247, 248, 248)',
				gray: {
					400: 'rgb(180, 188, 208)',
				},
			},
		},
	},
	plugins: [],
};
