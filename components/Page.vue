<template>
  <div v-editable="blok" class="antialiased text-gray-600 min-h-full flex flex-col">
    <component :is="blok.component" v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>
