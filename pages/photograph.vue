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
      <!-- <section class="unsplash-section">
        <h2 class="text-5xl font-black py-10">
          My photos on <a class="link link-active" href="https://unsplash.com/@salescreations" target="_blank">Unsplash</a>
        </h2>
        <div class="gallery" :style="`--column-gutter: ${gutter}; --columns: ${numberColumn}`">
          <div v-for="(columns, key) in payload" :key="key" class="gallery__column" :style="`--row-gutter: ${gutter}`">
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
      </section> -->
    </main>
  </div>
</template>