<template>
  <div id="card-project" class="py-8 px-10 bg-white my-5 rounded border-2 border-black">
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
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<style>
#card-project {
  transition: 0.5s;
}
#card-project:hover {
  transform: scale(1.02);
  transition: 0.5s;
}
</style>
