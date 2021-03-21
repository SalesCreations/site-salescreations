<template>
  <div id="home-page">
    <header class="grid gap-4 grid-cols-10 py-10">
      <div class="col-span-10 sm:col-span-7 flex flex-wrap content-center">
        <h1 class="text-5xl font-black">Hello, I’m Rafael Sales</h1>
        <p class="text-base">
          I'm a Product Designer and Front-End Developer, I create SalesCreations at 2016 on focus helped companies on projects of
          Design but in de last years I changed my from focus design only to Design + Technology in helping the companies in
          co-create solutions
        </p>
      </div>
      <div class="col-span-10 sm:col-span-3 flex flex-wrap content-center">
        <div class="image-action relative">
          <img class="image-me" src="@/assets/images/image-header-me.png" height="284" width="229" alt="I'm" />
          <img class="speech-bubble" src="@/assets/images/speech-bubble-demo.png" alt="Speech Bubble" />
        </div>
      </div>
    </header>
    <main>
      <section class="projects-section">
        <h2 class="text-5xl font-black py-5">Projects</h2>
        <div class="last-projects">
          <CardProject v-for="(item, key) in 3" :key="key" />
        </div>
        <ButtonMore class="float-right" label="See More" to="/work" />
      </section>
      <section class="writing-section">
        <h2 class="text-5xl font-black py-5">Writing</h2>
        <div class="last-posts divide-y divide-gray-300">
          <CardPost v-for="(item, key) in 3" :key="key" />
        </div>
        <ButtonMore class="float-right" label="See More" to="/writing" />
      </section>
      <section class="finish-section py-48">
        <ElementSalesCreations />
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomePage',
})
</script>

<style scoped>
.image-me {
  animation: 1s appear;
  margin: auto;
  height: 284px;
  width: 229px;
}

.image-action .speech-bubble {
  position: absolute;
  top: 22%;
  right: -59%;
  opacity: 0;
  transform: rotate(50deg) scale(0);
  transform-origin: bottom left;
  transition: all 0.25s ease;
}

.image-action:hover .speech-bubble {
  opacity: 1;
  transform: rotate(0) scale(1);
  transform-origin: bottom left;
  transition: all 0.25s ease;
}

.image-action:hover {
  cursor: pointer;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
