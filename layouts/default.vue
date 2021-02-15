<template>
  <div id="default-layout" class="container mx-auto px-48">
    <Navbar />

    <Nuxt />

    <Footer :image="$route.name === 'index'" />
  </div>
</template>
