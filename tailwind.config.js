/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#bf2828',
        secondary: '#606671',
        dark: '#242424',
        light: '#c7c7c7',
        event: {
          blue: '#5bdef3',
          purple: '#df8aed',
        },
      },
    },
  },
  plugins: [],
}