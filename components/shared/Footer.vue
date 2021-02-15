<template>
  <footer>
    <SocialLinks />
    <p class="text-center font-light">
      built with
      <a class="font-bold" href="https://nuxtjs.org/" target="_blank">
        Nuxt.js
      </a>
      served with
      <a class="font-bold" href="https://www.netlify.com/" target="_blank">
        Netlify
      </a>
      and updated with
      <a class="font-bold" href="http://contentful.com/" target="_blank">
        Contentful
      </a>
    </p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer',
})
</script>

<style scoped>
footer {
  padding: 30px 0;
}
</style>
