<template>
  <div id="Writing-page">
    <Header title="Writing" img="image-header-writing.png" />
    <main>
      <section class="search-section">
        <InputSearch text="Qual artigo você gostaria de ver..." />
      </section>
      <section class="writing-section mt-6">
        <ul class="last-posts divide-y divide-gray-300">
          <li v-for="(post, key) in posts" :key="key">
            <CardPost :post="post" />
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import Vue from 'vue'

export default Vue.extend({
  name: 'WritingPage',
  async fetch({ store, error }) {
    try {
      await store.dispatch('posts/fetchPosts', 10)
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
    posts: (state: any) => state.posts.posts,
  }),
})
</script>
