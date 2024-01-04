/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,html}',
    './components/**/*.{js,ts,jsx,tsx,mdx, html}',
    './app/**/*.{js,ts,jsx,tsx,mdx,html}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        'pad': '96px',
        '128': '32rem',
        '144': '36rem',
      },
      colors: {
        "bg-nav": "#1e6dba",
        "start-nav": "#58a0d9",
        "end-nav": "#1e61ad",
        "bg-footer": "#439ddf",
        "f-text": "#515987",
        "btnColor": "#3f83f8",
        'white': '#ffffff',
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
    }
  },
  plugins: [],
}
