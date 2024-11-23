/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"mustard-orange": "#a35f1a",
				"mustard-orange-light": "#e29950",
				"stone-accent": "#111111",
			},
			fontFamily: {
				sans: ["Merriweather Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};

