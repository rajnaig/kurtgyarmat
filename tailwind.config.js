/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#884e00',
          secondary: '#825b1f',
          accent: '#c19a6b',
          muted: '#f5f0e6',
        },
      },
    },
    plugins: [],
  }