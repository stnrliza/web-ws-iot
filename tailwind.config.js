/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      backgroundImage:{
        'bg-home': "url('assets/cetak.png')",
        'bg-religion' : "url('assets/religion.png')",
        'bg-garis' : "url('assets/shape11.png')",
        'bg-iot' : "url('assets/iot.png')",

        'bg-struktur': "url('./assets/laboratory/fotobg1.png')",
        'post1' : "url('./assets/laboratory/post/fotolab1.jpg')",
        'post2' : "url('./assets/laboratory/post/fotolab2.jpg')",
      },
      colors: {
        'component-home': '#3391D1',
        'component-divisi': '#8FA9EE',
        'component-alumni': '#001E6C',
        'component-bar':'#091344',
        'component-bar-laboratory':'#1F4761',
        'bgcolor-praktikum' : '#1F4761',
        'kuning-praktikum' : '#FFC61A',
        'bgcolor-struktur' : '#FAFBED'
      },
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    fontSize:{
      xxxs: '0.6rem',
      xxs: '0.65rem',
      xs: '0.75rem',
      sm: '0.8rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem'
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
