<template>
  <div v-editable="blok" class="list-skill">
    <div
      v-for="skill in blok.skill"
      :key="skill._uid"
      :blok="skill"
      class="card-skill-capsule"
    >
      <CardsCardSkill :skill="skill" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="postcss">
  .list-skill {
    @apply grid gap-5 grid-cols-10
  }
  .card-skill-capsule {
    @apply col-span-10 md:col-span-5 flex flex-wrap content-center
  }
</style>