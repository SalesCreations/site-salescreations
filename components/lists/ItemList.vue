<template>
  <li v-editable="blok">
    {{ blok.value }}
  </li>
</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  }
})
</script>
