/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow: {
        'light': '0 8px 16px rgba(0, 0, 0, 0.05)',
      }
    }
  },
  plugins: []
};