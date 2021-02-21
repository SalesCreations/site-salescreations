<template>
  <div id="card-skill" class="py-2">
    <a :href="skill.fields.link" target="_blank">
      <h3 class="text-3xl font-black flex items-center">{{ skill.fields.title }} <IconLaunch class="ml-3 mt-1" /></h3>
      <p class="text-base text-gray-700">2 anos de experiencia em pequenos projetos academicos</p>
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
#card-post {
  transition: 0.5s;
}
#card-post:hover {
  transform: scale(1.02);
  transition: 0.5s;
}
</style>
