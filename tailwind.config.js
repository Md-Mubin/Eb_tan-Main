/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      // font family part 
      fontFamily: {
        "inter" : ["Inter", "sans-serif"],
        "ptSerif": ["PT Serif", "serif"],
      },

      // adding different colors
      colors: {
        "brandColor" : "#E52525",
        "commonColor" : "#333333"
      }
    },

    // container part
    container: {
      center: true,
      padding: {
        DEFAULT: "10px",
        sm: "30px",
        md: "50px",
        lg: "100px",
        xl: "150px",
        "2xl" : "178px"
      }
    },
  },
  plugins: [],
}