// https://nuxt.com/docs/api/configuration/nuxt-config
const isDev = process.env.NODE_ENV === 'development';

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Welcome to SalesCreations',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
    }
  },
  css: ['@/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-graphql-client',
    'nuxt-simple-sitemap',
    ['@nuxtjs/i18n', {
      langDir: 'assets/locales/',
      defaultLocale: 'en',
      locales: [
        {
          code: 'en',
          name: 'English',
          file: 'en.json',
          description: 'English',
        },
        {
          code: 'pt-br',
          name: 'Brazilian Portuguese',
          file: 'pt-br.json',
          description: 'Brazilian Portuguese',
        }
      ],
    }],
    ['@nuxtjs/robots', {
      rules: {
        UserAgent: '*',
        Disallow: ['/*.gif', '/*.pdf', '/404.html', '/500.html'],
        Allow: ['/', '/work/', '/about/', '/experiments/', '/photograph/', '/writing/']
      }
    }],
    ['@storyblok/nuxt', { 
      accessToken: process.env.ACCESS_TOKEN_SB,
      bridge: true,
      apiOptions: { region: 'eu' },
      useApiClient: true
    }],
  ],
  components: {
    global: true,
    dirs: ['~/components'],
  },
  runtimeConfig: {
    public:  {
      dribbbleToken: process.env.DRIBBBLE_TOKEN,
      unsplashKey: process.env.UNSPLASH_KEY,
      accessTokenSb: process.env.ACCESS_TOKEN_SB,
      writeCodeSegment: isDev ? process.env.WRITE_CODE_SEGMENT_SANDBOX : process.env.WRITE_CODE_SEGMENT,
      'graphql-client': {
        clients: {
          github: {
            host: 'https://api.github.com/graphql',
            token: {
              value: process.env.GH_TOKEN,
              type: 'Bearer',
            },
            retainToken: true,
          }
        }
      }
    }
  },
  sitemap: {
    hostname: 'https://salescreations.com.br',
    trailingSlash: true,
    include: [
      '/work',
      '/about',
      '/experiments',
      '/photograph',
      '/writing',
    ]
  },
  hooks: {
    'vite:extendConfig': (config, { isClient, isServer }) => {
      if (isClient)
        config.resolve.alias.vue = 'vue/dist/vue.esm-bundler.js'
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/work/',
        '/about/',
        '/experiments/',
        '/photograph/',
        '/writing/',
      ]
    }
  }
})
