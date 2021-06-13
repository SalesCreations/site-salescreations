<template>
  <div id="show-project">
    <header class="header grid gap-4 grid-cols-10 py-10">
      <div class="col-span-10 flex flex-col flex-wrap content-center">
        <h1 class="text-4xl md:text-5xl font-black mb-2">{{ project.title }}</h1>
        <img class="image-project" :src="project.cover.url" :alt="project.cover.title" width="895.875" height="318.719" />
        <div class="infos-project my-10 py-6 border-t border-b grid grid-flow-row grid-cols-5 grid-rows-1 gap-4">
          <div class="company-info">
            <h6>Company</h6>
            <p>{{ project.company }}</p>
          </div>
          <div class="team-info">
            <h6>Team</h6>
            <ul>
              <li v-for="(people, key) in project.team" :key="`people--${key}`">
                {{ people }}
              </li>
            </ul>
          </div>
          <div class="tools-info">
            <h6>Tools</h6>
            <ul>
              <li v-for="(tool, key) in project.tools" :key="`tool--${key}`">
                {{ tool }}
              </li>
            </ul>
          </div>
          <div class="roles-info">
            <h6>Roles</h6>
            <ul>
              <li v-for="(role, key) in project.roles" :key="`role--${key}`">
                {{ role }}
              </li>
            </ul>
          </div>
          <div class="year-info">
            <h6>Year</h6>
            <p>{{ project.year }}</p>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import Vue from 'vue'

export default Vue.extend({
  name: 'ShowProject',
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('projects/fetchProject', params.slug)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time, please try again',
      })
    }
  },
  // head() {
  //   return {
  //     title: this.post.title,
  //     meta: [
  //       {
  //         hid: this.post.slug,
  //         name: this.post.title,
  //         content: this.post.resume,
  //         'og:url': 'https://',
  //         'og:type': 'article',
  //         'og:title': this.post.title,
  //         'og:description': this.post.resume,
  //         'og:image': this.post.imagePost.url,
  //       },
  //     ],
  //   }
  // },
  computed: mapState({
    project: (state: any) => state.projects.project,
  }),
})
</script>

<style>
.image-project {
  width: 100%;
  animation: 1s appear;
  margin: auto;
  margin-top: -40px;
  aspect-ratio: attr(width) / attr(height);
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
@media (max-width: 560px) {
  .image-project {
    margin-top: 0;
  }
}
</style>
