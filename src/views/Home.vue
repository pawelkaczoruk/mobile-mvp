<template>
  <div class="home">

    <Project 
      class="fullpage"
      :key="i"
      v-for="(el,i) in apps"
      :app="el"/>
    <ContactForm class="fullpage" />

  </div>
</template>

<script>
import Project from '../components/Project'
import ContactForm from '../components/ContactForm'

export default {
  name: 'Home',
  components: {
    Project,
    ContactForm
  },
  props: ['apps']
}
</script>

<style lang="scss" scoped>

.home {
  background: var(--main-background-color);
}

.fullpage {
  height: 100vh; // fallback for browsers that do not support custom properties
  height: calc(var(--vh, 1vh) * 100);
  width: 100%
}

</style>