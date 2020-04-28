<template>
  <footer class="contact">
    <div class="wrapper">
      <button>Email me</button>

      <div class="stores">
        <a href="#"><img src="../assets/images/Google_Play_Store_badge.svg" alt="Google Play Badge"></a>
        <a href="#"><img src="../assets/images/App_Store_Badge.svg" alt="Apple App Store Badge"></a>
      </div>  

      <div class="social">
        <a href="#"><img src="../assets/images/yt.png" alt="YouTube icon"></a>
        <a href="#"><img src="../assets/images/ig.png" alt="Instagram icon"></a>
      </div>

    </div>
    <img class="bottom-bg" src="../assets/images/bottomPath.png" alt="">
  </footer>
</template>

<script>
export default {
  name: 'Contact',
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

button {
  font-size: 1rem;
  height: 3rem;
  border-radius: .5rem;
  border: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
  width: 15rem;
  margin: 0 auto;
  background: var(--light-blue);

  @media screen and (min-width: 1024px) {
    transition: background .2s ease;

    &:hover {
      background: var(--hover-color);
    }
  }
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
  z-index: 20;

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

a {
  user-select: none;
  display: block;

  @media screen and (min-width: 1024px) {
    transition: transform .2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
}

</style>