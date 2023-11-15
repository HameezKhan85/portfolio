/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FE4956',
        secondary: {
          light: '#23263A',
          dark: '#212336',
        },
      },
      padding: {
        section: '2.5rem',
      },
      margin: {
        container: '2.5rem',
      },
      fontSize: {
        xsmall: '.75rem',
        small: '.875rem',
        large: '1.125rem',
        xlarge: '1.25rem',
        txl: '1.5rem',
        thx: '1.875rem',
        fxl: '2.25rem',
        fvxl: '3rem',
        sxl: '3.75rem',
      },
    },
  },
  plugins: [],
}
