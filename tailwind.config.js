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
        '652.51':'652.51px',
        
      },
      height: {
        '592.48':'592.48px',
        '121.09':'121.09px',
        '652.5':'652.5px',
        '278.5':'278.5px',
        '79.13':'79.13px',
      },
      colors: {
        'grey': '#e8e9ec',
        'twitblue': '#428bca',
      },
      spacing: {
        '60': '60rem',
        '100': '100rem',
        '200': '200rem',
        '125': '125rem',
        '150': '150rem',
        '120': '120rem',
        '140': '140rem',
        '75': '75rem',
        '80': '80rem',
        '85': '85rem',
        '90': '90rem',
        '50': '50rem',
        '52': '52rem',
        '51': '51rem',
      }
    },
  },
  plugins: [require("daisyui")],
}