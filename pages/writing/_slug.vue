<template>
  <div id="show-writing">
    <img :src="post.imagePost.url" :alt="post.imagePost.title" />
    <main>
      <section class="show-writing-section">
        <h1 class="text-5xl font-black py-5 text-center">{{ post.title }}</h1>
        <article v-html="$md.render(post.contents)" />
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
