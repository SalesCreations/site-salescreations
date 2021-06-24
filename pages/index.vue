<template>
  <div id="home-page">
    <header class="grid gap-4 grid-cols-10 py-10">
      <div class="col-span-10 sm:col-span-7 flex flex-wrap content-center">
        <h1 class="text-5xl font-black leading-none md:leading-normal mb-5 md:mb-0">Hello, I’m Rafael Sales</h1>
        <p class="text-base">
          I am a <strong>Product Designer and Front-End Developer</strong>, initially I created Sales Creations in 2016 with a
          focus on helping companies in design projects, but in recent years I changed my positioning only from design to work
          with design and technology assisting in co-creation with companies in search for solutions.
        </p>
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
        <h2 class="text-5xl font-black py-5">Projects</h2>
        <div class="last-projects">
          <CardProject v-for="(project, key) in projects" :key="`project--${key}`" :project="project" />
        </div>
        <ButtonMore class="ml-auto" label="See More Projects" to="/work" />
      </section>
      <section class="writing-section mt-10">
        <h2 class="text-5xl font-black py-5">Writing</h2>
        <ul class="last-posts divide-y divide-gray-300">
          <li v-for="(post, key) in posts" :key="`post--${key}`">
            <CardPost :post="post" />
          </li>
        </ul>
        <ButtonMore class="ml-auto" label="See More Articles" to="/writing" />
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

export default Vue.extend({
  name: 'HomePage',
  async fetch({ store, error }) {
    try {
      await store.dispatch('posts/fetchPosts', 3)
      await store.dispatch('projects/fetchProjects', 3)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time, please try again',
      })
    }
  },
  head() {
    return {
      title: 'Sales//Creations - Creative Emotion',
      description: 'I am a Product Designer and Front-End Developer, initially I created Sales Creations in 2016.',
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Sales//Creations - Creative Emotion',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'I am a Product Designer and Front-End Developer, initially I created Sales Creations in 2016.',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: require('@/assets/images/thumbnail-site.png'),
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'Sales//Creations - Creative Emotion',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Sales//Creations - Creative Emotion',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'I am a Product Designer and Front-End Developer, initially I created Sales Creations in 2016.',
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
    posts: (state: any) => state.posts.posts,
    projects: (state: any) => state.projects.projects,
  }),
  mounted() {
    this.$sentry.captureException(new Error('example'))
  },
})
</script>

<style scoped>
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
