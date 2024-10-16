/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oldEnglishRegular:['old-english-text-mt'],
        PoppinsRegular: ['Poppins-Regular'],
        PoppinsBold:['Poppins-Bold'],
        PoppinsSemiBold:['Poppins-SemiBold'],
        customFonts: ['Poppins-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  
}