<template>
  <nav>
    <div class="container mx-auto py-2 flex flex-wrap items-center md:flex-no-wrap">
      <div class="mr-4 md:mr-8">
        <NuxtLink
          to="/"
          rel="home"
          aria-label="link home"
          @mouseover.native="brandHover = true"
          @mouseleave.native="brandHover = false"
        >
          <Logo :class="`${brandHover ? 'hidden' : 'block'}`" alt="Brand Sales//Creations" />
          <img
            :class="`brand-gif ${brandHover ? 'block' : 'hidden'}`"
            src="@/assets/images/gif-hover.gif"
            width="36"
            height="36"
            alt="Brand Sales//Creations gif"
          />
        </NuxtLink>
      </div>
      <!-- NAVIGATION DESKTOP -->
      <div class="hidden sm:block ml-auto">
        <div class="flex space-x-10">
          <NuxtLink to="/work" class="link rounded-md text-sm text-base"> Work </NuxtLink>
          <NuxtLink to="/about" class="link rounded-md text-sm text-base"> About </NuxtLink>
          <NuxtLink to="/experiments" class="link rounded-md text-sm text-base"> Experiments </NuxtLink>
          <NuxtLink to="/writing" class="link rounded-md text-sm text-base"> Writing </NuxtLink>
        </div>
      </div>
      <!-- NAVIGATION MOBILE -->
      <div class="ml-auto sm:hidden">
        <button
          type="button"
          class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-expanded="false"
          @click="dropdowNav = !dropdowNav"
        >
          <span class="sr-only">Open menu</span>
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
    <div :class="`dropdow-nav bg-white w-100 sm:hidden ${dropdowNav ? 'active' : ''}`">
      <div class="flex flex-col">
        <NuxtLink to="/" class="link rounded-md text-sm text-base my-2" @click.native="dropdowNav = false"> Home </NuxtLink>
        <NuxtLink to="/work" class="link rounded-md text-sm text-base my-2" @click.native="dropdowNav = false"> Work </NuxtLink>
        <NuxtLink to="/about" class="link rounded-md text-sm text-base my-2" @click.native="dropdowNav = false"> About </NuxtLink>
        <NuxtLink to="/experiments" class="link rounded-md text-sm text-base my-2" @click.native="dropdowNav = false">
          Experiments
        </NuxtLink>
        <NuxtLink to="/writing" class="link rounded-md text-sm text-base my-2" @click.native="dropdowNav = false">
          Writing
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Navbar',
  data: () => ({
    dropdowNav: false,
    brandHover: false,
  }),
})
</script>

<style scoped>
a.nuxt-link-active::after {
  content: ' ';
  display: block;
  position: absolute;
  top: 70%;
  right: 0;
  bottom: 0;
  left: 0;
  inset: 70% 0 0 0;
  background: #ffd600;
  z-index: -1;
}
a.nuxt-link-active {
  position: relative;
}
.dropdow-nav {
  opacity: 0;
  transition: 0.3s;
  display: none;
}
.dropdow-nav.active {
  opacity: 1;
  transition: 0.3s;
  display: block;
}
.brand-gif {
  animation: 0.6s appear;
  margin: auto;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
@media print {
  nav {
    display: none;
  }
}
</style>
