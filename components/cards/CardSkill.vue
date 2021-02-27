<template>
  <div class="card-skill py-2">
    <a :href="skill.link" target="_blank">
      <h3 class="text-3xl font-black flex items-center">{{ skill.title }} <IconLaunch class="ml-3 mt-1" /></h3>
      <p class="text-base text-gray-700">{{ skill.description }}</p>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CardSkill',
  props: {
    skill: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style>
.card-skill:hover a svg path {
  fill: #ffd600;
  transition: 0.5s;
}
</style>
