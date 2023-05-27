<template>
  <div v-show="isloaded==false" class="py-8 px-10 bg-white my-5 rounded border-2 border-gray-400">
    <div class="card__title mb-3">
      <div class="skeleton skeleton-text skeleton-pre-title"></div>
      <div class="skeleton skeleton-text skeleton-title"></div>
    </div>
    <div class="card__body">
      <div class="skeleton skeleton-text"></div>
      <div class="skeleton skeleton-text"></div>
      <div class="skeleton skeleton-text skeleton-footer"></div>
    </div>
  </div>

  <div v-show="isloaded==true" id="card-project" class="py-8 px-10 bg-white my-5 rounded border-2 border-black">
    <NuxtLink :to="`/work/${project.slug}`" class="link-post flex flex-col sm:flex-row">
      <div class="descriptions">
        <p class="tag-project text-sm font-thin">{{ project.content.type }} - {{ project.content.year }}</p>
        <h3 class="title-project text-3xl font-black">{{ project.content.title }}</h3>
        <p class="intro-project text-base font-thin">
          {{ project.content.resume }}
        </p>
      </div>
      <img
        class="hidden sm:block h-full my-auto"
        :src="project.content.thumbnail.filename"
        :alt="project.content.thumbnail.title"
        width="192"
        height="113"
      />
    </NuxtLink>
  </div>
</template>

<script setup>

// =======================
// initialize the Prop 
// =======================

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

// =======================
// initialize the variables
// =======================

let isloaded = ref(false);

// =======================
// Delay loading articles
// =======================

useDelay(() => {
  isloaded.value = true;
}, 500);
</script>

<style lang="postcss" scoped>
#card-project {
  transition: 0.5s;
}
#card-project:hover {
  transform: scale(1.02);
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

.skeleton-pre-title {
  width: 10%;
  margin-top: 0.6rem;
}

.skeleton-title {
  width: 54%;
  height: 1.7rem;
  margin-top: 0.5rem;
}

.skeleton-footer {
  width: 30%;
  margin-bottom: 0.6rem;
}
</style>
