/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    
      backgroundImage: {
        'gradient-radial-t': 'radial-gradient(circle at top, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-z': 'rgb(255, 255, 255, 0.5)'
      },
      borderWidth: {
        DEFAULT: '0.1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }    },
  },
  plugins: [],
}
