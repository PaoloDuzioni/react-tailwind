module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        fontFamily: {
            sans: ['Noto Sans Jp', 'sans-serif'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
