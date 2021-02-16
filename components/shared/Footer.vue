<template>
  <footer class="relative">
    <SocialLinks />
    <p class="text-center font-light">
      built with
      <a class="font-bold link-footer" href="https://nuxtjs.org/" target="_blank"> Nuxt.js </a>
      served with
      <a class="font-bold link-footer" href="https://www.netlify.com/" target="_blank"> Netlify </a>
      and updated with
      <a class="font-bold link-footer" href="http://contentful.com/" target="_blank"> Contentful </a>
    </p>
    <img
      v-if="image"
      class="hidden lg:block absolute image-footer"
      src="@/assets/images/illustration/illustration-footer.svg"
      alt="people mobile"
    />
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer',

  props: {
    image: {
      type: Boolean,
      required: true,
    },
  },
})
</script>

<style scoped>
footer {
  padding: 30px 0;
}
footer a.link-footer {
  background: #ffd600;
}
footer img.image-footer {
  bottom: 1rem;
  right: -5rem;
}
</style>
