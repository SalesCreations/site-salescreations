<template>
  <div>
    <iframe
      style="border-radius:12px"
      :src="blok.url.url" 
      width="100%" 
      height="200"
      class="w-full aspect-auto"
      frameBorder="0" 
      allowfullscreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy"
    ></iframe>
  </div>
</template>

<script setup>
const props = defineProps({
  blok: {
    type: String,
    required: true,
  },
})
</script>