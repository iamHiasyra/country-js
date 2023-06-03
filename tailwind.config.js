
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'custom-blue-01' : 'hsl(209, 23%, 22%)',  // dark-mode element
        'custom-blue-02' : 'hsl(207, 26%, 17%)', // dark-mode background
        'custom-blue-03' : 'hsl(200, 15%, 8%)', // light-mode text
        'custom-gray-01' : 'hsl(0, 0%, 52%)',  // light-mode input
        'custom-gray-02' : 'hsl(0, 0%, 98%)', // light-mode-background
        'custom-white' : 'hsl(0, 0%, 100%)', // dark-mode-text, light-mode-element
      },
      fontFamily : {
        'Nunito': ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

