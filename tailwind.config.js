/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'bgPattern' : "url('/grid7.png')",
        'gradient-semiradial': 'radial-gradient(at 0% 90%, var(--tw-gradient-stops), transparent 140%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        primary: ['Syne', 'sans-serif'],
        secondary: ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}
