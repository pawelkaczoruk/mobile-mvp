<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './views/Home'

export default {
  name: 'App',
  components: {
    Home
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
