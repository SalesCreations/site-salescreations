<template>
  <div v-editable="event" class="card-timeline" :date-is="$dayjs(event.datetime).format('YYYY')">
    <h4 class="text-xl font-black">{{ event.title }}</h4>
    <p class="text-gray-700">
      {{ event.description }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
})
</script>

<style>
.card-timeline {
  padding: 3em 2em 2em;
  position: relative;
  border-left: 2px solid #b6b6b6;
}
.card-timeline p {
  font-size: 1rem;
}
.card-timeline::before {
  content: attr(date-is);
  position: absolute;
  left: 2em;
  top: 0.8em;
  display: block;
  color: #b6b6b6;
}
.card-timeline::after {
  width: 16px;
  height: 16px;
  display: block;
  top: 1em;
  position: absolute;
  left: -9px;
  border-radius: 10px;
  content: '';
  background: #b6b6b6;
}
.card-timeline:first-child {
  border-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3) 60%) 1 100%;
}
</style>
