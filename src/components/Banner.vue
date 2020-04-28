<template>
  <header class="banner">

    <div class="overlay">
      <div class="wrapper">
        <div><h1>MOBILE APP DEVELOPMENT</h1></div>
        <div><h2>RAPID <span>&bull;</span> STUNNING <span>&bull;</span> PERFECT</h2> </div>       
        <div class="arrow-icon" @click="$emit('move-next')">
          <img src="../assets/images/arrows.svg" alt="arrow icon">
        </div>
      </div>
    </div>

  </header>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style lang="scss" scoped>

.banner {
  background-image: url('../assets/images/hero.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.overlay {
  width: 100%;
  height: 100%;
  background: var(--light-blue-opaque);
}

.wrapper {
  height: 100%;
  width: 100%;
  padding: 0 1rem;
  position: relative;

  div:first-child {
    width: 100%;
    position: absolute;
    top: 20%;
    left: 0;
    transform: translate(0, -20%);
  }

  div:nth-child(2) {
    width: 100%;
    position: absolute;
    top: 45%;
    left: 0;
    transform: translate(0, -45%);
  }

  h1 {
    font-size: 2.2rem;
    text-align: center; 
  }

  h2 {
    font-weight: normal;
    font-size: 1.2rem;
    text-align: center;
  }

  span {
    font-weight: bold;
    color: var(--orange);
  }

  .arrow-icon {
    user-select: none;
    position: absolute;
    top: 90%;
    left: 50%;    
    width: 1.5rem;
    transform: translate(-50%, -90%);
    cursor: pointer;
    animation-name: flow;
    animation-duration: 6s;
    animation-iteration-count: infinite;

    img {
      width: 100%;
    }    
  }

  @keyframes flow {
    0% { top: 90%; }
    35% { top: 93%; }
    100% { top: 90%; }
  }
}

</style>