<template>
  <div class="card-post py-5">
    <NuxtLink :to="`/writing/${post.slug['en-US']}`" class="link-post">
      <h3 class="post-title text-4xl font-bold leading-none mb-3 text-gray-600">
        {{ post.portugueses['en-US'] ? '🇧🇷' : '🇺🇸' }}{{ post.title['en-US'] }}
      </h3>
      <p class="post-intro text-base mb-5">
        {{ post.resume['en-US'] }}
      </p>
      <div class="post-info flex space-x-4 text-sm font-bold">
        <strong>{{ $dayjs(post.datetime['en-US']).format('MMM DD, YYYY') }}</strong>
        <strong>{{ time.text }}</strong>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { BlogPostCollectionItem } from '@/plugins/types'
const readingTime = require('reading-time')

export default Vue.extend({
  name: 'CardPost',
  props: {
    post: {
      type: Object as PropType<BlogPostCollectionItem>,
      required: true,
    },
  },
  data: () => ({
    time: null,
  }),
  created(): void {
    this.time = readingTime(this.post.contents['en-US' as any])
  },
})
</script>

<style>
.card-post h3,
.card-post p {
  transition: 0.5s;
}

.card-post:hover p {
  text-decoration: underline;
  transition: 0.5s;
}
</style>
