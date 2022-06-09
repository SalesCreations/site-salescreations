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
import CardProject from '@/components/cards/CardProject.vue'
import Header from '@/components/shared/Header.vue'

export default Vue.extend({
  name: 'WorkPage',
  components: {
    CardProject,
    Header,
  },
  async fetch({ store, error, route, isDev, query }) {
    try {
      await store.dispatch('projects/fetchProjects', { path: route.path, isDev, query })
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
    }
  },
  computed: mapState({
    projects: (state: any) => state.projects.projects,
  }),
})
</script>
