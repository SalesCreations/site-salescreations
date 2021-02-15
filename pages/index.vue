<template>
  <div id="home-page">
    <header class="grid gap-4 grid-cols-10 py-10">
      <div class="col-span-7 flex flex-wrap content-center">
        <h1 class="text-5xl font-black">Hello, I’m Rafael Sales</h1>
        <p class="text-base">
          I'm a Product Designer and Front-End Developer, I create
          SalesCreations at 2016 on focus helped companies on projects of Design
          but in de last years I changed my from focus design only to Design +
          Technology in helping the companies in co-create solutions
        </p>
      </div>
      <div class="col-span-3 flex flex-wrap content-center">
        <img src="@/assets/images/image-header-me.png" />
      </div>
    </header>
    <main>
      <section class="project-section">
        <h2 class="text-5xl font-black">Projects</h2>
      </section>
      <section class="project-section">
        <h2 class="text-5xl font-black">Writing</h2>
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
