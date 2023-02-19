<template>
  <div id="work-page">
    <SharedHeader title="Work" img="image-header-work.png" />
    <main>
      <section class="description-section">
        <p>
          Here you will find some projects I've done throughout my professional career, from
          <strong>UX research</strong> projects, <strong>UI design</strong> projects aimed at interfaces and even
          <strong>motion design</strong> aimed at product advertisements. I believe we can use design as a gateway to translating
          problems into humanistic and empowering opportunities.
        </p>
      </section>
      <section class="projects-section">
        <h2 class="text-5xl font-black py-5">Projects</h2>
        <div class="last-projects">
          <CardsCardProject v-for="(project, key) in projects" :key="`project--${key}`" :project="project" />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// =======================
// <Head> define meta tags
// =======================

useHead({
  title: 'Work done at SalesCreations',
  meta: [
    {
      name: 'description',
      content: 'Here you will find some projects I`ve done throughout my professional career, from UX research projects, UI design projects aimed at interfaces and even motion design aimed at product advertisements'
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
      content: 'Here you will find some projects I`ve done throughout my professional career, from UX research projects, UI design projects aimed at interfaces and even motion design aimed at product advertisements'
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

let projects = ref({})
const config = useRuntimeConfig();
const url = 'https://api.storyblok.com/v2/cdn/stories'

// =======================
// Request Storyblok API and generate 'projects'
// =======================

const options = {
  server: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
		resolve_links: 1,
    starts_with: 'work',
    version: 'published',
    token: config.public.accessTokenSb,
  },
}
const { data, pending, error, refresh } = await useFetch(url, options)
projects = data.value.stories.slice(1)
</script>