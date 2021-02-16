<template>
  <div id="card-project" class="py-16 px-10 bg-gray-200 my-5 rounded">
    <NuxtLink to="/" class="link-post">
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
#card-project {
  transition: 0.5s;
}
#card-project:hover {
  transform: scale(1.02);
  transition: 0.5s;
}
</style>
