/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/content/**/*.{mdx,md}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
        backgroundImage: {
            'hero': "url('/heroimage.png')",
        }
    },
  },
  plugins: [],
}
