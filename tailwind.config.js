module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                elements: "url('/images/background.svg')",
            },
            fontFamily: {
                sans: ['poppins'],
            },
            colors: {
                'blue-brand': '#0052FF',
                'gray-brand': {
                    50: '#DEDFE2',
                    100: '#979797',
                    200: '5B616E',
                },
                'dark-brand': '#0A0B0E',
            },
            width: {
                480: '480px',
            },
            height: {
                '10%': '10%',
                '90%': '90%',
                480: '480px',
            },
            margin: {
                98: '26rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
