import Analytics from 'analytics'
import segmentPlugin from '@analytics/segment'

const analytics = Analytics({
  app: 'site-salescreations',
  plugins: [
    segmentPlugin({
      writeKey: `${process.env.WRITE_CODE_SEGMENT}`
    })
  ]
})

export default defineNuxtPlugin((nuxtApp) => {})