<template>
  <header class="header grid gap-4 grid-cols-10 py-10">
    <div class="col-span-10 flex flex-wrap content-center">
      <h1 class="text-5xl font-black mb-8">{{ title }}</h1>
      <img :src="require(`@/assets/images/${img}`)" loading="lazy" width="895.875" height="268.031" :alt="`${title} Image`" />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',

  props: {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped>
img {
  animation: 1s appear;
  margin: auto;
  aspect-ratio: attr(width) / attr(height);
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
