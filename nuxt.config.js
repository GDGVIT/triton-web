import { sortRoutes } from '@nuxt/utils'
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Triton',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "DSC VIT's pastebin and URL shortener",
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [{ src: '~/node_modules/highlight.js/styles/dracula.css', lang: 'css' }],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/clipboard.js',
    { src: '~/plugins/simple-analytics.js', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      'nuxt-highlightjs',
      {
        style: 'dracula',
      },
    ],
    '@nuxtjs/markdownit',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://api.dscv.it/api',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  pwa: {
    manifest: {
      name: 'DSCVIT',
      lang: 'en',
      description: "DSCVIT's pastebin and URL shortener",
    },
  },

  loading: {
    color: '#ff9800',
    height: '5px',
  },

  router: {
    // middleware: 'reset',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'paste-md',
        path: '/:paste(.*)',
        component: resolve(__dirname, 'pages/paste.vue'),
      })
      sortRoutes(routes)
    },
  },

  render: {
    fallback: false,
  },

  generate: {
    fallback: '404.html',
  },

  markdownit: {
    preset: 'default',
    html: true,
    injected: true,
    linkify: true,
    breaks: false,
    typographer: true,
    use: [
      'markdown-it-div',
      'markdown-it-highlightjs',
      'markdown-it-emoji',
      [
        'markdown-it-anchor',
        {
          permalink: true,
          permalinkSymbol: '🔗',
        },
      ],
    ],
  },
}
