<template>
  <section class="project">

    <div class="video-container">
      <video 
        data-keepplaying
        autoplay
        muted
        loop
        :src="app.video">
        Your browser doesn't allow to open video files 
      </video>

      <div class="stores">
        <a 
          class="link" 
          target="_blank" 
          rel="noopener"
          href="#"><img src="../assets/images/Google_Play_Store_badge.svg" alt="Google Play Badge"></a>
        <a 
          class="link" 
          target="_blank" 
          rel="noopener"
          href="#"><img src="../assets/images/App_Store_Badge.svg" alt="Apple App Store Badge"></a>
      </div>
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

      <div class="contact-container">
        <button class="contact-button" @click="$emit('scroll-down')">Get in touch</button>
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
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media screen and (orientation: landscape) {
    flex-direction: row;
  }
}

.video-container {
  position: relative;

  video {
    width: 100%;
  }

  @media screen and (max-aspect-ratio: 1/1) and (min-aspect-ratio: 8/10) and (orientation: portrait) {
    height: 75%;
    overflow: hidden;
    position: relative;

    video {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -60%);
    }
  }

  @media screen and (min-width: 500px) and (orientation: landscape) {
    video {
      width: auto;
      height: 100vh;
      height: calc(var(--vh, 1vh) * 100);
    }
    
  }
}

.column {
  margin: 0 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.features-content {
  margin-top: 1rem;
  flex: 1;

  h2 {
    font-size: 1.25rem;
  }

  ul {
    margin-top: .5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;

    li {
      font-size: .875rem;
      line-height: 1.5em;
      list-style: disc inside none;
    }

    @media screen and (max-aspect-ratio: 1/1) and (min-aspect-ratio: 10/16) and (orientation: portrait) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-aspect-ratio: 1024/600) and (min-aspect-ratio: 1/1) and (orientation: landscape) {
      grid-template-columns: 1fr;
      grid-row-gap: .3rem;
    }

    @media screen and (min-height: 560px) and (max-aspect-ratio: 1366/600) and (min-aspect-ratio: 1024/600) and (orientation: landscape) {
      grid-row-gap: .2rem;
    }
  }
}

.contact-container {
  margin: 1rem 0;
}

.stores {
  position: absolute;
  z-index: 10;
  top: 1%;
  left: 1%;
  transform: translate(-1%, -1%);

  img {
    width: 5rem;
    margin: 0;
    vertical-align: top;
  }

  a:first-child {
    margin-bottom: .1rem;
  }
}

// override global styles
.link {
  @media screen and (min-width: 1024px) {
    &:hover {
      transform: scale(1.05);
    }
  }
}

</style>