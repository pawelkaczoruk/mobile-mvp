<template>
  <div class="home">

    <Project 
      class="fullpage"
      :key="i"
      v-for="(el,i) in apps"
      :app="el"
      @scroll-to-contact="scrollToSection(offsets.length - 1)" />

    <ContactForm class="fullpage" />

    <div class="sections-menu">
      <button
        class="menu-point"
        :class="{active: activeSection == index}"
        @click="scrollToSection(index)"
        @touchstart="scrollToSection(index)"
        v-for="(offset,index) in offsets"
        :key="index">
      </button>
    </div>

    

  </div>
</template>

<script>
import Project from '../components/Project'
import ContactForm from '../components/ContactForm'

export default {
  name: 'Home',
  props: ['apps'],
  components: {
    Project,
    ContactForm
  },
  data() {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0
    }
  },
  methods: {
    calculateSectionOffsets() {
      const sections = document.getElementsByClassName('fullpage');
      
      for(let i=0; i<sections.length; i++) {
        this.offsets.push(sections[i].offsetTop);
      }
    },

    scrollToSection(id, force = false) {
      if(this.inMove && !force) return false;

      this.activeSection = id;
      this.inMove = true;

      document.getElementsByClassName('fullpage')[id].scrollIntoView({
        behavior: 'smooth'
      });

      setTimeout(() => {
        this.inMove = false;
      }, 400);
    },

    handleMouseWheel(e) {
      if(e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if(e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }

      e.preventDefault();
      return false;
    },

    moveDown() {
      this.inMove = true;
      this.activeSection--;

      if(this.activeSection < 0) this.activeSection = this.offsets.length - 1;

      this.scrollToSection(this.activeSection, true);
    },

    moveUp() {
      this.inMove = true;
      this.activeSection++;
      
      if(this.activeSection > this.offsets.length - 1) this.activeSection = 0;

      this.scrollToSection(this.activeSection, true);
    },

    touchStart(e) {
      let ignore = [];
      const ignore1 = document.getElementsByTagName('input'),
            ignore2 = document.getElementsByTagName('label'),
            ignore3 = document.getElementsByTagName('textarea');
      
      ignore = [
        ...ignore1,
        ...ignore2,
        ...ignore3
      ];

      for(let i=0; i< ignore.length; i++) {
        if(e.target === ignore[i] || ignore[i].contains(e.target)) return;
      }
      
      e.preventDefault();

      this.touchStartY = e.touches[0].clientY;
    },

    touchMove(e) {
      if(this.inMove) return false;
      e.preventDefault();

      const currentY = e.touches[0].clientY;

      this.touchStartY < currentY ? this.moveDown() : this.moveUp();

      this.touchStartY = 0;
      return false;
    }
  },
  mounted() {
    this.calculateSectionOffsets();
    
    window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // firefox
    window.addEventListener('mousewheel', this.handleMouseWheel, {
      passive: false
    }); // other browsers
    window.addEventListener('touchstart', this.touchStart, {
      passive: false
    }); // mobile devices
    window.addEventListener('touchmove', this.touchMove, {
      passive: false
    }); // mobile devices


  },
  destroyed() {
    window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // firefox
    window.removeEventListener('mousewheel', this.handleMouseWheel, {
        passive: false
    }); // other browsers
    window.removeEventListener('touchstart', this.touchStart); // mobile devices
    window.removeEventListener('touchmove', this.touchMove); // mobile devices
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

.sections-menu {
  position: fixed;
  right: .4rem;
  top: 50%;
  transform: translateY(-50%);

  .menu-point {
    width: .8rem;
    height: .8rem;
    background: var(--dark-blue);
    display: block;
    margin: 1rem 0;
    outline: none;
    border: none;
    border-radius: 50%;
    transition: .4s ease all;
    cursor: pointer;

    &.active {
      background: var(--light-blue);
      transform: scale(1.5);
    }
  } 
}

</style>