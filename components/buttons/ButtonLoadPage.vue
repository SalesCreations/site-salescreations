<template>
  <button
    class="flex button-load-page border-black border-2 px-5 py-2 mx-auto mt-5 hover:bg-black hover:text-white"
    @click="loadMore"
  >
    Load More
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ButtonLoadPage',
  methods: {
    loadMore() {
      alert('loadMore')
    },
  },
})
</script>

<style scoped>
.button-load-page {
  max-width: max-content;
}
</style>
