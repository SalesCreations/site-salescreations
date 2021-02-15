<template>
  <nav>
    <div
      class="container mx-auto py-2 flex flex-wrap items-center md:flex-no-wrap"
    >
      <div class="mr-4 md:mr-8">
        <NuxtLink to="/" rel="home">
          <Logo />
        </NuxtLink>
      </div>
      <div class="hidden sm:block ml-auto">
        <div class="flex space-x-4">
          <NuxtLink
            to="/work"
            class="px-3 py-2 rounded-md text-sm text-base"
            :class="{ active: true }"
          >
            Work
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="px-3 py-2 rounded-md text-sm text-base"
            :class="{ active: true }"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/experiments"
            class="px-3 py-2 rounded-md text-sm text-base"
            :class="{ active: true }"
          >
            Experiments
          </NuxtLink>
          <NuxtLink
            to="/writing"
            class="px-3 py-2 rounded-md text-sm text-base"
            :class="{ active: true }"
          >
            Writing
          </NuxtLink>
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
