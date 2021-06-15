<template>
  <div id="show-writing">
    <header class="header grid gap-4 grid-cols-10 py-10">
      <div class="col-span-10 flex flex-col flex-wrap content-center">
        <h1 class="text-4xl md:text-5xl font-black mb-2">{{ post.title }}</h1>
        <div class="area-post-info flex items-center mb-6">
          <img class="rounded-full h-7 w-7" src="@/assets/images/avatar-rafael.jpg" alt="avatar author" width="22" height="22" />
          <span class="ml-1 bold text-xs sm:text-base">Rafael Sales</span>
          <span class="ml-2 sm:ml-3 bold text-gray-500 font-light flex-grow text-xs sm:text-base"
            >{{ $dayjs(post.datetime).format('MMM DD, YYYY') }} • {{ time.text }}
          </span>
          <svg
            class="cursor-pointer action-post hidden sm:block"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="printPage"
          >
            <path
              d="M15.752 3C16.0475 3 16.3401 3.0582 16.613 3.17127C16.886 3.28434 17.1341 3.45008 17.343 3.65901C17.5519 3.86794 17.7177 4.11598 17.8307 4.38896C17.9438 4.66194 18.002 4.95453 18.002 5.25V6.003H18.752C19.614 6.00353 20.4405 6.34604 21.0502 6.95537C21.6599 7.56469 22.0029 8.39103 22.004 9.253L22.007 15.25C22.0071 15.5453 21.9491 15.8378 21.8362 16.1107C21.7233 16.3836 21.5577 16.6316 21.349 16.8406C21.1402 17.0495 20.8924 17.2153 20.6196 17.3284C20.3468 17.4416 20.0543 17.4999 19.759 17.5H18V18.75C18 19.3467 17.7629 19.919 17.341 20.341C16.919 20.7629 16.3467 21 15.75 21H8.25C7.65326 21 7.08097 20.7629 6.65901 20.341C6.23705 19.919 6 19.3467 6 18.75V17.5H4.25C3.65326 17.5 3.08097 17.2629 2.65901 16.841C2.23705 16.419 2 15.8467 2 15.25V9.254C2 8.39205 2.34241 7.5654 2.9519 6.9559C3.5614 6.34641 4.38805 6.004 5.25 6.004L5.999 6.003L6 5.25C6 4.65326 6.23705 4.08097 6.65901 3.65901C7.08097 3.23705 7.65326 3 8.25 3H15.752V3ZM15.75 13.5H8.25C8.05109 13.5 7.86032 13.579 7.71967 13.7197C7.57902 13.8603 7.5 14.0511 7.5 14.25V18.75C7.5 19.164 7.836 19.5 8.25 19.5H15.75C15.9489 19.5 16.1397 19.421 16.2803 19.2803C16.421 19.1397 16.5 18.9489 16.5 18.75V14.25C16.5 14.0511 16.421 13.8603 16.2803 13.7197C16.1397 13.579 15.9489 13.5 15.75 13.5V13.5ZM18.752 7.504H5.25C4.78587 7.504 4.34075 7.68837 4.01256 8.01656C3.68437 8.34475 3.5 8.78987 3.5 9.254V15.25C3.5 15.664 3.836 16 4.25 16H6V14.25C6 13.6533 6.23705 13.081 6.65901 12.659C7.08097 12.2371 7.65326 12 8.25 12H15.75C16.3467 12 16.919 12.2371 17.341 12.659C17.7629 13.081 18 13.6533 18 14.25V16H19.783C19.9773 15.9935 20.1614 15.9117 20.2965 15.772C20.4316 15.6322 20.5071 15.4454 20.507 15.251L20.504 9.254C20.5029 8.78985 20.318 8.34504 19.9896 8.01702C19.6612 7.68901 19.2162 7.50453 18.752 7.504V7.504ZM15.752 4.5H8.25C8.05109 4.5 7.86032 4.57902 7.71967 4.71967C7.57902 4.86032 7.5 5.05109 7.5 5.25L7.499 6.003H16.502V5.25C16.502 5.05109 16.423 4.86032 16.2823 4.71967C16.1417 4.57902 15.9509 4.5 15.752 4.5V4.5Z"
              fill="black"
            />
          </svg>
          <div class="relative inline-block text-left">
            <svg
              class="cursor-pointer action-post"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click="socialShare = !socialShare"
            >
              <path
                d="M15.75 9.25001C15.9312 9.25001 16.1063 9.31565 16.2429 9.43477C16.3795 9.5539 16.4684 9.71845 16.493 9.89801L16.5 10V15.25C16.5 15.9503 16.2329 16.6242 15.7531 17.1343C15.2733 17.6444 14.617 17.9522 13.918 17.995L13.75 18H6.25C5.54971 18 4.87579 17.7329 4.3657 17.2531C3.85561 16.7733 3.54778 16.117 3.505 15.418L3.5 15.25V10C3.50006 9.80998 3.57224 9.62707 3.70197 9.48822C3.8317 9.34937 4.0093 9.26493 4.19888 9.25198C4.38846 9.23903 4.57589 9.29852 4.7233 9.41844C4.87071 9.53836 4.9671 9.70976 4.993 9.89801L5 10V15.25C5 15.897 5.492 16.43 6.122 16.494L6.25 16.5H13.75C14.0593 16.4999 14.3576 16.3851 14.5871 16.1779C14.8167 15.9707 14.9613 15.6857 14.993 15.378L15 15.25V10C15 9.80109 15.079 9.61033 15.2197 9.46968C15.3603 9.32903 15.5511 9.25001 15.75 9.25001ZM5.227 6.46201L9.47 2.22001C9.59699 2.09299 9.76534 2.01576 9.94445 2.00236C10.1236 1.98897 10.3015 2.04029 10.446 2.14701L10.53 2.22001L14.773 6.46201C14.9089 6.59545 14.989 6.7756 14.9969 6.96591C15.0048 7.15621 14.9401 7.34241 14.8158 7.48671C14.6914 7.63101 14.5169 7.7226 14.3275 7.7429C14.1381 7.7632 13.9481 7.71068 13.796 7.59601L13.712 7.52301L10.75 4.56001V12.25C10.75 12.4312 10.6844 12.6063 10.5652 12.7429C10.4461 12.8795 10.2816 12.9684 10.102 12.993L10 13C9.81876 13 9.64366 12.9344 9.50707 12.8152C9.37048 12.6961 9.28165 12.5316 9.257 12.352L9.25 12.25V4.56001L6.288 7.52301C6.16095 7.65029 5.9924 7.72768 5.81307 7.74108C5.63373 7.75448 5.45555 7.70299 5.311 7.59601L5.227 7.52301C5.09972 7.39596 5.02233 7.22741 5.00893 7.04807C4.99553 6.86874 5.04701 6.69056 5.154 6.54601L5.227 6.46201L9.47 2.22001L5.227 6.46201Z"
                fill="black"
              />
            </svg>
            <div
              class="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              :class="`${socialShare ? 'dropdown-on' : 'dropdown-off'}`"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <ShareNetwork
                  v-for="network in networks"
                  :key="network.network"
                  class="link text-gray-700 block px-4 pt-2 pb-1 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  :network="network.network"
                  :url="sharing.url"
                  :title="post.title"
                  :description="post.resume"
                  :twitter-user="sharing.twitter"
                >
                  <span>{{ network.name }}</span>
                </ShareNetwork>
              </div>
            </div>
          </div>
        </div>
        <div class="image-post" :style="`background-image: url('${post.imagePost.url}')`" />
      </div>
    </header>
    <main>
      <section class="show-writing-section">
        <article id="writing-content" v-html="$md.render(post.contents)" />
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import Vue from 'vue'
const readingTime = require('reading-time')

export default Vue.extend({
  name: 'ShowWriting',
  data: () => ({
    time: 0,
    socialShare: false,
    sharing: {
      url: '#',
      twitter: 'SalesUnited',
    },
    networks: [
      { network: 'facebook', name: 'Facebook' },
      { network: 'linkedin', name: 'LinkedIn' },
      { network: 'twitter', name: 'Twitter' },
      { network: 'whatsapp', name: 'Whatsapp' },
      { network: 'telegram', name: 'Telegram' },
      { network: 'email', name: 'Email' },
    ],
  }),
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('posts/fetchPost', params.slug)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time, please try again',
      })
    }
  },
  head() {
    return {
      title: this.post.title,
      description: this.post.resume,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.resume,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.post.imagePost.url,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.post.title,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.resume,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.post.imagePost.url,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.post.imagePost.url,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.post.title,
        },
      ],
    }
  },
  computed: mapState({
    post: (state: any) => state.posts.post,
  }),
  created() {
    this.time = readingTime(this.post.contents)
  },
  mounted() {
    this.sharing.url = window.location.href
  },
  methods: {
    printPage() {
      window.print()
    },
  },
})
</script>

<style>
.image-post {
  width: 100%;
  height: 268.031px;
  background-color: gainsboro;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: 1s appear;
  margin: auto;
  color-adjust: exact;
  -webkit-print-color-adjust: exact;
  -moz-print-color-adjust: exact;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
.dropdown-off {
  transform: scale(0);
  opacity: 0;
  transition: 0.3s;
}
.dropdown-on {
  transform: scale(1);
  opacity: 1;
  transition: 0.3s;
}
#writing-content h2 {
  @apply font-serif;
  @apply font-bold;
  @apply text-3xl;
  @apply mt-10;
  @apply mb-5;
}
#writing-content p,
#writing-content ul {
  @apply font-serif;
  @apply text-lg;
  @apply text-gray-800;
  @apply tracking-wide;
  @apply mb-5;
}
#writing-content img {
  @apply my-20;
  @apply px-10;
}
#writing-content blockquote {
  position: relative;
  z-index: 600;
  margin: 30px 0 0 0;
  font-size: 20px;
  font-style: italic;
  line-height: 1.4 !important;
  font-family: 'Roboto Slab', serif;
  z-index: 0 !important;
}
#writing-content blockquote p {
  @apply font-bold;
  @apply text-2xl;
  position: relative;
  margin-bottom: 20px;
  z-index: 1;
}
#writing-content blockquote p:first-child:before {
  @apply text-gray-200;
  content: '\201C';
  font-size: 6em;
  font-weight: 700;
  opacity: 1;
  position: absolute;
  top: -0.35em;
  left: -0.25em;
  text-shadow: none;
  z-index: -1;
}
#writing-content pre {
  @apply my-8;
  color-adjust: exact;
  -webkit-print-color-adjust: exact;
  -moz-print-color-adjust: exact;
}
#writing-content pre code {
  @apply rounded;
  color-adjust: exact;
  -webkit-print-color-adjust: exact;
  -moz-print-color-adjust: exact;
}
#writing-content a {
  @apply text-blue-600;
  @apply underline;
}
#writing-content ul {
  @apply list-disc;
  @apply list-inside;
  @apply pl-4;
  @apply my-10;
}
#writing-content ul li {
  @apply mb-3;
}
.action-post:hover {
  transform: scale(1.09);
}
@media (min-width: 768px) {
  #writing-content ul {
    @apply pl-10;
  }
}
@media print {
  .comments-section,
  .action-post {
    display: none;
  }
}
</style>
