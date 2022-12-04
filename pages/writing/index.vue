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
useHead({
  title: 'Writing ideas by SalesCreations',
})
let posts = ref({})
const config = useRuntimeConfig();
const url = 'https://api.storyblok.com/v2/cdn/stories'
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