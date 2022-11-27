<template>
  <section v-if="blok" v-editable="blok.componentArea" class="skills-section py-5">
    <h2 class="text-5xl font-black py-5">{{ blok.headline }}</h2>
    <StoryblokComponent :is="componentArea.component" v-for="componentArea in blok.componentArea" :key="componentArea._uid" :blok="componentArea" />
  </section>
</template> 

<script setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
</script>
