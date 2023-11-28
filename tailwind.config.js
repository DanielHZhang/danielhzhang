import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				xs: '100px',
			},
			fontFamily: {
				sans: ['Lexend', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				white: 'rgb(247, 248, 248)',
				gray: {
					300: '#D1E1E4',
					400: 'rgb(180, 188, 208)',
					450: '#8c92a1',
				},
				gold: 'rgb(218, 201, 166)',
				card: '#191A21',
			},
		},
	},
	plugins: [],
};
