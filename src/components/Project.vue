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
        <input type="email" name="email" placeholder="Email...">
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
  grid-template: 1fr / 1fr 1.1fr .9fr;
  grid-template-areas: "imageContent features contact";
}

.image-content {
  grid-area: imageContent;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.features-content {
  grid-area: features;
  background: grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 3.5em;
    margin-bottom: 1.4rem;
  }

  li {
    font-size: 1.8em;
    margin-bottom: .3rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.contact-form {
  grid-area: contact;
  background: grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    p {
      font-size: 1.8em;
    }

    input {
      background: transparent;
      border: 4px solid white;
      width: 100%;
      font-size: 1.4em;
      padding: .6em 0 .6em .8em;
      margin: 1.4rem 0;
      color: white;
    }

    ::placeholder {
      color: white;
    }

    button {
      background: white;
      border: none;
      color: black;
      font-size: 1.4em;
      padding: .4em .8em;
    }
  }
}

</style>