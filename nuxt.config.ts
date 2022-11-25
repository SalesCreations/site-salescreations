// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-graphql-client',
  ],
  components: {
    dirs: [
      '~/components',
    ]
  },
  runtimeConfig: {
    public: {
      dribbbleToken: process.env.DRIBBBLE_TOKEN,
      unsplashKey: process.env.UNSPLASH_KEY,
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
      }
    }
  }
})
