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
      <section class="skills-section">
        <h2 class="text-5xl font-black py-5">Skills</h2>
        <div class="list-skill grid gap-5 grid-cols-10">
          <div
            v-for="(skill, key) in skills"
            :key="`${key}_${skill.sys.id}`"
            class="col-span-10 md:col-span-5 flex flex-wrap content-center"
          >
            <CardSkill :skill="skill" />
          </div>
        </div>
      </section>
      <section class="timeline-section py-5">
        <h2 class="text-5xl font-black py-5">Timeline</h2>
        <Timeline />
      </section>
      <section class="resume-section my-10">
        <BannerCta />
      </section>
      <section class="ig-section"></section>
    </main>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutPage',
  asyncData({ $dayjs }): { age: number; designStart: number; techStart: number } {
    return {
      age:
        parseInt($dayjs().format('MM')) < 8
          ? parseInt($dayjs().format('YYYY')) - 1993 - 1
          : parseInt($dayjs().format('YYYY')) - 1993,
      designStart: parseInt($dayjs().format('YYYY')) - 2009,
      techStart: parseInt($dayjs().format('YYYY')) - 2013,
    }
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('skills/fetchSkills')
      await store.dispatch('events/fetchEvents', null)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time, please try again',
      })
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
  computed: mapState({
    skills: (state: any) => state.skills.skills,
  }),
})
</script>
