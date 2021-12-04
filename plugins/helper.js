export function isEditMode(app, nameContent, dispatchLocal) {
  app.$storybridge(
    () => {
      // eslint-disable-next-line no-undef
      const storyblokInstance = new StoryblokBridge()

      // Listen to Storyblok's Visual Editor event
      storyblokInstance.on(['input', 'published', 'change'], (event) => {
        // eslint-disable-next-line eqeqeq
        if (event.action == 'input') {
          // eslint-disable-next-line eqeqeq
          if (event.story.id == app[nameContent].id) {
            // app.post.content = event.story.content
            app.$store.dispatch(dispatchLocal, event.story)
          }
        } else {
          app.$nuxt.$router.go({
            path: app.$nuxt.$router.currentRoute,
            force: true,
          })
        }
      })
    },
    (error) => {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  )
}
