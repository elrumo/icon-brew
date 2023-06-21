export default defineNuxtConfig({
  app: {
    head: {
      title: 'IconBrew - Open source icons for everyone',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Hundreds of open source icons for everyone, new ones being added regularly' },
        { name: 'description', content: 'Hundreds of open source icons for everyone, new ones being added regularly' },

        // <!--Facebook Meta Tags-- >
        { name: 'og:url', content: 'https://iconbrew.com/' },
        { name: 'og:type', content: 'website' },
        { name: 'og:type', content: 'website' },
        { name: 'og:title', content: 'IconBrew - Open source icons for everyone' },
        { name: 'og:description', content: 'Hundreds of open source icons for everyone, new ones being added regularly' },
        { name: 'og:image', content: 'https://i.imgur.com/SnjxPrN.jpg' },

        // <!--Twitter Meta Tags-- >
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@elrumo' },
        { name: 'twitter:creator', content: '@elrumo' },
        { name: 'twitter:domain', content: 'iconbrew.com' },
        { name: 'twitter:url', content: 'https://iconbrew.com/' },
        { name: 'twitter:title', content: 'IconBrew - Open source icons for everyone' },
        { name: 'twitter:description', content: 'Hundreds of open source icons for everyone, new ones being added regularly' },
        { name: 'twitter:image', content: 'https://i.imgur.com/SnjxPrN.jpg' },
      ],
      script: [
        { src: 'https://plausible.io/js/script.js', defer: true, 'data-domain': 'iconbrew.com' },
      ]
    }
  },
  css: [
    // 'primevue/resources/themes/saga-blue/theme.css',
    'assets/style/theme.css',
    'assets/style/utilities.scss',
    'assets/style/iconBrewIcons.scss',
    'assets/style/style.scss',

    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css',
  ],
  modules: [
    '@pinia/nuxt',
  ],
  build: {
    transpile: ['primevue']
  },

  runtimeConfig: {
    public: {
      PARSE_APP_ID: process.env.PARSE_APP_ID,
      PARSE_KEY: process.env.PARSE_KEY,
      PARSE_SERVER_URL: process.env.PARSE_SERVER_URL,
      PARSE_APP_ID: process.env.PARSE_APP_ID,
      ALGOLIA_INDEX: process.env.ALGOLIA_INDEX,
      ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
      ALGOLIA_SEARCH_KEY: process.env.ALGOLIA_SEARCH_KEY,
    }
  }
  // ssr: false
})