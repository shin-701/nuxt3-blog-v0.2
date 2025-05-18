// tailwind.config.js
module.exports = {
  darkMode: 'media',
  content: [
    // "./components/**/*.{vue,js,ts}",
    // "./layouts/**/*.vue",
    // "./pages/**/*.vue",
    // "./app.vue",
    // "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",

  ],
  plugins: [require('@tailwindcss/typography')],
  corePlugins: {
    // preflight: false
  },
  theme: {
      extend: {
        typography: {
          DEFAULT: {
            css: {
              a: {
                textDecoration: 'none',       // 下線を消す
                color: 'inherit',             // 任意：リンクの色も親と同じに
              },
            },
          },
        },
      },
    }
}