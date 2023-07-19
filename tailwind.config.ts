import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    './app.vue',
    './assets/svg/*.svg',
    './components/*.vue',
    './components/**/*.vue',
    './content/**/*.md',
    './layouts/**/*.vue',
    './pages/**/*.vue'
  ],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      '2xl': '1320px'
    },
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Inter', ...defaultTheme.fontFamily.serif],
        mono: ['PT Mono', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        white: '#FFFFFF',
        black: '#0c0c0d',
        dark: '#333333',
        vernaillen: {
          DEFAULT: '#9c8e1b',
          50: '#faf9f0',
          100: '#f5f3e1',
          200: '#e6e2b5',
          300: '#d6d090',
          400: '#baaf4e',
          500: '#9c8e1b',
          600: '#8c7815',
          700: '#755d0f',
          800: '#5e4509',
          900: '#452e06',
          950: '#2e1b02'
        },
        'body-color': '#777777'
      },

      typography: () => {
        return {
          DEFAULT: {
            css: {
              maxWidth: '1320px'
            }
          }
        }
      },
      boxShadow: {
        signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)',
        one: '0px 2px 3px rgba(7, 7, 77, 0.05)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
