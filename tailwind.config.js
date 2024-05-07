/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./dist/**/*.{html,js}'],
    theme: {
        extend: {
            width: {
                88: '22rem',
            },
            opacity: {
                35: '0.35',
            },
            colors: {
                pink: {
                    400: '#F9CADA',
                },
                blue: {
                    200: '#BCE7F0',
                },
                gray: {
                    100: '#F9F9F9',
                    200: '#F1F1F1',
                },
            },
        },
        fontFamily: {
            sans: ['Open Sans', 'sans-serif'],
        },
    },
    plugins: [],
}
