// https://nuxt.com/docs/api/configuration/nuxt-configconsole
export default defineNuxtConfig({
    css: [
        '@/assets/css/colors.css',
        '@/assets/css/reset.css',
        '@/assets/css/fonts.css',
        '@/assets/css/main.css',
        '@/assets/css/utility.css',
        // '@/assets/css/userActions.css',
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
            htmlAttrs: {
                lang: 'fr'
            },
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/images/logo-square.jpg',
                },
            ],
            charset: 'utf-8',
            viewport: 'width=500, initial-scale=1',
            title: 'Poullaouen',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Site de la Mairie de Poullaouen.' },
                { name: "og:description", content: 'Site de la Mairie de Poullaouen.' },
                { name: "og:site_name", content: "Mairie de Poullaouen" },
                { name: "og:type", content: "website" },
                { name: "og:image", content: "Poullaouen" },
                { name: "og:url", content: "https://mairie-poullaouen.fr" },
                { name: "google-site-verification", content: "sMTScukwNBaazph3D2m7z4y0_-M1EH8L1C1n2dYdxeQ" }
            ],
        },
        // baseURL: '/accueil/'
    }
    
})
