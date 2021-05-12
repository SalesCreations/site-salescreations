<template>
  <div id="card-project" class="py-8 px-10 bg-white my-5 rounded border-2 border-black">
    <NuxtLink to="/" class="link-post flex">
      <div class="descriptions">
        <p class="tag-project text-sm font-thin">Project - 2019</p>
        <h3 class="title-project text-3xl font-black">Lorem ipsum dolor sit amet</h3>
        <p class="intro-project text-base font-thin">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>
      </div>
      <img src="@/assets/images/work-demo.png" alt="image-porject" width="192" height="113" />
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CardProject',
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
