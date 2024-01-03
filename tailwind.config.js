/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      gradientColorStopPositions: {
        50: '50%',
      },
      'fade-up': {
        '0%': {
          opacity: '0',
          transform: 'translateY(2rem)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
    },

  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  darkMode: "class"
}
