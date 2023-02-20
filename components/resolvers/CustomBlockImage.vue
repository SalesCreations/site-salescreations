<template>
  <div>
    <!-- <img :src="src" :alt="alt" :title="title" class="cursor-pointer" @click="showModal(`${src}`)" /> -->
    <!-- The Modal -->
    <!-- <div ref="modal" class="w-full h-full bg-gray-900 bg-opacity-50 top-0 fixed sticky-0 right-0 hidden z-50">
      <div class="2xl:container 2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center bg-opacity-100">
        <div class="w-9/12 md:w-9/12 dark:bg-gray-800 relative flex flex-col justify-center items-center bg-white">
          <button 
            type="button"
            class="absolute rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            style="bottom: 2%"
            @click="closeModal()"
          >
            Close
          </button>
          <img ref="modal-img" class="w-full h-full object-cover" />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
// import { defineComponent, ref } from '@vue/composition-api';
// import { ImageAttributes } from '@marvr/storyblok-rich-text-types';

// export default defineComponent({
//   name: 'CustomBlockImage',
//   props: {
//     attrs: {
//       type: Object as () => ImageAttributes,
//       required: true,
//     },
//   },
//   setup({ attrs }) {
//     const src = ref(attrs.src);
//     const alt = ref(attrs.alt);
//     const title = ref(attrs.title);

//     return {
//       src,
//       alt,
//       title,
//     };
//   },
//   methods: { 
//     showModal(src: string) {
//       let modal: any = this.$refs['modal'];
//       let modalImg: any = this.$refs['modal-img'];
//       modal.classList.remove('hidden');
//       modalImg.src = src;
//     },
//     closeModal(src: string) {
//       let modal: any = this.$refs['modal'];  
//       modal.classList.add('hidden');
//     }
//   },
// });
</script>