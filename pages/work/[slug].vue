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
        <article id="project-content" v-html="articleContent"></article>
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

// Generate Article content
const articleContent = computed(() => renderRichText(project.content.new_content));
</script>

<style lang="postcss">
.image-post {
  width: 100%;
  height: 268.031px;
  background-color: gainsboro;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: 1s appear;
  margin: auto;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
  -moz-print-color-adjust: exact;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
.dropdown-off {
  transform: scale(0);
  opacity: 0;
  transition: 0.3s;
}
.dropdown-on {
  transform: scale(1);
  opacity: 1;
  transition: 0.3s;
}
#project-content h2 {
  @apply font-serif;
  @apply font-bold;
  @apply text-3xl;
  @apply mt-10;
  @apply mb-5;
}
#project-content p,
#project-content ul {
  @apply font-serif;
  @apply text-lg;
  @apply text-gray-800;
  @apply tracking-wide;
  @apply mb-5;
}
#project-content img:not(.object-cover) {
  @apply my-20;
  @apply px-10;
  @apply w-full;
}
#project-content blockquote {
  position: relative;
  z-index: 600;
  margin: 30px 0 0 0;
  font-size: 20px;
  font-style: italic;
  line-height: 1.4 !important;
  font-family: 'Roboto Slab', serif;
  z-index: 0 !important;
}
#project-content blockquote p {
  @apply font-bold;
  @apply text-2xl;
  position: relative;
  margin-bottom: 20px;
  z-index: 1;
}
#project-content blockquote p:first-child:before {
  @apply text-gray-200;
  content: '\201C';
  font-size: 6em;
  font-weight: 700;
  opacity: 1;
  position: absolute;
  top: 0.25em;
  left: -0.25em;
  text-shadow: none;
  z-index: -1;
}
#project-content pre {
  @apply my-8;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
  -moz-print-color-adjust: exact;
}
#project-content pre code {
  @apply rounded;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
  -moz-print-color-adjust: exact;
}
#project-content a {
  @apply text-blue-600;
  @apply underline;
}
#project-content ul {
  @apply list-disc;
  @apply list-inside;
  @apply pl-4;
  @apply my-10;
}
#project-content ul li {
  @apply mb-3;
  list-style: disc;
}
.action-post:hover {
  transform: scale(1.09);
}
@media (min-width: 768px) {
  #project-content ul {
    @apply pl-10;
  }
}
@media print {
  .comments-section,
  .action-post {
    display: none;
  }
}
</style>