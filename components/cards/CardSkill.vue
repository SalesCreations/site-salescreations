<template>
  <div id="card-skill" class="py-5">
    <NuxtLink to="/" class="link-post">
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CardSkill',
})
</script>

<style>
#card-post {
  transition: 0.5s;
}
#card-post:hover {
  transform: scale(1.02);
  transition: 0.5s;
}
</style>
