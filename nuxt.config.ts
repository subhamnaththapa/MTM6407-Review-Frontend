export default defineNuxtConfig({
  compatibilityDate: '2025-12-02',
  ssr: false,
  css: ['~/assets/styles/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  runtimeConfig: {
    public: {
      strapiBase: process.env.STRAPI_URL || 'http://localhost:1337'
    }
  }
})
