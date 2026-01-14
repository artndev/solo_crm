/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        "sfpro-regular": ['SFPro-Regular', 'sans-serif'],
        "sfpro-medium": ['SFPro-Medium', 'sans-serif'],
        "sfpro-bold": ['SFPro-Bold', 'sans-serif'],
        "sfpro-italic": ['SFPro-Italic', 'sans-serif'],
        "sfpro-italic-semibold": ['SFPro-ItalicSemiBold', 'sans-serif'],
      },
      boxShadow: {
        'button': '0 2px 6px rgba(111, 116, 126, 0.161)',
      },
    }
  },
  plugins: [],
  presets: [require('nativewind/preset')],
}
