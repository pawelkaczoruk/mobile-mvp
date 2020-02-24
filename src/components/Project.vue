<template>
  <section class="project">

    <div class="video-content">
      <img :src="app.image" :alt="`${app.name} image`">
    </div>

    <div class="column">

      <div class="features-content">
        <div class="features-container">
          <h2>{{ app.name }}</h2>
          <ul>
            <li :key="i" v-for="(feature, i) in app.features">{{ feature }}</li>
          </ul>
        </div>
      </div>

      <div class="contact-form">
        <form>
          <p>Get in touch with us</p>
          <input type="email" name="email" placeholder="Your e-mail adress...">
          <button class="submit">SEND!</button>
        </form>
      </div>

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

  @media only screen and (min-width: 768px) {
    max-width: 1920px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.video-content {
  height: 150px;
  overflow: hidden;
  text-align: center;

  @media only screen and (min-width: 768px) {
    height: unset;
    margin-right: 2rem;

    img {
      border-radius: 1.2rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    margin-right: 3rem;
  }
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
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

  @media only screen and (min-width: 768px) {
    margin-top: 0;

    h2 {
      text-align: left;
    }

    ul {
      margin-right: 0;
    }

    .features-container {
      background: var(--second-background-color);
      max-width: 400px;
      height: calc(500px - 2rem - 120px);
      padding: 1rem 2rem;
      border-radius: 1.2rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    .features-container {
      max-width: 500px;
      height: calc(500px - 3rem - 152px);
      padding: 2rem 3rem;
      border-radius: 1.2rem;
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
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 2rem;
    
    form {
      background: var(--second-background-color);
      max-width: 400px;
      padding: 1rem 2rem;
      border-radius: 1.2rem;

      p {
        text-align: left;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 3rem;

    form {
      max-width: 500px;
      padding: 2rem 3rem;
    }
  }
}

</style>