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
        'radial-gradient': 'radial-gradient(circle at 75% 25%, #1D428A 4%, #000 80%)',
        'radial-gradient-component': 'radial-gradient(circle at 50% -5%, #1D428A 20%, #000 40%)',
        'radial-gradient-innerComponent': 'radial-gradient(circle at 50% 100%, #1D428A 20%, #0C0C0C 90%)',
        'radial-gradient-imageBack': 'radial-gradient(circle at 50% 10%, #1D428A 10%, #0C0C0C 100%)',
        'linear-gradient': 'linear-gradient(0deg, #000000 0%, #111111 50%)',
        'text-gradient': 'linear-gradient(to right, #34D399, #3B82F6)',
        // 'profit-gradient': 'linear-gradient(to right, #34D399, #10B981)', // Green gradient
        // 'loss-gradient': 'linear-gradient(to right, #F87171, #EF4444)', // Red gradient
        'profit-gradient': 'linear-gradient(to right, #34D399, #10B981, #065F46)', // Adjusted green gradient with more contrast
        'loss-gradient': 'linear-gradient(to right, #F87171, #EF4444, #B91C1C)', // Adjusted red gradient with more contrast
      },
      fontFamily: {
        primary: ['Syne', 'sans-serif'],
        secondary: ['Inter', 'sans-serif']
      },
      colors: {
        primary: '#1e3a8a',
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      height: {
        'screen-minus-150': 'calc(100vh - 150px)',
        'screen-minus-200': 'calc(100vh - 200px)',
        'screen-minus-300': 'calc(100vh - 300px)',
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
    },
  },
  plugins: [],
}
