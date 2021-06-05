module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'red': '#f54f4f',
      'red-light': '#fac0c0',
      'pink': '#f670bb',
      'purple': '#cdaef8',
      'disabled': '#e5e7eb',
      "black" : '#000000'
  },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}