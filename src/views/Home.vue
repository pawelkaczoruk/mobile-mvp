<template>
  <div class="home">

    <full-page ref="fullpage" :options="options" id="fullpage">
      <div
        class="section"
        :data-anchor="el.name.replace(/\s/g, '_')"
        :key="i"
        v-for="(el, i) in apps">
        <Project 
        class="fullpage"
        :app="el" 
        @scroll-down="$refs.fullpage.api.moveTo('contact')" />
      </div>
      <div 
        class="section"
        data-anchor="contact">
        <ContactForm class="fullpage" />
      </div>
    </full-page>

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
  props: ['apps'],
  data() {
    return {
      options: {
        licenseKey: '^IFcycI&u3',
        menu: '#menu',
        navigation: true,
        navigationPosition: 'right'
      }
    }
  }
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