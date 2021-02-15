<template>
  <nav>
    <div
      class="container mx-auto py-2 flex flex-wrap items-center md:flex-no-wrap"
    >
      <div class="mr-4 md:mr-8">
        <a href="#" rel="home">
          <Logo />
        </a>
      </div>
      <div class="hidden sm:block ml-auto">
        <div class="flex space-x-4">
          <a
            href="https://google.com"
            class="px-3 py-2 rounded-md text-sm text-base"
          >
            Work
          </a>
          <a
            href="https://google.com"
            class="px-3 py-2 rounded-md text-sm text-base"
          >
            About
          </a>
          <a
            href="https://google.com"
            class="px-3 py-2 rounded-md text-sm text-base"
          >
            Experiments
          </a>
          <a
            href="https://google.com"
            class="px-3 py-2 rounded-md text-sm text-base"
          >
            Writing
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Navbar',
})
</script>
