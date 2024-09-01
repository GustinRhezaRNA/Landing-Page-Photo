/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000',
        secondary: '#FFF',
        dark: '#111',
        gray: '#707070',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero.png')",
        'subhero-pattern': "url('/src/assets/subhero.png')",
        'testi-pattern': "url('/src/assets/testimonial.png')"
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
};
