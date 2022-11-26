<template>
  <div class="card-shot relative">
    <a :href="shot.html_url" target="_blank" rel="noreferrer">
      <div
        class="flex justify-center flex-wrap content-center px-10 info-shot absolute h-full w-full bg-pink-500 cursor-pointer opacity-0 hover:opacity-100 transition duration-500 ease-in-out"
      >
        <div class="shot-info">
          <h1 class="text-center text-pink-600 text-lg font-black mb-2">{{ shot.title }}</h1>
          <p class="text-xs text-center text-white">
            <strong>tags:</strong>
            <span v-for="(tag, key) in shot.tags" :key="`tag-${key}`">
              {{ tag }}<span v-if="key < shot.tags.length - 1">, </span>
            </span>
          </p>
        </div>
      </div>
      <img :src="shot.images.two_x" :alt="shot.title" />
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  shot: {
    type: Object,
    required: true,
  },
})
</script>
