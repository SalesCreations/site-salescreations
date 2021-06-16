<template>
  <div id="Writing-page">
    <Header title="Writing" img="image-header-writing.png" />
    <main>
      <ais-instant-search :search-client="searchClient" index-name="blogPost">
        <section class="search-section">
          <ais-search-box
            aria-placeholder="Which article would you like to see..."
            placeholder="Which article would you like to see..."
          />
          <IconAlgolia class="mt-2 float-right" />
        </section>
        <!-- <ais-stats /> -->
        <section class="writing-section mt-10">
          <ais-hits>
            <template slot="item" slot-scope="{ item }">
              <CardPostAlgolia :post="item.fields" />
            </template>
          </ais-hits>
        </section>
        <!-- <ais-pagination /> -->
      </ais-instant-search>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import algoliasearch from 'algoliasearch/lite'

export default Vue.extend({
  name: 'WritingPage',
  data: () => ({
    searchClient: algoliasearch(`${process.env.algoliaAppId}`, `${process.env.algoliaApiKey}`),
  }),
  head() {
    return {
      title: 'Writing ideas by Sales//Creations',
      description: 'I am a Product Designer and Front-End Developer, initially I created Sales Creations in 2016.',
      meta: [
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
          content: require('@/assets/images/thumbnail-site.png'),
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'Writing ideas by Sales//Creations',
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
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/instantsearch.css@7.4.5/themes/reset-min.css',
        },
      ],
    }
  },
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
