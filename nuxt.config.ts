// filepath: nuxt.config.ts
export default defineNuxtConfig({
  nitro: {
    compatibilityDate: '2025-03-08'
  },
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt'
  ]
})