// plugins/posthog.client.ts
import posthog from 'posthog-js'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  // Security: only initialize if there's a key
  if (!config.public.posthogKey) {
    console.warn('[PostHog] Chave não configurada – analytics desativado.')
    return
  }

  // Avoid running on SSR (extra safety, although .client already handles it)
  if (process.server) return

  // Init
  posthog.init(config.public.posthogKey, {
    api_host: config.public.posthogHost,
    capture_pageview: false,              // let's handle this manually
    person_profiles: 'identified_only'
    // disable_session_recording: true,   // if you want to disable recordings
  })

  // Initial pageview
  posthog.capture('$pageview')

  // Captures pageviews on SPA navigations
  nuxtApp.hook('page:finish', () => {
    // You can add filters (e.g., exclude specific routes)
    posthog.capture('$pageview')
  })

  // Optional: load feature flags before using
  posthog.onFeatureFlags(() => {
    // ex: if (posthog.isFeatureEnabled('nova-home')) { ... }
  })

  // Inject as $posthog (accessible via useNuxtApp())
  return {
    provide: {
      posthog
    }
  }
})
