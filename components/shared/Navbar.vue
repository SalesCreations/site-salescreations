<template>
  <nav>
    <div class="container mx-auto py-2 flex flex-wrap items-center md:flex-no-wrap">
      <div class="mr-4 md:mr-8">
        <NuxtLink to="/" rel="home">
          <Logo />
        </NuxtLink>
      </div>
      <div class="hidden sm:block ml-auto">
        <div class="flex space-x-10">
          <NuxtLink to="/work" class="link rounded-md text-sm text-base"> Work </NuxtLink>
          <NuxtLink to="/about" class="link rounded-md text-sm text-base"> About </NuxtLink>
          <NuxtLink to="/experiments" class="link rounded-md text-sm text-base"> Experiments </NuxtLink>
          <NuxtLink to="/writing" class="link rounded-md text-sm text-base"> Writing </NuxtLink>
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

<style scoped>
a.nuxt-link-active {
  background: #ffd600;
  border-radius: 0;
}
</style>
