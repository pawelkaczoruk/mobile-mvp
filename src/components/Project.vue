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
        <p>Get in touch with us</p>
        <input type="email" name="email" placeholder="Your e-mail adress...">
        <button class="submit">SEND!</button>
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
  max-width: 300px;
  margin: 0 auto;
}

.image-content {
  height: 150px;
  overflow: hidden;
  text-align: center;
}

.features-content {
  margin-top: 2em;

  h2 {
    font-size: 2rem;
    text-align: center;
  }

  ul {
    margin: 1rem 2.5rem 0 2.5rem;

    li {
      line-height: 1.5em;
    }
  }
}

.contact-form {
  margin-top: 2em;
  text-align: center;

  p {
    font-size: 1.2rem;
  }

  input {
    margin-top: 1rem;
    max-width: 250px;
    padding: 1rem;
    border-radius: 1rem;
    border: none;
    background: white;
    color: rgb(93, 93, 93);
  }

  ::placeholder {
    color: rgb(93, 93, 93);
  }

  button {
    padding: 1rem;
    margin-left: 1rem;
    border-radius: 1rem;
    border: none;
    background: var(--light-blue);
    color: black;
    font-weight: bold;
  }
}

</style>