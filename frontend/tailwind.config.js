/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:
      {
        sm: "320px",
        md: "769px",
        lg: "1026px"
      },
      fontFamily: {
        
        grotesk: ['Space Grotesk', "sans-serif"],
        playfair:['Playfair Display', "sans-serif"]
        
      },
      colors:{
        bgcolor:"#c5c7c4",
       
        white:"#FFFFFF"
      
      },



    },
  },
  plugins: [],
}
