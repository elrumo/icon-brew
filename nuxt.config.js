export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'IconBrew',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // { src: 'https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js', defer: true }
      {
        src: 'https://plausible.io/js/plausible.js',
        defer: true,
        'data-domain': 'iconbrew.com',
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
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://www.primefaces.org/primevue/showcase-v2/#/setup
    [
      'primevue/nuxt', {
        theme: 'mytheme',
        ripple: false,
        components: ['InputText','Button','DataTable','Dialog','Menu', 'Listbox', 'InputSwitch'],
        directives: ['Tooltip','Badge']
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

  }
}
