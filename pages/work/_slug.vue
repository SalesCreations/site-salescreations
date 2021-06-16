<template>
  <div id="show-project">
    <header class="header grid gap-4 grid-cols-10 py-10">
      <div class="col-span-10 flex flex-col flex-wrap content-center">
        <h1 class="text-4xl md:text-5xl font-black mb-2">{{ project.title }}</h1>
        <img class="image-project" :src="project.cover.url" :alt="project.cover.title" width="895.875" height="318.719" />
        <div class="infos-project mt-10 py-6 border-t border-b grid grid-flow-row grid-cols-2 sm:grid-cols-5 grid-rows-1 gap-3">
          <div class="company-info">
            <h6 class="font-serif font-bold text-base">Company</h6>
            <p class="font-serif text-sm text-gray-500">{{ project.company }}</p>
          </div>
          <div class="team-info">
            <h6 class="font-serif font-bold text-base">Team</h6>
            <ul class="font-serif text-sm text-gray-500">
              <li v-for="(people, key) in project.team" :key="`people--${key}`">
                {{ people }}
              </li>
            </ul>
          </div>
          <div class="tools-info">
            <h6 class="font-serif font-bold text-base">Tools</h6>
            <ul class="font-serif text-sm text-gray-500">
              <li v-for="(tool, key) in project.tools" :key="`tool--${key}`">
                {{ tool }}
              </li>
            </ul>
          </div>
          <div class="roles-info">
            <h6 class="font-serif font-bold text-base">Roles</h6>
            <ul class="font-serif text-sm text-gray-500">
              <li v-for="(role, key) in project.roles" :key="`role--${key}`">
                {{ role }}
              </li>
            </ul>
          </div>
          <div class="year-info">
            <h6 class="font-serif font-bold text-base">Year</h6>
            <p class="font-serif text-sm text-gray-500">{{ project.year }}</p>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section class="show-project-section">
        <article id="project-content" v-html="$md.render(project.content)" />
      </section>
    </main>
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
  head() {
    return {
      title: this.project.title,
      description: this.project.resume,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.project.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.project.resume,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.project.metaImage.url,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.project.title,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.project.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.project.resume,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.project.metaImage.url,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.project.metaImage.url,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.project.title,
        },
      ],
    }
  },
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
#project-content h2 {
  @apply font-serif;
  @apply font-bold;
  @apply text-3xl;
  @apply mt-10;
  @apply mb-5;
}
#project-content p,
#project-content ul {
  @apply font-serif;
  @apply text-lg;
  @apply text-gray-800;
  @apply tracking-wide;
  @apply mb-5;
}
#project-content img {
  @apply my-20;
  @apply px-10;
}
#project-content blockquote {
  position: relative;
  z-index: 600;
  margin: 30px 0 0 0;
  font-size: 20px;
  font-style: italic;
  line-height: 1.4 !important;
  font-family: 'Roboto Slab', serif;
  z-index: 0 !important;
}
#project-content blockquote p {
  @apply font-bold;
  @apply text-2xl;
  position: relative;
  margin-bottom: 20px;
  z-index: 1;
}
#project-content blockquote p:first-child:before {
  @apply text-gray-200;
  content: '\201C';
  font-size: 6em;
  font-weight: 700;
  opacity: 1;
  position: absolute;
  top: -0.35em;
  left: -0.25em;
  text-shadow: none;
  z-index: -1;
}
#project-content pre {
  @apply my-8;
  color-adjust: exact;
  -webkit-print-color-adjust: exact;
  -moz-print-color-adjust: exact;
}
#project-content pre code {
  @apply rounded;
  color-adjust: exact;
  -webkit-print-color-adjust: exact;
  -moz-print-color-adjust: exact;
}
#project-content a {
  @apply text-blue-600;
  @apply underline;
}
#project-content ul {
  @apply list-disc;
  @apply list-inside;
  @apply pl-4;
  @apply my-10;
}
#project-content ul li {
  @apply mb-3;
}
@media (max-width: 560px) {
  .image-project {
    margin-top: 0;
  }
  #project-content img {
    @apply px-0;
  }
}
</style>
