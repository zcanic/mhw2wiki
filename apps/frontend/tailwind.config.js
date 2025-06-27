/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // MH Wilds 主题色
        primary: {
          50: '#fef7ee',
          100: '#fdedd7',
          500: '#ea580c',
          600: '#dc2626',
          700: '#b91c1c',
          900: '#7c2d12',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          900: '#0c4a6e',
        }
      },
    },
  },
  plugins: [],
}
