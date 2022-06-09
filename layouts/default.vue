<template>
  <div id="default-layout" class="container mx-auto px-8 lg:px-48">
    <Navbar />

    <Nuxt />

    <ButtonScroll />
    <Footer :image="$route.name === 'index'" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/shared/Navbar.vue'
import ButtonScroll from '~/components/buttons/ButtonScroll.vue'

export default Vue.extend({
  name: 'LayoutDefault',
  components: {
    Navbar,
    ButtonScroll,
  },
})
</script>
