<template>
  <div id="Writing-page">
    <SharedHeader title="Work" img="image-header-writing.png" />
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
      property: 'og:url',
      content: window.location.origin
    },
    {
      property: 'og:article',
      content: "webise"
    },
    {
      property: 'og:image',
      content: window.location.origin + "/thumbnail-site.png"
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      property: 'twitter:image',
      content: window.location.origin + "/thumbnail-site.png"
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

let posts = ref({})
const config = useRuntimeConfig();
const url = 'https://api.storyblok.com/v2/cdn/stories'

// =======================
// Request Storyblok API and generate 'posts'
// =======================

const options = {
  server: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
		resolve_links: 1,
    starts_with: 'writing',
    version: 'published',
    token: config.public.accessTokenSb,
  },
}
const { data, pending, error, refresh } = await useFetch(url, options)
posts = data.value.stories.slice(1)
</script>