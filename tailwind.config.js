export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ['Satoshi', 'system-ui', 'sans-serif'] },
      colors: {
        accent: '#bf2828',
        'accent-hover': '#a01f1f',
        'accent-light': '#fdeaea',
        secondary: '#606671',
        dark: '#1a1a1a',
        light: '#faf9f7',
        surface: '#ffffff',
        border: '#e5e3df',
        muted: '#6b7280',
        success: '#16a34a',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.10)',
      },
    },
  },
  plugins: [],
}