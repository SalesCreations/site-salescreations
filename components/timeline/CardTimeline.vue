<template>
  <div class="card-timeline" date-is="2009">
    <h4 class="text-xl font-black">Lorem Ipsum, Lorem Lorem</h4>
    <p class="text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CardTimeline',

  // props: {
  //   event: {
  //     type: Object,
  //     required: false,
  //   },
  // },
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
