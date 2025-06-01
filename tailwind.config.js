/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#6D28D9',
          600: '#5B21B6',
        },
        secondary: {
          500: '#6B7280',
        },
        error: {
          500: '#EF4444',
        },
        background: {
          default: '#F9FAFB',
          paper: '#FFFFFF',
        },
        text: {
          primary: '#111827',
          secondary: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        h1: ['1.5rem', { lineHeight: '2rem', fontWeight: '700' }],
        body: ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        label: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500' }],
        link: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }],
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.5rem',
      },
      boxShadow: {
        sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
