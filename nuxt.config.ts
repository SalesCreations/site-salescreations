// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Welcome to SalesCreations'
    }
  },
  css: ['@/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-graphql-client',
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
    public: {
      dribbbleToken: process.env.DRIBBBLE_TOKEN,
      unsplashKey: process.env.UNSPLASH_KEY,
      accessTokenSb: process.env.ACCESS_TOKEN_SB,
      'graphql-client': {
        clients: {
          default: 'https://api.spacex.land/graphql',
          github: {
            host: 'https://api.github.com/graphql',
            token: {
              value: process.env.GH_TOKEN,
              type: 'Bearer',
            },
            retainToken: true,
          }
        }
      },
    }
  }
})
