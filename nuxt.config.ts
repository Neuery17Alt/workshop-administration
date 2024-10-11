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
        "@nuxt/fonts",
        "@nuxtjs/i18n",
        "@nuxtjs/supabase",
        "@nuxt/eslint",
        "@nuxt/ui",
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
        families: [{name: "Inter", provider: "google"}],
    },
    supabase: {
        serviceKey: "",
        redirect: false,
    },
    postcss: {
        plugins: {
            "postcss-import": {},
            "tailwindcss/nesting": {},
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    colorMode: {
        preference: 'system',
        fallback: 'light',
    },

    eslint: {},
})