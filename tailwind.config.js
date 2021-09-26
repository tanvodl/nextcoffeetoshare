module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
     extend: {
     },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-font-inter')]
}

module.exports = {
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    // colors: {
    //   gray: color.coolGray,
    //   blue: color.lightBlue,
    //   red: color.rose,
    //   pink: color.fuchsia,
    // },
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
      
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}

module.exports = {
  variants: {
    fill: [],
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  },
}

module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-children'),
  ],
}
module.exports = {
  prefix: 'tw-',
}

module.exports = {
  important: true,
}

module.exports = {
  important: '#app',
}

module.exports = {
  separator: '_',
}

const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      //indigo: colors.indigo,
      //red: colors.rose,
      yellow: colors.yellow,
      pink: colors.pink,
      rose: colors.rose,
      teal: colors.teal,
      orange: colors.orange,
      amber: colors.amber,
      black: {
        DEFAULT: '#212123',
      },
      white: colors.white,
      gray: {
        DEFAULT: '#616063',
      },
      brown: {
        DEFAULT: '#a0583c',
        lighter: '#c08267',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}