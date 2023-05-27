<template>
  <div v-if="post" class="card-post py-5">
    <NuxtLink :to="`/${post?.full_slug}`" class="link-post">
      <h3 class="post-title text-4xl font-bold leading-none mb-3 text-gray-600">
        {{ post?.content.portuguese ? '🇧🇷' : '🇬🇧' }}{{ post?.content.title }}
      </h3>
      <p class="post-intro text-base mb-5">
        {{ post?.content.intro }}
      </p>
      <div class="post-info flex space-x-4 text-sm font-bold">
        <strong>{{ $dayjs(post?.first_published_at).format('MMM DD, YYYY') }}</strong>
        <!-- <strong>{{ time.text }}</strong> -->
      </div>
    </NuxtLink>
  </div>

  <div v-else class="card-post-skeleton py-4">
    <div class="card__title mb-3">
      <div class="skeleton skeleton-text skeleton-title"></div>
    </div>
    <div class="card__footer mb-5">
      <div class="skeleton skeleton-text"></div>
      <div class="skeleton skeleton-text"></div>
    </div>
    <div class="card__footer">
      <div class="skeleton skeleton-text skeleton-footer"></div>
    </div>
  </div>
</template>

<script setup>
import dayjs from 'dayjs'

// =======================
// initialize the Prop 
// =======================

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
})

// =======================
// initialize the variables
// =======================

// const readingTime = require('reading-time')
let time =  ref({ "text": "", "minutes": 0, "time": 0, "words": 0 })
</script>


<style lang="postcss">
.card-post h3,
.card-post p {
  transition: 0.5s;
}

.card-post:hover p {
  text-decoration: underline;
  transition: 0.5s;
}

.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

.skeleton-text {
  width: 100%;
  height: 0.7rem;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
}

.skeleton-text__body {
  width: 75%;
}

.skeleton-title {
  width: 54%;
  height: 1.7rem;
}

.skeleton-footer {
  width: 30%;
}
</style>
