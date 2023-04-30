module.exports = {
  content: [
    './app.vue',
    './assets/svg/*.svg',
    './components/*.vue',
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '540px',
      'md': '720px',
      'lg': '960px',
      'xl': '1140px',
      '2xl': '1320px',
    },
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'white': '#ECEAEA',
        'black': '#0c0c0d',
        'dark': '#333333',
        'primary': '#9C8E1B',
        'body-color': '#777777',
      },
      boxShadow: {
        signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)',
        one: '0px 2px 3px rgba(7, 7, 77, 0.05)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
