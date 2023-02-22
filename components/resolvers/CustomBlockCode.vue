<template>
  <h1>hello</h1>
  <pre v-highlightjs="sourcecode">
    <code :class="elementClass">
      <slot />
    </code>
  </pre>
</template>

<script setup>
import { defineComponent, ref } from '@vue/composition-api';
// import { CodeAttributes } from '@marvr/storyblok-rich-text-types';

const props = defineProps({
  title: {
    type: Object,
    required: true,
  }
})
</script>