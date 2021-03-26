<template>
  <div id="experiments-page">
    <Header title="Experiments" img="image-header-experiments.png" />
    <main>
      <section class="description-section">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Diam donec adipiscing tristique risus nec. Nibh mauris cursus mattis molestie a iaculis at erat. Turpis egestas
          sed tempus urna et pharetra pharetra massa massa.
        </p>
      </section>
      <section class="github-section">
        <h2 class="text-5xl font-black py-10">Repos Pinned Github</h2>
        <div class="grid gap-4 grid-cols-12">
          <div
            v-for="(repo, key) in repos"
            :key="`${key}_${repo.id}`"
            class="col-span-12 sm:col-span-6 md:col-span-4 flex flex-wrap content-center"
          >
            <CardRepo :repo="repo" />
          </div>
        </div>
      </section>
      <section class="dribbble-section">
        <h2 class="text-5xl font-black py-10">Last Porjects Dribbble</h2>
        <div class="grid gap-4 grid-cols-12">
          <div
            v-for="(shot, key) in shots"
            :key="`shot-${shot.id}`"
            class="col-span-12 sm:col-span-6 md:col-span-4 flex flex-wrap content-center"
          >
            <CardShot v-if="key < 5" :shot="shot" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Vue from 'vue'

export default Vue.extend({
  name: 'ExperimentsPage',
  async fetch({ store, error }) {
    try {
      await store.dispatch('repos/fetchRepos')
      await store.dispatch('shots/fetchShots')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time, please try again',
      })
    }
  },
  head() {
    return {
      title: 'Experiments from Sales//Creations',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
  computed: mapState({
    repos: (state) => state.repos.repos,
    shots: (state) => state.shots.shots,
  }),
})
</script>
