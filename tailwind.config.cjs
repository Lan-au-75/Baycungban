/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                juraFont: ['Jura', 'sans-serif'],
            },
            height: {
                h80: '80px',
                h160: '160px',
            },
            colors: {
                bgColor: '#E5E5E5',
                primaryColor: '#4D46FA',
                secondaryColor: '#F06336',
                grayColor: '#F4F2F9',

                base100: '#979797',
                base200: '#F8F8F8',
            },
            boxShadow: {
                shadow1: '0px 4px 30px rgba(77, 70, 250, 0.1);',
            },

            animation: {
                fadeIn: 'fadeIn .4s linear',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
