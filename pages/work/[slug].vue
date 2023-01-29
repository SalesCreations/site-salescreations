<template>
  <div id="show-project">
    <header class="header grid gap-4 grid-cols-10 py-10">
      <div class="col-span-10 flex flex-col flex-wrap content-center">
        <h1 class="text-4xl md:text-5xl font-black mb-2">{{ project.content.title }}</h1>
        <img class="image-project" :src="project.content.cover.filename" alt="XXX" width="895.875" height="318.719" />
        <div class="infos-project mt-10 py-6 border-t border-b grid grid-flow-row grid-cols-2 sm:grid-cols-5 grid-rows-1 gap-3">
          <div class="company-info">
            <h6 class="font-serif font-bold text-base">Company</h6>
            <p class="font-serif text-sm text-gray-500">{{ project.content.company }}</p>
          </div>
          <div class="team-info">
            <h6 class="font-serif font-bold text-base">Team</h6>
            <ul class="font-serif text-sm text-gray-500">
              <component :is="blok.component" v-for="blok in project.content.team" :key="blok._uid" :blok="blok" />
            </ul>
          </div>
          <div class="tools-info">
            <h6 class="font-serif font-bold text-base">Tools</h6>
            <ul class="font-serif text-sm text-gray-500">
              <component :is="blok.component" v-for="blok in project.content.tool" :key="blok._uid" :blok="blok" />
            </ul>
          </div>
          <div class="roles-info">
            <h6 class="font-serif font-bold text-base">Roles</h6>
            <ul class="font-serif text-sm text-gray-500">
              <component :is="blok.component" v-for="blok in project.content.role" :key="blok._uid" :blok="blok" />
            </ul>
          </div>
          <div class="year-info">
            <h6 class="font-serif font-bold text-base">Year</h6>
            <p class="font-serif text-sm text-gray-500">{{ project.content.year }}</p>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section class="show-project-section">
        <!-- <article id="project-content" v-html="$md.render(project.content.content)" /> -->
      </section>
      <section class="contact-section my-10">
        <BannersBannerContact />
      </section>
    </main>
  </div>
</template>

<script setup>
// =======================
// initialization variables
// =======================

let project = ref({})
const route = useRoute()
const config = useRuntimeConfig();
const url = `https://api.storyblok.com/v2/cdn/stories/${route.path}`

// =======================
// Request Storyblok API and generate 'project'
// =======================

const options = {
  server: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
    version: 'published',
    token: config.public.accessTokenSb,
  },
}
const { data, pending, error, refresh } = await useFetch(url, options)
project = data.value.story;
</script>