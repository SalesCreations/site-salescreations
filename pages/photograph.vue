<template>
  <div id="photograph-page">
    <Header title="Photograph" img="image-header-about.png" />
    <main>
      <section class="description-section">
        <p>
          I'm <strong>Rafael Sales</strong> but you can call me <strong>'Sales'</strong>, a year-old product designerand front-end
          developer who is very fond of co-creating solutions to complex day-to-day problems, uniting technology and design that
          are my two passions.
        </p>
      </section>
      <section class="finish-section pt-20 pb-10">
        <ElementSalesCreations />
      </section>

      <section class="unsplash-section">
        <h2 class="text-5xl font-black py-10">My Photos</h2>
        <div class="gallery" :style="`--column-gutter: ${gutter}; --columns: ${numberColumn}`">
          <div v-for="(columns, key) in payload" :key="key" class="gallery__column" :style="`--row-gutter: ${gutter}`">
            <a v-for="photo in columns" :key="`photo-${photo.id}`" :href="photo.links.html" target="_blank" class="gallery__link">
              <figure class="gallery__thumb">
                <img :src="photo.urls.regular" :alt="`Photo by ${photo.user.name}`" class="gallery__image" />
                <figcaption class="gallery__caption">Photo by {{ photo.user.name }}</figcaption>
              </figure>
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import Vue from 'vue'

export default Vue.extend({
  name: 'PhotographPage',
  data: () => ({
    numberColumn: 3,
    gutter: '14px', // 24px
  }),
  async fetch({ store, error }) {
    try {
      await store.dispatch('photos/fetchPhotos')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time, please try again',
      })
    }
  },
  head() {
    return {
      title: 'My Photographs',
      description: 'Lorem',
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'My Photographs',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Lorem',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: require('@/assets/images/thumbnail-site.png'),
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'My Photographs',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'My Photographs',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Lorem',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: require('@/assets/images/thumbnail-site.png'),
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: require('@/assets/images/thumbnail-site.png'),
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Sales//Creations - Creative Emotion',
        },
      ],
    }
  },
  computed: mapState({
    photos: (state: any) => state.photos.photos,
    payload(): any[] {
      const resp: any[] = []
      this.photos.map((photo: any, index: number) => {
        const col = index % this.numberColumn
        if (resp[col]) {
          resp[col].push(photo)
        } else {
          resp[col] = [photo]
        }
        return {}
      })
      return resp
    },
  }),
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
</style>