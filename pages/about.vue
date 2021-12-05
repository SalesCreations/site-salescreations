<template>
  <div id="about-page">
    <Header title="About" img="image-header-about.png" />
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
        <ElementSalesCreations />
      </section>
      <template v-if="story.content.component" v-editable="story.content.body">
        <component :is="blok.component" v-for="blok in story.content.body" :key="blok._uid" :blok="blok" />
      </template>
      <section class="resume-section my-10">
        <BannerCta />
      </section>
      <section class="ig-section"></section>
    </main>
  </div>
</template>

<script lang="ts">
import { isEditModeGeneral } from '@/plugins/helper.js'
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutPage',
  asyncData(context): any {
    // eslint-disable-next-line eqeqeq
    const fullSlug = context.route.path == '/' || context.route.path == '' ? 'home' : context.route.path

    return context.app.$storyapi
      .get(`cdn/stories/${fullSlug}`, {
        version: 'draft',
      })
      .then((res: { data: any }) => {
        return res.data
      })
      .catch((res: { response: { data: any; status: any } }) => {
        if (!res.response) {
          // eslint-disable-next-line no-console
          console.error(res)
          context.error({ statusCode: 404, message: 'Failed to receive content form api' })
        } else {
          // eslint-disable-next-line no-console
          console.error(res.response.data)
          context.error({ statusCode: res.response.status, message: res.response.data })
        }
      })
  },
  data() {
    return {
      story: { content: {} },
      age: 0,
      designStart: 0,
      techStart: 0,
    }
  },
  head() {
    return {
      title: 'About Sales//Creations',
      description:
        'I´m Rafael Sales but you can call me ´Sales´, a 28-year-old product designer and front-end developer who is very fond of co-creating solutions to complex day-to-day problems, uniting technology and design that are my two passions',
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'About Sales//Creations',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'I´m Rafael Sales but you can call me ´Sales´, a 28-year-old product designer and front-end developer who is very fond of co-creating solutions to complex day-to-day problems, uniting technology and design that are my two passions',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: require('@/assets/images/thumbnail-site.png'),
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'About Sales//Creations',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'About Sales//Creations',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'I´m Rafael Sales but you can call me ´Sales´, a 28-year-old product designer and front-end developer who is very fond of co-creating solutions to complex day-to-day problems, uniting technology and design that are my two passions',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: require('@/assets/images/thumbnail-site.png'),
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: require('@/assets/images/thumbnail-site.png'),
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Sales//Creations - Creative Emotion',
        },
      ],
    }
  },
  mounted() {
    isEditModeGeneral(this)
    this.datasInfo()
  },
  methods: {
    datasInfo(): void {
      this.age =
        parseInt(this.$dayjs().format('MM')) < 8
          ? parseInt(this.$dayjs().format('YYYY')) - 1993 - 1
          : parseInt(this.$dayjs().format('YYYY')) - 1993
      this.designStart = parseInt(this.$dayjs().format('YYYY')) - 2009
      this.techStart = parseInt(this.$dayjs().format('YYYY')) - 2013
    },
  },
})
</script>
