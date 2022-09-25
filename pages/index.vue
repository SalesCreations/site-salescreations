<template>
  <div id="home-page">
    <header class="grid gap-4 grid-cols-10 py-10">
      <div class="col-span-10 sm:col-span-7 flex flex-wrap content-center">
        <h1 class="text-5xl font-black leading-none md:leading-normal mb-5 md:mb-0">{{ $t('titleHome') }}</h1>
        <p class="text-base" v-html="$t('descriptionHome')"></p>
      </div>
      <div class="col-span-10 sm:col-span-3 flex flex-wrap content-center">
        <div class="image-action relative mx-auto">
          <img class="img-me" src="@/assets/images/image-header-me.webp" height="297" width="258" alt="I'm" />
          <img class="speech-bubble" src="@/assets/images/speech-bubble-final.png" alt="Speech Bubble" />
        </div>
      </div>
    </header>
    <main>
      <section class="projects-section">
        <h2 class="text-5xl font-black py-5">{{ $t('projects') }}</h2>
        <div class="last-projects">
          <CardProject v-for="(project, key) in projects" :key="`project--${key}`" :project="project" />
        </div>
        <ButtonMore class="ml-auto" :label="$t('seeMoreProjects')" :to="localePath('/work/')" />
      </section>
      <section class="writing-section mt-10">
        <h2 class="text-5xl font-black py-5">{{ $t('writing') }}</h2>
        <ul class="last-posts divide-y divide-gray-300">
          <li v-for="(post, key) in posts" :key="`post--${key}`">
            <CardPost :post="post" />
          </li>
        </ul>
        <ButtonMore class="ml-auto" :label="$t('seeMoreArticles')" :to="localePath('/writing/')" />
      </section>
      <section class="finish-section py-48">
        <ElementSalesCreations />
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import Vue from 'vue'
import CardProject from '@/components/cards/CardProject.vue'
import CardPost from '@/components/cards/CardPost.vue'
import ElementSalesCreations from '@/components/shared/ElementSalesCreations.vue'
import ButtonMore from '@/components/buttons/ButtonMore.vue'

export default Vue.extend({
  name: 'HomePage',
  components: {
    CardProject,
    CardPost,
    ElementSalesCreations,
    ButtonMore,
  },
  async fetch({ store, error, isDev, query }) {
    try {
      await store.dispatch('posts/fetchPosts', { path: '/writing', isDev, query })
      await store.dispatch('projects/fetchProjects', { path: '/work', isDev, query })
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time, please try again',
      })
    }
  },
  computed: mapState({
    posts: (state: any) => state.posts.posts,
    projects: (state: any) => state.projects.projects,
  }),
})
</script>

<style lang="postcss" scoped>
.img-me {
  animation: 1s appear;
  margin: auto;
  aspect-ratio: attr(width) / attr(height);
}

.image-action .speech-bubble {
  position: absolute;
  top: 22%;
  right: -45%;
  opacity: 0;
  transform: rotate(50deg) scale(0);
  transform-origin: bottom left;
  transition: all 0.25s ease;
}

.image-action:hover .speech-bubble {
  opacity: 1;
  transform: rotate(0) scale(1);
  transform-origin: bottom left;
  transition: all 0.25s ease;
}

.image-action:hover {
  cursor: pointer;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
