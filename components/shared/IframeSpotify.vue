<template>
  <div>
    <iframe style="border-radius:12px" :src="body.url.url" width="100%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>
</template>

<script setup>
const props = defineProps({
  body: {
    type: String,
    required: true,
  },
})
</script>