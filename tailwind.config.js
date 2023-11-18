import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Lexend', ...defaultTheme.fontFamily.sans],
				josefin: 'Josefin Sans',
			},
			colors: {
				white: 'rgb(247, 248, 248)',
				gray: {
					400: 'rgb(180, 188, 208)',
				},
				gold: 'rgb(218, 201, 166)',
			},
		},
	},
	plugins: [],
};
