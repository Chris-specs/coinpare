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
                'blue-brand': {
                    50: '#113355',
                    100:'#0052FF',
                },
                'gray-brand': {
                    50: '#DEDFE2',
                    100: '#979797',
                    200: '#5B616E',
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
            keyframes: {
                'fade-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-200px)',
                    },
                    '50%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
            },
            animation: {
                'fade-down': 'fade-down 0.3s normal',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
