/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1180px",
        }
      },
      fontSize: {
        'custom-base': "13px",
        'custom-xl': "22px",
        'custom-2xl': "61px",
      },
      lineHeight: {
        'custom-xl': "15px",
        'custom-2xl': "21.79px",
        'custom-3xl': "29.96px",
        'custom-4xl': "40.86px",
        'custom-5xl': "83.08px",
      },
      colors: {
        'gray': "#525252",
        'blue': "#0046ad",
        'dark-blue': "#023da0",
      },
      boxShadow: {
      },
      backgroundImage: {
        'hero-bg': "url('/public/assets/images/png/hero-bg.png')",
      },
      fontFamily: {
      }
    },
  },
  plugins: [],
}

