<template>
  <div id="card-project" class="py-8 px-10 bg-white my-5 rounded border-2 border-black">
    <NuxtLink :to="`/work/${project.slug}`" class="link-post flex flex-col sm:flex-row">
      <div class="descriptions">
        <p class="tag-project text-sm font-thin">{{ project.type }} - {{ project.year }}</p>
        <h3 class="title-project text-3xl font-black">{{ project.title }}</h3>
        <p class="intro-project text-base font-thin">
          {{ project.resume }}
        </p>
      </div>
      <img
        class="hidden sm:block h-full my-auto"
        :src="project.thumbnail.url"
        :alt="project.thumbnail.title"
        width="192"
        height="113"
      />
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ProjectsCollectionItem } from '@/plugins/types'

export default Vue.extend({
  name: 'CardProject',
  props: {
    project: {
      type: Object as PropType<ProjectsCollectionItem>,
      required: true,
    },
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
