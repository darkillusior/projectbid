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
     
      },

    },
  },
  plugins: [],
}