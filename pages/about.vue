<template>
  <div id="about-page">
    <SharedHeader :title="$t('about')" img="image-header-about.png" />
    <main>
      <section class="description-section">
        <h6 class="font-bold text-xl">{{$t('hello')}}</h6>
        <br />
        <p v-html="$t('aboutDescriptionOne', {age: age})"></p>
        <br />
        <p v-html="$t('aboutDescriptionTwo', {designStart: designStart, techStart: techStart})"></p>
      </section>
      <section class="finish-section pt-20 pb-10">
        <SharedElementSalesCreations />
      </section>
      <div v-if="story.story.content.component" v-editable="story.story.content.component">
				<StoryblokComponent :is="blok.component" v-for="blok in story.story.content.body" :key="blok._uid" :blok="blok" />
      </div>
      <section class="resume-section my-10">
        <BannersBannerCta />
      </section>
      <section class="ig-section"></section>
    </main>
  </div>
</template>

<script setup>
import { useI18n, useLocalePath } from '#imports'
import dayjs from 'dayjs';

// =======================
// <Head> define meta tags
// =======================

useHead({
  title: 'About SalesCreations',
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
      content: 'About SalesCreations',
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
const url = 'https://api.storyblok.com/v2/cdn/stories/about';

let age = ref(0);
let designStart = ref(0);
let techStart = ref(0);

// =======================
// Request Storyblok API and generate 'story'
// =======================

let pathAbout = async () => isEnglishI18n ? null : 'pt-br';
const options = {
  server: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
		resolve_links: 1,
    version: isDev ? 'draft' : 'published',
    language: await pathAbout(),
    token: config.public.accessTokenSb
  },
}
const { data: story, pending, error, refresh } = await useFetch(url, options)

// =======================
// Setting Dates Information about me
// =======================

function datesInfo() {
  age =
    parseInt(dayjs().format('MM')) < 8
      ? parseInt(dayjs().format('YYYY')) - 1993 - 1
      : parseInt(dayjs().format('YYYY')) - 1993
  designStart = parseInt(dayjs().format('YYYY')) - 2009
  techStart = parseInt(dayjs().format('YYYY')) - 2013
}
datesInfo()
onMounted(() => {
	useStoryblokBridge(story.value.story.id, (evStory) => (story.value.story = evStory));
});
</script>
