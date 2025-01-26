/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			spacing: {
				skinny: '0.25rem',
				squish: 'clamp(0.75rem, 1vw, 1rem)',
				med: 'clamp(1.5rem, 2.5vw, 2.5rem)',
				chub: 'clamp(2.75rem, 4vw, 4rem)',
			},
			backgroundSize: {
				'hover-reveal': '400%',
			},
		},
		fontFamily: {
			skinny: ['Quicksand', 'system-ui', 'Ubuntu', 'sans-serif'],
			uni: ['unicode'],
		},
		screens: {
			mob: '200px',
			pad: '720px',
			desk: '900px',
		},
		borderWidth: {
			0: 'none',
			1: '1px',
			2: '2px',
			chub: '4px',
		},
		maxWidth: {
			wrapper: '1560px',
		},
		colors: {
			black: {
				DEFAULT: '#000',
			},
			slate_gray: {
				DEFAULT: '#738290',
				100: '#171a1d',
				200: '#2e343a',
				300: '#454e57',
				400: '#5c6875',
				500: '#738290',
				600: '#8f9ba7',
				700: '#abb4bd',
				800: '#c7cdd3',
				900: '#e3e6e9',
			},
			powder_blue: {
				DEFAULT: '#a1b5d8',
				100: '#162235',
				200: '#2d436a',
				300: '#4365a0',
				400: '#6c8cc2',
				500: '#a1b5d8',
				600: '#b4c4e0',
				700: '#c7d3e8',
				800: '#dae2ef',
				900: '#ecf0f7',
			},
			baby_powder: {
				DEFAULT: '#fffcf7',
				100: '#643f00',
				200: '#c87f00',
				300: '#ffb22d',
				400: '#ffd791',
				500: '#fffcf7',
				600: '#fffcf7',
				700: '#fffdf9',
				800: '#fffefb',
				900: '#fffefd',
			},
			nyanza: {
				DEFAULT: '#e4f0d0',
				100: '#334416',
				200: '#66882b',
				300: '#97c548',
				400: '#bedb8c',
				500: '#e4f0d0',
				600: '#eaf3da',
				700: '#eff6e3',
				800: '#f4f9ec',
				900: '#fafcf6',
			},
			tea_green: {
				DEFAULT: '#c2d8b9',
				100: '#23341d',
				200: '#47673a',
				300: '#6a9b57',
				400: '#96bb87',
				500: '#c2d8b9',
				600: '#cfe0c8',
				700: '#dbe8d6',
				800: '#e7f0e4',
				900: '#f3f7f1',
			},
		},
	},
	plugins: [],
};
