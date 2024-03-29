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
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero': 'url("/hero.jpg")',
        'pool': 'url("/pool.jpg")',
        'dining': 'url("/dining.jpg")',
        'bar': 'url("/bar.jpg")',
        'ubicacion': 'url("/ubicacion.jpg")',
        'bedroom': 'url("/bedroom.jpg")'
      },
    },
  },
  plugins: [],
}
