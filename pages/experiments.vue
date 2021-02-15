<template>
  <div id="experiments-page">
    <header class="grid gap-4 grid-cols-10 py-10">
      <div class="col-span-10 flex flex-wrap content-center">
        <h1 class="text-5xl font-black mb-8">Experiments</h1>
        <img src="@/assets/images/image-header-experiments.png" alt="experiments image" />
      </div>
    </header>
    <main>
      <section class="skills-section">
        <h2 class="text-5xl font-black">Skills</h2>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ExperimentsPage',
})
</script>
