<template>
  <div class="timeline">
    <template v-for="(event, key) in events">
      <CardTimeline :key="`${key}_${event.sys.id}`" :event="event" />
    </template>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import Vue from 'vue'

export default Vue.extend({
  name: 'Timeline',
  computed: mapState({
    events: (state: any) => state.events.events,
  }),
})
</script>
