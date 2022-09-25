<template>
  <div id="work-page">
    <Header :title="$t('work')" img="image-header-work.png" />
    <main>
      <section class="description-section">
        <p v-html="$t('workDescription')"></p>
      </section>
      <section class="projects-section">
        <h2 class="text-5xl font-black py-5">{{ $t('projects') }}</h2>
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
  head: {
    title: 'Work done at Sales//Creations',
  },
  computed: mapState({
    projects: (state: any) => state.projects.projects,
  }),
})
</script>
