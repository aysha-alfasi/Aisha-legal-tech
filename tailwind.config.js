/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
    extend: {
        fontFamily: {
             heading: ['"Readex Pro"', 'sans-serif'],    
            paragraph: ['Inter', 'sans-serif'],
            signature: ['"Cedarville Cursive"', 'cursive']
    },
    }
};
export const plugins = [];
