/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sfpro-regular': ['SFPro-Regular', 'sans-serif'],
        'sfpro-medium': ['SFPro-Medium', 'sans-serif'],
        'sfpro-semibold': ['SFPro-Semibold', 'sans-serif'],
        'sfpro-bold': ['SFPro-Bold', 'sans-serif'],
        'sfpro-italic': ['SFPro-Italic', 'sans-serif'],
        'sfpro-italic-semibold': ['SFPro-ItalicSemibold', 'sans-serif'],
      },
      boxShadow: {
        button: '0 2px 6px rgba(111, 116, 126, 0.161)',
      },
      fontSize: {
        sm: ['12px', '14px'],
        base: ['14px', '16px'],
        md: ['16px', '18px'],
        xl: ['17px', '20px'],
        '2xl': ['18px', '22px'],
        '3xl': ['27px', '32px'],
        '4xl': ['32px', '38px'],
      },
      colors: {
        default: '#3B4356',
        pale: '#FFF',
        neon: '#150AE9',
        danger: '#E62043',
        muted: '#BABEC3',
        'muted-2': '#787A7A',
        'muted-3': '#2F3030',
        'tab-non-active': '#8692A1',
        'input-placeholder': '#697385',
        'card-notification': '#E3E8ED',
        'card-date-time': '#6F747E',
        'card-divider': '#BEBFC3',
      },
      borderColor: {
        input: '#E3E8ED',
        button: '#BEBFC3',
      },
    },
  },
  plugins: [],
  presets: [require('nativewind/preset')],
}
