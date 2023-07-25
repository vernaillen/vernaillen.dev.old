import defaultTheme from 'tailwindcss/defaultTheme'
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'

const customIconSet = {
  prefix: 'custom',
  icons: {
    twitter: {
      body: '<g transform="translate(-281.5,-167.31)" id="layer1"><path fill="currentColor" d="M 283.94,167.31 670.33,683.95 281.5,1104 h 87.51 L 709.43,736.24 984.48,1104 h 297.8 L 874.15,558.3 1236.07,167.31 h -87.51 L 835.05,506.01 581.74,167.31 Z m 128.69,64.46 h 136.81 l 604.13,807.76 h -136.81 z" id="path1009" /></g>',
      width: 936,
      height: 1000
    }
  }
}

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
  plugins: [
    iconsPlugin({
      collections: {
        custom: customIconSet,
        ...getIconCollections(['mdi'])
      }
    })
  ]
}
