<template>
  <div id="app">
    <Home :apps="apps" />
  </div>
</template>

<script>
import Home from './views/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  data() {
    return {
      apps: [
        {
          name: 'MVP — Minimum Viable Product',
          features: [
            'stunning design and animations',
            'video showcase of app',
            'implementation of key screens',
            'release on Apple App Store & Google Play',
          ],
          video: require('@/assets/videos/app2.mp4'),
          links: {
            appStore: 'https://play.google.com/store/apps/developer?id=Rafal+Bednarczuk',
            googlePlay:'https://play.google.com/store/apps/developer?id=Rafal+Bednarczuk'
          }
        },
        {
          name: 'Fully-functional mobile application',
          features: [
            'implementation of whole app',
            'backend services and infrastructure',
            'stunning design and animations',
            'promotional video',
            'release on Apple App Store & Google Play',
          ],
          video: require('@/assets/videos/app1.mp4'),
          links: {
            appStore: 'https://play.google.com/store/apps/developer?id=Rafal+Bednarczuk',
            googlePlay:'https://play.google.com/store/apps/developer?id=Rafal+Bednarczuk'
          }
        }
      ]
    }
  },
  created() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

  }
}
</script>

<style lang="scss">
@import url('./assets/styles/variables.scss');
@import url('./assets/styles/reset.scss');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body #fp-nav {
  margin-right: -10px;

  ul li {
    margin: .75rem;
    margin-right: 0;
  }

  ul li a span {
    background: rgba(255, 255, 255, .6);
  }

  ul li a.active span {
    background: white;
  }
}

.fp-viewing-banner #fp-nav{
   display: none;
}

.contact-button {
  font-size: 1rem;
  height: 3rem;
  border-radius: .5rem;
  border: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  margin: 0 auto;
  background: var(--light-blue);

  @media screen and (min-width: 1024px) {
    transition: background .2s ease;

    &:hover {
      background: var(--hover-color);
    }
  }
}

.link {
  user-select: none;
  display: block;

  @media screen and (min-width: 1024px) {
    transition: transform .2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
}

.bg-img {
  background-image: url('./assets/images/hero-s.png');
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 760px) {
    background-image: url('./assets/images/hero-m.png');
  }

  @media screen and (min-width: 1366px) {
    background-image: url('./assets/images/hero-l.png');
  }
}

</style>
