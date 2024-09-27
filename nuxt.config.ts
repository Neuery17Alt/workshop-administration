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
      "@nuxtjs/tailwindcss",
      "@nuxtjs/supabase",
      "@nuxt/eslint",
    ],
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],
    fonts: {
        defaults: {
            weights: [400],
            styles: ["normal", "italic"],
        },
        families: [{ name: "Inter", provider: "google" }],
    },
    colorMode: {
        classSuffix: "",
        preference: "system",
        fallback: "light",
    },
    supabase: {
        serviceKey: "",
        redirect: false,
    },
})