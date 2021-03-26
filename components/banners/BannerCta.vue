<template>
  <div id="banner-cta" class="p-10 rounded border border-black md:flex items-center">
    <h3 class="banner-title text-4xl font-bold leading-none flex-grow mb-5 md:mb-auto">Download my resume</h3>
    <ButtonMore label="Download my resume" to="/" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BannerCta',
})
</script>
