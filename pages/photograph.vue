<template>
  <div id="photograph-page">
    <Header title="Photograph" img="image-header-about.png" />
    <main>
      <section class="description-section">
        <h6 class="font-bold text-xl">Hello!</h6>
        <br />
        <p>
          I'm <strong>Rafael Sales</strong> but you can call me <strong>'Sales'</strong>, a year-old product designerand front-end
          developer who is very fond of co-creating solutions to complex day-to-day problems, uniting technology and design that
          are my two passions.
        </p>
      </section>
      <section class="finish-section pt-20 pb-10">
        <ElementSalesCreations />
      </section>
      <section>
        <div class="gallery">
          <div class="gallery__column">
            <a href="https://unsplash.com/@jeka_fe" target="_blank" class="gallery__link">
              <figure class="gallery__thumb">
                <img
                  src="https://source.unsplash.com/_cvwXhGqG-o/300x300"
                  alt="Portrait by Jessica Felicio"
                  class="gallery__image"
                />
                <figcaption class="gallery__caption">Portrait by Jessica Felicio</figcaption>
              </figure>
            </a>

            <a href="https://unsplash.com/@oladimeg" target="_blank" class="gallery__link">
              <figure class="gallery__thumb">
                <img
                  src="https://source.unsplash.com/AHBvAIVqk64/300x500"
                  alt="Portrait by Oladimeji Odunsi"
                  class="gallery__image"
                />
                <figcaption class="gallery__caption">Portrait by Oladimeji Odunsi</figcaption>
              </figure>
            </a>

            <a href="https://unsplash.com/@a2eorigins" target="_blank" class="gallery__link">
              <figure class="gallery__thumb">
                <img src="https://source.unsplash.com/VLPLo-GtrIE/300x300" alt="Portrait by Alex Perez" class="gallery__image" />
                <figcaption class="gallery__caption">Portrait by Alex Perez</figcaption>
              </figure>
            </a>
          </div>

          <div class="gallery__column">
            <a href="https://unsplash.com/@noahbuscher" target="_blank" class="gallery__link">
              <figure class="gallery__thumb">
                <img
                  src="https://source.unsplash.com/AR7aumwKr2s/300x300"
                  alt="Portrait by Noah Buscher"
                  class="gallery__image"
                />
                <figcaption class="gallery__caption">Portrait by Noah Buscher</figcaption>
              </figure>
            </a>

            <a href="https://unsplash.com/@von_co" target="_blank" class="gallery__link">
              <figure class="gallery__thumb">
                <img
                  src="https://source.unsplash.com/dnL6ZIpht2s/300x300"
                  alt="Portrait by Ivana Cajina"
                  class="gallery__image"
                />
                <figcaption class="gallery__caption">Portrait by Ivana Cajina</figcaption>
              </figure>
            </a>

            <a href="https://unsplash.com/@samburriss" target="_blank" class="gallery__link">
              <figure class="gallery__thumb">
                <img src="https://source.unsplash.com/tV_1sC603zA/300x500" alt="Portrait by Sam Burriss" class="gallery__image" />
                <figcaption class="gallery__caption">Portrait by Sam Burriss</figcaption>
              </figure>
            </a>
          </div>

          <div class="gallery__column">
            <a href="https://unsplash.com/@marilezhava" target="_blank" class="gallery__link">
              <figure class="gallery__thumb">
                <img
                  src="https://source.unsplash.com/Xm9-vA_bhm0/300x500"
                  alt="Portrait by Mari Lezhava"
                  class="gallery__image"
                />
                <figcaption class="gallery__caption">Portrait by Mari Lezhava</figcaption>
              </figure>
            </a>

            <a href="https://unsplash.com/@ethanhaddox" target="_blank" class="gallery__link">
              <figure class="gallery__thumb">
                <img
                  src="https://source.unsplash.com/NTjSR3zYpsY/300x300"
                  alt="Portrait by Ethan Haddox"
                  class="gallery__image"
                />
                <figcaption class="gallery__caption">Portrait by Ethan Haddox</figcaption>
              </figure>
            </a>

            <a href="https://unsplash.com/@mr_geshani" target="_blank" class="gallery__link">
              <figure class="gallery__thumb">
                <img
                  src="https://source.unsplash.com/2JH8d3ChNec/300x300"
                  alt="Portrait by Amir Geshani"
                  class="gallery__image"
                />
                <figcaption class="gallery__caption">Portrait by Amir Geshani</figcaption>
              </figure>
            </a>
          </div>

          <div class="gallery__column">
            <a href="https://unsplash.com/@frxgui" target="_blank" class="gallery__link">
              <figure class="gallery__thumb">
                <img
                  src="https://source.unsplash.com/FQhLLehm4dk/300x300"
                  alt="Portrait by Guilian Fremaux"
                  class="gallery__image"
                />
                <figcaption class="gallery__caption">Portrait by Guilian Fremaux</figcaption>
              </figure>
            </a>

            <a href="https://unsplash.com/@majestical_jasmin" target="_blank" class="gallery__link">
              <figure class="gallery__thumb">
                <img src="https://source.unsplash.com/OQd9zONSx7s/300x300" alt="Portrait by Jasmin Chew" class="gallery__image" />
                <figcaption class="gallery__caption">Portrait by Jasmin Chew</figcaption>
              </figure>
            </a>

            <a href="https://unsplash.com/@dimadallacqua" target="_blank" class="gallery__link">
              <figure class="gallery__thumb">
                <img
                  src="https://source.unsplash.com/XZkEhowjx8k/300x500"
                  alt="Portrait by Dima DallAcqua"
                  class="gallery__image"
                />
                <figcaption class="gallery__caption">Portrait by Dima DallAcqua</figcaption>
              </figure>
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { isEditModeGeneral } from '@/plugins/helper.js'
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutPage',
  data() {
    return {
      story: { content: {} },
      age: 0,
      designStart: 0,
      techStart: 0,
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
  mounted() {
    isEditModeGeneral(this)
    this.datasInfo()
  },
  methods: {
    datasInfo(): void {
      this.age =
        parseInt(this.$dayjs().format('MM')) < 8
          ? parseInt(this.$dayjs().format('YYYY')) - 1993 - 1
          : parseInt(this.$dayjs().format('YYYY')) - 1993
      this.designStart = parseInt(this.$dayjs().format('YYYY')) - 2009
      this.techStart = parseInt(this.$dayjs().format('YYYY')) - 2013
    },
  },
})
</script>

<style lang="postcss">
.gallery {
  display: flex;
  padding: 2px;
  transition: 0.3s;
}
.gallery:hover .gallery__image {
  filter: grayscale(1);
}
.gallery__column {
  display: flex;
  flex-direction: column;
  width: 25%;
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
