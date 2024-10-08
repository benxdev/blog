/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        bodytextcolor: "#7b7168",
        lighttextcolor: "#d9d9d9",
        orangetextcolor: "#ff914d",
        blackcolor: "#000000",
        white: "#ffffff",
        bgcolor: "#6e6d6c"
      },
      fontSize: {
        "14": ".875rem",
        "16": "1rem",
        "18": "1.125rem",
        "20": "1.25rem",
        "24": "1.5rem",
        "30": "1.875rem",
        "40": "2.5rem",
        "60": "3.75rem"
      },
      fontFamily:  {
        montsy: ["Montserrat", "sans-serif"],
        rubik: ["Rubik Dirt", "cursive"],
      },
      backgroundImage: {
        "bgimage": "url('/images/main-img.jpg')"
      },
    
    },
  },
  plugins: [],
}

