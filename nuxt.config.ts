// https://nuxt.com/docs/api/configuration/nuxt-configconsole
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            titleSeparator: '|',
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://mairie-poullaouen.fr',
            siteName: 'Mairie de Poullaouen',
            siteDescription: 'Site officiel de la mairie de Pouallaouen',
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
            titleTemplate: '%pageTitle %titleSeparator %siteName'
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
