/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: "Roboto Mono, monospace",
		},

		container: {
			center: true,
		},
		extend: {
			backgroundImage: {
				notFound: "url('/public/images/404.jpg')",
				portal: "url(/public/images/portal.gif)",
			},
			animation: {
				fadeScale: "fadeIn .5s ease-in-out",
			},

			keyframes: {
				fadeIn: {
					from: { transform: "scale(0)", visibility: "hidden" },
					to: { transform: "scale(1)", visibility: "visible" },
				},
			},
		},
	},
	daisyui: {
		themes: ["light", "dark"],
	},
	plugins: [require("daisyui")],
};
