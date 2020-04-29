<template>
  <footer class="contact">
    <div class="wrapper">
      <button class="contact-button" @click="copy('contact@mobilemvp.com')">{{ text }}</button>
      <p v-if="showInfo">Email copied to clipboard</p>

      <div class="stores">
        <a class="link" href="#">
          <img src="../assets/images/Google_Play_Store_badge.svg" alt="Google Play Badge">
        </a>
        <a class="link" href="#">
          <img src="../assets/images/App_Store_Badge.svg" alt="Apple App Store Badge">
        </a>
      </div>

      <div class="social">
        <a class="link" href="#">
          <img src="../assets/images/yt.png" alt="YouTube icon">
        </a>
        <a class="link" href="#">
          <img src="../assets/images/ig.png" alt="Instagram icon">
        </a>
      </div>

    </div>
    <img class="bottom-bg" src="../assets/images/bottomPath.svg" alt="">
  </footer>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      showInfo: false,
      text: 'Email me'
    }
  },
  methods: {
    copy(str) {
      const el = document.createElement('textarea');

      el.value = str;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      
      this.text = str;
      this.showInfo = true;

      setTimeout(() => {
        this.showInfo = false
      }, 3000);
    }
  }
}
</script>

<style lang="scss" scoped>

.contact {
  position: relative;
}

.wrapper {
  height: 100%;
  padding: 3rem .5rem;
  text-align: center;
  position: relative;
  z-index: 10;

  p {
    margin-top: .5rem;
    font-size: .7rem;
  }

  @media screen and (orientation: landscape) {
    padding: 1rem .5rem;
  }

  @media screen and (min-width: 1024px) and (orientation: landscape) {
    padding: 2rem .5rem;
  }
}

.bottom-bg {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  user-select: none;
}

.social {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);

  a:first-child {
    margin-right: 1.5rem;
  }

  img {
    height: 5rem;
  }

  @media screen and (orientation: landscape) {
    top: 50%;
    left: 80%;

    a:first-child {
      margin-right: .5rem;
    }

    img {
      height: 7rem;
    }
  }
}

.stores {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  a:first-child {
    margin-bottom: .5rem;
  }

  img {
    width: 12rem;
  }

  @media screen and (orientation: landscape) {
    left: 20%;
  }
}

// override global styles

.contact-button {
  width: 15rem;
}
</style>