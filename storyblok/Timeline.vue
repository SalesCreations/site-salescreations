<template>
  <div v-editable="blok" class="timeline">
    <template v-for="event in blok.events" :key="event._uid" :blok="event" class="col-span-10 md:col-span-5 flex flex-wrap content-center">
      <TimelineCardTimeline :event="event" />
    </template>
  </div>
</template>

<!-- <script lang="ts">
// import { mapState } from 'vuex'
import Vue from 'vue'

export default Vue.extend({
  name: 'Timeline',
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  // computed: mapState({
  //   events: (state: any) => state.events.events,
  // }),
})
</script> -->

<script setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
</script>