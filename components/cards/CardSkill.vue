<template>
  <div v-editable="skill" class="card-skill py-2">
    <a :href="skill.link.url" target="_blank" rel="noreferrer">
      <h3 class="text-3xl font-black flex items-center">{{ skill.title }} <IconsIconLaunch class="ml-3 mt-1" /></h3>
      <p class="text-base text-gray-700">{{ skill.description }}</p>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  skill: {
    type: Object,
    required: true,
  },
})
</script>


<style>
.card-skill:hover a svg path {
  fill: #ffd600;
  transition: 0.5s;
}
</style>
