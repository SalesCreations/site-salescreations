<template>
  <div id="photograph-page">
    <SharedHeader title="Photograph" img="image-header-photograph.png" />
    <main>
      <section class="description-section">
        <p>
          I remember when I was a child, my mother let me take the family photography camera to take pictures of my first two
          trips together with school. It was a basic photographic film camera and I remember her buying the films with 24 poses
          😂. I didn't have the digital 'preview' and I only knew how the photo turned out when it was developed. When I started
          my graduation, I had the photography subject teaching the basics and its aspects and in recent years, my passion for
          registering moments has only increased.
        </p>
      </section>
      <section class="unsplash-section">
        <h2 class="text-5xl font-black py-10">
          My photos on <a class="link link-active" href="https://unsplash.com/@salescreations" target="_blank">Unsplash</a>
        </h2>
        <div class="gallery" :style="`--column-gutter: ${gutter}; --columns: ${numberColumn}`">
          <div v-for="(columns, key) in photos" :key="key" class="gallery__column" :style="`--row-gutter: ${gutter}`">
            <a v-for="photo in columns" :key="`photo-${photo.id}`" :href="photo.links.html" target="_blank" class="gallery__link">
              <figure class="gallery__thumb bg-gray-500">
                <img
                  :src="photo.urls.regular"
                  :height="photo.height"
                  :width="photo.width"
                  :alt="`Photo by ${photo.user.name}`"
                  loading="lazy"
                  class="gallery__image"
                />
                <figcaption class="gallery__caption">Photo by {{ photo.user.name }}</figcaption>
              </figure>
            </a>
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
  title: 'Photographs with SalesCreations',
  meta: [
    {
      name: 'description',
      content: "xxxx"
    },
    {
      property: 'og:site_name',
      content: 'SalesCreations',
    },
    {
      property: 'og:title',
      content: 'Photographs with SalesCreations',
    },
    {
      property: 'og:description',
      content: "xxxx"
    },
    {
      property: 'og:url',
      content: "https://salescreations.com.br"
    },
    {
      property: 'og:article',
      content: "webise"
    },
    {
      property: 'og:image',
      content: "./thumbnail-site.png"
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      property: 'twitter:image',
      content: "./thumbnail-site.png"
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

const config = useRuntimeConfig();
const numberColumn = 3
const gutter = '14px' // 24px
const url = 'https://api.unsplash.com/users/salescreations/photos';

// =======================
// Request Unsplash API and generate 'photos'
// =======================

const options = {
  server: false,
  headers: { 
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    params: {
      client_id: config.public.unsplashKey,
      per_page: 28,
    },
}
const { data } = await useLazyAsyncData('photos_lazy', () => {
  return $fetch(url, options);
})

// Mounting gallery equal position design "unsplash"
// =======================

const photos = computed({
  get() {
    if(data.value) {
      let resp = []
      data.value.map((photo, index) => {
        let col = index % numberColumn
        if (resp[col]) {
          resp[col].push(photo)
        } else {
          resp[col] = [photo]
        }    
      })
      return resp
    }
  },
})
</script>

<style lang="postcss">
.gallery {
  display: grid;
  grid-column-gap: var(--column-gutter);
  align-items: start;
  grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
}
.gallery__column {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  row-gap: var(--row-gutter);
}
.gallery:hover .gallery__image {
  filter: grayscale(1);
}
.gallery__link {
  margin: 2px;
  overflow: hidden;
}
.gallery__link:hover .gallery__image {
  filter: grayscale(0);
}
.gallery__link:hover .gallery__caption {
  opacity: 1;
}
.gallery__thumb {
  position: relative;
}
.gallery__thumb img {
  animation: 1s appear;
}
.gallery__image {
  display: block;
  width: 100%;
  transition: 0.3s;
}
.gallery__image:hover {
  transform: scale(1.1);
}
.gallery__caption {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 25px 15px 15px;
  width: 100%;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  color: white;
  opacity: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
  transition: 0.3s;
}
.link-active::after {
  content: ' ';
  display: block;
  position: absolute;
  top: 70%;
  right: 0;
  bottom: 0;
  left: 0;
  background: #ffd600;
  z-index: -1;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>