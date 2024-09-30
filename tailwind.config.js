/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        light: "#eee",
        black: "#181818",
        grey: "#eeeeee",
        darkBlack: "#050505",
        dark: "#101010",
        bd: "#c0c0c0",
        bdDark: "#404040",
        shade: "#6B6B6B",
        main: "#0FAFAF",
      },
    },
  },
  plugins: [],
}
