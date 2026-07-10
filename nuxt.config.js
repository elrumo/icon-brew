export default defineNuxtConfig({
  name: 'IconBrew',

  app: {
    head: {
      title: 'IconBrew - Open source icons for everyone',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Hundreds of open source icons for everyone, new ones being added regularly' },

        // <!--Facebook Meta Tags-->
        { property: 'og:url', content: 'https://iconbrew.com/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'IconBrew - Open source icons for everyone' },
        { property: 'og:description', content: 'Hundreds of open source icons for everyone, new ones being added regularly' },
        { property: 'og:image', content: 'https://i.imgur.com/SnjxPrN.jpg' },

        // <!--Twitter Meta Tags-->
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

  vercel: {
    functions: {
      maxDuration: 60,
    },
  },

  nitro: {
    preset: 'node-server'
  },

  css: [
    '~/assets/css/main.css',
    'vue-virtual-scroller/dist/vue-virtual-scroller.css',
  ],

  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxtjs/plausible', 'nuxt-clarity-analytics', '@nuxtjs/device'],

  plausible: {
    apiHost: 'https://stats.eliasruiz.com',
    autoOutboundTracking: true,
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['dynamic-scroller'].includes(tag)
    }
  },

  compatibilityDate: '2025-02-11',
})
