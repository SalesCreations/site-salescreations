<template>
  <div class="card-repo no-flicker relative pt-5 pb-3 px-5 rounded border border-black min-w-full">
    <a :href="repo.url" target="_blank" rel="noreferrer" class="link-repo">
      <IconGithub width="37" height="35" class="mb-1" />
      <h3 class="text-lg font-black mb-2">{{ repo.name }}</h3>
      <p class="text-sm mb-4">{{ repo.description | truncate(65) }}</p>
      <p class="text-xs text-gray-500">
        <strong>tags:</strong>
        <span v-for="(topic, key) in repo.repositoryTopics.nodes" :key="`${key}_${topic.topic.name}`">
          {{ topic.topic.name }} <span v-if="key < repo.repositoryTopics.nodes.length - 1">, </span>
        </span>
      </p>
      <div class="tag-language absolute bottom-0 pb-3 mt-5 flex flex-wrap items-center">
        <div class="bulet w-3 h-3 rounded-full mr-1" :style="`background-color: ${repo.primaryLanguage.color}`" />
        <p class="text-sm">{{ repo.primaryLanguage.name }}</p>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IconGithub from '@/components/icons/IconGithub.vue'

export default Vue.extend({
  name: 'CardRepo',
  components: {
    IconGithub,
  },
  filters: {
    truncate(string: string, maxLength: number, end = '...') {
      if (!string) return ''
      string = string.toString()
      return `${string.substring(0, maxLength)}${string.length > maxLength ? end : ''}`
    },
  },
  props: {
    repo: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style soped>
.card-repo {
  min-height: 243px;
}
.card-repo:hover {
  background-color: #fff88f;
}
</style>
