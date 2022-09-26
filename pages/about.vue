<template>
  <div id="about-page">
    <Header :title="$t('about')" img="image-header-about.png" />
    <main>
      <section class="description-section">
        <h6 class="font-bold text-xl">{{$t('hello')}}</h6>
        <br />
        <p v-html="$t('aboutDescriptionOne', {age: age})" />
        <br />
        <p v-html="$t('aboutDescriptionTwo', {designStart: designStart, techStart: techStart})" />
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
import Header from '@/components/shared/Header.vue'
import ElementSalesCreations from '@/components/shared/ElementSalesCreations.vue'
import BannerCta from '@/components/banners/BannerCta.vue'
import CardSkill from '@/components/cards/CardSkill.vue'
import CardTimeline from '@/components/timeline/CardTimeline.vue'

Vue.component('CardSkill', CardSkill)
Vue.component('CardTimeline', CardTimeline)

export default Vue.extend({
  name: 'AboutPage',
  components: {
    Header,
    ElementSalesCreations,
    BannerCta,
  },
  asyncData(context): any {
    const fullSlug = context.route.path === '/' || context.route.path === '' ? 'home' : context.route.path.split('/').pop()
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    const language = context.i18n.getLocaleCookie() === 'en' ? '' : context.i18n.getLocaleCookie()

    return context.app.$storyapi
      .get(`cdn/stories/${fullSlug}`, {
        version,
        language
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
      story: { content: {component: {}, body: {blok: {component: {}, _uid: 0}}} },
      age: 0,
      designStart: 0,
      techStart: 0,
    }
  },
  head: {
    title: 'About Sales//Creations',
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
