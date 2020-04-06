<template>
  <section class="project">

    <video 
      autoplay
      muted
      loop
      :src="app.video">
      Your browser doesn't allow to open video files 
    </video>

    <div class="column">

      <div class="features-content">
        <div class="features-container">
          <h2>{{ app.name }}</h2>
          <ul>
            <li :key="i" v-for="(feature, i) in app.features">{{ feature }}</li>
          </ul>
        </div>
      </div>

      <div class="contact-container">
        <form v-if="false">
          <h2>Get in touch with us</h2>
          <input type="email" name="email" placeholder="Your e-mail adress...">
          <button class="submit">SEND!</button>
        </form>
        <button id="modal-btn">Get in touch</button>
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
  max-width: 1920px;
}

video {
  width: 100%;  
}

.column {
  margin: 0 1rem;
}

.features-content {
  margin-top: .5rem;
  min-height: 9rem;

  h2 {
    font-size: 1.25rem;
  }

  ul {
    margin-top: .5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;

    li {
      font-size: .875rem;
      line-height: 1.5em;
      list-style: disc inside none;
    }
  }
}

.contact-container {
  margin-top: 1rem;

  h2 {
    font-size: 1.125rem;
  }
/*
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
*/
  button {
    font-size: 1rem;
    height: 3rem;
    border-radius: .5rem;
    border: none;
    background: var(--light-blue);
    color: black;
    font-weight: bold;
    cursor: pointer;
  }

  #modal-btn {
    width: 100%;
    margin: 0 auto;
  }
}

</style>