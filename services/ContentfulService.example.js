import { createClient } from '@/plugins/contentful.js'

const contentfulClient = createClient()

asyncData() [{
  return Promise.all([
    // fetch all blog posts sorted by creation date
    contentfulClient.getEntries({
      order: '-sys.createdAt',
    }),
  ])
    .then(([skills]) => {
      // return data that should be available
      // in the template
      return {
        skills: skills.items,
      }
    })
    .catch(console.error)
}
