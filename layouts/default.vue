<template>
  <div id="default-layout" class="container mx-auto px-8 lg:px-48 2xl:px-80">
    <SharedNavbar />
    <slot />
    <ButtonsButtonScroll />    
    <SharedFooter :image="$route.name === 'index'" />
  </div>
</template>

