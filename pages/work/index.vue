<template>
  <div id="work-page">
    <Header title="Work" img="image-header-work.png" />
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
          <CardProject v-for="(project, key) in projects" :key="`project--${key}`" :project="project" />
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import Vue from 'vue'

export default Vue.extend({
  name: 'WorkPage',
  async fetch({ store, error }) {
    try {
      await store.dispatch('projects/fetchProjects', null)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time, please try again',
      })
    }
  },
  head() {
    return {
      title: 'Work done at Sales//Creations',
      description:
        'Here you will find some projects I`ve done throughout my professional career, from UX research projects, UI design projects aimed at interfaces and even motion design aimed at product advertisements.',
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Work done at Sales//Creations',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'Here you will find some projects I`ve done throughout my professional career, from UX research projects, UI design projects aimed at interfaces and even motion design aimed at product advertisements.',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: require('@/assets/images/thumbnail-site.png'),
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'Work done at Sales//Creations',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Work done at Sales//Creations',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Here you will find some projects I`ve done throughout my professional career, from UX research projects, UI design projects aimed at interfaces and even motion design aimed at product advertisements.',
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
    projects: (state: any) => state.projects.projects,
  }),
})
</script>
