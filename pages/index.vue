<template>
  <div id="home-page">
    <header class="grid gap-4 grid-cols-10 py-10">
      <div class="col-span-10 sm:col-span-7 flex flex-wrap content-center">
        <h1 class="text-5xl font-black leading-none md:leading-normal mb-5 md:mb-0">{{ $t('titleHome') }}</h1>
        <p class="text-base" v-html="$t('descriptionHome')"></p>
      </div>
      <div class="col-span-10 sm:col-span-3 flex flex-wrap content-center">
        <div class="image-action relative mx-auto">
          <img class="img-me" src="@/assets/images/image-header-me.webp" height="297" width="258" alt="I'm" />
          <img class="speech-bubble" src="@/assets/images/speech-bubble-final.png" alt="Speech Bubble" />
        </div>
      </div>
    </header>
    <main>
      <section class="projects-section">
        <h2 class="text-5xl font-black py-5">{{ $t('projects') }}</h2>
        <div class="last-projects">
          <CardsCardProject v-for="(project, key) in projects" :key="`project--${key}`" :project="project" />
        </div>
        <ButtonsButtonMore class="ml-auto" :label="$t('seeMoreProjects')" :to="localePath('/work/')" />
      </section>
      <section class="writing-section mt-10">
        <h2 class="text-5xl font-black py-5">{{ $t('writing') }}</h2>
        <ul class="last-posts divide-y divide-gray-300">
          <li v-for="(post, key) in posts" :key="`post--${key}`">
            <CardsCardPost :post="post" />
          </li>
        </ul>
        <ButtonsButtonMore class="ml-auto" :label="$t('seeMoreArticles')" :to="localePath('/writing/')" />
      </section>
      <section class="finish-section py-48">
        <SharedElementSalesCreations />
      </section>
    </main>
  </div>
</template>

<script setup>
import { useI18n, useLocalePath } from '#imports'

useHead({
  title: 'Welcome to SalesCreations',
  meta: [
    {
      name: 'description',
      content: "I'm Rafael Sales but you can call me 'Sales', a 28-year-old product designer and front-end developer who is very fond of co-creating solutions to complex day-to-day problems, uniting technology and design that are my two passions"
    },
    {
      property: 'og:site_name',
      content: 'SalesCreations',
    },
    {
      property: 'og:title',
      content: 'Welcome to SalesCreations',
    },
    {
      property: 'og:description',
      content: "I'm Rafael Sales but you can call me 'Sales', a 28-year-old product designer and front-end developer who is very fond of co-creating solutions to complex day-to-day problems, uniting technology and design that are my two passions"
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
const url = 'https://api.storyblok.com/v2/cdn/stories'

// let projects = ref({});
// let posts = ref({});
let projects = reactive({});
let posts = reactive({});

// =======================
// Request Storyblok API and generate 'projects'
// =======================

const projectsOptions = {
  server: isDev ? true : false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
		resolve_links: 1,
    starts_with: 'work',
    version: isDev ? 'draft' : 'published',
    token: config.public.accessTokenSb,
  },
}
const { data: projectsData, pending: projectPending } = await useFetch(url, projectsOptions)
projects = projectsData.value.stories?.slice(1)

// =======================
// Request Storyblok API and generate 'posts'
// =======================

let pathWriting = async () => isEnglishI18n ? '[default]/writing/' : '[default]/pt-br/writing';
const postsOptions = {
  server: isDev ? true : false,
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

const { data: postsData, pending: postsPending } = await useFetch(url, postsOptions)
posts = postsData.value.stories?.slice(1)
</script>

<style lang="postcss" scoped>
.img-me {
  animation: 1s appear;
  margin: auto;
  aspect-ratio: attr(width) / attr(height);
}

.image-action .speech-bubble {
  position: absolute;
  top: 22%;
  right: -45%;
  opacity: 0;
  transform: rotate(50deg) scale(0);
  transform-origin: bottom left;
  transition: all 0.25s ease;
}

.image-action:hover .speech-bubble {
  opacity: 1;
  transform: rotate(0) scale(1);
  transform-origin: bottom left;
  transition: all 0.25s ease;
}

.image-action:hover {
  cursor: pointer;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>