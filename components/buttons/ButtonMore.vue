<template>
  <NuxtLink id="button-more" :to="to" class="link flex">
    {{ label }}
    <svg class="ArrowRightAlt" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z" fill="black" />
    </svg>
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ButtonMore',

  props: {
    label: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
})
</script>

<style>
#button-more {
  max-width: max-content;
}
</style>
