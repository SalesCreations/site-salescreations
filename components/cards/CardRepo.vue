<template>
  <div id="card-repo" class="p-5 rounded border border-black">
    <NuxtLink to="/" class="link-repo">
      <IconGithub width="39" height="37" class="mb-1" />
      <h3 class="text-lg font-black mb-2">programacao-head-first</h3>
      <p class="text-sm mb-4">📖 Repository based on the book Head First Programming</p>
      <p class="text-xs text-gray-500">python, programming, book, head-first</p>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CardProject',
})
</script>

<style>
#card-repo {
  transition: 0.5s;
}
#card-repo:hover {
  transform: scale(1.02);
  transition: 0.5s;
}
</style>
