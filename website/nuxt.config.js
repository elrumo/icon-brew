import path from 'path'
import fs from 'fs'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'IconBrew - open source icon pack/set!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid:'description',
        name: 'description',
        content: 'Hundreds of free (as in beer) open source icons. New ones being added weekly.'
      },
      { name: 'format-detection', content: 'telephone=no' },

      // TWITTER META TAGS
      {
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        property: 'twitter:url',
        content: 'https://iconbrew.com/'
      },
      {
        property: 'twitter:creator',
        content: '@icon_brew'
      },
      {
        property: 'twitter:site',
        content: '@elrumo'
      },
      {
        property: 'twitter:title',
        content: 'IconBrew - open source icon pack!'
      },
      {
        property: 'twitter:description',
        content: 'Hundreds of free (as in beer) open source icons. New ones being added weekly.'
      },
      {
        property: 'twitter:image',
        content: 'https://api.macosicons.com/uploads/Icon_Brew_Meta_Preview_4f2c0591cf.jpg'
      },

      // FACEBOOK META TAGS
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: 'https://iconbrew.com/'
      },
      {
        property: 'og:title',
        content: 'IconBrew - open source icon pack!'
      },
      {
        property: 'og:description',
        content: 'Hundreds of free (as in beer) open source icons. New ones being added weekly.'
      },
      {
        property: 'og:image',
        content: 'https://api.macosicons.com/uploads/Icon_Brew_Meta_Preview_4f2c0591cf.jpg'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
        async: true
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true,
        async: true
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&family=IBM+Plex+Serif:wght@400;600;700&display=swap",
        async: true,
        lazyload: true

      },

    ],
    script: [
      // { src: 'https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js', defer: true }
      {
        src: 'https://plausible.io/js/plausible.js',
        defer: true,
        'data-domain': 'iconbrew.com',
      },

      {
        src: 'https://unpkg.com/external-svg-loader@1.0.0/svg-loader.min.js',
        type: 'text/javascript',
        async: true
      },

      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/canvg/3.0.7/umd.min.js',
        type: 'text/javascript',
        async: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      'primeflex/primeflex.scss',
      'assets/style.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // [{
    //   src: '@iconfu/svg-inject',
    //   ssr: false
    // }],
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/markdownit'
    ],
    // Doc: https://www.primefaces.org/primevue/showcase-v2/#/setup
    [
      'primevue/nuxt', {
        theme: 'mytheme',
        ripple: false,
        components: [
          'InputText',
          'Button',
          'DataTable',
          'Dialog',
          'Menu',
          'Listbox',
          'InputSwitch',
          'SelectButton',
          'RadioButton',
          'Dropdown',
          'Slider',
          'FileUpload',
          'Divider',
          'ColorPicker',
        ],
        directives: [
          'Tooltip',
          'Badge',
          'Toast'
        ]
      }
    ],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  pageTransition: {
    name: 'page',
    mode: 'out-in',
    appear: true
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // https://github.com/primefaces/primevue/issues/844
    transpile: ['primevue'],

    // extend: (config) => {
    //   const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

    //   svgRule.test = /\.(png|jpe?g|gif|webp)$/;

    //   config.module.rules.push({
    //     test: /\.svg$/,
    //     use: [
    //       'vue-loader',
    //       'vue-svg-loader',
    //     ],
    //   });
    // },
  },

  // server: {
  //   https: {
  //     key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
  //     cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
  //   }
  // }


}
