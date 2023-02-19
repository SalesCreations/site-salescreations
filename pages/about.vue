<template>
  <div id="about-page">
    <SharedHeader title="About" img="image-header-about.png" />
    <main>
      <section class="description-section">
        <h6 class="font-bold text-xl">Hello!</h6>
        <br />
        <p>
          I'm <strong>Rafael Sales</strong> but you can call me <strong>'Sales'</strong>, a {{ age }}-year-old product designer
          and front-end developer who is very fond of co-creating solutions to complex day-to-day problems, uniting technology and
          design that are my two passions.
        </p>
        <br />
        <p>
          I started my career in the graphic sector, when I was in the last year of high school and fell in love with the
          possibilities within the design area, right after that I entered the university in the graphic design course, today
          completing {{ designStart }} years that I started in the world of design and within the {{ designStart }} years I have
          been {{ techStart }} years working directly in the technology area.
        </p>
      </section>
      <section class="finish-section pt-20 pb-10">
        <SharedElementSalesCreations />
      </section>
      <template v-if="story.story.content.component" v-editable="story.story.content.component">
				<StoryblokComponent :is="blok.component" v-for="blok in story.story.content.body" :key="blok._uid" :blok="blok" />
      </template>
      <section class="resume-section my-10">
        <BannersBannerCta />
      </section>
      <section class="ig-section"></section>
    </main>
  </div>
</template>

<script setup>
import dayjs from 'dayjs'

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

const config = useRuntimeConfig();
let age = ref(0)
let designStart = ref(0)
let techStart = ref(0)
const url = 'https://api.storyblok.com/v2/cdn/stories/about'

// =======================
// Request Storyblok API and generate 'story'
// =======================

const options = {
  server: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
		resolve_links: 1,
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
