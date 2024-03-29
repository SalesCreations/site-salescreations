<template>
  <nav>
    <div class="container mx-auto py-2 flex flex-wrap items-center md:flex-no-wrap">
      <div class="mr-4 md:mr-8">
        <NuxtLink :to="localePath('/')" rel="home" aria-label="link home" class="brand-link">
          <SharedLogo width="33" height="33" alt="Brand Sales//Creations" />
        </NuxtLink>
      </div>
      <!-- NAVIGATION DESKTOP -->
      <div class="hidden sm:block ml-auto">
        <div class="flex">
          <div class="pages flex space-x-10">
            <NuxtLink :to="localePath('/work/')" class="link rounded-md text-base"> {{ $t('work') }} </NuxtLink>
            <NuxtLink :to="localePath('/about/')" class="link rounded-md text-base"> {{ $t('about') }} </NuxtLink>
            <NuxtLink :to="localePath('/experiments/')" class="link rounded-md text-base"> {{ $t('experiments') }} </NuxtLink>
            <NuxtLink :to="localePath('/photograph/')" class="link rounded-md text-base"> {{ $t('photograph') }} </NuxtLink>
            <NuxtLink :to="localePath('/writing/')" class="link rounded-md text-base"> {{ $t('writing') }} </NuxtLink>
          </div>
          <div class="language flex space-x-5 ml-8">
            <nuxt-link class="i18n" :to="!isArticleRegex.test(route.path) && !isWorkRegex.test(route.path) ? switchLocalePath('en') : null">
              <img src="@/assets/images/flags/britain-flag.svg" class="flag-img w-6 h-6" alt="english-flag" />
            </nuxt-link>
            <nuxt-link class="i18n" :to="!isArticleRegex.test(route.path) && !isWorkRegex.test(route.path) ? switchLocalePath('pt-br') : null">
              <img src="@/assets/images/flags/brazil-flag.svg" class="flag-img w-6 h-6" alt="brazil-flag" />
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- NAVIGATION MOBILE -->
      <div class="ml-auto sm:hidden">
        <button
          type="button"
          class="
            bg-white
            rounded-md
            p-2
            inline-flex
            items-center
            justify-center
            text-gray-400
            hover:text-gray-500 hover:bg-gray-100
            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500
          "
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
        <NuxtLink :to="localePath('/')" class="link rounded-md text-base my-2" @click="dropdowNav = false"> {{ $t('home') }} </NuxtLink>
        <NuxtLink :to="localePath('/work/')" class="link rounded-md text-base my-2" @click="dropdowNav = false"> {{ $t('work') }} </NuxtLink>
        <NuxtLink :to="localePath('/about/')" class="link rounded-md text-base my-2" @click="dropdowNav = false"> {{ $t('about') }} </NuxtLink>
        <NuxtLink :to="localePath('/experiments/')" class="link rounded-md text-base my-2" @click="dropdowNav = false"> {{ $t('experiments') }} </NuxtLink>
        <NuxtLink :to="localePath('/photograph/')" class="link rounded-md text-base my-2" @click="dropdowNav = false"> {{ $t('photograph') }} </NuxtLink>
        <NuxtLink :to="localePath('/writing/')" class="link rounded-md text-base my-2" @click="dropdowNav = false"> {{ $t('writing') }} </NuxtLink>
      </div>
      <div v-if="!isArticleRegex.test(route.path) && !isWorkRegex.test(route.path)" class="language flex space-x-5 mt-4">
        <nuxt-link class="i18n" :to="!isArticleRegex.test(route.path) && !isWorkRegex.test(route.path) ? switchLocalePath('en') : null">
          <img 
            src="@/assets/images/flags/britain-flag.svg" 
            class="flag-img w-8 h-8" 
            @click="dropdowNav = false"
            alt="english-flag"
          />
        </nuxt-link>
        <nuxt-link class="i18n" :to="!isArticleRegex.test(route.path) && !isWorkRegex.test(route.path) ? switchLocalePath('pt-br') : null">
          <img 
            src="@/assets/images/flags/brazil-flag.svg" 
            class="flag-img w-8 h-8" 
            @click="dropdowNav = false"
            alt="brazil-flag" 
          />
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useLocalePath, useSwitchLocalePath, useRoute } from '#imports'
// =======================
// initialization variables
// =======================

// i18n variables
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
let route = useRoute()
const { locale } = useI18n();

const isArticleRegex = new RegExp('\/(writing.+)+$');
const isWorkRegex = new RegExp('\/(work.+)+$');

// general variables
let dropdowNav = ref(false);
</script>

<style scoped>
.pages a.router-link-active::after {
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

.dropdow-nav.active {
  opacity: 1;
  transition: 0.3s;
  display: block;
}
a.i18n > img.flag-img {
  filter: grayscale(100%);
}
a.router-link-active.i18n > img.flag-img {
  filter: grayscale(0%);
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