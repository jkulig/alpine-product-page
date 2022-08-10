module.exports = {
  content: ['./index.html', './src/**/*.{html,js}'],
  theme: {
    colors: {
      'white': 'white',
      'transparent': 'rgba(0, 0, 0, 0)',
      'overlay': 'rgba(0, 0, 0, .75)',
      'active-overlay': 'rgba(254, 237, 224, .75)',
      'error': 'rgb(250, 46, 69)',
      'orange-200': 'hsl(26, 100%, 55%)',
      'orange-250': 'hsl(26, 100%, 75%)',
      'orange-600': 'hsl(25, 100%, 94%)',
      'gray-100': 'hsl(220, 13%, 13%)',
      'gray-150': 'rgb(231, 231, 234)',
      'gray-200': 'hsl(219, 9%, 45%)',
      'gray-400': 'hsl(220, 14%, 75%)',
      'gray-600': 'hsl(223, 64%, 98%)',

    },
    fontFamily: {
      sans: ['Kumbh Sans']
    },
    boxShadow: {
      glow: '0 20px 40px 0px rgb(251 125 25 / 35%)',
      large: '0 15px 30px 0px rgb(0 0 0 / 15%)'
    },
    extend: {
      outline: {
        orange: '2px solid hsl(26, 100%, 55%)'
      },
      translate: {
        '100': '100%',
        '200': '200%',
        '300': '300%',
      }
    }
  },
  plugins: [],
}
