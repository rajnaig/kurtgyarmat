/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-inter)'],
          serif: ['var(--font-cormorant)'],
        },
        colors: {
          'earth': 'rgb(var(--color-earth) / <alpha-value>)',
          'steel': 'rgb(var(--color-steel) / <alpha-value>)',
          'gold': 'rgb(var(--color-gold) / <alpha-value>)',
          'cream': 'rgb(var(--color-cream) / <alpha-value>)',
          'leather': 'rgb(var(--color-leather) / <alpha-value>)',
          'parchment': 'rgb(var(--color-parchment) / <alpha-value>)',
          'stone': 'rgb(var(--color-stone) / <alpha-value>)',
        },
        animation: {
          'fade-in': 'fadeIn 0.6s ease-out forwards',
          'draw-arrow': 'drawArrow 2s ease-out forwards',
        },
      },
    },
    plugins: [],
  }