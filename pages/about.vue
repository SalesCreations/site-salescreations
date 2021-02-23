<template>
  <div id="about-page">
    <Header title="About" img="image-header-about.png" />
    <main>
      <section class="description-section">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Diam donec adipiscing tristique risus nec. Nibh mauris cursus mattis molestie a iaculis at erat. Turpis egestas
          sed tempus urna et pharetra pharetra massa massa. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.
          Consectetur a erat nam at lectus urna duis convallis. Placerat duis ultricies lacus sed. Eget gravida cum sociis natoque
          penatibus et magnis dis. Semper auctor neque vitae tempus quam. Eget est lorem ipsum dolor sit amet. Diam quis enim
          lobortis scelerisque fermentum. Condimentum id venenatis a condimentum vitae. Ut tortor pretium viverra suspendisse
          potenti nullam ac. Interdum posuere lorem ipsum dolor sit amet consectetur.
        </p>
        <br />
        <p>
          In nulla posuere sollicitudin aliquam ultrices sagittis. Odio morbi quis commodo odio aenean sed adipiscing. Congue
          quisque egestas diam in arcu cursus euismod. Orci porta non pulvinar neque. Tempor commodo ullamcorper a lacus. Donec
          enim diam vulputate ut pharetra sit amet. Tristique senectus et netus et malesuada fames ac turpis. Nisl suscipit
          adipiscing bibendum est ultricies. Semper risus in hendrerit gravida rutrum quisque. Et netus et malesuada fames ac.
          Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Lectus magna fringilla urna porttitor rhoncus. Nunc vel
          risus commodo viverra maecenas accumsan lacus vel.
        </p>
      </section>
      <section class="finish-section pt-20 pb-10">
        <ElementSalesCreations />
      </section>
      <section class="skills-section">
        <h2 class="text-5xl font-black py-5">Skills</h2>
        <div class="list-skill grid gap-5 grid-cols-10">
          <div v-for="(skill, key) in skills" :key="`${key}_${skill.sys.id}`" class="col-span-5 flex flex-wrap content-center">
            <CardSkill :skill="skill" />
          </div>
        </div>
      </section>
      <section class="timeline-section py-5">
        <h2 class="text-5xl font-black py-5">Timeline</h2>
        <Timeline />
      </section>
      <section class="resume-section my-10">
        <BannerCta />
      </section>
      <section class="ig-section"></section>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutPage',

  async fetch({ store, error }) {
    try {
      await store.dispatch('skills/fetchSkills')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time, please try again',
      })
    }
  },

  head() {
    return {
      title: 'About Sales//Creations',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },

  computed: mapState({
    skills: (state) => state.skills.skills.items,
  }),
})
</script>
