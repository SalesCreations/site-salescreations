<template>
  <div class="card-post py-5">
    <NuxtLink :to="`/${post.full_slug}`" class="link-post">
      <h3 class="post-title text-4xl font-bold leading-none mb-3 text-gray-600">
        {{ post.portugueses ? '🇧🇷' : '🇺🇸' }}{{ post.content.title }}
      </h3>
      <p class="post-intro text-base mb-5">
        {{ post.content.intro }}
      </p>
      <div class="post-info flex space-x-4 text-sm font-bold">
        <strong>{{ $dayjs(post.created_at).format('MMM DD, YYYY') }}</strong>
        <strong>{{ time.text }}</strong>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { BlogPostCollectionItem } from '@/plugins/types'
import { isEditMode } from '@/plugins/helper'
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
    time: 0,
  }),
  mounted() {
    isEditMode(this)
  },
  created() {
    this.time = readingTime(this.post.content.longText)
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
