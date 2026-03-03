export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'github_pages'
  },
  app: {
    baseURL: '/Nuxt-test/'
  }
})