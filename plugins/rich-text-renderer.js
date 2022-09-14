import Vue from 'vue'
import VueRichTextRenderer from '@marvr/storyblok-rich-text-vue-renderer'
import IframeSpotify from '~/components/shared/IframeSpotify.vue'

Vue.use(VueRichTextRenderer, {
  resolvers: {
    components: {
      IframeSpotify,
    },
  },
})