<template>
  <div id="Writing-page">
    <Header title="Writing" img="image-header-work.png" />
    <main>
      <section class="writing-section">
        <h2 class="text-5xl font-black py-5">Writing</h2>
        <div class="last-posts divide-y divide-gray-300">
          <CardPost v-for="(item, key) in 7" :key="key" />
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'WritingPage',
  head() {
    return {
      title: 'Writing ideas by Sales//Creations',
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
