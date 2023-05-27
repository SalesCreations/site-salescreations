<template>
  <div id="show-writing" v-editable="post">
    <header class="header grid gap-4 grid-cols-10 py-10">
      <div class="col-span-10 flex flex-col flex-wrap content-center">
        <h1 class="text-4xl md:text-5xl font-black mb-2">{{ post.content.title }}</h1>
        <div class="area-post-info flex items-center mb-6">
          <img class="rounded-full h-7 w-7" src="@/assets/images/avatar-rafael.jpg" alt="avatar author" width="22" height="22" />
          <span class="ml-1 bold text-xs sm:text-base">Rafael Sales</span>
          <span class="ml-2 sm:ml-3 bold text-gray-500 font-light flex-grow text-xs sm:text-base">
            {{ $dayjs(post.first_published_at).format('MMM DD, YYYY') }} 
            <!-- •  -->
            <!-- {{ time.text }} -->
          </span>
          <svg
            class="cursor-pointer action-post hidden sm:block"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="printPage()"
          >
            <path
              d="M15.752 3C16.0475 3 16.3401 3.0582 16.613 3.17127C16.886 3.28434 17.1341 3.45008 17.343 3.65901C17.5519 3.86794 17.7177 4.11598 17.8307 4.38896C17.9438 4.66194 18.002 4.95453 18.002 5.25V6.003H18.752C19.614 6.00353 20.4405 6.34604 21.0502 6.95537C21.6599 7.56469 22.0029 8.39103 22.004 9.253L22.007 15.25C22.0071 15.5453 21.9491 15.8378 21.8362 16.1107C21.7233 16.3836 21.5577 16.6316 21.349 16.8406C21.1402 17.0495 20.8924 17.2153 20.6196 17.3284C20.3468 17.4416 20.0543 17.4999 19.759 17.5H18V18.75C18 19.3467 17.7629 19.919 17.341 20.341C16.919 20.7629 16.3467 21 15.75 21H8.25C7.65326 21 7.08097 20.7629 6.65901 20.341C6.23705 19.919 6 19.3467 6 18.75V17.5H4.25C3.65326 17.5 3.08097 17.2629 2.65901 16.841C2.23705 16.419 2 15.8467 2 15.25V9.254C2 8.39205 2.34241 7.5654 2.9519 6.9559C3.5614 6.34641 4.38805 6.004 5.25 6.004L5.999 6.003L6 5.25C6 4.65326 6.23705 4.08097 6.65901 3.65901C7.08097 3.23705 7.65326 3 8.25 3H15.752V3ZM15.75 13.5H8.25C8.05109 13.5 7.86032 13.579 7.71967 13.7197C7.57902 13.8603 7.5 14.0511 7.5 14.25V18.75C7.5 19.164 7.836 19.5 8.25 19.5H15.75C15.9489 19.5 16.1397 19.421 16.2803 19.2803C16.421 19.1397 16.5 18.9489 16.5 18.75V14.25C16.5 14.0511 16.421 13.8603 16.2803 13.7197C16.1397 13.579 15.9489 13.5 15.75 13.5V13.5ZM18.752 7.504H5.25C4.78587 7.504 4.34075 7.68837 4.01256 8.01656C3.68437 8.34475 3.5 8.78987 3.5 9.254V15.25C3.5 15.664 3.836 16 4.25 16H6V14.25C6 13.6533 6.23705 13.081 6.65901 12.659C7.08097 12.2371 7.65326 12 8.25 12H15.75C16.3467 12 16.919 12.2371 17.341 12.659C17.7629 13.081 18 13.6533 18 14.25V16H19.783C19.9773 15.9935 20.1614 15.9117 20.2965 15.772C20.4316 15.6322 20.5071 15.4454 20.507 15.251L20.504 9.254C20.5029 8.78985 20.318 8.34504 19.9896 8.01702C19.6612 7.68901 19.2162 7.50453 18.752 7.504V7.504ZM15.752 4.5H8.25C8.05109 4.5 7.86032 4.57902 7.71967 4.71967C7.57902 4.86032 7.5 5.05109 7.5 5.25L7.499 6.003H16.502V5.25C16.502 5.05109 16.423 4.86032 16.2823 4.71967C16.1417 4.57902 15.9509 4.5 15.752 4.5V4.5Z"
              fill="black"
            />
          </svg>
        </div>
        <div class="image-post" :style="`background-image: url('${post.content.image}')`" />
      </div>
    </header>
    <main>
      <section class="show-writing-section">
        <!-- <article id="writing-content" v-html="articleContent"></article> -->
        <article id="writing-content" v-editable="post">
          <Vue3RuntimeTemplate :template="resolvedRichText"></Vue3RuntimeTemplate>
        </article>
      </section>
    </main>
  </div>
</template>

<script setup>
import 'highlight.js/styles/base16/dracula.css'
import dayjs from 'dayjs';
import hljs from 'highlight.js';
import cloneDeep from 'clone-deep';
import Vue3RuntimeTemplate from 'vue3-runtime-template';

// =======================
// initialization variables
// =======================

const isDev = process.env.NODE_ENV === 'development';
const route = useRoute();
const config = useRuntimeConfig();
const url = `https://api.storyblok.com/v2/cdn/stories/${route.path}`;

let post = ref({});

// =======================
// Request Storyblok API and generate 'post'
// =======================

const options = {
  server: isDev ? true : false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
    version: isDev ? 'draft' : 'published',
    token: config.public.accessTokenSb,
  },
}
const { data, pending, error, refresh } = await useFetch(url, options);
post = data.value.story;


// Generate Article content
const mySchema = cloneDeep(RichTextSchema); // you can make a copy of the default RichTextSchema
const resolvedRichText = computed(() => renderRichText(post.content.article, {
  schema: mySchema,
  resolver: (component, blok) => {
    switch (component) {
      case 'IframeSpotify':
        return `<component :body='${JSON.stringify(blok)}' is="Shared${component}" />`
        break;
      default:
        return 'Resolver not defined'
    };
  },
}))

// =======================
// Define Highlight
// =======================

onMounted(() => {
  document.querySelectorAll('pre > code').forEach(el => {
    hljs.highlightElement(el);
  });
})

// =======================
// General methos
// =======================

// Function Print Page
const printPage = () => {
  window.print()
}

// initialization time read
// const readingTime = require('reading-time');
// let time = { "text": "", "minutes": 0, "time": 0, "words": 0 };
// time = readingTime(articleContent);

// =======================
// <Head> define meta tags
// =======================

useHead({
  title: post?.content.title,
  meta: [
    {
      name: 'description',
      content: () => post?.content.intro
    },
    {
      property: 'og:site_name',
      content: 'SalesCreations',
    },
    {
      property: 'og:title',
      content: () => post?.content.title,
    },
    {
      property: 'og:description',
      content: () => post?.content.intro
    },
    {
      property: 'og:article',
      content: "article"
    },
    {
      property: 'og:image',
      content: () => post?.content.image
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      property: 'twitter:image',
      content: () => post?.content.image
    },
    {
      property: 'twitter:site',
      content: '@SalesUnited'
    },
  ]
})
</script>

<style lang="postcss">
.image-post {
  width: 100%;
  height: 268.031px;
  background-color: gainsboro;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: 1s appear;
  margin: auto;
  print-color-adjust: exact;
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
#writing-content img:not(.object-cover) {
  @apply my-20;
  @apply px-10;
  @apply w-full;
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
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
  -moz-print-color-adjust: exact;
}
#writing-content pre code {
  @apply rounded;
  print-color-adjust: exact;
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
  list-style: disc;
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
