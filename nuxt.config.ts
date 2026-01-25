// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/eslint", "@nuxt/icon", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "monokai",
            dark: "github-dark",
          },
        },
      },
    },
  },
  // shadcn/ui のコンポーネントを正しく動作させるための設定
  components: [
    {
      path: '~/components',
      // pathPrefix: false - コンポーネント名にディレクトリパスを含めない
      // 例: <UiButton> ではなく <Button> として使用できるようになる
      pathPrefix: false,
      // shadcn/ui の index.ts ファイル（再エクスポート用）を自動登録から除外
      // これらのファイルは個別のコンポーネントではなく、エクスポート用のファイルのため
      ignore: ['**/ui/**/index.ts']
    }
  ],
});
