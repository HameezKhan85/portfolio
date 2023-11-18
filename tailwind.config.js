/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FE4956',
        secondary: {
          light: '#2B2D41',
          medium: '#23263A',
          dark: '#1e2031',  
        },
      },
      padding: {
        section: '3rem',
      },
      margin: {
        container: '3rem',
      },
    },
  },
  plugins: [],
}
