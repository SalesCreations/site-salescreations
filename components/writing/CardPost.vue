<template>
  <div id="card-post" class="py-5">
    <NuxtLink to="/">
      <h3 class="post-title text-4xl font-bold leading-none mb-3 text-gray-400">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      </h3>
      <p class="post-intro text-base mb-5">
        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum
        minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.
      </p>
      <div class="post-info flex space-x-4 text-sm">
        <strong>14/08/2021</strong>
        <strong>18 comentários</strong>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Post',
})
</script>

<style scoped>
a.nuxt-link-active {
  background: #ffd600;
  border-radius: 0;
}
</style>
