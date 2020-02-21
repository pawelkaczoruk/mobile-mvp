<template>
  <section class="project">
    <div class="image-content">
      <img src="https://via.placeholder.com/300x500.png" alt="">
    </div>
    <div class="features-content">
      <h2>MVP APP</h2>
      <ul>
        <li>Some feature</li>
        <li>Some feature</li>
        <li>Some feature</li>
        <li>Some feature</li>
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
  name: 'Project'
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