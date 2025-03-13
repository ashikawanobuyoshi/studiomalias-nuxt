// filepath: nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    compatibilityDate: '2025-03-13'
  },

  devtools: { enabled: true },

  modules: [
    '@vueuse/nuxt'
  ],

  compatibilityDate: '2025-03-13'
})