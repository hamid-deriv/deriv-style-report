/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            'sans': 'Ubuntu, sans-serif',
        },
        height: {
            'hero': 'height: calc(100vh - 74px)'
        },
        extend: {},
    },
    plugins: [
        require('daisyui'),
        require('@tailwindcss/typography'),
    ],
};
