<template>
  <div id="experiments-page">
    <SharedHeader :title="$t('experiments')" img="image-header-experiments.png" />
    <main>
      <section class="description-section">
        <p v-html="$t('experimentsDescription')"></p>
      </section>
      <section class="github-section">
        <h2 class="text-5xl font-black py-10">{{ $t('reposPinnedGithub') }}</h2>
        <div class="grid gap-4 grid-cols-12">
          <div
            v-for="(repo, key) in userGitHub.user.pinnedItems.nodes"
            :key="`${key}_${repo.id}`"
            class="col-span-12 sm:col-span-6 md:col-span-4 flex flex-wrap content-center"
          >
            <CardsCardRepo :repo="repo" />
          </div>
        </div>
      </section>
      <section class="dribbble-section">
        <h2 class="text-5xl font-black py-10">{{ $t('latestProjectsOnDribbble') }}</h2>
        <div class="grid gap-4 grid-cols-12">
          <template v-for="(shot, key) in shots">
            <div
              v-if="key < 5"
              :key="`shot-${shot.id}`"
              class="col-span-12 sm:col-span-6 md:col-span-4 flex flex-wrap content-center"
            >
              <CardsCardShot :shot="shot" />
            </div>
          </template>
          <div
            class="col-span-12 sm:col-span-6 md:col-span-4 hidden sm:block"
            @mouseover="moreShotHover = true"
            @mouseleave="moreShotHover = false"
          >
            <div class="card-shot relative h-full w-full">
              <a href="https://dribbble.com/salescreations" target="_blank" rel="noreferrer">
                <div
                  class="flex justify-center flex-wrap content-center px-10 info-shot absolute h-full w-full bg-pink-400 cursor-pointer opacity-100 transition duration-500 ease-in-out"
                >
                  <div class="shot-info">
                    <svg
                      :class="`iconDribbble mb-3 mx-auto ${moreShotHover ? 'hidden' : 'block'}`"
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23 0C10.3021 0 0 10.3021 0 23C0 35.6979 10.3021 46 23 46C35.673 46 46 35.6979 46 23C46 10.3021 35.673 0 23 0ZM38.1915 10.6011C41.0233 14.0498 42.5904 18.3634 42.6324 22.8256C41.9846 22.701 35.4986 21.3785 28.9627 22.2027C28.8113 21.8768 28.6867 21.528 28.5372 21.1792C28.1308 20.2197 27.6987 19.2712 27.2416 18.3348C34.4751 15.3908 37.7679 11.1512 38.1915 10.6011ZM23 3.39442C27.9891 3.39442 32.5546 5.26317 36.0218 8.33175C35.673 8.83008 32.7041 12.7976 25.7197 15.4158C22.4997 9.50475 18.9347 4.66325 18.3847 3.91575C19.8975 3.56249 21.4464 3.38688 23 3.3925V3.39442ZM14.6433 5.23825C15.1666 5.93783 18.6587 10.8023 21.9267 16.5887C12.7458 19.0344 4.63833 18.9846 3.76625 18.9846C5.03892 12.8972 9.15592 7.83342 14.6433 5.23825ZM3.34267 23.0249V22.4269C4.19175 22.4518 13.7195 22.5764 23.5252 19.6324C24.0982 20.7307 24.6215 21.8519 25.1198 22.9751C24.8707 23.0498 24.5966 23.1246 24.3474 23.1993C14.2198 26.4672 8.83008 35.397 8.38158 36.1464C5.13745 32.546 3.34228 27.8713 3.34267 23.0249ZM23 42.6573C18.4594 42.6573 14.2696 41.1106 10.9518 38.5173C11.3007 37.7928 15.2912 30.1089 26.3676 26.243C26.4174 26.2181 26.4442 26.2181 26.4922 26.1932C29.2617 33.3519 30.383 39.3645 30.6839 41.0857C28.313 42.1092 25.7197 42.6573 23 42.6573ZM33.9518 39.2897C33.7525 38.0918 32.7041 32.3552 30.1338 25.2942C36.2959 24.3225 41.6837 25.9191 42.3583 26.1433C41.5093 31.6058 38.3659 36.3208 33.9518 39.2897Z"
                        fill="white"
                      />
                    </svg>

                    <span :class="`ml-auto text-white link flex button-more ${moreShotHover ? 'block' : 'hidden'}`">
                      See More Shots
                      <svg
                        class="ArrowRightAlt"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z" fill="white" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>  
</template>

<script setup>
// =======================
// <Head> define meta tags
// =======================

useHead({
  title: 'Experiments from SalesCreations',
  meta: [
    {
      name: 'description',
      content: "Here on the experiments page I want to share some of my side projects that I`m always developing within the design and development area."
    },
    {
      property: 'og:site_name',
      content: 'SalesCreations',
    },
    {
      property: 'og:title',
      content: 'Experiments from SalesCreations',
    },
    {
      property: 'og:description',
      content: "Here on the experiments page I want to share some of my side projects that I`m always developing within the design and development area."
    },
    {
      property: 'og:article',
      content: "webise"
    },
    {
      property: 'og:image',
      content: "https://res.cloudinary.com/salesunited93/image/upload/v1676817900/thumbnail-site_emx94f.png"
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      property: 'twitter:image',
      content: "https://res.cloudinary.com/salesunited93/image/upload/v1676817900/thumbnail-site_emx94f.png"
    },
    {
      property: 'twitter:site',
      content: '@SalesUnited'
    },
  ]
})

// =======================
// initialization variables
// =======================

let moreShotHover = ref(false);
const config = useRuntimeConfig();
const url = 'https://api.dribbble.com/v2/user/shots';

// =======================
// Request Dribbble API and generate 'shots'
// =======================

const options = {
  server: false,
  headers: { 
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${config.public.dribbbleToken}`,
  }
}
const { data: shots, pending, errors } = await useLazyAsyncData('shots_lazy', () => {
  return $fetch(url, options);
})

// =======================
// Request GitHub API in GraphQl and generate 'userGithbub'
// =======================

const { data: userGitHub } = await useAsyncGql({
  operation: 'user',
  variables: { limit: 5 }
});
</script>