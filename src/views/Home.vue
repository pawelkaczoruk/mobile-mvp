<template>
  <main class="home">

    <full-page ref="fullpage" :options="options" id="fullpage">
      <div 
        data-anchor="banner"
        class="section">
        <Banner 
          class="fullpage" 
          @move-next="$refs.fullpage.api.moveSectionDown()" />
      </div>
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
        <Contact class="fullpage" />
      </div>
    </full-page>

  </main>
</template>

<script>
import Project from '../components/Project'
import Contact from '../components/Contact'
import Banner from '../components/Banner'

export default {
  name: 'Home',
  components: {
    Project,
    Contact,
    Banner
  },
  props: ['apps'],
  data() {
    return {
      options: {
        licenseKey: '^IFcycI&u3',
        menu: '#menu',
        navigation: true,
        navigationPosition: 'right',
        lockAnchors: true
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
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%
}

</style>