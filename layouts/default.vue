<template>
  <div id="default-layout" class="container mx-auto lg:px-48">
    <Navbar />

    <Nuxt />

    <Footer :image="$route.name === 'index'" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LayoutDefault',
})
</script>
