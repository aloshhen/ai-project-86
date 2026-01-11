export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5E6AD2',
        secondary: '#8B95E8',
        accent: '#10B981',
        dark: '#0D0E12',
        light: '#FAFAFA'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}