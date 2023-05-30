// https://nuxt.com/docs/api/configuration/nuxt-configconsole
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            titleSeparator: '|',
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://mairie-poullaouen.fr',
            siteName: 'Site Officiel de la Mairie de Poullaouen, petite commune dynamique du Centre-Bretagne, dans le Finistère.',
            siteDescription: 'Bienvenu sur le site officiel de la mairie de Poullaouen, petite commune dynamique du Finistère.  Tenez-vous informé des actualités, des événements et des services de la commune.',
            language: 'fr-FR',
        }
    },
    css: [
        '@/assets/css/colors.css',
        '@/assets/css/reset.css',
        '@/assets/css/fonts.css',
        '@/assets/css/main.css',
        '@/assets/css/utility.css'
    ],
    ssr: true,

    modules: [
        "nuxt-directus"
    ],
    extends: [
        'nuxt-seo-kit'
    ],
    directus: {
        url: "https://admin.mairie-poullaouen.fr"
    },
    app: {
        head: {
            titleTemplate: '%pageTitle %titleSeparator %siteName',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'msapplication-TileColor', content: '#ffffff' },
                { name: 'msapplication-TileImage', content: '/images/logo-Poullaouen-192x192.png' },
                { hid: 'description', name: 'description', content: '%siteDescription' },
                { hid: 'og:site_name', property: 'og:site_name', content: '%siteName' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:title', property: 'og:title', content: '%siteName' },
                { hid: 'og:description', property: 'og:description', content: '%siteDescription' },
                { hid: 'og:image', property: 'og:image', content: '%siteUrl/og-image.png' },
                { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
                { hid: 'og:image:height', property: 'og:image:height', content: '630' },
            ]
        }
    },
    routeRules: {
        '/accueil_poullaouen': { redirect: '/' },
        '/accueil_poullaouen/vie_municipale/les_salles_municipales': { redirect: '/ma-mairie/les-salles-municipales' },
        '/mobile_poullaouen/actualites': { redirect: '/actualites' },
        '/mobile_poullaouen/actualites/241_7301/projet_de_charte_de_la_commune_nouvelle_entre_poullaouen_et_locmaria_berrien': { redirect: '/' },
        'accueil_poullaouen/pied_de_page/mentions_legales': { redirect: '/mentions-legales' },
    },
})
