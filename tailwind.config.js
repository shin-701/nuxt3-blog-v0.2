// tailwind.config.js
module.exports = {
  darkMode: "media",
  content: [
    // "./components/**/*.{vue,js,ts}",
    // "./layouts/**/*.vue",
    // "./pages/**/*.vue",
    // "./app.vue",
    // "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
    // "./content/**/*.{md,vue}",
  ],
  plugins: [require("@tailwindcss/typography")],
  corePlugins: {
    // preflight: false
  },
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // a: {
            //   textDecoration: "none", // 下線を消す
            //   color: "inherit", // 任意：リンクの色も親と同じに
            // },
            // h1: {
            //   marginTop: '3rem',
            //   marginBottom: '0.5rem',
            //   paddingBottom: '0.5rem',
            //   position: 'relative',
            //   borderBottom: '1px solid #d6e3ed'
            // },
            // h2: {
            //   marginTop: '1.75rem',
            //   marginBottom: '0.5rem',
            //   textDecoration: 'underline',
            // },
            // h3: {
            //   marginTop: '1.5rem',
            //   marginBottom: '0.5rem',
            //   textDecoration: 'underline',
            // },
          },
        },
      },
      colors: {
        primary: {
          DEFAULT: "#6941C6",
          50: "#F9F5FF",
          100: "#F4EBFF",
          200: "#E9D7FE",
          300: "#D6BBFB",
          400: "#B692F6",
          500: "#9E77ED",
          600: "#7F56D9",
          700: "#6941C6",
          800: "#53389E",
          900: "#42307D",
          950: "#2A1F51",
        },
        dark: {
          DEFAULT: "#090D1F",
          50: "#F8F9FC",
          100: "#EAECF5",
          200: "#D5D9EB",
          300: "#B3B8DB",
          400: "#717BBC",
          500: "#4E5BA6",
          600: "#3E4784",
          700: "#363F72",
          800: "#293056",
          900: "#101323",
          950: "#090D1F",
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', "sans-serif"],
        display: ['"Zen Kaku Gothic New"', "sans-serif"],
      },
    },
  },
};
