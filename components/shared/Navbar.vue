<template>
  <nav>
    <div
      class="container mx-auto px-4 py-2 flex flex-wrap items-center md:flex-no-wrap"
    >
      <div class="mr-4 md:mr-8">
        <a href="#" rel="home">
          <svg
            class="w-10 h-10 text-purple-600"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>TailwindCSS</title>
            <path
              fill="currentColor"
              d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
            ></path>
          </svg>
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
