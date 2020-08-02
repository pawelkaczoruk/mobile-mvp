<template>
  <footer class="contact bg-img">
    <div class="overlay">

      <div class="wrapper">
        <button class="contact-button" @click="copy('contact@mobilemvp.app')">{{ text }}</button>
        <p v-if="showInfo">Email copied to clipboard</p>

        <div class="stores">
          <a 
            class="link" 
            target="_blank" 
            rel="noopener"
            href="https://play.google.com/store/apps/developer?id=Rafal+Bednarczuk">
            <img src="../assets/images/Google_Play_Store_badge.svg" alt="Google Play Badge">
          </a>
        </div>

        <div class="social">
          <a 
            class="link" 
            target="_blank" 
            rel="noopener"
            href="https://www.youtube.com/c/mobilemvpapp/">
            <img src="../assets/images/yt.png" alt="YouTube icon">
          </a>
          <a 
            class="link" 
            target="_blank" 
            rel="noopener"
            href="https://www.instagram.com/mobilemvpapp/">
            <img src="../assets/images/ig.png" alt="Instagram icon">
          </a>
        </div>
      </div>

      <img 
        ref="bg"
        @load="resizeCanvas()" 
        class="bottom-bg" 
        src="../assets/images/bottomPath.svg" 
        alt="">

      <canvas
        ref="canvas"
        :height="canvas.height"
        :width="canvas.width">
      </canvas>  

    </div>
  </footer>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      showInfo: false,
      text: 'Email me',
      canvas: {
        height: 0,
        width: 0
      }
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
    },

    resizeCanvas() {
      this.canvas.height = this.$refs.bg.clientHeight;
      this.canvas.width = this.$refs.bg.clientWidth;

      const that = this;

      this.$nextTick(() => {
        that.draw();
      });
    },

    draw() {
      const canvas = this.$refs.canvas,
            ctx = canvas.getContext('2d'),
            maxVel = {
              x: canvas.width / 5000,
              y: canvas.width / 6000,
            };
      let size;
      let vel = {
        x: maxVel.x,
        y: 0
      };
      let pos = {
        x: 0,
        y: canvas.height / 7
      };

      if(ctx === null) return;

      function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(pos.x, pos.y);
        ctx.rotate(vel.y*60*Math.PI/180);
        ctx.translate(-pos.x, -pos.y);
        ctx.drawImage(img, pos.x, pos.y, size.x, size.y);
        ctx.restore();

        if(pos.x >= canvas.width) pos.x = 0 - size.x;
        if(pos.y + size.y*1/3 < canvas.height / 2 && pos.y >= 0) {
          vel.y = vel.y + 0.001 * maxVel.y * Math.random();
        } 
        if(pos.y > canvas.height / 2 - size.y*1/3 && pos.y <= canvas.height) {
          vel.y = vel.y - 0.001 * maxVel.y * Math.random();
        }

        const multiplier = Math.random() > 0.4 ? 1 : 0.8;
        pos.x += vel.x * multiplier;
        pos.y += vel.y;

        if(pos.y <= 0) {
          pos.y = 0;
        } else if(pos.y >= canvas.height) {
          pos.y = canvas.height;
        } else if(pos.y + size.y/6 == 0) {
          vel.y = maxVel.y;
        }

        requestAnimationFrame(update);
      }

      const img = new Image();
      img.src = require('@/assets/images/boat_vector.svg');
      
      img.addEventListener('load', () => {
        size = {
          x: canvas.height * 3/5 * 201 / 124,
          y: canvas.height * 3/5
        };

        update();
      });
    }
  },
  mounted() {
    window.addEventListener('resize', this.resizeCanvas, false);
  }
}
</script>

<style lang="scss" scoped>

.contact {
  position: relative;
}

.overlay {
  width: 100%;
  height: 100%;
  background: rgba(0, 18, 32, .9);
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

canvas {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;
}

.contact-button {
  width: 15rem;
}

</style>
