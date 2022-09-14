import Vue from 'vue'

import VueRichTextRenderer from '@marvr/storyblok-rich-text-vue-renderer'
import { Block } from '@marvr/storyblok-rich-text-types';

import CustomBlockCode from '~/components/resolvers/CustomBlockCode.vue';
import IframeSpotify from '~/components/shared/IframeSpotify.vue'


Vue.use(VueRichTextRenderer, {
  resolvers: {
    blocks: {
      [Block.CODE]: CustomBlockCode
    },
    components: {
      IframeSpotify,
    },
  },
})