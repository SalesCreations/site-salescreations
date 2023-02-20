<template>
  <button v-if="scrollpx > 200" class="link flex button-scroll-up" @click="scrollToTop">
    <svg class="HandScrollTop" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M36.4167 30.6666L38.0842 8.17451C38.1747 7.12204 37.8482 6.07613 37.175 5.26204C36.5019 4.44794 35.5359 3.9308 34.4852 3.82198C33.4344 3.71316 32.383 4.02138 31.5573 4.68025C30.7316 5.33911 30.1977 6.29592 30.0706 7.3446L28.75 17.2499"
        stroke="black"
        stroke-width="3.83333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.3334 28.7501V23.0001C15.3334 21.9834 14.9295 21.0084 14.2107 20.2895C13.4918 19.5706 12.5167 19.1667 11.5001 19.1667C10.4834 19.1667 9.50839 19.5706 8.78951 20.2895C8.07062 21.0084 7.66675 21.9834 7.66675 23.0001V30.6667"
        stroke="black"
        stroke-width="3.83333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.9999 24.9166V22.0416C22.9999 21.0249 22.596 20.0499 21.8772 19.331C21.1583 18.6121 20.1832 18.2083 19.1666 18.2083C18.1499 18.2083 17.1749 18.6121 16.456 19.331C15.7371 20.0499 15.3333 21.0249 15.3333 22.0416V28.7499"
        stroke="black"
        stroke-width="3.83333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30.6667 24.9167V21.0833C30.6667 20.0667 30.2628 19.0916 29.5439 18.3728C28.825 17.6539 27.85 17.25 26.8333 17.25C25.8167 17.25 24.8416 17.6539 24.1228 18.3728C23.4039 19.0916 23 20.0667 23 21.0833V24.9167"
        stroke="black"
        stroke-width="3.83333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M36.4167 30.6667C35.3894 38.3334 29.9806 42.1667 22.0417 42.1667C14.1029 42.1667 7.66675 38.3334 7.66675 30.6667"
        stroke="black"
        stroke-width="3.83333"
      />
      <path
        d="M26.243 32.5834H21.0833C20.0667 32.5834 19.0916 32.1795 18.3728 31.4607C17.6539 30.7418 17.25 29.7667 17.25 28.7501C17.25 27.7334 17.6539 26.7584 18.3728 26.0395C19.0916 25.3206 20.0667 24.9167 21.0833 24.9167H28.75C32.9858 24.9167 37.375 28.7501 35.4583 34.5001"
        stroke="black"
        stroke-width="3.83333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script setup>
const scrollpx = ref(0);

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
function handleScroll() {
  scrollpx.value = window.scrollY;
}

// watch(scrollpx, ( newValue, oldValue ) => {
//   triggerLog(newValue);
// })
</script>

<style scoped>
.button-scroll-up {
  width: 46px;
  height: 46px;
  position: fixed;
  bottom: 20px;
  right: 30px;
  opacity: 0.3;
}
.button-scroll-up:hover {
  opacity: 1;
}
</style>
