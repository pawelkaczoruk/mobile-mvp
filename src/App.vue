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
          name: 'MVP APP 1',
          features: [
            'feature 1',
            'feature 2',
            'feature 3',
            'feature 4',
          ],
          image: 'https://via.placeholder.com/300x500.png'
        },
        {
          name: 'MVP APP 2',
          features: [
            'feature 1',
            'feature 2',
          ],
          image: 'https://via.placeholder.com/300x500.png'
        },
        {
          name: 'MVP APP 3',
          features: [
            'feature 1',
            'feature 2',
            'feature 3',
          ],
          image: 'https://via.placeholder.com/300x500.png'
        }
      ]
    }
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

</style>
