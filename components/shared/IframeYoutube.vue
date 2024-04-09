<template>
  <div>
    <iframe 
      class="w-full aspect-video"
      :src="blok.url.url" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
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