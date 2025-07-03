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
        // MH Wilds 主品牌色
        primary: {
          50: '#fef7ee',
          100: '#fdedd7',
          200: '#fbd5ae',
          300: '#f8b478',
          400: '#f58b42',
          500: '#f97316',   // 橙色主色
          600: '#ea580c',   // 橙色深色
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        // 功能色彩
        monster: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#dc2626',   // 红色 - 怪物
          600: '#b91c1c',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#6b1d1d',
        },
        weapon: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#2563eb',   // 蓝色 - 武器
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#172554',
        },
        item: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#16a34a',   // 绿色 - 物品
          600: '#15803d',
          700: '#166534',
          800: '#14532d',
          900: '#0f3b26',
        },
        // 扩展灰阶系统
        gray: {
          25: '#fcfcfd',
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'bounce-gentle': 'bounce 1s ease-in-out 2',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'strong': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
