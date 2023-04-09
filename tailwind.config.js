/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#1320b2",

          "secondary": "#e55a3b",

          "accent": "#e0ab57",

          "neutral": "#232B39",

          "base-100": "#E8E7E9",

          "info": "#82B8F2",

          "success": "#68EEB6",

          "warning": "#E67505",

          "error": "#E43F47",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

