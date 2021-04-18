<template>
  <div id="show-writing">
    <header class="header grid gap-4 grid-cols-10 py-10">
      <div class="col-span-10 flex flex-wrap content-center">
        <h1 class="text-5xl font-black mb-8">{{ post.title }}</h1>
        <div class="image-post" :style="`background-image: url('${post.imagePost.url}')`" />
        <p class="mt-10"><strong>published:</strong> {{ $dayjs(post.datetime).format('YYYY/MM/DD') }}</p>
      </div>
    </header>
    <main>
      <section class="show-writing-section">
        <article id="writing-content" v-html="$md.render(post.contents)" />
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import Vue from 'vue'

export default Vue.extend({
  name: 'ShowWriting',
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('posts/fetchPost', params.slug)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time, please try again',
      })
    }
  },
  head() {
    return {
      title: 'Writing ideas by Sales//Creations',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
  computed: mapState({
    post: (state: any) => state.posts.post,
  }),
})
</script>

<style>
.image-post {
  width: 895.875px;
  height: 268.031px;
  background-color: gainsboro;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: 1s appear;
  margin: auto;
  aspect-ratio: attr(width) / attr(height);
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
#writing-content p,
#writing-content ul {
  @apply font-serif;
  @apply text-lg;
  @apply text-gray-800;
  @apply tracking-wide;
  @apply mb-5;
}
#writing-content pre {
  @apply mb-5;
}
#writing-content pre code {
  @apply rounded;
}
#writing-content a {
  @apply text-blue-600;
  @apply underline;
}
#writing-content ul {
  @apply list-disc;
  @apply list-inside;
  @apply pl-10;
  @apply my-10;
}
#writing-content ul li {
  @apply mb-3;
}
</style>
