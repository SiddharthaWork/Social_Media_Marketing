/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xs': '320px',         // Custom breakpoint for 320px
        'sm-375': '375px',     // Custom breakpoint for 375px
        'tab': '768px',        // Custom breakpoint for tablet (425px or more)
        'laptop': '1024px',    // Custom breakpoint for 1024px (laptop)
        'big': '2560px',       // Custom breakpoint for large screens
        'user': '1440px',      // Custom breakpoint for user screens
        'verysmall': '320px',  // Custom breakpoint for very small screens (320px)
        'small': '425px',      // Custom breakpoint for 425px
        'small2': '375px',      // Custom breakpoint for 425px
      },
    },
  },
  plugins: [],
};
