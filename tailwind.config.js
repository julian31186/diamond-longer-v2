/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '652.5':'652.5px',
        '278.5':'278.5px',
        '592.48':'592.48px',
        '121.09':'121.09px',
        
      },
      height: {
        '592.48':'592.48px',
        '121.09':'121.09px',
        '652.5':'652.5px',
        '278.5':'278.5px',
      },
      colors: {
        'grey': '#e8e9ec',
        'twitblue': '#428bca',
      },
      spacing: {
        '60': '60rem',
      }
    },
  },
  plugins: [require("daisyui")],
}