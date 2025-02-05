/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        avocado: {
          100: "#7a1d1d",
          500: "green",
          900: "#5a0e0e",
        },
        secondary: "#7630a1",
      },
    },
  },

  plugins: [],
};
