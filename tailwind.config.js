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
        secondary: '#6a7383',
        dark: '#242424',
        light: '#ededed',
        event: {
          blue: '#5bdef3',
          purple: '#df8aed',
        },
      },
    },
  },
  plugins: [],
}