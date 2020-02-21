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

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
