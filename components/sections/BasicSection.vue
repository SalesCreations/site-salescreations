<template>
  <section v-if="blok" v-editable="blok.componentArea" class="skills-section py-5">
    <h2 class="text-5xl font-black py-5">{{ blok.headline }}</h2>
    <component
      :is="componentArea.component"
      v-for="componentArea in blok.componentArea"
      :key="componentArea._uid"
      :blok="componentArea"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BasicSection',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
})
</script>
