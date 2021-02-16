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
        <h2 class="text-5xl font-black">Last Repos Github</h2>
      </section>
      <section class="dribbble-section">
        <h2 class="text-5xl font-black">Last Porjects Dribbble</h2>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ExperimentsPage',
  head() {
    return {
      title: 'Experiments from Sales//Creations',
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
