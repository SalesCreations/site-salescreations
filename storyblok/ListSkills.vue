<template>
  <div v-editable="blok" class="list-skill grid gap-5 grid-cols-10">
    <div
      v-for="skill in blok.skill"
      :key="skill._uid"
      :blok="skill"
      class="col-span-10 md:col-span-5 flex flex-wrap content-center"
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