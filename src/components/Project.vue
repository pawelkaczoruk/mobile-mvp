<template>
  <section class="project">
    <div class="image-content">
      <img :src="app.image" :alt="`${app.name} image`">
    </div>
    <div class="features-content">
      <h2>{{ app.name }}</h2>
      <ul>
        <li :key="i" v-for="(feature, i) in app.features">{{ feature }}</li>
      </ul>
    </div>
    <div class="contact-form">
      <form>
        <p>GET TOUCH WITH US</p>
        <input type="email" name="email" placeholder="Email">
        <button>SEND</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Project',
  props: ['app']
}
</script>

<style lang="scss" scoped>

.project {
  display: grid;
  grid-template: 1fr / repeat(3, 1fr);
  grid-template-areas: "imageContent features contact";
}

.image-content {
  grid-area: imageContent;
  background: black;
  overflow: hidden;
}

.features-content {
  grid-area: features;
  background: grey; 
}

.contact-form {
  grid-area: contact;
  background: pink; 
}

</style>