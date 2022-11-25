<template>
  <div id="work-page">
    <SharedHeader title="Work" img="image-header-work.png" />
    <main>
      <section class="description-section">
        <p>
          Here you will find some projects I've done throughout my professional career, from
          <strong>UX research</strong> projects, <strong>UI design</strong> projects aimed at interfaces and even
          <strong>motion design</strong> aimed at product advertisements. I believe we can use design as a gateway to translating
          problems into humanistic and empowering opportunities.
        </p>
      </section>
      <section class="projects-section">
        <h2 class="text-5xl font-black py-5">Projects</h2>
        <!-- <div class="last-projects">
          <CardProject v-for="(project, key) in projects" :key="`project--${key}`" :project="project" />
        </div> -->
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'WorkPage',
}
</script>