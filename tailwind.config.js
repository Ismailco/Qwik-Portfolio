/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'button-grad': 'linear-gradient(to right, #ff5757 0%, #8c52ff 100%)',
      },
    },
  },
  plugins: [],
};
