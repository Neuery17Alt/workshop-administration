// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
      head: {
          title: "Workshop Administration",
      },
  },

  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  modules: [
    "@pinia/nuxt",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss"
  ]
})