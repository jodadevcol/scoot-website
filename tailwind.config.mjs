/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Lexend Deca Variable', ...defaultTheme.fontFamily.serif],
				'serif': ['Lexend Deca Variable', ...defaultTheme.fontFamily.serif],
				'mono': ['Space Mono', ...defaultTheme.fontFamily.mono],
			},
			fontSize: {
				header: '2.5rem',
			},
			colors: {
				primary: {
					100: '#fcb72b',
					200: '#fff4df',
				},
				secondary: {
					100: '#2F3B59'
				},
				dark: {
					100: '#495567',
					200: '#939caa',
				},
				light: {
					100: '#e5ecf4',
					200: '#f2f5f9',
				},
			},
			margin: {
				129: '7.25rem', // 116px
				130: '7.5rem', 	// 120px
				131: '7.75rem', // 124px
			},
			letterSpacing: {
				title: '.25em'
			},
			fontSize: {
				'6xl': ['3.5rem', {
					lineHeight: '1',
					letterSpacing: '-2.5px', // 0.15625em
				}],
				'5xl': ['3rem', {
					lineHeight: '1',
					letterSpacing: '-2.14px', // 0.13375em
				}],
				'4xl': ['2.5rem', {
					lineHeight: '1',
					letterSpacing: '-1.79px', // 0.111875em
				}],
				'2xl': ['1.5rem', {
					lineHeight: '1.75rem',
					letterSpacing: '-1.07px', // 0.066875em
				}]
			}
		},
	},
	plugins: [],
}
