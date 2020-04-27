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
          id: 'MVPapp1',
          name: 'MVP APP 1',
          features: [
            'feature 1',
            'feature 2',
            'feature 3',
            'feature 4',
            'feature 5',
            'feature 6',
            'feature 7',
            'feature 8',
            'feature 9',
            'feature 10',
            'feature 11'
          ],
          video: require('@/assets/videos/app2.mp4')
        },
        {
          id: 'MVPapp2',
          name: 'MVP APP 2',
          features: [
            'feature 1',
            'feature 2'
          ],
          video: require('@/assets/videos/app1.mp4')
        },
        {
          id: 'MVPapp3',
          name: 'MVP APP 3',
          features: [
            'feature 1',
            'feature 2',
            'feature 3'
          ],
          video: require('@/assets/videos/app2.mp4')
        }
      ]
    }
  },
  created() {
    //          STYLES
    // get viewport height, multiple it to get value for vh unit. Set the value in --vh custom property
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    // same script when window is resized
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

</style>
