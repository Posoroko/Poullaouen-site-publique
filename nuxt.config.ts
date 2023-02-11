// https://nuxt.com/docs/api/configuration/nuxt-config
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
        
    ],
    app: {
        head: {
            htmlAttrs: {
                lang: 'fr'
            },
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: 'https://img.icons8.com/ios/50/null/seed-of-life.png',
                },
            ],
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'Poullaouën',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Site de la Mairie de Poullaouën.' },
                { name: "og:description", content: 'Site de la Mairie de Poullaouën.' },
                { name: "og:site_name", content: "Mairie de Poullaouën" },
                { name: "og:type", content: "website" },
                { name: "og:image", content: "@carine_leduc" },
                { name: "og:url", content: "https://mairie-poullaouen.fr" },
            ],
        },
        // baseURL: '/accueil/'
    }
    
})
