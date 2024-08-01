/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		extend: {
			colors: {
				'primary-color': '#E26E23'
			},
			lineHeight: {
				none: '0.7',
				tight: '1'
			}
		}
	},
	plugins: []
};

