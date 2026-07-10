// import iconSet from '~/assets/ib-icons.json'

// console.log("iconSet: ", iconSet)

export default defineNuxtConfig({
  name: 'IconBrew',

  app: {
    head: {
      title: 'IconBrew - Open source icons for everyone',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Hundreds of open source icons for everyone, new ones being added regularly' },
        { name: 'description', content: 'Hundreds of open source icons for everyone, new ones being added regularly' },

        // <!--Facebook Meta Tags-->
        { name: 'og:url', content: 'https://iconbrew.com/' },
        { name: 'og:type', content: 'website' },
        { name: 'og:type', content: 'website' },
        { name: 'og:title', content: 'IconBrew - Open source icons for everyone' },
        { name: 'og:description', content: 'Hundreds of open source icons for everyone, new ones being added regularly' },
        { name: 'og:image', content: 'https://i.imgur.com/SnjxPrN.jpg' },

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

  // icon: {
  //   provider: 'none',
  //   customCollections: [iconSet]
  // },

  css: [
    '~/styles/main.scss',
    'vue-virtual-scroller/dist/vue-virtual-scroller.css',
  ],

  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxtjs/plausible', '@nuxtjs/tailwindcss', 'nuxt-clarity-analytics', '@nuxtjs/device'],

  plausible: {
    apiHost: 'https://stats.eliasruiz.com',
    autoOutboundTracking: true,
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['dynamic-scroller'].includes(tag)
    }
  },

  // ssr: false

  compatibilityDate: '2025-02-11',
  

  webpack: {
    loaders: {
      sass: {
        sassOptions: {
          quietDeps: true
        }
      }
    }
  },

  build: {
    transpile: [
    ],
    loaders: {
      scss: {
        sassOptions: {
            silenceDeprecations: true,
            quietDeps: true
        }
      }
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true
        }
      }
    }
  },
})