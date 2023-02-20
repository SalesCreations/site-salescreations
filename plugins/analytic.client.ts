import Analytics from 'analytics'
import segmentPlugin from '@analytics/segment'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();

  const analytics = Analytics({
    app: 'site-salescreations',
    debug: process.env.NODE_ENV === 'development',
    plugins: [
      segmentPlugin({
        writeKey: runtimeConfig.public.writeCodeSegment
      })
    ]
  })
})