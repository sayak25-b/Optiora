/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      animation: {
        float: "float 5s ease-in-out infinite",
        pulseSlow: "pulseSlow 4s ease-in-out infinite",
        spinSlow: "spin 18s linear infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-10px)",
          },
        },

        pulseSlow: {
          "0%, 100%": {
            opacity: "0.5",
          },

          "50%": {
            opacity: "1",
          },
        },
      },
    },
  },

  plugins: [],
};