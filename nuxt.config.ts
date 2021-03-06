import PostService from './services/PostService'
import ProjectService from './services/ProjectService'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sales//Creations - Creative Emotion',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'title',
        name: 'title',
        content: 'Sales//Creations - Creative Emotion',
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#000000',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Sales//Creations',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css', '~/node_modules/highlight.js/styles/dracula.css'],

  // Config default server.
  server: {
    port: 5000,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/instantsearch'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // https://github.com/gomah/nuxt-graphql-request
    'nuxt-graphql-request',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/markdownit-module
    '@nuxtjs/markdownit',
    // https://github.com/nuxt-community/dayjs-module
    '@nuxtjs/dayjs',
    // https://github.com/nicolasbeauvais/vue-social-sharing#readme
    'vue-social-sharing/nuxt',
    // https://github.com/nuxt-community/gtm-module
    '@nuxtjs/gtm',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
    // https://sentry.nuxtjs.org/
    '@nuxtjs/sentry',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  env: {
    ctfSpaceID: process.env.CTF_SPACE_ID,
    ctfCdaAccessToken: process.env.CTF_CDA_ACCESS_TOKEN,
    ghToken: process.env.GH_TOKEN,
    dribbbleToken: process.env.DRIBBBLE_TOKEN,
    disqusShortname: process.env.DISQUS_SHORTNAME,
    algoliaAppId: process.env.ALGOLIA_APP_ID,
    algoliaApiKey: process.env.ALGOLIA_API_KEY,
    gtmId: process.env.GTM_ID,
  },

  // Google Tag Manage module
  gtm: {
    id: process.env.GTM_ID,
    debug: false,
  },

  // Nuxt Graphql Request module
  graphql: {
    clients: {
      githubClient: {
        endpoint: 'https://api.github.com/graphql',
      },
      contentfulClient: {
        endpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.CTF_SPACE_ID}`,
      },
    },
  },

  // Markdownit module
  markdownit: {
    runtime: true,
    use: ['markdown-it-highlightjs'],
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Sales Creations',
      short_name: 'Sales Creations',
      lang: 'en',
      background_color: '#ffffff',
      theme_color: '#000000',
    },
  },

  // Nuxt Robots module: https://github.com/nuxt-community/robots-module#readme
  robots: {
    UserAgent: '*',
    Allow: ['/', '/work/', '/about/', '/experiments/', '/writing/'],
    Disallow: ['/*.gif', '/404.html', '/500.html'],
    Sitemap: ['https://salescreations.com.br/sitemap.xml', 'https://www.salescreations.com.br/sitemap.xml'],
  },

  // Nuxt Sitemap module: https://sitemap.nuxtjs.org/guide/configuration
  sitemap: {
    hostname: 'https://salescreations.com.br',
    gzip: true,
    cacheTime: 1000 * 60 * 60 * 2,
    routes: async () => {
      const posts: any = await PostService.getPosts().then((response) => {
        return response
      })
      const postMap = posts.map((post: any) => {
        return `/writing/${post.slug}`
      })
      const projects: any = await ProjectService.getProjects().then((response) => {
        return response
      })
      const projectMap = projects.map((project: any) => {
        return `/work/${project.slug}`
      })
      return [...postMap, ...projectMap]
    },
  },

  // Nuxt Sentry module: https://sentry.nuxtjs.org/sentry/options
  sentry: {
    dsn: process.env.DNS_SENTRY,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      cssModules: {
        modules: {
          localIdentName: '[hash:base64:4]',
        },
      },
    },
    transpile: ['vue-instantsearch', 'instantsearch.js/es'],
  },

  generate: {
    fallback: true,
    routes: () => {
      return PostService.getPosts().then((response) => {
        return response.map((post: any) => {
          return `/writing/${post.slug}`
        })
      })
    },
  },
}
