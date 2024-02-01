/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				blurple: "#5865F2",
				basedark: {
					1: "#313339",
					2: "#2B2D32",
					3: "#1E2022",
					3.5: "#222428",
					light: "#3F4148",
				},
			},
			boxShadowColor: {
				basedark: {
					1: "#313339",
					2: "#2B2D32",
					3: "#1E2022",
					active: "#303238",
				},
			},
			colors: {
				basedark: "#939BA4",
				"basedark-active": "#303238",
			},
			ringColor: {
				basedark: {
					2: "#2B2D32",
				},
			},
			borderColor: {
				basedark: {
					light: "#3F4148",
				},
			},
		},
	},
	plugins: [],
}
