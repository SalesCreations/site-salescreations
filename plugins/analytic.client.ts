import Analytics from 'analytics'
import segmentPlugin from '@analytics/segment'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const isDev = process.env.NODE_ENV === 'development';

  const analytics = Analytics({
    app: 'site-salescreations',
    debug: isDev,
    plugins: [
      segmentPlugin({
        writeKey: runtimeConfig.public.writeCodeSegment
      })
    ]
  })
})