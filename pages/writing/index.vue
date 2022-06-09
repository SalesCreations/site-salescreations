<template>
  <div id="Writing-page">
    <Header title="Writing" img="image-header-writing.png" />
    <main>
      <section class="writing-section mt-6">
        <ul class="last-posts divide-y divide-gray-300">
          <li v-for="post in posts" :key="post.id">
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
import Header from '@/components/shared/Header.vue'
import CardPost from '@/components/cards/CardPost.vue'

export default Vue.extend({
  name: 'WritingPage',
  components: {
    Header,
    CardPost,
  },
  async fetch({ store, error, route, isDev, query }) {
    try {
      await store.dispatch('posts/fetchPosts', { path: route.path, isDev, query })
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
        {
          hid: 'description',
          name: 'description',
          content: 'I am a Product Designer and Front-End Developer, initially I created Sales Creations in 2016.',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Writing ideas by Sales//Creations',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'I am a Product Designer and Front-End Developer, initially I created Sales Creations in 2016.',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `${window.location.origin + require('@/assets/images/thumbnail-site.png')}`,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'Sales//Creations co-creation solutions',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Writing ideas by Sales//Creations',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'I am a Product Designer and Front-End Developer, initially I created Sales Creations in 2016.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${window.location.origin + require('@/assets/images/thumbnail-site.png')}`,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: `${window.location.origin + require('@/assets/images/thumbnail-site.png')}`,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Sales//Creations co-creation solutions',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/instantsearch.css@7.4.5/themes/reset-min.css',
        },
      ],
    }
  },
  computed: mapState({
    posts: (state: any) => state.posts.posts,
  }),
})
</script>

<style lang="postcss">
.ais-SearchBox form {
  @apply border-black;
  @apply border-2;
  @apply pr-1;
  @apply w-full;
  @apply rounded-lg;
  @apply flex;
  @apply flex-row-reverse;
}
.ais-SearchBox input {
  @apply w-full;
  @apply h-full;
  @apply py-3;
  @apply pl-2;
}
.ais-SearchBox input:focus {
  outline: none;
}
.ais-SearchBox button.ais-SearchBox-submit {
  @apply ml-4;
}
.ais-SearchBox button.ais-SearchBox-reset {
  @apply absolute;
  top: 13px;
  right: 13px;
}
li.ais-Hits-item {
  @apply border-b;
  @apply border-gray-300;
}
li.ais-Hits-item:last-child {
  @apply border-b-0;
}
</style>
