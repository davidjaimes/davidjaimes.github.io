import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		screens: {
			mobile: '480px',
			tablet: '768px',
			laptop: '976px',
			desktop: '1440px',
		},
		colors: {
			'gray-dark': '#161b22',
			'gray': '#0d1117',
			'white': '#f0f6fc',
		},
		extend: {
			fontFamily: {
				mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.sans],
				serif: ['IBM Plex Serif', ...defaultTheme.fontFamily.sans],
				sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
