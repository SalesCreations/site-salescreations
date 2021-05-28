<template>
  <div id="Writing-page">
    <Header title="Writing" img="image-header-writing.png" />
    <main>
      <ais-instant-search :search-client="searchClient" index-name="blogPost">
        <section class="search-section">
          <ais-search-box />
          <IconAlgolia class="mt-2 float-right" />
        </section>
        <!-- <ais-stats /> -->
        <section class="writing-section mt-10">
          <ais-hits>
            <template slot="item" slot-scope="{ item }">
              <CardPostAlgolia :post="item.fields" />
            </template>
          </ais-hits>
          <ButtonLoadPage v-if="posts > 100" />
        </section>
        <!-- <ais-pagination /> -->
      </ais-instant-search>
    </main>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import Vue from 'vue'
import algoliasearch from 'algoliasearch/lite'

export default Vue.extend({
  name: 'WritingPage',
  data: () => ({
    searchClient: algoliasearch(`${process.env.algoliaAppId}`, `${process.env.algoliaApiKey}`),
  }),
  async fetch({ store, error }) {
    try {
      await store.dispatch('posts/fetchPosts', null)
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

<style>
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
.ais-SearchBox button.ais-SearchBox-submit {
  @apply ml-4;
}
.ais-SearchBox button.ais-SearchBox-reset {
  @apply absolute;
  top: 13px;
  right: 13px;
}
</style>
