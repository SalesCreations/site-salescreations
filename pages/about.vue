<template>
  <div id="about-page">
    <SharedHeader title="About" img="image-header-about.png" />
    <main>
      <section class="description-section">
        <h6 class="font-bold text-xl">Hello!</h6>
        <br />
        <p>
          I'm <strong>Rafael Sales</strong> but you can call me <strong>'Sales'</strong>, a {{ age }}-year-old product designer
          and front-end developer who is very fond of co-creating solutions to complex day-to-day problems, uniting technology and
          design that are my two passions.
        </p>
        <br />
        <p>
          I started my career in the graphic sector, when I was in the last year of high school and fell in love with the
          possibilities within the design area, right after that I entered the university in the graphic design course, today
          completing {{ designStart }} years that I started in the world of design and within the {{ designStart }} years I have
          been {{ techStart }} years working directly in the technology area.
        </p>
      </section>
      <section class="finish-section pt-20 pb-10">
        <SharedElementSalesCreations />
      </section>
      <!-- <template v-if="story.content.component" v-editable="story.content.body">
        <component :is="blok.component" v-for="blok in story.content.body" :key="blok._uid" :blok="blok" />
      </template> -->
      <section class="resume-section my-10">
        <BannersBannerCta />
      </section>
      <section class="ig-section"></section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      story: { content: {} },
      age: 0,
      designStart: 0,
      techStart: 0,
    }
  },
  mounted() {
    // isEditModeGeneral(this)
    // this.datasInfo()
  },
  methods: {
    datasInfo() {
      this.age =
        parseInt(this.$dayjs().format('MM')) < 8
          ? parseInt(this.$dayjs().format('YYYY')) - 1993 - 1
          : parseInt(this.$dayjs().format('YYYY')) - 1993
      this.designStart = parseInt(this.$dayjs().format('YYYY')) - 2009
      this.techStart = parseInt(this.$dayjs().format('YYYY')) - 2013
    },
  },
}
</script>