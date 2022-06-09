import PostService from './services/PostService'
import ProjectService from './services/ProjectService'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: false,
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Welcome to Sales//Creations',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'I am a Product Designer and Front-End Developer, initially I created Sales Creations in 2016.',
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
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Sales//Creations',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Welcome to Sales//Creations',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'I am a Product Designer and Front-End Developer, initially I created Sales Creations in 2016.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `${'https://salescreations-staging.netlify.app/' + 'thumbnail-site.png'}`,
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Welcome to Sales//Creations',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Welcome to Sales//Creations',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'I am a Product Designer and Front-End Developer, initially I created Sales Creations in 2016.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${'https://salescreations-staging.netlify.app/' + 'thumbnail-site.png'}`,
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: `${'https://salescreations-staging.netlify.app/' + 'thumbnail-site.png'}`,
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Welcome to Sales//Creations',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css', '~/node_modules/highlight.js/styles/dark.css'],

  // Config default server.
  server: {
    port: 3000,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/instantsearch', '~/plugins/components'],

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
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.ACCESS_TOKEN_SB,
        cacheProvider: 'memory',
      },
    ],
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
    tokenStoryblok: process.env.ACCESS_TOKEN_SB,
    unsplashKey: process.env.UNSPLASH_KEY,
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
    Disallow: ['/*.gif', '/*.pdf', '/404.html', '/500.html'],
    Sitemap: ['https://salescreations.com.br/sitemap.xml', 'https://www.salescreations.com.br/sitemap.xml'],
  },

  // Nuxt Sitemap module: https://sitemap.nuxtjs.org/guide/configuration
  sitemap: {
    hostname: 'https://salescreations.com.br',
    gzip: true,
    cacheTime: 1000 * 60 * 60 * 2,
    routes: async () => {
      const posts: any = await PostService.getPostsRoutes({
        path: '/writing',
        isDev: process.env.NODE_ENV !== 'production',
      }).then((response) => {
        return response.data.stories.slice(1)
      })
      const postMap = posts.map((post: any) => {
        return `/writing/${post.slug}`
      })
      const projects: any = await ProjectService.getProjectsRoutes({
        path: '/work',
        isDev: process.env.NODE_ENV !== 'production',
      }).then((response) => {
        return response.data.stories.slice(1)
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
    routes: async () => {
      const posts: any = await PostService.getPostsRoutes({
        path: '/writing',
        isDev: process.env.NODE_ENV !== 'production',
      }).then((response) => {
        return response.data.stories.slice(1)
      })
      const postMap = posts.map((post: any) => {
        return `/writing/${post.slug}`
      })
      const projects: any = await ProjectService.getProjectsRoutes({
        path: '/work',
        isDev: process.env.NODE_ENV !== 'production',
      }).then((response) => {
        return response.data.stories.slice(1)
      })
      const projectMap = projects.map((project: any) => {
        return `/work/${project.slug}`
      })
      return [...postMap, ...projectMap]
    },
  },
}
