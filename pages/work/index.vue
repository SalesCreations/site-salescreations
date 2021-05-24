<template>
  <div id="work-page">
    <Header title="Work" img="image-header-work.png" />
    <main>
      <section class="description-section">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Diam donec adipiscing tristique risus nec. Nibh mauris cursus mattis molestie a iaculis at erat. Turpis egestas
          sed tempus urna et pharetra pharetra massa massa. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.
          Consectetur a erat nam at lectus urna duis convallis.
        </p>
      </section>
      <section class="projects-section">
        <h2 class="text-5xl font-black py-5">Projects</h2>
        <div class="last-projects">
          <CardProject v-for="(item, key) in 7" :key="key" />
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'WorkPage',
  head() {
    return {
      title: 'Work done at Sales//Creations',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
})
</script>
