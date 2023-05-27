<template>
  <div id="Writing-page">
    <SharedHeader :title="$t('writing')" img="image-header-writing.png" />
    <main>
      <section class="writing-section mt-6">
        <ul class="last-posts divide-y divide-gray-300">
          <li v-for="post in posts" :key="post.id">
            <CardsCardPost :post="post" />
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script setup>
import { useI18n, useLocalePath } from '#imports'

// =======================
// <Head> define meta tags
// =======================

useHead({
  title: 'Writing ideas by SalesCreations',
  meta: [
    {
      name: 'description',
      content: 'I am a Product Designer and Front-End Developer, initially I created Sales Creations in 2016.'
    },
    {
      property: 'og:site_name',
      content: 'SalesCreations',
    },
    {
      property: 'og:title',
      content: 'Work done at SalesCreations',
    },
    {
      property: 'og:description',
      content: 'I am a Product Designer and Front-End Developer, initially I created Sales Creations in 2016.'
    },
    {
      property: 'og:article',
      content: "webise"
    },
    {
      property: 'og:image',
      content: "https://res.cloudinary.com/salesunited93/image/upload/v1676817900/thumbnail-site_emx94f.png"
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      property: 'twitter:image',
      content: "https://res.cloudinary.com/salesunited93/image/upload/v1676817900/thumbnail-site_emx94f.png"
    },
    {
      property: 'twitter:site',
      content: '@SalesUnited'
    },
  ]
})

// =======================
// initialization variables
// =======================

// i18n variables
const localePath = useLocalePath();
const { locale } = useI18n();
let isEnglishI18n = locale.value === 'en';

// general variables
const isDev = process.env.NODE_ENV === 'development';
const config = useRuntimeConfig();
const url = 'https://api.storyblok.com/v2/cdn/stories';

let posts = ref([]);

// =======================
// Request Storyblok API and generate 'posts'
// =======================

let pathWriting = async () => isEnglishI18n ? '[default]/writing/' : '[default]/pt-br/writing';
const options = {
  server: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
		resolve_links: 1,
    starts_with: await pathWriting(),
    version: isDev ? 'draft' : 'published',
    token: config.public.accessTokenSb,
  },
}
const { data, pending, error, refresh } = await useFetch(url, options)
posts = data.value.stories.slice(1)

</script>