<template>
  <div id="banner-cta" class="p-10 rounded border border-black md:flex items-center">
    <h3 class="banner-title text-4xl font-bold leading-none flex-grow mb-5 md:mb-auto">Download my resume</h3>
    <a href="/cv-rafael-en.pdf" @click="openResume" class="link flex button-more">
      Download my resume
      <svg class="ArrowRightAlt" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z" fill="#000000" />
      </svg>
    </a>
  </div>
</template>

<script setup>
const openResume = () => {
  analytics.track('open_my_resume', {
    openResume: true,
  })
}

</script>

<style scoped>
.button-more {
  max-width: max-content;
}
</style>
