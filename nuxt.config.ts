// https://nuxt.com/docs/api/configuration/nuxt-configconsole
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            titleSeparator: '|',
            siteUrl: 'https://mairie-poullaouen.fr',
            siteName: 'Site officiel de la mairie de Poullaouen, petite commune dynamique du Finistère.',
            siteDescription: 'Bienvenue sur le site officiel de la mairie de Poullaouen, petite commune dynamique du Finistère.  Tenez-vous informé des actualités, des événements et des services de la commune.',
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
    directus: {
        url: "https://admin.mairie-poullaouen.fr"
    },
    app: {
        head: {
            titleTemplate: '%pageTitle %titleSeparator %siteName',
            meta: [
                { name: 'google-site-verification', content: 'sMTScukwNBaazph3D2m7z4y0_-M1EH8L1C1n2dYdxeQ'},
                { charset: 'utf-8' },
                { hid: 'description', name: 'description', content: '%siteDescription' },
                { hid: 'og:site_name', property: 'og:site_name', content: '%siteName' },    
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:title', property: 'og:title', content: '%siteName' },
                { hid: 'og:description', property: 'og:description', content: '%siteDescription' },
                { hid: 'og:image', property: 'og:image', content: 'https://mairie-poullaouen.fr/images/Poullaouen-og-image.png' },
                { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
                { hid: 'og:image:height', property: 'og:image:height', content: '630' },
                { hid: 'og:image:alt', property: 'og:image:alt', content: '%siteName' },
                { hid: 'twitter:title', name: 'twitter:title', content: '%siteName' },
                { hid: 'twitter:description', name: 'twitter:description', content: '%siteDescription' },
                { hid: 'twitter:image', name: 'twitter:image', content: '/images/logo-Poullaouen-512x512.png' },
                { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: '%siteName' },
            ],
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon/favicon-32x32.png', },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png', },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png', },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png', },
                { rel: "manifest", href: "/favicon/site.webmanifest" },
                { rel: "shortcut icon", href: "/favicon/favicon.ico" }
            ],
        }
    },

    routeRules: {
        '/accueil_poullaouen': { redirect: '/' },
        '/accueil_poullaouen/vie_municipale/les_salles_municipales': { redirect: '/ma-mairie/les-salles-municipales' },
        '/mobile_poullaouen/actualites': { redirect: '/actualites' },
        '/mobile_poullaouen/actualites/241_7301/projet_de_charte_de_la_commune_nouvelle_entre_poullaouen_et_locmaria_berrien': { redirect: '/' },
        '/accueil_poullaouen/pied_de_page/mentions_legales': { redirect: '/mentions-legales' },
    },
})
