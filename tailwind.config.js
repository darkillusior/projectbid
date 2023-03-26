/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    
      backgroundImage: {
        'gradient-radial-t': 'radial-gradient(circle at top, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
     
      },
      borderWidth: {
        DEFAULT: '0.1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
    
      keyframes: {
        'fade-up-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(20px)'
            },
        }
    },
    animation: {
        'fade-up-down': 'fade-up-down 1s ease-out'
    }
    
    
    },
  },
  plugins: [],
}
